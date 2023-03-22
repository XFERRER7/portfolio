/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "header": "url('/bg-header.jpg')",
        "text": "linear-gradient(to right, #ffffff, #61dafb)"
      },
      //create a gradient background with 90deg, #a230ad, #6b00d7, #3e00b3
      backgroundImage: {
        gradient: 'linear-gradient(90deg, #a230ad, #6b00d7, #3e00b3)'
      },
      colors: {
        primary: "#6d24ff"
      },
      fontFamily: {
        roboto: 'Roboto, sans-serif',
        open: 'Open Sans, sans-serif',
        poppins: 'Poppins, sans-serif',
      },
      keyframes: {
        eletron: {
          to: {
            transform: 'rotate(360deg)',
          }
        },
        node: {
          '50%': {
            opacity: ".5",
          }
        },
        rgb: {
          '0%': {
            backgroundPosition: '0% 50%'
          },
          '50%': {
            backgroundPosition: '100% 50%'
          },
          '100%': {
            backgroundPosition: '0% 50%'
          }
        }
      },
      animation: {
        eletron: 'eletron 8s ease-in-out',
        node: 'node 8s ease-in-out',
        rgb: 'rgb 6s linear infinite'
      },
    },
  },
  plugins: [],
}
