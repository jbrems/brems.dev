---
title: 'How to undo the last git commit'
description: 'Straight to the point explanation of how to undo the last git commit.'
created: 2024-11-07
updated: 2025-03-12
sttp: true
---
```bash
git reset HEAD~1
```
_Where `1` is the number of commits you want to undo._

To see a list of recent git actions, use:
```bash
git reflog
```