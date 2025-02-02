"use client";
import { useState } from 'react';
import Image from 'next/image';
import Link from "next/link";
import { allPosts } from "@/../.contentlayer/generated";
import { ThemeToggle } from '@/features/ThemeToggle'

export default function Home() {
  const posts = allPosts.sort(
    (a, b) => Number(new Date(b.date)) - Number(new Date(a.date))
  );
  const [selectedTab, setSelectedTab] = useState("전체");
  const tabs = ["전체", "개발"];
  const uniqueTags = [...new Set(posts.map(e=>e.tags).flat())];
  console.log(posts)

  return (
    <div className="m-auto">
      <div>
        <section className="w-full min-h-[60px] flex justify-evenly"> 
          <div className="w-full max-w-[700px] pr-4">
            <div className="z-10 sticky top-[60px] w-full my-2 bg-white flex border-b border-gray-300">
              {tabs.map((tab) => (
                <div key={tab}> 
                  <button
                    className={`px-4 py-2 text-gray-700 text-lg font-medium transition-all rounded 
                      ${selectedTab === tab ? "font-bold" : "hover:text-gray-900"}  
                      `}
                    onClick={() => setSelectedTab(tab)}
                  >
                    {tab}
                  </button>
                  {selectedTab === tab && <div className="h-[3px] bg-black rounded-lg transition-all border-gray-700" />}
                </div>
              ))}
              <ThemeToggle />
            </div>     
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
          <div className="w-full max-w-[200px] pl-4 border-l border-[#e5e8eb] lg:hidden my-2">
            <p className='py-4'>태그</p>
            <article className='flex flex-wrap gap-2'>
              {uniqueTags.map(tag=>(
                <div 
                  key={tag} 
                  className="w-fit bg-[#f9fafb] rounded-[20px] mt-[12px] px-4 py-2 cursor-pointer transition-all duration-200 hover:bg-[#b6bcc1]/40 "
                  >
                  {tag}
                </div>
              ))}
              
            </article>
          </div>
        </section>
      </div>
    </div>
  );
}