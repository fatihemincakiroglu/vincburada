import { TVincCategory } from '@/data/categories'
import Link from 'next/link'
import { FC, ReactNode } from 'react'

export interface SectionVincCesitleriProps {
  className?: string
  categories: TVincCategory[]
}

/**
 * Ana sayfa "Vinç Çeşitlerimiz" bölümü — görsel yerine her vinç tipine özel
 * çizgisel silüet ikonları kullanır (SectionHowItWork ile aynı ikon dili).
 * Ürün sayfalarındaki görsellere dokunmaz; yalnızca ana sayfa vitrinidir.
 */

// handle -> vinç tipine özel silüet ikon
const ICONS: Record<string, ReactNode> = {
  // Genel amaçlı vinç: kanca + kaldırma kolu
  vinc: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-9 w-9">
      <path d="M6 42h30" />
      <path d="M12 42V16l24-8" />
      <path d="M36 8v10" />
      <path d="M36 18a4 4 0 1 1-4 4" />
      <path d="M12 24h8" />
    </svg>
  ),
  // Sepetli vinç: eklemli kol + personel sepeti
  'sepetli-vinc': (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-9 w-9">
      <path d="M4 42h20" />
      <path d="M8 42v-6h12v6" />
      <path d="M14 36 24 22l12-6" />
      <path d="M36 16v-4" />
      <path d="M31 12h10v8h-10z" />
    </svg>
  ),
  // Kule vinç: dikey kule + yatay bom
  'kule-vinc': (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-9 w-9">
      <path d="M6 42h36" />
      <path d="M16 42V10" />
      <path d="M6 10h36" />
      <path d="M16 10 10 4h12l-6 6" />
      <path d="M34 10v8" />
      <path d="M34 18a3 3 0 1 1-3 3" />
    </svg>
  ),
  // Elektrikli vinç: vinç kolu + şimşek
  'elektrikli-vinc': (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-9 w-9">
      <path d="M6 42h24" />
      <path d="M12 42V20l20-8" />
      <path d="M32 12v6" />
      <path d="m38 26-6 8h8l-6 8" />
    </svg>
  ),
  // Hiyap: kamyon şasisi + katlanır bom
  'hiyap-vinc': (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-9 w-9">
      <path d="M4 34h40" />
      <circle cx="13" cy="39" r="3" />
      <circle cx="33" cy="39" r="3" />
      <path d="M6 34v-8h10v8" />
      <path d="M16 28 28 14l12 6" />
      <path d="M40 20v6" />
    </svg>
  ),
  // Mobil vinç: tekerlekli şasi + teleskopik bom
  'mobil-vinc': (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-9 w-9">
      <path d="M4 36h40" />
      <circle cx="12" cy="41" r="3" />
      <circle cx="24" cy="41" r="3" />
      <circle cx="36" cy="41" r="3" />
      <path d="M8 36v-6h14v6" />
      <path d="m12 30 26-18" />
      <path d="M38 12v8" />
    </svg>
  ),
  // Mini vinç: paletli kompakt gövde + kısa bom
  'mini-vinc': (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-9 w-9">
      <rect x="8" y="34" width="22" height="8" rx="4" />
      <path d="M12 34v-6h12v6" />
      <path d="M20 28 32 18" />
      <path d="M32 18v6" />
      <path d="M32 24a3 3 0 1 1-3 3" />
    </svg>
  ),
}

const SectionVincCesitleri: FC<SectionVincCesitleriProps> = ({ className = '', categories }) => {
  return (
    <div className={className}>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map((cat) => (
          <Link
            key={cat.id}
            href={cat.href}
            className="group relative flex flex-col rounded-2xl border border-neutral-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary-300 hover:shadow-lg hover:shadow-primary-100/60 focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:outline-none motion-reduce:transform-none dark:border-neutral-700 dark:bg-neutral-900 dark:hover:border-primary-500/50 dark:hover:shadow-none"
          >
            <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-neutral-100 text-neutral-600 transition-colors duration-300 group-hover:bg-primary-50 group-hover:text-primary-600 dark:bg-neutral-800 dark:text-neutral-300 dark:group-hover:bg-primary-500/10 dark:group-hover:text-primary-400">
              {ICONS[cat.handle] ?? ICONS['vinc']}
            </span>

            <h3 className="mt-5 text-lg font-semibold text-neutral-900 dark:text-neutral-100">
              {cat.name}
            </h3>
            <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">{cat.description}</p>

            <span className="mt-auto flex items-center gap-1 pt-5 text-sm font-medium text-primary-600 dark:text-primary-400">
              İncele
              <svg
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transform-none"
              >
                <path d="M3 10h14M11 4l6 6-6 6" />
              </svg>
            </span>
          </Link>
        ))}

        {/* 8. kart: ızgarayı tamamlayan teklif CTA'sı */}
        <Link
          href="/iletisim"
          className="group relative flex flex-col justify-between rounded-2xl bg-primary-600 p-6 text-white transition-all duration-300 hover:-translate-y-1 hover:bg-primary-700 hover:shadow-lg hover:shadow-primary-200 focus-visible:ring-2 focus-visible:ring-primary-300 focus-visible:outline-none motion-reduce:transform-none dark:hover:shadow-none"
        >
          <div>
            <h3 className="text-lg font-semibold">Hangisi size uygun, emin değil misiniz?</h3>
            <p className="mt-1 text-sm text-primary-100">
              Yükünüzü ve sahanızı anlatın, doğru vinci birlikte seçelim.
            </p>
          </div>
          <span className="mt-5 inline-flex w-fit items-center gap-1 rounded-full bg-white px-4 py-2 text-sm font-medium text-primary-700">
            Ücretsiz Teklif Alın
            <svg
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transform-none"
            >
              <path d="M3 10h14M11 4l6 6-6 6" />
            </svg>
          </span>
        </Link>
      </div>
    </div>
  )
}

export default SectionVincCesitleri
