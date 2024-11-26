---
title: 'Popup vs modal vs overlay'
description: 'A quick explanation of the different UX/UI overlay elements and how to correctly name them.'
created: 2024-11-07
highlight: 3
---

## Overlay
An `overlay` is simply an element that is rendered over the main content of the UI and is generally a temporary addition to the page. `Popups`, `modals`, `drawers`, and `bottom sheets` are all different kinds of `overlays`. 

## Popup
A `popup` is an overlay that does not block interactions with the main content. `Toasts` and `snackbars` are examples of `popups`.

## Modal
A `modal` is an overlay that does block interactions with the main content until the `modal` has been closed. Important actions or information that cannot be ignored can be shown in a `modal`. Examples are a login form and a delete confirmation alert or any other alert.

## Layover
A `layover`, sometimes just called `overlay`, is a type of `overlay` that adds a partly transparent layer on top of the UI. Its goal is to draw attention to certain parts of the UI by obscuring the rest. `Layovers` are often used in combination with `modals` or when showing pictures or other content in a `lightbox`.

## Drawer
A `drawer` is simply an `overlay` that enters the page from the side (left or right).

## Top/bottom sheet
A `top sheet` is an overlay that enters the page from the top. A `bottom sheet` is an overlay that enters the page from the bottom. 
