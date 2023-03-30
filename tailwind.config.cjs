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

      rotate: {
        'menu-l': '45deg',
        'menu-r': '-45deg',
      },
      translate: {
        'menu-lx': '0.75rem',
        'menu-ly': '1.25rem',
        'menu-rx': '0.70rem',
        'menu-ry': '0.48rem',
      },
      backgroundImage: {
        gradient: 'linear-gradient(90deg, #a230ad, #6b00d7, #3e00b3)',
        gradient2: 'linear-gradient(90deg, #a230ad7a, #6b00d775, #3f00b37a)',
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
        input: {
          from: {
            borderColor: '#6d24ff',
          },
          to: {
            borderColor: '#ffffff',
          }
        }
      },
      animation: {
        eletron: 'eletron 8s ease-in-out',
        node: 'node 8s ease-in-out',
        input: 'input 1s ease-out forwards',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
