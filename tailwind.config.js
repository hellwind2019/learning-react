module.exports = {
	content: [
		"./src/**/*.{js,jsx,ts,tsx}",
	],
	theme: {
		extend: {
			colors: {
				background: "var(--background)",
				foreground: "var(--foreground)",
				card: "var(--card)",
				"card-foreground": "var(--card-foreground)",
				border: "var(--border)",
				ring: "var(--ring)",
				// Add more as needed
			},
		},
	},
	plugins: [],
}
