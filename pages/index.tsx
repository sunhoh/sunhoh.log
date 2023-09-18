import React from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';
import { getAllPosts } from 'utils/post';
import { Post } from 'types/post';

interface PostProps {
  posts: Post[];
}

const index = ({ posts }: PostProps) => {
  // console.log(posts);
  return (
    <section className="m-auto px-8 w-full mt-10 max-w-screen-xl">
      <SubTitle className="my-5 text-xl font-semibold border-b border-solid border-gray-200">
        Recent Posts
      </SubTitle>
      {posts.map((props: any, index: number) => (
        <div key={index}>
          <Link href={`/post/${props.id}`}>{props.id}</Link>
        </div>
      ))}
    </section>
  );
};

export default index;

const SubTitle = styled.h2`
  background: linear-gradient(90deg, rgb(165, 67, 211) 0%, rgb(87, 174, 196) 100%);
  display: inline-block; //inline-block
  background-clip: text; // bg-clip-text
  -webkit-text-fill-color: transparent;
`;

export async function getStaticProps() {
  const allPostsData = getAllPosts();

  return {
    props: {
      posts: allPostsData,
    },
  };
}
