module.exports = {
  content: ["./src/**/*.{html,js}"],

  mode: 'jit',
  purge: [
    './index.html',
    './style.css',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        '4sektor': '#003036'
      },
      fontFamily:{
        lato: ['Lato', 'sans-serif']
      }
    }
  },
  variants: {
    extend: {}
  },
 
};
