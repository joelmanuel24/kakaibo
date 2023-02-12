/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'money': ['Oswald, sans-serif']
      }
    },
  },
  plugins: [
    require('cssnano')({
      preset: 'default'
    })
  ],
}
