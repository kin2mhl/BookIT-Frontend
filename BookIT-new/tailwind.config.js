/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        gray: {
          "100": "#7c7c7c",
          "200": "rgba(0, 0, 0, 0.34)",
        },
        black: "#000",
        st: "#212832",
        blanchedalmond: "#ffe9c9",
        gainsboro: "rgba(217, 217, 217, 0.68)",
        royalblue: "#2670ff",
        deepskyblue: "#3ab3f7",
        st1: "#181e4b",
        slategray: "#5e6282",
        salmon: "#df6951",
      },
      spacing: {},
      fontFamily: {
        "anek-bangla": "'Anek Bangla'",
        baumans: "Baumans",
        aleo: "Aleo",
        "barlow-condensed": "'Barlow Condensed'",
        volkhov: "Volkhov",
        poppins: "Poppins",
      },
      borderRadius: {
        "2xl": "21px",
        "8xs": "5px",
        mid: "17px",
      },
    },
    fontSize: {
      "9xl": "28px",
      "17xl": "36px",
      "51xl": "70px",
      "13xl": "32px",
      "7xl": "26px",
      base: "16px",
      "29xl": "48px",
      "5xl": "24px",
      "11xl": "30px",
      lg: "18px",
      xl: "20px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
