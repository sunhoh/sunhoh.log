import React from 'react'
import Link from 'next/link';
import LayoutGridpage from 'layout/LayoutGridpage'
import Helmet from 'components/html-head/Helmet'
import { Profile } from 'container/resume/ResumItem'
import CsLineIcons from 'lib/cs-line-icons/CsLineIcons';
import { useTheme } from 'next-themes';
import { useRouter } from 'next/router';


const About = () => {
  const { theme, setTheme } = useTheme();
  const router = useRouter()
  
  return (
    <>
      <Helmet title='sunhoh | about' description='이력서' url=''/> 
      <LayoutGridpage>
        <div className='px-3 md:px-6'>
          <div>
            <div 
              className='text-xs text-gray-500 cursor-pointer w-fit' 
              onClick={()=>router.push('/')}
            >
              home
            </div>
            <div className='flex justify-between mb-8 font-semibold mono'>
              <p className='text-lg'>이선호 — Frontend Engineer</p> 
              <div
                className="p-1 ml-2 rounded-lg cursor-pointer hover:bg-neutral-100 dark:bg-neutral-800 "
                onClick={() => (theme === 'dark' ? setTheme('light') : setTheme('dark'))}
                >
                <CsLineIcons icon={theme === 'dark' ? 'moon' : 'sun'} stroke="1" fill="#facc13" />
              </div> 
            </div> 
            <Profile />
          </div>
          <section>
            <div className='mt-12 '>
              <h2 className='text-lg mono'>Summary.</h2>
              <hr className='my-4 h-[1px] w-full border-gray-300'/> 

              <div className='sans'>
                <div className='mt-2 font-mono text-sm tracking-tight'>
                AI 음원을 다루는 스타트업에서 다양한 프로젝트를 수행해온 프론트엔드 개발자입니다.<br/>
                1년 6개월이라는 경력 동안 웹/앱의 서비스와 백오피스 개발 경험을 했습니다.<br/>
                성장이 고픈 주니어 개발자이기에 새로운 것을 익히고 학습하여 도전하는 것을 좋아합니다. <br/>
                이해관계에 있는 다양한 직군의 구성원들과도 적극적으로 소통하며 협업해왔습니다.
                </div>
              </div>

              <div className='mt-6'>
                <Link 
                  href={`https://www.notion.so/Frontend-Engineer-0083eb17bac54e69ae1b694455b1e49a`} 
                  target="_blank" 
                  className="mt-6 font-mono font-semibold underline transition-all decoration-gray-400 hover:decoration-gray-800">
                  Detailed Resume (Notion)
                </Link>
              </div>
            </div>
          </section>          
        </div>
      </LayoutGridpage>
    </>
  )
}

export default About


