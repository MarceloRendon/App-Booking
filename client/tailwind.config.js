/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {

        primary: '#F9F2ED',
        secondary: '#3AB0FF',
        customColor3: '#FFB562',
        customColor4: '#F87474',

        lightPrimary: '#3A98B9',
        lightSecondary: '#FFF1DC',
        lightcustomColor3: '#E8D5C4',
        lightcustomColor4: '#EEEEEE',

        bestColor1: '#222831',
        bestColor2: '#393E46',
        bestColor3: '#00ADB5',
        bestColor4: '#EEEEEE',
        bestColor5: '#08D9D6',
        bestColor6: '#252A34',
        bestColor7: {
          100: '#FF2E63',
          200: '#cc244f',
        },



      },
    },
  },
  plugins: [],
}

