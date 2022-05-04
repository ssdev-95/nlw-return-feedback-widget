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
      },
			transitionTimingFunction: {
				ez: 'cubic-bezier(0.7, 0.7, 0.7, 0.7)'
			},
			screens: {
				sm: '315px',
				md: '860px',
				lg: '1024px'
			}
    },
  },
  plugins: [
		require('@tailwindcss/forms'),
		require('tailwind-scrollbar')
	],
}
