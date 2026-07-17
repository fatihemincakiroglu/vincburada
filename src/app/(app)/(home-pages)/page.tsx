import BgGlassmorphism from '@/components/BgGlassmorphism'
import HeroSectionWithSearchForm1 from '@/components/hero-sections/HeroSectionWithSearchForm1'
import HeroSearchForm from '@/components/HeroSearchForm/HeroSearchForm'
import SectionClientSay from '@/components/SectionClientSay'
import SectionHowItWork from '@/components/SectionHowItWork'
import SectionOurFeatures from '@/components/SectionOurFeatures'
import SectionUrunVitrini from '@/components/SectionUrunVitrini'
import SectionKatalog from '@/components/SectionKatalog'
import SectionBlogVitrini from '@/components/SectionBlogVitrini'
import SectionSss from '@/components/SectionSss'
import SectionTeklifCta from '@/components/SectionTeklifCta'
import { getBlogPosts } from '@/data/data'
import SectionVincCesitleri from '@/components/SectionVincCesitleri'
import { getVincCategories } from '@/data/categories'
import heroImage from '@/images/vinc/hero-home.webp'
import ButtonPrimary from '@/shared/ButtonPrimary'
import { Divider } from '@/shared/divider'
import HeadingWithSub from '@/shared/Heading'

import { Metadata } from 'next'

export const metadata: Metadata = {
  title: { absolute: 'Kiralık Vinç Çeşitleri ve Vinç Kiralama | Vinç Burada' },
  description:
    "İhtiyacınıza uygun kiralık vinç çeşitlerini Vinç Burada'da keşfedin. Güvenilir, uygun fiyatlı ve hızlı vinç kiralama hizmeti için hemen teklif alın.",
}

async function Page() {
  const vincCategories = await getVincCategories()
  const blogPosts = await getBlogPosts()

  return (
    <main className="relative overflow-hidden">
      <BgGlassmorphism />
      <div className="relative container mb-24 flex flex-col gap-y-24 lg:mb-28 lg:gap-y-32">
        <HeroSectionWithSearchForm1
          heading="Vinç, sepetli vinç, kule vinç"
          image={heroImage}
          imageAlt="Vinç Burada kiralık vinç filosu iş başında"
          searchForm={<HeroSearchForm initTab="Stays" />}
          description={
            <>
              <p className="max-w-xl text-base text-neutral-500 sm:text-xl dark:text-neutral-400">
                İhtiyacınıza uygun kiralık vinci saniyeler içinde bulun, aynı gün teklif alın.
              </p>
              <ButtonPrimary href={'/vinc'} className="sm:text-base/normal">
                Vinç Çeşitlerini Keşfet
              </ButtonPrimary>
            </>
          }
        />

        <div>
          <HeadingWithSub subheading="İhtiyacınıza uygun kiralık vinç çeşitlerini keşfedin.">
            Vinç Çeşitlerimiz
          </HeadingWithSub>
          <SectionVincCesitleri categories={vincCategories} />
        </div>

        <SectionUrunVitrini />

        <SectionOurFeatures className="py-14" />
        <Divider />
        <SectionHowItWork />

        <SectionKatalog />

        <div className="relative py-8">
          <SectionClientSay />
        </div>
        <Divider />
        <SectionBlogVitrini posts={blogPosts} />
        <Divider />
        <SectionSss />

        <SectionTeklifCta />
      </div>
    </main>
  )
}

export default Page
