import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#166534", // Court Emerald Green
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#f8fafc",
          foreground: "#0f172a",
        },
        destructive: {
          DEFAULT: "#dc2626",
          foreground: "#ffffff",
        },
        muted: {
          DEFAULT: "#f1f5f9",
          foreground: "#64748b",
        },
        accent: {
          DEFAULT: "#fef3c7", // Subtle gold accent
          foreground: "#78350f",
        },
        popover: {
          DEFAULT: "#ffffff",
          foreground: "#0f172a",
        },
        card: {
          DEFAULT: "#ffffff",
          foreground: "#0f172a",
        },
        // Dedicated Judicial Brand Palette
        court: {
          green: {
            50: "#f0fdf4",
            100: "#dcfce7",
            200: "#bbf7d0",
            300: "#86efac",
            400: "#4ade80",
            500: "#22c55e",
            600: "#16a34a",
            700: "#15803d",
            800: "#166534", // Legacy Primary Court Emerald
            900: "#14532d", // Deep Forest Green
            950: "#052e16", // Midnight Judicial Emerald
          },
          gold: {
            50: "#fffbeb",
            100: "#fef3c7",
            200: "#fde68a",
            300: "#fcd34d",
            400: "#fbbf24",
            500: "#c59b27", // Rich Antique Judicial Gold
            600: "#b45309", // Deep Gold/Amber
            700: "#92400e",
            800: "#78350f",
            900: "#451a03",
          },
          sand: {
            50: "#fcfbf7",
            100: "#f7f5ef",
            200: "#efece2",
            300: "#ded8c5",
            400: "#c2b89c",
          },
          seal: {
            DEFAULT: "#881337", // Crimson wax seal red
            dark: "#4c0519",
          },
          slate: {
            800: "#1e293b",
            900: "#0f172a",
            950: "#020617",
          }
        }
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        'judicial': '0 4px 20px -2px rgba(22, 101, 52, 0.12), 0 2px 6px -1px rgba(22, 101, 52, 0.08)',
        'judicial-gold': '0 4px 20px -2px rgba(197, 155, 39, 0.2), 0 2px 6px -1px rgba(197, 155, 39, 0.1)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.08)',
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
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config

