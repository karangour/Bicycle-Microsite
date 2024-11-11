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
        'green': '#00C19F',
        'dark-grey': '#30353D',
        'light-grey': '#EBEFF0',
        'text-grey' : '#696D77',
        'text-black': '#262A36'
      },
      fontFamily: {
        'title': ['Lexend', 'sans-serif'],
        'body': ['Lexend Deca', 'sans-serif'],
        'outfit': ['Outfit', 'sans-serif']
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

