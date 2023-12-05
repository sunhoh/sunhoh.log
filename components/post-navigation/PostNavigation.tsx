import Link from 'next/link'
import { PostNavigationProps } from 'types/post'

const PostNavigation = ({ prevPost, nextPost }:PostNavigationProps) => {

    return (
        <div className='flex items-center justify-between text-sm'>
          {!prevPost && !nextPost && <div className='h-[68px]' />}
          {prevPost ? (
            <Link href={`/post/${prevPost.postId}`} className='flex flex-col max-w-[60%] tracking-tight hover:brightness-125 '>
                <div className='mb-2 font-light text-gray-400'>Prev</div>
                <span>{prevPost.title}</span>
            </Link>
          ): <div />}
          {nextPost ? (
            <Link href={`/post/${nextPost.postId}`} className='flex flex-col ml-auto max-w-[60%] tracking-tight text-right hover:brightness-125'>
                <div className='mb-2 font-light text-gray-400'>Next</div> 
                <span>{nextPost.title}</span>
            </Link>
          ):<div />}
        </div>
    )
}


export default PostNavigation