/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './container/**/*.{ts,tsx}',
    './layout/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
  ],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: ['var(--font-sans)'],
      mono: ['var(--font-mono)'],
      serif: ['AritaBuri', 'sans-serif'],
    },
    screens: {
      lg: { max: '1024px' },
      md: { max: '768px' },
      sm: { max: '640px' },
    },
    extend: {
      boxShadow: {},
      gridTemplateColumns: {
        main: 'auto 640px auto',
      },
      maxWidth: {
        page: 1072,
        content: 640,
      },
      width: {
        page: 1072,
        content: 640,
      },
      spacing: {
        page: 128,
      },
    },
  },
  plugins: [],
};
