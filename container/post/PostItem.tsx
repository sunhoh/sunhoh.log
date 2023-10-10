import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import CsLineIcons from 'lib/cs-line-icons/CsLineIcons';
import { Post } from 'types/post';

const PostItem = ({ data }: { data: Post }) => {
  const { postId, title, date, category, description, tags, thumbnail } = data;


  return (
    <li>
      <Link href={`/post/${postId}`}>
        <div className="group px-0 py-10 flex flex-col gap-2.5 border-solid border-b border-slate-200 cursor-pointer ">
          <div className="flex gap-2.5 ">
            <div className="text-xs font-mono font-bold text-quaternary">{category}</div>
            <strong className="font-serif text-xs font-normal text-gray-400">{date}</strong>
          </div>
          <div className="flex items-center justify-between">
            <div className='border border-solid h-[100px] mr-5 bg-slate-200'>
            <Image
              src={`/images/${postId}/${thumbnail}`}
              
              alt={thumbnail}
              width={100}
              height={100}
              style={{ height: '100%', objectFit:'fill' }}
              // className='object-cover h-100 w-100'
            />
            </div>

            <div className="w-11/12">
              <h1 className="text-xl font-bold ">{title}</h1>
              <p className="text-sm font-medium dark:text-neutral-500">{description}</p>

              <ul className="flex gap-2 mt-2">
                {tags.map((tag: string, index: number) => (
                  <li
                    key={index}
                    className="rounded-2xl px-3 py-1 text-xs font-light bg-slate-200 dark:bg-gray-500"
                  >
                    {tag}
                  </li>
                ))}
          </ul>
            </div>
            <CsLineIcons
              icon="arrow-right"
              className="transition-all opacity-0 group-hover:opacity-100"
            />
          </div>

          {/* <div className="flex gap-2">
            {tags.map((tag: string, index: number) => (
              <span
                key={index}
                className="rounded-2xl px-3 py-1 text-xs font-light bg-slate-200 dark:bg-gray-500"
              >
                {tag}
              </span>
            ))}
          </div> */}
        </div>
      </Link>
    </li>
  );
};

export default PostItem;
