/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#C5A059', // Gold color from logo (approximate)
        secondary: '#1A1A1A', // Dark color from logo (approximate)
        accent: '#E6C67E', // Lighter gold for hover/accents
      }
    },
  },
  plugins: [],
}
