/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{html,js,vue}', './node_modules/flowbite/**/*.js'],
  plugins: [require('flowbite/plugin')]
}
