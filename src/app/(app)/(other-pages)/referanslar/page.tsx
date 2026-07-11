import BgGlassmorphism from '@/components/BgGlassmorphism'
import SectionClientSay from '@/components/SectionClientSay'
import BackgroundSection from '@/components/BackgroundSection'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Referanslarımız - Çalıştığımız Firmalar',
  description:
    'THY, Ülker, Çalık Holding, Sinpaş ve Alarko Carrier başta olmak üzere 80\'den fazla firmaya vinç kiralama hizmeti sunduk. Referans firmalarımızı inceleyin.',
}

// Öne çıkan referans logoları (vinc.net arşivimizden)
const logolar = [
  'https://vinc.net/wp-content/uploads/2025/12/24_1.jpg',
  'https://vinc.net/wp-content/uploads/2025/12/25_1.png',
  'https://vinc.net/wp-content/uploads/2025/12/20_1.gif',
  'https://vinc.net/wp-content/uploads/2025/12/21_1.jpg',
  'https://vinc.net/wp-content/uploads/2025/12/26_1.png',
  'https://vinc.net/wp-content/uploads/2025/12/23_1.jpg',
  'https://vinc.net/wp-content/uploads/2025/12/27_1.png',
  'https://vinc.net/wp-content/uploads/2025/12/22_1.jpg',
  'https://vinc.net/wp-content/uploads/2025/12/29_1.jpg',
  'https://vinc.net/wp-content/uploads/2025/12/28_1.jpg',
]

const firmalar = [
  'OYTAŞ YILDIZ ULUSLAR ARASI İNŞ. LTD. ŞTİ.',
  'ÖZKÖK YAPI TURZ. SAN. TİC. LTD. ŞTİ.',
  'KÖSEDAĞ İNŞ. ve TİC. LTD. ŞTİ.',
  'NAC GRUP DİJİTAL BİLG. SAN. TİC. LTD. ŞTİ.',
  'ARASCAN İNŞ. TAH ELEKT. SAN. TİC. LTD.',
  'GÜL KELEŞOĞLU İNŞAAT SAN. ve DIŞ TİC. A.Ş.',
  'ÖZKOK YAPI TRZM. LTD. ŞTİ.',
  'FANTOM PRODÜKSİYON',
  'TEKSER KLİMA SİS.',
  'MEGA TEKNİK YAY SAN. LTD. ŞTİ.',
  'MEGA MAKİNA SAN.',
  'REMA İNŞ. SAN. TİC. LTD.',
  'BSM ALÜ. İNŞ. SAN. TİC. LTD.',
  'PAYSA PREFABRİK İNŞ. SAN. TİC. LTD.',
  'DİYMAR İNŞ. SAN. TİC. LTD.',
  'PROMEK MÜH. ISIT. SAN.',
  'QUINN EMLAK YATIRIM İNŞ. VE TİC. A.Ş.',
  'DELTA DEK. İNŞ. MİM.',
  'PHERMA VİSİON A.Ş.',
  'MONO MİM. TAAH. DEK. SAN. TİC. ŞTİ.',
  'REAL HİPERMARKETLER ZİNCİRİ A.Ş.',
  'TEMPO AKS SAN. TİC. LTD. ŞTİ.',
  'NASAKOMA İNŞ. SAN. TİC. A.Ş.',
  'GÜNEY DİŞ DEPOSU TİC. SAN. A.Ş.',
  'ÜLKER GIDA SAN. TİC. A.Ş.',
  'SKY TEKS. SAĞLIK VE MATBAA',
  'MURAT MAK SAN. TİC. A.Ş.',
  'ÇEKMECE NÜKLEER ARAŞTIRMA ve EĞİTİM MERKEZİ',
  'NİLFER DEMİR ÇELİK SAN. TİC. LTD. ŞTİ.',
  'MÜSTAKİLLER İNŞAAT SAN. TİC. A.Ş.',
  'HOROZ LOJİSTİK KARGO A.Ş.',
  'THY A.Ş.',
  'ÖZYURTLAR İNŞ. ve YAPI SAN. TİC. LTD. ŞTİ.',
  'YAPI ÇÖZÜMLERİ İNŞ. SAN. TİC. LTD.',
  'ÇALIK HOLDİNG A.Ş.',
  'GÜL YAPI İNŞ. SAN. TİC. LTD.',
  'ICS İÇ VE DIŞ TİC. MÜH. İNŞ. TAAH.',
  'GÜLLÜOĞLU GIDA SAN. A.Ş.',
  'BOĞAZİÇİ ELEKTRİK DAĞITIM A.Ş.',
  'DEMİRER KAB. TES. SAN. VE TİC. A.Ş.',
  'ARK YAPI A.Ş. / MİLPA TİC. VE SAN. PAZ. A.Ş.',
  'AĞAÇKAKAN İNŞ. SAN. TİC. LTD.',
  'NESİL İNŞ. H. PROJ. SAN. TİC. LTD.',
  'MANYET MAN. TUT. TİC. SAN. LTD.',
  'ÇELİK ÇELİK YAPI ÇELİK END.',
  'PAKSU İNŞ. TUR. M. SU GETİRME SAN.',
  'ELOLOJİK ENERJİ LTD. ŞTİ.',
  'SEÇ İNŞ. SAN. TİC. LTD.',
  'DEKART İNŞ. SAN. TİC. LTD.',
  'SEZGİN ÖRME TRZM SAN. LTD. ŞTİ.',
  'YAY TEK. VE REK. TİC. SAN. A.Ş.',
  'FUJITSU TECHNOLOGY SOLUTIONS LTD. ŞTİ.',
  'METRO GRUP A.Ş. MANAGEMENT EMLAK',
  'SKALA İNŞ. MÜH. MÜŞ.',
  'ONOK ÇELİK YAPI',
  'DELTA PROJE İNŞ. SAN. TİC. LTD.',
  'FABRİCART MEMBRAN VE METAL İNŞ. SAN. TİC. LTD.',
  'ÇETİN KAYALAR TEKSTİL İNŞ. SAN. TİC. LTD.',
  'ÖNDER İNŞ. SAN. TİC. LTD.',
  'ÇEKON İNŞ. SAN. TİC. LTD.',
  'KAYZEN YAPI ÜR. VE SİST. İNŞ. SAN. TİC. LTD.',
  'KEBAN MÜH. MİM. İNŞ. SAN. TİC. LTD.',
  'ORAY MEKANİK İNŞ. TES. LTD. ŞTİ.',
  'FENSA ÇELİK YAPI İNŞ. MAK. SAN.',
  'TERKMO SOĞUTMA SAN. A.Ş.',
  'TEMA ALÜMİNYUM SAN. A.Ş.',
  'SİNPAŞ YATIRIM VE İŞL. TİC. A.Ş.',
  'BEYAZ İNŞ. SAN. TİC. LTD.',
  'ALARKO CARRIER SAN. VE TİC. A.Ş.',
  'YEŞİL İNŞ. GAYRİMENKUL YATIRIM',
  'AYCAN DENİZCİLİK',
  'SERVET GAYRİMENKUL YATIRIM ORT.',
  'LULSOY ELEKT. İNŞ. TAAH. TİC. A.Ş.',
  'ASM İNŞ. SAN. TİC. LTD.',
  'ÇELİKÖRS İNŞ. SAN. TİC. LTD.',
  'İMOT İNŞ. MAK. SAN.',
  'AMAÇ ELEKTRİK TAAH.',
  'DÜZEY TIBBİ LTD. ŞTİ.',
  'TANRIVERDİ MEN. A.Ş.',
  'BAŞAK İNŞ. SAN. TİC. LTD.',
  'EFOR İNŞ. SAN. TİC. LTD.',
]

const istatistikler = [
  { deger: '80+', etiket: 'Referans Firma' },
  { deger: '10+', etiket: 'Farklı Sektör' },
  { deger: '1000+', etiket: 'Tamamlanan Operasyon' },
  { deger: '7/24', etiket: 'Saha Desteği' },
]

const PageReferanslar = () => {
  return (
    <div className="relative overflow-hidden">
      <BgGlassmorphism />

      {/* Logo kayan şerit animasyonu */}
      <style>{`
        @keyframes referans-kaydir {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .referans-serit { animation: referans-kaydir 32s linear infinite; }
        .referans-serit-sarici:hover .referans-serit { animation-play-state: paused; }
        @media (prefers-reduced-motion: reduce) {
          .referans-serit { animation: none; }
        }
      `}</style>

      <div className="container flex flex-col gap-y-16 py-16 lg:gap-y-20 lg:py-24">
        {/* BAŞLIK */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full bg-orange-600/10 px-4 py-1.5 text-xs font-semibold tracking-widest text-orange-600 uppercase dark:text-orange-400">
            Güvenin Adresi
          </span>
          <h1 className="mt-5 text-4xl font-semibold sm:text-5xl">Referanslarımız</h1>
          <p className="mt-6 text-base/7 text-neutral-500 sm:text-lg dark:text-neutral-400">
            Havacılıktan gıdaya, enerjiden inşaata; Türkiye&apos;nin önde gelen kuruluşları kaldırma operasyonlarında
            bize güvendi. İşte birlikte çalıştığımız firmalardan bazıları.
          </p>
        </div>

        {/* İSTATİSTİKLER */}
        <div className="relative overflow-hidden rounded-3xl bg-neutral-900 dark:bg-neutral-800">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-1.5"
            style={{ background: 'repeating-linear-gradient(45deg, #ea580c 0 16px, #171717 16px 32px)' }}
          />
          <dl className="grid grid-cols-2 divide-white/10 sm:grid-cols-4 sm:divide-x">
            {istatistikler.map((stat) => (
              <div key={stat.etiket} className="px-6 py-10 text-center">
                <dd className="text-3xl font-bold text-orange-500 sm:text-4xl">{stat.deger}</dd>
                <dt className="mt-2 text-xs font-medium tracking-widest text-neutral-400 uppercase">{stat.etiket}</dt>
              </div>
            ))}
          </dl>
        </div>

        {/* LOGO ŞERİDİ */}
        <div>
          <p className="mb-8 text-center text-xs font-semibold tracking-[0.2em] text-neutral-400 uppercase dark:text-neutral-500">
            Öne Çıkan Referanslarımız
          </p>
          <div className="referans-serit-sarici relative overflow-hidden">
            {/* Kenar yumuşatma */}
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent sm:w-28 dark:from-neutral-900" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent sm:w-28 dark:from-neutral-900" />

            <div className="referans-serit flex w-max gap-6 sm:gap-8">
              {[...logolar, ...logolar].map((src, i) => (
                <div
                  key={i}
                  className="flex h-28 w-44 shrink-0 items-center justify-center rounded-2xl border border-neutral-200 bg-white p-5 grayscale transition duration-300 hover:grayscale-0 sm:h-32 sm:w-52 dark:border-neutral-700"
                >
                  <Image
                    src={src}
                    alt={`Referans firma logosu ${(i % logolar.length) + 1}`}
                    width={160}
                    height={80}
                    className="max-h-full w-auto object-contain"
                    unoptimized
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* FİRMA LİSTESİ */}
        <div>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-2xl font-semibold sm:text-3xl">Çalıştığımız Firmalar</h2>
              <div className="mt-3 h-1 w-14 rounded bg-orange-600" aria-hidden="true" />
            </div>
            <p className="text-sm text-neutral-500 dark:text-neutral-400">{firmalar.length} firma · A&apos;dan Z&apos;ye tam liste</p>
          </div>

          <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {firmalar.map((firma) => (
              <li
                key={firma}
                className="group relative flex items-center gap-3 overflow-hidden rounded-xl border border-neutral-200 bg-white px-4 py-3.5 transition duration-300 hover:-translate-y-1 hover:border-orange-500/60 hover:shadow-lg hover:shadow-orange-600/5 dark:border-neutral-700 dark:bg-neutral-900"
              >
                {/* Sol turuncu vurgu çizgisi */}
                <span
                  aria-hidden="true"
                  className="absolute inset-y-0 left-0 w-1 origin-bottom scale-y-0 bg-orange-600 transition-transform duration-300 group-hover:scale-y-100"
                />
                <svg
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  className="size-4 shrink-0 text-neutral-300 transition-colors group-hover:text-orange-600 dark:text-neutral-600"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 16.5v-13h-.25a.75.75 0 0 1 0-1.5h12.5a.75.75 0 0 1 0 1.5H16v13h.25a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1-.75-.75v-2.5a.75.75 0 0 0-.75-.75h-2.5a.75.75 0 0 0-.75.75v2.5a.75.75 0 0 1-.75.75h-3.5a.75.75 0 0 1 0-1.5H4Zm3-11a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm4.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1ZM7 9a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1A.5.5 0 0 1 7 10V9Zm4.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V9a.5.5 0 0 0-.5-.5h-1Z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-[13px]/5 font-medium text-neutral-700 dark:text-neutral-300">{firma}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* MÜŞTERİ YORUMLARI */}
        <div className="relative py-12">
          <BackgroundSection />
          <SectionClientSay />
        </div>

        {/* CTA */}
        <div className="relative overflow-hidden rounded-3xl bg-neutral-900 px-6 py-14 text-center sm:px-12 dark:bg-neutral-800">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-1.5"
            style={{ background: 'repeating-linear-gradient(45deg, #ea580c 0 16px, #171717 16px 32px)' }}
          />
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">Sıradaki referansımız siz olun</h2>
          <p className="mx-auto mt-4 max-w-xl text-base/7 text-neutral-300">
            Projeniz için güvenilir bir kaldırma çözümü arıyorsanız, aynı gün içinde yazılı teklifinizi hazırlayalım.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/iletisim"
              className="rounded-full bg-orange-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-orange-600/25 transition hover:bg-orange-500"
            >
              Hemen Teklif Alın
            </Link>
            <a
              href="tel:+905323039089"
              className="rounded-full border border-white/20 px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              0532 303 90 89
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PageReferanslar
