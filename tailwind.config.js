const { Opacity } = require("@material-ui/icons");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
  gothic: ['Uncial Antiqua'],
  draft: ['Courier Prime'],
  headers: ['Josefin Sans'],
  headers2:["Zilla Slab"],
  options: ['Cinzel Decorative'],
  elegant: ['Playfair Display']
    },
    extend: {
      animation: {
        "fade": "fadeOut .9s ease-in-out",
        "slideDown": "fadeSlideDown .4s ease-in-out",
        "fadein": "fadeInOpacity .6s ease-in-out"
      },

      // that is actual animation
      keyframes: (theme) => ({
        'fadeOut': {
          "0%": { backgroundColor: theme("colors.transparent") },
          "100%": { backgroundColor: theme("colors.blue.600") },
        },
        "fadeSlideDown": {
          "0%": { transform: "translateY(-100%)",
          },
          "100%": {   transform: "translateY(0)" ,
          },
        },
        "fadeInOpacity": {
          "0%": { 
          // display: "block",
          opacity: '30%'
          },
         
       
          
          "100%": { 
          // display: "hidden",
          opacity: '100%'
          },
        }
        
      }),
    },
  },
  plugins: [],
}
