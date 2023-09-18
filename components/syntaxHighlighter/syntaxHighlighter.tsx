import Link from 'next/link';
import Image from 'next/image';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark, vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';

const syntaxHighlighter = {
  code({ node, inline, className, children, ...props }: any) {
    const match = /language-(\w+)/.exec(className || '');
    return !inline && match ? (
      <SyntaxHighlighter language={match[1]} PreTag="pre" style={materialDark} {...props}>
        {String(children).replace(/\n$/, '')}
      </SyntaxHighlighter>
    ) : (
      <code className={className} {...props}>
        {children}
      </code>
    );
  },
  h1: ({ node, className, children, inline, ...props }: any) => <h1>{children}</h1>,
  h2: ({ children, ...props }: any) => <h2>{children}</h2>,
  h3: ({ children, ...props }: any) => <h3>{children}</h3>,
  h4: ({ children, ...props }: any) => <h4>{children}</h4>,
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
      style={{
        background: '#f0f0f0',
        padding: '15px',
        borderRadius: '10px',
      }}
      className="mt-5 mb-8 border-l-2 border-l-zinc-900 py-2 px-6 text-zinc-700 dark:border-l-white dark:text-zinc-300 [&>*:last-child]:mb-0 [&>*:first-child>*]:mt-0"
    >
      {children}
    </blockquote>
  ),
  a: ({ children, ...props }: any) => <a {...props}>{children}</a>,
  p: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  pre: ({ children, ...props }: any) => (
    <pre {...props} className="mb-6 p-4">
      {children}
    </pre>
  ),
};

export default syntaxHighlighter;
