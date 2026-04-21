/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'transflower-red': '#E63946',
        'transflower-light': '#F1E5E5',
      },
    },
  },
  plugins: [],
}
