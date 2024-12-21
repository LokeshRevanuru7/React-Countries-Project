/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        emoji: ["monospace", "Segoe UI Symbol", "Apple Color Emoji", "sans-serif"],
        clr:['#FAFAFA']
      },
      screens: {
        'xsm': '400px',
        'sm': '480px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
      },
    },
  },
  plugins: [],
} 