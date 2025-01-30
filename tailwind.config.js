/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        gradientStart: '#201E43',
        gradientEnd: '#0C2F47',
        primary: '#7CE5FF',
        secondary: '#508C9B',
        third: '#201E43',
        buttonGradient1: '#7ce5ff',
        buttonGradient2: '#00bafe',
        buttonGradient3: '#c89ce8',
        project1: "#519C92",
        project2: "#51759C",
        project3: "#515D9C",
        project4: "#519C79",
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to top left, #201E43 79%, #0C2F47 100%)',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'], // Zmień "Poppins" na nazwę swojej czcionki
      },
    },
  },
  plugins: [],
};
