import React from 'react';
import { Post } from '../../types/post';
import { getAllPosts } from '../../utils/post';
import PostItem from '../../container/post/PostItem';
import LayoutGridpage from '../../layout/LayoutGridpage'
import Helmet from '../../components/html-head/Helmet';
import { yearEntriesCb } from '../../utils/post'
import CsLineIcons from '../../lib/cs-line-icons/CsLineIcons';
import { useTheme } from 'next-themes';

const Posts = ({ posts }: { posts: Post[] }) => {
  const { theme, setTheme } = useTheme();
  return (
    <>
      <Helmet title='sunhoh | blog' description='all posts' url=''/> 
      <LayoutGridpage>
        <div className='px-3 md:w-screen md:px-6'>
          <div className='flex items-center justify-between mb-[52px]'>
            <h2 className="font-sans font-semibold leading-10 ">Posts</h2>
            <div
              className="p-1 rounded-lg cursor-pointer w-fit dark:bg-neutral-800 "
              onClick={() => (theme === 'dark' ? setTheme('light') : setTheme('dark'))}
            >
              <CsLineIcons icon={theme === 'dark' ? 'moon' : 'sun'} stroke="1" fill="#facc13" />
            </div>
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