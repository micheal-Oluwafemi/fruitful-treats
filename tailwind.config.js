/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        greenColor: 'hsl(140, 40%, 48%)',
        firstColoralt: 'hsl(140, 40%, 44%)',
        titleColor: 'hsl(140, 4%, 12%)',
        textColor: ' hsl(140, 4%, 40%)',
        textColorLight: 'hsl(140, 4%, 64%)',
        whiteColor: 'hsl(0, 0%, 100%)',
        bodyColor: 'hsl(0, 0%, 100%)',
        containerColor: 'hsl(0, 0%, 95%)',
        bgCol: 'hsla(0, 0%, 0%, .5)',
        bgTransparent: 'rgba(12, 15,20,0.3)',
      },
      boxShadow: {
        img: 'drop-shadow(0 8px 12px hsla(0, 0%, 0%, .2))',
      },
      screens: {
        xs: '450px',
        md: '658px',
        lg: '976px',
        xl: '1024px',
        xxl: '2560px',
        xlg: '1440px',
      },
      fontFamily: {
        cherryBoom: ['"Cherry Bomb One"', 'sans-serif'],
        poppins: ['"Poppins"', 'sans-serif'],
        cardFont: ['"OCR A Std"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
