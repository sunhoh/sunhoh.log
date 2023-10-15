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
    <section className="mt-10">
      <div className='mt-10 gap-8 flex'>
        <Sidebar />
        <div className='w-full'>
          <article>
            <div className='flex items-center justify-between'>
                <h1 className="pb-2 font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 text-4xl sm:text-4xl sm:leading-10 lg:text-5xl lg:leading-14">
                  posts
                </h1>
                {/* <div className='flex cursor-pointer lg:hidden'> 
                  {['홈'].map((v)=>{
                    return (
                      <div key={v} 
                          className='px-4 py-1 rounded-lg hover:shadow-inner hover:bg-slate-100' 
                          onClick={onNaviagtion}
                        >  {v}
                      </div>
                    )
                  })}
                </div>  */}
              </div>
            <LayoutFullpage
              constents={
                <ul>
                  {posts.map((item: Post, idx: number) => {
                    return <PostItem key={idx} data={item} />;
                  })}
                </ul>
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
