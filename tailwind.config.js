/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        robotoBL: ['Roboto Black'],
        robotoBLI: ['Roboto Black Italic'],
        robotoB: ['Roboto Bold'],
        robotoBI: ['Roboto Bold Italic'],
        robotoI: ['Roboto Italic'],
        robotoL: ['Roboto Light'],
        robotoLI: ['Roboto Light Italic'],
        robotoM: ['Roboto Medium'],
        robotoMI: ['Roboto Medium Italic'],
        robotoR: ['Roboto Regular'],
        robotoT: ['Roboto Thin'],
        robotoTI: ['Roboto Thin Italic'],
      },
      backgroundImage: {
        'header': "url('../public/images/bg/bg-header.jpg')"
      },
      colors: {
        transparent: 'transparent',
        'black': '#000000',
        'white': '#ffffff',
        'back': '#D9D9D9',
        'blue': '#0C458A',
        'gray': '#484748',
        'grayLight': '#858585',
        'red': '#C62426',
        'yellow': '#E6C71E'
      },
    }
  },
  plugins: []
}
