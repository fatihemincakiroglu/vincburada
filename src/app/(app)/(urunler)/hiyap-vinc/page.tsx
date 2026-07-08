import { Metadata } from 'next'
import ProductPageLayout from '../_components/ProductPageLayout'
import heroImage from '@/images/vinc/hero-hiyap.webp'

export const metadata: Metadata = {
  title: 'Hiyap Vinç Kiralama',
  description: 'Araç üstü yükleme-boşaltma operasyonlarınız için hiyap vinç kiralama seçeneklerini inceleyin.',
}

const Page = () => {
  return (
    <ProductPageLayout
      heroImage={heroImage}
      title="Hiyap Vinç"
      subHeading="Yükleme ve boşaltma operasyonlarınız için araç üstü hiyap vinç kiralama."
    />
  )
}

export default Page
