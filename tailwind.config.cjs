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
        }
      },
      //create animation eletron effect
      animation: {
        eletron: 'eletron 8s ease-in-out',
        node: 'node 8s ease-in-out',
      },
    },
  },
  plugins: [],
}
