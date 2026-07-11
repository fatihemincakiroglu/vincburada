import { Metadata } from 'next'
import ContactForm from './ContactForm'

const info: { title: string; description: string; href?: string }[] = [
  {
    title: '📞 TELEFON',
    description: '0532 303 90 89',
    href: 'tel:+905323039089',
  },
  {
    title: '🌐 WEB',
    description: 'vincburada.com.tr',
  },
  {
    title: '📍 ADRES',
    description:
      'İkitelli OSB, Giyim Sanatkarları İş ve Ticaret Merkezi D:4.Ada A Blok Kat:1 D:112, 34490 Başakşehir/İstanbul',
    href: 'https://maps.app.goo.gl/JXCzUwRJANU6cKvZ9',
  },
]

export const metadata: Metadata = {
  title: 'İletişim - Vinç Kiralama Teklifi Alın',
  description:
    'Vinç kiralama için Vinç Burada ile iletişime geçin. Telefon: 0532 303 90 89. İkitelli OSB, Başakşehir/İstanbul. Hemen arayın, hızlı teklif alın.',
}

const PageContact = () => {
  return (
    <div className="pt-10 pb-24 sm:py-24 lg:py-32">
      <div className="container mx-auto max-w-7xl">
        <div className="grid shrink-0 grid-cols-1 gap-x-5 gap-y-12 sm:grid-cols-2">
          <div>
            <h1 className="max-w-2xl text-4xl font-semibold sm:text-5xl">İletişim</h1>
            <p className="mt-6 max-w-sm text-neutral-500 dark:text-neutral-400">
              Vinç, forklift ve manlift kiralama ihtiyaçlarınız için bize ulaşın, size en uygun ekipmanı ve teklifi
              en kısa sürede sunalım.
            </p>
            <div className="mt-10 flex max-w-sm flex-col gap-y-8 sm:mt-14">
              {info.map((item, index) => (
                <div key={index}>
                  <h3 className="text-sm font-semibold tracking-wider uppercase dark:text-neutral-200">{item.title}</h3>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="mt-2 block text-neutral-500 hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-200"
                    >
                      {item.description}
                    </a>
                  ) : (
                    <span className="mt-2 block text-neutral-500 dark:text-neutral-400">{item.description}</span>
                  )}
                </div>
              ))}
              <div>
                <h3 className="text-sm font-semibold tracking-wider uppercase dark:text-neutral-200">💬 WHATSAPP</h3>
                <a
                  href="https://wa.me/905323039089"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 block text-neutral-500 hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-200"
                >
                  0532 303 90 89
                </a>
              </div>
            </div>
          </div>
          <ContactForm />
        </div>

        {/* KONUM */}
        <div className="mt-20 sm:mt-24">
          <h2 className="text-2xl font-semibold sm:text-3xl">Konumumuz</h2>
          <p className="mt-3 max-w-xl text-neutral-500 dark:text-neutral-400">
            İkitelli OSB, Başakşehir merkezli konumumuzla İstanbul&apos;un her noktasına hızla ulaşıyoruz.
          </p>
          <div className="mt-8 overflow-hidden rounded-3xl border border-neutral-200 shadow-sm dark:border-neutral-700">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3007.933587747738!2d28.803315476427326!3d41.070444315593925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cabb2bea89e70b%3A0x57c3faea048af5db!2sExpress%20Vin%C3%A7%20Hizmetleri%20ve%20Nak.%20Ltd.%20%C5%9Eti!5e0!3m2!1str!2str!4v1783721094996!5m2!1str!2str"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Vinç Burada konumu - Google Haritalar"
              className="block"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PageContact
