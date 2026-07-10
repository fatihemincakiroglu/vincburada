import { getKategoriUrunListesi } from '@/data/kategori-urunleri'
import { getSepetliVincListings } from '@/data/sepetli-vinc-listings'
import ButtonPrimary from '@/shared/ButtonPrimary'
import Image from 'next/image'
import Link from 'next/link'

// ---------------------------------------------------------------------------
// Ürün Vitrini — ana sayfa "showroom" bandı (tüm kategoriler)
// Koyu grafit zemin + emniyet amberi vurgu. Her kategori kendi yatay rayında;
// kartın kahramanı o kategorinin birincil teknik değeri.
// ---------------------------------------------------------------------------

const trSayi = (n: number) => n.toLocaleString('tr-TR')

type TPlaka = {
  id: string
  marka: string
  model: string
  tip: string
  birincil: string // örn. "39,5 m" / "12 ton" / "21 tm"
  ikincil?: string
}

type TRay = {
  baslik: string
  href: string
  plakalar: TPlaka[]
}

const SpecMini = ({ deger, birim, etiket }: { deger: string; birim: string; etiket: string }) => (
  <div>
    <p className="text-2xl font-light text-white sm:text-3xl">
      {deger}
      <span className="ms-0.5 text-base font-normal text-amber-400">{birim}</span>
    </p>
    <p className="mt-1 text-[11px] font-medium tracking-widest text-neutral-400 uppercase">{etiket}</p>
  </div>
)

const PlakaKarti = ({ plaka, href }: { plaka: TPlaka; href: string }) => {
  const [sayi, ...birimParcalari] = plaka.birincil.split(' ')
  const birim = birimParcalari.join(' ')
  return (
    <Link
      href={href}
      className="group flex w-60 shrink-0 snap-start flex-col rounded-2xl bg-neutral-900 p-5 ring-1 ring-white/10 transition duration-300 hover:ring-amber-400/60"
    >
      <div className="flex items-start justify-between gap-x-2">
        <p className="text-[10px] font-semibold tracking-[0.2em] text-amber-400 uppercase">{plaka.marka}</p>
        <span className="shrink-0 rounded-full bg-white/5 px-2 py-0.5 text-[10px] font-medium text-neutral-400">
          {plaka.tip}
        </span>
      </div>
      <h4 className="mt-1.5 text-sm font-semibold text-white">{plaka.model}</h4>
      <p className="mt-4 text-3xl font-light text-white">
        {sayi}
        <span className="ms-1 text-base text-amber-400">{birim}</span>
      </p>
      {plaka.ikincil ? <p className="mt-1 text-xs text-neutral-500">{plaka.ikincil}</p> : null}
    </Link>
  )
}

const SectionUrunVitrini = async () => {
  const sepetli = await getSepetliVincListings()
  const kule = await getKategoriUrunListesi('kule-vinc')
  const elektrikli = await getKategoriUrunListesi('elektrikli-vinc')
  const mobil = await getKategoriUrunListesi('mobil-vinc')
  const hiyap = await getKategoriUrunListesi('hiyap-vinc')

  const sepetliSirali = [...sepetli].sort((a, b) => b.calismaYuksekligi - a.calismaYuksekligi)
  const amiral = sepetliSirali[0]

  const raylar: TRay[] = [
    {
      baslik: 'Sepetli Vinç',
      href: '/sepetli-vinc',
      plakalar: sepetliSirali.slice(1).map((u) => ({
        id: u.id,
        marka: u.marka,
        model: u.model,
        tip: u.kategori,
        birincil: `${trSayi(u.calismaYuksekligi)} m`,
        ikincil: u.yatayErisim ? `Yatay erişim ${trSayi(u.yatayErisim)} m` : u.gucKaynagiGosterim,
      })),
    },
    ...[kule, mobil, elektrikli, hiyap]
      .filter((l): l is NonNullable<typeof l> => Boolean(l))
      .map((liste) => ({
        baslik: liste.baslik.replace(' Modelleri', ''),
        href: `/${liste.handle}`,
        plakalar: liste.urunler.map((u) => ({
          id: u.id,
          marka: u.marka,
          model: u.model,
          tip: u.tip,
          birincil: u.specs[0]?.deger ?? '',
          ikincil: u.specs[1] ? `${u.specs[1].etiket} ${u.specs[1].deger}` : u.mensei,
        })),
      })),
  ]

  const toplam = sepetli.length + raylar.slice(1).reduce((acc, r) => acc + r.plakalar.length, 0)

  return (
    <section className="relative overflow-hidden rounded-[2.5rem] bg-neutral-950 px-6 py-14 sm:px-10 lg:px-14 lg:py-20">
      {/* teknik zemin dokusu */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)',
          backgroundSize: '56px 56px',
        }}
      />

      <div className="relative">
        {/* Başlık */}
        <div className="flex flex-col gap-y-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="flex items-center gap-x-3 text-xs font-semibold tracking-[0.25em] text-amber-400 uppercase">
              <span className="h-px w-8 bg-amber-400" aria-hidden />
              Filomuz
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Ürünlerimiz</h2>
            <p className="mt-3 max-w-xl text-neutral-400">
              {toplam} model, 5 kategori — sepetliden kule vince, her iş için doğru ekipman.
            </p>
          </div>
        </div>

        {/* Amiral gemisi */}
        <Link
          href="/sepetli-vinc#modeller"
          className="group relative mt-10 flex flex-col overflow-hidden rounded-3xl ring-1 ring-white/10 transition duration-300 hover:ring-amber-400/60 lg:flex-row"
        >
          <div className="relative aspect-16/9 lg:aspect-auto lg:w-3/5">
            <Image
              src={amiral.featuredImage}
              alt={amiral.title}
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/70 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-neutral-950" />
          </div>
          <div className="flex flex-col justify-center bg-neutral-950 p-7 sm:p-10 lg:w-2/5">
            <p className="text-[11px] font-semibold tracking-[0.25em] text-amber-400 uppercase">
              Filonun amiral gemisi
            </p>
            <h3 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">
              {amiral.marka} {amiral.model}
            </h3>
            <p className="mt-3 text-sm/6 text-neutral-400">{amiral.description}</p>
            <div className="mt-8 flex gap-x-10 border-t border-white/10 pt-6">
              <SpecMini deger={trSayi(amiral.calismaYuksekligi)} birim="m" etiket="Yükseklik" />
              {amiral.yatayErisim ? <SpecMini deger={trSayi(amiral.yatayErisim)} birim="m" etiket="Erişim" /> : null}
              {amiral.kapasiteKg ? <SpecMini deger={trSayi(amiral.kapasiteKg)} birim="kg" etiket="Kapasite" /> : null}
            </div>
          </div>
        </Link>

        {/* Kategori rayları */}
        <div className="mt-12 flex flex-col gap-y-10">
          {raylar.map((ray) => (
            <div key={ray.href}>
              <div className="flex items-baseline justify-between gap-x-4">
                <h3 className="text-lg font-semibold text-white">
                  {ray.baslik}
                  <span className="ms-2 text-sm font-normal text-neutral-500">
                    {ray.baslik === 'Sepetli Vinç' ? ray.plakalar.length + 1 : ray.plakalar.length} model
                  </span>
                </h3>
                <Link
                  href={`${ray.href}#modeller`}
                  className="shrink-0 text-sm font-medium text-neutral-300 underline-offset-4 hover:text-amber-400 hover:underline"
                >
                  Tümünü gör →
                </Link>
              </div>
              <div className="hidden-scrollbar -mx-1 mt-4 flex snap-x gap-4 overflow-x-auto px-1 pb-1">
                {ray.plakalar.map((plaka) => (
                  <PlakaKarti key={plaka.id} plaka={plaka} href={`${ray.href}#modeller`} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Alt CTA */}
        <div className="mt-14 flex flex-col items-center gap-y-3 text-center">
          <ButtonPrimary href="/iletisim">Projeniz İçin Teklif Alın</ButtonPrimary>
          <p className="text-sm text-neutral-500">Aynı gün dönüş · Sertifikalı operatör · EN 280 / CE</p>
        </div>
      </div>
    </section>
  )
}

export default SectionUrunVitrini
