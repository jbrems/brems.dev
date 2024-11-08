---
title: 'The `display: contents;` CSS rule'
description: 'A quick explanation of the "display: contents" CSS rule and when to apply it.'
created: 2024-10-25
---

Imagine you want to create a navigation bar for your website and you also want to make it somewhat semantically correct and easily parsable by screen readers.

So you use HTML 5's `<nav>` component, and place all navigation links in list items (`<li>`) in an unordered list (`<ul>`).

```html
<nav>
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/about"></a>About me</li>
    <li><a href="/blog"></a>Awesome blog</li>
  </ul>
</nav>
```

Now you want to display the navigation links side by side in the navigation bar, so your first instinct might be to put `display: flex;` on the `<nav>` element, but since the `<ul>` is the only child of `<nav>`, the `display: flex;` property does not have the expected effect and nothing seems to change.

One way to solve this issue is to simply move the `display: flex;` rule to the `<ul>` element to achieve the expected result.

This is fine, but if you are anything like me, it just doesn't feel right for some reason. So that's where `display: contents;` comes to the rescue!

By adding `display: contents;` to the `<ul>` element we can tell the browser/renderer to act like the element is just not there when applying the styling, and the `display: flex;` of the `<nav>` element will affect the `<li>` elements as if it where direct children of the `<nav>`.

```html
<nav style="display: flex;">
  <ul style="display: contents;">
    <li><a href="/">Home</a></li>
    <li><a href="/about"></a>About me</li>
    <li><a href="/blog"></a>Awesome blog</li>
  </ul>
</nav>
```
