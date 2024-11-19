---
title: Should I use Javascript or Typescript?
description: My honest opinion on when you should choose for Typescript and when to stick with plain old Javascript.
created: 2024-11-19
---

Any answer to this question is sure to be an opinionated one. So here is my very own opinion.

For me, the main advantage of `Typescript` is that it documents your code base. It describes how the developer expects the code to be used.

Correctly typing function parameters and return values should do the majority of the typing work. Preferring to type functions over variables will generally lead you to structure your code a bit better.

## Typescript
When your project needs to be built before it can be run, I see few reasons not to include `Typescript`. Even if you just add one or two types to your code base, it is still better than none.

_I personally do not agree with the "you have to type absolutely everything" idea or the "you should never use any" rule._

## Javascript
When you have a simple project that can run straight from the source folder, adding `Typescript` is way too much of a hassle to be worth it. That doesn't mean, though, that you cannot use types in your code base. You just have to use something other than `Typescript`, like `JSDoc` which does not require any additional configuration or tools in many popular IDE's.

## Final thoughts
Whether you use `Typescript` or plain old `Javascript`, it is always best to document and/or type your code base.

Let us all hope for the quick resolution of the `TC39`'s `Types as comments` proposal so we can all start using types in `Javascript`.