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
    fontFamily: {
      poppins:[ 'var(--font-poppins)']
    },
    extend: {}

  },
  darkMode: "class",
  plugins: [nextui({
    themes: {
      light: {
        colors: {
          primary: {
            DEFAULT: "#eef0f2"
          },
          accent: {
            DEFAULT: "#45526e"
          },
          secondary: {
            DEFAULT: "#826aff"
          },
          bgPaginator: {
            DEFAULT: "#dae2f8"
          },
          default: {
            DEFAULT: "#ffffff"
          },
          grayLight: {
            DEFAULT: "#7a7a7a"
          },
          selectedItem: {
            DEFAULT: "#6f86d6"
          },
          warning: {
            DEFAULT: "#f94f37"
          },
          success: {
            DEFAULT: "#31a24c"
          },
          white: {
            DEFAULT: "#000000"
          },
        }
      },
      dark: {
        colors: {
          primary: {
            DEFAULT: "#151525"
          },
          accent: {
            DEFAULT: "#131518"
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
            DEFAULT: "#FE3F3F"
          },
          success: {
            DEFAULT: "#65FEA2"
          },
          white: {
            DEFAULT: "#FFFFFF"
          },
          blueLight:{
            DEFAULT: "#3FAFFE"
          }
        }
      }
    }
  })],
};
