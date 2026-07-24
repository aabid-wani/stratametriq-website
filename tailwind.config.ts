import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: {
          DEFAULT: "#0b0f19",
          900: "#06090f",
          800: "#0b0f19",
          700: "#111827",
          600: "#1a233a",
          500: "#24314f",
        },
        electric: {
          DEFAULT: "#0d6efd",
          50: "#eff6ff",
          100: "#dbeafe",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#0d6efd",
          700: "#1d4ed8",
        },
        neon: {
          cyan: "#00f2fe",
          purple: "#a855f7",
          emerald: "#10b981",
        }
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "glass-card": "linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%)",
        "glass-header": "linear-gradient(180deg, rgba(11, 15, 25, 0.85) 0%, rgba(11, 15, 25, 0.75) 100%)",
        "glow-radial": "radial-gradient(circle at 50% 0%, rgba(13, 110, 253, 0.15) 0%, rgba(11, 15, 25, 0) 70%)",
      },
      boxShadow: {
        "glass": "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
        "glow-blue": "0 0 25px -5px rgba(13, 110, 253, 0.5)",
        "glow-cyan": "0 0 25px -5px rgba(0, 242, 254, 0.5)",
        "glow-purple": "0 0 25px -5px rgba(168, 85, 247, 0.5)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        }
      }
    },
  },
  plugins: [],
};

export default config;
