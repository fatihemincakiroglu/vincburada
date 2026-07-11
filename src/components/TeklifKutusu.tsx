import Link from 'next/link'
import { FC } from 'react'

interface Props {
  /** Örn: "Yale VS Serisi" */
  urunAdi: string
  /** wa.me linkine eklenecek, encode edilmiş mesaj */
  whatsappMesaj: string
  className?: string
}

const TeklifKutusu: FC<Props> = ({ urunAdi, whatsappMesaj, className = '' }) => {
  return (
    <div
      className={`sticky top-28 overflow-hidden rounded-3xl bg-neutral-900 shadow-xl shadow-neutral-900/20 dark:bg-neutral-800 ${className}`}
    >
      {/* Emniyet şeridi */}
      <div
        aria-hidden="true"
        className="h-1.5"
        style={{ background: 'repeating-linear-gradient(45deg, #ea580c 0 14px, #171717 14px 28px)' }}
      />

      <div className="p-6 sm:p-7">
        {/* Müsaitlik rozeti */}
        <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-400">
          <span className="relative flex size-2" aria-hidden="true">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
          </span>
          Aynı gün dönüş yapıyoruz
        </span>

        <p className="mt-4 text-xl font-semibold text-white">Bu model için teklif alın</p>
        <p className="mt-2 text-sm/6 text-neutral-400">
          {urunAdi} güncel kiralama fiyatı ve müsaitlik bilgisi için bize ulaşın.
        </p>

        <div className="mt-6 flex flex-col gap-3">
          <a
            href={`https://wa.me/905323039089?text=${whatsappMesaj}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-2.5 rounded-xl bg-orange-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-orange-600/30 transition hover:bg-orange-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
          >
            <svg viewBox="0 0 32 32" fill="currentColor" aria-hidden="true" className="size-5">
              <path d="M16.004 3.2c-7.06 0-12.8 5.74-12.8 12.8 0 2.256.59 4.46 1.712 6.4L3.2 28.8l6.582-1.686a12.74 12.74 0 0 0 6.218 1.606h.006c7.058 0 12.798-5.74 12.798-12.8s-5.74-12.72-12.8-12.72Zm5.84 15.42c-.32-.16-1.892-.934-2.186-1.04-.292-.108-.506-.16-.718.16-.212.32-.824 1.04-1.01 1.252-.186.214-.372.24-.692.08-.32-.16-1.35-.498-2.572-1.588-.95-.848-1.592-1.894-1.778-2.214-.186-.32-.02-.492.14-.652.144-.144.32-.372.48-.56.16-.186.212-.32.32-.532.106-.214.052-.4-.028-.56-.08-.16-.718-1.732-.984-2.372-.26-.622-.522-.538-.718-.548l-.612-.01c-.212 0-.558.08-.85.4-.292.32-1.116 1.09-1.116 2.66s1.142 3.088 1.302 3.3c.16.214 2.248 3.432 5.446 4.812 2.28.984 2.744.876 3.824.746.612-.092 1.892-.774 2.158-1.522.266-.746.266-1.386.186-1.52-.08-.134-.292-.214-.612-.374Z" />
            </svg>
            WhatsApp ile Teklif Al
          </a>
          <Link
            href="/iletisim"
            className="flex items-center justify-center rounded-xl border border-neutral-700 px-6 py-3.5 text-sm font-semibold text-neutral-200 transition hover:border-neutral-500 hover:bg-white/5"
          >
            İletişim Formu
          </Link>
        </div>

        {/* Telefon */}
        <a
          href="tel:+905323039089"
          className="mt-5 flex items-center justify-center gap-2.5 rounded-xl bg-white/5 px-4 py-3 transition hover:bg-white/10"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="size-4 text-orange-500">
            <path d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" />
          </svg>
          <span className="text-lg font-bold tracking-wide text-white">0532 303 90 89</span>
        </a>

        {/* Güven satırı */}
        <ul className="mt-6 grid grid-cols-3 gap-2 border-t border-white/10 pt-5 text-center">
          {[
            { label: 'Operatör Dahil' },
            { label: 'Sigortalı' },
            { label: 'Belgeli Ekipman' },
          ].map((item) => (
            <li key={item.label} className="flex flex-col items-center gap-1.5">
              <svg viewBox="0 0 20 20" fill="currentColor" className="size-4 text-orange-500" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M16.4 3.9a.75.75 0 0 1 .2 1l-7.1 10.5a.75.75 0 0 1-1.15.1l-4.1-4.1a.75.75 0 1 1 1.06-1.06l3.46 3.46 6.58-9.7a.75.75 0 0 1 1.04-.2Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-[11px] font-medium text-neutral-400">{item.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default TeklifKutusu
