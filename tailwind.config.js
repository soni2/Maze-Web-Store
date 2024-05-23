/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#22c569",
        blackDark: "#131313",
        keppel: {
          50: "#f0fdf5",
          100: "#dcfce9",
          200: "#bbf7d4",
          300: "#86efb3",
          400: "#39db7f",
          500: "#16a353",
          600: "#158044",
          700: "#166539",
          800: "#145331",
          900: "#052e19",
          950: "#0a1c16",
        },
      },
      dropShadow: {
        button: "0 0 15px #22c569, 0 0 50px",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
