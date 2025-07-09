"use client";
import { Stack, Typography, useTheme } from "@mui/joy";
import { EmailSubscriptionForm } from "./components/EmailSubscriptionForm.tsx";
import { PostPreviewList } from "./components/PostPreview.tsx";



export default function Home() {
  const theme = useTheme();
  return (
    <Stack spacing={2}>
      <Typography
        level="body-md"
        sx={{
          color: theme.palette.common.black,
        }}
      >
        <span style={{ fontWeight: 200 }}>by </span>
        <span>Ben Hunt</span>
      </Typography>
      <PostPreviewList />
      <EmailSubscriptionForm />
    </Stack>
  );
}
