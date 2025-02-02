"use client";
import Image from "next/image";
import { useMDXComponent } from "next-contentlayer/hooks";
import type { MDXComponents } from "mdx/types";

interface MdxProps {
  code?: any;
  components?: MDXComponents;
}

export function MdxComponents({code,components}:MdxProps) {
  const Component = useMDXComponent(code);

  return (
    <Component
      components={{
        a: (props) => <a target="_blank" {...props} className="text-blue-900 hover:underline dark:text-blue-400" />,
        p: ({ children, ...props }: any) => (
          <p {...props} className="mb-8 font-light text-md sm:text-lg">
            {children}
          </p>
        ),
        ol: ({ children, ...props }: any) => (
          <ol {...props} className="flex flex-col gap-1 mb-6 list-decimal list-inside" ordered="true">
            {children}
          </ol>
        ),
        ul: ({ children, depth, ...props }: any) => (
          <ul
            {...props}
            className='flex flex-col gap-1 mb-6 ml-4 list-disc list-inside'
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
          <hr className='my-6 border-gray-300 border-t-1' {...props} />
        ),
        h1: ({ node, className, children, inline, ...props }:any) => (
          <h1
            {...props}
            className='pt-32 mt-6 mb-6 text-3xl font-bold leading-10' 
            // id={getPostNavLinkId(children)}
            >
            {children}
          </h1>
        ),
        h2:({ node, className, children, inline, ...props }:any) => (
          <h2
            {...props}
            className='pt-32 mt-6 mb-6 text-2xl font-bold leading-10'  
            // id={getPostNavLinkId(children)}
          >
            {children}
          </h2>
        ),
        h3:({ node, className, children, inline, ...props }:any) => (
          <h3
            {...props}
            className='pt-32 mt-6 mb-6 text-xl font-bold leading-10' 
            // id={getPostNavLinkId(children)}
          >
            {children}
          </h3>
        ),
        Image: (props) => (
          <Image
            className="max-h-[500px] w-full object-contain"
            src='/images/article/example/thumbnail.png'
            alt={`${props.fileName}`}
            width={640}
            height={100}
            {...props}
          />
        ),
        ...components,
      }}
    />
  )
}