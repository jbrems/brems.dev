import { getBlogPostById } from '@/app/blog/blog.utils'
import { NextRequest } from 'next/server'

export async function GET(_request: NextRequest, { params }: { params: Promise<{ id: string }>}) {
  const { id } = await params
  const blogPost = await getBlogPostById(id)

  return Response.json(blogPost)
}