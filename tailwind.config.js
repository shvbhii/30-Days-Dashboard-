/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme');

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...fontFamily.sans],
      },
      // === NEW COLOR PALETTE ===
      colors: {
        dark: {
          background: '#030712', // A very dark, near-black blue
          surface: '#111827',    // The color for cards and popups
          primary: '#22d3ee',    // A vibrant cyan for highlights
          secondary: '#ec4899',  // A vivid pink/magenta for other accents
        },
        light: {
          background: '#f9fafb', // A clean, light gray
          surface: '#ffffff',    // Pure white for cards
          primary: '#0891b2',    // A stronger, more professional cyan
          secondary: '#be185d',  // A deeper pink
        }
      },
      // === ANIMATION FOR A MORE SUBTLE GRADIENT ===
      animation: {
        'gradient-bg': 'gradient-bg 15s ease infinite',
      },
      keyframes: {
        'gradient-bg': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        }
      }
    },
  },
  // === REGISTER THE NEW PLUGIN ===
  plugins: [
    require('tailwindcss-textshadow'),
  ],
}