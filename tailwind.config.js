module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          def: '#8257E5',
          hover: '#996DFF',
          text: '#fff'
        }
      },
      fontFamily: {
        inter: ['Inter', 'Roboto', 'sans']
      }
    },
		colors: {},
  },
  plugins: [],
}
