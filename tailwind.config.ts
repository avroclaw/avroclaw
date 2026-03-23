import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#09090B",
        foreground: "#FAFAFA",
        muted: "#71717A",
        "muted-light": "#A1A1AA",
        border: "rgba(74, 222, 128, 0.12)",
        "border-subtle": "rgba(255,255,255,0.06)",
        emerald: {
          glow: "rgba(74, 222, 128, 0.10)",
          DEFAULT: "#4ADE80",
          dim: "rgba(74, 222, 128, 0.6)",
        },
        zinc: {
          800: "#27272A",
          850: "#1C1C1F",
          900: "#18181B",
          950: "#09090B",
        },
      },
      fontFamily: {
        sans: ["var(--font-nunito-sans)", "system-ui", "sans-serif"],
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        pulse: "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
