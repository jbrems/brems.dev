---
title: 'How to read all files in a folder with Node.js'
description: 'Straight to the point instructions on how to read all files in a folder with Node.js v20.'
created: 2024-10-26
sttp: true
---

```typescript
const folderPath = path.join(process.cwd(), 'folder-you-want-to-read')

async function readAllFilesInFolder(folderPath: string) {
  const files = await fetchAllFilesInFolder(folderPath)
  return Promise.all(files.map(readFileContents))
}

async function fetchAllFilesInFolder() {
  const dirEntries: fs.Dirent[] = await fs.promises.readdir(folderPath, { recursive: true, withFileTypes: true })
  return dirEntries.filter(entry => entry.isFile())
}

async function readFileContents(file: fs.Dirent): string {
  const filePath = path.join(file.parentPath, file.name)
  return fs.promises.readFile(filePath, { encoding: 'utf8' })
}
```

(!) Requesting the `parentPath` from `fs.Dirent` with Nodejs `v20.4.0` always returns `undefined`. Upgrading to `v20.18.0` fixes this issue.