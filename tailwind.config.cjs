// tailwind.config.js
const {nextui} = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"],
  theme: {
    borderWidth: {
      DEFAULT: '1px',
      '0': '0',
      '1': '0.5px',
      '2': '2px',
      '4': '4px',
      '6': '6px',
      '8': '8px',
    },
    screens: {
      'sm':'640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl':'1536px'
    },
    colors: {

    },
    fontFamily: {
      poppins:[ 'var(--font-poppins)']
    },
    extend: {}

  },
  darkMode: "class",
  plugins: [nextui({
    themes: {
      light: {},
      dark: {
        colors: {
          primary: {
            DEFAULT: "#151525"
          },
          accent: {
            DEFAULT: "#121a2d"
          },
          secondary: {
            DEFAULT: "#9747ff"
          },
          bgPaginator: {
            DEFAULT: "#060d18"
          },
          default: {
            DEFAULT: "#1f1f36"
          },
          grayLight: {
            DEFAULT: "#A89C9C"
          },
          selectedItem: {
            DEFAULT: "#1e2b4f"
          },
          warning: {
            DEFAULT: "#BA3838"
          },
          success: {
            DEFAULT: "#65FEA2"
          },
          white: {
            DEFAULT: "#FFFFFF"
          },
          
        }
      }
    }
  })],
};
