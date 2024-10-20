import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        customTheme: {
          primary: "hsl(0 0% 95%)",
          secondary: "hsl(0 0% 56%)",
          accent: "hsl(203 39% 29%)",
          "base-100": "hsl(203 39% 29%)",
          "--test": "white",
        },
      },
      "light",
      "dark",
    ],
  },
} satisfies Config;
