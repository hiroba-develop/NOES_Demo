/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          blue: '#1e6fd9',
        },
        accent: {
          orange: '#ff9933',
        },
        sub: {
          'light-blue': '#4fa3f7',
          'background-gray': '#f4f7fc',
        },
      },
    },
  },
  plugins: [],
}
