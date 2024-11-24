export const storybook = {
  id: 'how-to-add-a-blog-post-to-storybook',
  title: 'How to add a BlogPost to Storybook',
  description: 'Straight to the point instructions on how to add a BlogPost to Storybook.',
  topic: 'story',
  created: new Date(),
  updated: new Date(),
  sttp: true,
  highlight: 0,
  content: '## How to add a BlogPost to Storybook\n```typescript\nimport { BlogPost } from \'./BlogPost\'\nimport { storybook } from \'@/app/blog/blog.fixtures\';\n\nexport default {\n  component: BlogPost,\n}\n\nexport const Storybook = {\n  args: {\n    blogPost: storybook,\n  },\n}'
}
