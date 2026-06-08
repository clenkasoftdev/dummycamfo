/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy:  { DEFAULT: '#0c1a3c', light: '#1a2d5a' },
        red:   { DEFAULT: '#d41e44', light: '#fdf0f3' },
        grey: {
          50:  '#f7f8fa',
          100: '#f0f1f4',
          200: '#e2e4ea',
          400: '#9aa0b0',
          600: '#5c6378',
          800: '#2d3145',
        },
      },
      fontFamily: {
        sans:    ['DM Sans', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
