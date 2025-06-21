import { Box } from "@mui/joy";
import Markdown from "react-markdown";

export default async function Post({
  params,
}: {
  params: Promise<{ post: string }>;
}) {
  const { post } = await params;
  return (
    <Box justifyContent={"center"}>
      <Markdown>{`# ${post}`}</Markdown>
    </Box>
  );
}
