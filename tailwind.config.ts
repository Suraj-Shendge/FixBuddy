import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          indigo: "#4F46E5",
          electric: "#2563EB",
          neon: "#22C55E"
        }
      },
      boxShadow: {
        glass: "0 12px 40px rgba(37,99,235,0.16)"
      },
      borderRadius: {
        "2xl": "1rem"
      }
    }
  },
  plugins: []
};

export default config;
