import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import * as remarkHtml from 'remark-html';
import { differenceInDays } from 'date-fns';

const postRoute = path.join(process.cwd(), 'posts');

export const getAllPosts = () => {
  const fileNames = fs.readdirSync(postRoute);

  const allPostsData = fileNames.map(fileName => {
    const id = fileName.replace(/\.md$/, '');

    const fullPath = path.join(postRoute, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    console.log('matterResult>?>???????', matterResult);

    return {
      id,
      ...matterResult.data,
    };
  });

  const sortedPostList = allPostsData.sort((a: any, b: any) =>
    differenceInDays(new Date(b.date), new Date(a.date)),
  );

  // console.log('sortedPostList >>>> ', sortedPostList);

  return sortedPostList;
};

export const getAllPostPaths = () => {
  const fileNames = fs.readdirSync(postRoute);
  return fileNames.map(post => {
    return { params: { id: post.replace(/\.md$/, '') } };
  });
};

export const getPostData = async (postId: string) => {
  const fullPath = path.join(postRoute, `${postId}.md`);
  const contents = fs.readFileSync(fullPath, 'utf8');
  const result = matter(contents);

  const processedContent = await remark()
    .use(remarkHtml as any)
    .process(result.content);

  const contentHtml = processedContent.toString();

  return {
    postId,
    contentHtml,
    ...result.data,
  };
};
