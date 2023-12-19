/**
 * post 타입
 */
export interface Post {
  postId: string;
  title: string;
  category: string;
  description: string;
  date: string;
  tags: string[];
  thumbnail: string;
}

export interface PostMeta extends Post {
  contentHtml: string;
  tocHtml: string;
  tableOfContents: TableOfContents;
  postNavigationProps: PostNavigationProps;
  
}

/**
 * post 네비
 */
export type PostNavigationProps = {
  prevPost: Pick<Post, 'title' | 'postId'> | null;
  nextPost: Pick<Post, 'title' | 'postId'> | null;
}

/**
 * 목차 타입
 */
export type SubSection = {
  slug: string;
  text: string;
};

export type Section = SubSection & {
  subs: SubSection[];  
};

export type TableOfContents = Section[];
