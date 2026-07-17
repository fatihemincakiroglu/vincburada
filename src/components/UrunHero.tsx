import Image, { StaticImageData } from 'next/image'
import { FC } from 'react'

export interface UrunHeroProps {
  marka: string
  model: string
  etiket: string // tip veya kategori gösterimi
  image: StaticImageData | string
  imageAlt: string
  specs: { etiket: string; deger: string }[]
  whatsappUrl: string
  sertifikalar?: string[]
}

/**
 * Ürün detay sayfalarının üst alanı.
 * Rastgele fotoğraf kolajı yerine: tek güçlü görsel + lacivert teknik panel.
 * Renk dili SectionKatalog / SectionTeklifCta ile aynıdır (lacivert + turuncu).
 */
const UrunHero: FC<UrunHeroProps> = ({ marka, model, etiket, image, imageAlt, specs, whatsappUrl, sertifikalar }) => {
  return (
    <div className="grid grid-cols-1 gap-3 lg:grid-cols-5">
      {/* Görsel */}
      <div className="relative aspect-4/3 overflow-hidden rounded-3xl bg-neutral-100 lg:col-span-3 lg:aspect-auto dark:bg-neutral-800">
        <Image
          src={image}
          alt={imageAlt}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 60vw"
          className="object-cover"
        />
        <span className="absolute top-4 left-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold tracking-wide text-neutral-900 uppercase backdrop-blur-sm">
          {etiket}
        </span>
      </div>

      {/* Teknik panel */}
      <div className="flex flex-col justify-between gap-8 rounded-3xl bg-slate-900 p-7 sm:p-8 lg:col-span-2">
        <div>
          <p className="text-xs font-semibold tracking-[0.2em] text-orange-400 uppercase">{marka}</p>
          <h1 className="mt-1 text-2xl font-semibold text-white sm:text-3xl">{model}</h1>

          {/* Spec kartları */}
          <div className="mt-6 grid grid-cols-2 gap-2.5">
            {specs.slice(0, 4).map((s) => (
              <div key={s.etiket} className="rounded-xl bg-white/5 p-3.5 ring-1 ring-white/10">
                <p className="text-[11px] leading-4 text-slate-400">{s.etiket}</p>
                <p className="mt-1 text-base leading-5 font-semibold text-white">{s.deger}</p>
              </div>
            ))}
          </div>

          {sertifikalar && sertifikalar.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {sertifikalar.map((s) => (
                <span
                  key={s}
                  className="rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-[11px] font-medium text-emerald-400 ring-1 ring-emerald-500/20"
                >
                  {s}
                </span>
              ))}
            </div>
          )}
        </div>

        <div className="flex flex-col gap-2.5">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-orange-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-500"
          >
            WhatsApp ile Teklif Al
            <svg viewBox="0 0 20 20" fill="currentColor" className="size-4" aria-hidden="true">
              <path d="M3 10a.75.75 0 0 1 .75-.75h10.6L10.7 5.8a.75.75 0 1 1 1.1-1.02l4.9 4.7a.75.75 0 0 1 0 1.04l-4.9 4.7a.75.75 0 1 1-1.1-1.02l3.65-3.45H3.75A.75.75 0 0 1 3 10Z" />
            </svg>
          </a>
          <a
            href="tel:+905323039089"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/5"
          >
            0532 303 90 89
          </a>
        </div>
      </div>
    </div>
  )
}

export default UrunHero
