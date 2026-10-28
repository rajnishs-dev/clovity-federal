// Colors come from CSS variables in assets/css/site.css so the palette lives in one place.

const themed = name => `rgb(var(--${name}) / <alpha-value>)`;

// Shared Tailwind CDN config. Loaded right after the Tailwind CDN script on every page.
tailwind.config = {
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: themed('accent'), // buttons, links, labels on light backgrounds
          dark: themed('accent-dark'), // hover
          light: themed('accent-light'), // accent text on dark sections
          50: themed('accent-50'), // tint for icon tiles and selected states
        },
        btn: {
          DEFAULT: themed('btn'), // filled buttons
          dark: themed('btn-dark'), // hover
        },
        // Dark sections and headings follow the theme; body-text grays stay neutral
        ink: {
          950: themed('ink-950'),
          900: themed('ink-900'),
          800: '#1F2937',
          700: '#374151',
          600: '#4B5563',
        },
        steel: {
          50: themed('panel'),
          100: themed('tint'),
          300: '#B9C2CC',
          500: '#5B6872',
          700: themed('steel-700'),
          800: '#38424A',
        },
        paper: themed('paper'),
        sand: themed('sand'),
      },
      fontFamily: {
        display: ['Manrope', 'system-ui', 'sans-serif'],
        sans: ['Manrope', 'system-ui', 'sans-serif'],
      },
      maxWidth: { site: '1240px' },
      boxShadow: {
        card: '0 1px 2px rgba(16,16,20,.04), 0 8px 24px -12px rgba(16,16,20,.12)',
        lift: '0 2px 4px rgba(16,16,20,.05), 0 24px 48px -20px rgba(16,16,20,.25)',
      },
    },
  },
};
