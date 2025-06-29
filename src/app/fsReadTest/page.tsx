import fs from "fs";
import matter from "gray-matter";

export default async function FsReadTest() {
  const { data, content } = await readMarkdownFile("who-are-you");
  return <div>{data.title}</div>;
}

// Need to figure out how to render the markdown without messing up the header
async function readMarkdownFile(post: string) {
  console.log(`cwd: ${process.cwd()}`);
  const file = await fs.promises.readFile(`./src/blogs/who-are-you.md`, "utf8");
  const { data, content } = matter(file);
  return { data, content };
}
