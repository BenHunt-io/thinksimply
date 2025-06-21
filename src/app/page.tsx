"use client";
import { Box } from "@mui/joy";

const Header = () => {
  return (
    <Box
      sx={{
        position: "fixed",
        height: "60px",
        top: 0,
        left: 0,
        right: 0,
        width: "100%",
        backgroundColor: "#2B2B2B",
      }}
    ></Box>
  );
};

export default function Home() {
  return <Header />;
}
