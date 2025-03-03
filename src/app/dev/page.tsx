"use client";

import Image from 'next/image';
import Link from "next/link";
import { allPosts } from '@/../.contentlayer/generated'

export default function Developer() {
  const posts = allPosts.sort(
    (a, b) => Number(new Date(b.date)) - Number(new Date(a.date))
  );

  return (
    <div className="m-auto">
      {posts.map((post) => {
        return (
          <article key={post._id} className='mt-4 group'>
            <Link  href={post.url} className="flex items-center justify-between">
              <div className='flex-1'>
                <h1 className="text-h6">{post.title}</h1>
                <p className="mt-2 text-gray-700 break-words text-p">{post?.description}</p>
              </div>
              <div className='w-[130px] h-[100px] border rounded-lg overflow-hidden'>
                <Image 
                  src={`/images/${post.url}/${post.thumbnail}` || '/images/article/thumbnail.png'} 
                  alt=""
                  width={100}
                  height={100}
                  className="object-contain w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-110"
                />
              </div>
            </Link>
          </article>
        );
      })}
    </div> 
  )
}