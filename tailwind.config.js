/** @type {import('tailwindcss').Config} */
export default {
	content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx,html}",
    ],
	theme: {
		extend: {
            fontFamily: {
                "custom": ["Wix Madefor Display", "sans-serif"],
            },
            colors: {
                "custom-blue-light": "#87c9ff",
                "custom-blue-dark": "#5788d0",
                "custom-purple": "#534aad",
            },
        },
	},
	plugins: [
        require('tailwind-scrollbar'),
    ],
};
