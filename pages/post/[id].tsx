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

export default function Post({ data }: { data: PostMeta }) {
  const { contentHtml, date, title, description, thumbnail, tableOfContents } = data;
  const { theme } = useTheme()

  return (
    <>
      <Helmet title={title} description={description} image={thumbnail} url="" /> 
      <div className='mt-10 gap-8 lg:flex'>
        <Sidebar toc={tableOfContents} />
        <div>
          <article className='w-full'>
            <div>
            
              <h1 className="pb-2 font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 text-4xl sm:text-4xl sm:leading-10 lg:text-5xl lg:leading-14">
                {title}
              </h1>
              <div className="flex">
                <CsLineIcons icon="calendar" fill={theme==='dark' ? "#e5e7eb" : "#000"} stroke="0" className="h-5" />
                <span className="text-sm leading-6 text-gray-500 dark:text-gray-400 ml-1">
                  {getEnUsDate(new Date(date))}
                </span>
              </div>
            </div>
            <LayoutFullpage
              left={
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  children={contentHtml}
                  components={syntaxHighlighter as any}
                />}
            />
          </article>
          <hr className='mb-10 mt-20 h-[1px] w-full border-gray-300'/>  
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
