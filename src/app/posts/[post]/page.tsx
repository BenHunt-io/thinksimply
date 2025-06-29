import { blogSchema } from "@/app/posts/blogSchema.ts";
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
  const { data, content } = await readMarkdownFile(post);

  return (
    <Box>
      <Typography>{data.date}</Typography>
      <Markdown
        components={{
          img: ({ ...props }) => (
            <img
              style={{
                maxWidth: "100%",
              }}
              {...props}
            />
          ),
        }}
      >
        {content}
      </Markdown>
    </Box>
  );
}

export async function generateStaticParams() {
  const blogDirPath = `./src/blogs`;
  const fileNames = await fs.promises.readdir(blogDirPath);

  const params = [];
  for (const fileName of fileNames) {
    const fileContent = await fs.promises.readFile(
      `${blogDirPath}/${fileName}`,
      "utf8",
    );
    const { data } = matter(fileContent);
    const parsedData = blogSchema.parse(data);
    params.push({ post: parsedData.pathSegment });
  }

  return params;
}

// Need to figure out how to render the markdown without messing up the header
async function readMarkdownFile(postPathSegment: string) {
  const file = await fs.promises.readFile(
    `./src/blogs/${postPathSegment}.md`,
    "utf8",
  );
  const { data, content } = matter(file);
  return { data, content };
}
