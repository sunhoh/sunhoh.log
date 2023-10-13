import React, { Fragment } from 'react';
import Link from 'next/link';
import {TableOfContents} from 'types/post'
import { DEFAULT_PATHS } from 'lib/config';
import CsLineIcons from 'lib/cs-line-icons/CsLineIcons';

const Sidebar = ({toc}:{toc:TableOfContents}) => {
  return (
    <nav className="sticky self-start top-[110px] min-w-[240px] max-w-[260px] hidden lg:block">
        <Link href={DEFAULT_PATHS.HOME} className='flex items-center hover:brightness-200'>
          <CsLineIcons icon='arrow-uturn-left' className="mr-2" fill='#3f4046' size={15} />
          <span className="font-sans ">뒤로가기</span>
        </Link>
      <ul className="mt-12 space-y-2.5 font-sans text-sm text-gray-11 ">
          {toc.map((section) => {
            return (
              <Fragment key={section.slug}>
                <li className='py-1 text-sm font-normal hover:font-bold'>
                  <a href={`#${section.slug}`}>{section.text}</a>
                </li>
                {section.subs.map((subSection) =>(
                  <li key={subSection.slug} className="ml-4 text-sm font-normal hover:font-bold'">
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
