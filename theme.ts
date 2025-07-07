"use client";

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#877754",
      dark: "#8a6c3a",
      light: "#e0d5b8",
    },
    secondary: {
      main: "#333333",
    },
    background: {
      default: "#FCF7F3",
    },
    text: {
      primary: "#333333",
    },
  },
  typography: {
    fontFamily: "var(--font-inter)",
    h1: {
      fontSize: "3rem",
      fontWeight: 700,
      color: "#ffffff",
    },
    subtitle1: {
      fontSize: "2rem",
      color: "#ffffff",
      fontFamily: "var(--font-inter)",
    },
    h2: {
      fontSize: "50px",
      fontWeight: 700,
      fontFamily: "var(--font-inter)",
      color: "#1f2937",
      display: "inline-block",
      position: "relative",
    },
    body1: {
      fontSize: "1rem",
      fontWeight: 400,
      color: "#4B5563",
      maxWidth: "600px",
    },
    button: {
      textTransform: "none",
      fontWeight: 600,
    },
  },
});

export default theme;
