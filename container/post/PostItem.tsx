import React from 'react';
import Link from 'next/link';
import CsLineIcons from 'lib/cs-line-icons/CsLineIcons';
import { Post } from 'types/post';

const PostItem = ({ data }: { data: Post }) => {
  const { id, title, date, category, description, tags, thumbnail } = data;

  return (
    <li>
      <Link href={`/post/${id}`}>
        <div className="group px-0 py-10 flex flex-col gap-2.5 border-solid border-b border-slate-200 cursor-pointer ">
          <div className="flex gap-2.5 ">
            <div className="text-xs font-mono font-bold text-quaternary">{category}</div>
            <strong className="font-serif text-xs font-normal text-gray-400">{date}</strong>
          </div>
          <div className="flex items-center justify-between">
            <div className="w-11/12 ">
              <h1 className="text-xl font-bold ">{title}</h1>
              <p className="text-sm font-medium dark:text-neutral-500">{description}</p>
            </div>
            <CsLineIcons
              icon="arrow-right"
              className="transition-all opacity-0 group-hover:opacity-100"
            />
          </div>

          <div className="flex gap-2">
            {tags.map((tag: string, index: number) => (
              <span
                key={index}
                className="rounded-2xl px-3 py-1 text-xs font-light bg-slate-200 dark:bg-gray-500"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </li>
  );
};

export default PostItem;
