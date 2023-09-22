import React from 'react';
import Link from 'next/link';
import CsLineIcons from 'lib/cs-line-icons/CsLineIcons';
import { getAllPosts } from 'utils/post';
import { Post } from 'types/post';

const Posts = ({ posts }: { posts: Post[] }) => {
  return (
    <section className="lg:p-52 md:px-20 md:py-32 sm:px-8 sm:py-24 transition-all">
      <div className="flex justify-between">
        <h2 className="flex items-center text-3xl font-bold">Posts</h2>
        <div className="flex">
          {/* {['보도자료', '공지사항'].map(sub => {
            return (
              <ul key={sub} onClick={({ target: { innerHTML } }: any) => {}}>
                <li className="text-lg ml-2 py-3 px-6 rounded-full transition ease-in-out delay-250 cursor-pointer bg-gray-100 hover:bg-gray-400">
                  {sub}
                </li>
              </ul>
            );
          })} */}
        </div>
      </div>
      {/*  */}
      {posts.map((item: any, idx: number) => {
        const { id, title, date, description, tags, thumbnail } = item;
        return (
          <Link key={idx} href={`/post/${id}`}>
            <div className="group px-0 py-10  flex flex-col gap-2.5 border-solid border-b border-slate-200 cursor-pointer">
              <div className="flex gap-2.5">
                <div className="text-xs font-bold text-quaternary">{id}</div>
                <div className="font-serif text-xs font-normal text-gray-400">{date}</div>
              </div>

              <div className="flex items-center justify-between">
                <span className="w-11/12 text-xl font-normal leading-5 text-black truncate md:text-base sm:text-xs">
                  {title}
                </span>
                <CsLineIcons
                  icon="github"
                  fill="#6b7480"
                  stroke="0"
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
      })}
    </section>
  );
};

export default Posts;

export async function getStaticProps() {
  const allPostsData = getAllPosts();

  return {
    props: {
      posts: allPostsData,
    },
  };
}
