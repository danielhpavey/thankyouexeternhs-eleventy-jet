module.exports = {
  purge: {
    content: ['./src/**/*.html']
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
        'body': ['Open Sans', 'sans-serif']
    },
    extend: { 
        colors: {
            'orange': '#FFA500'
        }
    },
  },
  variants: {},
  plugins: [],
}
