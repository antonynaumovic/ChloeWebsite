import {nextui} from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {

      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
      colors: {
        'background-yellow-light': '#FFF0F5',
        'background-yellow-dark': '#19191A',
        'circle-yellow': '#8B88F8',
        'circle-yellow-dark': '#9370DB',
        'paper-yellow': '#CF9FFF',
      },
    },
  },
  darkMode: "class",
 plugins: [nextui()],
}
