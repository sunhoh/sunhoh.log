import Helmet from 'components/html-head/Helmet';
import remarkGfm from 'remark-gfm';
import ReactMarkdown from 'react-markdown';
import syntaxHighlighter from 'components/syntaxHighlighter/syntaxHighlighter';
import { getAllPostPaths, getPostData, getEnUsDate } from 'utils/post';
import { PostMeta } from 'types/post';
import PostNavigation from 'components/post-navigation/PostNavigation'
import LayoutGridpage from 'layout/LayoutGridpage'

export default function Post({ data }: { data: PostMeta }) {
  const { contentHtml, date, title, description, thumbnail, tableOfContents, postNavigationProps } = data;

  return (
    <>
      <Helmet title={title} description={description} image={thumbnail} url="" /> 
      <LayoutGridpage toc={tableOfContents}>
        <article>
          <div className='w-full'>
            <h1 className="pb-2 text-3xl font-extrabold leading-10 tracking-tight text-gray-900 dark:text-gray-100 sm:text-xl sm:leading-8 lg:leading-14">
              {title}
            </h1>
            <div className="flex">
              <span className="text-sm leading-6 text-gray-500 dark:text-gray-400">
                {getEnUsDate(new Date(date))}
              </span>
            </div>
          </div>
          <div>
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              children={contentHtml}
              components={syntaxHighlighter as any}
            />
          </div>
          <hr className='mb-10 mt-24 h-[1px] w-full border-gray-300'/>  
          {/*  post navigation  */}
          <PostNavigation {...postNavigationProps}/>
          {/* <div className='mb-2 border w-[100px] h-[100px] ' >
              dadsd
          </div> */}
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
