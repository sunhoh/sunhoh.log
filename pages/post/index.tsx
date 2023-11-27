import React from 'react';
import { Post } from 'types/post';
import { getAllPosts } from 'utils/post';
import PostItem from 'container/post/PostItem';
import LayoutGridpage from 'layout/LayoutGridpage'

const Posts = ({ posts }: { posts: Post[] }) => {
  
  const onNaviagtion = (event: { preventDefault: () => void; }) => {
    event.preventDefault()
    alert('준비중입니다.')
  }  

  return (
    <LayoutGridpage>
      <div className='px-4'>
        <div className='flex items-center justify-between'>
          <h2 className="mb-16 font-sans font-semibold leading-10 dark:text-gray-100">게시글</h2>
        </div>
        <article className="w-full">
          {posts.map((item: Post, idx: number) => {
            return <PostItem key={idx} data={item} />;
          })}
        </article>
      </div>
    </LayoutGridpage>
    
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


