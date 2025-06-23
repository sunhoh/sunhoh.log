import React from 'react';
import Link from 'next/link';
import CsLineIcons from 'lib/cs-line-icons/CsLineIcons';
import { Post } from 'types/post';
import { getEnUsShortDate } from 'utils/post';


const PostItem = ({ data: [year, postList] }: { data: [string, Post[]] }) => {

  return (
    <div className="relative">
      <h3 className='border-b border-gray-300 text-md'>{`${year}.`}</h3>

      {postList.map((data,idx)=>{
        const { postId, title, date, category, description, tags, thumbnail } = data;
        return (
          <Link
            key={`${postId}-${idx}`}
            href={`/posts/${postId}`}
            className="flex items-center gap-3 transition-opacity group"
          > 
          <div className="flex items-center flex-1 w-full py-3 group-hover:opacity-60">
            <div className='w-full ml-[10%]'>
              <div className='flex items-center gap-1'>
                <span className='text-md'>{title}</span>
                <span className="ml-1 text-xs leading-6 transition-all opacity-30 dark:text-gray-400">
                  {getEnUsShortDate(new Date(date))}
                </span>
              </div>
              
              <div className='text-xs transition-all opacity-30 dark:text-gray-400'>{description}</div>
            </div>
          </div>
        <CsLineIcons
            icon="arrow-right"
            className="ml-4 transition-all opacity-0 text-gray-9 group-hover:opacity-100"
          />
      </Link>
        )
      })}
      
    </div>
  );
};

export default PostItem;