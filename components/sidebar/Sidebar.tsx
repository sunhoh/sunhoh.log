import React from 'react';
import {TableOfContents} from 'types/post'


const Sidebar = ({toc}:{toc:TableOfContents}) => {


  return (
    <div className="border border-solid sticky top-[120px] hidden min-w-[240px] max-w-[260px] self-start lg:block">
      <ul className="mt-12 border border-solid transition-all">
          {toc.map((section,index) => {
            return (
              <>
                <li key={index} className='py-1'>
                  <a href={`#${section.slug}`} className='text-sm' >{section.slug}</a>
                </li>
                {section.subs.map((subSection,index) =>(
                  <li key={subSection.slug} className="ml-4 border border-solid">
                    <a href={`#${section.slug}`} className='text-sm'>{subSection.slug}</a>
                  </li>
                ))}
              </>
            )
          })}
      </ul>
    </div>
  );
};

export default Sidebar;
