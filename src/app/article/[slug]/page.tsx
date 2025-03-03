import React from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { allPosts } from '@/../.contentlayer/generated'
import { Mdx } from '@/features/Mdx'
import { formatDate } from '@/shared/utils/formatDate'


const page = async ({ params }:any) => {
  const { slug } = await params;
  const article = allPosts.find((post) => post._raw.flattenedPath === slug)

  if (!article) notFound();

  return(
    <article className="mt-12 prose prose-blue dark:prose-invert max-w-none">
      {article.thumbnail && (
        <Image
          className="w-full max-h-[400px] object-cover"
          src={`/images/${article.url}/${article.thumbnail}`} 
          alt="thumbnail"
          width={680}
          height={400}
        />
      )}

      <header className=" border-b">
        <div>
          <h1 className="mb-0 text-4xl font-extrabold leading-tight break-words mt-9">
            {article.title}
          </h1>
          <p className="text-base font-normal text-[#4e5968] ">
            {formatDate(article.date)}
          </p>
        </div>
        
        <div className="flex gap-2 mb-12">
          {article.tags?.map((tag)=>(
            <div key={tag}  
            className="w-fit bg-[#eff4f8] rounded-full px-4 py-1 cursor-pointer text-[#4e5968] text-sm"
            > 
            #{tag}
          </div>
          ))}
        </div>
      </header>
      <div className="mt-12">
        <Mdx code={article.body.code}/>
      </div>
    </article>
  )
}
export default page