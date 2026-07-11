import Heading from '@/shared/Heading'
import { FC, ReactNode } from 'react'

export interface SectionHowItWorkProps {
  className?: string
  title?: string
}

/**
 * Vinç kiralama sürecinin 5 adımı.
 * İkonlar sektöre özel inline SVG'lerdir (şablonun tatil görselleri kaldırıldı).
 */
const STEPS: { id: number; title: string; desc: string; icon: ReactNode }[] = [
  {
    id: 1,
    title: 'İhtiyacınızı Anlatın',
    desc: 'Kaldırılacak yükü, çalışma yüksekliğini ve şantiye konumunu telefon veya WhatsApp üzerinden bize iletin.',
    icon: (
      // Konuşma balonu + vinç kancası
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10">
        <path d="M40 8H8a3 3 0 0 0-3 3v18a3 3 0 0 0 3 3h6v8l9-8h17a3 3 0 0 0 3-3V11a3 3 0 0 0-3-3Z" />
        <path d="M24 14v6" />
        <path d="M24 20a4 4 0 1 0 4 4" />
      </svg>
    ),
  },
  {
    id: 2,
    title: 'Ücretsiz Keşif',
    desc: 'Gerekli durumlarda sahanızı yerinde inceleyip zemin, erişim ve kapasiteye göre doğru ekipmanı belirliyoruz.',
    icon: (
      // Saha / konum işareti
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10">
        <path d="M24 42s14-11.6 14-22a14 14 0 1 0-28 0c0 10.4 14 22 14 22Z" />
        <circle cx="24" cy="20" r="5" />
      </svg>
    ),
  },
  {
    id: 3,
    title: 'Yazılı Teklif & Onay',
    desc: 'Nakliye, operatör ve sigorta dahil kalem kalem yazılı teklifinizi aynı gün alın; gizli maliyet yok.',
    icon: (
      // Teklif belgesi + onay
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10">
        <path d="M30 4H12a3 3 0 0 0-3 3v34a3 3 0 0 0 3 3h24a3 3 0 0 0 3-3V13l-9-9Z" />
        <path d="M30 4v9h9" />
        <path d="m17 30 4.5 4.5L31 25" />
      </svg>
    ),
  },
  {
    id: 4,
    title: 'Sevkiyat ve Kurulum',
    desc: 'Ekipmanınız belirlenen tarihte şantiyenize ulaşır; kurulum ve güvenlik kontrolleri ekibimizce yapılır.',
    icon: (
      // Kule vinç silüeti
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10">
        <path d="M6 42h36" />
        <path d="M14 42V12" />
        <path d="M10 12h32" />
        <path d="M14 6l4 6h-8l4-6Z" />
        <path d="M34 12v10" />
        <path d="M34 22a3.5 3.5 0 1 0 3.5 3.5" />
        <path d="M14 20l8-8M14 28l8-8M14 36l8-8" />
      </svg>
    ),
  },
  {
    id: 5,
    title: 'Operasyon ve 7/24 Destek',
    desc: 'Belgeli operatörümüz işinizi güvenle tamamlar; kiralama boyunca bakım ve destek hattımız hep açık.',
    icon: (
      // Baretli operatör / destek
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10">
        <path d="M10 22a14 14 0 0 1 28 0" />
        <path d="M6 22h36" />
        <path d="M24 8v-4" />
        <circle cx="24" cy="32" r="6" />
        <path d="M13 44a11.5 11.5 0 0 1 22 0" />
      </svg>
    ),
  },
]

const SectionHowItWork: FC<SectionHowItWorkProps> = ({ className = '', title = 'Nasıl Çalışır?' }) => {
  return (
    <div className={`nc-SectionHowItWork ${className}`} data-nc-id="SectionHowItWork">
      <Heading isCenter subheading="Talebinizden operasyona: 5 adımda ekipmanınız şantiyede">
        {title}
      </Heading>

      <div className="relative mt-16">
        {/* Bağlantı çizgisi (masaüstü) */}
        <div
          aria-hidden="true"
          className="absolute top-10 right-[10%] left-[10%] hidden border-t-2 border-dashed border-neutral-200 lg:block dark:border-neutral-700"
        />

        <ol className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-5">
          {STEPS.map((step) => (
            <li key={step.id} className="relative flex flex-col items-center text-center">
              {/* İkon halkası */}
              <div className="relative z-10 flex size-20 items-center justify-center rounded-full border-2 border-orange-500/30 bg-white text-orange-600 shadow-sm dark:bg-neutral-900 dark:text-orange-400">
                {step.icon}
                {/* Adım numarası rozeti */}
                <span className="absolute -top-1 -right-1 flex size-7 items-center justify-center rounded-full bg-orange-600 text-sm font-bold text-white shadow">
                  {step.id}
                </span>
              </div>

              <h3 className="mt-6 text-base font-semibold text-neutral-900 dark:text-neutral-100">{step.title}</h3>
              <p className="mt-2 max-w-52 text-sm/6 text-neutral-500 dark:text-neutral-400">{step.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}

export default SectionHowItWork
