/**
 * 목차 타입
 */
export type SubSection = {
  slug: string;
};

export type Section = SubSection & {
  subs: SubSection[];
};

export type TableOfContents = Section[];

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
}
