/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "media",
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: "#f7f5fb",
          raised: "#ffffff",
          dark: "#100e1c",
          "dark-raised": "#1b1930",
        },
        ink: {
          DEFAULT: "#17162a",
          soft: "#4b4869",
          dark: "#f4f3fb",
          "dark-soft": "#c7c4de",
        },
        muted: {
          DEFAULT: "#7a789a",
          dark: "#9a97ba",
        },
        violet: {
          DEFAULT: "#6c5ff5",
          deep: "#4d3fd1",
          dark: "#9186fb",
          "dark-deep": "#b1a6ff",
        },
        brand: {
          green: "#1ea55c",
          "green-dark": "#3ed17e",
          amber: "#b9790a",
          "amber-dark": "#f0b23d",
        },
      },
      fontFamily: {
        display: ["Spectral", "serif"],
        sans: ["Inter", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
      },
      boxShadow: {
        soft: "0 20px 50px -25px rgba(76, 63, 209, 0.35)",
        "soft-dark": "0 20px 50px -20px rgba(0, 0, 0, 0.55)",
      },
      maxWidth: {
        content: "1080px",
      },
    },
  },
  plugins: [],
};
