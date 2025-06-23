import React, { MouseEventHandler, Fragment } from 'react';
import { TableOfContents } from '../../types/post'
import { DEFAULT_PATHS } from '../../lib/config';
import { useRouter } from 'next/router';
import { useTheme } from 'next-themes';
import CsLineIcons from '../../lib/cs-line-icons/CsLineIcons';

const Sidebar = ({ toc}: { toc?:TableOfContents}) => {
  const router = useRouter()
  const { theme, setTheme } = useTheme();
  const nav_title = router.pathname === '/posts' ? 'Home' : 'Posts'
  
  const onNaviagtion: MouseEventHandler<HTMLDivElement> = (event) => {
    // event.preventDefault()
    const innerText = event.currentTarget.innerText;
    if(innerText === 'Posts') router.push(DEFAULT_PATHS.BLOG)
    if(innerText === 'Home') router.push(DEFAULT_PATHS.HOME)
  }
  
  return (
    <nav className='pl-6 sticky self-start top-[128px] md:hidden min-w-[150px]'>
      <div className='flex items-center cursor-pointer w-fit hover:brightness-200' onClick={onNaviagtion}>
        <CsLineIcons icon='arrow-up-left' className="mr-2" size={15} />
        <span className="leading-10 mono dark:text-gray-100">{nav_title}</span> 
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
    </nav>
  );
};

export default Sidebar;
