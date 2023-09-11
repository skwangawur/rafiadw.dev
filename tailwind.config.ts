module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "charcoal-gray": "#161b22",
        "state-gray": "#7d8590",
        coral: "#f78166",
        "dark-slate-gray": "#2f363f",
        "dark-charcoal-gray": "#21262d",
        Navbar: "rgba(33, 38, 45, 0.6)",
      },
      gridTemplateColumns: {
        layout: "250px 2fr",
      },
      animation: {
        wave: "wave 2s linear infinite",
      },
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      montserrat: ["Montserrat", "sans-serif"],
    },
  },
  plugins: [],
};
