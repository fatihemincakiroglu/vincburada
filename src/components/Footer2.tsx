import { getMarkalar } from '@/data/markalar'
import Logo from '@/shared/Logo'
import Link from 'next/link'

const navigation = {
  products: [
    { name: 'Vinç', href: '/vinc' },
    { name: 'Sepetli Vinç', href: '/sepetli-vinc' },
    { name: 'Kule Vinç', href: '/kule-vinc' },
    { name: 'Elektrikli Vinç', href: '/elektrikli-vinc' },
    { name: 'Mobil Vinç', href: '/mobil-vinc' },
    { name: 'Hiyap Vinç', href: '/hiyap-vinc' },
    { name: 'Mini Vinç', href: '/mini-vinc' },
  ],
  company: [
    { name: 'Hakkımızda', href: '/hakkimizda' },
    { name: 'Referanslar', href: '/referanslar' },
    { name: 'Blog', href: '/blog' },
    { name: 'SSS', href: '/sss' },
    { name: 'İletişim', href: '/iletisim' },
  ],
}

/** Footer arka planı: kule vinç ve şantiye silüeti */
const CraneSilhouette = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 1440 320"
    preserveAspectRatio="xMidYMax slice"
    className="pointer-events-none absolute inset-x-0 bottom-0 h-56 w-full text-white/[0.045] sm:h-72"
    fill="currentColor"
  >
    {/* Zemin */}
    <rect x="0" y="312" width="1440" height="8" />

    {/* Sol kule vinç */}
    <g>
      <rect x="180" y="60" width="14" height="252" />
      <rect x="80" y="60" width="360" height="8" />
      {/* Kule kafes çaprazları */}
      <path d="M180 90l14 22v-22l-14 22M180 134l14 22v-22l-14 22M180 178l14 22v-22l-14 22M180 222l14 22v-22l-14 22M180 266l14 22v-22l-14 22" stroke="currentColor" strokeWidth="3" fill="none" />
      {/* Tepe üçgeni */}
      <path d="M187 20L160 60h54L187 20Z" />
      {/* Bom halatları */}
      <path d="M187 24L100 62M187 24L430 66" stroke="currentColor" strokeWidth="3" fill="none" />
      {/* Karşı ağırlık */}
      <rect x="84" y="68" width="40" height="20" />
      {/* Kanca */}
      <path d="M392 68v100" stroke="currentColor" strokeWidth="3" />
      <path d="M392 168a12 12 0 1 0 12 12" stroke="currentColor" strokeWidth="4" fill="none" />
      {/* Kabin */}
      <rect x="172" y="66" width="30" height="24" />
    </g>

    {/* Binalar */}
    <rect x="480" y="200" width="90" height="112" />
    <rect x="590" y="160" width="70" height="152" />
    <rect x="600" y="140" width="50" height="20" />
    <rect x="960" y="220" width="110" height="92" />
    <rect x="690" y="240" width="60" height="72" />

    {/* Sağ kule vinç (daha küçük) */}
    <g>
      <rect x="1180" y="120" width="12" height="192" />
      <rect x="1100" y="120" width="280" height="7" />
      <path d="M1186 90l-22 30h44l-22-30Z" />
      <path d="M1186 94l-80 32M1186 94l188 34" stroke="currentColor" strokeWidth="3" fill="none" />
      <rect x="1104" y="127" width="32" height="16" />
      <path d="M1344 127v70" stroke="currentColor" strokeWidth="3" />
      <path d="M1344 197a10 10 0 1 0 10 10" stroke="currentColor" strokeWidth="4" fill="none" />
      <rect x="1173" y="125" width="26" height="20" />
      {/* Askıdaki yük */}
      <rect x="1330" y="218" width="30" height="22" />
    </g>

    {/* Mobil vinç silüeti */}
    <g>
      <rect x="800" y="284" width="120" height="20" rx="4" />
      <circle cx="826" cy="308" r="10" />
      <circle cx="856" cy="308" r="10" />
      <circle cx="894" cy="308" r="10" />
      <path d="M820 288L920 190l10 8-100 98" />
      <path d="M926 196v50" stroke="currentColor" strokeWidth="3" />
      <path d="M926 246a8 8 0 1 0 8 8" stroke="currentColor" strokeWidth="4" fill="none" />
      <rect x="890" y="266" width="34" height="20" rx="3" />
    </g>
  </svg>
)

export default async function Footer2() {
  const markalar = await getMarkalar()
  const populerMarkalar = markalar.slice(0, 6)

  return (
    <footer className="relative overflow-hidden bg-neutral-950">
      {/* Emniyet şeridi */}
      <div
        aria-hidden="true"
        className="h-1.5"
        style={{ background: 'repeating-linear-gradient(45deg, #ea580c 0 18px, #0a0a0a 18px 36px)' }}
      />

      <CraneSilhouette />

      <div className="relative container pt-16 pb-8 sm:pt-20">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          {/* Marka bloğu */}
          <div className="max-w-sm space-y-7">
            <div className="inline-block rounded-xl bg-white/95 px-4 py-2.5">
              <Logo className="w-32" />
            </div>
            <p className="text-sm/6 text-neutral-400">
              Vinç, forklift ve manlift kiralamada güvenilir çözüm ortağınız. Sertifikalı operatör, sigortalı ekipman
              ve aynı gün teklif ile İstanbul genelinde hizmetinizdeyiz.
            </p>

            <div className="flex flex-col gap-3">
              <a
                href="tel:+905323039089"
                className="group inline-flex items-center gap-3 text-lg font-semibold text-white transition hover:text-orange-400"
              >
                <span className="flex size-9 items-center justify-center rounded-full bg-orange-600 text-white transition group-hover:bg-orange-500">
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="size-4">
                    <path d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" />
                  </svg>
                </span>
                0532 303 90 89
              </a>
              <a
                href="https://wa.me/905323039089"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-neutral-400 transition hover:text-emerald-400"
              >
                <svg viewBox="0 0 32 32" fill="currentColor" aria-hidden="true" className="size-4 text-emerald-500">
                  <path d="M16.004 3.2c-7.06 0-12.8 5.74-12.8 12.8 0 2.256.59 4.46 1.712 6.4L3.2 28.8l6.582-1.686a12.74 12.74 0 0 0 6.218 1.606h.006c7.058 0 12.798-5.74 12.798-12.8s-5.74-12.72-12.8-12.72Zm5.84 15.42c-.32-.16-1.892-.934-2.186-1.04-.292-.108-.506-.16-.718.16-.212.32-.824 1.04-1.01 1.252-.186.214-.372.24-.692.08-.32-.16-1.35-.498-2.572-1.588-.95-.848-1.592-1.894-1.778-2.214-.186-.32-.02-.492.14-.652.144-.144.32-.372.48-.56.16-.186.212-.32.32-.532.106-.214.052-.4-.028-.56-.08-.16-.718-1.732-.984-2.372-.26-.622-.522-.538-.718-.548l-.612-.01c-.212 0-.558.08-.85.4-.292.32-1.116 1.09-1.116 2.66s1.142 3.088 1.302 3.3c.16.214 2.248 3.432 5.446 4.812 2.28.984 2.744.876 3.824.746.612-.092 1.892-.774 2.158-1.522.266-.746.266-1.386.186-1.52-.08-.134-.292-.214-.612-.374Z" />
                </svg>
                WhatsApp ile hemen teklif alın
              </a>
            </div>
          </div>

          {/* Link sütunları */}
          <div className="mt-16 grid grid-cols-2 gap-8 sm:grid-cols-4 xl:col-span-2 xl:mt-0">
            <div>
              <h3 className="text-xs font-semibold tracking-widest text-orange-500 uppercase">Ürünlerimiz</h3>
              <ul role="list" className="mt-6 space-y-3.5">
                {navigation.products.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-sm/6 text-neutral-400 transition hover:text-white">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-semibold tracking-widest text-orange-500 uppercase">Markalar</h3>
              <ul role="list" className="mt-6 space-y-3.5">
                {populerMarkalar.map((marka) => (
                  <li key={marka.handle}>
                    <Link
                      href={`/markalar/${marka.handle}`}
                      className="text-sm/6 text-neutral-400 transition hover:text-white"
                    >
                      {marka.marka}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/markalar"
                    className="text-sm/6 font-semibold text-orange-500 transition hover:text-orange-400"
                  >
                    Tüm Markalar →
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-semibold tracking-widest text-orange-500 uppercase">Kurumsal</h3>
              <ul role="list" className="mt-6 space-y-3.5">
                {navigation.company.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-sm/6 text-neutral-400 transition hover:text-white">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-semibold tracking-widest text-orange-500 uppercase">İletişim</h3>
              <ul role="list" className="mt-6 space-y-3.5 text-sm/6 text-neutral-400">
                <li>
                  <a href="tel:+905323039089" className="transition hover:text-white">
                    0532 303 90 89
                  </a>
                </li>
                <li>
                  <span>vincburada.com.tr</span>
                </li>
                <li>
                  <a
                    href="https://maps.app.goo.gl/JXCzUwRJANU6cKvZ9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition hover:text-white"
                  >
                    İkitelli OSB, Giyim Sanatkarları İş ve Ticaret Merkezi D:4.Ada A Blok Kat:1 D:112, 34490
                    Başakşehir/İstanbul
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-white/10 pt-8 sm:mt-20 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm/6 text-neutral-500">&copy; Fatih Emin Çakıroğlu 2026 Tüm Hakları Saklıdır.</p>
          <p className="text-xs text-neutral-600">Vinç · Sepetli Vinç · Kule Vinç · Mobil Vinç · Hiyap Vinç · Mini Vinç</p>
        </div>
      </div>
    </footer>
  )
}
