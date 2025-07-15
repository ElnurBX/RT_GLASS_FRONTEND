// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./containers/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        text: "var(--text)",
        mainColor: "var(--main-color)",
        black: "var(--black)",
        secondaryText: "var(--secondary-text)",
        starColor: "var(--star-color)",
        white: "var(--white)",
        contactUsComponent: "var(--contact-us-component)",
      },
      fontFamily: {
        montserrat: ["var(--font-montserrat)", "sans-serif"],
        roboto: ["var(--font-roboto)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
        poppins: ["var(--font-poppins)", "sans-serif"],
        default: ["var(--font-default)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
