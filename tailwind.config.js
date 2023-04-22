/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        black: "#2b2b2b",
        btn: "#3d4451",
        placeholder: "#6b87b2",
        input: "#254263",
        slot: "#fafbff",
        grey: "#efefef",
        primary: {
          100: "#dfecfd",
          200: "#e0ecfd",
        },
        outline: "#8471e5",
      },
    },
  },
  plugins: [],
};
