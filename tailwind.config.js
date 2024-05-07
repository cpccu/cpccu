/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      mdd: "905px",
      lg: "976px",
      xl: "1440px",
      xxl: "1920px",
    },
    extend: {
      colors: {
        primary: "#F35F3B",
        header: "#3b60c9",
        headerHover: "#5b80e6",
        footer: "#333437",
        count: "#161F37",
        responsibility: "#ECF1F5",
        textWhite: "E7E7E7",
        scroll: "#334caf",
      },
      fontFamily: {
        custom: ["Inria Sans"],
      },
    },
  },
  plugins: [],
};
