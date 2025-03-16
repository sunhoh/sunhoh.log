"use client";

import Link from "next/link";
import { allPosts } from "@/../.contentlayer/generated";
import { formatMonthDay } from "@/shared/utils/formatDate"

export default function Home() {
  const posts = allPosts.sort(
    (a, b) => Number(new Date(b.date)) - Number(new Date(a.date))
  );
  
  return (
    <div data-animate data-animate-speed="slow" className="container group">
      {posts.map((post) => {
        return (
          <article key={post._id} className='mt-4 group/item hover:!opacity-100 group-hover:opacity-40'>
            <Link  href={post.url} className="flex items-center justify-between ">
              <div className='flex-1'>
                <h3 className="text-base">{post.title}</h3>
                <p className="text-sm break-words text-p text-gray-600 dark:text-gray-400">{post?.description}</p>
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">{formatMonthDay(post.date)}</div>
              {/* <div className='w-[130px] h-[100px] border rounded-lg overflow-hidden'>
                <Image 
                  src={`/images/${post.url}/${post.thumbnail}` || '/images/article/thumbnail.png'} 
                  alt=""
                  width={100}
                  height={100}
                  className="object-contain w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-110"
                />
              </div> */}
            </Link>
          </article>
        );
      })}
    </div>
  );
}