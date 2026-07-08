import { Metadata } from 'next'
import ProductPageLayout from '../_components/ProductPageLayout'
import heroImage from '@/images/vinc/hero-kule.webp'

export const metadata: Metadata = {
  title: 'Kule Vinç Kiralama',
  description: 'İnşaat projeleriniz için kule vinç kiralama hizmetlerini Vinç Burada’da inceleyin.',
}

const Page = () => {
  return (
    <ProductPageLayout
      heroImage={heroImage}
      title="Kule Vinç"
      subHeading="Büyük ölçekli inşaat projeleriniz için kule vinç kiralama çözümleri."
    />
  )
}

export default Page
