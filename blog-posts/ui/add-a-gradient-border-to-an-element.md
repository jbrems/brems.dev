---
title: 'How to add a gradient border to an element'
description: 'Straight to the point instructions on how to add a gradient border to an element.'
created: 2024-10-27
sttp: true
---

```css
.your-element {
  display: block;

  &::after {
    display: block;
    content: '';
    height: 2px;
    background: linear-gradient(90deg, transparent, goldenrod, gold, goldenrod, transparent);
  }
}
```