import Link from 'next/link';
import Image from 'next/image';
import { Prism as ReactSyntaxHighlighter } from 'react-syntax-highlighter';
import { materialLight } from 'react-syntax-highlighter/dist/cjs/styles/prism';

const syntaxHighlighter = {
  code({ node, inline, className, children, ...props }:any) {
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
  h1: ({ node, className, children, inline, ...props }:any) => (
        <h1
          {...props}
          className='mt-12 mb-6 text-3xl font-bold' 
          id={`#${children}`}
        >
      {children}
    </h1>
    ),
    blockquote: ({ children, ...props }:any) => (
      <blockquote
        {...props}
        className='mt-5 mb-8 border-l-2 border-l-zinc-900 py-2 px-6 text-zinc-700 dark:border-l-white dark:text-zinc-300 [&>*:last-child]:mb-0 [&>*:first-child>*]:mt-0'
      >
        {children}
      </blockquote>
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
};

export default syntaxHighlighter;

