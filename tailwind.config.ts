import type { Config } from "tailwindcss";

export default {
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
        primaryYellow: "#fcf3cc",
        primaryBlue: "#3e4350",
        blueText: "#004459"
      },
    },
  },
  plugins: [],
  safelist: [
    "hover:bg-slate-50",
    "hover:bg-slate-100",
    "hover:bg-slate-200",
    "hover:bg-slate-300",
    "hover:bg-slate-400",
    "hover:bg-slate-500",
    "hover:bg-slate-600",
    "hover:bg-slate-700",
    "hover:bg-slate-800",
    "hover:bg-slate-900",
    "hover:text-white",
    "hover:text-black",
  ],
} satisfies Config;
