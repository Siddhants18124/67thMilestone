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
      backgroundImage: {
        bgGrad: "url('/assets/bg_grad_4.png')",
        culturalPx: "url('/assets/cultural.jpg')",
        technicalPx: "url('/assets/technical.jpeg')",
        mgmtPx: "url('/assets/management.png')",
      },
    },
  },
  important: true,
  plugins: [],
};
