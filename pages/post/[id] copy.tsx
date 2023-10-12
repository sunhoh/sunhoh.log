import Helmet from 'components/html-head/Helmet';
import Image from 'next/image';
import remarkGfm from 'remark-gfm';
import ReactMarkdown from 'react-markdown';
import syntaxHighlighter from 'components/syntaxHighlighter/syntaxHighlighter';
import { getAllPostPaths, getPostData, getEnUsDate } from 'utils/post';
import { PostMeta } from 'types/post';
import LayoutFullpage from 'layout/LayoutFullpage';
import Sidebar from 'components/sidebar/Sidebar';
import CsLineIcons from 'lib/cs-line-icons/CsLineIcons';

export default function Post({ data }: { data: PostMeta }) {
  const { contentHtml, date, description, postId, thumbnail, title, tableOfContents } = data;

  return (
    <>
      <Helmet title="post" description="post" image="" url="" />
      {/* opacity: 1; will-change: opacity; */}
        <div className='relative gap-8 lg:flex'>
          {/*  20 */}
          <div className='ml-auto w-1/5'>
            <Sidebar toc={tableOfContents} />
          </div>
          {/*  80 */}
          <article className='w-full lg:w-4/5'>
            <div className=" bg-gray-100">
              <h1 className="pb-2 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
                {title}
              </h1>
              <div className="flex ">
                <CsLineIcons icon="calendar" fill="#000" stroke="0" className="h-5" />
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
            <div className="py-8" />
          </article>
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
