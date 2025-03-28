---
title: 'How to stash a specific file'
description: 'Straight to the point explanation of how to stash a specific file with git.'
created: 2025-03-28
sttp: true
---
```bash
git stash push src/components/MyComponent.js
```

_Where `src/components/MyComponent.js` is the relative path to the file from your git root._

Add a message with the `-m` flag:

```bash
git stash push -m "Changes to MyComponent" src/components/MyComponent.js
```