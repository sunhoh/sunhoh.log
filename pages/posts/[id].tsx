import Helmet from 'components/html-head/Helmet';
import remarkGfm from 'remark-gfm';
import ReactMarkdown from 'react-markdown';
import syntaxHighlighter from 'components/syntaxHighlighter/syntaxHighlighter';
import { getAllPostPaths, getPostData, getEnUsDate } from 'utils/post';
import { PostMeta } from 'types/post';
import PostNavigation from 'components/post-navigation/PostNavigation'
import LayoutGridpage from 'layout/LayoutGridpage'
import { useRouter } from 'next/router';
import CsLineIcons from 'lib/cs-line-icons/CsLineIcons';

export default function Post({ data }: { data: PostMeta }) {
  const { contentHtml, date, title, description, thumbnail, tableOfContents, postNavigationProps } = data;
  const router = useRouter()

  return (
    <>
      <Helmet title={title} description={description} image={thumbnail} url="" /> 
      <LayoutGridpage toc={tableOfContents}>
        <article className='px-3 md:w-screen md:px-6'>

          <div 
            className="items-center hidden mb-4 cursor-pointer w-fit md:flex md:block "
            onClick={()=>router.back()}
          >
            <CsLineIcons icon='arrow-uturn-left' className="mr-2" size={15} />
            <span className='text-sm dark:text-gray-100' >뒤로 가기</span>
          </div>
          
      
          <div className='w-full'>
            <h1 className="pb-2 text-3xl font-extrabold leading-10 tracking-tight text-gray-900 dark:text-gray-100 sm:leading-8 lg:leading-14">
              {title}
            </h1>
            <div className="flex">
              <span className="text-sm leading-6 text-gray-500 dark:text-gray-400">
                {getEnUsDate(new Date(date))}
              </span>
            </div>
          </div>

          <div className='pt-8'>
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              children={contentHtml}
              components={syntaxHighlighter as any}
            />
          </div>
          <hr className='mb-10 mt-24 h-[1px] w-full border-gray-300'/>  
          {/*  post navigation  */}
          <PostNavigation {...postNavigationProps}/> 
        </article>
      </LayoutGridpage>
    </>
  );
}

export async function getStaticPaths() {
  const allPostsList = getAllPostPaths();

  return {
    paths: allPostsList,
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { id: string } }) {
  const data = await getPostData(params.id);

  return {
    props: { data },
  };
}
