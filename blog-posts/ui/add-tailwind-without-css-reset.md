---
title: How to add Tailwind without the CSS reset
description: Straight to the point instructions on how to add Tailwind to your project without the default style reset.
created: 2025-04-10
sttp: true
---

Following the [official instructions on how to add Tailwind to your project](https://tailwindcss.com/docs/installation) will lead you to adding the following import to your global CSS file:

```css
@import "tailwindscc";
```

To disable the default CSS reset bundled with Tailwind (preflight) add this instead:

```css
@layer theme, base, components, utilities;
@import "tailwindcss/theme.css" layer(theme);
@import "tailwindcss/utilities.css" layer(utilities);
```