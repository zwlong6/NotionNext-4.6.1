import Badge from '@/components/Badge'
import NotionIcon from '@/components/NotionIcon'
import { siteConfig } from '@/lib/config'
import Link from 'next/link'
import { useRouter } from 'next/router'
import CONFIG from '../config'

const BlogPostCard = ({ post, className }) => {
  const router = useRouter()
  const currentSelected =
    decodeURIComponent(router.asPath.split('?')[0]) === post?.href

  return (
    <Link href={post?.href} passHref>
      <div
        key={post.id}
        className={`${className} relative py-1.5 cursor-pointer px-1.5 hover:bg-gray-100 rounded-md dark:hover:bg-gray-100 dark:hover:text-black
                    ${currentSelected && 'bg-gray-100 text-black dark:bg-gray-100 dark:text-black'}`}>
        <div className='w-full select-none'>
          {siteConfig('POST_TITLE_ICON') && (
            <NotionIcon icon={post?.pageIcon} />
          )}{' '}
          {post.title}
        </div>
        {/* 最新文章加个红点 */}
        {post?.isLatest &&
          siteConfig('GITBOOK_LATEST_POST_RED_BADGE', false, CONFIG) && (
            <Badge />
          )}
      </div>
    </Link>
  )
}

export default BlogPostCard
