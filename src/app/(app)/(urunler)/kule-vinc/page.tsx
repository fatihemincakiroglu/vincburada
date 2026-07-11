import heroImage from '@/images/vinc/hero-kule.webp'
import { Metadata } from 'next'
import KategoriUrunBolumu from '@/components/KategoriUrunBolumu'
import ProductPageLayout from '../_components/ProductPageLayout'

export const metadata: Metadata = {
  title: 'Kule Vinç Kiralama ve Fiyatları 2026',
  description:
    'Kule vinç kiralama fiyatları, çeşitleri, teknik özellikleri ve kurulum süreci. Aylık ve proje bazlı operatörlü kule vinç kiralama için Vinç Burada: 0532 303 90 89.',
}

const SITE_URL = 'https://vincburada.com.tr'

const faqs = [
  {
    q: 'Kule vinç kiralama fiyatları ne kadar?',
    a: 'Fiyatlar; vincin kaldırma kapasitesi, bom uzunluğu, kule yüksekliği, kiralama süresi ve montaj koşullarına göre belirlenir. Kule vinçler genellikle aylık veya proje bazlı kiralanır. Net fiyat için 0532 303 90 89 numarasından ücretsiz teklif alabilirsiniz.',
  },
  {
    q: 'Kule vinç kurulumu ne kadar sürer?',
    a: 'Temel hazırlığı tamamlanmış bir sahada standart bir kule vincin montajı mobil vinç desteğiyle genellikle 1-3 gün sürer. Kendi yükselen (self-erecting) modellerde bu süre birkaç saate iner.',
  },
  {
    q: 'Kule vinç için temel (ankraj) gerekli mi?',
    a: 'Sabit kule vinçlerde statik projesine uygun betonarme temel veya balast blokları gerekir. Temel projesi, vinç üreticisinin yük değerlerine göre inşaat mühendisince hazırlanır; bu süreçte teknik destek sağlıyoruz.',
  },
  {
    q: 'Kule vinç kaç ton kaldırır?',
    a: 'Model ve bom ucu mesafesine göre değişir. Filomuzdaki vinçler bom ucunda 1,2-3 ton, kuleye yakın noktada 6-12 ton aralığında kaldırma kapasitesine sahiptir. Yük tablosunu birlikte inceleyerek doğru modeli seçeriz.',
  },
  {
    q: 'Kule vinç operatörü kiralamaya dahil mi?',
    a: 'Evet. Tüm kule vinç kiralamalarımız MEB onaylı belgeye sahip, deneyimli operatörlerle birlikte yapılır. Talep halinde vardiyalı çalışma için ikinci operatör de sağlanır.',
  },
  {
    q: 'Kaç aylığına kule vinç kiralayabilirim?',
    a: 'Minimum kiralama süremiz genellikle 3 aydır; ancak proje süresine göre 6, 12 ve 24 aylık sözleşmeler yapıyoruz. Süre uzadıkça aylık birim maliyet düşer.',
  },
  {
    q: 'Rüzgarlı havada kule vinç çalışır mı?',
    a: 'Operasyon rüzgar hızı üretici limitine (genellikle 15-20 m/s) ulaştığında durdurulur. Vinç servis dışıyken bom serbest dönüşe (rüzgar gülü moduna) alınır; bu, devrilme riskini önleyen standart bir güvenlik uygulamasıdır.',
  },
  {
    q: 'Kule vinç montajı için hangi izinler gerekir?',
    a: 'Şantiye içi kurulumda yapı ruhsatı kapsamındaki İSG planı yeterlidir; bom komşu parsel veya yol üzerinden geçiyorsa ilgili belediyeden izin alınması gerekebilir. İzin süreçlerinde belge desteği veriyoruz.',
  },
  {
    q: 'Kule vinç bakımını kim yapar?',
    a: 'Aylık kiralamalarda tüm periyodik bakım ve yasal kontroller tarafımızca yapılır. Yıllık zorunlu periyodik kontrol raporu yetkili makine mühendisi tarafından düzenlenir ve şantiye dosyanıza teslim edilir.',
  },
  {
    q: 'Kule vinç mi mobil vinç mi kiralamalıyım?',
    a: 'Proje 3 aydan uzun sürecek ve sürekli dikey taşıma yapılacaksa kule vinç toplam maliyette daha avantajlıdır. Kısa süreli ve noktasal kaldırma işleri için mobil vinç tercih edilmelidir. Ücretsiz keşifle birlikte karar verebiliriz.',
  },
]

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Kule Vinç Kiralama',
    serviceType: 'Kule Vinç Kiralama',
    description:
      'Aylık ve proje bazlı operatörlü kule vinç kiralama hizmeti. Sabit, raylı ve kendi yükselen kule vinç seçenekleri, montaj ve periyodik bakım dahil.',
    url: `${SITE_URL}/kule-vinc`,
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
      offerCount: 12,
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
      { '@type': 'ListItem', position: 2, name: 'Kule Vinç Kiralama', item: `${SITE_URL}/kule-vinc` },
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
        wideChildren={<KategoriUrunBolumu handle="kule-vinc" kategoriAdi="Kule Vinç" />}
        heroImage={heroImage}
        title="Kule Vinç"
        heroHeading="Kule Vinç Kiralama ve Fiyatları"
        subHeading="Konut, gökdelen ve altyapı projeleriniz için montaj, operatör ve periyodik bakım dahil aylık kule vinç kiralama."
      >
        <article className="flex flex-col gap-y-14">
          {/* 1 */}
          <section>
            <h2 className={h2Class}>Kule Vinç Nedir?</h2>
            <p className={pClass}>
              Kule vinç; düşey bir kule (mast) ve bu kulenin üzerinde dönen yatay bir bomdan oluşan, inşaat sahasına
              sabit olarak kurulan ağır kaldırma makinesidir. Beton kovası, kalıp, demir donatı ve prefabrik elemanlar
              gibi malzemeleri şantiyenin her noktasına yüksek irtifadan taşır. Çok katlı yapıların vazgeçilmez
              ekipmanıdır.
            </p>
            <ul className={ulClass}>
              <li>Proje boyunca sahada sabit kalır; kesintisiz ve planlı dikey taşıma sağlar.</li>
              <li>Bina yükseldikçe kule ekleme (climbing) yöntemiyle vinç de yükseltilebilir.</li>
              <li>Geniş bom yarıçapı sayesinde tek noktadan tüm şantiye alanına hizmet verir.</li>
            </ul>
          </section>

          {/* 2 */}
          <section>
            <h2 className={h2Class}>Kule Vinç Çeşitleri</h2>
            <p className={pClass}>
              Şantiyenin süresi, zemin koşulları ve taşıma planına göre üç ana kule vinç tipi arasından seçim yapılır:
            </p>

            <h3 className={h3Class}>Sabit Kule Vinçler</h3>
            <p className={pClass}>
              Betonarme temel veya balast blokları üzerine kurulan klasik tiptir. En yüksek kule boyu ve kaldırma
              kapasitesine bu sınıfta ulaşılır. Yüksek katlı konut, plaza ve gökdelen projelerinin standart çözümüdür;
              bina yükseldikçe cepheye ankrajlanarak serbest yüksekliğin üzerine çıkabilir.
            </p>

            <h3 className={h3Class}>Yürüyen (Raylı) Kule Vinçler</h3>
            <p className={pClass}>
              Zemine döşenen raylar üzerinde hareket eder. Uzun ve yayvan şantiyelerde — örneğin blok sayısı fazla
              toplu konut projeleri ile köprü ve viyadük şantiyelerinde — tek vinçle çok geniş bir alana hizmet
              vermeyi sağlar. Ray hattı boyunca yükü taşıyarak ikinci bir vinç ihtiyacını ortadan kaldırabilir.
            </p>

            <h3 className={h3Class}>Kendi Yükselen Kule Vinçler</h3>
            <p className={pClass}>
              Self-erecting olarak da bilinen bu vinçler, hidrolik sistemle kendi kendine açılıp katlanır; mobil vinç
              desteği olmadan birkaç saatte kurulur. Kule boyu ve kapasitesi sabit vinçlere göre sınırlıdır; az katlı
              konut, villa ve çelik konstrüksiyon projeleri ile dar şantiyeler için ekonomik ve pratik bir çözümdür.
            </p>
          </section>

          {/* 3 */}
          <section>
            <h2 className={h2Class}>Kule Vinç Kullanım Alanları</h2>
            <p className={pClass}>
              Kule vinçler, sürekli ve yüksek irtifalı malzeme taşıma gereken her projede kullanılır. Başlıca üç alan
              öne çıkar:
            </p>

            <h3 className={h3Class}>Konut ve Gökdelen İnşaatlarında Kullanımı</h3>
            <ul className={ulClass}>
              <li>Beton kovası ile kat betonlarının dökümü</li>
              <li>Kalıp, iskele ve demir donatının katlara taşınması</li>
              <li>Cephe elemanları ve hazır banyo gibi modüler parçaların montajı</li>
              <li>Ankrajlı tırmanma sistemiyle 100 metre üzeri yapı yüksekliklerine hizmet</li>
            </ul>

            <h3 className={h3Class}>Endüstriyel Tesis Projelerinde Kullanımı</h3>
            <ul className={ulClass}>
              <li>Fabrika ve enerji santrali sahalarında çelik konstrüksiyon montajı</li>
              <li>Ağır makine ve ekipmanların yerleşim noktalarına taşınması</li>
              <li>Silo, baca ve tank imalatlarında segment kaldırma</li>
              <li>Geniş sahalarda raylı vinçle hat boyu malzeme dağıtımı</li>
            </ul>

            <h3 className={h3Class}>Köprü ve Altyapı Projelerinde Kullanımı</h3>
            <ul className={ulClass}>
              <li>Köprü ayağı ve viyadük kolonlarının kalıp-donatı işleri</li>
              <li>Prekast kiriş ve tabliye elemanlarının konumlandırılması</li>
              <li>Baraj ve metro şaft inşaatlarında düşey taşıma</li>
              <li>Uzun hat projelerinde raylı kule vinçle mobil hizmet</li>
            </ul>
          </section>

          {/* 4 */}
          <section>
            <h2 className={h2Class}>Kule Vinç Teknik Özellikleri</h2>
            <p className={pClass}>
              Kule vinç seçiminde dört ana değer incelenir: bom (jib) uzunluğu, bom ucu kapasitesi, maksimum kaldırma
              kapasitesi ve serbest kule yüksekliği. Filomuzdaki tipik değerler:
            </p>
            <div className={tableWrapClass}>
              <table className={tableClass}>
                <thead>
                  <tr>
                    <th className={thClass}>Özellik</th>
                    <th className={thClass}>Kendi Yükselen</th>
                    <th className={thClass}>Orta Sınıf Sabit</th>
                    <th className={thClass}>Ağır Sınıf Sabit</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className={tdClass}>Bom uzunluğu</td>
                    <td className={tdClass}>25-40 m</td>
                    <td className={tdClass}>50-60 m</td>
                    <td className={tdClass}>65-80 m</td>
                  </tr>
                  <tr>
                    <td className={tdClass}>Bom ucu kapasitesi</td>
                    <td className={tdClass}>0,8-1 ton</td>
                    <td className={tdClass}>1,2-2,3 ton</td>
                    <td className={tdClass}>2,5-3,5 ton</td>
                  </tr>
                  <tr>
                    <td className={tdClass}>Maksimum kapasite</td>
                    <td className={tdClass}>2-4 ton</td>
                    <td className={tdClass}>6-10 ton</td>
                    <td className={tdClass}>12-24 ton</td>
                  </tr>
                  <tr>
                    <td className={tdClass}>Serbest kule yüksekliği</td>
                    <td className={tdClass}>20-30 m</td>
                    <td className={tdClass}>45-60 m</td>
                    <td className={tdClass}>60-80 m (ankrajla sınırsız)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className={h3Class}>Bom Uzunluğu ve Kaldırma Kapasitesi</h3>
            <p className={pClass}>
              Kule vinçlerde kapasite, yükün kuleye olan mesafesine göre değişir: yük arabası bom ucuna yaklaştıkça
              kaldırılabilecek ağırlık azalır. Örneğin maksimum 8 ton kapasiteli bir vinç, 60 metrelik bom ucunda
              yaklaşık 1,5 ton kaldırabilir. Bu nedenle vinç seçiminde &quot;en ağır yükünüzü hangi mesafede
              kaldıracağınız&quot; sorusuna göre yük tablosu incelenir; vinç konumu bu hesaba göre planlanır.
            </p>
          </section>

          {/* 5 */}
          <section>
            <h2 className={h2Class}>Kule Vinç Kiralama Fiyatları</h2>
            <p className={pClass}>
              Kule vinç kiralamada fiyat; ekipman bedelinin yanında montaj, nakliye, operatör ve bakım kalemlerinden
              oluşur. Fiyatı belirleyen ana faktörler:
            </p>
            <ul className={ulClass}>
              <li><strong>Vinç sınıfı:</strong> Bom uzunluğu, kapasite ve kule yüksekliği arttıkça bedel yükselir.</li>
              <li><strong>Kiralama süresi:</strong> Uzun dönem sözleşmelerde aylık birim maliyet belirgin düşer.</li>
              <li><strong>Montaj koşulları:</strong> Temel tipi, ankraj sayısı ve montajda kullanılacak mobil vinç sınıfı maliyeti etkiler.</li>
              <li><strong>Operatör ve vardiya:</strong> Tek veya çift vardiya çalışma, operatör maliyetini belirler.</li>
            </ul>

            <h3 className={h3Class}>Aylık Kiralama Fiyatları</h3>
            <p className={pClass}>
              Standart uygulama aylık kiralamadır ve genellikle 3 ay ve üzeri sözleşme yapılır. Aylık bedele
              operatör, periyodik bakım ve yasal kontroller dahildir; montaj-demontaj ve nakliye genellikle tek
              seferlik ayrı kalem olarak fiyatlandırılır. Süre uzadıkça aylık birim fiyat kademeli olarak düşer.
            </p>

            <h3 className={h3Class}>Proje Bazlı Kiralama Fiyatları</h3>
            <p className={pClass}>
              Süresi net tanımlı projelerde tüm kalemleri (montaj, kira, operatör, bakım, demontaj) kapsayan tek bir
              anahtar teslim fiyat verilebilir. Bu model, bütçe planlaması yapan yükleniciler için öngörülebilirlik
              sağlar. Keşif sonrasında projenize özel yazılı teklif hazırlanır.
            </p>
            <p className={pClass}>
              Güncel ve net fiyat için{' '}
              <a href="tel:+905323039089" className="font-semibold text-orange-600 hover:underline dark:text-orange-400">
                0532 303 90 89
              </a>{' '}
              numarasından bize ulaşın; sahanız için ücretsiz keşif planlayalım.
            </p>
          </section>

          {/* 6 */}
          <section>
            <h2 className={h2Class}>Kule Vinç Kiralarken Dikkat Edilmesi Gerekenler</h2>
            <ul className={ulClass}>
              <li><strong>Yük tablosunu inceleyin:</strong> En ağır yükünüzü, kaldırılacağı mesafede taşıyabilecek modeli seçin.</li>
              <li><strong>Vinç konumunu planlayın:</strong> Bom yarıçapının tüm çalışma alanını ve malzeme stok sahasını kapsadığından emin olun.</li>
              <li><strong>Temel projesini erken hazırlatın:</strong> Temel betonunun kür süresi montaj takvimini etkiler.</li>
              <li><strong>Komşu parsel geçişlerini kontrol edin:</strong> Bom komşu alan üzerinden dönüyorsa izin sürecini önceden başlatın.</li>
              <li><strong>Montaj-demontaj bedelini netleştirin:</strong> Bu kalemlerin teklifte yazılı olmasını isteyin.</li>
              <li><strong>Belgeleri isteyin:</strong> Periyodik kontrol raporu, operatör belgesi ve sigorta poliçelerini teyit edin.</li>
              <li><strong>Elektrik altyapısını hazırlayın:</strong> Kule vinçler şebeke elektriğiyle çalışır; gerekli güç ve pano ihtiyacını önceden öğrenin.</li>
            </ul>
          </section>

          {/* 7 */}
          <section>
            <h2 className={h2Class}>Kule Vinç Kurulum Süreci</h2>
            <p className={pClass}>
              Kule vinç kurulumu, keşiften devreye almaya kadar planlı bir mühendislik sürecidir. Standart akış şu
              adımlardan oluşur:
            </p>
            <div className={tableWrapClass}>
              <table className={tableClass}>
                <thead>
                  <tr>
                    <th className={thClass}>Aşama</th>
                    <th className={thClass}>Yapılan İş</th>
                    <th className={thClass}>Tipik Süre</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className={tdClass}>1. Keşif ve planlama</td>
                    <td className={tdClass}>Saha incelemesi, vinç konumu ve model seçimi, yük planı</td>
                    <td className={tdClass}>1 gün</td>
                  </tr>
                  <tr>
                    <td className={tdClass}>2. Temel imalatı</td>
                    <td className={tdClass}>Statik projeye göre betonarme temel veya balast hazırlığı</td>
                    <td className={tdClass}>1 hafta + kür süresi</td>
                  </tr>
                  <tr>
                    <td className={tdClass}>3. Nakliye</td>
                    <td className={tdClass}>Kule, bom ve karşı ağırlıkların tırlarla sahaya sevkiyatı</td>
                    <td className={tdClass}>1 gün</td>
                  </tr>
                  <tr>
                    <td className={tdClass}>4. Montaj</td>
                    <td className={tdClass}>Mobil vinç desteğiyle kule, kabin ve bom montajı</td>
                    <td className={tdClass}>1-3 gün</td>
                  </tr>
                  <tr>
                    <td className={tdClass}>5. Test ve devreye alma</td>
                    <td className={tdClass}>Yük testleri, limit ayarları ve periyodik kontrol raporu</td>
                    <td className={tdClass}>1 gün</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className={pClass}>
              Bina yükseldikçe yapılan kule ekleme (tırmanma) operasyonları ve proje sonundaki demontaj da aynı ekip
              tarafından planlanır; şantiye programınız aksamaz.
            </p>
          </section>

          {/* 8 */}
          <section>
            <h2 className={h2Class}>Kule Vinç Güvenlik Standartları</h2>
            <p className={pClass}>
              Kule vinç operasyonları, şantiyenin en yüksek riskli faaliyetleri arasındadır ve sıkı mevzuata tabidir.
              Tüm ekipman ve operasyonlarımız şu standartlara uygundur:
            </p>
            <ul className={ulClass}>
              <li><strong>TS EN 14439:</strong> Kule vinçlerin tasarım ve güvenlik gereklilikleri standardı</li>
              <li><strong>6331 sayılı İş Sağlığı ve Güvenliği Kanunu</strong> ve Yapı İşlerinde İSG Yönetmeliği</li>
              <li><strong>Periyodik kontroller:</strong> İş Ekipmanları Yönetmeliği uyarınca yılda en az bir kez yetkili mühendis kontrolü</li>
              <li><strong>Aşırı yük ve moment sınırlayıcılar:</strong> Kapasite aşımında hareketi otomatik durduran elektronik sistemler</li>
              <li><strong>Anemometre:</strong> Rüzgar hızı limit aşımında sesli/görsel uyarı ve operasyon durdurma</li>
              <li><strong>Çarpışma önleme:</strong> Birden fazla vincin çalıştığı sahalarda anti-collision sistemi kurulumu</li>
              <li><strong>Servis dışı modu:</strong> Vardiya sonunda bomun serbest dönüşe alınması ve kanca parkı prosedürü</li>
            </ul>
          </section>

          {/* 9 */}
          <section>
            <h2 className={h2Class}>Kule Vinç ile Diğer Vinç Türleri Arasındaki Farklar</h2>
            <p className={pClass}>
              Kule vinci diğer tiplerden ayıran temel özellik, sahaya sabit kurulup <strong>proje boyunca kesintisiz
              hizmet</strong> vermesidir. Karşılaştırma tablosu:
            </p>
            <div className={tableWrapClass}>
              <table className={tableClass}>
                <thead>
                  <tr>
                    <th className={thClass}>Kriter</th>
                    <th className={thClass}>Kule Vinç</th>
                    <th className={thClass}>Mobil Vinç</th>
                    <th className={thClass}>Hiyap Vinç</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className={tdClass}>Kurulum</td>
                    <td className={tdClass}>1-3 gün, temel gerekir</td>
                    <td className={tdClass}>30-60 dakika</td>
                    <td className={tdClass}>5-10 dakika</td>
                  </tr>
                  <tr>
                    <td className={tdClass}>Çalışma yüksekliği</td>
                    <td className={tdClass}>Ankrajla 200+ m</td>
                    <td className={tdClass}>20-100 m</td>
                    <td className={tdClass}>10-25 m</td>
                  </tr>
                  <tr>
                    <td className={tdClass}>Mobilite</td>
                    <td className={tdClass}>Sabit (raylı hariç)</td>
                    <td className={tdClass}>Yüksek</td>
                    <td className={tdClass}>Çok yüksek</td>
                  </tr>
                  <tr>
                    <td className={tdClass}>Enerji kaynağı</td>
                    <td className={tdClass}>Elektrik</td>
                    <td className={tdClass}>Dizel</td>
                    <td className={tdClass}>Araç hidroliği (PTO)</td>
                  </tr>
                  <tr>
                    <td className={tdClass}>İdeal proje süresi</td>
                    <td className={tdClass}>3 ay - 2+ yıl</td>
                    <td className={tdClass}>Saatlik - haftalık</td>
                    <td className={tdClass}>Saatlik - günlük</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* 10 */}
          <section>
            <h2 className={h2Class}>Kule Vinç Operatör Gereksinimleri</h2>
            <p className={pClass}>
              Kule vinç yalnızca yetkili operatörlerce kullanılabilir; kabinde geçen uzun mesailer deneyim ve fiziksel
              uygunluk gerektirir. Operatörlerimiz şu şartları karşılar:
            </p>
            <ul className={ulClass}>
              <li>MEB onaylı <strong>Kule Vinç Operatörlük Belgesi</strong></li>
              <li>Yüksekte Çalışma Eğitimi ve kule tırmanışına uygunluk sağlık raporu</li>
              <li>Telsiz ve işaretçi (sinyalci) ile koordineli çalışma eğitimi</li>
              <li>En az 5 yıl şantiye deneyimi ve kullanılan vinç modeline özel oryantasyon</li>
              <li>Vardiyalı projelerde dinlenme sürelerine tam uyum; talep halinde yedek operatör</li>
            </ul>
            <p className={pClass}>
              Yer ekibiyle iletişim için eğitimli işaretçi bulundurulması İSG mevzuatı gereğidir; talep halinde
              işaretçi personel de tarafımızca sağlanır.
            </p>
          </section>

          {/* 11 */}
          <section>
            <h2 className={h2Class}>Kule Vinç Bakım ve Periyodik Kontrolleri</h2>
            <p className={pClass}>
              Aylarca kesintisiz çalışan bir ekipmanda planlı bakım, hem güvenliğin hem de şantiye programının
              sigortasıdır. Uyguladığımız bakım programı:
            </p>
            <div className={tableWrapClass}>
              <table className={tableClass}>
                <thead>
                  <tr>
                    <th className={thClass}>Periyot</th>
                    <th className={thClass}>Yapılan Kontroller</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className={tdClass}>Her vardiya öncesi</td>
                    <td className={tdClass}>Fren, limit switch, kanca emniyet mandalı, halat ve kumanda testleri</td>
                  </tr>
                  <tr>
                    <td className={tdClass}>Haftalık</td>
                    <td className={tdClass}>Cıvata tork kontrolü, halat yağlama, elektrik pano ve topraklama kontrolü</td>
                  </tr>
                  <tr>
                    <td className={tdClass}>Aylık</td>
                    <td className={tdClass}>Redüktör ve motor bakımı, ankraj bağlantıları, yapısal çatlak kontrolü</td>
                  </tr>
                  <tr>
                    <td className={tdClass}>Yıllık (zorunlu)</td>
                    <td className={tdClass}>Yetkili makine mühendisi tarafından yük testli periyodik kontrol raporu</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className={pClass}>
              Kiralama süresince tüm bakım ve kontroller hizmet bedeline dahildir; raporlar şantiye İSG dosyanız için
              düzenli olarak teslim edilir.
            </p>
          </section>

          {/* 12 */}
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
