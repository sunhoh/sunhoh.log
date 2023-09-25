import React from 'react';
import Link from 'next/link';
import CsLineIcons from 'lib/cs-line-icons/CsLineIcons';
import { Post } from 'types/post';

const PostItem = ({ data }: { data: Post }) => {
  const { id, title, date, category, description, tags, thumbnail } = data;

  return (
    <Link href={`/post/${id}`}>
      <div className="group px-0 py-10  flex flex-col gap-2.5 border-solid border-b border-slate-200 cursor-pointer">
        <div className="flex gap-2.5 ">
          <div className="text-xs font-mono font-bold text-quaternary">{category}</div>
          <strong className="font-serif text-xs font-normal text-gray-400">{date}</strong>
        </div>

        <div className="flex items-center justify-between">
          <span className="w-11/12 text-xl font-normal leading-5 text-black truncate md:text-base sm:text-xs">
            {title}
          </span>
          <CsLineIcons
            icon="arrow_right"
            className="transition-all opacity-0 group-hover:opacity-100"
          />
        </div>
        <div className="flex gap-2">
          {tags.map((tag: string, index: number) => (
            <span
              key={index}
              className="rounded-2xl px-3 py-1 text-xs font-light text-black bg-slate-200"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default PostItem;
