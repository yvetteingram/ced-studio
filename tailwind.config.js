/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#080808',
          card: '#111111',
          border: '#1F1F1F',
          silver: '#9CA3AF',
          cjones: '#00C2FF',
          hbmedia: '#A855F7',
          hbstream: '#22C55E',
          lilsaid: '#F59E0B',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
