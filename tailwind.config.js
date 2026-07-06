/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBg: "#050505",
        darkCard: "#0b0b0b",
        darkGraphite: "#121212",
        borderGray: "#1a1a1a",
        techCyan: {
          DEFAULT: "#00f0ff",
          dark: "#00b8c4",
          light: "#80f8ff",
          glow: "rgba(0, 240, 255, 0.15)",
        },
        techBlue: {
          DEFAULT: "#0072ff",
          dark: "#0051b8",
          light: "#80b9ff",
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        display: ["var(--font-space-grotesk)", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        "pulse-slow": "pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
        "grid-fade": "gridFade 2s ease-out forwards",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        gridFade: {
          "0%": { opacity: 0 },
          "100%": { opacity: 0.15 },
        }
      }
    },
  },
  plugins: [],
};
