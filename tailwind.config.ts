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
          primary: "hsl(0 0% 98%)",
          secondary: "hsl(0 0% 56%)",
          accent: "hsl(203 39% 29%)",
          "base-100": "hsl(203 39% 29%)",
          neutral: "hsl(203 39% 39%)",
        },
      },
      "light",
      "dark",
    ],
  },
} satisfies Config;
