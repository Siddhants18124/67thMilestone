import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        mobile_s: "320px",
        mobile_m: "375px",
        mobile_l: "425px",
      },
      backgroundImage: {
        bgGrad: "url('/assets/background.jpg')",
        culturalPx: "url('/assets/cultural.jpg')",
        technicalPx: "url('/assets/technical.jpeg')",
        mgmtPx: "url('/assets/management.png')",
      },
    },
  },
  important: true,
  plugins: [],
};

export default config;
