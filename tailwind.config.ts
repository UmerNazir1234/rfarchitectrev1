import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ["var(--font-nunito)"],
      nunito: ["var(--font-nunito)"],
      advent_Pro: ["var(--font-advent-pro)"],
    },
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
        grayDark:"var(--bg-gray)",
        facebook: "var(--facebook)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      zIndex: {
        "1": "1",
        "2": "2",
        "3": "3",
        "4": "4",
        "5": "5",
        "6": "6",
        "7": "7",
        "8": "8",
        "60": "60",
        "70": "70",
        "80": "80",
        "90": "90",
        "100": "100",
        "999": "999",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
export default config;
