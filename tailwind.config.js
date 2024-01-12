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
          green: '#5CB85C',
          darkGreen: '#3d8b3d',
          lightenGray: '#ddd',
          gray: '#bbb',
          darkestGray: '#373a3c',
          darkenGray: '#999',
          tag: '#aaa',
          pageHoverBg: '#eceeef'
        }
      },
      spacing: {
        0.2: '0.2rem',
        0.3: '0.3rem',
        navItem: '0.425rem',
        tag: '0.6rem'
      },
      boxShadow: {
        banner:
          'inset 0 8px 8px -8px rgb(0 0 0 / 30%), inset 0 -8px 8px -8px rgb(0 0 0 / 30%)'
      },
      dropShadow: {
        logo: '0px 1px 3px rgb(0 0 0 / 30%)'
      },
      fontSize: {
        date: '0.8rem',
        logo: '3.5rem'
      },
      borderRadius: {
        buttonSm: '0.2rem',
        tag: '10rem'
      },
    }
  },
  plugins: [],
}
