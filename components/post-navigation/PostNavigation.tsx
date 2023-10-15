import Link from 'next/link'
import { PostNavigationProps } from 'types/post'

const PostNavigation = ({ prevPost, nextPost }:PostNavigationProps) => {
    

    return (
        <div className='flex items-center justify-between gap-10 text-sm'>
          {prevPost ? (
            <Link href={`/post/${prevPost.postId}`} className='flex flex-col tracking-tight hover:brightness-125 '>
                <div className='mb-2 text-gray-400 font-light'>Prev</div>
                <span>{prevPost.title}</span>
            </Link>
          ): <div />}
          {nextPost ? (
            <Link href={`/post/${nextPost.postId}`} className='ml-auto flex flex-col text-right tracking-tight hover:brightness-125'>
                <div className='mb-2 text-gray-400 font-light'>Next</div> 
                <span>{nextPost.title}</span>
            </Link>
          ):<div className='border border-solid' />}
        </div>
    )
}


export default PostNavigation