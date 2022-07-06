module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
  gothic: ['Uncial Antiqua'],
  draft: ['Courier Prime'],
    },
    extend: {
      animation: {
        "fade": "fadeOut .9s ease-in-out",
      },

      // that is actual animation
      keyframes: (theme) => ({
        'fadeOut': {
          "0%": { backgroundColor: theme("colors.transparent") },
          "100%": { backgroundColor: theme("colors.blue.600") },
        },
      }),
    },
  },
  plugins: [],
}
