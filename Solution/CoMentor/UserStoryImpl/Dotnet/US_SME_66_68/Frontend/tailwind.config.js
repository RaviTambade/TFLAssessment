/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#ef3f2f',
          dark: '#d92e1b',
          soft: '#fff2f0',
          pale: '#fff8f6',
        },
      },
      boxShadow: {
        glow: '0 30px 80px -40px rgba(239, 68, 68, 0.25)',
      },
    },
  },
  plugins: [],
}

