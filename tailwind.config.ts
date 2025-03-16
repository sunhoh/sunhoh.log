import type { Config } from "tailwindcss";
import tailwindcssAnimate from 'tailwindcss-animate';

export default {
  darkMode: ["class"],
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      sans: ["Pretendard Variable", "sans-serif"],
      serif: ["AritaBuri", "sans-serif"],
      mono: ["Source Code Pro", "monospace"],
    },
    screens: {
      lg: { max: '1024px' },
      md: { max: '768px' },
      sm: { max: '640px' },
    },
    extend: {
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
  plugins: [require("@tailwindcss/typography")],
} satisfies Config;