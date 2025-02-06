---
title: Why not make your own SVG icons?
description: A gentle persuasion attempt for you to start making some of your own SVG icons and how to do it.
created: 2024-12-02
updated: 2025-02-06
highlight: 1
---

Here are some `SVG` icons:

<svg width="40" height="40" viewBox="0 0 10 10">
  <line x1="1" y1="2" x2="9" y2="2" stroke="goldenrod" stroke-linecap="round" />
  <line x1="1" y1="5" x2="9" y2="5" stroke="goldenrod" stroke-linecap="round" />
  <line x1="1" y1="8" x2="9" y2="8" stroke="goldenrod" stroke-linecap="round" />
</svg>

<svg width="40" height="40" viewBox="0 0 10 10">
  <line x1="2" y1="2" x2="8" y2="8" stroke="goldenrod" stroke-linecap="round" />
  <line x1="8" y1="2" x2="2" y2="8" stroke="goldenrod" stroke-linecap="round" />
</svg>

<svg width="40" height="40" viewBox="0 0 10 10">
  <line x1="7" y1="1" x2="3" y2="5" stroke="goldenrod" stroke-linecap="round" />
  <line x1="3" y1="5" x2="7" y2="9" stroke="goldenrod" stroke-linecap="round" />
</svg>

<svg width="40" height="40" viewBox="0 0 12 12">
  <circle cx="6" cy="6" r="5" stroke="goldenrod" fill="none" />
  <line x1="4" y1="6" x2="8" y2="6" stroke="goldenrod" stroke-linecap="round"/>
  <line x1="6" y1="4" x2="6" y2="8" stroke="goldenrod" stroke-linecap="round"/>
</svg>

<svg width="40" height="40" viewBox="0 0 10 10">
  <line x1="1" y1="5" x2="4" y2="3" stroke="goldenrod" stroke-linecap="round" />
  <line x1="1" y1="5" x2="9" y2="5" stroke="goldenrod" stroke-linecap="round" />
  <line x1="1" y1="5" x2="4" y2="7" stroke="goldenrod" stroke-linecap="round" />
</svg>

<svg width=40 height=40 viewBox="0 0 10 10">
  <circle cx="5" cy="4" r="2" stroke="goldenrod" fill="none" />
  <rect x="2" y="4" width="6" height="4" rx="1" fill="goldenrod" />
</svg>

What these icons have in common is that they are incredibly easy to make yourself!  

In fact, they are so easy to make that I will just put their code here, and I am confident you will understand it without any additional information.

<svg width="40" height="40" viewBox="0 0 10 10">
  <line x1="1" y1="2" x2="9" y2="2" stroke="goldenrod" stroke-linecap="round" />
  <line x1="1" y1="5" x2="9" y2="5" stroke="goldenrod" stroke-linecap="round" />
  <line x1="1" y1="8" x2="9" y2="8" stroke="goldenrod" stroke-linecap="round" />
</svg>

```html
<svg width="40" height="40" viewBox="0 0 10 10">
  <line x1="1" y1="2" x2="9" y2="2" stroke="goldenrod" stroke-linecap="round" />
  <line x1="1" y1="5" x2="9" y2="5" stroke="goldenrod" stroke-linecap="round" />
  <line x1="1" y1="8" x2="9" y2="8" stroke="goldenrod" stroke-linecap="round" />
</svg>
```

---

<svg width="40" height="40" viewBox="0 0 12 12">
  <circle cx="6" cy="6" r="5" stroke="goldenrod" fill="none" />
  <line x1="4" y1="6" x2="8" y2="6" stroke="goldenrod" stroke-linecap="round"/>
  <line x1="6" y1="4" x2="6" y2="8" stroke="goldenrod" stroke-linecap="round"/>
</svg>

```html
<svg width="40" height="40" viewBox="0 0 12 12">
  <circle cx="6" cy="6" r="5" stroke="goldenrod" fill="none" />
  <line x1="4" y1="6" x2="8" y2="6" stroke="goldenrod" stroke-linecap="round"/>
  <line x1="6" y1="4" x2="6" y2="8" stroke="goldenrod" stroke-linecap="round"/>
</svg>
```

---

<svg width=40 height=40 viewBox="0 0 10 10">
  <circle cx="5" cy="4" r="2" stroke="goldenrod" fill="none" />
  <rect x="2" y="4" width="6" height="4" rx="1" fill="goldenrod" />
</svg>

```html
<svg width=40 height=40 viewBox="0 0 10 10">
  <circle cx="5" cy="4" r="2" stroke="goldenrod" fill="none" />
  <rect x="2" y="4" width="6" height="4" rx="1" fill="goldenrod" />
</svg>
```

## ViewBox

One thing that might be slightly confusing is the `viewBox`.

The `viewBox` defines the raster on which the elements of the `SVG` will be placed.

The four numbers represent the origin coordinate's X and Y values (often `0 0`) and the width and height of the raster.

A `viewBox` of `0 0 10 10` will generate a raster with origin coordinates (0, 0), 10 columns (width) and 10 rows (height).

<svg width="300" height="300" viewBox="-7 -3 110 103">
  <path d="M0,0h100M0,10h100M0,20h100M0,30h100M0,40h100M0,50h100M0,60h100M0,70h100M0,80h100M0,90h100M0,100h100" stroke="#aaaaaa" strokeWidth="0.5" stroke-lineCap="round" />
  <path d="M0,0v100M10,0v100M20,0v100M30,0v100M40,0v100M50,0v100M60,0v100M70,0v100M80,0v100M90,0v100M100,0v100" stroke="#aaaaaa" strokeWidth="0.5" stroke-lineCap="round" />
  <text x="-1.5" y="-3" style="font-size: 5px; fill: #aaaaaa;">0</text>
  <text x="8.5" y="-3" style="font-size: 5px; fill: #aaaaaa;">1</text>
  <text x="18.5" y="-3" style="font-size: 5px; fill: #aaaaaa;">2</text>
  <text x="28.5" y="-3" style="font-size: 5px; fill: #aaaaaa;">3</text>
  <text x="38.5" y="-3" style="font-size: 5px; fill: #aaaaaa;">4</text>
  <text x="48.5" y="-3" style="font-size: 5px; fill: #aaaaaa;">5</text>
  <text x="58.5" y="-3" style="font-size: 5px; fill: #aaaaaa;">6</text>
  <text x="68.5" y="-3" style="font-size: 5px; fill: #aaaaaa;">7</text>
  <text x="78.5" y="-3" style="font-size: 5px; fill: #aaaaaa;">8</text>
  <text x="88.5" y="-3" style="font-size: 5px; fill: #aaaaaa;">9</text>
  <text x="97" y="-3" style="font-size: 5px; fill: #aaaaaa;">10</text>
  <text x="-5" y="1" style="font-size: 5px; fill: #aaaaaa;">0</text>
  <text x="-5" y="11" style="font-size: 5px; fill: #aaaaaa;">1</text>
  <text x="-5" y="21" style="font-size: 5px; fill: #aaaaaa;">2</text>
  <text x="-5" y="31" style="font-size: 5px; fill: #aaaaaa;">3</text>
  <text x="-5" y="41" style="font-size: 5px; fill: #aaaaaa;">4</text>
  <text x="-5" y="51" style="font-size: 5px; fill: #aaaaaa;">5</text>
  <text x="-5" y="61" style="font-size: 5px; fill: #aaaaaa;">6</text>
  <text x="-5" y="71" style="font-size: 5px; fill: #aaaaaa;">7</text>
  <text x="-5" y="81" style="font-size: 5px; fill: #aaaaaa;">8</text>
  <text x="-5" y="91" style="font-size: 5px; fill: #aaaaaa;">9</text>
  <text x="-8" y="101" style="font-size: 5px; fill: #aaaaaa;">10</text>
</svg>

Within this `viewBox` you can define the components that make up your `SVG`.

```html
<svg width="40" height="40" viewBox="0 0 10 10">
  <line x1="1" y1="5" x2="4" y2="3" stroke="goldenrod" stroke-linecap="round" />
  <line x1="1" y1="5" x2="9" y2="5" stroke="goldenrod" stroke-linecap="round" />
  <line x1="1" y1="5" x2="4" y2="7" stroke="goldenrod" stroke-linecap="round" />
</svg>
```

<svg width="300" height="300" viewBox="-7 -3 110 103">
  <line x1="10" y1="50" x2="40" y2="30" stroke="goldenrod" strokeWidth="10" stroke-lineCap="round" />
  <line x1="10" y1="50" x2="90" y2="50" stroke="goldenrod" strokeWidth="10" stroke-lineCap="round" />
  <line x1="10" y1="50" x2="40" y2="70" stroke="goldenrod" strokeWidth="10" stroke-lineCap="round" />
  <path d="M0,0h100M0,10h100M0,20h100M0,30h100M0,40h100M0,50h100M0,60h100M0,70h100M0,80h100M0,90h100M0,100h100" stroke="#aaaaaa" strokeWidth="0.5" stroke-lineCap="round" />
  <path d="M0,0v100M10,0v100M20,0v100M30,0v100M40,0v100M50,0v100M60,0v100M70,0v100M80,0v100M90,0v100M100,0v100" stroke="#aaaaaa" strokeWidth="0.5" stroke-lineCap="round" />
  <text x="-1.5" y="-3" style="font-size: 5px; fill: #aaaaaa;">0</text>
  <text x="8.5" y="-3" style="font-size: 5px; fill: #aaaaaa;">1</text>
  <text x="18.5" y="-3" style="font-size: 5px; fill: #aaaaaa;">2</text>
  <text x="28.5" y="-3" style="font-size: 5px; fill: #aaaaaa;">3</text>
  <text x="38.5" y="-3" style="font-size: 5px; fill: #aaaaaa;">4</text>
  <text x="48.5" y="-3" style="font-size: 5px; fill: #aaaaaa;">5</text>
  <text x="58.5" y="-3" style="font-size: 5px; fill: #aaaaaa;">6</text>
  <text x="68.5" y="-3" style="font-size: 5px; fill: #aaaaaa;">7</text>
  <text x="78.5" y="-3" style="font-size: 5px; fill: #aaaaaa;">8</text>
  <text x="88.5" y="-3" style="font-size: 5px; fill: #aaaaaa;">9</text>
  <text x="97" y="-3" style="font-size: 5px; fill: #aaaaaa;">10</text>
  <text x="-5" y="1" style="font-size: 5px; fill: #aaaaaa;">0</text>
  <text x="-5" y="11" style="font-size: 5px; fill: #aaaaaa;">1</text>
  <text x="-5" y="21" style="font-size: 5px; fill: #aaaaaa;">2</text>
  <text x="-5" y="31" style="font-size: 5px; fill: #aaaaaa;">3</text>
  <text x="-5" y="41" style="font-size: 5px; fill: #aaaaaa;">4</text>
  <text x="-5" y="51" style="font-size: 5px; fill: #aaaaaa;">5</text>
  <text x="-5" y="61" style="font-size: 5px; fill: #aaaaaa;">6</text>
  <text x="-5" y="71" style="font-size: 5px; fill: #aaaaaa;">7</text>
  <text x="-5" y="81" style="font-size: 5px; fill: #aaaaaa;">8</text>
  <text x="-5" y="91" style="font-size: 5px; fill: #aaaaaa;">9</text>
  <text x="-8" y="101" style="font-size: 5px; fill: #aaaaaa;">10</text>
  <circle cx="10" cy="50" r="2" fill="#00ff00" />
  <circle cx="40" cy="30" r="2" fill="#00ff00" />
  <circle cx="90" cy="50" r="2" fill="#00ff00" />
  <circle cx="40" cy="70" r="2" fill="#00ff00" />
  <text x="0" y="44" style="font-size: 5px; font-weight: bold;" fill="#00ff00">(1, 5)</text>
  <text x="30" y="24" style="font-size: 5px; font-weight: bold;" fill="#00ff00">(4, 3)</text>
  <text x="30" y="64" style="font-size: 5px; font-weight: bold;" fill="#00ff00">(4, 7)</text>
  <text x="80" y="44" style="font-size: 5px; font-weight: bold;" fill="#00ff00">(9, 5)</text>
</svg>

The `viewBox` is only used to define the position of the components on the raster. In our example the lines are positioned on a `10` by `10` raster but are scaled to a `40px` by `40px` icon due to the `width` and `height` values of the `SVG`.

## Edge values

You might have noticed that all icon definitions stay at least 1 viewBox unit away from the edge of the `viewBox`.

This is because strokes are centered around their path. A horizontal line with `Y = 5` will be drawn from half a unit above the `Y5` line to half a unit below the `Y5` line. A line on the `Y0` line will therefor lose half of its width _(due to the top half being cut off)_.

Also, the `stroke-linecap` _(the rounded endings of the line)_ are drawn half a unit past the line's endpoints.

```html
<svg viewBox="0 0 10 10">
  <line x1="1" y1="0" x2="9" y2="0" stroke="goldenrod" stroke-linecap="round" />
  <line x1="0" y1="2" x2="8" y2="2" stroke="goldenrod" stroke-linecap="round" />
  <line x1="1" y1="4" x2="9" y2="4" stroke="goldenrod" stroke-linecap="round" />
</svg>
```

<svg width="300" height="170" viewBox="-7 -3 110 53">
  <path d="M5,0A5,5,1,0,0,10,5L10,0Z" strokeWidth="1" fill="goldenrod" />
  <line x1="10" y1="2.5" x2="90" y2="2.5" stroke="goldenrod" strokeWidth="5" />
  <path d="M95,0A5,5,0,0,1,90,5L90,0Z" strokeWidth="1" fill="goldenrod" />
  <line x1="0" y1="20" x2="80" y2="20" stroke="goldenrod" strokeWidth="10" />
  <line x1="10" y1="20" x2="80" y2="20" stroke="goldenrod" strokeWidth="10" stroke-lineCap="round" />
  <line x1="10" y1="40" x2="90" y2="40" stroke="goldenrod" strokeWidth="10" stroke-lineCap="round" />
  <path d="M0,0h100M0,10h100M0,20h100M0,30h100M0,40h100M0,50h100" stroke="#aaaaaa" strokeWidth="0.5" stroke-lineCap="round" />
  <path d="M0,0v50M10,0v50M20,0v50M30,0v50M40,0v50M50,0v50M60,0v50M70,0v50M80,0v50M90,0v50M100,0v50" stroke="#aaaaaa" strokeWidth="0.5" stroke-lineCap="round" />
  <text x="-1.5" y="-3" style="font-size: 5px; fill: #aaaaaa;">0</text>
  <text x="8.5" y="-3" style="font-size: 5px; fill: #aaaaaa;">1</text>
  <text x="18.5" y="-3" style="font-size: 5px; fill: #aaaaaa;">2</text>
  <text x="28.5" y="-3" style="font-size: 5px; fill: #aaaaaa;">3</text>
  <text x="38.5" y="-3" style="font-size: 5px; fill: #aaaaaa;">4</text>
  <text x="48.5" y="-3" style="font-size: 5px; fill: #aaaaaa;">5</text>
  <text x="58.5" y="-3" style="font-size: 5px; fill: #aaaaaa;">6</text>
  <text x="68.5" y="-3" style="font-size: 5px; fill: #aaaaaa;">7</text>
  <text x="78.5" y="-3" style="font-size: 5px; fill: #aaaaaa;">8</text>
  <text x="88.5" y="-3" style="font-size: 5px; fill: #aaaaaa;">9</text>
  <text x="97" y="-3" style="font-size: 5px; fill: #aaaaaa;">10</text>
  <text x="-5" y="1" style="font-size: 5px; fill: #aaaaaa;">0</text>
  <text x="-5" y="11" style="font-size: 5px; fill: #aaaaaa;">1</text>
  <text x="-5" y="21" style="font-size: 5px; fill: #aaaaaa;">2</text>
  <text x="-5" y="31" style="font-size: 5px; fill: #aaaaaa;">3</text>
  <text x="-5" y="41" style="font-size: 5px; fill: #aaaaaa;">4</text>
  <text x="-5" y="51" style="font-size: 5px; fill: #aaaaaa;">5</text>
  <circle cx="10" cy="0" r="2" fill="#00ff00" />
  <circle cx="90" cy="0" r="2" fill="#00ff00" />
  <circle cx="0" cy="20" r="2" fill="#00ff00" />
  <circle cx="80" cy="20" r="2" fill="#00ff00" />
  <circle cx="10" cy="40" r="2" fill="#00ff00" />
  <circle cx="90" cy="40" r="2" fill="#00ff00" />
</svg>

## Groups

If you notice you are repeating the same attributes (e.g.: `fill`, `stroke`, `stroke-linecap`) over and over again in your elements, it might be time to start grouping them together.

This can be achieved by wrapping the elements with a `<g>` element.

(i) Groups can also be used when animating or styling an `SVG` by targeting the grouped parts by their group's id.

Some of the initial examples can be defined as follows _(notice the added `<g>` element)_:

<svg width="40" height="40" viewBox="0 0 10 10">
  <g stroke="goldenrod" stroke-linecap="round">
    <line x1="1" y1="2" x2="9" y2="2" />
    <line x1="1" y1="5" x2="9" y2="5" />
    <line x1="1" y1="8" x2="9" y2="8" />
  </g>
</svg>

```html
<svg width="40" height="40" viewBox="0 0 10 10">
  <g stroke="goldenrod" stroke-linecap="round">
    <line x1="1" y1="2" x2="9" y2="2" />
    <line x1="1" y1="5" x2="9" y2="5" />
    <line x1="1" y1="8" x2="9" y2="8" />
  </g>
</svg>
```

---

<svg width="40" height="40" viewBox="0 0 12 12">
  <g stroke="goldenrod" stroke-linecap="round">
    <circle cx="6" cy="6" r="5" fill="none" />
    <line x1="4" y1="6" x2="8" y2="6" />
    <line x1="6" y1="4" x2="6" y2="8" />
  </g>
</svg>

```html
<svg width="40" height="40" viewBox="0 0 12 12">
  <g stroke="goldenrod" stroke-linecap="round">
    <circle cx="6" cy="6" r="5" fill="none" />
    <line x1="4" y1="6" x2="8" y2="6" />
    <line x1="6" y1="4" x2="6" y2="8" />
  </g>
</svg>
```

(i) In our simple examples all elements share the same group. In such cases you can define the shared attributes on the `<svg>` element itself instead of adding a group.

```html
<svg width="40" height="40" viewBox="0 0 10 10" stroke="goldenrod" stroke-linecap="round">
  <line x1="1" y1="2" x2="9" y2="2" />
  <line x1="1" y1="5" x2="9" y2="5" />
  <line x1="1" y1="8" x2="9" y2="8" />
</svg>
```


## Paths

If you are worried about the size of the `SVG` element in the `HTML` file, you can use a `path` element which uses an encoding to define lines, arcs, and curves.

Certain animations can also require you to use a path instead of separate lines, circles, or rectangles.

You can learn more about the `SVG` `path` element in [this MDN tutorial](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Paths).

<svg width="40" height="40" viewBox="0 0 10 10">
  <path d="M1 2h8M1 5h8M1 8h8" stroke="goldenrod" stroke-linecap="round" />
</svg>

```html
<svg width="40" height="40" viewBox="0 0 10 10">
  <path d="M1 2h8M1 5h8M1 8h8" stroke="goldenrod" stroke-linecap="round" />
</svg>
```

---

<svg width="40" height="40" viewBox="0 0 12 12">
  <path d="M6 1A5 5 1 0 0 6 11M6 1A5 5 0 0 1 6 11M4 6h4M6 4v4" stroke="goldenrod" stroke-linecap="round" fill="none" />
</svg>

```html
<svg width="40" height="40" viewBox="0 0 12 12">
  <path d="M6 1A5 5 1 0 0 6 11M6 1A5 5 0 0 1 6 11M4 6h4M6 4v4" stroke="goldenrod" stroke-linecap="round" fill="none" />
</svg>
```

_Since you cannot draw complete circles with the arc syntax, we draw 2 semicircles instead._

## Q & A

Q: Where is the XML namespace _(`xmlns="http://www.w3.org/2000/svg"`)_?

A: When using `SVG` elements in an `HTML5` context you do not need to specify the namespace.

---

Q: Why are all icons defined as squares?

A: This is personal preference. It preserves the `width` and `height` of the `SVG` element when rotating the icon _(at least when rotating by steps of 90 degrees)_.

<div style="display: flex; align-items: center; gap: 1em;">
  <svg width="40" height="40" viewBox="0 0 10 10" style="border: solid 1px #444444;">
    <line x1="1" y1="5" x2="4" y2="3" stroke="goldenrod" stroke-linecap="round" />
    <line x1="1" y1="5" x2="9" y2="5" stroke="goldenrod" stroke-linecap="round" />
    <line x1="1" y1="5" x2="4" y2="7" stroke="goldenrod" stroke-linecap="round" />
  </svg>

  <svg width="40" height="40" viewBox="0 0 10 10" class="rotate-90" style="border: solid 1px #444444;">
    <line x1="1" y1="5" x2="4" y2="3" stroke="goldenrod" stroke-linecap="round" />
    <line x1="1" y1="5" x2="9" y2="5" stroke="goldenrod" stroke-linecap="round" />
    <line x1="1" y1="5" x2="4" y2="7" stroke="goldenrod" stroke-linecap="round" />
  </svg>

  vs

  <svg width="40" height="24" viewBox="0 0 10 6" style="border: solid 1px #444444;">
    <line x1="1" y1="3" x2="4" y2="1" stroke="goldenrod" stroke-linecap="round" />
    <line x1="1" y1="3" x2="9" y2="3" stroke="goldenrod" stroke-linecap="round" />
    <line x1="1" y1="3" x2="4" y2="5" stroke="goldenrod" stroke-linecap="round" />
  </svg>

  <svg width="40" height="24" viewBox="0 0 10 6" class="rotate-90" style="border: solid 1px #444444;">
    <line x1="1" y1="3" x2="4" y2="1" stroke="goldenrod" stroke-linecap="round" />
    <line x1="1" y1="3" x2="9" y2="3" stroke="goldenrod" stroke-linecap="round" />
    <line x1="1" y1="3" x2="4" y2="5" stroke="goldenrod" stroke-linecap="round" />
  </svg>
</div>