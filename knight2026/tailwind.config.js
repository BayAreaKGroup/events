/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        surface: {
          DEFAULT: 'rgb(var(--color-surface) / <alpha-value>)',
          elevated: 'rgb(var(--color-surface-elevated) / <alpha-value>)',
          muted: 'rgb(var(--color-surface-muted) / <alpha-value>)',
          panel: 'rgb(var(--color-surface-panel) / <alpha-value>)',
        },
        footer: 'rgb(var(--color-footer) / <alpha-value>)',
        text: {
          DEFAULT: 'rgb(var(--color-text) / <alpha-value>)',
          muted: 'rgb(var(--color-text-muted) / <alpha-value>)',
          subtle: 'rgb(var(--color-text-subtle) / <alpha-value>)',
        },
        /* @deprecated — use `text` tokens; kept for gradual migration */
        ink: {
          DEFAULT: 'rgb(var(--color-text) / <alpha-value>)',
          muted: 'rgb(var(--color-text-muted) / <alpha-value>)',
          subtle: 'rgb(var(--color-text-subtle) / <alpha-value>)',
        },
        accent: {
          DEFAULT: 'rgb(var(--color-accent) / <alpha-value>)',
          hover: 'rgb(var(--color-accent-hover) / <alpha-value>)',
          muted: 'rgb(var(--color-accent-muted) / <alpha-value>)',
          foreground: 'rgb(var(--color-accent-foreground) / <alpha-value>)',
        },
        primary: {
          DEFAULT: 'rgb(var(--color-primary) / <alpha-value>)',
          hover: 'rgb(var(--color-primary-hover) / <alpha-value>)',
          active: 'rgb(var(--color-primary-active) / <alpha-value>)',
          muted: 'rgb(var(--color-primary-muted) / <alpha-value>)',
          foreground: 'rgb(var(--color-primary-foreground) / <alpha-value>)',
        },
        chip: {
          pink: 'rgb(var(--color-chip-pink) / <alpha-value>)',
          lavender: 'rgb(var(--color-chip-lavender) / <alpha-value>)',
          lilac: 'rgb(var(--color-chip-lilac) / <alpha-value>)',
          ice: 'rgb(var(--color-chip-ice) / <alpha-value>)',
          mint: 'rgb(var(--color-chip-mint) / <alpha-value>)',
        },
        line: 'rgb(var(--color-line) / <alpha-value>)',
      },
      fontFamily: {
        sans: ['Pretendard', 'system-ui', '-apple-system', 'sans-serif'],
        display: [
          '"Stack Sans Notch"',
          'Pretendard',
          'system-ui',
          'sans-serif',
        ],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        h1: [
          'clamp(2.5rem, 7vw, 6rem)',
          { lineHeight: '1', fontWeight: '300', letterSpacing: '-0.05px' },
        ],
        h2: [
          'clamp(2rem, 4.5vw, 3.5rem)',
          { lineHeight: '1.14', fontWeight: '300', letterSpacing: '-0.05px' },
        ],
        h3: [
          'clamp(1.5rem, 2.5vw, 2rem)',
          {
            lineHeight: '1.25',
            fontWeight: '400',
            letterSpacing: '-0.01em',
          },
        ],
        h4: [
          'clamp(1.125rem, 2vw, 1.625rem)',
          {
            lineHeight: '1.23',
            fontWeight: '400',
            letterSpacing: '-0.01em',
          },
        ],
        h5: [
          '1.5rem',
          {
            lineHeight: '1.25',
            fontWeight: '400',
            letterSpacing: '-0.01em',
          },
        ],
        body: [
          '1rem',
          { lineHeight: '1.5', fontWeight: '400', letterSpacing: '0' },
        ],
        footer: ['0.875rem', { lineHeight: '2.25rem', fontWeight: '400' }],
        caption: [
          '0.875rem',
          {
            lineHeight: '1.25rem',
            fontWeight: '400',
            letterSpacing: '1px',
          },
        ],
        button: [
          '1rem',
          { lineHeight: '1.5rem', fontWeight: '400', letterSpacing: '1px' },
        ],
      },
      spacing: {
        18: '4.5rem',
        22: '5.5rem',
        30: '7.5rem',
      },
      maxWidth: {
        content: '75rem',
        narrow: '30rem',
        footer: '77.125rem',
      },
      borderRadius: {
        button: '4px',
        ui: '4px',
      },
    },
  },
  plugins: [],
}
