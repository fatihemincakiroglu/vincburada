import BgGlassmorphism from '@/components/BgGlassmorphism'
import { getSepetliVincListings } from '@/data/sepetli-vinc-listings'
import HeadingWithSub from '@/shared/Heading'
import { Metadata } from 'next'
import SepetliVincFilterGrid from './SepetliVincFilterGrid'

export const metadata: Metadata = {
  title: 'Kiralık Sepetli Vinç Modelleri',
  description:
    'JLG, Genie, Haulotte, Palfinger ve Manitou kiralık sepetli vinç modelleri. Çalışma yüksekliği, kapasite, güç kaynağı ve zemin tipine göre filtreleyin, uygun modeli bulun.',
}

const Page = async () => {
  const listings = await getSepetliVincListings()

  return (
    <main className="relative overflow-hidden">
      <BgGlassmorphism />
      <div className="relative container pt-10 pb-24 lg:pt-16 lg:pb-28">
        <HeadingWithSub subheading="Çalışma yüksekliği, marka, güç kaynağı ve zemin tipine göre filtreleyerek ihtiyacınıza uygun modeli bulun.">
          Sepetli Vinç Modelleri
        </HeadingWithSub>

        <div className="mt-10 lg:mt-14">
          <SepetliVincFilterGrid listings={listings} />
        </div>
      </div>
    </main>
  )
}

export default Page
