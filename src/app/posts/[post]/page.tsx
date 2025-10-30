import Post from "@/app/components/Post.tsx";
import { postSchema } from "@/app/posts/postSchema.ts";
import { Typography } from "@mui/joy";
import fs from "fs";
import matter from "gray-matter";

const postsRelativePath = `./src/posts`;

// Next.js will invalidate the cache when a request comes in, at most once every 60 seconds.
export const revalidate = 60;

export default async function PostPage({
  params,
}: {
  params: Promise<{ post: string }>;
}) {
  const { post } = await params;
  const { metadata, content } = await readMarkdownFile(post);

  return (
    <>
      <Typography level="h1">{process.env.RUNTIME_VARIABLE || "No runtime variable"}</Typography>
      <Post markdownContent={content} title={metadata.title} />
    </>
  );
}

export async function generateStaticParams() {
  const fileNames = await fs.promises.readdir(postsRelativePath);

  const params = [];
  for (const fileName of fileNames) {
    const fileContent = await fs.promises.readFile(
      `${postsRelativePath}/${fileName}`,
      "utf8",
    );
    const { data } = matter(fileContent);
    const parsedData = postSchema.parse(data);
    params.push({ post: parsedData.pathSegment });
  }

  return params;
}

// Need to figure out how to render the markdown without messing up the header
async function readMarkdownFile(postPathSegment: string) {
  const file = await fs.promises.readFile(
    `${postsRelativePath}/${postPathSegment}.md`,
    "utf8",
  );
  const { data, content } = matter(file);
  const metadata = postSchema.parse(data);

  return { metadata, content };
}
