"use client";
import { Box, useTheme } from "@mui/joy";

export const MainContent = ({ children }: { children: React.ReactNode }) => {
  const theme = useTheme();
  return (
    <Box sx={{
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      paddingTop: "39px",
    }}>
      <Box sx={{
        maxWidth: theme.maxPostWidth,
        width: theme.maxPostWidth
      }} pt={1} pb={1}>
        {children}
      </Box>
    </Box>
  );
};
