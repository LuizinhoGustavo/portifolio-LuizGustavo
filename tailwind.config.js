/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'black': '#040F16',
      'dark-blue': '#6439FF',
      'light-blue': '#4F75FF',
      'light-green': '#00CCDD',
      'grey': '#7CF5FF',
      'white': '#ffffff',
      'white2': '#FFE1FF',
      'grey2': '#D0D0D0'
    },
  },
  fontFamily: {
    'Nunito': ['Nunito', 'sans-serif'],
  },
  plugins: [],
}