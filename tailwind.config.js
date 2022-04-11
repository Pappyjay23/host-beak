module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		screen: {
			xs: "480px",
			sm: "640px",
			md: "768px",
			lg: "976px",
			xl: "1440px",
		},
		extend: {
			backgroundImage: {
				"heroImg": "url('/images/sign-up-img.png')",
			},
			colors: {
				"light-blue": "#3DB0FF;",
				"deep-blue": "#272262;",
				"light-grey": "#82869A80;",
				"grey": "#282C4099;",
				"border-grey": "#D8D8D8",
				"box-grey": "#EBEBEB;",
				"dash-bg": "#F9F9F9;",
				"green": "#39DA8A;",
				"light-green": "#D9FCEA;"
			},
		},
	},
	plugins: [],
};
