"use client";
import { CssVarsProvider, extendTheme } from "@mui/joy";

const theme = extendTheme({
  fontFamily: {
    body: "Roboto",
    display: "Roboto",
  },
});

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return <CssVarsProvider theme={theme}>{children}</CssVarsProvider>;
};
