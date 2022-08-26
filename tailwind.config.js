module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    boxShadow:{
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
     '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      none: 'none',
      'mine': '0px 0px 30px 0px rgba(110,231,183,0.2)',
    }, 
    screens:{
      'xxxs':'380px',
      'xxs':'500px',
      'xs':'560px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    }, 
    extend: {
      colors:{
          slate:{
              DEFAULT:'#0f172a',
          }
      },
      backgroundImage:{
        'hero':"url('~/assets/circuit-board.svg')"
      },
      spacing:{
        '500':'32rem'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}