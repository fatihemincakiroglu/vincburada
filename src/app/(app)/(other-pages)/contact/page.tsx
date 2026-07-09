import SectionSubscribe2 from '@/components/SectionSubscribe2'
import ButtonPrimary from '@/shared/ButtonPrimary'
import { Divider } from '@/shared/divider'
import { Field, Label } from '@/shared/fieldset'
import Input from '@/shared/Input'
import SocialsList from '@/shared/SocialsList'
import Textarea from '@/shared/Textarea'
import { Metadata } from 'next'

const info = [
  {
    title: '🗺 ADRES',
    description: 'Organize Sanayi Bölgesi, İstanbul, Türkiye',
  },
  {
    title: '💌 E-POSTA',
    description: 'info@vincburada.com',
  },
  {
    title: '☎ TELEFON',
    description: '0850 123 45 67',
  },
]

export const metadata: Metadata = {
  title: 'İletişim',
  description: 'Vinç, forklift ve manlift kiralama için bizimle iletişime geçin',
}

const PageContact = () => {
  return (
    <div className="pt-10 pb-24 sm:py-24 lg:py-32">
      <div className="container mx-auto max-w-7xl">
        <div className="grid shrink-0 grid-cols-1 gap-x-5 gap-y-12 sm:grid-cols-2">
          <div>
            <h1 className="max-w-2xl text-4xl font-semibold sm:text-5xl">İletişim</h1>
            <p className="mt-6 max-w-sm text-neutral-500 dark:text-neutral-400">
              Vinç, forklift ve manlift kiralama ihtiyaçlarınız için bize ulaşın, size en uygun ekipmanı ve teklifi
              en kısa sürede sunalım.
            </p>
            <div className="mt-10 flex max-w-sm flex-col gap-y-8 sm:mt-14">
              {info.map((item, index) => (
                <div key={index}>
                  <h3 className="text-sm font-semibold tracking-wider uppercase dark:text-neutral-200">{item.title}</h3>
                  <span className="mt-2 block text-neutral-500 dark:text-neutral-400">{item.description}</span>
                </div>
              ))}
              <div>
                <h3 className="text-sm font-semibold tracking-wider uppercase dark:text-neutral-200">🌏 SOSYAL MEDYA</h3>
                <SocialsList className="mt-2" />
              </div>
            </div>
          </div>
          <form className="grid grid-cols-1 gap-6" action="#" method="post">
            <Field className="block">
              <Label>Ad Soyad</Label>
              <Input placeholder="Adınız Soyadınız" type="text" className="mt-1" />
            </Field>
            <Field className="block">
              <Label>E-posta adresi</Label>
              <Input type="email" placeholder="ornek@eposta.com" className="mt-1" />
            </Field>
            <Field className="block">
              <Label>Telefon</Label>
              <Input type="tel" placeholder="05xx xxx xx xx" className="mt-1" />
            </Field>
            <Field className="block">
              <Label>Mesajınız</Label>
              <Textarea className="mt-1" rows={6} placeholder="Kiralamak istediğiniz ekipmanı ve süresini belirtebilirsiniz." />
            </Field>
            <div>
              <ButtonPrimary type="submit">Mesaj Gönder</ButtonPrimary>
            </div>
          </form>
        </div>
      </div>

      {/* OTHER SECTIONS */}
      <div className="container mt-20 lg:mt-32">
        <Divider />
        <SectionSubscribe2 className="mt-20 lg:mt-32" />
      </div>
    </div>
  )
}

export default PageContact
