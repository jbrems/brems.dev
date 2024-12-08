---
title: How to allow HTML tags in a Markdown blog
description: Straight to the point instructions on how to configure your blog to allow HTML tags in the Markdown.
created: 2024-12-02
sttp: true
---

```javascript
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeRaw from 'rehype-raw'
import rehypeStringify from 'rehype-stringify'

const htmlVFile = await unified()
  .use(remarkParse)
  .use(remarkRehype, {allowDangerousHtml: true})
  .use(rehypeRaw)
  .use(rehypeStringify)
  .process(content)

const htmlContent = htmlVFile.toString()
```