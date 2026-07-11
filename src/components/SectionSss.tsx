'use client'

import Link from 'next/link'
import { useState } from 'react'

const FAQS = [
  {
    q: 'Vinç kiralama fiyatları nasıl belirlenir?',
    a: 'Fiyatlar; vinç tipi, kapasite (tonaj), çalışma yüksekliği, kiralama süresi ve şantiyenin konumuna göre belirlenir. Net fiyat için 0532 303 90 89 numarasından bize ulaşabilir, aynı gün içinde teklif alabilirsiniz.',
  },
  {
    q: 'Vinçler operatörlü mü kiralanıyor?',
    a: 'Evet, tüm vinçlerimiz deneyimli ve sertifikalı operatörleriyle birlikte kiralanır. Böylece iş güvenliği ve operasyon verimliliği güvence altına alınır; tarafınızda ayrıca belge gerekmez.',
  },
  {
    q: 'Ne kadar sürede şantiyeme vinç gönderebilirsiniz?',
    a: 'İstanbul ve çevresinde çoğu talebe aynı gün veya ertesi gün yanıt verebiliyoruz. Acil işleriniz için bizi arayın, en hızlı çözümü planlayalım.',
  },
  {
    q: 'Günlük, haftalık veya aylık kiralama yapabiliyor musunuz?',
    a: 'Evet. Saatlik ve günlük kısa süreli işlerden, haftalık ve aylık uzun dönem projelere kadar esnek kiralama seçenekleri sunuyoruz. Süre uzadıkça birim maliyet düşer.',
  },
  {
    q: 'Hangi bölgelere hizmet veriyorsunuz?',
    a: 'Merkezimiz İkitelli OSB, Başakşehir/İstanbul’dadır. Başta İstanbul olmak üzere Marmara Bölgesi genelinde ve proje bazlı olarak Türkiye’nin her yerinde hizmet veriyoruz.',
  },
  {
    q: 'Vinç kiralamadan önce keşif yapıyor musunuz?',
    a: 'Gerekli durumlarda ücretsiz keşif yapıyoruz. Çalışma alanını inceleyerek doğru kapasitede ve tipte vinci öneriyor, operasyonu güvenle planlıyoruz.',
  },
]

const SectionSss = ({ className = '' }: { className?: string }) => {
  const [openIndex, setOpenIndex] = useState<number>(0)

  return (
    <div className={className}>
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-semibold text-neutral-900 sm:text-4xl dark:text-neutral-100">
          Sıkça Sorulan Sorular
        </h2>
        <p className="mt-4 text-base/7 text-neutral-500 dark:text-neutral-400">
          Vinç kiralama hakkında en çok merak edilenler. Aradığınız cevabı bulamazsanız{' '}
          <Link href="/sss" className="font-semibold text-orange-600 hover:underline dark:text-orange-400">
            tüm soruları görüntüleyin
          </Link>{' '}
          veya bizi arayın.
        </p>
      </div>

      <dl className="mx-auto mt-12 max-w-3xl divide-y divide-neutral-200 dark:divide-neutral-700">
        {FAQS.map((faq, index) => {
          const isOpen = openIndex === index
          return (
            <div key={faq.q} className="py-2">
              <dt>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 py-4 text-left"
                >
                  <span
                    className={`text-base font-semibold transition-colors sm:text-lg ${
                      isOpen ? 'text-orange-600 dark:text-orange-400' : 'text-neutral-900 dark:text-neutral-100'
                    }`}
                  >
                    {faq.q}
                  </span>
                  <span
                    className={`flex size-8 shrink-0 items-center justify-center rounded-full border transition-all ${
                      isOpen
                        ? 'rotate-45 border-orange-600 bg-orange-600 text-white'
                        : 'border-neutral-300 text-neutral-500 dark:border-neutral-600 dark:text-neutral-400'
                    }`}
                    aria-hidden="true"
                  >
                    <svg viewBox="0 0 20 20" fill="currentColor" className="size-4">
                      <path d="M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z" />
                    </svg>
                  </span>
                </button>
              </dt>
              <dd
                className={`grid transition-all duration-300 ease-in-out ${
                  isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden">
                  <p className="pr-12 pb-5 text-base/7 text-neutral-600 dark:text-neutral-400">{faq.a}</p>
                </div>
              </dd>
            </div>
          )
        })}
      </dl>
    </div>
  )
}

export default SectionSss
