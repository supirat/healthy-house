// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{html,js,vue}", // ระบุไฟล์ที่ใช้ Tailwind
  ],
  theme: {
    extend: {
      colors: {
        amazon: {
          50: "#e3f1ea", // อ่อนมาก
          100: "#c8e3d6",
          200: "#a7d0bc",
          300: "#86bda3",
          400: "#65aa8a",
          500: "#317343", // Default (Primary)
          600: "#2c673c",
          700: "#255833",
          800: "#1e4a2b",
          900: "#183c22",
        },
        cream: {
          50: "#fffefb", // อ่อนมาก
          100: "#fefcf7",
          200: "#fdf9f2",
          300: "#fbf6ed",
          400: "#faf3e8",
          500: "#fbf9e9", // Default (Cream)
          600: "#d8d7c8",
          700: "#b5b5a7",
          800: "#929285",
          900: "#6e6e64",
        },
        brown: {
          50: "#f2efe9", // อ่อนมาก
          100: "#dfd6c4",
          200: "#c4b5a3",
          300: "#a99682",
          400: "#8e7762",
          500: "#958772", // Default (Brown)
          600: "#796e5e",
          700: "#61584c",
          800: "#49423a",
          900: "#322d28",
        },
        greenLight: {
          50: "#eef9f3", // อ่อนมาก
          100: "#d4f0e0",
          200: "#b7e5ca",
          300: "#9bcca1",
          400: "#85b58b",
          500: "#9bcca1", // Default (Green Light)
          600: "#84aa87",
          700: "#6c8a6f",
          800: "#556c57",
          900: "#3d4e40",
        },
        mint: {
          50: "#e3faea", // อ่อนมาก
          100: "#c4f3d4",
          200: "#a1eabc",
          300: "#70ce94", // Default (Mint)
          400: "#5ab27d",
          500: "#70ce94", // Default (Mint)
          600: "#58a77b",
          700: "#438264",
          800: "#305e4b",
          900: "#1f3b32",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        prompt: ["Prompt", "sans-serif"],
      },
      borderRadius: {
        xl: "1.5rem",
        "2xl": "2rem",
      },
      boxShadow: {
        soft: "0 4px 6px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};
