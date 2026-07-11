import PostCard1 from '@/components/blog/PostCard1'
import { getBlogPosts, getBlogPostsByHandle } from '@/data/data'
import Avatar from '@/shared/Avatar'
import { Badge } from '@/shared/Badge'
import { Divider } from '@/shared/divider'
import Tag from '@/shared/Tag'
import { Metadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  const posts = await getBlogPosts()
  return posts.map((post) => ({ handle: post.handle }))
}

export async function generateMetadata({ params }: { params: Promise<{ handle: string }> }): Promise<Metadata> {
  const { handle } = await params
  const post = await getBlogPostsByHandle(handle)
  if (!post) {
    return {
      title: 'Yazı bulunamadı',
      description: 'Aradığınız blog yazısı bulunamadı. Vinç kiralama rehberi ve haberler için blogumuzu ziyaret edin.',
    }
  }
  return { title: post.title, description: post.excerpt }
}

export default async function Page({ params }: { params: Promise<{ handle: string }> }) {
  const { handle } = await params
  const post = await getBlogPostsByHandle(handle)

  if (!post) {
    return notFound()
  }

  const { featuredImage, author, content, date, title, timeToRead, category, excerpt, tags } = post
  const relatedPosts = (await getBlogPosts()).filter((p) => p.handle !== handle).slice(0, 4)

  const renderHeader = () => {
    return (
      <header className="container rounded-xl">
        <div className="mx-auto flex w-full max-w-(--breakpoint-md) flex-col items-start gap-y-5">
          <Badge color="blue">{category.title}</Badge>
          <h1 className="max-w-4xl text-3xl font-semibold text-neutral-900 md:text-4xl md:leading-[120%]! lg:text-4xl dark:text-neutral-100">
            {title}
          </h1>
          <span className="block pb-1 text-base text-neutral-500 md:text-lg dark:text-neutral-400">{excerpt}</span>

          <Divider />
          <div className="flex w-full flex-wrap justify-between gap-2.5">
            <div className="nc-PostMeta2 flex shrink-0 flex-wrap items-center text-left text-sm leading-none text-neutral-700 dark:text-neutral-200">
              <Avatar src={author.avatar.src} className="h-8 w-8 sm:h-11 sm:w-11" />
              <div className="ms-3">
                <div className="flex items-center">
                  <span className="block font-semibold">{author.name}</span>
                </div>
                <div className="mt-[6px] text-xs">
                  <span className="text-neutral-700 dark:text-neutral-300">{date}</span>
                  <span className="mx-2 font-semibold">·</span>
                  <span className="text-neutral-700 dark:text-neutral-300">{timeToRead}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    )
  }

  const renderContent = () => {
    return (
      <div
        id="single-entry-content"
        className="mx-auto prose prose-sm max-w-(--breakpoint-md)! sm:prose lg:prose-lg dark:prose-invert"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    )
  }

  const renderTags = () => {
    return (
      <div className="mx-auto flex w-full max-w-(--breakpoint-md) flex-wrap gap-2">
        {tags.map((tag) => (
          <Tag key={tag} className="mb-2">
            {tag}
          </Tag>
        ))}
      </div>
    )
  }

  const renderAuthor = () => {
    return (
      <div className="mx-auto w-full max-w-(--breakpoint-md)">
        <div className="nc-SingleAuthor flex">
          <Avatar src={author.avatar.src} className="h-11 w-11 md:h-24 md:w-24" />
          <div className="ml-3 flex max-w-lg flex-col gap-y-1 sm:ml-5">
            <span className="text-xs tracking-wider text-neutral-400 uppercase">Yazan</span>
            <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-200">{author.name}</h2>
            <span className="text-sm text-neutral-500 sm:text-base dark:text-neutral-300">{author.description}</span>
          </div>
        </div>
      </div>
    )
  }

  const renderRelatedPosts = () => {
    return (
      <div className="mt-16 bg-neutral-100 py-16 lg:mt-24 lg:py-24 dark:bg-neutral-800">
        <div className="container">
          <h2 className="text-3xl font-semibold">Benzer Yazılar</h2>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-3 xl:grid-cols-4">
            {relatedPosts.map((post) => (
              <PostCard1 size="sm" key={post.id} post={post} />
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-8 lg:pt-16">
      {renderHeader()}

      <div className="container my-10 sm:my-12">
        <Image
          alt={featuredImage.alt}
          src={featuredImage.src}
          width={featuredImage.width}
          height={featuredImage.height}
          className="rounded-xl"
        />
      </div>

      <div className="container flex flex-col gap-y-10">
        {renderContent()}
        {renderTags()}
        <div className="mx-auto w-full max-w-(--breakpoint-md)">
          <Divider />
        </div>
        {renderAuthor()}
      </div>

      {renderRelatedPosts()}
    </div>
  )
}
