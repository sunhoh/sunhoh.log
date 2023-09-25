/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './layout/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#1b98d0',
        secondary: '#61c6d8',
        tertiary: '#54cdb4',
        quaternary: '#7a43d3',
        // dark: '#121212',
      },
      screens: {
        sm: { max: '719px' },
        md: { min: '710px', max: '1200px' },
        lg: { min: '1201px' },
      },

      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      },
      fontFamily: {
        sans: ['var(--font-sans)'],
        mono: ['var(--font-mono)'],
      },
    },
  },
  plugins: [],
};
