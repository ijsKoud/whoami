const config = require("../../tailwind.config.cjs");

/** @type {import('tailwindcss').Config} */
module.exports = {
	...config,
	content: ["./src/**/*.{js,ts,jsx,tsx}"]
};
