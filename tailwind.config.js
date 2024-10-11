/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "selector",
  theme: {
    extend: {
      keyframes: {
        'circle-1': {
          '0%': { transform: 'translate(0, 0)' },
          '100%': { transform: 'translate(-45px, -60px)' },
        },
        'circle-2': {
          '0%': { transform: 'translate(0, 0)' },
          '100%': { transform: 'translate(45px, 60px)' },
        },
        'circle-3': {
          '0%': { transform: 'translate(0, 0)' },
          '100%': { transform: 'translate(-70px, 0)' },
        },
        'circle-4': {
          '0%': { transform: 'translate(0, 0)' },
          '100%': { transform: 'translate(70px, 0)' },
        },
        'circle-5': {
          '0%': { transform: 'translate(0, 0)' },
          '100%': { transform: 'translate(-45px, 60px)' },
        },
        'circle-6': {
          '0%': { transform: 'translate(0, 0)' },
          '100%': { transform: 'translate(45px, -60px)' },
        },
      },

    },
  },
  plugins: [],
};