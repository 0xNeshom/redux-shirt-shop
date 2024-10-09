/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': '0 80% 80% rgba(0, 0, 0, 0.9)', // Custom shadow with percentage
      },
    },
  },
  plugins: [],
}
