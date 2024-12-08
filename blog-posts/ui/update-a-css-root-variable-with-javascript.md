---
title: 'How to update a CSS root variable with Javascript'
description: 'Straight to the point instructions on how to update a CSS root variable with Javascript.'
created: 2024-11-09
sttp: true
---
```css
:root {
  --my-var: 'initial value';
}
```

```javascript
document.documentElement.style.setProperty(
  '--my-var', 
  'updated value',
);
```