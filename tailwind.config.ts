import { nunito } from "@/app/layout";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nunito: ["var(--font-nunito)"],
        advent_Pro: ["var(--font-advent-pro)"],
      },
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        primarylight: "var(--color-primary-light)",
        primarybtn: "var(--color-btn-primary)",
        secondarybtn: "var(--color-btn-secondary)",
        light: "var(--color-bg)",
        blueLight: "var(--color-bg-lightBlue)",
        themblack: "var(--color-foreground-rgb)",
        textLight: "var(--color-text-light)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
export default config;
