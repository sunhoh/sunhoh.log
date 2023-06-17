import React from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';

import fs from 'fs';
import path from 'path';

const postRoute = path.join(process.cwd(), 'posts');

const index = ({ posts }: any) => {
  const id = 'holle-word';
  return (
    <Test>
      {posts.map((props: any, index: number) => (
        <Test key={index}>
          <Link href={`/post/${props.id}`}>{props.id}</Link>
        </Test>
      ))}
    </Test>
  );
};

export default index;

const Test = styled.div`
  padding: 12px;
  cursor: pointer;
  border: 1px solid red;
`;

export async function getStaticProps() {
  const fileNames = fs.readdirSync(postRoute);

  console.log('fileNames', fileNames);

  const allPostsData = fileNames.map(fileName => {
    const id = fileName.replace(/\.md$/, '');

    return {
      id,
    };
  });

  return {
    props: {
      posts: allPostsData,
    },
  };
}
