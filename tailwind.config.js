module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        red: '#FF7979',
        green: '#38CC8B',
        blue: {
          DEFAULT: '#5E54A4',
          dark: '#3D3B48' 
        },
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
