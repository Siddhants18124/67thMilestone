/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        mobile_s: "320px",
        mobile_m: "375px",
        mobile_l: "425px",
      },
    },
  },
  plugins: [],
};
