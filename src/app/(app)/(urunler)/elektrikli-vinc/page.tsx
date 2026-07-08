import { Metadata } from 'next'
import ProductPageLayout from '../_components/ProductPageLayout'
import heroImage from '@/images/vinc/hero-elektrikli.webp'

export const metadata: Metadata = {
  title: 'Elektrikli Vinç Kiralama',
  description: 'Çevre dostu ve sessiz çalışma imkanı sunan elektrikli vinç kiralama seçeneklerini keşfedin.',
}

const Page = () => {
  return (
    <ProductPageLayout
      heroImage={heroImage}
      title="Elektrikli Vinç"
      subHeading="Kapalı alan ve düşük emisyon gerektiren işleriniz için elektrikli vinç kiralama."
    />
  )
}

export default Page
