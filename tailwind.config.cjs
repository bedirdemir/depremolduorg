/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: "jit",
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#EB455F',
        secondary: '#2B3467',
        background: '#FCFFE755'
      }
    }
  },
  plugins: [],
}
