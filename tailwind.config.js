/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '68': '17rem', // Adjust the value to your needs
      },

      colors: {
        'body-color': '#f7fafd',
        'black': '#1d242e',
        'dark-gray': '#283442',
        'red': '#e9463c',
        'green': '#50a76a',
        'sky-blue': '#50a76a',
        'yellow': '#fed600',
        'text-color': '#d1e5f9',
        'white': '#fefefe',
        'bg-button': '#e3ebf3',
        'primary-teal-green': '#42919a',
        green: {
          500: '#01a768',
          100: '#01a7684d'
        },
        yellow: {
          500: '#fed600',
          100: '#fed6004d'
        },
        blue: {
          500: '#03a9f5',
          100: '#007bff4d'
        },
        red: {
          500: '#f0483e',
          100: '#f0483e4d'
        }
      },
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [],
}