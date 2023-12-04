import React from 'react'
import LayoutGridpage from 'layout/LayoutGridpage'
import Helmet from 'components/html-head/Helmet'
import Link from 'next/link'
import { getAllPosts } from 'utils/post';
import { Post } from 'types/post';
import CsLineIcons from 'lib/cs-line-icons/CsLineIcons';

const Home = ({ posts }: { posts: Post[] }) => {
  const title ='sunhoh'

  console.log(posts)
  
  return (
    <>
      <Helmet title={title} /> 
      <LayoutGridpage>
        <div className='px-3 md:px-6'>
          <div className=''>
            <p className='mb-8 font-semibold tracking-tight'>sunhoh</p> 
            <div className='font-mono tracking-tight'>
              2년차, 프론트엔드 개발자 이선호입니다.
            </div>
          </div>
          
          <div className="mt-24">
            <p className='tracking-tight text-gray-500 text-md'>Connect</p>
            <div className='flex gap-2'>
              {['Github','Email','Notion'].map((e,idx)=> (
                <Link href='/' key={idx} className='mt-2 text-sm rounded hover:bg-slate-200'>{e}</Link>
              ))}
            </div>
          </div>

          <div className='flex justify-between gap-8 mt-12'>
            <div>
              <h2 className="mb-4 tracking-tight text-gray-500 text-md">About me</h2>
              <div className='flex items-center gap-1'>
                <Link href="/" className="font-serif font-semibold underline transition-all decoration-gray-400 hover:decoration-gray-800">
                  resume
                </Link>
                <CsLineIcons icon='arrow-up-right' className="mr-2"  size={15} />
              </div>
            </div>

            {/* <div className='flex-1 border'>
              <h2 className="mb-4 font-sans tracking-tight text-gray-500">Projects</h2>
            </div> */}

            <div className='w-[60%] truncate'>
              <h2 className="mb-4 font-sans tracking-tight text-gray-500 text-md">Posts</h2>
              {posts
                .slice(0,4)
                .map((post, idx)=>{
                const { postId, date, title, description, thumbnail } = post;
                return (
                  <>
                    <Link
                      key={idx} 
                      href={`/posts/${postId}`} 
                      className="font-sans leading-9 tracking-tight underline truncate hover:font-semibold"
                      >
                      {title}
                    </Link>
                    <p className='text-sm text-gray-500'> {description}</p>
                  </>
                )
              })}
              <div className="mt-8 text-sm hover:underline">
                <Link href="/posts" > All Post ... </Link>
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

