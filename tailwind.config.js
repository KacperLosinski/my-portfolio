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
