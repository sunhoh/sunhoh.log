"use client";

import { useState, ReactNode } from 'react';
import Link from "next/link";
import { allPosts } from "@/../.contentlayer/generated";
import { ThemeToggle } from '@/features/ThemeToggle'

export default function LayoutWrapper({ children }:{ children: ReactNode}) {
  const tabs = [{type:"전체",href:'/' },{type:"개발",href:'/dev'} ];
  const [selectedTab, setSelectedTab] = useState("전체");

  const posts = allPosts.sort(
    (a, b) => Number(new Date(b.date)) - Number(new Date(a.date))
  );
  const uniqueTags = [...new Set(posts.map(e=>e.tags).flat())];

  return (
      <section className="w-full min-h-[60px] flex justify-evenly "> 
        <div className="w-full">
          <div className="z-10 sticky top-0 w-full my-2 flex border-b border-gray-300 bg-background dark:bg-foreground ">
            {tabs.map(({ type, href }) => (
              <div 
                key={`tab-${type}`} 
                className={`relative py-4 mt-2 border-b-1 transition-all ${selectedTab === type ? "border-black" : "border-transparent"}`}
              > 
                <Link
                  href={href}
                  className={`px-4 py-4 text-md font-medium rounded
                    ${selectedTab === type ? "font-bold " : "text-gray-400"}  
                  `}
                  onClick={() => setSelectedTab(type)}
                >
                  {type}
                </Link>
                {selectedTab === type && (
                  <div className="absolute bottom-0 left-0 w-full h-[3px] bg-foreground dark:bg-background rounded-lg transition-all"></div>
                )}
              </div>
            ))}
            <ThemeToggle />
          </div>
          {children}
        </div> 
        {/* <div className="w-full max-w-[200px] pl-4 border-l border-[#e5e8eb] lg:hidden my-2 ">
          <p className='py-4'>태그</p>
          <article className='flex flex-wrap gap-1 '>
            {uniqueTags.map(tag=>(
              <div 
                key={tag} 
                className="w-fit bg-[#eff4f8] rounded-[20px] mt-[4px]  px-4 py-2 cursor-pointer transition-all duration-200 hover:bg-[#b6bcc1]/40 "
                >
                {tag}
              </div>
            ))}
            
          </article>
        </div> */}
      </section>
  )
}