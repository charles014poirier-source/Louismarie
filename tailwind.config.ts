import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#050505',
        foreground: '#FFFFFF',
        'background-secondary': '#0a0a0a',
        'lma-dark': '#242325',
        'lma-gold': '#DC965A',
        'lma-gray-light': '#B3B3B3',
        'lma-gray': '#C8C8C8',
      },
      fontFamily: {
        display: ['Clash Display', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
      },
      fontSize: {
        'hero': '15vw',
      },
      spacing: {
        '128': '32rem',
      },
      letterSpacing: {
        'ultra-wide': '[0.2em]',
      },
      animation: {
        float: 'float 20s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) translateX(0px)' },
          '25%': { transform: 'translateY(-20px) translateX(10px)' },
          '50%': { transform: 'translateY(-10px) translateX(-10px)' },
          '75%': { transform: 'translateY(-30px) translateX(5px)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
