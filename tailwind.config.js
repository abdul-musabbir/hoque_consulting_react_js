/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        greens: "#B9FD50",
        blacks: "#111204",
        logoBar: "#222",
      },
      textColor: {
        greens: "#B9FD50",
      },

      animation: {
        "loop-scroll": "loop-scroll 50s linear infinite",
      },
      keyframes: {
        "loop-scroll": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },

      fontFamily: {
        poppins: "Poppins",
        inter: "Inter",
        roboto: "Roboto",
        montserrat: "Montserrat",
        lato: "Lato",
        "open-sans": "Open Sans",
        "source-sans-pro": "Source Sans Pro",
        raleway: "Raleway",
      },
    },
  },
  plugins: [],
};
