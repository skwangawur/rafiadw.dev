module.exports = {
    darkMode: "class",
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
                "card-lg": "repeat(2 , minmax(0, 260px))",
                "card-2xl": "repeat(2 , minmax(0, 350px))",
            },
            Keyframes: {
                hired: {
                    "0%, 100%": { transform: "scale(1)" },
                    "50%": { transform: "scale(2)" },
                },
            },
            animation: {
                wave: "wave 2s linear infinite",
                hired: "hired 2s ease-out infinite",
            },
        },
        fontFamily: {
            poppins: ["Poppins", "sans-serif"],
            montserrat: ["Montserrat", "sans-serif"],
        },
        backgroundImage: {
            night: "url('/src/assets/gif/night.gif')",
            sky: "url('src/assets/gif/sky.gif')",
        },
    },
    plugins: [],
};
