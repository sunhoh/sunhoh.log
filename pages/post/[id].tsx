import Helmet from 'components/html-head/Helmet';
import remarkGfm from 'remark-gfm';
import ReactMarkdown from 'react-markdown';
import syntaxHighlighter from 'components/syntaxHighlighter/syntaxHighlighter';
import { getAllPostPaths, getPostData, getEnUsDate } from 'utils/post';
import { PostMeta } from 'types/post';
import LayoutFullpage from 'layout/LayoutFullpage';
import Sidebar from 'components/sidebar/Sidebar';
import CsLineIcons from 'lib/cs-line-icons/CsLineIcons';
import { useTheme  } from 'next-themes';
import PostNavigation from 'components/post-navigation/PostNavigation'

export default function Post({ data }: { data: PostMeta }) {
  const { contentHtml, date, title, description, thumbnail, tableOfContents, postNavigationProps } = data;
  const { theme } = useTheme()

  return (
    <>
      <Helmet title={title} description={description} image={thumbnail} url="" /> 
      <div className='flex gap-6'>
        <Sidebar toc={tableOfContents} />
        <div >
          <article className='w-full'>
            <div>
              <h1 className="pb-2 text-2xl font-extrabold leading-10 tracking-tight text-gray-900 dark:text-gray-100 sm:text-xl sm:leading-8 lg:leading-14">
                {title}
              </h1>
              <div className="flex">
                <CsLineIcons icon="calendar" fill={theme==='dark' ? "#e5e7eb" : "#000"} stroke="0" className="h-5" />
                <span className="ml-1 text-sm leading-6 text-gray-500 dark:text-gray-400">
                  {getEnUsDate(new Date(date))}
                </span>
              </div>
            </div>
            <LayoutFullpage
              constents={
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  children={contentHtml}
                  components={syntaxHighlighter as any}
                />}
            />
          </article>
          <hr className='mb-10 mt-20 h-[1px] w-full border-gray-300'/>  

        {/*  post navigation  */}
          <PostNavigation {...postNavigationProps}/>
        </div>
      </div>
      
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
