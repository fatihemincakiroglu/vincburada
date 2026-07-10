import { Metadata } from 'next'
import KategoriUrunBolumu from '@/components/KategoriUrunBolumu'
import ProductPageLayout from '../_components/ProductPageLayout'
import heroImage from '@/images/vinc/hero-mobil.webp'

export const metadata: Metadata = {
  title: 'Mobil Vinç Kiralama',
  description: 'Hızlı konumlandırma ve esneklik sunan mobil vinç kiralama hizmetlerini Vinç Burada’da bulun.',
}

const Page = () => {
  return (
    <ProductPageLayout
      wideChildren={<KategoriUrunBolumu handle="mobil-vinc" kategoriAdi="Mobil Vinç" />}
      heroImage={heroImage}
      title="Mobil Vinç"
      subHeading="Sahalar arası hızlı taşınabilirlik gerektiren işleriniz için mobil vinç kiralama."
    />
  )
}

export default Page
