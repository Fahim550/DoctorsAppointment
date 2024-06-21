/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");
// export default {
//   content: [
//     './src/**/*.{js,jsx,ts,tsx}',
//   "./node_modules/flowbite/**/*.js",
//   './src/**/*.html', './node_modules/flowbite/**/*.js'
  
// ],
//   theme: {
//     extend: {},
//   },
  
//   plugins: [require('flowbite/plugin')],
// }
module.exports = {
    content: [
      flowbite.content(),
      './src/**/*.{js,jsx,ts,tsx}',
  "./node_modules/flowbite/**/*.js",
  './src/**/*.html', './node_modules/flowbite/**/*.js'],
  theme: {
    extend: {
     
        backgroundImage: {
          'carousel1': "url('./src/assets/doctors1.png')",
          'carousel1': "url('./src/assets/doctors.jpg')",
          'carousel1': "url('./src/assets/doctors2.jpg')",
          
        }
      
    },
  },
  
  plugins: [
    flowbite.plugin(),
    // require('flowbite/plugin'),
    
  ],
}

