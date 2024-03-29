/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		colors: {
			black: {
				lightOp90: "rgb(25,25,25,0.9)",
				light50: "rgb(25,25,25,0.5)",
				dark: "#6A6E75",
				DEFAULT: "#191919"
			},

			white: {
				DEFAULT: "#DFE0E2",
				light50: "rgb(223, 224, 226, 0.5)",
				lightOp20: "rgb(223, 224, 226, 0.2)",
				lightOp10: "rgb(223, 224, 226, 0.1)"
			},

			green: {
				ligthOp20: "rgb(13, 171, 118, 0.2)",
				ligth: "#7af3ca",
				DEFAULT: "#12CC8D"
			},

			red: {
				DEFAULT: "#FBA8A9",
				purple: "#70133C"
			},

			yellow: {
				DEFAULT: "#FEDC97",
				light50: "rgb(254, 220, 151, 0.5)"
			},

			blue: {
				DEFAULT: "#61A9FD",
				light50: "rgb(60, 145, 230, 0.2)"
			}
		},

		screens: {
			'md': { 'min': '768px' },
			'sm': { 'max': '570px' },
			'xs': { 'max': '400px' }
		},
		fontFamily: {
			'poppins': ['Poppins', 'sans-serif']
		},


		extend: {},
	},
	plugins: [],
}
