/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: { dsprint: '#0EA5E9' },
      fontFamily: { inter: ['Inter','ui-sans-serif','system-ui','Roboto','Helvetica','Arial'] },
    },
  },
  plugins: [],
};
