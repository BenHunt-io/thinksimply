"use client";
import { Box, Stack, Typography, useTheme } from "@mui/joy";

const Header = () => {
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
      <Typography
        display={"inline"}
        sx={{
          color: theme.palette.common.white,
        }}
      >
        posts
      </Typography>
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

const Content = ({ children }: { children: React.ReactNode }) => {
  return <Box sx={{ paddingTop: "86px" }}>{children}</Box>;
};

export default function Home() {
  const theme = useTheme();
  return (
    <Stack>
      <Header />
      <Content>
        <Typography level="body-md" sx={{ color: theme.palette.common.black }}>
          <span style={{ fontWeight: 200 }}>by </span>
          <span>Ben Hunt</span>
        </Typography>
      </Content>
    </Stack>
  );
}
