import BackgroundSection from '@/components/BackgroundSection'
import BgGlassmorphism from '@/components/BgGlassmorphism'
import SectionClientSay from '@/components/SectionClientSay'
import SectionSubscribe2 from '@/components/SectionSubscribe2'
import rightImg from '@/images/about-hero-right.png'
import { Metadata } from 'next'
import SectionFounder from './SectionFounder'
import SectionHero from './SectionHero'
import SectionStatistic from './SectionStatistic'

export const metadata: Metadata = {
  title: 'Hakkımızda - Güvenilir Vinç Kiralama Firması',
  description:
    "Vinç Burada; vinç, sepetli vinç, kule vinç, mobil vinç ve manlift kiralama alanında güvenilir, hızlı ve uygun fiyatlı hizmet sunar. Bizi yakından tanıyın.",
}

const PageAbout = () => {
  return (
    <div className="relative overflow-hidden">
      {/* ======== BG GLASS ======== */}
      <BgGlassmorphism />

      <div className="container flex flex-col gap-y-16 py-16 lg:gap-y-28 lg:py-28">
        <SectionHero
          rightImg={rightImg}
          heading="👋 Hakkımızda"
          subHeading="Vinç Burada olarak vinç, sepetli vinç, kule vinç, mobil vinç ve manlift kiralama ihtiyaçlarınızda güvenilir, hızlı ve uygun fiyatlı çözümler sunuyoruz. Deneyimli ekibimiz ve bakımlı ekipman filomuzla projelerinizin her aşamasında yanınızdayız."
        />

        <SectionFounder />
        <div className="relative py-20">
          <BackgroundSection />
          <SectionClientSay />
        </div>

        <SectionStatistic />

        <SectionSubscribe2 />
      </div>
    </div>
  )
}

export default PageAbout
