---
title: Making Pong - part 1
description: Code your first game. Zero experience required.
created: 2025-01-25
---

In this series of blog posts I will teach you how to make a simple game like Pong.

No knowledge, prior experience or tools are needed.

## Step 0 - I don't know how to code



## Step 1 - The HTML file

<style>
  canvas {
    background-color: #333333;
    border: solid 1px goldenrod;
    max-width: 100%;
  }
</style>

<canvas id="canvas" width="300" height="200" />

<script>
  const canvas = document.getElementById('canvas')
  const ctx = canvas.getContext('2d')
  ctx.fillStyle = 'white'
  ctx.beginPath()
  ctx.arc(150, 50, 10, 0, Math.PI * 2)
  ctx.fill()
</script>