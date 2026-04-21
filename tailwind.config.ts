import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00FFA3",
        bg: "#0A0A0A",
      },
      backgroundColor: {
        black: "#000000",
        "gray-900": "#111111",
      },
    },
  },
  plugins: [],
};

export default config;
