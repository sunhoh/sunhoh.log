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
    extend: {
      colors:{},
      boxShadow: {},
      fontFamily: {
        sans: ['var(--font-sans)'],
        mono: ['var(--font-mono)'],
      },
      screens: {
        lg: { max: '1024px' },
        md: { max: '768px' },
        sm: { max: '640px' },
      },
    },
  },
  plugins: [],
};
