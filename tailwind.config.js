const f = (size, lh, ls, w) => [size, { lineHeight: lh, letterSpacing: ls, fontWeight: w }];
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        "on-primary-fixed-variant": "#7e2c04", "on-surface-variant": "#56423b", "inverse-surface": "#243141",
        "on-tertiary": "#ffffff", "on-tertiary-fixed": "#291800", "on-error": "#ffffff", "primary-fixed": "#ffdbce",
        "tertiary-container": "#9c6b15", "on-secondary-fixed-variant": "#274e3d", "on-secondary-container": "#436b58",
        "surface-container-lowest": "#ffffff", "on-tertiary-container": "#fffbff", "surface-container-low": "#eef4ff",
        primary: "#9a4018", "secondary-fixed-dim": "#a5d0b9", "secondary-container": "#beead1",
        "on-primary-fixed": "#370e00", "primary-fixed-dim": "#ffb599", "on-tertiary-fixed-variant": "#624000",
        "secondary-fixed": "#c1ecd4", "surface-container-highest": "#d6e4f9", "inverse-primary": "#ffb599",
        "surface-dim": "#cddbf0", "on-surface": "#0f1c2c", "tertiary-fixed-dim": "#f9bb61", "outline-variant": "#dcc1b7",
        surface: "#f8f9ff", "primary-container": "#ba582e", "surface-container": "#e5efff", "surface-variant": "#d6e4f9",
        "on-primary": "#ffffff", background: "#f8f9ff", error: "#ba1a1a", "surface-bright": "#f8f9ff",
        "tertiary-fixed": "#ffddb2", "error-container": "#ffdad6", "on-primary-container": "#fffbff",
        "surface-tint": "#9d431b", "on-secondary": "#ffffff", "inverse-on-surface": "#e9f1ff", outline: "#89726a",
        "on-background": "#0f1c2c", tertiary: "#7e5300", "on-secondary-fixed": "#002114", secondary: "#3f6653",
        "on-error-container": "#93000a", "surface-container-high": "#dbe9fe",
      },
      borderRadius: { DEFAULT: "0.25rem", lg: "0.5rem", xl: "0.75rem", full: "9999px" },
      fontFamily: {
        "body-md": ["Plus Jakarta Sans"], "body-lg": ["Plus Jakarta Sans"], "body-sm": ["Plus Jakarta Sans"],
        "title-md": ["Plus Jakarta Sans"], "label-mono-stat": ["Plus Jakarta Sans"],
        "display-hero": ["Montserrat"], "display-hero-mobile": ["Montserrat"], "headline-md": ["Montserrat"],
        "headline-lg": ["Montserrat"], "headline-lg-mobile": ["Montserrat"], "headline-sm": ["Montserrat"], "label-caps": ["Montserrat"],
      },
      fontSize: {
        "body-md": f("15px", "24px", "0em", "400"), "body-lg": f("18px", "28px", "-0.005em", "400"),
        "body-sm": f("13px", "20px", "0.01em", "400"), "title-md": f("16px", "24px", "0em", "600"),
        "label-mono-stat": f("12px", "16px", "0.04em", "600"), "label-caps": f("11px", "16px", "0.08em", "700"),
        "headline-sm": f("20px", "28px", "0em", "600"), "headline-md": f("28px", "36px", "-0.01em", "600"),
        "headline-lg": f("40px", "48px", "-0.015em", "600"), "headline-lg-mobile": f("28px", "36px", "-0.01em", "600"),
        "display-hero": f("56px", "64px", "-0.02em", "700"), "display-hero-mobile": f("36px", "44px", "-0.01em", "700"),
      },
    },
  },
  plugins: [],
};
