'use server'

import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeHighlight from 'rehype-highlight'
import rehypeStringify from 'rehype-stringify'

import styles from './Markdown.module.css'

export async function Markdown({ content }: { content: string }) {
  const htmlVFile = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeHighlight)
    .use(rehypeStringify)
    .process(content)

  const htmlContent = htmlVFile.toString()
  
  return <div dangerouslySetInnerHTML={{ __html: htmlContent }} className={styles.markdownContent} />
}