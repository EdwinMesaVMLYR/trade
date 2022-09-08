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
      fontSize: {
        xs: ['1.3rem'],
        base: ['1.6rem'],
        lg: ['1.9rem'],
      },
      backgroundImage: {
        'header': "url('../../../public/images/bg/bg-header.jpg')",
        'bannerBrands': "url('../../../public/images/bg/bg-brands.jpg')",
        'triangle': "url('../../../public/images/icons/icon-triangle.svg')",
        'arrowDown': "url('../../../public/images/icons/icon-arrow-down.svg')"
      },
      colors: {
        transparent: 'transparent',
        'black': '#000000',
        'white': '#ffffff',
        'whiteb': '#D9D9D9',
        'back': '#D9D9D9',
        'blue': '#0C458A',
        'gray': '#484748',
        'grayLight': '#858585',
        'red': '#C62426',
        'yellow': '#E6C71E'
      },
      container: {
        center: true,
      },
      boxShadow: {
        '1x2': '0px 4px 4px rgba(0, 0, 0, 0.25)',
      }
    }
  },
  plugins: []
}
