/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#f1b14b",
          50: "#fcefdb",
          100: "#f9e0b7",
          200: "#f7d093",
          300: "#f5c881",
          400: "#f2b95d",
          500: "#f1b14b",
          600: "#c18e3c",
          700: "#a97c35",
          800: "#795926",
          900: "#60471e",
        },
        tahiti: {
          light: "#67e8f9",
          DEFAULT: "#06b6d4",
          dark: "#0e7490",
        },
      },
    },
  },
  plugins: [],
};
