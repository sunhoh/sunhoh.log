import React, { Fragment } from 'react';
import Link from 'next/link';
import {TableOfContents} from 'types/post'
import { DEFAULT_PATHS } from 'lib/config';


const Sidebar = ({toc}:{toc:TableOfContents}) => {
  return (
    <nav className="border border-solid sticky self-start top-[120px] min-w-[240px] max-w-[260px] hidden lg:block">
        <Link href={DEFAULT_PATHS.HOME} className='border border-solid text-gray-11 hover:text-gray-12'>
          <span className="font-serif">뒤로가기</span>
        </Link>
      <ul className="mt-12 space-y-2.5 font-sans text-sm text-gray-11">
          {toc.map((section) => {
            return (
              <Fragment key={section.slug}>
                <li className='py-1 hover:text-tx font-medium'>
                  <a href={`#${section.slug}`} className='text-sm' >{section.text}</a>
                </li>
                {section.subs.map((subSection,index) =>(
                  <li key={subSection.slug} className="ml-4 border border-solid">
                    <a href={`#${section.slug}`} className='text-sm'>{subSection.text}</a>
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
