import { getSepetliVincListings, TSepetliVinc } from '@/data/sepetli-vinc-listings'
import ButtonPrimary from '@/shared/ButtonPrimary'
import Image from 'next/image'
import Link from 'next/link'

// ---------------------------------------------------------------------------
// Ürün Vitrini — ana sayfa "showroom" bandı
// Koyu grafit zemin + emniyet amberi vurgu; kartların kahramanı çalışma
// yüksekliği rakamı. Modeller yüksekliğe göre sıralanır (75m → 10m).
// ---------------------------------------------------------------------------

const trSayi = (n: number) => n.toLocaleString('tr-TR')

const SpecMini = ({ deger, birim, etiket }: { deger: string; birim: string; etiket: string }) => (
  <div>
    <p className="text-2xl font-light text-white sm:text-3xl">
      {deger}
      <span className="ms-0.5 text-base font-normal text-amber-400">{birim}</span>
    </p>
    <p className="mt-1 text-[11px] font-medium tracking-widest text-neutral-400 uppercase">{etiket}</p>
  </div>
)

const UrunKarti = ({ urun }: { urun: TSepetliVinc }) => (
  <Link
    href={`/sepetli-vinc/modeller/${urun.handle}`}
    className="group relative flex flex-col overflow-hidden rounded-3xl bg-neutral-900 ring-1 ring-white/10 transition duration-300 hover:ring-amber-400/60"
  >
    <div className="relative aspect-4/3 overflow-hidden">
      <Image
        src={urun.featuredImage}
        alt={urun.title}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent" />
      {/* Yükseklik — kartın kahramanı */}
      <p className="absolute bottom-3 left-5 text-4xl font-light text-white">
        {trSayi(urun.calismaYuksekligi)}
        <span className="ms-1 text-lg text-amber-400">m</span>
      </p>
      <p className="absolute right-5 bottom-5 text-[11px] font-medium tracking-widest text-neutral-300 uppercase">
        {urun.kategori}
      </p>
    </div>
    <div className="flex grow flex-col p-5 pt-4">
      <p className="text-[11px] font-semibold tracking-[0.2em] text-amber-400 uppercase">{urun.marka}</p>
      <h3 className="mt-1 text-base font-semibold text-white">{urun.model}</h3>
      <p className="mt-2 line-clamp-1 text-sm text-neutral-400">
        {urun.gucKaynagiGosterim}
        {urun.kapasiteKg ? ` · ${trSayi(urun.kapasiteKg)} kg` : ''}
      </p>
    </div>
  </Link>
)

const SectionUrunVitrini = async () => {
  const listings = await getSepetliVincListings()
  const siralanmis = [...listings].sort((a, b) => b.calismaYuksekligi - a.calismaYuksekligi)
  const [amiral, ...digerleri] = siralanmis
  const vitrindekiler = digerleri.slice(0, 6)

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
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Kiralık Sepetli Vinç Modelleri</h2>
            <p className="mt-3 max-w-xl text-neutral-400">
              10 metreden 75 metreye — her yükseklik için sertifikalı, bakımlı bir model.
            </p>
          </div>
          <Link
            href="/sepetli-vinc/modeller"
            className="shrink-0 text-sm font-medium text-white underline-offset-4 hover:text-amber-400 hover:underline"
          >
            Tüm modelleri filtrele →
          </Link>
        </div>

        {/* Amiral gemisi */}
        <Link
          href={`/sepetli-vinc/modeller/${amiral.handle}`}
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
              {amiral.yatayErisim ? (
                <SpecMini deger={trSayi(amiral.yatayErisim)} birim="m" etiket="Erişim" />
              ) : null}
              {amiral.kapasiteKg ? (
                <SpecMini deger={trSayi(amiral.kapasiteKg)} birim="kg" etiket="Kapasite" />
              ) : null}
            </div>
          </div>
        </Link>

        {/* Model ızgarası */}
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {vitrindekiler.map((urun) => (
            <UrunKarti key={urun.id} urun={urun} />
          ))}
        </div>

        {/* Alt CTA */}
        <div className="mt-12 flex flex-col items-center gap-y-3 text-center">
          <ButtonPrimary href="/sepetli-vinc/modeller">Tüm Modelleri İncele ve Filtrele</ButtonPrimary>
          <p className="text-sm text-neutral-500">
            {listings.length} model · Yükseklik, marka, güç kaynağı ve zemin tipine göre filtreleyin
          </p>
        </div>
      </div>
    </section>
  )
}

export default SectionUrunVitrini
