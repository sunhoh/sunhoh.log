import React from 'react';
import { Post } from 'types/post';
import { getAllPosts } from 'utils/post';
import PostItem from 'container/post/PostItem';
import LayoutGridpage from 'layout/LayoutGridpage'
import Helmet from 'components/html-head/Helmet';
import { yearEntriesCb } from 'utils/post'


const Posts = ({ posts }: { posts: Post[] }) => {
  return (
    <>
      <Helmet title='sunhoh | blog' description='all posts' url=''/> 
      <LayoutGridpage>
        <div className='px-3 md:w-screen md:px-6'>
          <div className='flex items-center justify-between'>
            <h2 className="mb-[52px] font-sans font-semibold leading-10">Blog</h2>
          </div>
          <article className="w-full">
            {Object.entries(posts.reduce(yearEntriesCb ,{}))
              .sort(([a],[b])=> +b - +a)
              .map((item,idx)=>{
                return <PostItem key={idx} data={item}/>;
              })
            }
          </article>
        </div>
        
      </LayoutGridpage>
    </>
    
    
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