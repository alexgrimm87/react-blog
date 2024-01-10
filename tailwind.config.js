/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        titillium: ['Titillium Web', 'sans-serif'],
      },
      colors: {
        blog: {
          green: '#5CB85C'
        }
      },
      spacing: {
        navItem: '0.425rem'
      }
    },
  },
  plugins: [],
}
