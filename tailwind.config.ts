
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    extend: {
      fontFamily: {
        pixel: ['"Press Start 2P"', 'cursive'],
      },
      colors: {
        background: '#0d0c1b',
        neon: {
          green: '#00ff99',
          blue: '#30c0ff',
          purple: '#c084fc',
          pink: '#ff69b4',
        },
      },
      boxShadow: {
        'pixel': '4px 4px 0 rgba(0, 0, 0, 0.2)',
        'pixel-hover': '2px 2px 0 rgba(0, 0, 0, 0.2)',
        'neon': '0 0 5px theme(colors.neon.purple), 0 0 20px theme(colors.neon.purple)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
