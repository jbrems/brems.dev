---
title: 'How to create a Markdown blog with Next.js 15'
description: 'In dept instructions on how to create a Markdown blog website with Next.js 15.'
created: 2024-10-26
updated: 2024-11-08
highlight: 3
---

## 1. Project setup
Create a new Next.js project following the [official documentation](https://nextjs.org/) or with `npx create-next-app@latest`.

You can also add a blog to an existing Next.js website.

(i) This post is created for Next.js v15 using the app router and Typescript.

## 2. /blog and /blog/[id] pages
In the `app` folder, create a subfolder `blog` with a `page.tsx` file.

This page will contain a list of links to all blog posts.

```typescript
export default function BlogHomePage() {
  return <>
    <h2>Blog</h2>
  </>
}
```

In the `app/blog` folder, create a subfolder `[id]` with a `page.tsx` file.  
_(This will create a route with a dynamic id in the URL like `/blog/my-first-post` where `my-first-post` is the id of a blog post.)_

This page will render a single blog post with the `id` from the URL.

```typescript
export default async function BlogPostPage({ params }: { params: Promise<{ id: string }>}) {
  const { id } = await params

  return <>
    <h2>{id}</h2>
  </>
}
```

## 3. Blog posts
In the root of your project _(on the same level as your `package.json`)_, create a folder `blog-posts` and add some markdown files.

For example
`/blog-posts/my-first-post.md`
```generic
---
title: 'My first blog post'
date: 2024-10-26
---

This is my very first blog post!
```

`/blog-posts/front-matter.md`
```generic
---
title: 'YAML Front Matter'
date: 2024-10-26
---

The metadata at the top of this markdown file is YAML Front Matter.
```

## 4. Fetch blog posts
To fetch the blog posts from the `blog-posts` folder, first create a `blog.types.ts` file in `/app/blog` that exports the `BlogPost` type.

`/app/blog/blog.types.ts`
```typescript
export type BlogPost = {
  id: string
  title: string
  date: Date
  content: string
}
```

To read the Front Matter metadata from the Markdown files, we need to install a package called `gray-matter`.

```bash
npm install gray-matter
```

Then create a file `blog.utils.ts` in `/app/blog`.

`/app/blog/blog.utils.ts`
```typescript
import fs from 'fs'
import path from 'path'
import matter from  'gray-matter'
import { BlogPost } from './blog.types'


export const blogPostsFolder = path.join(process.cwd(), 'blog-posts')

export async function readAllBlogPostFiles() {
  const dirEntries = await fs.promises.readdir(blogPostsFolder, { recursive: true, withFileTypes: true })
  return dirEntries.filter(entry => entry.isFile())
}

export async function getAllBlogPosts() {
  const blogPostFiles = await readAllBlogPostFiles()
  return Promise.all(blogPostFiles.map(mapFileToBlogPost))
}

export function sortBlogPosts(a: BlogPost, b: BlogPost) {
  if (a.date > b.date) return 1
  return -1
}

export async function getBlogPostById(id: string): Promise<BlogPost | undefined> {
  const allBlogPostFiles = await readAllBlogPostFiles()
  const blogPostFile = allBlogPostFiles.find(entry => parseFileId(entry) === id)
  if (!blogPostFile) return undefined
  return mapFileToBlogPost(blogPostFile)
}


async function mapFileToBlogPost(file: fs.Dirent): Promise<BlogPost> {
  const fileContents = await fs.promises.readFile(getFilePath(file), { encoding: 'utf8' })
  const matterData = matter(fileContents)

  return {
    id: parseFileId(file),
    title: matterData.data.title,
    date: matterData.data.date,
    content: matterData.content,
  }
}

function getFilePath(file: fs.Dirent): string {
  return path.join(file.parentPath, file.name)
}

export function parseFileId(file: fs.Dirent): string {
  return file.name.replace(/\.md$/, '') // remove the '.md' file extension
}
```

## 5. Overview of blog posts
Add the blog posts to the `/blog` page

`/app/blog/page.tsx`
```typescript
import Link from 'next/link'
import { getAllBlogPosts, sortBlogPosts } from './blog.utils'

export default async function BlogHomePage() {
  const blogPosts = await getAllBlogPosts()
  blogPosts.sort(sortBlogPosts).reverse()

  return <>
    <h2>My Blog</h2>
    <ul>{blogPosts.map(blogPost => <li key={blogPost.id}><Link href={`/blog/${blogPost.id}`}>blogPost.title</Link></li>)}</ul>
  </>
}
```

(i) Note that the `function BlogHomePage() {}` is now `async`.

You can now add a link to the `/blog` page on the homepage or anywhere on your website.

## 6. Markdown to HTML
To render the Markdown blog post as HTML at `/blog/[id]`, install the `remark` and `remark-html` packages.

```bash
npm install remark remark-html
```

Then get the blog post by its `id` in the URL and transform the content to HTML.

`/app/blog/[id]/page.tsx`
```typescript
import { remark } from 'remark'
import remarkHtml from 'remark-html'

import { getBlogPostById } from "../blog.utils";

export default async function BlogPostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const blogPost = await getBlogPostById(id)

  if (!blogPost) return

  const htmlContent = (await remark().use(remarkHtml).process(blogPost.content)).toString()
  
  return <>
    <h2>{blogPost.title}</h2>
    <p>{blogPost.date?.toString()}</p>
    <p dangerouslySetInnerHTML={{ __html: htmlContent }} />
  </>
}
```

## 7. Static blog post pages
We currently have a working blog, but it is not very well optimized for the web.

A big improvement is to provide Next.js with a list of all possible blog post ids so the pages can be pre-rendered at build time.

We can do this by exporting the `generateStaticParams()` function in `/app/blog/[id]/page.tsx`.

`app/blog/[id]/page.tsx`
```typescript
export async function generateStaticParams() {
  const entries = await readAllBlogPostFiles() 
 
  return entries.map((entry) => ({
    id: parseFileId(entry),
  }))
}
```

To prevent Next.js from trying to render a blog post for an `id` not in the list of static params (static ids), add `export const dynamicParams = false` to the `app/blog/[id]/page.tsx` file.

## 8. SEO optimization
Providing a fitting title and description for your blog post immensely helps search engines with understanding the contents of your post and suggesting it to its users.

In Next.js we can dynamically generate the `title` and `description` meta tag by utilizing the `generateMetaData()` function.

Besides the `title` and `description`, you can specify additional [Open Graph](https://ogp.me/) tags to improve the shareability of your posts.

`/app/blog/[id]/page.tsx`
```typescript
export async function generateMetadata({ params }: { params: Promise<{ id: string }>}) {
  const { id } = await params
  const blogPost = await getBlogPostById(id)

  if (!blogPost) return {}

  return {
    title: blogPost.title,
    description: blogPost.description,
    openGraph: {
      title: blogPost.title,
      description: blogPost.description,
      type: 'article',
      publishedTime: blogPost.date?.toISOString(),
    }
  }
}
```

Since we now call `getBlogPostById()` in both `generateMetadata()` and the `BlogPostPage()` component, it is best to cache the result of that function utilizing React's `cache()` function.

`/app/blog/blog.utils.ts`
```typescript
import { cache } from 'react'

export const getBlogPostById = cache(fetchBlogPostById)

export async function fetchBlogPostById(id: string): Promise<BlogPost | undefined> {
  const allBlogPostFiles = await readAllBlogPostFiles()
  const blogPostFile = allBlogPostFiles.find(entry => parseFileId(entry) === id)
  if (!blogPostFile) return undefined
  return mapFileToBlogPost(blogPostFile)
}
```