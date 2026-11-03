import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        night: "#0E1315",
        ink: "#151B1E",
        paper: "#F4F1EA",
        sand: "#EAE4D8",
        line: "#D6CEBF",
        text: "#1B1F21",
        mute: "#5B625F",
        gold: "#9C6A25",
        goldl: "#D99941",
        pearl: "#F4F1EA",
      },
      fontFamily: {
        sans: ['"Pretendard Variable"', "Pretendard", "system-ui", "-apple-system", "sans-serif"],
        serif: ['"Noto Serif KR"', "serif"],
      },
      borderRadius: { DEFAULT: "2px" },
      maxWidth: { site: "1280px" },
    },
  },
  plugins: [],
};
export default config;
