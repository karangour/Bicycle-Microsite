/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      transitionDuration: {
        '1000': '1000ms',
      },
      transitionTimingFunction: {
        'in-out-ease': 'ease-in-out',
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" }, // Scrolls seamlessly
        },
        slideLeft: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideOutLeft: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        slideInLeft: 'slideLeft 0.5s ease-in-out forwards',
        slideOutLeft: 'slideOutLeft 0.5s ease-in-out forwards',
        scroll: "scroll 20s linear infinite", // Adjust for smooth infinite scrolling
      },
      letterSpacing: {
        'negative-1.1': '-1.1%',
      },
      colors: {
        'red': '#F74761',
        'green': '#00C19F',
        'grey': '#D9D9D9',
        'dark-grey': '#30353D',
        'light-grey': '#EBEFF0',
        'text-grey': '#696D77',
        'text-black': '#262A36',
      },
      fontFamily: {
        'title': ['Lexend', 'sans-serif'],
        'body': ['Lexend Deca', 'sans-serif'],
        'outfit': ['Outfit', 'sans-serif'],
      },
      fontWeight: {
        'normal': 400,
        'medium': 500,
        'semibold': 600,
        'bold': 700,
      },
    },
  },
  plugins: [
    // Extend utilities
    function({ addUtilities }) {
      addUtilities({
        '.fade-edges': {
          maskImage: 'linear-gradient(to right, transparent, black 10%, black 10%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
        },
      });
    },
  ],
};
