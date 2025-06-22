"use client";
import { Box, Menu, Stack, Typography, useTheme } from "@mui/joy";

export const LineHeader = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        p: theme.spacing(1),
        position: "fixed",
        height: "70px",
        top: 0,
        left: 0,
        right: 0,
        width: "100%",
        backgroundColor: "#2B2B2B",
      }}
    >
      <Stack>
        <Typography
          textAlign="center"
          level="h2"
          fontWeight={500}
          sx={{ color: theme.palette.common.white }}
        >
          Think Simply
        </Typography>

        <Menu />
      </Stack>
    </Box>
  );
};
