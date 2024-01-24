/** @type {import('tailwindcss').Config} */
export default {
	content: ['./**/*.html'],
	theme: {
		colors: {
			red: '#E63C24',
			blue: '#2B2B59',
			white: '#fff',
			dark: '#000',
			gray: '#BFBFBF',
		},
		fontFamily: {
			lato: ['Lato'],
		},
		container: {
			center: true,
		},
		extend: {
			screens: {
				xl: '1200px',
			},
		},
	},
	plugins: [require('@tailwindcss/forms')],
}
