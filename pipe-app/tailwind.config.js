/** @type {import('tailwindcss').Config} */
const {required} = require("@angular/forms/signals");
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
    },
  },
  plugins: [
      require('daisyui'),
  ],
  daisyui: {
    themes: [ 'dracula' ]
  }
}

