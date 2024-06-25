/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        meetme: 'Ownglyph_meetme-Rg',
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        btnColor: '#F4EEE8',
        btnColorActive: '#E8DBCF',
      },
      keyframes: {
        intro: {
          from: {},
          to: {},
        },
      },
    },
  },
  plugins: [],
};
