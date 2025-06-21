import { Box, Typography } from "@mui/joy";
import fs from "fs";
import matter from "gray-matter";
import Markdown from "react-markdown";

export default async function Post({
  params,
}: {
  params: Promise<{ post: string }>;
}) {
  const { post } = await params;

  const { data } = await readMarkdownFile(post);

  return (
    <Box justifyContent={"center"}>
      <Typography>{post}</Typography>
      <Typography>{data.title}</Typography>
      <Typography>{data.date}</Typography>
      <Markdown>{`# ${post}`}</Markdown>
    </Box>
  );
}

// Need to figure out how to render the markdown without messing up the header
async function readMarkdownFile(post: string) {
  console.log(`cwd: ${process.cwd()}`);
  const file = await fs.promises.readFile(`./src/blogs/who-are-you.md`, "utf8");
  const { data, content } = matter(file);
  return { data, content };
}
