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
        },
				surface: '#0059ad'
      },
      fontFamily: {
        inter: ['Inter', 'Roboto', 'sans']
      }
    },
		colors: {},
  },
  plugins: [],
}
