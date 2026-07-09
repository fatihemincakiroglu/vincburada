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

const Page = async ({ searchParams }: { searchParams: Promise<Record<string, string | undefined>> }) => {
  const listings = await getSepetliVincListings()
  const params = await searchParams

  // Arama formundan gelen parametreleri filtre başlangıç değerlerine çevir
  const gucMap: Record<string, string> = { akulu: 'Elektrikli', dizel: 'Dizel', cift_enerjili: 'Hibrit' }
  const initialGucler = params.power_source && gucMap[params.power_source] ? [gucMap[params.power_source]] : []
  const hMin = Number(params.height_min)
  const hMax = Number(params.height_max)
  const initialYukseklik: [number, number] = [
    Number.isFinite(hMin) && params.height_min ? Math.max(0, hMin) : 0,
    Number.isFinite(hMax) && params.height_max ? Math.min(80, hMax) : 80,
  ]
  const initialQuery = params.q ?? ''

  return (
    <main className="relative overflow-hidden">
      <BgGlassmorphism />
      <div className="relative container pt-10 pb-24 lg:pt-16 lg:pb-28">
        <HeadingWithSub subheading="Çalışma yüksekliği, marka, güç kaynağı ve zemin tipine göre filtreleyerek ihtiyacınıza uygun modeli bulun.">
          Sepetli Vinç Modelleri
        </HeadingWithSub>

        <div className="mt-10 lg:mt-14">
          <SepetliVincFilterGrid
            listings={listings}
            initialGucler={initialGucler}
            initialYukseklik={initialYukseklik}
            initialQuery={initialQuery}
          />
        </div>
      </div>
    </main>
  )
}

export default Page
