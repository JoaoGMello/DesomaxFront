const tamanhosAlturasLarguras = {
  '8px': '8px',
  '12px': '12px',
  '16px': '16px',
  '32px': '32px',
  '48px': '48px',
  '64px': '64px',
  '128px': '128px',
  '256px': '256px',
  '512px': '512px',
  '200px': '200px'
}

/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'note1': '1024px',
      'note2': '1240px',
      'monitor1': '1500px',
      'monitor2': '1800px'
    },
    extend: {
      width:{
        ...tamanhosAlturasLarguras
      },
      height: {
        ...tamanhosAlturasLarguras
      },
      colors:{}
    },
  },
  plugins: [],
}