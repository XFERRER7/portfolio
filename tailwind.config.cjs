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
      },
      //create animation eletron effect
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
        eletron: 'eletron 3s ease-in-out infinite',
        node: 'node 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
