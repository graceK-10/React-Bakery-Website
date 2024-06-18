/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#C3B1E1",
        secondary: "#957DAD",
        tertiary: "#3C1361",
        fourthColor: "#52307C",
        bgColor: "#c3b1e180",
      },
      container: {
        center: true,
        padding: {
          default: "2rem",
          sm: "1rem",
        },
      }
    },
  },
  plugins: [],
}

