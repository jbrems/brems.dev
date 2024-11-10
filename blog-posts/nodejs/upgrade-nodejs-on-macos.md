---
title: 'How to upgrade Node.js on MacOS'
description: 'Straight to the point instructions on how to upgrade Node.js on MacOS.'
created: 2024-10-26
sttp: true
---

```bash
sudo npm cache clean -f
```

```bash
sudo npm install -g n
```

```bash
sudo n lts
```

_`lts` can be exchanged by `stable` or `latest` if desired._