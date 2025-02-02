module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        light: "#f6ddd5",
        dark: "#141623",
        primary: "#7f150c",
        secondary: "#c23d31",
        info: "#f28d51",
        accent1: "#754526",
        accent2: "#9c5d4e",
        accent3: "#ddafa2",
        success: "#5ea316",
        warning: "#febf69",
        danger: "#f00a66",
        white: "#ffffff",
        background: "#f6eae9",
        background2: "#f1dcda",
        blight: "#C98895",
        bdark: "#B66878",
      },
    },
    fontFamily: {
      body: [
        "Inter",
        "ui-sans-serif",
        "system-ui",
        "-apple-system",
        "system-ui",
        "Segoe UI",
        "Roboto",
        "Helvetica Neue",
        "Arial",
        "Noto Sans",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "Noto Color Emoji",
      ],
      sans: [
        "Inter",
        "ui-sans-serif",
        "system-ui",
        "-apple-system",
        "system-ui",
        "Segoe UI",
        "Roboto",
        "Helvetica Neue",
        "Arial",
        "Noto Sans",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "Noto Color Emoji",
      ],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};
