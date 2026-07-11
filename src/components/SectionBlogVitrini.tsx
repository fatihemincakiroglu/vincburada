import { TBlogPost } from '@/data/data'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

interface Props {
  posts: TBlogPost[]
  className?: string
}

const SectionBlogVitrini: FC<Props> = ({ posts, className = '' }) => {
  const gosterilecek = posts.slice(0, 3)

  return (
    <div className={className}>
      <div className="grid gap-10 lg:grid-cols-4 lg:gap-8">
        {/* SOL: başlık */}
        <div className="lg:col-span-1">
          <h2 className="text-3xl font-semibold text-neutral-900 sm:text-4xl dark:text-neutral-100">
            Vinç Kiralama Rehberi
          </h2>
          <div className="mt-4 h-1 w-14 rounded bg-orange-600" aria-hidden="true" />
          <p className="mt-6 text-base/7 text-neutral-500 dark:text-neutral-400">
            Doğru ekipman seçimi, iş güvenliği ve kiralama süreçleri hakkında saha deneyimimizle hazırladığımız
            yazılar.
          </p>
          <Link
            href="/blog"
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold tracking-widest text-orange-600 uppercase hover:text-orange-500 dark:text-orange-400"
          >
            Tüm Yazılar
            <svg viewBox="0 0 20 20" fill="currentColor" className="size-4" aria-hidden="true">
              <path d="M3 10a.75.75 0 0 1 .75-.75h10.6L10.7 5.8a.75.75 0 1 1 1.1-1.02l4.9 4.7a.75.75 0 0 1 0 1.04l-4.9 4.7a.75.75 0 1 1-1.1-1.02l3.65-3.45H3.75A.75.75 0 0 1 3 10Z" />
            </svg>
          </Link>
        </div>

        {/* SAĞ: kartlar */}
        <div className="grid gap-6 sm:grid-cols-3 lg:col-span-3">
          {gosterilecek.map((post) => (
            <article
              key={post.handle}
              className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-neutral-200 transition-shadow hover:shadow-xl dark:bg-neutral-900 dark:ring-neutral-700"
            >
              <Link href={`/blog/${post.handle}`} className="relative block aspect-[4/3] overflow-hidden">
                <Image
                  src={post.featuredImage.src}
                  alt={post.featuredImage.alt}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute bottom-0 left-0 h-1 w-10 bg-orange-600" aria-hidden="true" />
              </Link>
              <div className="flex grow flex-col p-5">
                <h3 className="text-base font-semibold text-orange-600 dark:text-orange-400">
                  <Link href={`/blog/${post.handle}`} className="line-clamp-2 hover:underline">
                    {post.title}
                  </Link>
                </h3>
                <p className="mt-3 line-clamp-3 text-sm/6 text-neutral-500 dark:text-neutral-400">{post.excerpt}</p>
                <Link
                  href={`/blog/${post.handle}`}
                  className="mt-auto pt-5 text-xs font-bold tracking-widest text-neutral-400 uppercase transition-colors group-hover:text-orange-600 dark:group-hover:text-orange-400"
                >
                  Detaylı Bilgi
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SectionBlogVitrini
