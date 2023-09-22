/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './layout/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1b98d0',
        secondary: '#61c6d8',
        tertiary: '#54cdb4',
        quaternary: '#7a43d3',
      },
      screens: {
        sm: { min: '390px', max: '819px' },
        md: { min: '810px', max: '1200px' },
        lg: { min: '1201px' },
      },
    },
  },
  plugins: [],
};
