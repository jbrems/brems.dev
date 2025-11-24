import { Article } from "@/components/article/article.types";
import matter from "gray-matter";
import path from "path";
import fs from "fs/promises";

const ARTICLES_DIR = path.join(process.cwd(), "src", "app", "articles");

async function findPageMdxFiles(dir: string): Promise<string[]> {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files: string[] = [];

  for (const entry of entries) {
    const full = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      files.push(...(await findPageMdxFiles(full)));
    } else if (entry.isFile() && entry.name === "page.mdx") {
      files.push(full);
    }
  }

  return files;
}

export async function getArticles(): Promise<Article[]> {
  const files = await findPageMdxFiles(ARTICLES_DIR);

  const articles: Article[] = await Promise.all(
    files.map(async (filePath) => {
      const raw = await fs.readFile(filePath, "utf8");
      const { data: { title, description, created, updated, topic = '?', rank = 3 }, content } = matter(raw);

      // compute href relative to app root: src/app/.../page.mdx -> /...
      const relative = path
        .relative(path.join(process.cwd(), "src", "app"), filePath)
        .replace(/\\/g, "/"); // windows
      const href = "/" + relative.replace(/\/page\.mdx$/, "");
      const slug = href.replace(/^\//, "");

      return { id: slug, href, content, title, description, created, updated, topic, rank };
    })
  );

  articles.sort((a, b) => {
    if (a.rank !== b.rank) return a.rank - b.rank

    const da = a.updated || a.created
    const db = b.updated || b.created
    return db.getTime() - da.getTime()
  });

  return articles;
}