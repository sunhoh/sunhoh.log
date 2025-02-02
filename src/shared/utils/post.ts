import fs from 'fs';
import path from 'path';
import matter from 'gray-matter'

const postRoute = path.join(process.cwd(),'src/shared/posts');
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

  return allPostsData

  // const sortedPostList = allPostsData.sort((a:any, b:any) => 
    // differenceInDays(new Date(b.date), new Date(a.date)),
  // );

  // return sortedPostList;
};