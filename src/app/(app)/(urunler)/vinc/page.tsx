import { Metadata } from 'next'
import ProductPageLayout from '../_components/ProductPageLayout'
import heroImage from '@/images/vinc/hero-vinc.webp'

export const metadata: Metadata = {
  title: 'Vinç Kiralama',
  description: 'İhtiyacınıza uygun kiralık vinç seçenekleri için Vinç Burada güvencesiyle hemen teklif alın.',
}

const Page = () => {
  return (
    <ProductPageLayout
      heroImage={heroImage}
      title="Vinç"
      subHeading="Şantiye ve saha ihtiyaçlarınıza uygun vinç kiralama çözümleri."
    />
  )
}

export default Page
