import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      lg: { max: '1024px' },
      md: { max: '768px' },
      sm: { max: '640px' },
    },
    extend: {
      fontSize: {
        h1: 'var(--font-size-h1)',
        h2: 'var(--font-size-h2)',
        h3: 'var(--font-size-h3)',
        h4: 'var(--font-size-h4)',
        h5: 'var(--font-size-h5)',
        h6: 'var(--font-size-h6)',
        p:'var(--font-size-p)',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      boxShadow: {
        'md': '0 0px 20px 0px rgba(0, 0, 0, 0.1)',
        'xl': '0 10px 20px 10px rgba(0, 0, 0, 0.1)',
        '2xl': '0 25px 40px -10px rgba(0, 0, 0, 0.3)',
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      },
    },
  },
  plugins: [],
} satisfies Config;