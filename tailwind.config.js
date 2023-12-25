/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        // space: ["Space Grotesk", "Hind Siliguri"],
        firacode: "'Fira Code', monospace",
      },
      colors: {
        primary: "#C52127",
        card: "#343a40",
        element: "#212529",
        cdn: "#21252952",
        caution: "#ffc000",
      },
      padding: {
        normal: "8px 15px",
        tag: "3px 10px",
      },
      fontSize: {
        small: "10px",
      },
      zIndex: {
        1: "1",
      },
    },
  },
  plugins: [],
};
