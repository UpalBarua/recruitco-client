/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
      fontFamily: {
        primary: 'Cabin',
        secondary: 'Roboto Condensed',
      },
      colors: {
        dark: {
          300: '#201f47',
          400: '#221c38',
          500: '#171326',
        },
        light: {
          300: '#ffffff',
          400: '#e6e6e6',
          400: '#cccccc',
        },
        accent: {
          300: '#dd7da9',
          400: '#d45d93',
          500: '#aa4a76',
        },
      },
    },
  },
  plugins: [],
};
