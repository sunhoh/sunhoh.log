import Image from 'next/image';
import Helmet from 'components/html-head/Helmet';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';

import fs from 'fs';
import path from 'path';

export default function Post(props: any) {
  console.log(props);
  const router = useRouter();

  return (
    <>
      <Helmet title="post" description="post" image="" url="" />
      <div>
        <Test>{props.id}</Test>
      </div>
    </>
  );
}

const Test = styled.div`
  padding: 12px;
  cursor: pointer;
  border: 1px solid red;
`;

// console.log(`__dirname     ->`, __dirname); // 선택한 폴더 절대 경로까지
// console.log(`__filename    ->`, __filename); // 선택한 파일 절대 경로까지
// console.log(`process.cwd() ->`, process.cwd()); // node를 실행 경로

const postRoute = path.join(process.cwd(), 'posts');

export async function getStaticPaths() {
  const fileNames = fs.readdirSync(postRoute);
  // >>>fileNames [ 'holle-word.md', 'second-post.md' ]

  const paths = fileNames.map(fileName => {
    // @@@fileName holle-word.md
    // @@@fileName second-post.md

    return {
      params: {
        id: fileName.replace(/\.md$/, ''),
      },
    };
  });
  // paths [
  //   { params: { postId: 'holle-word' } },
  //   { params: { postId: 'second-post' } }
  // ]

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { id: any } }) {
  console.log('postId', params);

  const fullPath = path.join(postRoute, `${params.id}`);
  console.log('fullPath', fullPath);

  if (params && typeof params.id === 'undefined') {
    params.id = null;
  }

  return {
    props: {
      id: params.id,
    },
  };
}
