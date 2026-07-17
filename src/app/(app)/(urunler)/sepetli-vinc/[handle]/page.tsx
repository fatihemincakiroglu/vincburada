import { markaSlug } from '@/data/markalar'
import UrunHero from '@/components/UrunHero'
import { getSepetliVincByHandle, getSepetliVincListings, getSepetliVincMarkaByAd } from '@/data/sepetli-vinc-listings'
import { Badge } from '@/shared/Badge'
import { DescriptionDetails, DescriptionList, DescriptionTerm } from '@/shared/description-list'
import TeklifKutusu from '@/components/TeklifKutusu'
import { Divider } from '@/shared/divider'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { redirect } from 'next/navigation'

export async function generateStaticParams() {
  const listings = await getSepetliVincListings()
  return listings.map((l) => ({ handle: l.handle }))
}

export async function generateMetadata({ params }: { params: Promise<{ handle: string }> }): Promise<Metadata> {
  const { handle } = await params
  const urun = await getSepetliVincByHandle(handle)

  if (!urun) {
    return { title: 'Model bulunamadı' }
  }

  return {
    title: `${urun.title} Kiralama`,
    description: urun.description,
  }
}

const Page = async ({ params }: { params: Promise<{ handle: string }> }) => {
  const { handle } = await params
  const urun = await getSepetliVincByHandle(handle)

  if (!urun) {
    return redirect('/sepetli-vinc')
  }

  const marka = await getSepetliVincMarkaByAd(urun.marka)
  const digerModeller = (await getSepetliVincListings()).filter((l) => l.handle !== handle).slice(0, 3)

  const whatsappMesaj = encodeURIComponent(`Merhaba, ${urun.marka} ${urun.model} kiralama için teklif almak istiyorum.`)

  return (
    <main className="container pt-8 pb-24 lg:pt-12 lg:pb-28">
      {/* ÜRÜN HERO: tek görsel + teknik panel */}
      <UrunHero
        marka={urun.marka}
        model={urun.model}
        etiket={urun.anaKategoriGosterim}
        image={urun.featuredImage}
        imageAlt={urun.title}
        specs={[
          { etiket: 'Çalışma Yüksekliği', deger: `${urun.calismaYuksekligi} m` },
          { etiket: 'Yatay Erişim', deger: `${urun.yatayErisim} m` },
          { etiket: 'Sepet Kapasitesi', deger: `${urun.kapasiteKg} kg` },
          { etiket: 'Güç Kaynağı', deger: urun.gucKaynagiGosterim },
        ]}
        whatsappUrl={`https://wa.me/905323039089?text=${whatsappMesaj}`}
        sertifikalar={urun.sertifikalar}
      />

      <div className="mt-10 flex flex-col gap-10 lg:mt-14 lg:flex-row lg:gap-14">
        {/* SOL: içerik */}
        <div className="w-full lg:w-3/5 xl:w-2/3">
          <div className="flex flex-wrap items-center gap-2">
            <Badge color="blue">{urun.kategori}</Badge>
            <Link href={`/markalar/${markaSlug(urun.marka)}`}>
              <Badge color="zinc">{urun.marka} →</Badge>
            </Link>
            {urun.sertifikalar.map((s) => (
              <Badge key={s} color="green">
                {s}
              </Badge>
            ))}
          </div>

          <h1 className="mt-4 text-2xl font-semibold sm:text-3xl">{urun.title}</h1>
          <p className="mt-1 text-neutral-500 dark:text-neutral-400">{urun.anaKategoriGosterim}</p>

          <p className="mt-6 text-neutral-700 dark:text-neutral-300">{urun.description}</p>

          <Divider className="my-8" />

          <h2 className="text-xl font-semibold">Teknik Özellikler</h2>
          <DescriptionList className="mt-4">
            <DescriptionTerm>Marka</DescriptionTerm>
            <DescriptionDetails>
              <Link href={`/markalar/${markaSlug(urun.marka)}`} className="underline underline-offset-4 hover:text-amber-600">
                {urun.marka}
              </Link>
            </DescriptionDetails>

            <DescriptionTerm>Model</DescriptionTerm>
            <DescriptionDetails>{urun.model}</DescriptionDetails>

            <DescriptionTerm>Ana Kategori</DescriptionTerm>
            <DescriptionDetails>{urun.anaKategoriGosterim}</DescriptionDetails>

            <DescriptionTerm>Çalışma Yüksekliği</DescriptionTerm>
            <DescriptionDetails>{urun.calismaYuksekligi} m</DescriptionDetails>

            {urun.yatayErisim ? (
              <>
                <DescriptionTerm>Yatay Erişim</DescriptionTerm>
                <DescriptionDetails>{urun.yatayErisim} m</DescriptionDetails>
              </>
            ) : null}

            {urun.kapasiteKg ? (
              <>
                <DescriptionTerm>Sepet / Platform Kapasitesi</DescriptionTerm>
                <DescriptionDetails>{urun.kapasiteKg} kg</DescriptionDetails>
              </>
            ) : null}

            <DescriptionTerm>Güç Kaynağı</DescriptionTerm>
            <DescriptionDetails>{urun.gucKaynagiGosterim}</DescriptionDetails>

            <DescriptionTerm>Zemin / Hareket Tipi</DescriptionTerm>
            <DescriptionDetails>{urun.zeminGosterim}</DescriptionDetails>

            <DescriptionTerm>Kullanım Ortamı</DescriptionTerm>
            <DescriptionDetails>{urun.kullanimOrtami}</DescriptionDetails>

            <DescriptionTerm>Sertifika / Standart</DescriptionTerm>
            <DescriptionDetails>{urun.sertifikalar.join(', ')}</DescriptionDetails>

            <DescriptionTerm>Öne Çıkan Özellik</DescriptionTerm>
            <DescriptionDetails>{urun.not}</DescriptionDetails>
          </DescriptionList>

          {marka ? (
            <>
              <Divider className="my-8" />
              <div className="flex items-baseline justify-between gap-x-4">
                <h2 className="text-xl font-semibold">{marka.marka} Hakkında</h2>
                <Link
                  href={`/markalar/${markaSlug(marka.marka)}`}
                  className="text-sm font-medium text-neutral-600 underline-offset-4 hover:text-amber-600 hover:underline dark:text-neutral-300"
                >
                  Tüm {marka.marka} modelleri →
                </Link>
              </div>
              <DescriptionList className="mt-4">
                <DescriptionTerm>Menşei</DescriptionTerm>
                <DescriptionDetails>{marka.mensei}</DescriptionDetails>

                <DescriptionTerm>Güçlü Olduğu Ürün Grubu</DescriptionTerm>
                <DescriptionDetails>{marka.urunGrubu}</DescriptionDetails>

                <DescriptionTerm>Bilinen Seriler</DescriptionTerm>
                <DescriptionDetails>{marka.seriler}</DescriptionDetails>

                <DescriptionTerm>Not</DescriptionTerm>
                <DescriptionDetails>{marka.not}</DescriptionDetails>
              </DescriptionList>
            </>
          ) : null}
        </div>

        {/* SAĞ: teklif kutusu */}
        <div className="w-full lg:w-2/5 xl:w-1/3">
          <TeklifKutusu urunAdi={`${urun.marka} ${urun.model}`} whatsappMesaj={whatsappMesaj} />
        </div>
      </div>

      {/* DİĞER MODELLER */}
      <Divider className="my-14" />
      <h2 className="text-xl font-semibold">Diğer Modeller</h2>
      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3">
        {digerModeller.map((d) => (
          <div
            key={d.id}
            className="group relative overflow-hidden rounded-3xl border border-neutral-200 transition-shadow hover:shadow-lg dark:border-neutral-700"
          >
            <div className="relative aspect-4/3 w-full overflow-hidden">
              <Image
                src={d.featuredImage}
                alt={d.title}
                fill
                sizes="(max-width: 640px) 100vw, 33vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-5">
              <h3 className="text-base font-semibold">
                <Link href={`/sepetli-vinc/${d.handle}`} className="absolute inset-0"></Link>
                {d.title}
              </h3>
              <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
                ↑ {d.calismaYuksekligi} m · {d.gucKaynagiGosterim}
              </p>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}

export default Page
