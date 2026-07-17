import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dijital Katalog 2026 - Kiralık Vinç Çeşitleri',
  description:
    'Vinç Burada dijital kataloğu: kule vinç, mobil vinç, sepetli vinç, hiyap, elektrikli ve mini vinç modellerinin kapasite ve teknik özellikleri tek dosyada.',
}

const KATALOG_PDF = '/vincburada-katalog-2026.pdf'
const WHATSAPP_URL =
  'https://wa.me/905323039089?text=' + encodeURIComponent('Merhaba, dijital kataloğunuzu almak istiyorum.')

export default function KatalogPage() {
  return (
    <div className="container py-12 lg:py-16">
      {/* Başlık + eylemler */}
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold tracking-wider text-orange-700 uppercase dark:bg-orange-500/10 dark:text-orange-400">
            PDF Katalog · 2026
          </span>
          <h1 className="mt-3 text-3xl font-semibold text-neutral-900 sm:text-4xl dark:text-neutral-100">
            Dijital Katalog
          </h1>
          <p className="mt-3 text-neutral-500 dark:text-neutral-400">
            Kule, mobil, sepetli, hiyap, elektrikli ve mini vinç modellerimizin kapasite ve teknik
            özelliklerini aşağıda inceleyin.
          </p>
        </div>
        <div className="flex shrink-0 flex-wrap gap-3">
          <a
            href={KATALOG_PDF}
            download="vincburada-katalog-2026.pdf"
            className="inline-flex items-center gap-2 rounded-full bg-orange-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-orange-500"
          >
            <svg viewBox="0 0 20 20" fill="currentColor" className="size-4" aria-hidden="true">
              <path d="M10 2a.75.75 0 0 1 .75.75v8.19l2.72-2.72a.75.75 0 1 1 1.06 1.06l-4 4a.75.75 0 0 1-1.06 0l-4-4a.75.75 0 1 1 1.06-1.06l2.72 2.72V2.75A.75.75 0 0 1 10 2Z" />
              <path d="M3 14.25a.75.75 0 0 1 .75.75v1.5c0 .41.34.75.75.75h11c.41 0 .75-.34.75-.75V15a.75.75 0 0 1 1.5 0v1.5A2.25 2.25 0 0 1 15.5 18.75h-11A2.25 2.25 0 0 1 2.25 16.5V15a.75.75 0 0 1 .75-.75Z" />
            </svg>
            PDF İndir
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-neutral-300 px-5 py-2.5 text-sm font-semibold text-neutral-700 transition hover:border-neutral-400 dark:border-neutral-600 dark:text-neutral-200 dark:hover:border-neutral-400"
          >
            WhatsApp&apos;tan İste
          </a>
        </div>
      </div>

      {/* Gömülü PDF görüntüleyici */}
      <div className="mt-8 overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-900">
        <object
          data={`${KATALOG_PDF}#view=FitH`}
          type="application/pdf"
          className="h-[75vh] min-h-[480px] w-full"
          aria-label="Vinç Burada Dijital Katalog 2026"
        >
          {/* Tarayıcı gömülü PDF desteklemiyorsa (çoğu mobil tarayıcı) */}
          <div className="flex h-full min-h-[480px] flex-col items-center justify-center gap-4 p-8 text-center">
            <p className="text-neutral-600 dark:text-neutral-300">
              Tarayıcınız kataloğu bu sayfada gösteremiyor.
            </p>
            <a
              href={KATALOG_PDF}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-orange-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-500"
            >
              Kataloğu Yeni Sekmede Aç
            </a>
          </div>
        </object>
      </div>

      <p className="mt-4 text-xs text-neutral-400 dark:text-neutral-500">
        Teknik değerler üretici genel katalog verilerine dayanan yaklaşık referanslardır. Güncel stok
        ve projenize uygunluk için{' '}
        <a href="tel:+905323039089" className="font-medium text-orange-600 hover:underline dark:text-orange-400">
          0532 303 90 89
        </a>
        &apos;u arayın.
      </p>
    </div>
  )
}
