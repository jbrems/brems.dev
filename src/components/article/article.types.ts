export type Article = {
  id: string
  title: string
  description: string
  created: Date
  updated?: Date
  topic: string
  href: string
  content: string
  rank: number
}