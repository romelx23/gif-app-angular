module.exports = {
  content: ["./src/**/*.{html,ts}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        sanAnne: "url('https://scontent.flim17-1.fna.fbcdn.net/v/t39.30808-6/274070697_1053043102221277_6720932060399029092_n.jpg?_nc_cat=1&ccb=1-5&_nc_sid=8bfeb9&_nc_eui2=AeFWs5bGw2HSEwotDU08pZ1fjT_SHDd8pQmNP9IcN3ylCeOUNiFEgrvByCsCwNoGyZ-bZDxgjKMY82pyc4WN-L3y&_nc_ohc=Az9T_O8zcXQAX_7h7Ii&_nc_oc=AQl4yxw1D_IHcz_VitvbCl13HGAG8BOPJHE6-bsbqaXpfiCO1rJaL2CDc-cOY76Nx9A&_nc_ht=scontent.flim17-1.fna&oh=00_AT92F3LG19LYybWnpm9P72iyAnmwjtxp2Cw5YGJ4AcPCOw&oe=62103705')",
      },
      keyframes: {
        entryleft: {
          "0%": {
            transform: "translateX(2rem)",
          },
          "100%": {
            transform: "translateX(0)",
          },
        },
        entryright: {
          "0%": {
            transform: "translateX(-2rem)",
          },
          "100%": {
            transform: "translateX(0)",
          },
        },
      },
      animation: {
        entryleft: "entryleft 1s ease-in-out",
        entryright: "entryright 1s ease-in-out",
      },
    },
  },
  plugins: [],
};
