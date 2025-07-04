"use client";
import { CssVarsProvider, extendTheme } from "@mui/joy";




const theme = extendTheme({
  maxPostWidth: 800,
  fontFamily: {
    body: "Roboto",
    display: "Roboto",
  },
  colorSchemes: {
    light: {
      palette: {
        primary: {
          50: "#e8eaf6",
          100: "#c5cae9",
          200: "#9fa8da",
          300: "#7986cb",
          400: "#5c6bc0",
          500: "#3f51b5",
          600: "#3949ab",
          700: "#303f9f",
          800: "#283593",
          900: "#1a237e",
        },
      },
    },
  },
});

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return <CssVarsProvider theme={theme}>{children}</CssVarsProvider>;
};
