import katalogKapak from '@/images/vinc/galeri-2.webp'
import Image from 'next/image'
import { FC } from 'react'

interface Props {
  className?: string
}

// Katalog PDF'i /public/vincburada-katalog-2026.pdf konumundadır ve
// site içindeki /katalog sayfasında gömülü olarak görüntülenir.
const KATALOG_URL = '/katalog'

const SectionKatalog: FC<Props> = ({ className = '' }) => {
  return (
    <div className={className}>
      <div className="relative overflow-hidden rounded-3xl bg-neutral-900 dark:bg-neutral-800">
        {/* Emniyet şeridi vurgusu */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-1.5"
          style={{
            background: 'repeating-linear-gradient(45deg, #ea580c 0 16px, #171717 16px 32px)',
          }}
        />

        <div className="relative flex flex-col items-center gap-10 px-6 py-12 sm:px-12 lg:flex-row lg:gap-16 lg:py-14">
          {/* Metin */}
          <div className="max-w-xl text-center lg:text-left">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold tracking-wider text-orange-400 uppercase">
              <svg viewBox="0 0 24 24" fill="currentColor" className="size-4" aria-hidden="true">
                <path d="M6 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6H6Zm7 1.5L18.5 9H13V3.5ZM8 13h8v1.5H8V13Zm0 3.5h8V18H8v-1.5Z" />
              </svg>
              PDF Katalog
            </span>
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Dijital Katalog</h2>
            <p className="mt-4 text-base/7 text-neutral-300">
              Filomuzdaki tüm vinç, manlift ve forklift modellerinin kapasite ve teknik özelliklerini tek dosyada
              inceleyin. Kataloğu doğrudan sitede görüntüleyin veya PDF olarak indirin.
            </p>
            <a
              href={KATALOG_URL}
              className="mt-8 inline-flex items-center gap-2.5 rounded-full bg-orange-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-orange-600/25 transition hover:bg-orange-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
            >
              Kataloğu İncele
              <svg viewBox="0 0 20 20" fill="currentColor" className="size-4" aria-hidden="true">
                <path d="M3 10a.75.75 0 0 1 .75-.75h10.6L10.7 5.8a.75.75 0 1 1 1.1-1.02l4.9 4.7a.75.75 0 0 1 0 1.04l-4.9 4.7a.75.75 0 1 1-1.1-1.02l3.65-3.45H3.75A.75.75 0 0 1 3 10Z" />
              </svg>
            </a>
          </div>

          {/* Eğik katalog kapağı */}
          <div className="relative lg:ms-auto" aria-hidden="true">
            <div className="relative w-64 rotate-6 transition-transform duration-300 hover:rotate-3 sm:w-72">
              {/* Arkadaki sayfa */}
              <div className="absolute -bottom-2 -left-2 h-full w-full rounded-xl bg-neutral-700" />
              {/* Kapak */}
              <div className="relative overflow-hidden rounded-xl shadow-2xl">
                <Image src={katalogKapak} alt="" className="aspect-[3/4] w-full object-cover" sizes="288px" />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p className="text-lg font-bold text-white">
                    vinç<span className="text-orange-500">burada</span>
                  </p>
                  <p className="text-xs tracking-widest text-neutral-300 uppercase">Ekipman Kataloğu · 2026</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SectionKatalog
