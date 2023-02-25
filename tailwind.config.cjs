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
        red: '#EB455F',
        logo: '#2B3467',
        background: '#FCFFE785'
      }
    }
  },
  plugins: [],
}
