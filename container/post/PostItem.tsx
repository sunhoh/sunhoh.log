import React from 'react';
import Link from 'next/link';
import CsLineIcons from 'lib/cs-line-icons/CsLineIcons';
import { Post } from 'types/post';
import { getEnUsShortDate } from 'utils/post';

  const PostItem = ({data}:{ data: Post }) => {
  const { postId, title, date, category, description, tags, thumbnail } = data;  

  return (
    <div className="relative group">
      <div className='border-b'>{date?.slice(0,4)}</div>

      <Link
        href={`/post/${postId}`}
        className="flex items-center gap-3 transition-opacity group-hover:opacity-60 hover:text-gray-700"
      > 
        <div className="flex items-center flex-1 w-full py-3">
          <div className='w-full ml-[10%]'>
            <div className='flex items-center gap-1'>
              <span className='text-lg'>{title}</span>
              <span className="ml-1 text-xs leading-6 dark:text-gray-400 opacity-30 group-hover:opacity-100">
                {getEnUsShortDate(new Date(date))}
              </span>
            </div>
            <ul className="flex gap-2 mt-1">
              {tags.map((tag: string, index: number) => (
                <li
                  key={index}
                  className="px-1 text-xs font-light opacity-30 group-hover:opacity-100"
                >
                  {`# ${tag}`}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <CsLineIcons
            icon="arrow-right"
            className="ml-4 transition-all opacity-0 text-gray-9 group-hover:opacity-100"
          />
      </Link>
    </div>
  );
};

export default PostItem;