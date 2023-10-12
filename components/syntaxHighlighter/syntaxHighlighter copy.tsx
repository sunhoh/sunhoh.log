import { ReactNode } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Prism as ReactSyntaxHighlighter } from 'react-syntax-highlighter';
import { materialLight,github} from 'react-syntax-highlighter/dist/cjs/styles/prism';



const syntaxHighlighter = {
  code({ node, inline, className, children, ...props }) {
    const match = /language-(\w+)/.exec(className || '')
    return !inline && match ? (
      <ReactSyntaxHighlighter language={match[1]} PreTag="pre" style={materialLight} {...props}>
        {String(children).replace(/\n$/, '')}
      </ReactSyntaxHighlighter>
    ) : (
      <code className={className} {...props}>
        {children}
      </code>
    );
  },
  h1: ({ node, className, children, inline, ...props }) => (
    // text-3xl
    // <h1 className={`mt-12 mb-6 font-semibold text-3xl sm:text-4xl`} {...props}>
    <h1 className={`mt-12 mb-6 font-semibold text-3xl sm:text-4xl`} {...props}>
      {children}
    </h1>
  ),
  h2: ({ children, ...props }: { children: ReactNode }) => (
    <h2 className="mt-12 mb-6 font-semibold text-2xl sm:text-3xl">{children}</h2>
  ),
  h3: ({ children, ...props }: { children: ReactNode }) => (
    <h3 className="mt-12 mb-6 font-semibold text-xl sm:text-2xl">{children}</h3>
  ),
  h4: ({ children, ...props }: { children: ReactNode }) => (
    <h4 className="mt-12 mb-6 font-semibold text-lg sm:text-xl">{children}</h4>
  ),
  strong: ({ children, ...props }: { children: ReactNode }) => (
    <strong {...props} className="font-medium">
      {children}
    </strong>
  ),
  img: ({ src, alt, ...props }: any) => {
    return (
      <div>
        <Image
          {...props}
          className={`object-contain`}
          src={src}
          alt={alt}
          width={560}
          height={350}
        />
        {alt && <span className="text-light text-sm">{alt}</span>}
      </div>
    );
  },
  blockquote: ({ children, ...props }: any) => (
    <blockquote
      {...props}
      className="mt-5 mb-8 rounded border-l-2 border-l-zinc-900 py-2 px-6 text-zinc-700 dark:border-l-white dark:text-zinc-300 [&>*:last-child]:mb-0 [&>*:first-child>*]:mt-0"
    >
      {children}
    </blockquote>
  ),
  
  a: ({ children, ...props }: any) => (
    <a {...props} className="text-blue-900 hover:underline dark:text-blue-400">
      {children}
    </a>
  ),
  p: ({ children, ...props }: any) => (
    <p {...props} className="text-md mb-8 font-light sm:text-lg">
      {children}
    </p>
  ),
  pre: ({ children, ...props }: { children: ReactNode }) => (
    <pre {...props} className="mb-6 p-4">
      {children}
    </pre>
  ),
  ol: ({ children, ...props }: any) => (
    <ol {...props} className="flex flex-col gap-1 mb-6 list-inside list-decimal">
      {children}
    </ol>
  ),
  ul: ({ children, depth, ...props }: any) => (
    <ul
      {...props}
      className={`ml-${depth} flex flex-col gap-1 mb-6 list-inside list-disc`}
    >
      {children}
    </ul>
  ),
  li: ({ children, ...props }: any) => (
    <li {...props} className="text-md font-light sm:text-lg [&>ul]:mb-2 [&>ol]:mb-2">
      {children}
    </li>
  ),
};

export default syntaxHighlighter;
// ordered="true"