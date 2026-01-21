/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    // We are using the string name to avoid import errors
    // If this fails, delete this line entirely for now
    require('daisyui'), 
  ],
}