import BackgroundSection from '@/components/BackgroundSection'
import BgGlassmorphism from '@/components/BgGlassmorphism'
import HeroSectionWithSearchForm1 from '@/components/hero-sections/HeroSectionWithSearchForm1'
import HeroSearchForm from '@/components/HeroSearchForm/HeroSearchForm'
import defaultHero from '@/images/vinc/hero-vinc.webp'
import galeri1 from '@/images/vinc/galeri-10.webp'
import galeri2 from '@/images/vinc/galeri-2.webp'
import galeri3 from '@/images/vinc/galeri-23.webp'
import galeri4 from '@/images/vinc/galeri-56.webp'
import galeri5 from '@/images/vinc/galeri-6.webp'
import galeri6 from '@/images/vinc/galeri-wa.webp'
import ButtonPrimary from '@/shared/ButtonPrimary'
import { Divider } from '@/shared/divider'
import HeadingWithSub from '@/shared/Heading'
import Image, { StaticImageData } from 'next/image'
import { ReactNode } from 'react'

interface Props {
  title: string
  subHeading: string
  heroHeading?: string
  heroImage?: StaticImageData
  children?: ReactNode
  wideChildren?: ReactNode
}

const galleryImages = [galeri1, galeri2, galeri3, galeri4, galeri5, galeri6]

const ProductPageLayout = ({ title, subHeading, heroHeading, heroImage, children, wideChildren }: Props) => {
  return (
    <main className="relative overflow-hidden">
      <BgGlassmorphism />

      <div className="relative container mb-24 flex flex-col gap-y-24 lg:mb-28 lg:gap-y-32">
        {/* Ana sayfa ile birebir ayni hero tasarimi */}
        <HeroSectionWithSearchForm1
          heading={heroHeading ?? `${title} Kiralama`}
          headingTag="h1"
          image={heroImage ?? defaultHero}
          imageAlt={`${title} kiralama - Vinç Burada saha fotoğrafı`}
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

        {wideChildren ? <div className="w-full">{wideChildren}</div> : null}

        {children ? <div className="mx-auto w-full max-w-4xl">{children}</div> : null}

        {/* Saha fotograflari galerisi */}
        <div>
          <HeadingWithSub level={2} subheading="Ekipmanlarımız İstanbul'un dört bir yanındaki şantiyelerde görev başında.">
            Sahadan Kareler
          </HeadingWithSub>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3">
            {galleryImages.map((img, index) => (
              <div
                key={index}
                className="group relative aspect-4/3 overflow-hidden rounded-2xl bg-neutral-100 dark:bg-neutral-800"
              >
                <Image
                  src={img}
                  alt={`${title} kiralama saha fotoğrafı ${index + 1}`}
                  fill
                  sizes="(min-width: 1024px) 33vw, 50vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>

        <Divider />

        <div className="relative py-10 text-center">
          <BackgroundSection />
          <HeadingWithSub level={2} isCenter subheading="Aklınızdaki soruları yanıtlamaktan memnuniyet duyarız">
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
