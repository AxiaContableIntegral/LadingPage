export default {content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#0B3C74',
          navyDark: '#072B54',
          navyDeep: '#04203F',
          navySoft: '#EEF3FA',
          orange: '#F07022',
          orangeDark: '#D65C12',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
}
