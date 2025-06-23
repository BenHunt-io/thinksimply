"use client";
import { Box, Link, Stack, Typography, useTheme } from "@mui/joy";

export const LineHeader = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        position: "fixed",
        height: "30px",
        top: 0,
        left: 0,
        width: "100%",
      }}
    >
      <Box
        padding={1}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        height="100%"
        borderBottom={`1px solid ${theme.palette.common.black}`}
      >
        <Typography
          level="body-md"
          fontWeight={500}
          sx={{ color: theme.palette.common.black }}
        >
          Think Simply
        </Typography>

        <Menu />
      </Box>
    </Box>
  );
};

const Menu = () => {
  const theme = useTheme();
  return (
    <Stack direction="row" spacing={1}>
      <Link
        sx={{
          color: theme.palette.common.black,
        }}
      >
        posts
      </Link>
      <Link
        sx={{
          color: theme.palette.common.black,
        }}
      >
        me
      </Link>
    </Stack>
  );
};
