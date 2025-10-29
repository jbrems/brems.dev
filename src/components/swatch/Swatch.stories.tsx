import { Swatch } from './Swatch'

export default {
  component: Swatch,
}

export const SiteTitle = {
  args: {
    className: 'text-6xl',
    children: <h1 className="!font-extrabold py-3">Brems.dev</h1>,
    fixedStrokes: [
      { heightPercentage: '30', startOffset: '0.6', endOffset: '1' },
      { heightPercentage: '20', startOffset: '1', endOffset: '0.35' },
      { heightPercentage: '25', startOffset: '0.35', endOffset: '0.7' },
      { heightPercentage: '25', startOffset: '0.7', endOffset: '0.25' },
    ],
  },
}

export const PageTitle = {
  args: {
    className: 'text-4xl',
    children: <h1 className="py-1.5">Blog posts</h1>,
  },
}

export const SubTitle = {
  args: {
    className: 'text-xl',
    children: <h2>Highlighted blog posts</h2>,
  },
}

export const MenuItem = {
  args: {
    className: 'underline underline-offset-2',
    children: <a className="px-1 !text-neutral-800">Blog posts</a>,
  },
}