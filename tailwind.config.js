/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'red': '#F74761',
        'dark-grey': '#30353D',
        'light-grey': '#EBEFF0',
        'text-black': '#262A36'
      },
      fontFamily: {
        'title': ['Lexend', 'sans-serif'],
        'body': ['Lexend Deca', 'sans-serif']
      },
      fontWeight: {
        'normal': 400,
        'medium': 500,
        'semibold': 600,
        'bold': 700
      }
    },
  },
  plugins: [],
}

