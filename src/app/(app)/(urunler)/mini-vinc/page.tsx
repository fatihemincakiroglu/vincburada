import heroImage from '@/images/vinc/jekko/hero-mini.webp'
import { Metadata } from 'next'
import Link from 'next/link'
import KategoriUrunBolumu from '@/components/KategoriUrunBolumu'
import ProductPageLayout from '../_components/ProductPageLayout'

export const metadata: Metadata = {
  title: 'Mini Vinç (Örümcek Vinç) Kiralama ve Fiyatları 2026',
  description:
    'Mini vinç / örümcek vinç kiralama fiyatları ve modelleri. Kapıdan geçip 8 ton kaldıran paletli mini vinçler, elektrikli seçenekler. Teklif: 0532 303 90 89.',
}

const SITE_URL = 'https://vincburada.com.tr'

const faqs = [
  {
    q: 'Mini vinç kiralama fiyatları ne kadar?',
    a: 'Fiyat; kaldırılacak yükün ağırlığı, çalışma yüksekliği, işin süresi ve jib/manipülatör gibi ek ekipman ihtiyacına göre belirlenir. Günlük ve haftalık kiralamada birim fiyat düşer. Net fiyat için 0532 303 90 89 numarasından ücretsiz teklif alabilirsiniz.',
  },
  {
    q: 'Mini vinç (örümcek vinç) nedir?',
    a: 'Paletli şasi üzerinde teleskopik bomu ve dört yöne açılan örümcek bacağına benzeyen destek ayakları olan kompakt vinçlerdir. Kapalı halde standart bir kapıdan geçebilecek kadar dar (1,5 m civarı) olmalarına rağmen 8 tona kadar yük kaldırabilirler.',
  },
  {
    q: 'Mini vinç kaç ton kaldırır?',
    a: 'Filomuzdaki Jekko SPX1280, minimum yarıçapta 8.000 kg kaldırma kapasitesine sahiptir. Kapasite, yükün makineye uzaklığına göre değişir; 10 m yarıçapta yaklaşık 1,5 ton, 16 m yarıçapta 600 kg taşınabilir.',
  },
  {
    q: 'Mini vinç bina içinde çalışabilir mi?',
    a: 'Evet, en büyük avantajı budur. 1,45 m genişlik ve 2,05 m yükseklikle kapı ve koridorlardan geçer; elektrikli (lityum bataryalı) modelimiz sıfır emisyonla AVM, fabrika ve müze gibi kapalı alanlarda çalışabilir.',
  },
  {
    q: 'Örümcek vinç asansörle üst kata çıkarılabilir mi?',
    a: 'Yaklaşık 7-8 ton servis ağırlığı nedeniyle standart asansörlere sığmaz; ancak kule vinç veya mobil vinçle çatıya/ara kata alınıp orada çalışabilir. Zemin yükü değeri (0,72-0,79 kg/cm²) çoğu betonarme döşeme için uygundur.',
  },
  {
    q: 'Cam montajı için mini vinç kullanılır mı?',
    a: 'Evet. JIB500GR cam/boru tutucu manipülatörlü konfigürasyonumuz, 500 kg\'a kadar cam panelleri 360° döndürerek milimetrik hassasiyetle yerine oturtur. Cam cephe ve giydirme cephe işlerinin standart ekipmanıdır.',
  },
  {
    q: 'Mini vinç eğimli zeminde çalışabilir mi?',
    a: 'Destek ayakları birbirinden bağımsız uzayıp kısalabildiği için 930 mm\'ye kadar kot farkını dengeler; merdiven ve rampa kenarlarında bile teraziye alınabilir. Palet yürüyüşünde %26 eğime kadar tırmanabilir.',
  },
  {
    q: 'Pick & Carry ne demek?',
    a: 'Vincin yükü askıda taşıyarak palet üzerinde yer değiştirebilmesidir. SPX1280, ayaklar kapalıyken 2.000 kg\'a kadar yükü asılı halde taşıyabilir; bu, fabrika içi makine yerleşimlerinde büyük hız kazandırır.',
  },
  {
    q: 'Elektrikli mini vinç ne kadar süre çalışır?',
    a: '96V 400Ah lityum batarya, tipik bir montaj günündeki aralıklı kullanımı rahatlıkla karşılar. Şarj cihazıyla mola aralarında ara şarj yapılabilir; ayrıca prize bağlı sürekli çalışma da mümkündür.',
  },
  {
    q: 'Operatör kiralamaya dahil mi?',
    a: 'Evet. Mini vinçlerimiz, bu makine tipine özel eğitimli ve belgeli operatörlerimizle birlikte gelir. Nakliye, sigorta ve kurulum bedele dahildir.',
  },
]

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Mini Vinç Kiralama',
    serviceType: 'Mini Vinç (Örümcek Vinç) Kiralama',
    description:
      'Operatörlü mini paletli örümcek vinç kiralama. Dar alan, bina içi ve cam montajı operasyonları için dizel ve elektrikli modeller.',
    url: `${SITE_URL}/mini-vinc`,
    areaServed: { '@type': 'City', name: 'İstanbul' },
    provider: {
      '@type': 'LocalBusiness',
      name: 'Vinç Burada',
      telephone: '+905323039089',
      url: SITE_URL,
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'İkitelli OSB, Giyim Sanatkarları İş ve Ticaret Merkezi D:4.Ada A Blok Kat:1 D:112',
        postalCode: '34490',
        addressLocality: 'Başakşehir',
        addressRegion: 'İstanbul',
        addressCountry: 'TR',
      },
    },
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'TRY',
      offerCount: 4,
      availability: 'https://schema.org/InStock',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Ana Sayfa', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Mini Vinç Kiralama', item: `${SITE_URL}/mini-vinc` },
    ],
  },
]

const h2Class = 'text-2xl font-semibold text-neutral-900 sm:text-3xl dark:text-neutral-100'
const h3Class = 'mt-8 text-xl font-semibold text-neutral-900 dark:text-neutral-100'
const pClass = 'mt-4 text-base/7 text-neutral-600 dark:text-neutral-400'
const ulClass = 'mt-4 list-disc space-y-2 ps-6 text-base/7 text-neutral-600 marker:text-orange-500 dark:text-neutral-400'
const tableWrapClass = 'mt-6 overflow-x-auto rounded-2xl border border-neutral-200 dark:border-neutral-700'
const tableClass = 'w-full min-w-[560px] text-start text-sm'
const thClass = 'bg-neutral-50 px-4 py-3 text-start font-semibold text-neutral-900 dark:bg-neutral-800 dark:text-neutral-100'
const tdClass = 'border-t border-neutral-200 px-4 py-3 text-neutral-600 dark:border-neutral-700 dark:text-neutral-400'

const Page = () => {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ProductPageLayout
        wideChildren={<KategoriUrunBolumu handle="mini-vinc" kategoriAdi="Mini Vinç" />}
        heroImage={heroImage}
        title="Mini Vinç"
        heroHeading="Mini Vinç (Örümcek Vinç) Kiralama ve Fiyatları"
        subHeading="Kapıdan geçip 8 ton kaldıran paletli mini örümcek vinçler; bina içi, dar alan ve cam montajı operasyonları için dizel ve tam elektrikli modellerle hizmetinizdeyiz."
      >
        <article className="flex flex-col gap-y-14">
          {/* 1 */}
          <section>
            <h2 className={h2Class}>Mini Vinç Nedir?</h2>
            <p className={pClass}>
              Mini vinç (örümcek vinç / spider crane); paletli bir alt şasi, teleskopik bom ve dört yöne bağımsız
              açılan destek ayaklarından oluşan kompakt kaldırma makinesidir. Kapalı konumda yaklaşık 1,45 metre
              genişliğe ve 2,05 metre yüksekliğe iner; yani standart bir çift kanatlı kapıdan geçebilir. Buna rağmen
              destek ayaklarını açtığında 8 tona kadar yük kaldırır. Adını, açılmış ayaklarının örümcek bacağını
              andıran görüntüsünden alır.
            </p>
            <ul className={ulClass}>
              <li>Standart kapı ve koridorlardan geçerek binanın içinde kurulabilir.</li>
              <li>Bağımsız ayarlanan ayaklarıyla merdiven ve eğimli zeminlerde teraziye alınır.</li>
              <li>Elektrikli modelleri sıfır emisyon ve düşük gürültüyle kapalı alanda çalışır.</li>
              <li>Pick &amp; Carry modunda yükü askıda taşıyarak yer değiştirebilir.</li>
            </ul>
          </section>

          {/* 2 */}
          <section>
            <h2 className={h2Class}>Filomuzdaki Mini Vinç: Jekko SPX1280</h2>
            <p className={pClass}>
              Filomuzun mini vinç omurgasını, İtalyan Jekko markasının amiral gemisi SPX1280 oluşturur. EN 13000:2014
              standardına göre üretilen makine, iki güç seçeneği ve zengin jib ekipmanlarıyla gelir:
            </p>

            <h3 className={h3Class}>SPX1280 CDH-3B (Dizel)</h3>
            <p className={pClass}>
              18,5 kW (25 HP) dizel motorlu standart versiyondur. 4,9-17,7 m teleskopik bom, 360° kesintisiz dönüş ve
              8.000 kg maksimum kapasite sunar. Opsiyonel üç fazlı elektrik pompası (Powerpack) ile gerektiğinde
              prizden de çalışabilir.
            </p>

            <h3 className={h3Class}>SPX1280 CL-3 (Elektrikli)</h3>
            <p className={pClass}>
              96V 400Ah lityum bataryalı, 20 kW elektrik motorlu tam elektrikli versiyondur. Boyut ve kapasite olarak
              dizel ikiziyle aynıdır; egzoz gazı üretmediği ve sessiz çalıştığı için AVM, hastane, müze ve gıda tesisi
              gibi kapalı alanların tek seçeneğidir.
            </p>

            <h3 className={h3Class}>Jib ve Manipülatör Konfigürasyonları</h3>
            <p className={pClass}>
              Ana bomun ucuna takılan ekipmanlarla makinenin yeteneği işe göre genişletilir: hidrolik eklemli
              JIB1502.3HX ile kanca yüksekliği 26,7 metreye, çalışma yarıçapı 20 metreye çıkar; JIB500GR cam/boru
              tutucu (grabber) ile 500 kg&apos;a kadar cam paneller 360° döndürülerek hassas şekilde monte edilir.
              Ayrıca hafif JIB3502GX (3,5 t) ve kafes JIB1502.1FL uzatmaları da mevcuttur.
            </p>
          </section>

          {/* 3 */}
          <section>
            <h2 className={h2Class}>Mini Vinç Teknik Özellikleri</h2>
            <div className={tableWrapClass}>
              <table className={tableClass}>
                <thead>
                  <tr>
                    <th className={thClass}>Özellik</th>
                    <th className={thClass}>SPX1280 CDH-3B</th>
                    <th className={thClass}>SPX1280 CL-3</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className={tdClass}>Maksimum kapasite</td>
                    <td className={tdClass}>8.000 kg</td>
                    <td className={tdClass}>8.000 kg</td>
                  </tr>
                  <tr>
                    <td className={tdClass}>Bom uzunluğu</td>
                    <td className={tdClass}>4,9 - 17,7 m</td>
                    <td className={tdClass}>4,9 - 17,7 m</td>
                  </tr>
                  <tr>
                    <td className={tdClass}>Güç kaynağı</td>
                    <td className={tdClass}>Dizel 18,5 kW (25 HP)</td>
                    <td className={tdClass}>Lityum 96V 400Ah / 20 kW</td>
                  </tr>
                  <tr>
                    <td className={tdClass}>Kapalı genişlik / yükseklik</td>
                    <td className={tdClass}>1.450 / 2.050 mm</td>
                    <td className={tdClass}>1.450 / 2.050 mm</td>
                  </tr>
                  <tr>
                    <td className={tdClass}>Servis ağırlığı</td>
                    <td className={tdClass}>7.100 kg</td>
                    <td className={tdClass}>7.900 kg</td>
                  </tr>
                  <tr>
                    <td className={tdClass}>Dönüş</td>
                    <td className={tdClass}>360° kesintisiz</td>
                    <td className={tdClass}>360° kesintisiz</td>
                  </tr>
                  <tr>
                    <td className={tdClass}>Pick &amp; Carry kapasitesi</td>
                    <td className={tdClass}>2.000 kg</td>
                    <td className={tdClass}>2.000 kg</td>
                  </tr>
                  <tr>
                    <td className={tdClass}>Maks. rüzgar hızı (çalışma)</td>
                    <td className={tdClass}>13,8 m/s</td>
                    <td className={tdClass}>13,8 m/s</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className={pClass}>
              Değerler üretici teknik dökümanından (REV3.0) alınmıştır; kaldırma kapasiteleri yarıçapa göre değişir ve
              operasyon öncesi yük tablosu üzerinden planlanır.
            </p>
          </section>

          {/* 4 */}
          <section>
            <h2 className={h2Class}>Mini Vinç Kullanım Alanları</h2>
            <ul className={ulClass}>
              <li>
                <strong>Cam ve giydirme cephe montajı:</strong> Grabber manipülatörle cam paneller vakumla tutulup
                milimetrik hassasiyetle yerleştirilir.
              </li>
              <li>
                <strong>Bina içi makine yerleşimi:</strong> Fabrika ve atölyelerde kapıdan girip pres, CNC ve
                jeneratör gibi yükleri konumlandırır.
              </li>
              <li>
                <strong>Çatı ve çelik konstrüksiyon:</strong> Kule vinçle çatıya alınan mini vinç, üst kotta bağımsız
                kaldırma istasyonu olarak çalışır.
              </li>
              <li>
                <strong>AVM, hastane, müze işleri:</strong> Elektrikli modelle mesai dışı saatlerde sessiz ve
                emisyonsuz operasyon yapılır.
              </li>
              <li>
                <strong>Altyapı ve dar sokak işleri:</strong> Mobil vincin giremediği avlu, bahçe ve tarihi dokuda
                kaldırma çözümü sunar.
              </li>
            </ul>
          </section>

          {/* 5 */}
          <section>
            <h2 className={h2Class}>Mini Vinç mi, Mobil Vinç mi?</h2>
            <p className={pClass}>
              İki ekipman birbirinin alternatifi değil, tamamlayıcısıdır. Seçim; erişim, kapasite ve alan kısıtına
              göre yapılır:
            </p>
            <div className={tableWrapClass}>
              <table className={tableClass}>
                <thead>
                  <tr>
                    <th className={thClass}>Kriter</th>
                    <th className={thClass}>Mini Vinç</th>
                    <th className={thClass}>Mobil Vinç</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className={tdClass}>Çalışma alanı</td>
                    <td className={tdClass}>Bina içi, dar avlu, çatı üstü</td>
                    <td className={tdClass}>Açık saha, geniş şantiye</td>
                  </tr>
                  <tr>
                    <td className={tdClass}>Kapasite</td>
                    <td className={tdClass}>8 tona kadar</td>
                    <td className={tdClass}>40 - 1.200 ton</td>
                  </tr>
                  <tr>
                    <td className={tdClass}>Kurulum alanı</td>
                    <td className={tdClass}>~4,6 x 4,6 m</td>
                    <td className={tdClass}>8 x 8 m ve üzeri</td>
                  </tr>
                  <tr>
                    <td className={tdClass}>Kapalı alan çalışması</td>
                    <td className={tdClass}>Evet (elektrikli modelle)</td>
                    <td className={tdClass}>Hayır</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className={pClass}>
              Yükünüz 8 tonun üzerindeyse veya açık sahada yüksek erişim gerekiyorsa{' '}
              <Link href="/mobil-vinc" className="font-medium text-orange-600 hover:underline">
                mobil vinç kiralama
              </Link>{' '}
              sayfamıza göz atabilirsiniz.
            </p>
          </section>

          {/* 6 */}
          <section>
            <h2 className={h2Class}>Sıkça Sorulan Sorular</h2>
            <dl className="mt-6 space-y-8">
              {faqs.map((faq) => (
                <div key={faq.q}>
                  <dt>
                    <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">{faq.q}</h3>
                  </dt>
                  <dd className="mt-2 text-base/7 text-neutral-600 dark:text-neutral-400">{faq.a}</dd>
                </div>
              ))}
            </dl>
          </section>
        </article>
      </ProductPageLayout>
    </>
  )
}

export default Page
