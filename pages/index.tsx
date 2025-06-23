import React from 'react'
import LayoutGridpage from 'layout/LayoutGridpage'
import Helmet from 'components/html-head/Helmet'
import Link from 'next/link'
import { useTheme } from 'next-themes';
import { getAllPosts } from 'utils/post';
import { Post } from 'types/post';
import { DEFAULT_PATHS, CONNECT_HREF, WORKED } from 'lib/config'
import CsLineIcons from 'lib/cs-line-icons/CsLineIcons';

const Home = ({ posts }: { posts: Post[] }) => {
  const { theme, setTheme } = useTheme();
  return (
    <>
      <Helmet title='sunhoh' description='sunhoh blog' url='' /> 
      <LayoutGridpage>
        <div className='px-3 md:px-6'>
          <div className='flex items-center justify-between mb-4'>
            <p className='font-semibold tracking-tighter'>이선호입니다.</p> 
            <div
              className="p-1 rounded-lg cursor-pointer w-fit hover:bg-neutral-100 dark:bg-neutral-800 "
              onClick={() => (theme === 'dark' ? setTheme('light') : setTheme('dark'))}
            >
              <CsLineIcons icon={theme === 'dark' ? 'moon' : 'sun'} stroke="1" fill="#facc13" />
            </div>
          </div>
          <div className='text-sm tracking-tight'>
            <p>MBTI는 ENFJ입니다.</p>
            <p>배우는 걸 좋아합니다. 그래서 관심사가 많습니다.</p>
            <p>웨이트를 꾸준히 하고 있습니다</p>
            <p>요즘에는 러닝에 빠져있습니다.</p>
          </div>
          <div className="mt-4">
            <div className='flex items-end gap-1'>
              {CONNECT_HREF.map(({key, href, viewBox})=> (
                <Link key={key} href={href} target="_blank" rel="noreferrer" className="p-1 rounded hover:bg-[#e4e4e9]">
                  <CsLineIcons icon={key} size='1em' stroke="0" viewBox={viewBox}/>
                </Link>
              ))}
            </div>
          </div>

          <div className='flex justify-between gap-8 mt-12'>
          <div className="max-w-3xl ">
            <h2 className="mb-4 text-xl font-bold">I&apos;ve worked at</h2>
            <ul className="relative border-l border-gray-300 dark:border-gray-600">
              {WORKED.map((item, idx) => (
                <li key={idx} className="mb-8 ml-6">
                  <div className='flex items-center gap-2 sm:flex-row sm:justify-between'>
                    <h3 className="text-lg font-semibold">{item.company}</h3>
                    <time className="text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap">
                      {item.period}
                    </time>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {item.position}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <div className='flex-1'>
            <h2 className="mb-4 text-xl font-bold">Posts</h2>
            {posts
              .slice(0,3)
              .map((post, idx)=>{
              const { postId, date, title, description } = post;
              return (
                <div key={idx} className='mt-4 truncate'>
                  <Link 
                    href={`/posts/${postId}`} 
                    className="mt-8 leading-6 tracking-tighter underline truncate hover:font-semibold"
                    >
                    {title}
                  </Link>
                  <p className='text-sm tracking-tighter text-gray-500'>{description}</p>
                </div>
                )
            })}
            <div className='flex items-center gap-1 mt-8'>
              <Link href={`/${DEFAULT_PATHS.BLOG}`} className="font-semibold underline transition-all decoration-gray-400 hover:decoration-gray-800">
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

