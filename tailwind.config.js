/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        titillium: ['Titillium Web', 'sans-serif'],
        sourceSerif: ['Source Serif Pro', 'serif']
      },
      colors: {
        blog: {
          green: '#5CB85C'
        }
      },
      spacing: {
        navItem: '0.425rem'
      },
      boxShadow: {
        banner:
          'inset 0 8px 8px -8px rgb(0 0 0 / 30%), inset 0 -8px 8px -8px rgb(0 0 0 / 30%)'
      },
      dropShadow: {
        logo: '0px 1px 3px rgb(0 0 0 / 30%)'
      },
      fontSize: {
        logo: '3.5rem'
      }
    }
  },
  plugins: [],
}
