"use client";
import { Box, Link, Stack, Typography, useTheme } from "@mui/joy";

export const Header = () => {
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

const Menu = () => {
  const theme = useTheme();
  return (
    <Stack direction="row" spacing={1} justifyContent={"center"} width={"100%"}>
      <Link
        sx={{
          color: theme.palette.common.white,
          textDecoration: "none",
        }}
      >
        posts
      </Link>
      <Typography
        display={"inline"}
        sx={{
          color: theme.palette.common.white,
        }}
      >
        me
      </Typography>
    </Stack>
  );
};
