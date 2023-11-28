import React, { Fragment } from 'react';
import Link from 'next/link';
import { TableOfContents } from 'types/post'
import { DEFAULT_PATHS } from 'lib/config';
import { useRouter } from 'next/router';
import { useTheme } from 'next-themes';
import CsLineIcons from 'lib/cs-line-icons/CsLineIcons';

const Sidebar = ({ toc}: { toc?:TableOfContents}) => {
  const router = useRouter()
  const { theme, setTheme } = useTheme();

  const onNaviagtion = (event: { preventDefault: () => void; }) => {
    event.preventDefault()

    if(router.pathname === '/post') alert('준비중입니다.')
    else router.push(DEFAULT_PATHS.HOME)
  }
  
  return (
    <nav className='px-2 sticky self-start top-[128px] md:hidden'>
        <div className='flex items-center cursor-pointer w-fit hover:brightness-200' onClick={onNaviagtion}>
          <CsLineIcons icon='arrow-up-left' className="mr-2"  size={15} />
          <span className="font-sans leading-10 dark:text-gray-100">{router.pathname === '/post' ? '홈' : '뒤로가기'}</span> 
        </div>
        <ul className="mt-12 space-y-2.5 font-sans text-sm text-gray-11 ">
            {toc?.map((section) => {
              return (
                <Fragment key={section.slug}>
                  <li className='py-1 text-sm font-normal hover:font-bold'>
                    <a href={`#${section.slug}`}>{section.text}</a>
                  </li>
                  {section.subs.map((subSection) =>(
                    <li key={subSection.slug} className="ml-4 text-sm font-normal hover:font-bold">
                      <a href={`#${subSection.slug}`}>{subSection.text}</a>
                    </li>
                    ))}
                </Fragment>
              )
            })}
        </ul>

        <div className='pt-6 mt-16 border-b '/>
        <div className='py-2'>
          <div
            className="p-1 rounded-lg cursor-pointer w-fit hover:bg-neutral-100 dark:bg-neutral-800 "
            onClick={() => (theme === 'dark' ? setTheme('light') : setTheme('dark'))}
          >
            <CsLineIcons icon={theme === 'dark' ? 'moon' : 'sun'} stroke="1" fill="#facc13" />
          </div>
        </div>
    </nav>
  );
};

export default Sidebar;
