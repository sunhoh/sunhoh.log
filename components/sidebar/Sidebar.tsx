import React, { MouseEventHandler, Fragment } from 'react';
import { TableOfContents } from 'types/post'
import { DEFAULT_PATHS } from 'lib/config';
import { useRouter } from 'next/router';
import { useTheme } from 'next-themes';
import CsLineIcons from 'lib/cs-line-icons/CsLineIcons';

const Sidebar = ({ toc}: { toc?:TableOfContents}) => {
  const router = useRouter()
  const { theme, setTheme } = useTheme();
  const nav_title = router.pathname === '/posts' ? 'Home' : 'Blog'
  
  const onNaviagtion: MouseEventHandler<HTMLDivElement> = (event) => {
    // event.preventDefault()
    const innerText = event.currentTarget.innerText;
    if(innerText === 'Blog') router.push(DEFAULT_PATHS.BLOG)
    if(innerText === 'Home') router.push(DEFAULT_PATHS.HOME)
  }
  
  return (
    <nav className='pl-6 sticky self-start top-[128px] md:hidden min-w-[150px]'>
      <div className='flex items-center cursor-pointer w-fit hover:brightness-200' onClick={onNaviagtion}>
        <CsLineIcons icon='arrow-up-left' className="mr-2" size={15} />
        {/*  */}
        <span className="leading-10 mono dark:text-gray-100">{nav_title}</span> 
        {/*  */}
      </div>
      <ul className="mt-8 pt-8 space-y-2.5 font-sans text-sm text-gray-11">
          {toc?.map((section) => {
            return (
              <Fragment key={section.slug}>
                <li className='text-sm font-normal hover:font-bold'>
                  <a href={`#${section.slug}`}>{section.text}</a>
                </li>
                {/* {section.subs.map((subSection) =>(
                  <li key={subSection.slug} className="ml-4 text-sm font-normal hover:font-bold">
                    <a href={`#${subSection.slug}`}>{subSection.text}</a>
                  </li>
                  ))} */}
              </Fragment>
            )
          })}
      </ul>
      {/* <hr className='w-[70%] mt-[75px] mb-10 border-gray-300'/> */}
      <div
        className="p-1 mt-20 rounded-lg cursor-pointer w-fit hover:bg-neutral-100 dark:bg-neutral-800 "
        onClick={() => (theme === 'dark' ? setTheme('light') : setTheme('dark'))}
      >
        <CsLineIcons icon={theme === 'dark' ? 'moon' : 'sun'} stroke="1" fill="#facc13" />
      </div>
    </nav>
  );
};

export default Sidebar;
