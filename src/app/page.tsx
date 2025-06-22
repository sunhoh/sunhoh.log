
import Link from "next/link";
import { allPosts } from "@/../.contentlayer/generated";
import { formatMonthDay } from "@/shared/utils/formatDate"
import PostLayout from '@/widgets/layout/PostLayout'

export default function Post() {
  const posts = allPosts.sort(
    (a, b) => Number(new Date(b.date)) - Number(new Date(a.date))
  );
  
  return (
    <PostLayout>
      <div data-animate data-animate-speed="slow" className="container group">
        ㅇㅇㅁㅇㅁ
      </div>
    </PostLayout>
  );
}