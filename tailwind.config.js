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
            }
        },
	},
	plugins: [
        require('tailwind-scrollbar'),
    ],
};
