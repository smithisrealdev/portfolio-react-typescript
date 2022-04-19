module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    screens: {
      // '2xl': {'max': '1535px'},
      // // => @media (max-width: 1535px) { ... }

      'xl': {'max': '2800px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1336px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '1067px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '850px'},
      // => @media (max-width: 639px) { ... }

      'ss': {'max': '622px'},
      // => @media (max-width: 639px) { ... }
    },
    extend: {},
  },
  plugins: [],
}
