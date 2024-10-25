/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'preto': '#040F16',
      'azul-escuro': '#6439FF',
      'azul-claro': '#4F75FF',
      'verde-agua': '#00CCDD',
      'cinza': '#7CF5FF',
      'branco': '#FFE1FF',
    },
  },
  fontFamily: {
    'Nunito': ['Nunito', 'sans-serif'],
  },
  plugins: [],
}