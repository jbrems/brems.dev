import fs from 'fs'
import path from 'path'
import matter from  'gray-matter'
import { BlogPost } from './blog.types'
import { cache } from 'react'


const blogPostsFolder = path.join(process.cwd(), 'blog-posts')

async function readAllBlogPostFiles() {
  const dirEntries = await fs.promises.readdir(blogPostsFolder, { recursive: true, withFileTypes: true })
  return dirEntries.filter(entry => entry.isFile())
}

export async function getAllBlogPosts() {
  const blogPostFiles = await readAllBlogPostFiles()
  return Promise.all(blogPostFiles.map(mapFileToBlogPost))
}

export function sortBlogPosts(a: BlogPost, b: BlogPost) {
  if (a.updated > b.updated) return 1
  return -1
}

export const getBlogPostById = cache(fetchBlogPostById)

async function fetchBlogPostById(id: string): Promise<BlogPost | undefined> {
  const allBlogPosts = await getAllBlogPosts()
  return allBlogPosts.find(blogPost => blogPost.id === id)
}


async function mapFileToBlogPost(file: fs.Dirent): Promise<BlogPost> {
  const fileContents = await fs.promises.readFile(getFilePath(file), { encoding: 'utf8' })
  const matterData = matter(fileContents)

  return {
    id: slugify(matterData.data.title),
    topic: parseTopicFromFile(file),
    title: matterData.data.title,
    description: matterData.data.description,
    created: matterData.data.created,
    updated: matterData.data.updated || matterData.data.created,
    sttp: matterData.data.sttp,
    content: matterData.content,
    highlight: matterData.data.highlight || 0,
  }
}

function getFilePath(file: fs.Dirent): string {
  return path.join(file.parentPath, file.name)
}

function parseTopicFromFile(file: fs.Dirent): string {
  return getFilePath(file).replace(blogPostsFolder, '') // remove the blogPostsFolder path
    .replace(file.name, '') // remove the filename
    .replace(/^\//, '') // remove the leading '/' if present
    .replace(/\/$/, '') // remove the trailing '/' if present
}

function slugify(text: string): string {
  return text.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '')
}

export function groupByTopic(result: Record<string, BlogPost[]>, blogPost: BlogPost): Record<string, BlogPost[]> {
  if (!result[blogPost.topic]) result[blogPost.topic] = []
  result[blogPost.topic].push(blogPost)
  return result
}