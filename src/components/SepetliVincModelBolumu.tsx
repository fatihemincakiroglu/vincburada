import SepetliVincFilterGrid from '@/components/SepetliVincFilterGrid'
import { getSepetliVincListings } from '@/data/sepetli-vinc-listings'
import HeadingWithSub from '@/shared/Heading'
import { Suspense } from 'react'

const SepetliVincModelBolumu = async () => {
  const listings = await getSepetliVincListings()

  return (
    <section id="modeller" className="scroll-mt-24">
      <HeadingWithSub
        level={2}
        subheading="Çalışma yüksekliği, marka, güç kaynağı ve zemin tipine göre filtreleyerek ihtiyacınıza uygun modeli bulun."
      >
        Sepetli Vinç Modelleri
      </HeadingWithSub>
      <div className="mt-8">
        <Suspense fallback={<p className="text-sm text-neutral-500">Modeller yükleniyor...</p>}>
          <SepetliVincFilterGrid listings={listings} />
        </Suspense>
      </div>
      <p className="mt-6 text-xs text-neutral-400 dark:text-neutral-500">
        Model ve teknik değerler, üretici genel katalog verilerine dayanan yaklaşık referans bilgilerdir; kiralama
        öncesi güncel teknik döküman ile teyit edilir.
      </p>
    </section>
  )
}

export default SepetliVincModelBolumu
