// tailwind.config.js
const {nextui} = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      'sm':'640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl':'1536px'
    },
    colors: {
      
      'warning': '#b23838',
      'succes': '#329b4f',
      'white': '#FFFFFF',
      //bg principal
      'primary':'#151525',
      //icons
      'accent' : '#9747ff',
      //navbar
      'secondaryy': '#121a2d',
      'bgPaginator':'#060d18',
      //cards
      'bgCards':'#1f1f36',
      //lines
      'grayLight' : '#A89C9C',
      //selected items
      'selectecItem': '#1e2b4f'
      
      
      
    },
    fontFamily: {
      poppins:[ 'var(--font-poppins)']
    },
    extend: {}

  },
  darkMode: "class",
  plugins: [nextui()],
};
