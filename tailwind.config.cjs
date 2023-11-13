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
            'blue': '#1fb6ff',
            'purple': '#7e5bef',
            'pink': '#ff49db',
            'orange': '#ff7849',
            'green': '#13ce66',
            'yellow': '#ffc82c',
            'gray-light': '#F2F1F1',
            'secondary' : '#FFAB09',
            'white': '#FFFFFF',
            'gray-dark':'#282727',
        },
        fontFamily: {
            poppins:[ 'var(--font-poppins)']
        },
        extend: {}

    },
    darkMode: "class",
    plugins: [nextui()],
};
