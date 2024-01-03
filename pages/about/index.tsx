import React from 'react'
import Link from 'next/link';
import LayoutGridpage from 'layout/LayoutGridpage'
import Helmet from 'components/html-head/Helmet'
import { Profile } from 'container/resume/ResumeItem'
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
                사용자와 부드러운 상호작용과 가치를 추구하는 프론트엔드 개발자입니다.<br/>
                인터페이스를 만들어가는 즐거움으로 개발하고 있습니다.<br/>
                성장이 고픈 주니어 개발자이기에 새로운 것을 익히고 학습하여 도전하는 것을 좋아합니다. <br/>
                스타트업에서 짧은 기간 안에 시스템을 구축해가며 소통, 공유하며 함께 성장해 나아간 경험이 있습니다. <br/>
                이를 통해 좋은 가치를 추구하는 마인드 셋으로 다양한 직군의 구성원들과도 적극적으로 소통하며 유기적으로 연결된 구성 하나하나와 그것들로 이루어진 전체를 바라보려 노력하고 있습니다.
                </div>
              </div>

              <div className='mt-6'>
                <Link 
                  href={`/resume`}  
                  className="font-mono font-semibold underline transition-all decoration-gray-400 hover:decoration-gray-800">
                  Detailed Resume
                </Link>
                <Link 
                  href={`https://www.notion.so/a31856a7393c4eac9b9f6da682146266`} 
                  target="_blank" 
                  className="ml-4 font-mono font-semibold underline transition-all decoration-gray-400 hover:decoration-gray-800">
                  Portfolio (Notion)
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


