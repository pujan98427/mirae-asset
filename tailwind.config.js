// tailwind.config.js
module.exports = {
  content: ["./index.html", "./about.html", "./src/**/*.{js,css}"],
  theme: {
    extend: {
      colors: {
        primary: "#F58220",
        secondary: "#00427A",
        dark: "#242424",
        "dark-2": "#2C2C2C",
        grey: "#575757",
        "light-grey": "#ECEFF1",
        "light-grey-2": "#979797",
        "main-blue": "#00427A",
      },
      fontSize: {
        xs: ["0.75rem", "1.5"],
        sm: ["0.875rem", "1.42"],
        base: ["1rem", "1.75"],
        lg: ["1.125rem", "1.6"],
        xl: ["1.25rem", "1.6"],
        "2xl": [
          "clamp(1.25rem, calc(1.25rem + ((1vw - 7.68px) * 0.1736)), 1.375rem)",
          "1.2",
        ],
        "3xl": [
          "clamp(1.375rem, calc(1.375rem + ((1vw - 7.68px) * 0.1736)), 1.5rem)",
          "1.2",
        ],
        "4xl": ["clamp(1.5rem, 0.8948rem + 1.0017vw, 1.75rem);", "1.21"],
        "5xl": ["clamp(1.75rem, 0.5747rem + 1.6694vw, 2rem)", "1.21"],
        "6xl": ["clamp(1.75rem, 0.7896rem + 2.0033vw, 2.5rem)", "1.4"],
        "7xl": ["clamp(2rem, 0.5rrem + 3.125vw, 3rem)", "1.4"],
        "8xl": ["clamp(3rem, 2.5rem + 1.0416666666666665vw, 3.75rem)", "1.4"],
        "9xl": ["clamp(1.5rem, 2.5rem + 1.0416666666666665vw, 5rem)", "1.4"],
      },
      fontFamily: {
        body: ["SpoqaHanSans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
