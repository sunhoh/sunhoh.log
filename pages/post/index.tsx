import React from 'react';
import { Post } from 'types/post';
import { getAllPosts } from 'utils/post';
import PostItem from 'container/post/PostItem';
import { useTheme } from 'next-themes';
import { parseToc } from 'utils/post';

const Posts = ({ posts }: { posts: Post[] }) => {
  return (
    <section className="mt-10">
      <div className="flex justify-between">
        <h2 className="flex items-center text-3xl font-sans font-bold">Posts</h2>
        {/* <div className="flex">
          {['DDD'].map(sub => {
            return (
              <ul key={sub} >
                <li className="text-lg ml-2 py-3 px-6 rounded-full transition ease-in-out delay-250 cursor-pointer bg-gray-100 hover:bg-gray-400">
                  {sub}
                </li>
              </ul>
            );
          })}
        </div> */}
      </div>

      <ul>
        {posts.map((item: Post, idx: number) => {
          return <PostItem key={idx} data={item} />;
        })}
      </ul>
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
