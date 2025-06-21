"use client";
import { Box, useTheme } from "@mui/joy";

export const MainContent = ({ children }: { children: React.ReactNode }) => {
  const theme = useTheme();
  return (
    <Box sx={{ paddingTop: "86px" }}>
      <Box sx={{ padding: theme.spacing() }}>{children}</Box>
    </Box>
  );
};
