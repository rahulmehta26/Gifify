/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg-gradient': 'linear-gradient(45deg, #000000, #0f2027, #203a43, #2c5364)',
      },
    },
  },
  plugins: [],
}