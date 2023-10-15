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
      className='mt-10 mb-6 pt-24 text-3xl font-bold' 
      id={getPostNavLinkId(children)}
      >
      {children}
    </h1>
  ),
  h2:({ node, className, children, inline, ...props }:any) => (
    <h2
      {...props}
      className='mt-10 mb-6 pt-24 text-2xl font-bold'  
      id={getPostNavLinkId(children)}
    >
      {children}
    </h2>
  ),
  h3:({ node, className, children, inline, ...props }:any) => (
    <h3
      {...props}
      className='mt-10 mb-6 pt-24 text-xl font-bold' 
      id={getPostNavLinkId(children)}
    >
      {children}
    </h3>
  ),

  h4:({ node, className, children, inline, ...props }:any) => (
    <h4
      {...props}
      className='mt-12 mb-6 text-xl font-bold' 
    >
      {children}
    </h4>
  ),

  pre: ({ children, ...props }:any) => (
    <pre {...props} className='mb-6'>
      {children}
    </pre>
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
      <>
        <Image
          {...props}
          className={`object-contain`}
          src={src}
          alt={alt}
          width={560}
          height={350}
        />
        {alt && <span className="text-light text-sm">{alt}</span>}
      </>
    );
  },
  strong: ({ children, ...props }: any) => (
    <strong {...props} className="font-medium">
      {children}
    </strong>
  ),
  em: ({ children, ...props }:any) => (
    <em {...props} className='mr-1'>
      {children}
    </em>
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
  ol: ({ children, ...props }: any) => (
    <ol {...props} className="flex flex-col gap-1 mb-6 list-inside list-decimal" ordered="true">
      {children}
    </ol>
  ),
  ul: ({ children, depth, ...props }: any) => (
    <ul
      {...props}
      className='ml-4 flex flex-col gap-1 mb-6 list-inside list-disc'
      ordered="true"
    >
      {children}
    </ul>
  ),
  li: ({ children, ...props }: any) => (
    <li {...props} className="text-md font-light sm:text-lg [&>ul]:mb-2 [&>ol]:mb-2" ordered="true">
      {children}
    </li>
  ),
  hr: ({ ...props }) => (
    <hr className='border-t-1 my-6 border-gray-300' {...props} />
  ),
};

export default syntaxHighlighter;


const getPostNavLinkId = (children: string[]) => { 
  if (typeof children[0] !== 'string') return

  return children[0].replace(' ', '-')
}