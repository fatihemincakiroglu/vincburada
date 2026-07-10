import BgGlassmorphism from '@/components/BgGlassmorphism'
import { getMarkaByHandle, getMarkalar } from '@/data/markalar'
import ButtonPrimary from '@/shared/ButtonPrimary'
import { DescriptionDetails, DescriptionList, DescriptionTerm } from '@/shared/description-list'
import { Divider } from '@/shared/divider'
import HeadingWithSub from '@/shared/Heading'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { redirect } from 'next/navigation'

export async function generateStaticParams() {
  const markalar = await getMarkalar()
  return markalar.map((m) => ({ handle: m.handle }))
}

export async function generateMetadata({ params }: { params: Promise<{ handle: string }> }): Promise<Metadata> {
  const { handle } = await params
  const marka = await getMarkaByHandle(handle)

  if (!marka) {
    return { title: 'Marka bulunamadı' }
  }

  const kategoriler = Array.from(new Set(marka.urunler.map((u) => u.kategoriAdi))).join(', ')
  return {
    title: `${marka.marka} Vinç Kiralama`,
    description: `${marka.marka} (${marka.mensei || 'uluslararası üretici'}) kiralık vinç modelleri: ${kategoriler}. ${marka.urunler.length} model için teklif alın.`,
  }
}

const Page = async ({ params }: { params: Promise<{ handle: string }> }) => {
  const { handle } = await params
  const marka = await getMarkaByHandle(handle)

  if (!marka) {
    return redirect('/markalar')
  }

  // Ürünleri kategoriye göre grupla
  const gruplar = new Map<string, typeof marka.urunler>()
  for (const u of marka.urunler) {
    const g = gruplar.get(u.kategoriAdi) ?? []
    g.push(u)
    gruplar.set(u.kategoriAdi, g)
  }

  return (
    <main className="relative overflow-hidden">
      <BgGlassmorphism />
      <div className="relative container pt-10 pb-24 lg:pt-16 lg:pb-28">
        <div className="flex flex-col gap-y-2">
          <Link
            href="/markalar"
            className="text-sm text-neutral-500 underline-offset-4 hover:text-amber-600 hover:underline dark:text-neutral-400"
          >
            ← Tüm Markalar
          </Link>
          <HeadingWithSub
            subheading={`${marka.mensei ? `${marka.mensei} menşeli` : 'Uluslararası'} üretici — filomuzda ${marka.urunler.length} modeli bulunuyor.`}
          >
            {marka.marka}
          </HeadingWithSub>
        </div>

        {(marka.urunGrubu || marka.not) && (
          <DescriptionList className="mt-8 max-w-2xl">
            {marka.urunGrubu ? (
              <>
                <DescriptionTerm>Güçlü Olduğu Ürün Grubu</DescriptionTerm>
                <DescriptionDetails>{marka.urunGrubu}</DescriptionDetails>
              </>
            ) : null}
            {marka.seriler ? (
              <>
                <DescriptionTerm>Bilinen Seriler</DescriptionTerm>
                <DescriptionDetails>{marka.seriler}</DescriptionDetails>
              </>
            ) : null}
            {marka.not ? (
              <>
                <DescriptionTerm>Not</DescriptionTerm>
                <DescriptionDetails>{marka.not}</DescriptionDetails>
              </>
            ) : null}
          </DescriptionList>
        )}

        {Array.from(gruplar.entries()).map(([kategoriAdi, urunler]) => (
          <div key={kategoriAdi} className="mt-12">
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">
              {kategoriAdi}
              <span className="ms-2 text-sm font-normal text-neutral-400">{urunler.length} model</span>
            </h2>
            <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {urunler.map((u) => (
                <div
                  key={u.id}
                  className="group relative overflow-hidden rounded-3xl border border-neutral-200 transition hover:border-amber-500/60 hover:shadow-lg dark:border-neutral-700"
                >
                  <div className="relative aspect-4/3 w-full overflow-hidden">
                    <Image
                      src={u.featuredImage}
                      alt={`${marka.marka} ${u.model}`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center justify-between gap-x-2">
                      <h3 className="font-semibold text-neutral-900 dark:text-neutral-100">
                        <Link href={u.href} className="absolute inset-0"></Link>
                        {marka.marka} {u.model}
                      </h3>
                      <span className="shrink-0 rounded-full bg-neutral-100 px-2.5 py-1 text-[11px] font-medium text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300">
                        {u.tip}
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">{u.ozet}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        <Divider className="my-14" />
        <div className="flex flex-col items-center gap-y-3 text-center">
          <p className="text-neutral-600 dark:text-neutral-300">
            {marka.marka} modelleri için güncel kiralama fiyatı ve müsaitlik bilgisi alın.
          </p>
          <ButtonPrimary
            href={`https://wa.me/905323039089?text=${encodeURIComponent(`Merhaba, ${marka.marka} vinç kiralama için teklif almak istiyorum.`)}`}
            target="_blank"
            rel="noopener"
          >
            {marka.marka} İçin Teklif Al
          </ButtonPrimary>
        </div>
      </div>
    </main>
  )
}

export default Page
