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
            DEFAULT: "#FFFFFF"
          },
          secondary: {
            DEFAULT: "#3FAFFE"
          },
          bgPaginator: {
            DEFAULT: "#dae2f8"
          },
          bgDefault:{
            DEFAULT: "#ffffff"
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
            DEFAULT: "#FE6565"
          },
          success: {
            DEFAULT: "#8DFFBA"
          },
          cancel: {
            DEFAULT: "#585858"
          },
          white: {
            DEFAULT: "#292D32"
          },
          bgGradient:{
            DEFAULT: "#DADADA"
          },
          bgGrey:{
            DEFAULT: "#FFFFFF"
          },
          borderInput:{
            DEFAULT: "#E4E4E7"
          },
          hoverColor:{
            DEFAULT: "#D4D4D8"
          },
          hoverButtonBlue:{
            DEFAULT: "#74C5FF"
          },
          modal:{
            DEFAULT: "#FFFFFF"
          },
          card:{
            DEFAULT: "#F5F5F5"
          },
          hoverCard:{
            DEFAULT: "#32323219"
          },
          bgInputFilter:{
            DEFAULT: "#F5F5F5"
          },
          bgSelectFilter:{
            DEFAULT: "#E4E4E4"
          },
          textWhite:{
            DEFAULT: "#FFFFFF"
          },
        }
      },
      dark: {
        colors: {
          primary: {
            DEFAULT: "#131518"
          },
          accent: {
            DEFAULT: "#020713"
          },
          secondary: {
            DEFAULT: "#3FAFFE"
          },
          bgPaginator: {
            DEFAULT: "#060d18"
          },
          bgDefault:{
            DEFAULT: "#131518"
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
            DEFAULT: "#FE6565"
          },
          success: {
            DEFAULT: "#8DFFBA"
          },
          cancel: {
            DEFAULT: "#585858"
          },
          white: {
            DEFAULT: "#FFFFFF"
          },
          bgGradient:{
            DEFAULT: "#000000"
          },
          bgGrey:{
            DEFAULT: "#212121"
          },
          borderInput:{
            DEFAULT: "#E4E4E7"
          },
          hoverColor:{
            DEFAULT: "#3F3F46"
          },
          hoverButtonBlue:{
            DEFAULT: "#74C5FF"
          },
          modal:{
            DEFAULT: "#1A1C1F"
          },
          card:{
            DEFAULT: "#1A1C1F"
          },
          hoverCard:{
            DEFAULT: "#0000004C"
          },
          bgInputFilter:{
            DEFAULT: "#FFFFFF"
          },
          bgSelectFilter:{
            DEFAULT: "#1A1C1F"
          },
          textWhite:{
            DEFAULT: "#FFFFFF"
          },
        }
      }
    }
  })],
};
