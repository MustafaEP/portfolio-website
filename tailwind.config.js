/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        accent: {
          50: '#f8f9fa',
          100: '#f1f3f5',
          200: '#e9ecef',
          300: '#dee2e6',
          400: '#ced4da',
          500: '#adb5bd',
          600: '#868e96',
          700: '#495057',
          800: '#343a40',
          900: '#212529',
        },
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', '"Inter"', '"Roboto"', '"Helvetica Neue"', 'Arial', 'sans-serif'],
      },
      letterSpacing: {
        tighter: '-0.02em',
        tight: '-0.01em',
      },
      backgroundColor: {
        'dark-bg': '#0A0A0A',
        'dark-surface': '#141414',
      },
      borderColor: {
        'dark-border': '#262626',
      },
      transitionProperty: {
        'theme': 'background-color, border-color, color',
      },
    },
  },
  plugins: [],
};
