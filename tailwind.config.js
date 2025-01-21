/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "nature-split": "linear-gradient(90deg, #53c58c 50%, #eff9ef 50%)",
        "ocean-split": "linear-gradient(90deg, #3494b3 50%, #e6f3f7 50%)",
        "desert-split": "linear-gradient(90deg, #e67e4a 50%, #fff5eb 50%)",
        "cherry-split": "linear-gradient(90deg, #e4a7b5 50%, #fdf2f4 50%)",
        "lavender-split": "linear-gradient(90deg, #9d8cd6 50%, #f6f3ff 50%)",
        "midnight-split": "linear-gradient(90deg, #7aa2f7 50%, #1a1b26 50%)",
        "forest-split": "linear-gradient(90deg, #7fb685 50%, #1b2121 50%)",
        "obsidian-split": "linear-gradient(90deg, #8b60ed 50%, #1a1a1d 50%)",
        "ember-split": "linear-gradient(90deg, #ff6b4a 50%, #1f1d1d 50%)",
        "chocolate-split": "linear-gradient(90deg, #c17f59 50%, #211d1b 50%)",
      },
      textShadow: {
        outline:
          "2px 0 #fff, -2px 0 #fff, 0 2px #fff, 0 -2px #fff, 1px 1px #fff, -1px -1px #fff, 1px -1px #fff, -1px 1px #fff",
      },
    },
    colors: {
      dark: "#271E0D",
      light: "#E2DCD1",
      greenl: "#8ABF59",
      greend: "#6A8C45",
      white: "#efefef",
      white2: "#f3f3f3",
      gray: "#333333",
      primary: "var(--color-primary)",
      primarylighter: "var(--color-primary-lighter)",
      secondary: "var(--color-secondary)",
      accent: "var(--color-accent)",
      text: "var(--color-text)",
      textsecondary: "var(--color-text-secondary)",
      background: "var(--color-background)",
    },
  },
  plugins: [
    function ({ addUtilities, theme }) {
      const textShadowUtilities = Object.entries(theme("textShadow", {})).map(
        ([key, value]) => ({
          [`.text-shadow-${key}`]: {
            "text-shadow": value,
          },
        })
      );
      addUtilities(textShadowUtilities);
    },
  ],
  variants: {
    extend: {
      display: ["group-hover"],
      backgroundOpacity: ["active"],
    },
  },
};
