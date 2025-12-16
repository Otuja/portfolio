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
        matrix: {
          green: "#00FF41",
          dark: "#0D0208",
          black: "#000000",
        },
        primary: {
          DEFAULT: "#00FF41",
          foreground: "#000000",
        },
        secondary: {
          DEFAULT: "#003B00",
          foreground: "#00FF41",
        },
        background: "#000000",
      },
      fontFamily: {
        mono: ['"Courier New"', "Courier", "monospace"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
