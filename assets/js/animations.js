// Clovity Federal - GSAP ScrollTrigger animations, driven by data attributes on any page:
// [data-statement] words fill in, [data-tilt] cards tilt up, [data-slide] cards slide in, [data-clip] images wipe open.
// Everything else on the site is static. Skipped entirely with reduced motion or if GSAP fails to load.
(() => {
  if (!window.gsap || !window.ScrollTrigger) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  gsap.registerPlugin(ScrollTrigger);
  document.documentElement.classList.add('gsap-on');

  // Smooth scrolling: Lenis eases the page scroll and runs on GSAP's ticker, so ScrollTrigger reads the same position every frame.
  // Lenis (not ScrollSmoother) because it keeps native scrolling, so position: sticky and the fixed header keep working.
  const lenis = window.Lenis ? new Lenis({ duration: 1.15, easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)) }) : null;
  if (lenis) {
    window.lenis = lenis;
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add(time => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);
  }
  const mm = gsap.matchMedia();

  // Tracks (large screens): pin the section and slide the row of cards sideways as you scroll down.
  // Created first because pinning adds scroll distance that every trigger below it must account for.
  mm.add('(min-width: 1024px)', () => {
    document.querySelectorAll('[data-track]').forEach(wrap => {
      const track = wrap.querySelector('.track');
      const bar = wrap.parentElement.querySelector('.track-bar');
      const section = wrap.closest('section');
      const distance = () => Math.max(0, track.scrollWidth - wrap.clientWidth);
      // Hold the section centred below the fixed header (80px) when it fits; otherwise pin it just under the header
      const start = () => section.offsetHeight < innerHeight - 80 ? 'center center+=40' : 'top 80px';
      gsap.to(track, { x: () => -distance(), ease: 'none',
        scrollTrigger: { trigger: section, start, end: () => `+=${distance()}`, pin: true, scrub: 0.6, invalidateOnRefresh: true,
          onUpdate: self => bar && bar.style.setProperty('--progress', self.progress) } });
    });
  });

  // Timelines: the rule fills as you scroll and each step lights up once the fill passes its marker
  document.querySelectorAll('[data-timeline]').forEach(line => {
    gsap.fromTo(line, { '--fill': 0 }, { '--fill': 1, ease: 'none',
      scrollTrigger: { trigger: line, start: 'top 60%', end: 'bottom 60%', scrub: 0.4 } });
    line.querySelectorAll('.tl-item').forEach(item => ScrollTrigger.create({
      trigger: item, start: 'top 60%', onEnter: () => item.classList.add('is-on'), onLeaveBack: () => item.classList.remove('is-on') }));
  });

  // Spotlights: the list item crossing the middle of the screen lights up and the sticky panel swaps to match it
  document.querySelectorAll('[data-spot]').forEach(spot => {
    const items = spot.querySelectorAll('.spot-item');
    const panels = spot.querySelectorAll('.spot-panel');
    const setActive = i => {
      items.forEach((el, j) => el.classList.toggle('is-active', j === i));
      panels.forEach((el, j) => el.classList.toggle('is-active', j === i));
    };
    setActive(0);
    items.forEach((item, i) => ScrollTrigger.create({ trigger: item, start: 'top 55%', end: 'bottom 55%',
      onEnter: () => setActive(i), onEnterBack: () => setActive(i) }));
  });

  // Rows: each rule draws in from the left and the row's content rises into place
  document.querySelectorAll('[data-rows]').forEach(rows => {
    rows.querySelectorAll('.row-item').forEach(row => {
      gsap.fromTo(row, { '--line': 0 }, { '--line': 1, ease: 'power2.out',
        scrollTrigger: { trigger: row, start: 'top 90%', end: 'top 60%', scrub: 0.6 } });
      gsap.from(row.children, { y: 40, autoAlpha: 0, stagger: 0.08, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: row, start: 'top 85%' } });
    });
  });

  // Statements: words fill from grey to ink as the text scrolls up from the bottom of the screen (no pinning).
  // Key phrases ([data-key]) fill to the accent blue instead, so the important part stands out.
  const accent = `rgb(${getComputedStyle(document.documentElement).getPropertyValue('--accent').trim()})`;
  document.querySelectorAll('[data-statement]').forEach(statement => {
    const fill = statement.querySelector('[data-fill]');
    splitWords(fill);
    gsap.to(fill.querySelectorAll('.fill-word'), { color: (i, el) => el.closest('[data-key]') ? accent : 'rgb(4 33 63)', stagger: 0.1, ease: 'none',
      scrollTrigger: { trigger: fill, start: 'top 90%', end: 'bottom 45%', scrub: 0.5 } });
  });

  // Card grids: cards tilt up out of the page in 3D
  document.querySelectorAll('[data-tilt]').forEach(tilt => {
    gsap.set(tilt, { perspective: 1400 });
    tilt.querySelectorAll(':scope > *').forEach((card, i) => {
      gsap.fromTo(card,
        { rotationX: -28, y: 110, autoAlpha: 0, transformOrigin: '50% 100%' },
        { rotationX: 0, y: 0, autoAlpha: 1, ease: 'power2.out',
          scrollTrigger: { trigger: card, start: 'top bottom-=40', end: `top ${78 - (i % 3) * 4}%`, scrub: 0.8 } });
    });
  });

  // Card lists: cards slide in from alternating sides
  document.querySelectorAll('[data-slide]').forEach(list => {
    list.querySelectorAll(':scope > *').forEach((card, i) => {
      gsap.fromTo(card, { x: i % 2 ? 80 : -80, autoAlpha: 0 }, {
        x: 0, autoAlpha: 1, ease: 'power2.out',
        scrollTrigger: { trigger: card, start: 'top bottom-=40', end: 'top 70%', scrub: 0.6 },
      });
    });
  });

  // Images: wipe open, then drift inside their frame
  gsap.utils.toArray('[data-clip]').forEach(el => {
    gsap.fromTo(el, { clipPath: 'inset(100% 0% 0% 0%)' }, {
      clipPath: 'inset(0% 0% 0% 0%)', duration: 1.1, ease: 'power4.out',
      scrollTrigger: { trigger: el, start: 'top 85%' },
    });
    gsap.fromTo(el.querySelector('img'), { yPercent: -10, scale: 1.2 }, {
      yPercent: 10, scale: 1.2, ease: 'none',
      scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom top', scrub: true },
    });
  });

  // Gains: the result crossing the middle of the screen lights up
  document.querySelectorAll('[data-gains]').forEach(section => {
    const steps = section.querySelectorAll('.gain-step');
    const setActive = i => steps.forEach((step, j) => step.classList.toggle('is-active', j === i));
    setActive(0);
    steps.forEach((step, i) => ScrollTrigger.create({
      // Lower on the screen than centre, so the last result lights up while it is still in view
      trigger: step, start: 'top 60%', end: 'bottom 60%',
      onEnter: () => setActive(i), onEnterBack: () => setActive(i),
    }));
  });

  // Footer wordmark: letters rise up one after another as the footer comes into view
  document.querySelectorAll('[data-wordmark]').forEach(el => {
    el.innerHTML = [...el.textContent].map(ch => ch === ' ' ? ' ' : `<span class="wm-letter">${ch}</span>`).join('');
    gsap.from(el.querySelectorAll('.wm-letter'), {
      yPercent: 110, autoAlpha: 0, stagger: 0.05, ease: 'power3.out',
      scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom bottom', scrub: 0.6 },
    });
  });

  // The accordion and tabs change page height; recalculate trigger positions afterwards
  document.querySelectorAll('.sector-tab, .tab-btn').forEach(btn =>
    btn.addEventListener('click', () => setTimeout(() => ScrollTrigger.refresh(), 650)));
  window.addEventListener('load', () => ScrollTrigger.refresh());
  // Late web fonts change text height, which shifts pinned sections
  if (document.fonts) document.fonts.ready.then(() => ScrollTrigger.refresh());

  // Smooth-scroll same-page links in JS, since CSS smooth scrolling is off while ScrollTrigger runs
  document.addEventListener('click', e => {
    const link = e.target.closest('a[href^="#"]');
    const target = link && link.getAttribute('href').length > 1 && document.querySelector(link.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    // Stop just below the fixed header (80px)
    if (lenis) lenis.scrollTo(target, { offset: -96 });
    else target.scrollIntoView({ behavior: 'smooth' });
    history.pushState(null, '', link.getAttribute('href'));
    // Move keyboard focus too, as a normal anchor jump would (keeps the skip link working)
    if (!target.hasAttribute('tabindex')) target.setAttribute('tabindex', '-1');
    target.focus({ preventScroll: true });
  });

  // Wrap each word in a span so it can be colored individually (also inside key-phrase spans)
  function splitWords(el) {
    [...el.childNodes].forEach(child => {
      if (child.nodeType === Node.ELEMENT_NODE) { splitWords(child); return; }
      if (child.nodeType !== Node.TEXT_NODE) return;
      const frag = document.createDocumentFragment();
      child.textContent.split(/(\s+)/).forEach(part => {
        if (!part) return;
        if (/^\s+$/.test(part)) { frag.appendChild(document.createTextNode(part)); return; }
        const word = document.createElement('span');
        word.className = 'fill-word';
        word.textContent = part;
        frag.appendChild(word);
      });
      child.replaceWith(frag);
    });
  }
})();
