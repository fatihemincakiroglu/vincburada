import { getKategoriUrunListesi, TKategoriUrun, TKategoriUrunListesi } from '@/data/kategori-urunleri'
import { markaSlug } from '@/data/markalar'
import { Badge } from '@/shared/Badge'
import { DescriptionDetails, DescriptionList, DescriptionTerm } from '@/shared/description-list'
import TeklifKutusu from '@/components/TeklifKutusu'
import UrunHero from '@/components/UrunHero'
import { Divider } from '@/shared/divider'
import Image from 'next/image'
import Link from 'next/link'

const urunAciklamasi = (u: TKategoriUrun, kategoriAdi: string) => {
  const ilkSpec = u.specs[0]
  const specCumlesi = ilkSpec ? ` ${ilkSpec.etiket.toLocaleLowerCase('tr')} ${ilkSpec.deger} değeriyle` : ''
  return `${u.marka} ${u.model},${specCumlesi} ${kategoriAdi.toLocaleLowerCase('tr')} kiralama filomuzda yer alan ${u.tip.toLocaleLowerCase('tr')} tipi bir modeldir. ${u.not}.`
}

const KategoriUrunDetay = async ({
  kategoriHandle,
  kategoriAdi,
  urun,
}: {
  kategoriHandle: string
  kategoriAdi: string
  urun: TKategoriUrun
}) => {
  const liste = (await getKategoriUrunListesi(kategoriHandle)) as TKategoriUrunListesi
  const digerModeller = liste.urunler.filter((u) => u.handle !== urun.handle).slice(0, 3)
  const whatsappMesaj = encodeURIComponent(
    `Merhaba, ${urun.marka} ${urun.model} (${kategoriAdi}) kiralama için teklif almak istiyorum.`
  )

  return (
    <main className="container pt-8 pb-24 lg:pt-12 lg:pb-28">
      {/* ÜRÜN HERO: tek görsel + teknik panel */}
      <UrunHero
        marka={urun.marka}
        model={urun.model}
        etiket={urun.tip}
        image={urun.featuredImage}
        imageAlt={`${urun.marka} ${urun.model}`}
        specs={urun.specs}
        whatsappUrl={`https://wa.me/905323039089?text=${whatsappMesaj}`}
      />

      <div className="mt-10 flex flex-col gap-10 lg:mt-14 lg:flex-row lg:gap-14">
        {/* SOL: içerik */}
        <div className="w-full lg:w-3/5 xl:w-2/3">
          <div className="flex flex-wrap items-center gap-2">
            <Badge color="blue">{urun.tip}</Badge>
            <Link href={`/markalar/${markaSlug(urun.marka)}`}>
              <Badge color="zinc">{urun.marka} →</Badge>
            </Link>
            <Badge color="green">{urun.mensei}</Badge>
          </div>

          <h1 className="mt-4 text-2xl font-semibold sm:text-3xl">
            {urun.marka} {urun.model}
          </h1>
          <p className="mt-1 text-neutral-500 dark:text-neutral-400">{kategoriAdi} Kiralama</p>

          <p className="mt-6 text-neutral-700 dark:text-neutral-300">{urunAciklamasi(urun, kategoriAdi)}</p>

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

            <DescriptionTerm>Menşei</DescriptionTerm>
            <DescriptionDetails>{urun.mensei}</DescriptionDetails>

            <DescriptionTerm>Tip</DescriptionTerm>
            <DescriptionDetails>{urun.tip}</DescriptionDetails>

            {urun.specs.map((s) => (
              <div key={s.etiket} className="contents">
                <DescriptionTerm>{s.etiket}</DescriptionTerm>
                <DescriptionDetails>{s.deger}</DescriptionDetails>
              </div>
            ))}

            <DescriptionTerm>Öne Çıkan Özellik</DescriptionTerm>
            <DescriptionDetails>{urun.not}</DescriptionDetails>
          </DescriptionList>

          <p className="mt-6 text-xs text-neutral-400 dark:text-neutral-500">{liste.dipnot}</p>
        </div>

        {/* SAĞ: teklif kutusu */}
        <div className="w-full lg:w-2/5 xl:w-1/3">
          <TeklifKutusu urunAdi={`${urun.marka} ${urun.model}`} whatsappMesaj={whatsappMesaj} />
        </div>
      </div>

      {/* DİĞER MODELLER */}
      <Divider className="my-14" />
      <h2 className="text-xl font-semibold">Diğer {kategoriAdi} Modelleri</h2>
      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3">
        {digerModeller.map((d) => (
          <div
            key={d.id}
            className="group relative overflow-hidden rounded-3xl border border-neutral-200 transition-shadow hover:shadow-lg dark:border-neutral-700"
          >
            <div className="relative aspect-4/3 w-full overflow-hidden">
              <Image
                src={d.featuredImage}
                alt={`${d.marka} ${d.model}`}
                fill
                sizes="(max-width: 640px) 100vw, 33vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-5">
              <h3 className="text-base font-semibold">
                <Link href={`/${kategoriHandle}/${d.handle}`} className="absolute inset-0"></Link>
                {d.marka} {d.model}
              </h3>
              <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
                {d.specs[0] ? `${d.specs[0].etiket}: ${d.specs[0].deger}` : d.tip}
              </p>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}

export default KategoriUrunDetay
