/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        'custom': '13.49px 16.87px 67.47px 8.43px rgba(10, 10, 10, 1), -8.43px -16.87px 50.6px -16.87px rgba(72, 91, 113, 1)',
        'nustom': '0px 3.26px 3.26px 0px #FFFFFF26 inset, 0px 0px 48.91px 0px #FFFFFF0D inset, 9px 10px 7.1px 0px #00000066, -0.5px -0.5px 6.9px 0px #FFFFFF40'
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'jakarta': ['"Plus Jakarta Sans"', 'sans-serif'],
      },

      colors: {
        'custombackground': 'linear-gradient(139.14deg, #303439 12.4%, #161718 94.96%)',
      },
    },
  },
  plugins: [],
};
