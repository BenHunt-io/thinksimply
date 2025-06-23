"use client";
import { Box, useTheme } from "@mui/joy";

export const MainContent = ({ children }: { children: React.ReactNode }) => {
  const theme = useTheme();
  return (
    <Box sx={{ paddingTop: "39px" }}>
      <Box pt={1} pb={1}>
        {children}
      </Box>
    </Box>
  );
};
