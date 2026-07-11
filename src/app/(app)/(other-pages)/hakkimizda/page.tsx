import BackgroundSection from '@/components/BackgroundSection'
import BgGlassmorphism from '@/components/BgGlassmorphism'
import SectionClientSay from '@/components/SectionClientSay'
import rightImg from '@/images/vinc/hero-hakkimizda.webp'
import { Metadata } from 'next'
import Link from 'next/link'
import { ReactNode } from 'react'
import SectionHero from './SectionHero'

export const metadata: Metadata = {
  title: 'Hakkımızda - 20+ Yıllık Vinç Kiralama Tecrübesi',
  description:
    'Vinç Burada; 20 yılı aşkın tecrübesiyle vinç, sepetli vinç, kule vinç, mobil vinç, forklift ve manlift kiralama alanında güvenilir, hızlı ve çözüm odaklı hizmet sunar.',
}

// ---------------------------------------------------------------------------
// İçerik
// ---------------------------------------------------------------------------

const misyonVizyon: { baslik: string; metin: string; icon: ReactNode }[] = [
  {
    baslik: 'Misyonumuz',
    metin:
      'Güvenli, hızlı ve verimli ekipman kiralama hizmetleri sunarak işletmelerin proje süreçlerini kolaylaştırmak; her sahada kaliteli, sürdürülebilir ve çözüm odaklı bir hizmet anlayışıyla değer üretmek.',
    icon: (
      // Hedef
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" className="size-7">
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="12" cy="12" r="1.2" fill="currentColor" />
      </svg>
    ),
  },
  {
    baslik: 'Vizyonumuz',
    metin:
      "Türkiye'nin en güvenilir vinç, platform, forklift ve manlift kiralama markalarından biri olmak; teknolojiyi yakından takip ederek her projeye en modern ve güvenli ekipmanlarla destek vermek.",
    icon: (
      // Ufuk / yükseliş
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="size-7">
        <path d="M3 17l6-6 4 4 8-8" />
        <path d="M15 7h6v6" />
      </svg>
    ),
  },
  {
    baslik: 'Değerlerimiz',
    metin:
      'İş güvenliği, müşteri memnuniyeti, şeffaf hizmet anlayışı, zamanında teslim ve düzenli bakımlı ekipmanlarla profesyonel çalışma kültürünü sürdürülebilir şekilde geliştirmek.',
    icon: (
      // Kalkan / güven
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="size-7">
        <path d="M12 3l7 3v5c0 4.5-3 8.5-7 10-4-1.5-7-5.5-7-10V6l7-3Z" />
        <path d="m9 12 2 2 4-4.5" />
      </svg>
    ),
  },
]

const tecrubeRozetleri = [
  'Köklü Deneyim',
  'Güçlü Ekip ve Operasyon',
  'Geniş ve Bakımlı Filo',
  'Güven Odaklı Hizmet',
  'Zamanında Teslim Gücü',
  'Çözüm Odaklı Yaklaşım',
]

const nedenBiz: { baslik: string; metin: string; icon: ReactNode }[] = [
  {
    baslik: 'Tecrübeli Ekip & Güvenli Operasyon',
    metin:
      'Alanında uzman, sertifikalı operatörlerimizle tüm vinç, forklift ve manlift çalışmalarını iş güvenliği standartlarına uygun şekilde yürütürüz.',
    icon: (
      // Baret
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="size-6">
        <path d="M5 14a7 7 0 0 1 14 0" />
        <path d="M3 14h18" />
        <path d="M12 7V5" />
        <path d="M4 18h16" />
      </svg>
    ),
  },
  {
    baslik: 'Güçlü ve Bakımlı Makine Parkuru',
    metin:
      'Farklı tonaj ve erişim ihtiyaçlarına uygun, periyodik bakımları yapılmış modern ekipmanlarımızla her projeye doğru çözümü sunarız.',
    icon: (
      // Dişli / bakım
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="size-6">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M19.1 4.9L17 7M7 17l-2.1 2.1" />
      </svg>
    ),
  },
  {
    baslik: 'Hızlı Planlama & Zamanında Hizmet',
    metin: 'Keşiften saha uygulamasına kadar süreci doğru planlar, işi zamanında ve sorunsuz şekilde tamamlarız.',
    icon: (
      // Saat
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="size-6">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3.5 2" />
      </svg>
    ),
  },
  {
    baslik: 'Şeffaf ve Yazılı Fiyatlandırma',
    metin:
      'Nakliye, operatör ve sigorta dahil tüm kalemleri baştan yazılı olarak sunarız; iş bittiğinde karşınıza sürpriz maliyet çıkmaz.',
    icon: (
      // Belge / fatura
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="size-6">
        <path d="M15 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6l-4-4Z" />
        <path d="M15 2v4h4" />
        <path d="M9 12h6M9 16h6" />
      </svg>
    ),
  },
  {
    baslik: 'Sigortalı ve Belgeli Ekipman',
    metin:
      'Tüm makinelerimiz güncel periyodik kontrol raporlarına ve sigorta poliçelerine sahiptir; belgeler operasyon öncesinde İSG dosyanız için paylaşılır.',
    icon: (
      // Onaylı rozet
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="size-6">
        <path d="M12 2l2.4 2.4 3.4-.4 1 3.3 3 1.7-1.4 3 1.4 3-3 1.7-1 3.3-3.4-.4L12 22l-2.4-2.4-3.4.4-1-3.3-3-1.7 1.4-3-1.4-3 3-1.7 1-3.3 3.4.4L12 2Z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    baslik: '7/24 Ulaşılabilirlik',
    metin:
      'Acil kaldırma ihtiyaçlarınızda ve operasyon sırasında telefon ve WhatsApp hattımız her zaman açıktır; İstanbul içinde çoğu talebe aynı gün yanıt veririz.',
    icon: (
      // Telefon
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="size-6">
        <path d="M4 4h5l2 5-2.5 1.5a12 12 0 0 0 5 5L15 13l5 2v5a2 2 0 0 1-2 2A16 16 0 0 1 2 6a2 2 0 0 1 2-2Z" />
      </svg>
    ),
  },
]

// ---------------------------------------------------------------------------

const PageAbout = () => {
  return (
    <div className="relative overflow-hidden">
      <BgGlassmorphism />

      <div className="container flex flex-col gap-y-20 py-16 lg:gap-y-28 lg:py-28">
        <SectionHero
          rightImg={rightImg}
          heading="👋 Hakkımızda"
          subHeading="Vinç Burada olarak vinç, sepetli vinç, kule vinç, mobil vinç ve manlift kiralama ihtiyaçlarınızda güvenilir, hızlı ve uygun fiyatlı çözümler sunuyoruz. Deneyimli ekibimiz ve bakımlı ekipman filomuzla projelerinizin her aşamasında yanınızdayız."
        />

        {/* MİSYON / VİZYON / DEĞERLER */}
        <div className="grid gap-6 lg:grid-cols-3">
          {misyonVizyon.map((item) => (
            <div
              key={item.baslik}
              className="group relative overflow-hidden rounded-3xl border border-neutral-200 bg-white p-8 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-600/5 dark:border-neutral-700 dark:bg-neutral-900"
            >
              <span
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-orange-600 transition-transform duration-300 group-hover:scale-x-100"
              />
              <div className="flex size-14 items-center justify-center rounded-2xl bg-orange-600/10 text-orange-600 dark:text-orange-400">
                {item.icon}
              </div>
              <h2 className="mt-6 text-xl font-semibold text-neutral-900 dark:text-neutral-100">{item.baslik}</h2>
              <p className="mt-3 text-sm/6 text-neutral-600 dark:text-neutral-400">{item.metin}</p>
            </div>
          ))}
        </div>

        {/* 20+ YIL TECRÜBE BANDI */}
        <div className="relative overflow-hidden rounded-3xl bg-neutral-900 dark:bg-neutral-800">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-1.5"
            style={{ background: 'repeating-linear-gradient(45deg, #ea580c 0 16px, #171717 16px 32px)' }}
          />
          <div className="grid gap-10 p-8 sm:p-12 lg:grid-cols-2 lg:gap-16 lg:p-16">
            <div>
              <p className="text-6xl font-bold text-orange-500 sm:text-7xl">
                20<span className="text-orange-600">+</span>
              </p>
              <h2 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">Yıllık Sektörel Tecrübe</h2>
              <p className="mt-5 max-w-lg text-base/7 text-neutral-300">
                Yirmi yılı aşkın süredir vinç, platform, forklift ve manlift kiralama alanında edindiğimiz deneyimle,
                farklı sektörlerin ihtiyaçlarına güvenilir ve sürdürülebilir çözümler sunuyoruz.
              </p>
              <Link
                href="/referanslar"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold tracking-widest text-orange-500 uppercase transition hover:text-orange-400"
              >
                Referanslarımızı İnceleyin
                <svg viewBox="0 0 20 20" fill="currentColor" className="size-4" aria-hidden="true">
                  <path d="M3 10a.75.75 0 0 1 .75-.75h10.6L10.7 5.8a.75.75 0 1 1 1.1-1.02l4.9 4.7a.75.75 0 0 1 0 1.04l-4.9 4.7a.75.75 0 1 1-1.1-1.02l3.65-3.45H3.75A.75.75 0 0 1 3 10Z" />
                </svg>
              </Link>
            </div>

            <ul className="grid content-center gap-3 sm:grid-cols-2">
              {tecrubeRozetleri.map((rozet) => (
                <li
                  key={rozet}
                  className="flex items-center gap-3 rounded-xl bg-white/5 px-4 py-3.5 text-sm font-medium text-neutral-200 transition hover:bg-white/10"
                >
                  <svg viewBox="0 0 20 20" fill="currentColor" className="size-5 shrink-0 text-orange-500" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.86-9.94a.75.75 0 1 0-1.22-.87l-2.96 4.14-1.4-1.4a.75.75 0 1 0-1.06 1.06l2 2a.75.75 0 0 0 1.14-.1l3.5-4.83Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {rozet}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* NEDEN BİZ */}
        <div>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-semibold sm:text-4xl">Neden Bizi Tercih Etmelisiniz?</h2>
            <div className="mx-auto mt-4 h-1 w-14 rounded bg-orange-600" aria-hidden="true" />
            <p className="mt-6 text-base/7 text-neutral-500 dark:text-neutral-400">
              Vinç, forklift ve manlift kiralama hizmetlerinde; güvenli çalışma anlayışı, güçlü ekipman altyapısı ve
              deneyimli ekibimizle projelerinizi sorunsuz ve zamanında tamamlıyoruz.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {nedenBiz.map((item) => (
              <div
                key={item.baslik}
                className="group rounded-3xl border border-neutral-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-orange-500/50 hover:shadow-lg dark:border-neutral-700 dark:bg-neutral-900"
              >
                <div className="flex size-12 items-center justify-center rounded-xl bg-neutral-900 text-orange-500 transition-colors group-hover:bg-orange-600 group-hover:text-white dark:bg-neutral-800">
                  {item.icon}
                </div>
                <h3 className="mt-5 text-base font-semibold text-neutral-900 dark:text-neutral-100">{item.baslik}</h3>
                <p className="mt-2.5 text-sm/6 text-neutral-600 dark:text-neutral-400">{item.metin}</p>
              </div>
            ))}
          </div>
        </div>

        {/* MÜŞTERİ YORUMLARI */}
        <div className="relative py-16">
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
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">Projenizi birlikte planlayalım</h2>
          <p className="mx-auto mt-4 max-w-xl text-base/7 text-neutral-300">
            İhtiyacınızı anlatın; 20 yıllık tecrübemizle doğru ekipmanı önerelim, aynı gün yazılı teklifinizi
            hazırlayalım.
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

export default PageAbout
