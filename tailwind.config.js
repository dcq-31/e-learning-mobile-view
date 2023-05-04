/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#fad9ab",
          DEFAULT: "#f3b248",
          dark: "#976d29",
          50: "#fce9cd",
          100: "#fad9ab",
          200: "#f9d299",
          300: "#f8ca87",
          400: "#f6c274",
          500: "#f5ba60",
          600: "#d39a3d",
          700: "#b48333",
          800: "#976d29",
          900: "#5e4316",
        },
        secondary: {
          light: "#e5e5e5",
          DEFAULT: "#1d1d1d",
          dark: "#090909",
          50: "#cccccc",
          100: "#b4b4b4",
          200: "#858585",
          300: "#6e6e6e",
          400: "#585858",
          500: "#303030",
          600: "#181818",
          700: "#131313",
          800: "#090909",
          900: "#050505",
        },
      },
    },
  },
  plugins: [],
};
