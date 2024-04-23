/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F35F3B",
        header: "#242E52",
        footer: "#333437",
        textWhite: "E7E7E7",
      },
      fontFamily: {
        custom: ["Inria Sans"],
      },
    },
  },
  plugins: [],
};
