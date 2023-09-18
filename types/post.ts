export interface Post {
  id: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  thumbnail: string;
}

export interface PostMeta extends Post {
  postId: string;
  contentHtml: string;
  tocHtml: string;
}
