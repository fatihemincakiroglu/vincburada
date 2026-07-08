import BackgroundSection from '@/components/BackgroundSection'
import BgGlassmorphism from '@/components/BgGlassmorphism'
import HeroSectionWithSearchForm1 from '@/components/hero-sections/HeroSectionWithSearchForm1'
import HeroSearchForm from '@/components/HeroSearchForm/HeroSearchForm'
import heroImage from '@/images/hero-right.png'
import ButtonPrimary from '@/shared/ButtonPrimary'
import { Divider } from '@/shared/divider'
import HeadingWithSub from '@/shared/Heading'
import { ReactNode } from 'react'

interface Props {
  title: string
  subHeading: string
  children?: ReactNode
}

const ProductPageLayout = ({ title, subHeading, children }: Props) => {
  return (
    <main className="relative overflow-hidden">
      <BgGlassmorphism />

      <div className="relative container mb-24 flex flex-col gap-y-24 lg:mb-28 lg:gap-y-32">
        {/* Ana sayfa ile birebir ayni hero tasarimi */}
        <HeroSectionWithSearchForm1
          heading={`${title} Kiralama`}
          image={heroImage}
          imageAlt={`${title} kiralama`}
          searchForm={<HeroSearchForm initTab="Stays" />}
          description={
            <>
              <p className="max-w-xl text-base text-neutral-500 sm:text-xl dark:text-neutral-400">{subHeading}</p>
              <ButtonPrimary href={'/iletisim'} className="sm:text-base/normal">
                Hemen Teklif Al
              </ButtonPrimary>
            </>
          }
        />

        <div className="mx-auto w-full max-w-4xl">
          {children ?? (
            <div className="rounded-3xl border border-dashed border-neutral-300 p-10 text-center text-neutral-400 dark:border-neutral-700">
              Bu ürün sayfasının içeriği yakında eklenecektir.
            </div>
          )}
        </div>

        <Divider />

        <div className="relative py-10 text-center">
          <BackgroundSection />
          <HeadingWithSub isCenter subheading="Aklınızdaki soruları yanıtlamaktan memnuniyet duyarız">
            İhtiyacınıza uygun teklif için hemen iletişime geçin
          </HeadingWithSub>
          <ButtonPrimary href="/iletisim" className="mt-8">
            İletişime Geç
          </ButtonPrimary>
        </div>
      </div>
    </main>
  )
}

export default ProductPageLayout
