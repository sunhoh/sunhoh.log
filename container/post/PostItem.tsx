import React from 'react';
import Link from 'next/link';
import CsLineIcons from 'lib/cs-line-icons/CsLineIcons';
import { Post } from 'types/post';

const PostItem = ({ data }: { data: Post }) => {
  const { postId, title, date, category, description, tags, thumbnail } = data;

  return (
    <div className="relative group">
      <h3 className="absolute text-sm text-gray-500 top-3">
        {date}
      </h3>
      <Link
        href={`/post/${postId}`}
        className="flex items-center transition-opacity group-hover:opacity-60"
      >
        <div className="ml-[20%] flex flex-1 items-center border-t py-3">
          <div className='w-full'>
            <span className='text-sm'>{title}</span>
            <ul className="flex gap-2 mt-1">
              {tags.map((tag: string, index: number) => (
                <li
                  key={index}
                  className="px-3 py-1 text-xs font-light rounded-2xl bg-slate-200 dark:bg-gray-500"
                >
                  {tag}
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