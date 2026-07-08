import BackgroundSection from '@/components/BackgroundSection'
import BgGlassmorphism from '@/components/BgGlassmorphism'
import SectionClientSay from '@/components/SectionClientSay'
import ButtonPrimary from '@/shared/ButtonPrimary'
import { Divider } from '@/shared/divider'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Referanslar - Çalıştığımız Firmalar ve Projeler',
  description:
    'Vinç Burada olarak inşaat, sanayi, enerji ve lojistik sektörlerinde birçok firmaya vinç kiralama hizmeti sunduk. Referans projelerimizi inceleyin.',
}

const references = [
  { name: 'İnşaat Projeleri', description: 'Konut ve ticari yapı şantiyelerinde kule vinç ve mobil vinç operasyonları.' },
  { name: 'Sanayi Tesisleri', description: 'Fabrika kurulumları, makine yerleşimi ve ağır yük kaldırma çalışmaları.' },
  { name: 'Enerji Sektörü', description: 'Trafo, jeneratör ve enerji ekipmanlarının montaj ve taşıma işleri.' },
  { name: 'Lojistik ve Depolama', description: 'Depo ve liman sahalarında yükleme-boşaltma operasyonları.' },
  { name: 'Cephe ve Tabela İşleri', description: 'Sepetli vinç ile yüksekte çalışma, cephe kaplama ve tabela montajı.' },
  { name: 'Altyapı Çalışmaları', description: 'Prefabrik eleman montajı, köprü ve viyadük destek operasyonları.' },
]

const PageReferanslar = () => {
  return (
    <div className="relative overflow-hidden">
      <BgGlassmorphism />

      <div className="container flex flex-col gap-y-12 py-16 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-semibold sm:text-5xl">Referanslarımız</h1>
          <p className="mt-6 text-base text-neutral-500 sm:text-lg dark:text-neutral-400">
            Farklı sektörlerden birçok firmaya güvenilir vinç kiralama hizmeti sunduk. İşte hizmet verdiğimiz başlıca
            alanlar.
          </p>
        </div>

        <Divider />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {references.map((item) => (
            <div
              key={item.name}
              className="rounded-3xl border border-neutral-200 p-8 transition-shadow hover:shadow-lg dark:border-neutral-700"
            >
              <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">{item.name}</h2>
              <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-400">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="relative py-16">
          <BackgroundSection />
          <SectionClientSay />
        </div>

        <div className="mx-auto text-center">
          <p className="text-neutral-600 dark:text-neutral-400">Siz de projeniz için güvenilir bir çözüm ortağı arıyorsanız</p>
          <ButtonPrimary href="/iletisim" className="mt-6">
            Hemen Teklif Alın
          </ButtonPrimary>
        </div>
      </div>
    </div>
  )
}

export default PageReferanslar
