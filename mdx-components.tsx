import type { MDXComponents } from 'mdx/types'

const components: MDXComponents = {
  pre: ({ children }) => <pre className="bg-[#2e2e2e] p-2 my-2 rounded overflow-x-auto scrollbar-thin">{children}</pre>,
  code: ({ children }) => (
    <code className="inline-block bg-[#2e2e2e] rounded px-1.5 [pre>&]:bg-transparent">{children}</code>
  ),
  hr: () => <hr className="my-6 border-gray-300 dark:border-gray-600" />,
  h2: ({ children }) => <h2 className="mt-16!">{children}</h2>,
}

export function useMDXComponents(): MDXComponents {
  return components
}