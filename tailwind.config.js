/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ardena-dark': '#0B0F1A',
        'ardena-cyan': '#2BC7F4',
        'ardena-light-gray': '#D3D7E0',
      }
    },
  },
  plugins: [],
}

