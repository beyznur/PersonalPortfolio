/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#d1d7de",
        secondary: "#3d3e40",
        tertiary: "#91acc7",
       "gray-300": "#212326",
       "gray":"#404041",
       "dark-blue": "#000013",
       "blue":"#4377ab",
       "light-blue":"#088f9c"
     
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
      animation: {
        typewriter: "typewriter 2s steps(11) forwards"
      },
      keyframes: {
        typewriter: {
          to: {
            left: "100%"
          }
        }
      }
    },
  },
  plugins: [],
}