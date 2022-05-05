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
          text: 'white'
        },
				zinc: {
					900: '#18181B',
					800: '#27272A',
					700: '#3F3F46',
					600: '#52525B',
					500: '#71717A',
					400: '#A1A1AA',
					300: '#D4D4DB',
					200: '#E4E4E7',
					100: '#F4F4F5'
				},
				white: '#fff'
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
