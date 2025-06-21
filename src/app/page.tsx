"use client";
import { Box, Stack, Typography, useTheme } from "@mui/joy";
import dayjs from "dayjs";

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
  const theme = useTheme();
  return (
    <Box sx={{ paddingTop: "86px" }}>
      <Box sx={{ padding: theme.spacing() }}>{children}</Box>
    </Box>
  );
};

const PostContainer = () => {
  return (
    <Stack spacing={4}>
      <Post
        title="Why do we experience the colors we experience?"
        date={dayjs("2025-07-01")}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
      <Post
        title="In defense of crypto"
        date={dayjs("2025-07-01")}
        description="Despite the crypto industry's notoriety for fraud, crypto is valuable. Learn why."
      />
      <Post
        title="Who are you?"
        date={dayjs("2021-07-01")}
        description="Fundamentally, what makes you, you?"
      />
    </Stack>
  );
};

const Post = (props: {
  title: string;
  date: dayjs.Dayjs;
  description: string;
}) => {
  const theme = useTheme();
  return (
    <Stack>
      <Typography level="h3">{props.title}</Typography>
      <Typography level="body-sm">{props.description}</Typography>
      <Typography level="body-xs" sx={{ color: theme.palette.neutral[500] }}>
        {props.date.format("MMM DD YYYY")}
      </Typography>
    </Stack>
  );
};

export default function Home() {
  const theme = useTheme();
  return (
    <Box>
      <Header />
      <Content>
        <Stack>
          <Typography
            level="body-md"
            sx={{
              color: theme.palette.common.black,
              marginBottom: theme.spacing(4),
            }}
          >
            <span style={{ fontWeight: 200 }}>by </span>
            <span>Ben Hunt</span>
          </Typography>
          <PostContainer />
        </Stack>
      </Content>
    </Box>
  );
}
