import BgGlassmorphism from '@/components/BgGlassmorphism'
import ButtonPrimary from '@/shared/ButtonPrimary'
import { Divider } from '@/shared/divider'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sıkça Sorulan Sorular (SSS) - Vinç Kiralama',
  description:
    'Vinç kiralama fiyatları, kiralama süreci, operatör ve teslimat hakkında sıkça sorulan sorular ve yanıtları. Merak ettikleriniz Vinç Burada SSS sayfasında.',
}

const faqs = [
  {
    question: 'Vinç kiralama fiyatları nasıl belirlenir?',
    answer:
      'Fiyatlar; vinç tipi, kapasite (tonaj), çalışma yüksekliği, kiralama süresi ve şantiyenin konumuna göre belirlenir. Net fiyat için 0532 303 90 89 numarasından bize ulaşabilir, aynı gün içinde teklif alabilirsiniz.',
  },
  {
    question: 'Hangi vinç çeşitlerini kiralayabilirim?',
    answer:
      'Vinç, sepetli vinç, kule vinç, elektrikli vinç, mobil vinç ve hiyap vinç seçeneklerimiz mevcuttur. İhtiyacınıza en uygun ekipmanı birlikte belirleyebiliriz.',
  },
  {
    question: 'Vinçler operatörlü mü kiralanıyor?',
    answer:
      'Evet, tüm vinçlerimiz deneyimli ve sertifikalı operatörleriyle birlikte kiralanır. Böylece iş güvenliği ve operasyon verimliliği güvence altına alınır.',
  },
  {
    question: 'Ne kadar sürede şantiyeme vinç gönderebilirsiniz?',
    answer:
      'İstanbul ve çevresinde çoğu talebe aynı gün veya ertesi gün yanıt verebiliyoruz. Acil işleriniz için bizi arayın, en hızlı çözümü planlayalım.',
  },
  {
    question: 'Günlük, haftalık veya aylık kiralama yapabiliyor musunuz?',
    answer:
      'Evet. Saatlik ve günlük kısa süreli işlerden, haftalık ve aylık uzun dönem projelere kadar esnek kiralama seçenekleri sunuyoruz.',
  },
  {
    question: 'Hangi bölgelere hizmet veriyorsunuz?',
    answer:
      'Merkezimiz İkitelli OSB, Başakşehir/İstanbul’dadır. Başta İstanbul olmak üzere Marmara Bölgesi genelinde ve proje bazlı olarak Türkiye’nin her yerinde hizmet veriyoruz.',
  },
  {
    question: 'Vinç kiralamadan önce keşif yapıyor musunuz?',
    answer:
      'Gerekli durumlarda ücretsiz keşif yapıyoruz. Çalışma alanını inceleyerek doğru kapasitede ve tipte vinci öneriyor, operasyonu güvenle planlıyoruz.',
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
}

const PageSss = () => {
  return (
    <div className="relative overflow-hidden">
      <BgGlassmorphism />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="container flex flex-col gap-y-12 py-16 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-semibold sm:text-5xl">Sıkça Sorulan Sorular</h1>
          <p className="mt-6 text-base text-neutral-500 sm:text-lg dark:text-neutral-400">
            Vinç kiralama süreci hakkında en çok merak edilen soruları sizin için yanıtladık.
          </p>
        </div>

        <Divider />

        <div className="mx-auto w-full max-w-3xl">
          <dl className="space-y-10">
            {faqs.map((faq) => (
              <div key={faq.question}>
                <dt className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">{faq.question}</dt>
                <dd className="mt-3 text-base text-neutral-600 dark:text-neutral-400">{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="mx-auto mt-4 text-center">
          <p className="text-neutral-600 dark:text-neutral-400">Sorunuzun yanıtını bulamadınız mı?</p>
          <ButtonPrimary href="/iletisim" className="mt-6">
            Bize Ulaşın
          </ButtonPrimary>
        </div>
      </div>
    </div>
  )
}

export default PageSss
