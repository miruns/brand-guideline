/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Geist"', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"Geist Mono"', 'ui-monospace', 'monospace'],
      },
      colors: {
        brand: {
          light: {
            bg: '#fafafa',
            fg: '#0a0a0a',
            accent: '#0070f3',
            muted: '#666666',
            card: '#ffffff',
            border: '#e5e5e5',
          },
          dark: {
            bg: '#0a0a0a',
            fg: '#ededed',
            accent: '#00e5ff',
            muted: '#888888',
            card: '#111111',
            border: '#222222',
          },
        },
      },
    },
  },
  plugins: [],
}
