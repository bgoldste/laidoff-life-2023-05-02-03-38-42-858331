/** @type {import('tailwindcss').Config} */
import siteData from "./src/data/site_data.json";
console.log("HI")
console.log(siteData['color'])
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
   plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
       themes: [
         {
           mytheme: {


             "primary": "#36e2c3",

             "secondary": "#065770",

             "accent": "#a4fcb7",

             "neutral": "#292E33",

             "base-100": "#EDEDED",

             "info": "#3388F0",

             "success": "#2AD5C4",

             "warning": "#CD6904",

             "error": "#E83B69",
          
 // "primary": siteData['color'],


           },
         },
       ],
     },
}
