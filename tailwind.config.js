/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "white":"#FFFFFF",
        "dark":"#0B0D17",
        "slight-dark-light-blue":"#D0D6F9",
        "gray":"#484a51"
      }
    },
    fontFamily:{
     'belle':['Bellefair', 'serif'] 
    }
  },
  plugins: [],
}

