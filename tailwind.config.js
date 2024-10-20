/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}"],
  theme: {
    extend: {
      colors: {
        customWhite: "#FEFFF1",
        customBlack: "#09030D",
        customRed: "#CB0400",
      },
      cursor: {
        handcursor: "url(/cursor.png) 25 25, pointer",
        click: "url(/click.png) 25 25, pointer",
      },
      fontFamily: {
        display: ["Playfair Display", "serif"],
      },
      animation: {
        "infinite-scroll": "infinite-scroll 25s linear infinite",
      },
      keyframes: {
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [],
};
