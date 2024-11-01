import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        inputColor: "#F5F5F5",
        heroColor: "#211C24",
        lightBlue: "#EDEDED",
        textColor: "#909090",
        Graybg: "#353535"
      },
      fontFamily: {
        sans: ['Inter', 'Arial', 'sans-serif'], // Adding Inter font as default sans-serif
      },
    },
  },
  plugins: [],
};
export default config;
