const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        rose: colors.rose,
        'gray-true': colors.trueGray,
        'gray-warm': colors.warmGray,
      },
    },
  },
  variants: {
    extend: {
      stroke: ['hover', 'focus', 'active'],
      textDecoration: ['active'],
    },
  },
  plugins: [
    // https://content.nuxtjs.org/examples/tailwindcss-typography
    require('@tailwindcss/typography'),
  ],
}
