import React from 'react';
import { Post } from 'types/post';
import { getAllPosts } from 'utils/post';
import PostItem from 'container/post/PostItem';
import LayoutFullpage from 'layout/LayoutFullpage';
import Sidebar from 'components/sidebar/Sidebar';

const Posts = ({ posts }: { posts: Post[] }) => {
  
  const onNaviagtion = (event: { preventDefault: () => void; }) => {
    event.preventDefault()
    alert('준비중입니다.')
  }

  
  return (
    <section>
      <div className='flex gap-6'> 
        <Sidebar/>
        <div className='w-full'>
          <div className='flex items-center justify-between'>
            <h2 className="mb-16 font-serif font-semibold leading-10 dark:text-gray-100">게시글</h2>
          </div>
          <article>   
            <LayoutFullpage
              constents={
                <>
                  {posts.map((item: Post, idx: number) => {
                    return <PostItem key={idx} data={item} />;
                  })}
                </>
              }
            />
          </article>
        </div>
      </div>
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


