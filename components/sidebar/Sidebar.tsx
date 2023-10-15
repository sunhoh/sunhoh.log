import React, { Fragment } from 'react';
import Link from 'next/link';
import {TableOfContents} from 'types/post'
import { DEFAULT_PATHS } from 'lib/config';
import CsLineIcons from 'lib/cs-line-icons/CsLineIcons';
import { useRouter } from 'next/router';

const Sidebar = ({toc}:{toc?:TableOfContents}) => {
  const router = useRouter()

  const onNaviagtion = (event: { preventDefault: () => void; }) => {
    event.preventDefault()

   if(router.pathname === '/post') alert('준비중입니다.')
   else router.push(DEFAULT_PATHS.HOME)
  }

  return (
    <nav className="sticky self-start top-[110px] min-w-[240px] max-w-[260px] hidden lg:block">
      <div className='flex items-center cursor-pointer hover:brightness-200' onClick={onNaviagtion}>
        <CsLineIcons icon='arrow-uturn-left' className="mr-2" fill='#3f4046' size={15} />
        <span className="font-sans">{router.pathname === '/post' ? '홈' : '뒤로가기'}</span>
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
    </nav>
  );
};

export default Sidebar;
