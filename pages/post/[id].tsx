import Helmet from 'components/html-head/Helmet';
import styled from '@emotion/styled';
import Image from 'next/image';
import remarkGfm from 'remark-gfm';
import ReactMarkdown from 'react-markdown';
import syntaxHighlighter from 'components/syntaxHighlighter/syntaxHighlighter';
import { getAllPostPaths, getPostData } from 'utils/post';
import { PostMeta } from 'types/post';
import LayoutFullpage from 'layout/LayoutFullpage';
import Sidebar from 'components/sidebar/Sidebar';

export default function Post({ data }: { data: PostMeta }) {
  const { contentHtml, date, description, postId, tags, thumbnail, title } = data;
  console.log('thumbnail', postId, thumbnail);

  const side = [{ id: '', value: '' }];

  return (
    <article>
      <Helmet title="post" description="post" image="" url="" />
      <div className="lg:p-40 md:px-20 md:py-32 sm:px-8 sm:py-24 transition-all">
        <h1 className="break-keep pb-5 text-3xl font-semibold sm:text-5xl">{title}</h1>
        <span className="break-keep text-xl text-gray-800 dark:text-gray-300">{description}</span>
        <span className="text-md flex items-center gap-2 break-keep pt-5 font-normal text-gray-600 dark:text-gray-400">
          <p>{date}</p>
        </span>
        <div className="flex justify-center py-10">
          <Image
            className="max-h-[400px] object-cover"
            src={`/images/${postId}/${thumbnail}`}
            alt={thumbnail}
            width={992}
            height={992}
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
          right={<></>}
        />
        <div className="py-8" />
      </div>
    </article>
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
