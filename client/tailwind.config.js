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

      },
    },
  },
  plugins: [],
}

