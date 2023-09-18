import Helmet from 'components/html-head/Helmet';
import styled from '@emotion/styled';

import remarkGfm from 'remark-gfm';
import ReactMarkdown from 'react-markdown';
import syntaxHighlighter from 'components/syntaxHighlighter/syntaxHighlighter';
import { getAllPostPaths, getPostData } from 'utils/post';
import { PostMeta } from 'types/post';

export default function Post({ postData }: { postData: PostMeta }) {
  const { contentHtml, date, description, postId, tags, thumbnail, title } = postData;

  return (
    <>
      <Helmet title="post" description="post" image="" url="" />
      <div>
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          children={contentHtml}
          components={syntaxHighlighter as any}
        />
      </div>
    </>
  );
}

const Test = styled.div`
  padding: 12px;
  cursor: pointer;
  border: 1px solid red;
`;

export async function getStaticPaths() {
  const allPostsList = getAllPostPaths();

  return {
    paths: allPostsList,
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { id: string } }) {
  const postData = await getPostData(params.id);

  return {
    props: { postData },
  };
}
