'use server'
import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import { LinkToBlogPost } from "@/components/blog-post/link-to-blog-post/LinkToBlogPost";

type Frontmatter = {
  title: string;
  description: string;
  created: Date;
  updated?: Date;
  topic: string
}

type Article = {
  href: string;
  slug: string;
  frontmatter: Frontmatter;
  filePath: string;
  content: string;
};

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

async function getArticles(): Promise<Article[]> {
  const files = await findPageMdxFiles(ARTICLES_DIR);

  const articles: Article[] = await Promise.all(
    files.map(async (filePath) => {
      const raw = await fs.readFile(filePath, "utf8");
      const { data: frontmatter, content } = matter(raw);

      // compute href relative to app root: src/app/.../page.mdx -> /...
      const relative = path
        .relative(path.join(process.cwd(), "src", "app"), filePath)
        .replace(/\\/g, "/"); // windows
      const href = "/" + relative.replace(/\/page\.mdx$/, "");
      const slug = href.replace(/^\//, "");

      return { href, slug, frontmatter: frontmatter as Frontmatter, filePath, content };
    })
  );

  articles.sort((a, b) => {
    const da = a.frontmatter.updated || a.frontmatter.created
    const db = b.frontmatter.updated || b.frontmatter.created
    return db.getTime() - da.getTime()
  });

  return articles;
}

export default async function Page() {
  const articles = await getArticles();

  return (
    <main>
      <h1>Articles</h1>
      <ul>
        {articles.map((a) => (
          <li key={a.slug}>
            <LinkToBlogPost blogPost={{
              id: a.slug,
              href: a.href,
              content: a.content,
              ...a.frontmatter,
            }} />
          </li>
        ))}
      </ul>
    </main>
  );
}