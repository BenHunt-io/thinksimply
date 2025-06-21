import { Box } from "@mui/joy";

const Header = () => {
  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        width: "100%",
        backgroundColor: "#171717",
        color: "white",
        padding: "1rem 2rem",
      }}
    ></Box>
  );
};

export default function Home() {
  return <Header />;
}
