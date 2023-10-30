/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-light': '#f7f7f7',
        'primary-dark' : '#7e84842a',
        'primary': {
          '100' : '#3f8989',
          '200': '#378383',
          '300': '#2D6A6A',
          '400': '#1E4F4F',
          '500': '#143E3E',
          '600': '#0D2F2F',
          '700': '#082323',
          '800': '#041818',
        }

    },
    width: {
      '900': '900px',
      '800': '800px',
      '700': '700px',
      '600': '600px',
      '500': '500px',
      '400': '400px',
      '300': '300px',
      '320': '320px',
      '350': '350px',
      '380' : '380px',
      '250': '250px',
      '200': '200px',
      '100': '100px',
      '70p': '70px',
      '80': '80px',
      '40': '40px',

  },
  height: {
    '900': '900px',
    '800': '800px',
    '700': '700px',
    '740': '740px',
    '600': '600px',
    '500': '500px',
    '400': '400px',
    '300': '300px',
    '200': '200px',
    '230': '230px',
    '260': '260px',
    '8vh': '8vh',
    '7vh': '7vh',
    '5vh': '5vh',
    '10vh': '10vh',
    '15vh': '15vh',
    '20vh': '20vh',
    '70vh': '70vh',
    '90vh': '90vh',
    '30vh': '30vh'
  },
  fontFamily: {
    'sans': ['Roboto', 'sans-serif'],
    'serif': ['Merriweather', 'serif'],
    'mono': ['ui-monospace', 'SFMono-Regular'],
    'display': ['Oswald'],
    'body': ['Open Sans'],


  },
  plugins: [],
}
  }
}
