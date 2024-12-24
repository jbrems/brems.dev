---
title: 'How to use container queries'
description: 'Straight to the point instructions on how to use container queries in your project.'
created: 2024-12-19
sttp: true
---
```css
.container {
  container-type: inline-size;
    
  & .element {
    width: 100%;
  }
}

@container (min-width: 600px) {
  .element {
      width: 50%;
  }
}
```