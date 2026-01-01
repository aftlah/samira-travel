/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#D4AF37', // Gold color often used in Umrah/Hajj branding
        secondary: '#0F172A', // Dark blue/slate
      }
    },
  },
  plugins: [],
}
