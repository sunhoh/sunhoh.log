import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { CONNECT_HREF } from 'lib/config'

export const Profile = () => {
  return (
    <div className='flex items-center gap-6 text-sm mono'>
      <Image
        src="/images/resume/profile.png"
        alt="sample"
        width={250}
        height={250}
      />
      <ul className='list-disc list-inside cursor-pointer'>
        {CONNECT_HREF.map(({key, href})=> (
          <li 
            key={key}
            className='mt-2 font-mono text-sm rounded hover:bg-slate-200'>
            <Link 
              href={href}
              target="_blank" 
              rel="noreferrer"
            >
              {key}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export const Introduce = () => {
  return (
    <div className='sans'>
      <p className='text-gray-500'>"함께 성장하며 이룬 협업의 가치”</p>
      <div className='mt-2 '>
        저는 함께 성정하는 것에 큰 동기를 얻습니다.
        스타트업에서 웹과 앱 서비스를 기획/개발/배포하며 짧은 기간 안에 팀원들과 함께 시스템을 구축해가며 사수가 없는 환경에서 소통, 공유하며 함께 성장해 나아간 경험이 있습니다. 이를 통해 좋은 가치를 추구하는 마인드 셋으로 다양한 직군의 구성원들과도 적극적으로 소통하며 협업해왔습니다.
      </div>

      <p className='mt-8 text-gray-500'>"다양한 도전을 마주하며 얻은 경험”</p>
      <div className='mt-2'>
      작은 규모의 팀에서 다양한 문제에 직면한 경험이 있습니다. 
      홈페이지 리뉴얼, 직원 채용 공고, 음원 관리 백오피스 개발등 시스템 전체를 구축하면서 다양한 시행착오를 경험하면서, 정형화된 체계가 미비한 환경에서 작은 것부터 큰것까지 유기적으로 연결된 구성 하나하나와 그것들로 이루어진 전체를 바라보려 노력합니다. 
      또한 당장 어려운 문제라도 그에 대한 해결 방안과 적극적인 커뮤니케이션으로 함께 풀어 나아가는것에 큰 동기를 갖습니다.
      </div>
    </div>
  )
}

export const Skills = () => {
  return (
    <div className='flex flex-col w-full'>
      <ul className='list-disc list-inside'>
        <li>HTML/CSS, TypeScript, React.js, Next.js, React Native</li>  
        <li>tailwindcss, sass, styled-components, emotion</li>
      </ul>
      <Link 
        href='https://lh3.googleusercontent.com/fife/AK0iWDzTTfqKaD9OPkWiB7-9G9dBKOukpJx0EErewhCY_0N5QoJdWmIA9EWIBnzwNEafwvrcfi7Lm1JLwSZS4XmwxvFOX5KARL_wDThwMszZhhjlugasrFNG8uke5hLbx15E0djxDYTVCrmJjzMRo67WTVl7T2wbJityCcJ-QsdVB5zrQgc5aUygjrYOSGLyMqBIzzS19haOf7yn67QgiOIMQs_q0SECKgg7BjLfLWIFdLMHFLy0mP-UEcNQRbf7R5D14xmS-Y-SVzaOprij2KLpGdJ_5dxR5WhIqLemt-FsVR3-khdtqzZxIjp11I8sgSE6EY1zUeznoHfhoZcQsSUqUrPuzo4B2hESgM5xnH6dZ1Xk3ExChkHsMSc_9KUN2690t4CoBRK1QSpPyazf_-srkuMj_KyBqK6JPq9aFFzZVfTcOAhzqvTAqEkUE9W7rv7duQJldD7hiNnd5JtPV-gw1PBdcLyKQMOQo67hxbIdWZ0_Nv1J4_-EUj3WnE9i9_u8oOB_Q1yvECbRRwTg-2Ym3jjwqUh0bjr51m054k0j33BHHWNWC4GPj0cu4hT1LyZi4-GLP7pwhjgQijuWmhdcj_-NgVm7X7OHr4Q9FB7GpfVefZ9dI2_wBG397chnYP8eGCmWIQCzzUXxU53-KjTUixm8JeT56E_I8WKl-KOafq7AtXzo8cjta6e9P139MIL_qStbqZAP1_BgpNDqUvqoBlTWk-8q9U2QikGfq_6EAoAkSdRVa7w5ChCoOvo4mDYSDaF42MqFeL-Z3QgI9rTgpCo9a20wLSmtY_WyMpILI2Y-3lS4TPqMwl_9USIWSjHyhf2W2ovF1jS_EiANdlV7GIH0ZWsGrA3vQS7_Wli2l2kMWKuT0AdBTUFEG20iueBU6aKgx9F1OZ_KNDaeTTB0UfCvFJRPb7dMfvRIv9BKlGvDUdHfzNpvykIKDbmdXiz87Yron40WkZKKajLE5tpX6JieL2mxw1NsHJpLU_BhAOcTzekWvdoGnNUEi1reJguNgkuTkywusCR2Ki4a5pjngU0-ILTKPBYxUloBalGxlhCvBKmcGvAWEN-lqlQV99RbsfKozbn7c1o5oHIl22mXA_dvdYO6WBJ2oUcThkd-gydT339nWHWgtTTBwA9uizx1coM-AUf6sIZAaJrPtuTmMK_nZkqtjprfB1N9SvYAN2mx-czBllruuar5TxYIpPHrR2inm4nRH2OmVqabNy3R4ctSXU-35ec8DTQg_npnndcTFGqOpqLBBKBPf93k5a-XmWLgl1gFsm1LUYfGoCbJndMOVF5P3KXCvMIJBFje8VADUngPtHK9fSq0CHJOThLWc-kZHvY-fbjLKAUbidYxrGX9iqVRYtPMBPS2b0LSX_NxruGwEdsNQAHoEbn6gsms-nVSZdvfrayk-P2jjJmlHPV1xRAWebyJ3tC3EKcAh0oAoIm4eiSLEmcKXaERnA1sIcbYI9x9lTFTEIm9Kz090wcYVXKqqfx_UqO4clFrp5GmDtuk5sVhbxJyxJuygzf19DvgXBUKL79nUB8PQyc=w1179-h673'
        target="_blank" 
        rel="noreferrer"
        className='my-8 border'
      >
        <Image
          src="/images/resume/roadmap.png"
          alt="sample"
          width={650}
          height={400}
        />
      </Link>      
    </div>
  )
}

export const WorkExperience = () => {
  return (
    <div>
      <div className='sans'>
        <span className='text-lg font-semibold underline'>Upvote.Ent,</span> 
        <span> Frontend Engineer.</span>
      </div>
      <p className='text-sm'>Ai 인공지능 BGM 음원을 활용한 서비스 스타트업.</p>

      <div className='flex mt-2 sans'>
        <div className='py-2 text-gray-500 w-80'>2022.03 - 2023.09 <br></br> (1년 6개월) </div>
        <ul className='ml-10 list-disc list-outside'>
          <li className='py-2 '>
            <Link 
              href='https://www.upvote-ent.com/'
              target="_blank" 
              rel="noreferrer"
              className='text-gray-500 link'
              >
                업보트 홈페이지  
            </Link>
            <span>- 기존 WIX로 제작되어있던 사내 legacy 프로젝트를 React / AWS s3, cloud front로 리뉴얼/배포하여 코드 품질을 개선</span>
          </li>

          <li className='py-2'>
            <Link 
              href='https://www.figma.com/file/y7d3GZSRmmgdLD60q4nAKr/Music-Libary%EA%B8%B0%ED%9A%8D?type=design&node-id=0-1&mode=design&t=HELdtXkHJtlsYfwe-0'
              target="_blank" 
              rel="noreferrer"
              className='text-gray-500 link'
              >
                음원 라이브러리 기획/개발
            </Link>
            <span>- 음원 관리 업무를 효율화하는 통합 DB 매일 한시간 이상씩 수동으로하던 단순/루틴 업무를 대체</span>
          </li>

          <li className='py-2'>
            <Link 
              href='https://aismpro.com/'
              target="_blank" 
              rel="noreferrer"
              className='text-gray-500 link'
              >
                AISM Pro
            </Link>
            <span>- Ai bgm 음원 생성 서비스를 생성및 유튜브에 업로드 하는 프로젝트로 일부 변동 페이지 기획/개발 참여 
            기존 소스 코드를 새로운 코드 베이스로 구축(자주 반복되는 컴포넌트 요소들을 재사용 가능하도록 설계하고 코드 최적화 진행 )</span>

            <div className='mt-8'>
              <p>그외…</p>
                음원 스트리밍, 음원 편곡기능, 유트브 릴리즈 기능 개발
                레거지 개선 ( npm → yarn berry, eslint, prettier 등 린트 시스템 구축 )
            </div>
          </li>

          <li className='py-2'>
            <div className='flex'>
              <h2>조은하루 -  </h2>
              {[{ key:'Play Store', href:'https://play.google.com/store/apps/details?id=com.audiocard&pcampaignid=fdl_long&url=https://joeunharu.page.link/?link%3Dhttps://%25EC%25A1%25B0%25EC%259D%2580%25ED%2595%2598%25EB%25A3%25A8.com/%26apn%3Dcom.audiocard%26amv%3D1%26ibi%3Dcom.upvote-ent.AudioCard%26isi%3D6443407964&pli=1'},
                {key:'App Store', href:'https://apps.apple.com/app/id6443407964'} ].map((e,idx)=>{
                return (
                  <Link 
                  key={idx}
                    href='https://aismpro.com/'
                    target="_blank" 
                    rel="noreferrer"
                    className='inline-block text-gray-500 link'
                  >
                    {e.key} 
                  </Link>
                )
              })}
              
            </div>
            <span>- 정부 지원 사업 투자 유치 성공한 프로젝트로 기획부터 출시까지 올타임 개발 참여 React-Native를 사용하여 음원 라이브러리에 저장되어 있는 음원을 조은하루 서비스에 백업하여 편지 쓰기 기능에 음원을 입혀 공유하기 서비스</span>

            <div className='mt-8'>
              <p>그외…</p>
                음원 스트리밍 기능 개발, 터치 이벤트를 이용한 인터렉션한 기능 개발, firebase를 이용한 푸시알림, 다이나믹 링크, 카톡 공유하기, code push... <br></br>
                <span className=''>조은하루 백오피스 개발 </span>( recoil, react-query 도입으로 클라이언트 상태값과 서버 데이터를 관리 및chart.js로 데이터 시각화 )
            </div>
          </li>
        </ul>
      </div>

    </div>
  )
}

export const SideProject = () => {
  return (
    <div> 
      <div className='flex sans'>
        <div className='py-2 w-28 '>sunhoh.log</div>
        <ul className='ml-10 list-disc list-outside'>
          <li>개인 공부를 위해 제작한 기술 블로그 사이트입니다.</li>
          <li className=''>Next.js, typescript, tailwind, github-actions, vercel, SEO</li>
          <li>
          <Link 
            href='https://sunhoh-log.vercel.app/'
            target="_blank" 
            rel="noreferrer"
            className='text-gray-500 link'
            >
              Website
          </Link>
          <span className=''>,</span>
          <Link 
            href='https://github.com/sunhoh/next-blog'
            target="_blank" 
            rel="noreferrer"
            className='ml-2 text-gray-500 link'
            >
              Github
          </Link>
          </li>
        </ul>
      </div>

      <div className='flex mt-6 sans'>
        <div className='py-2 w-28 '>mouse play</div>
        <ul className='ml-10 list-disc list-outside'>
          <li>mouse event 관련 동작을 실험해보는 사이트입니다.</li>
          <li className=''>Next.js, typescript, tailwind, vercel</li>
          <li>
          <Link 
            href='https://mouse-event-lyart.vercel.app/'
            target="_blank" 
            rel="noreferrer"
            className='text-gray-500 link'
            >
              Website
          </Link>
          <span className=''>,</span>
          <Link 
            href='https://github.com/sunhoh/mouse-event'
            target="_blank" 
            rel="noreferrer"
            className='ml-2 text-gray-500 link'
            >
              Github
          </Link>
          </li>
        </ul>
      </div>

      <div className='flex mt-6 sans'>
        <div className='py-2 w-28'>BBtalk</div>
        <ul className='ml-10 list-disc list-outside'>
          <li>내 주변 운동센터를 쉽게 찾을 수 있는 앱</li>
          <li className=''>react-native, javascript, stylesheet</li>
          <li>
          <Link 
            href='https://www.notion.so/BBatalk-93e6450770f041bf94f14138824af5c3'
            target="_blank" 
            rel="noreferrer"
            className='text-gray-500 link'
            >
              Notion
          </Link>
          <span className=''>,</span>
            <Link 
              href='https://github.com/sunhoh/bbatalk-rn'
              target="_blank" 
              rel="noreferrer"
              className='ml-2 text-gray-500 link'
              >
              Github
            </Link>
          </li>
        </ul>
      </div>

      <div className='flex mt-6 sans'>
        <div className='py-2 w-28 '>SUNKREAM</div>
        <ul className='ml-10 list-disc list-outside'>
          <li>
            의류 경매 서비스를 제공하는 커머스 클론 프로젝트입니다.
            <br></br>
            7명 (프론트 4, 벡엔드 3)
          </li>
          <li className=''>React.js, javascript, styled-components</li>
          <li>
          <Link 
            href='https://www.youtube.com/watch?app=desktop&v=N63MUdDmDFI'
            target="_blank" 
            rel="noreferrer"
            className='text-gray-500 link'
            >
              Youtube
          </Link>
          <span className=''>,</span>
          <Link 
            href='https://github.com/sunhoh/25-2nd-SUNKREAM-frontend'
            target="_blank" 
            rel="noreferrer"
            className='ml-2 text-gray-500 link'
            >
              Github
          </Link>
          </li>
        </ul>
      </div>
      
      <div className='flex mt-6 sans'>
        <div className='py-2 w-28 '>NullFiction</div>
        <ul className='ml-10 list-disc list-outside'>
          <li>
            바디케어 커머스 클론 프로젝트입니다.
            <br></br>
            5명 (프론트 3, 벡엔드 2)
          </li>
          <li className=''>React.js, javascript, scss</li>
          <li>
          <Link 
            href='https://www.youtube.com/watch?v=_7pd-iLDS9Y&list=PLZTmS1zO_K1Zj4ZRa-eu3Ugt-DfGC7eXC&index=5'
            target="_blank" 
            rel="noreferrer"
            className='text-gray-500 link'
            >
              Youtube
          </Link>
          <span className=''>,</span>
          <Link 
            href='https://github.com/sunhoh/25-1st-NULLFICTION-frontend'
            target="_blank" 
            rel="noreferrer"
            className='ml-2 text-gray-500 link'
            >
              Github
          </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export const Activities = () => {
  return (
    <div> 
      <div className='flex items-center mt-6 sans'>
        <div className='w-32 py-2'>
            <span>면접 준비 스터디</span>
            <p className='text-sm text-gray-500'>2021.11 ~ 2021.12</p>
          </div>
          <ul className='ml-10 list-disc list-outside'>
            <li>프론트엔드 과정 수료</li>
          </ul>
      </div>
      
      <div className='flex items-center mt-6 sans'>
        <div className='w-32 py-2'>
          <span>하이데브</span>
          <p className='text-sm text-gray-500'>2021.11</p>
        </div>
        <ul className='ml-10 list-disc list-outside'>
          <li>인턴쉽 - 프론트엔드 </li>
        </ul>
      </div>

      <div className='flex items-center mt-6 sans'>
      <div className='w-32 py-2'>
          <span>wecode</span>
          <p className='text-sm text-gray-500'>2021.08 ~ 2021.10</p>
        </div>
        <ul className='ml-10 list-disc list-outside'>
          <li>프론트엔드 과정 수료</li>
        </ul>
      </div>
    </div>
  )
}

export const Education = () => {
  return (
    <div>
      <h3>한서대학교</h3>
      <p className='mt-2'>2014.03 ~ 2016.02 화학공학과 중퇴</p>
    </div>
  )
}
