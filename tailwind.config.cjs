/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'one': '#4b2af2',
        'two': '#fbba1a',
        'danger': '#fb4b4e',
        'warning': '#ffd23f',
        'success': '#45CB85',
        'info' : '#33a1fd',
        'ink' : '#1D1128',
        'ink-light' : '#ffffff',
      },
      fontFamily: {
        'one': ["Poppins", 'sans-serif'],
      }
    }
  },
  plugins: []
};