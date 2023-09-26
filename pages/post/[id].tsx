import Helmet from 'components/html-head/Helmet';
import Image from 'next/image';
import remarkGfm from 'remark-gfm';
import ReactMarkdown from 'react-markdown';
import syntaxHighlighter from 'components/syntaxHighlighter/syntaxHighlighter';
import { getAllPostPaths, getPostData, getKoreanDate } from 'utils/post';
import { PostMeta } from 'types/post';
import LayoutFullpage from 'layout/LayoutFullpage';
import Sidebar from 'components/sidebar/Sidebar';
import CsLineIcons from 'lib/cs-line-icons/CsLineIcons';

export default function Post({ data }: { data: PostMeta }) {
  const { contentHtml, date, description, postId, thumbnail, title } = data;

  return (
    <>
      <Helmet title="post" description="post" image="" url="" />
      <article>
        <div className="flex flex-col items-center">
          <h1 className="pt-[5%] pb-8 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
            {title}
          </h1>
          <span className="pb-1 text-lg">{description}</span>
          <div className="flex items-center">
            <CsLineIcons icon="calendar" fill="#000" stroke="0" className="h-5" />
            <span className="text-sm leading-6 text-gray-500 dark:text-gray-400 ml-1">
              {getKoreanDate(new Date(date))}
            </span>
          </div>
        </div>
        <div className="flex justify-center py-10 ">
          <Image
            width={992}
            height={992}
            alt={thumbnail}
            src={`/images/${postId}/${thumbnail}`}
            className="max-h-[400px] object-cover"
            priority
          />
        </div>
        <LayoutFullpage
          left={
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              children={contentHtml}
              components={syntaxHighlighter as any}
            />
          }
          right={<Sidebar />}
        />
        <div className="py-8" />
      </article>
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
