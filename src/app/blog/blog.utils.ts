import fs from 'fs'
import path from 'path'
import matter from  'gray-matter'
import { BlogPost } from './blog.types'


const blogPostsFolder = path.join(process.cwd(), 'blog-posts')

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
  console.log('GETTING BLOG POST BY ID', id)
  const allBlogPostFiles = await readAllBlogPostFiles()
  const blogPostFile = allBlogPostFiles.find(entry => parseFileId(entry) === id)
  if (!blogPostFile) return undefined
  return mapFileToBlogPost(blogPostFile)
}


async function mapFileToBlogPost(file: fs.Dirent): Promise<BlogPost> {
  console.log('MAPPING BLOG POST', parseFileId(file))

  const fileContents = await fs.promises.readFile(getFilePath(file), { encoding: 'utf8' })
  const matterData = matter(fileContents)

  return {
    id: parseFileId(file),
    topic: parseTopicFromFile(file),
    title: matterData.data.title,
    description: matterData.data.description,
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

function parseTopicFromFile(file: fs.Dirent): string {
  return getFilePath(file).replace(blogPostsFolder, '') // remove the blogPostsFolder path
    .replace(file.name, '') // remove the filename
    .replace(/^\//, '') // remove the leading '/' if present
    .replace(/\/$/, '') // remove the trailing '/' if present
}