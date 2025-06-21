"use client";
import { CssVarsProvider } from "@mui/joy";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return <CssVarsProvider>{children}</CssVarsProvider>;
};
