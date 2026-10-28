// Clovity Federal - shared page behavior
document.addEventListener('DOMContentLoaded', () => {
  // Brand line icons (icons.js) replace their Lucide placeholders first; Lucide then draws the remaining UI glyphs
  if (window.CF_ICONS) {
    document.querySelectorAll('[data-lucide]').forEach(el => {
      const art = window.CF_ICONS[el.dataset.lucide];
      if (!art) return;
      const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      // Cropped to the drawing area (the art keeps a 4px margin on the 48px grid) so the icons fill their box
      svg.setAttribute('viewBox', '3 3 42 42');
      svg.setAttribute('fill', 'none');
      svg.setAttribute('stroke', 'currentColor');
      svg.setAttribute('stroke-linecap', 'round');
      svg.setAttribute('stroke-linejoin', 'round');
      svg.setAttribute('aria-hidden', 'true');
      svg.setAttribute('class', `${el.getAttribute('class') || ''} cf-icon`.trim());
      const tone = Object.keys(window.CF_ICON_TONES || {}).find(t => window.CF_ICON_TONES[t].includes(el.dataset.lucide));
      if (tone) svg.dataset.tone = tone;
      svg.dataset.icon = el.dataset.lucide;
      svg.innerHTML = art;
      el.replaceWith(svg);
    });
    // Coloured tiles and circles take the five colours in turn within each section, so cards side by side or stacked
    // in a grid never share a colour. The plain warning icon keeps its amber.
    const palette = ['blue', 'teal', 'violet', 'amber', 'green'];
    const tiled = ':is(.icon-tile, .row-icon, .tl-dot, span.grid.h-12, li) > svg.cf-icon:not([data-icon="circle-alert"])';
    document.querySelectorAll('section').forEach(section => {
      section.querySelectorAll(tiled).forEach((svg, i) => { svg.dataset.tone = palette[i % palette.length]; });
    });
  }
  if (window.lucide) lucide.createIcons();

  // Header turns solid after scroll. Pages without a dark hero start solid.
  const header = document.getElementById('site-header');
  if (header) {
    const solid = header.dataset.solid === 'true';
    const update = () => header.classList.toggle('is-scrolled', solid || window.scrollY > 40);
    update();
    window.addEventListener('scroll', update, { passive: true });
  }

  // Submenu links (desktop dropdowns and mobile groups) for the open page keep their hover look. On a page whose
  // sections are linked by #hash, the matching section wins; without a hash, the plain page link does.
  const subLinks = document.querySelectorAll('#site-header .dd-item, #mobile-menu .m-group a');
  const markCurrent = () => {
    const page = location.pathname.split('/').pop() || 'index.html';
    const onPage = [...subLinks].filter(a => (new URL(a.href).pathname.split('/').pop() || 'index.html') === page);
    const hashed = onPage.filter(a => a.hash && a.hash === location.hash);
    const current = hashed.length ? hashed : onPage.filter(a => !a.hash);
    subLinks.forEach(a => {
      const on = current.includes(a);
      a.classList.toggle('is-current', on);
      if (on) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current');
    });
  };
  markCurrent();
  window.addEventListener('hashchange', markCurrent);

  // Mobile menu: slides down from under the header over a dimmed overlay (styles in site.css)
  const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  if (menuBtn && mobileMenu) {
    const overlay = document.createElement('div');
    overlay.className = 'm-overlay';
    overlay.setAttribute('aria-hidden', 'true');
    document.body.appendChild(overlay);
    // Swap the static "hidden" for the animated closed state
    mobileMenu.classList.remove('hidden');
    mobileMenu.classList.add('m-panel');

    const setMenu = open => {
      mobileMenu.classList.toggle('is-open', open);
      overlay.classList.toggle('is-open', open);
      menuBtn.setAttribute('aria-expanded', String(open));
      menuBtn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
      menuBtn.innerHTML = `<i data-lucide="${open ? 'x' : 'menu'}" class="h-6 w-6"></i>`;
      if (window.lucide) lucide.createIcons();
      document.body.classList.toggle('overflow-hidden', open);
      // Smooth scrolling (animations.js) has to pause too, or the page keeps moving under the open menu
      if (window.lenis) open ? window.lenis.stop() : window.lenis.start();
      // Solid header while open, so the logo and icon stay readable over the hero
      if (header) header.classList.toggle('is-scrolled', open || header.dataset.solid === 'true' || window.scrollY > 40);
    };
    menuBtn.addEventListener('click', () => setMenu(!mobileMenu.classList.contains('is-open')));
    overlay.addEventListener('click', () => setMenu(false));
    mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setMenu(false)));
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && mobileMenu.classList.contains('is-open')) { setMenu(false); menuBtn.focus(); }
    });
    // Close if the window grows to desktop width, where the menu and overlay don't exist
    window.matchMedia('(min-width: 1024px)').addEventListener('change', e => { if (e.matches) setMenu(false); });
  }

  // Hero video: pause for reduced motion, and let users toggle playback
  const video = document.getElementById('hero-video');
  const videoBtn = document.getElementById('video-toggle');
  if (video) {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) video.pause();
    if (videoBtn) {
      const sync = () => {
        videoBtn.setAttribute('aria-label', video.paused ? 'Play background video' : 'Pause background video');
        videoBtn.querySelector('[data-icon="pause"]').classList.toggle('hidden', video.paused);
        videoBtn.querySelector('[data-icon="play"]').classList.toggle('hidden', !video.paused);
      };
      videoBtn.addEventListener('click', () => { video.paused ? video.play() : video.pause(); });
      video.addEventListener('play', sync);
      video.addEventListener('pause', sync);
      sync();
    }
  }

  // Tabs (used on the homepage capability section)
  document.querySelectorAll('[data-tabs]').forEach(group => {
    const buttons = group.querySelectorAll('.tab-btn');
    const panels = group.querySelectorAll('[data-panel]');
    buttons.forEach(btn => btn.addEventListener('click', () => {
      buttons.forEach(b => b.setAttribute('aria-selected', String(b === btn)));
      panels.forEach(p => p.classList.toggle('hidden', p.dataset.panel !== btn.dataset.tab));
    }));
  });


  // Who we serve accordion: clicking a collapsed tab opens it and closes the others
  document.querySelectorAll('[data-sectors]').forEach(group => {
    const items = group.querySelectorAll('.sector');
    // Desktop: tell the CSS how wide an open column ends up, so its panel is laid out once at that width
    const setOpenWidth = () => {
      const gap = parseFloat(getComputedStyle(group).columnGap) || 0;
      // Read the closed width from CSS, not from a column, whose live size is wrong while it is still animating
      const closedW = parseFloat(getComputedStyle(group).getPropertyValue('--sector-closed')) || 0;
      group.style.setProperty('--sector-open-w', `${group.clientWidth - (items.length - 1) * (closedW + gap)}px`);
    };
    setOpenWidth();
    window.addEventListener('resize', setOpenWidth);
    // Below lg the columns are replaced by a simple tab bar built from the sector names (styles in site.css)
    const bar = document.createElement('div');
    bar.className = 'sector-tabbar';
    bar.setAttribute('role', 'tablist');
    bar.setAttribute('aria-label', 'Government sectors');
    const tabs = [...items].map(item => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'sector-tabbar-btn';
      btn.setAttribute('role', 'tab');
      btn.textContent = item.querySelector('.sector-label').textContent.trim();
      btn.addEventListener('click', () => open(item));
      bar.appendChild(btn);
      return btn;
    });
    group.before(bar);

    const open = item => {
      items.forEach((i, n) => {
        const on = i === item;
        i.classList.toggle('is-active', on);
        i.querySelector('.sector-tab').setAttribute('aria-expanded', String(on));
        tabs[n].setAttribute('aria-selected', String(on));
      });
    };
    items.forEach(item => item.querySelector('.sector-tab').addEventListener('click', () => open(item)));
    open([...items].find(i => i.classList.contains('is-active')) || items[0]);
  });
  // Carousel: loops through cards with the active one centred and its neighbours faded either side (styles in site.css)
  document.querySelectorAll('[data-carousel]').forEach(car => {
    const stage = car.querySelector('.carousel-stage');
    const cards = [...stage.querySelectorAll('.carousel-card')];
    const dotsWrap = car.querySelector('[data-carousel-dots]');
    const n = cards.length;
    let active = 0;
    const dots = cards.map((card, i) => {
      const dot = document.createElement('button');
      dot.type = 'button';
      dot.className = 'carousel-dot';
      dot.setAttribute('aria-label', `Show ${card.querySelector('h3').textContent}`);
      dot.addEventListener('click', () => go(i));
      dotsWrap.appendChild(dot);
      return dot;
    });

    // Cards are stacked absolutely, so the stage takes the tallest card's height and every card matches it
    const measure = () => {
      cards.forEach(c => { c.style.height = 'auto'; });
      const h = Math.max(...cards.map(c => c.offsetHeight));
      stage.style.height = `${h}px`;
      cards.forEach(c => { c.style.height = `${h}px`; });
    };
    const layout = () => {
      const step = cards[0].offsetWidth + parseFloat(getComputedStyle(car).getPropertyValue('--cgap')) * 16;
      cards.forEach((card, i) => {
        let rel = ((i - active) % n + n) % n;
        if (rel > n / 2) rel -= n;
        const far = Math.abs(rel);
        card.style.transform = `translateX(${rel * step}px) scale(${far ? 0.88 : 1})`;
        card.style.opacity = far === 0 ? 1 : far === 1 ? 0.4 : 0;
        card.style.zIndex = 10 - far;
        card.style.pointerEvents = far > 1 ? 'none' : '';
        card.classList.toggle('is-active', far === 0);
        card.setAttribute('aria-hidden', String(far !== 0));
      });
      dots.forEach((d, i) => d.setAttribute('aria-current', String(i === active)));
    };
    const go = i => { active = (i + n) % n; layout(); };

    car.querySelector('[data-carousel-prev]').addEventListener('click', () => go(active - 1));
    car.querySelector('[data-carousel-next]').addEventListener('click', () => go(active + 1));
    cards.forEach((card, i) => card.addEventListener('click', () => { if (!dragged && i !== active) go(i); }));
    car.addEventListener('keydown', e => {
      if (e.key === 'ArrowLeft') go(active - 1);
      if (e.key === 'ArrowRight') go(active + 1);
    });
    // Swipe: a horizontal drag of 40px or more moves one card
    let startX = null, dragged = false;
    stage.addEventListener('pointerdown', e => { startX = e.clientX; dragged = false; });
    stage.addEventListener('pointerup', e => {
      if (startX === null) return;
      const dx = e.clientX - startX;
      startX = null;
      dragged = Math.abs(dx) > 40;
      if (dragged) go(active + (dx < 0 ? 1 : -1));
    });

    car.classList.add('is-ready');
    const refresh = () => { measure(); layout(); };
    refresh();
    window.addEventListener('resize', refresh);
    if (document.fonts) document.fonts.ready.then(refresh);
  });

  // Displacement slider: photos warp into each other through a small WebGL shader while the titles slide through a mask.
  // Falls back to a CSS cross-fade of the <img> stack when WebGL or the textures are unavailable.
  // Autoplays while on screen and pauses on hover or focus; reduced motion switches instantly with no autoplay.
  document.querySelectorAll('[data-wslider]').forEach(ws => {
    const imgs = [...ws.querySelectorAll('.ws-img')];
    const panels = [...ws.querySelectorAll('.ws-panel')];
    const dots = [...ws.querySelectorAll('.ws-dot')];
    const canvas = ws.querySelector('.ws-canvas');
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const delay = parseFloat(getComputedStyle(ws).getPropertyValue('--ws-ms')) || 6000;
    const duration = 1600;
    const n = imgs.length;
    let active = 0, timer = null, hovered = false, visible = false, busy = false, gl = null;

    const schedule = () => {
      clearTimeout(timer);
      ws.classList.remove('is-running');
      void ws.offsetWidth;
      if (reduce || !visible || hovered) return;
      ws.classList.add('is-running');
      timer = setTimeout(() => go(active + 1), delay);
    };
    const showText = (from, to) => {
      panels.forEach((p, i) => {
        p.classList.toggle('is-active', i === to);
        p.classList.toggle('is-leaving', i === from && from !== to);
        p.setAttribute('aria-hidden', String(i !== to));
      });
      dots.forEach((d, i) => d.setAttribute('aria-selected', String(i === to)));
      imgs.forEach((img, i) => img.classList.toggle('is-active', i === to));
    };
    const go = to => {
      to = (to + n) % n;
      if (to === active || busy) return;
      const from = active;
      active = to;
      showText(from, to);
      if (gl && !reduce) gl.transition(from, to);
      schedule();
    };

    dots.forEach((d, i) => d.addEventListener('click', () => go(i)));
    ws.addEventListener('keydown', e => {
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') { e.preventDefault(); go(active - 1); }
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') { e.preventDefault(); go(active + 1); }
    });
    let startX = null;
    ws.addEventListener('pointerdown', e => { startX = e.clientX; });
    ws.addEventListener('pointerup', e => {
      if (startX === null) return;
      const dx = e.clientX - startX;
      startX = null;
      if (Math.abs(dx) > 50) go(active + (dx < 0 ? 1 : -1));
    });
    const setHover = v => { hovered = v; schedule(); };
    ws.addEventListener('mouseenter', () => setHover(true));
    ws.addEventListener('mouseleave', () => setHover(false));
    ws.addEventListener('focusin', () => setHover(true));
    ws.addEventListener('focusout', e => { if (!ws.contains(e.relatedTarget)) setHover(false); });
    new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; schedule(); }, { threshold: 0.4 }).observe(ws);
    showText(-1, 0);

    if (!reduce) gl = setupGL();

    function setupGL() {
      const ctx = canvas.getContext('webgl', { premultipliedAlpha: false, antialias: false });
      if (!ctx) return null;
      const vs = 'attribute vec2 p; varying vec2 uv; void main(){ uv = p * .5 + .5; gl_Position = vec4(p, 0., 1.); }';
      // Value-noise fbm drives the displacement; each image is cover-fitted with its own UV scale
      const fs = `precision mediump float;
        varying vec2 uv; uniform sampler2D t1, t2; uniform vec2 s1, s2; uniform float prog;
        float h(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
        float nz(vec2 p){ vec2 i = floor(p), f = fract(p); f = f * f * (3. - 2. * f);
          return mix(mix(h(i), h(i + vec2(1, 0)), f.x), mix(h(i + vec2(0, 1)), h(i + vec2(1, 1)), f.x), f.y); }
        float fbm(vec2 p){ float v = 0., a = .5; for (int k = 0; k < 4; k++) { v += a * nz(p); p *= 2.; a *= .5; } return v; }
        vec2 cover(vec2 u, vec2 s){ return (u - .5) * s + .5; }
        void main(){
          vec2 d = vec2(fbm(uv * 3.), fbm(uv * 3. + 7.3)) - .5;
          float k = .45;
          vec4 a = texture2D(t1, cover(uv + d * prog * k, s1));
          vec4 b = texture2D(t2, cover(uv - d * (1. - prog) * k, s2));
          gl_FragColor = mix(a, b, smoothstep(.15, .85, prog));
        }`;
      const sh = (type, src) => { const o = ctx.createShader(type); ctx.shaderSource(o, src); ctx.compileShader(o); return ctx.getShaderParameter(o, ctx.COMPILE_STATUS) ? o : null; };
      const v = sh(ctx.VERTEX_SHADER, vs), f = sh(ctx.FRAGMENT_SHADER, fs);
      if (!v || !f) return null;
      const prog = ctx.createProgram();
      ctx.attachShader(prog, v); ctx.attachShader(prog, f); ctx.linkProgram(prog);
      if (!ctx.getProgramParameter(prog, ctx.LINK_STATUS)) return null;
      ctx.useProgram(prog);
      ctx.bindBuffer(ctx.ARRAY_BUFFER, ctx.createBuffer());
      ctx.bufferData(ctx.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), ctx.STATIC_DRAW);
      const loc = ctx.getAttribLocation(prog, 'p');
      ctx.enableVertexAttribArray(loc);
      ctx.vertexAttribPointer(loc, 2, ctx.FLOAT, false, 0, 0);
      const u = name => ctx.getUniformLocation(prog, name);
      ctx.uniform1i(u('t1'), 0); ctx.uniform1i(u('t2'), 1);
      ctx.pixelStorei(ctx.UNPACK_FLIP_Y_WEBGL, true);

      const textures = imgs.map(() => null);
      const load = i => new Promise(res => {
        const done = () => {
          if (!imgs[i].naturalWidth) return res(false);
          const t = ctx.createTexture();
          ctx.bindTexture(ctx.TEXTURE_2D, t);
          [ctx.TEXTURE_WRAP_S, ctx.TEXTURE_WRAP_T].forEach(p => ctx.texParameteri(ctx.TEXTURE_2D, p, ctx.CLAMP_TO_EDGE));
          ctx.texParameteri(ctx.TEXTURE_2D, ctx.TEXTURE_MIN_FILTER, ctx.LINEAR);
          try { ctx.texImage2D(ctx.TEXTURE_2D, 0, ctx.RGBA, ctx.RGBA, ctx.UNSIGNED_BYTE, imgs[i]); } catch (e) { return res(false); }
          textures[i] = { t, w: imgs[i].naturalWidth, h: imgs[i].naturalHeight };
          res(true);
        };
        imgs[i].loading = 'eager';
        if (imgs[i].complete) done();
        else {
          imgs[i].addEventListener('load', done, { once: true });
          imgs[i].addEventListener('error', () => res(false), { once: true });
        }
      });

      const scale = tex => {
        const ca = canvas.width / canvas.height, ia = tex.w / tex.h;
        return ca > ia ? [1, ia / ca] : [ca / ia, 1];
      };
      const draw = (from, to, p) => {
        const a = textures[from], b = textures[to];
        ctx.activeTexture(ctx.TEXTURE0); ctx.bindTexture(ctx.TEXTURE_2D, a.t);
        ctx.activeTexture(ctx.TEXTURE1); ctx.bindTexture(ctx.TEXTURE_2D, b.t);
        ctx.uniform2fv(u('s1'), scale(a)); ctx.uniform2fv(u('s2'), scale(b));
        ctx.uniform1f(u('prog'), p);
        ctx.drawArrays(ctx.TRIANGLE_STRIP, 0, 4);
      };
      const resize = () => {
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        canvas.width = canvas.clientWidth * dpr;
        canvas.height = canvas.clientHeight * dpr;
        ctx.viewport(0, 0, canvas.width, canvas.height);
        if (!busy && textures[active]) draw(active, active, 0);
      };

      // Use WebGL only once every texture is ready; until then (or if any fails) the cross-fade stays in charge
      Promise.all(imgs.map((_, i) => load(i))).then(ok => {
        if (ok.includes(false)) return;
        ws.classList.add('is-gl');
        resize();
        window.addEventListener('resize', resize);
      });

      return {
        transition(from, to) {
          if (!ws.classList.contains('is-gl')) return;
          busy = true;
          const t0 = performance.now();
          const ease = x => x < .5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
          const frame = now => {
            const x = Math.min((now - t0) / duration, 1);
            draw(from, to, ease(x));
            if (x < 1) requestAnimationFrame(frame); else busy = false;
          };
          requestAnimationFrame(frame);
        },
      };
    }
  });

  // Contact form: static site, so confirm locally until a backend/Jira Service Management form is wired up
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      if (!form.reportValidity()) return;
      form.classList.add('hidden');
      document.getElementById('form-success').classList.remove('hidden');
    });
  }

  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
});
