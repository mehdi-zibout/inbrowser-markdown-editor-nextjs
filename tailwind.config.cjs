/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    screens: {
      tablet: "710px",
      desktop: "992px",
    },
    colors: {
      orange: "#E46643",
      orangeHover: "#F39765",
      100: "#FFF",
      200: "#F5F5F5",
      300: "#E4E4E4",
      400: "#C1C4CB",
      500: "#7C8187",
      600: "#5A6069",
      700: "#35393F",
      800: "#2B2D31",
      900: "#1D1F22",
      1000: "#151619",
    },
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
      serif: ["Roboto Slab", "serif"],
      mono: ["Roboto mono", "monospace"],
    },
    fontSize: {
      hm: ["15px"],
      hs: ["14px", { letterSpacing: "2px", fontWeight: 500 }],
      bodym: ["13px", { fontWeight: 300 }],
      h1: ["32px", { fontWeight: 700 }],
      h2: ["28px", { fontWeight: 300 }],
      h3: ["24px", { fontWeight: 700 }],
      h4: ["20px", { fontWeight: 700 }],
      h5: ["16px", { fontWeight: 700 }],
      h6: ["14px", { fontWeight: 700 }],
      pp: ["14px", { lineHeight: "24px" }],
      ppb: ["14px", { lineHeight: "24px", fontWeight: 700 }],
      markdown: ["14px", { lineHeight: "24px" }],
    },
    extend: {},
  },
  plugins: [],
};