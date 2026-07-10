import BgGlassmorphism from '@/components/BgGlassmorphism'
import { getMarkalar } from '@/data/markalar'
import HeadingWithSub from '@/shared/Heading'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Vinç Markaları',
  description:
    'JLG, Liebherr, Potain, Palfinger, HIAB ve daha fazlası — kiralık vinç filomuzdaki tüm markaları ve modellerini inceleyin.',
}

const Page = async () => {
  const markalar = await getMarkalar()

  return (
    <main className="relative overflow-hidden">
      <BgGlassmorphism />
      <div className="relative container pt-10 pb-24 lg:pt-16 lg:pb-28">
        <HeadingWithSub subheading="Filomuzdaki tüm markalar — her markanın sayfasında ilgili modellerin tamamını bulabilirsiniz.">
          Vinç Markaları
        </HeadingWithSub>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:mt-14 lg:grid-cols-4">
          {markalar.map((m) => (
            <Link
              key={m.handle}
              href={`/markalar/${m.handle}`}
              className="group flex flex-col rounded-2xl border border-neutral-200 p-5 transition hover:border-amber-500/60 hover:shadow-lg dark:border-neutral-700"
            >
              <h2 className="font-semibold text-neutral-900 group-hover:text-amber-600 dark:text-neutral-100 dark:group-hover:text-amber-400">
                {m.marka}
              </h2>
              <p className="mt-1 text-xs text-neutral-500 dark:text-neutral-400">{m.mensei || '—'}</p>
              <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-300">
                {m.urunler.length} model ·{' '}
                {Array.from(new Set(m.urunler.map((u) => u.kategoriAdi))).join(', ')}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}

export default Page
