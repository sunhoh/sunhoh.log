import React from 'react'
import LayoutGridpage from 'layout/LayoutGridpage'
import Helmet from 'components/html-head/Helmet'
import {  Introduce, Skills, WorkExperience, SideProject, Activities } from 'container/resume/ResumeItem'
import CsLineIcons from 'lib/cs-line-icons/CsLineIcons';
import { useTheme } from 'next-themes';
import { useRouter } from 'next/router';


const Resume = () => {
  const { theme, setTheme } = useTheme();
  const router = useRouter()
  
  return (
    <>
      <Helmet title='sunhoh | resume' description='이력서' url=''/> 
      <LayoutGridpage>
        <div className='px-3 md:px-6'>
          <div>
            <div 
              className='text-xs text-gray-500 cursor-pointer w-fit' 
              onClick={()=>router.push('/')}
            >
              home
            </div>
            <div className='flex justify-between mb-4 font-semibold mono'>
              <p className='text-lg'>이선호 — Frontend Engineer</p> 
              <div
                className="p-1 ml-2 rounded-lg cursor-pointer hover:bg-neutral-100 dark:bg-neutral-800 "
                onClick={() => (theme === 'dark' ? setTheme('light') : setTheme('dark'))}
                >
                <CsLineIcons icon={theme === 'dark' ? 'moon' : 'sun'} stroke="1" fill="#facc13" />
              </div> 
            </div> 
            <div 
              className='w-full p-4 border rounded cursor-pointer hover:bg-gray-100'
              onClick={()=> window.open("https://www.notion.so/a31856a7393c4eac9b9f6da682146266", "_blank")}
            >
              <h3 
                className="w-full text-sm font-semibold transition-all decoration-gray-400 hover:decoration-gray-800"
              >
                Portfolio (Notion)
              </h3>
              <p className='my-2 text-sm'>notion</p>
              <p className='text-xs '>https://www.notion.so/a31856a7393c4eac9b9f6da682146266</p>
            </div>
          </div>

          

          <section>
            {['Introduce.','Skills.','Work Experience.','Side Project.','Activities.'].map((title,idx)=>{
              return (
                <div key={idx} className="mt-12" >
                  <h2 className='text-lg mono'>{title}</h2>
                  <hr className='my-4 h-[1px] w-full border-gray-300'/> 

                  <div className='flex items-end gap-2'>
                    {title === 'Introduce.' && <Introduce />}
                    {title === 'Skills.' && <Skills />}
                    {title === 'Work Experience.' && <WorkExperience />}
                    {title === 'Side Project.' && <SideProject />}
                    {title === 'Activities.' && <Activities />}
                    {/* {title === 'Education.' && <Education />} */}
                  </div>
                </div>
              )
            })}
          </section>          
        </div>
      </LayoutGridpage>
    </>
  )
}

export default Resume


