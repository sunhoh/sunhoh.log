import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import * as remarkHtml from 'remark-html';
import { differenceInDays } from 'date-fns';
import { TableOfContents } from 'types/post';

const postRoute = path.join(process.cwd(), 'posts');

export const getAllPosts = () => {
  const fileNames = fs.readdirSync(postRoute);

  const allPostsData = fileNames.map(fileName => {
    const id = fileName.replace(/\.md$/, '');

    const fullPath = path.join(postRoute, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    return {
      id,
      ...matterResult.data,
    };
  });

  const sortedPostList = allPostsData.sort((a: any, b: any) =>
    differenceInDays(new Date(b.date), new Date(a.date)),
  );

  return sortedPostList;
};

export const getAllPostPaths = () => {
  const fileNames = fs.readdirSync(postRoute);
  return fileNames.map(post => {
    return { params: { id: post.replace(/\.md$/, '') } };
  });
};

export const getEnUsDate = (date: Date) => {
  const year = date.getFullYear();
  const month = date.toLocaleString('en-US', { month: 'long' });
  const day = date.getDate();

  return `${month} ${day}. ${year}`;
};

export const getPostData = async (postId: string) => {
  const fullPath = path.join(postRoute, `${postId}.md`);
  const contents = fs.readFileSync(fullPath, 'utf8');
  const result = matter(contents);

  const processedContent = await remark()
    .use(remarkHtml as any)
    .process(result.content);

  const contentHtml = processedContent.toString();
  const source: string[] = contentHtml.split('\n').filter(line => line.match(/^(#{1,3})\s/));
  const tableOfContents = parseToc(source);

  return {
    postId,
    contentHtml,
    tableOfContents,
    ...result.data,
  };
};

export const parseToc = (data: string[]) => {
  return data.reduce<TableOfContents>((acc, item) => {
    const slug = item.replace(/^##*\s/, '');
    const isSubTitle = item.split('#').length - 1 === 3;

    if (!isSubTitle) {
      acc.push({ slug, subs: [] });
    } else if (acc.length > 0) {
      acc[acc.length - 1].subs.push({ slug });
    }

    return acc;
  }, []);
};
