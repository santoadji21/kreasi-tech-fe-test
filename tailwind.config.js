/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
import { fontFamily, fontWeight } from 'tailwindcss/defaultTheme';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: '#029FE4',
        tosca: ' #00537C',
        'tosca-dark': '#07477A',
      },
      fontFamily: {
        rubik: ['Rubik', ...fontFamily.sans],
      },
      fontWeight: {
        thin: fontWeight['thin'],
        light: fontWeight['light'],
        normal: fontWeight['normal'],
        medium: fontWeight['medium'],
        bold: fontWeight['bold'],
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
