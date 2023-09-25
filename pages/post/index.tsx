import React from 'react';
import { Post } from 'types/post';
import { getAllPosts } from 'utils/post';
import PostItem from 'container/post/PostItem';

const Posts = ({ posts }: { posts: Post[] }) => {
  return (
    <section className="lg:p-40 md:px-20 md:py-32 sm:px-8 sm:py-24 transition-all max-w-screen-xl m-auto">
      <div className="flex justify-between">
        <h2 className="flex items-center text-3xl font-sans font-bold">Posts</h2>

        {/* <div className="flex">
          {['tags', 'about', 'd'].map(sub => {
            return (
              <ul key={sub} onClick={({ target: { innerHTML } }: any) => {}}>
                <li className="text-lg ml-2 py-3 px-6 rounded-full transition ease-in-out delay-250 cursor-pointer bg-gray-100 hover:bg-gray-400">
                  {sub}
                </li>
              </ul>
            );
          })}
        </div> */}
      </div>
      {/*  */}
      {posts.map((item: Post, idx: number) => {
        return <PostItem key={idx} data={item} />;
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
