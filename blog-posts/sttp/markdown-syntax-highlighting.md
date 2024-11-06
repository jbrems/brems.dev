---
title: 'How to add code syntax highlighting to a Markdown blog'
description: 'Straight to the point instructions on how to add code syntax highlighting to a server side rendered Markdown blog.'
date: 2024-11-06
---

```javascript
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeHighlight from 'rehype-highlight'
import rehypeStringify from 'rehype-stringify'

const highlightedHtmlContent = await unified()
  .use(remarkParse)
  .use(remarkRehype)
  .use(rehypeHighlight)
  .use(rehypeStringify)
  .process(markdownContent)
```


Add a [hightlight.js theme](https://highlightjs.org/examples) in your `/app/globals.css`.
```css
@import url('https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.10.0/styles/github-dark.min.css');
```