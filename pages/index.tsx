import React from 'react'
import LayoutGridpage from 'layout/LayoutGridpage'
import Helmet from 'components/html-head/Helmet'
import Link from 'next/link'
import { getAllPosts } from 'utils/post';
import { Post } from 'types/post';
import { DEFAULT_PATHS, CONNECT_HREF } from 'lib/config'
import CsLineIcons from 'lib/cs-line-icons/CsLineIcons';

const Home = ({ posts }: { posts: Post[] }) => {

  return (
    <>
      <Helmet title='sunhoh' description='sunhoh blog' url='' /> 
      <LayoutGridpage>
        <div className='px-3 md:px-6'>
          <div className=''>
            <p className='mb-8 font-mono font-semibold tracking-tighter'>sunhoh</p> 
            <div className='font-mono text-sm tracking-tight'>
              <span>개인 공부를 위한 기술 블로그입니다.</span>
              <p>Next.js, typescript, tailwind, github-actions, vercel, SEO</p>
              <br /> 
            </div>
          </div>
          <div className="mt-12">
            <p className='font-mono tracking-tighter text-gray-500 text-md'>Connect</p>

            <div className='flex items-end gap-2'>
              {CONNECT_HREF.map(({key, href})=> (
                <div key={key}>
                  {key.includes('@') && <span className='font-mono text-sm'>Email: </span>}
                    <Link 
                      href={href}
                      target="_blank" 
                      rel="noreferrer"
                      className='mt-2 font-mono text-sm rounded hover:bg-slate-200'>
                        {key}
                    </Link>
                </div>
              ))}
            </div>
          </div>

          <div className='flex justify-between gap-8 mt-12'>
            <div className='flex-1'>
              <h2 className="mb-4 font-mono tracking-tighter text-gray-500 text-md">About</h2>
              <div className='flex items-center gap-1'>
                <Link href={`/${DEFAULT_PATHS.ABOUT}`} className="font-serif font-semibold underline transition-all decoration-gray-400 hover:decoration-gray-800">
                  me...
                </Link>
                <CsLineIcons icon='arrow-up-right' className="mr-2" size={15} />
              </div>
            </div>

            <div className='flex-1'>
              <h2 className="mb-4 font-mono tracking-tighter text-gray-500 text-md">Projects</h2>
                <div 
                  className="font-serif font-semibold underline transition-all cursor-pointer decoration-gray-400 hover:decoration-gray-800"
                  onClick={()=> alert('게시글 작성중입니다..')}
                >
                  ...
                </div>
            </div>

            <div className='flex-1'>
              <h2 className="mb-4 font-mono tracking-tighter text-gray-500 text-md">Posts</h2>
              {posts
                .slice(0,4)
                .map((post, idx)=>{
                const { postId, date, title, description } = post;
                return (
                  <div key={idx} className='mt-4 truncate'>
                    <Link 
                      href={`/posts/${postId}`} 
                      className="mt-8 font-mono leading-6 tracking-tighter underline truncate hover:font-semibold"
                      >
                      {title}
                    </Link>
                    <p className='text-sm tracking-tighter text-gray-500'>{description}</p>
                  </div>
                  )
              })}
              <div className='flex items-center gap-1 mt-8'>
                <Link href={`/${DEFAULT_PATHS.BLOG}`} className="font-serif font-semibold underline transition-all decoration-gray-400 hover:decoration-gray-800">
                  all post...
                </Link>
                <CsLineIcons icon='arrow-up-right' className="mr-2" size={15} />
              </div>
            </div>
          </div>


          
        </div>
      </LayoutGridpage>
    </>
  )
}

export default Home


export async function getStaticProps() {
  const allPostsData = getAllPosts();

  return {
    props: {
      posts: allPostsData,
    },
  };
}

