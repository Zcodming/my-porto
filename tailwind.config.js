/** @type {import('tailwindcss').Config} */

module.exports = {
  // purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  content: [
    "./pages/*.{js,ts,jsx,tsx}",
    "./components/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'white': '#f9f9fb',
      'blue': '#3b7cb9',
      'light-blue': '#00ffc5',
      'tuna': '#333142',
      'orange': '#f97127',
      'green': '#4aea70',
      'light-green': '#D8F5DE',
      'ship-gray': '#3f3e49',
      'smokey': '#59576b',
    },
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      },
      
    },
  },
  plugins: [],
}