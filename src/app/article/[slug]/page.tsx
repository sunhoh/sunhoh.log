import React from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { allPosts } from '@/../.contentlayer/generated'
import { MdxComponents } from '@/features/MdxComponents'


const page = async ({ params }:any) => {
  const { slug } = await params;
  const article = allPosts.find((post) => post._raw.flattenedPath === slug)

  if (!article) notFound();

  return(
    <article className="mt-32 ">
      <header>
        <h1 className="mb-0 text-4xl font-extrabold leading-tight text-gray-800 break-words mt-9">
          {article.title}
        </h1>
      </header>
      <p className="mt-0 text-lg font-normal text-zinc-700 dark:text-zinc-300">
          {article.description}
        </p>
      {article.thumbnail && (
        <Image
          className="w-full max-h-[400px] object-cover"
          src={`/images/${article.url}/${article.thumbnail}`} 
          alt="thumbnail"
          width={680}
          height={400}
        />
      )}
      <MdxComponents code={article.body.code}/>
    </article>
  )
}
export default page