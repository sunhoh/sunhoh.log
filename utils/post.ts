import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import * as remarkHtml from 'remark-html';
import { differenceInDays } from 'date-fns';
import { Post, TableOfContents } from 'types/post';

const postRoute = path.join(process.cwd(), 'posts');

export const getAllPosts = () => {
  const fileNames = fs.readdirSync(postRoute);

  const allPostsData = fileNames.map(fileName => {
    const postId = fileName.replace(/\.md$/, '');

    const fullPath = path.join(postRoute, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    return {
      postId,
      ...matterResult.data,
    };
  });

  const sortedPostList = allPostsData.sort((a:any, b:any) => 
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

  const postIndex = getAllPosts().findIndex(v => v.postId === postId)
  const postNavigationProps =  {
    prevPost: getAllPosts()[postIndex + 1] ?? null,
    nextPost: getAllPosts()[postIndex - 1] ?? null
  }

  return {
    postId,
    contentHtml,
    tableOfContents,
    postNavigationProps,
    ...result.data,
  };
};

export const parseToc = (data: string[]) => {
  return data.reduce<TableOfContents>((acc, item) => {
    const rawText = item.replace(/^##*\s/, '');
    const isSubTitle = item.split('#').length - 1 === 4;

    const section = {
      slug: rawText
        .trim()
        .toLowerCase()
        .replace(/\s/g, '-'),
      text: rawText
        .trim()
        .toLowerCase()
    };

    if (!isSubTitle) {
      acc.push({ ...section, subs: [] });
    } 
    else if (acc.length > 0) {
      acc[acc.length - 1]?.subs.push({ ...section });
    }

    return acc;
  }, []);
};


export const getEnUsDate = (date: Date) => {
  const year = date.getFullYear();
  const month = date.toLocaleString('en-US', { month: 'long' });
  const day = date.getDate();

  return `${month} ${day}. ${year}`;
};

export const getEnUsShortDate = (date: Date) => {
  const month = date.toLocaleString('en-US', { month: 'short' });
  const day = date.getDate();

  return `${month} ${day}﹒`;
};

export const yearEntriesCb = (acc:{ [year: string]: Post[] }, v:Post) => {
  const year = new Date(v.date).getFullYear();
  if(!acc[year]){
    acc[year] = []  
  }
  acc[year].push(v);
  return acc;
}