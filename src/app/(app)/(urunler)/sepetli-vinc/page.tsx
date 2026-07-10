import heroImage from '@/images/vinc/hero-sepetli.webp'
import { Metadata } from 'next'
import SepetliVincModelBolumu from '@/components/SepetliVincModelBolumu'
import ProductPageLayout from '../_components/ProductPageLayout'

export const metadata: Metadata = {
  title: 'Sepetli Vinç Kiralama ve Fiyatları 2026',
  description:
    'Sepetli vinç kiralama fiyatları, çeşitleri, kapasiteleri ve kullanım alanları. Günlük ve aylık operatörlü sepetli vinç kiralama için Vinç Burada: 0532 303 90 89.',
}

const SITE_URL = 'https://vincburada.com.tr'

const faqs = [
  {
    q: 'Sepetli vinç kiralama fiyatları ne kadar?',
    a: 'Fiyatlar; çalışma yüksekliği, kiralama süresi, vinç tipi ve şantiyenin konumuna göre değişir. Kısa süreli işlerde günlük, uzun projelerde aylık kiralama daha avantajlıdır. Net fiyat için 0532 303 90 89 numarasından ücretsiz teklif alabilirsiniz.',
  },
  {
    q: 'Sepetli vinç operatörlü mü kiralanır?',
    a: 'Evet. Tüm sepetli vinçlerimiz deneyimli ve sertifikalı operatörleriyle birlikte kiralanır. Operatör ücreti fiyata dahildir; ayrıca ehliyet veya belge gerektirmez.',
  },
  {
    q: 'Sepetli vinç kaç metreye kadar çıkabilir?',
    a: 'Filomuzda 12 metreden 70 metreye kadar farklı çalışma yüksekliklerinde sepetli vinçler bulunur. İhtiyacınıza göre en uygun yüksekliği birlikte belirleriz.',
  },
  {
    q: 'Sepetli vince kaç kişi binebilir?',
    a: 'Sepet kapasitesine bağlı olarak genellikle 2-3 kişi ve el aletleri taşınabilir. Standart sepet yük sınırı 200-400 kg aralığındadır; kapasite etiketine mutlaka uyulur.',
  },
  {
    q: 'Saatlik sepetli vinç kiralayabilir miyim?',
    a: 'Kısa süreli işler için yarım günlük (4 saatlik) kiralama seçeneğimiz mevcuttur. Tabela montajı, klima bakımı gibi hızlı işler için idealdir.',
  },
  {
    q: 'Sepetli vinç hangi işlerde kullanılır?',
    a: 'Cephe kaplama, dış cephe temizliği, tabela ve reklam panosu montajı, elektrik ve aydınlatma bakımı, ağaç budama, çatı onarımı ve inşaat işlerinde yaygın olarak kullanılır.',
  },
  {
    q: 'Kiralama için hangi belgeler gerekir?',
    a: 'Kurumsal kiralamalarda vergi levhası ve yetkili imzası, bireysel kiralamalarda kimlik fotokopisi yeterlidir. Sözleşme ve iş güvenliği evraklarını biz hazırlarız.',
  },
  {
    q: 'Aynı gün sepetli vinç gönderebiliyor musunuz?',
    a: 'İstanbul genelinde çoğu talebe aynı gün yanıt veriyoruz. Merkezimiz İkitelli OSB, Başakşehir konumunda olduğundan Avrupa Yakası\'na özellikle hızlı ulaşım sağlarız.',
  },
  {
    q: 'Sepetli vinç kiralamada yakıt kime aittir?',
    a: 'Standart uygulamada yakıt, operatör ve sigorta kiralama bedeline dahildir. Uzun süreli aylık kiralamalarda yakıt düzenlemesi sözleşmede ayrıca belirlenebilir.',
  },
  {
    q: 'Yağmurlu veya rüzgarlı havada çalışılabilir mi?',
    a: 'Güvenlik nedeniyle rüzgar hızı 12,5 m/s (yaklaşık 45 km/s) üzerindeyken yüksekte çalışma yapılmaz. Hafif yağmurda çalışma operatör değerlendirmesine bağlıdır; fırtına ve buzlanmada operasyon durdurulur.',
  },
]

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Sepetli Vinç Kiralama',
    serviceType: 'Sepetli Vinç Kiralama',
    description:
      'Günlük ve aylık operatörlü sepetli vinç kiralama hizmeti. 12-70 metre çalışma yüksekliği, teleskopik ve eklemli seçenekler.',
    url: `${SITE_URL}/sepetli-vinc`,
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
      offerCount: 6,
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
      { '@type': 'ListItem', position: 2, name: 'Sepetli Vinç Kiralama', item: `${SITE_URL}/sepetli-vinc` },
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
        wideChildren={<SepetliVincModelBolumu />}
        heroImage={heroImage}
        title="Sepetli Vinç"
        heroHeading="Sepetli Vinç Kiralama ve Fiyatları"
        subHeading="12-70 metre arası çalışma yüksekliği, sertifikalı operatör ve aynı gün teslimat ile İstanbul genelinde sepetli vinç kiralama."
      >
        <article className="flex flex-col gap-y-14">
          {/* 1 */}
          <section>
            <h2 className={h2Class}>Sepetli Vinç Nedir?</h2>
            <p className={pClass}>
              Sepetli vinç; ucunda personel taşımaya uygun bir platform (sepet) bulunan, insanların yüksekte güvenli
              şekilde çalışmasını sağlayan hidrolik bir iş makinesidir. Personel yükseltici veya manlift olarak da
              bilinir. Merdiven ve iskele kurulumunun riskli, yavaş veya imkansız olduğu noktalara dakikalar içinde
              güvenli erişim sağlar.
            </p>
            <ul className={ulClass}>
              <li>Sepet içinde çalışan personel; korkuluk, emniyet kemeri bağlantı noktaları ve acil durum indirme sistemiyle korunur.</li>
              <li>Hidrolik bom sayesinde hem dikey hem yatay erişim sağlar; engellerin üzerinden uzanabilir.</li>
              <li>Kurulumu iskeleye göre çok daha hızlıdır: çoğu işte 15-20 dakika içinde çalışmaya başlanır.</li>
            </ul>
          </section>

          {/* 2 */}
          <section>
            <h2 className={h2Class}>Sepetli Vinç Çeşitleri</h2>
            <p className={pClass}>
              İhtiyaca göre üç ana sepetli vinç tipi kullanılır. Doğru tip seçimi; çalışma yüksekliği, erişim mesafesi
              ve zemin koşullarına göre yapılır.
            </p>

            <h3 className={h3Class}>Teleskopik Sepetli Vinçler</h3>
            <p className={pClass}>
              Bomu düz bir hat üzerinde iç içe açılan segmentlerden oluşur. En yüksek dikey erişimi sağlayan tiptir;
              50-70 metre gibi yüksekliklere ulaşabilir. Gökdelen cepheleri, yüksek katlı bina dış cephe işleri ve baz
              istasyonu bakımları için idealdir.
            </p>

            <h3 className={h3Class}>Eklemli (Artikülasyonlu) Sepetli Vinçler</h3>
            <p className={pClass}>
              Bomu birden fazla eklem noktasından kırılarak hareket eder. Çatı, saçak veya ağaç gibi engellerin
              üzerinden aşarak arkasındaki noktaya erişebilir. Dar ve engelli alanlarda, avlu içlerinde ve fabrika
              içi çalışmalarda tercih edilir.
            </p>

            <h3 className={h3Class}>Araç Üstü Sepetli Vinçler</h3>
            <p className={pClass}>
              Kamyon şasisine monte edilir; kendi motoruyla trafiğe çıkarak şantiyeler arasında hızla yer değiştirir.
              Kurulum süresi çok kısadır. Cadde üzerindeki tabela, aydınlatma ve elektrik hattı işlerinde en çok
              kullanılan tiptir.
            </p>
          </section>

          {/* 3 */}
          <section>
            <h2 className={h2Class}>Sepetli Vinç Kullanım Alanları</h2>
            <p className={pClass}>
              Sepetli vinçler, yüksekte insanla yapılması gereken hemen her işte kullanılır. En yaygın üç kullanım
              alanı şunlardır:
            </p>

            <h3 className={h3Class}>İnşaat Sektöründe Kullanımı</h3>
            <ul className={ulClass}>
              <li>Cephe kaplama, mantolama ve dış cephe boya işleri</li>
              <li>Çatı montajı, oluk ve saçak onarımları</li>
              <li>Prefabrik eleman montajında personel erişimi</li>
              <li>Cam ve doğrama montajı</li>
            </ul>

            <h3 className={h3Class}>Elektrik ve Aydınlatma Bakımında Kullanımı</h3>
            <ul className={ulClass}>
              <li>Sokak ve cadde aydınlatma direklerinin bakımı</li>
              <li>Enerji nakil hattı kontrol ve onarımları</li>
              <li>Stadyum, fabrika ve depo aydınlatma armatürlerinin değişimi</li>
              <li>Baz istasyonu ve anten montajı</li>
            </ul>

            <h3 className={h3Class}>Cephe, Tabela ve Dış Cephe Temizliğinde Kullanımı</h3>
            <ul className={ulClass}>
              <li>Reklam panosu ve tabela montaj/demontajı</li>
              <li>AVM ve plaza cam cephe temizliği</li>
              <li>Bina yıkama ve dış cephe dezenfeksiyonu</li>
              <li>Ağaç budama ve peyzaj çalışmaları</li>
            </ul>
          </section>

          {/* 4 */}
          <section>
            <h2 className={h2Class}>Sepetli Vinç Teknik Özellikleri</h2>
            <p className={pClass}>
              Doğru vinç seçimi için üç temel teknik değere bakılır: çalışma yüksekliği, yatay erişim mesafesi ve
              sepet kapasitesi. Aşağıdaki tablo filomuzdaki tipik değerleri özetler:
            </p>
            <div className={tableWrapClass}>
              <table className={tableClass}>
                <thead>
                  <tr>
                    <th className={thClass}>Özellik</th>
                    <th className={thClass}>Küçük Sınıf</th>
                    <th className={thClass}>Orta Sınıf</th>
                    <th className={thClass}>Büyük Sınıf</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className={tdClass}>Çalışma yüksekliği</td>
                    <td className={tdClass}>12-18 m</td>
                    <td className={tdClass}>20-36 m</td>
                    <td className={tdClass}>40-70 m</td>
                  </tr>
                  <tr>
                    <td className={tdClass}>Yatay erişim</td>
                    <td className={tdClass}>6-10 m</td>
                    <td className={tdClass}>12-20 m</td>
                    <td className={tdClass}>20-33 m</td>
                  </tr>
                  <tr>
                    <td className={tdClass}>Sepet kapasitesi</td>
                    <td className={tdClass}>200 kg</td>
                    <td className={tdClass}>250-350 kg</td>
                    <td className={tdClass}>400-600 kg</td>
                  </tr>
                  <tr>
                    <td className={tdClass}>Dönüş açısı</td>
                    <td className={tdClass}>360°</td>
                    <td className={tdClass}>360°</td>
                    <td className={tdClass}>360°</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className={h3Class}>Sepet Kapasitesi ve Yük Taşıma Sınırı</h3>
            <p className={pClass}>
              Sepet kapasitesi; personel, el aletleri ve malzemenin toplam ağırlığını kapsar. Örneğin 250 kg
              kapasiteli bir sepette 2 personel (yaklaşık 170 kg) ile birlikte en fazla 80 kg civarı ekipman
              taşınabilir. Kapasite aşımı devrilme ve bom hasarı riski oluşturduğundan, tüm vinçlerimizde yük
              sensörü bulunur ve sınır aşıldığında sistem hareketi otomatik olarak durdurur.
            </p>
          </section>

          {/* 5 */}
          <section>
            <h2 className={h2Class}>Sepetli Vinç Kiralama Fiyatları</h2>
            <p className={pClass}>
              Sepetli vinç kiralama fiyatları sabit bir liste üzerinden değil; çalışma yüksekliği, kiralama süresi,
              vinç tipi ve lokasyona göre belirlenir. Fiyatı etkileyen ana faktörler şunlardır:
            </p>
            <ul className={ulClass}>
              <li><strong>Çalışma yüksekliği:</strong> Yükseklik arttıkça ekipman sınıfı ve fiyat yükselir.</li>
              <li><strong>Kiralama süresi:</strong> Süre uzadıkça günlük birim maliyet belirgin şekilde düşer.</li>
              <li><strong>Lokasyon:</strong> Şantiyenin merkezimize uzaklığı nakliye maliyetini etkiler.</li>
              <li><strong>Çalışma koşulları:</strong> Gece çalışması, hafta sonu ve özel izin gerektiren işler fiyata yansır.</li>
            </ul>

            <h3 className={h3Class}>Günlük Kiralama Fiyatları</h3>
            <p className={pClass}>
              Tabela montajı, klima bakımı, tek seferlik cephe kontrolü gibi kısa işler için en uygun seçenektir.
              Günlük kiralamada operatör, yakıt ve sigorta bedele dahildir. Yarım günlük (4 saat) seçenek de
              sunulmaktadır. Aynı gün teslimat çoğu bölge için mümkündür.
            </p>

            <h3 className={h3Class}>Aylık Kiralama Fiyatları</h3>
            <p className={pClass}>
              Devam eden şantiyeler ve uzun soluklu cephe projeleri için aylık kiralama, günlük birim maliyeti
              %30-50 oranında düşürür. Aylık sözleşmelerde vinç şantiyenizde sabit kalır, periyodik bakımları
              tarafımızca yapılır ve yedek ekipman garantisi verilir. Proje süresine göre özel fiyatlandırma için
              teklif isteyiniz.
            </p>
            <p className={pClass}>
              Güncel ve net fiyat için{' '}
              <a href="tel:05323039089" className="font-semibold text-orange-600 hover:underline dark:text-orange-400">
                0532 303 90 89
              </a>{' '}
              numarasından bize ulaşın; aynı gün içinde ücretsiz teklifinizi hazırlayalım.
            </p>
          </section>

          {/* 6 */}
          <section>
            <h2 className={h2Class}>Sepetli Vinç Kiralarken Dikkat Edilmesi Gerekenler</h2>
            <ul className={ulClass}>
              <li><strong>Yükseklik payı bırakın:</strong> Çalışma noktanızdan 2-3 metre daha yüksek erişimli vinç seçin.</li>
              <li><strong>Zemini kontrol edin:</strong> Vincin kurulacağı zeminin düz ve taşıma kapasitesinin yeterli olduğundan emin olun.</li>
              <li><strong>Erişim yolunu planlayın:</strong> Araç üstü vinçler için şantiye giriş genişliği ve yükseklik sınırlarını bildirin.</li>
              <li><strong>Belgeleri isteyin:</strong> Vincin periyodik kontrol raporu ve operatörün sertifikası güncel olmalıdır.</li>
              <li><strong>Sigorta kapsamını sorun:</strong> Ekipman, operatör ve üçüncü şahıs sigortalarının kiralamaya dahil olduğunu teyit edin.</li>
              <li><strong>Hava durumunu takip edin:</strong> Planlamayı yaparken rüzgarlı günler için yedek gün ekleyin.</li>
              <li><strong>Gizli maliyetlere dikkat:</strong> Nakliye, yakıt ve fazla mesai koşullarının teklifte yazılı olmasını isteyin.</li>
            </ul>
          </section>

          {/* 7 */}
          <section>
            <h2 className={h2Class}>Sepetli Vinç Kapasiteleri</h2>
            <p className={pClass}>
              Filomuzda farklı yükseklik sınıflarında sepetli vinçler bulunur. Hangi işe hangi kapasitenin uygun
              olduğunu aşağıdaki tabloda özetledik:
            </p>
            <div className={tableWrapClass}>
              <table className={tableClass}>
                <thead>
                  <tr>
                    <th className={thClass}>Yükseklik Sınıfı</th>
                    <th className={thClass}>Sepet Kapasitesi</th>
                    <th className={thClass}>Tipik Kullanım</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className={tdClass}>12-18 metre</td>
                    <td className={tdClass}>200 kg (2 kişi)</td>
                    <td className={tdClass}>Tabela, aydınlatma, ağaç budama, 4-5 katlı bina</td>
                  </tr>
                  <tr>
                    <td className={tdClass}>20-28 metre</td>
                    <td className={tdClass}>250-300 kg (2-3 kişi)</td>
                    <td className={tdClass}>Orta katlı cephe işleri, çatı onarımı, 7-9 katlı bina</td>
                  </tr>
                  <tr>
                    <td className={tdClass}>30-42 metre</td>
                    <td className={tdClass}>350-400 kg (3 kişi)</td>
                    <td className={tdClass}>Plaza cephe temizliği, mantolama, 10-14 katlı bina</td>
                  </tr>
                  <tr>
                    <td className={tdClass}>50-70 metre</td>
                    <td className={tdClass}>400-600 kg (3 kişi + ekipman)</td>
                    <td className={tdClass}>Gökdelen cephesi, kule ve baca bakımı, 15+ katlı bina</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* 8 */}
          <section>
            <h2 className={h2Class}>Sepetli Vinç Güvenlik Standartları</h2>
            <p className={pClass}>
              Yüksekte çalışma, iş güvenliğinin en kritik alanlarından biridir. Tüm operasyonlarımız aşağıdaki
              standart ve mevzuata uygun yürütülür:
            </p>
            <ul className={ulClass}>
              <li><strong>TS EN 280:</strong> Yükseltilebilen seyyar iş platformlarının tasarım ve güvenlik standardı</li>
              <li><strong>6331 sayılı İş Sağlığı ve Güvenliği Kanunu</strong> ve Yüksekte Çalışma Yönetmeliği gereklilikleri</li>
              <li><strong>Periyodik kontroller:</strong> İş Ekipmanları Yönetmeliği uyarınca yılda en az bir kez yetkili mühendis kontrolü</li>
              <li><strong>Kişisel koruyucu donanım:</strong> Paraşüt tipi emniyet kemeri, baret ve lanyard kullanımı zorunludur</li>
              <li><strong>Acil durum sistemleri:</strong> Tüm vinçlerde acil stop, manuel indirme ve yerden kumanda bulunur</li>
              <li><strong>Çalışma alanı güvenliği:</strong> Operasyon bölgesi şerit ve ikaz levhalarıyla izole edilir</li>
            </ul>
          </section>

          {/* 9 */}
          <section>
            <h2 className={h2Class}>Sepetli Vinç ile Diğer Vinç Türleri Arasındaki Farklar</h2>
            <p className={pClass}>
              En temel fark amaçtır: sepetli vinç <strong>insan yükseltmek</strong>, diğer vinçler ise{' '}
              <strong>yük kaldırmak</strong> için tasarlanmıştır. Karşılaştırma tablosu:
            </p>
            <div className={tableWrapClass}>
              <table className={tableClass}>
                <thead>
                  <tr>
                    <th className={thClass}>Kriter</th>
                    <th className={thClass}>Sepetli Vinç</th>
                    <th className={thClass}>Mobil Vinç</th>
                    <th className={thClass}>Kule Vinç</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className={tdClass}>Ana amaç</td>
                    <td className={tdClass}>Personel yükseltme</td>
                    <td className={tdClass}>Ağır yük kaldırma</td>
                    <td className={tdClass}>Sürekli yük taşıma</td>
                  </tr>
                  <tr>
                    <td className={tdClass}>İnsan taşıma</td>
                    <td className={tdClass}>Evet, tasarım gereği</td>
                    <td className={tdClass}>Hayır</td>
                    <td className={tdClass}>Hayır</td>
                  </tr>
                  <tr>
                    <td className={tdClass}>Kurulum süresi</td>
                    <td className={tdClass}>15-20 dakika</td>
                    <td className={tdClass}>30-60 dakika</td>
                    <td className={tdClass}>1-3 gün</td>
                  </tr>
                  <tr>
                    <td className={tdClass}>Mobilite</td>
                    <td className={tdClass}>Yüksek</td>
                    <td className={tdClass}>Yüksek</td>
                    <td className={tdClass}>Sabit</td>
                  </tr>
                  <tr>
                    <td className={tdClass}>Tipik proje süresi</td>
                    <td className={tdClass}>Saatlik - aylık</td>
                    <td className={tdClass}>Günlük - haftalık</td>
                    <td className={tdClass}>Aylık - yıllık</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* 10 */}
          <section>
            <h2 className={h2Class}>Sepetli Vinç Operatör Gereksinimleri</h2>
            <p className={pClass}>
              Sepetli vinç, yalnızca yetkili operatörler tarafından kullanılabilir. Vinç Burada operatörleri şu
              şartları eksiksiz karşılar:
            </p>
            <ul className={ulClass}>
              <li>MEB onaylı <strong>İş Makinesi Kullanma Sertifikası (Operatörlük Belgesi)</strong></li>
              <li>Yüksekte Çalışma Eğitimi katılım belgesi</li>
              <li>İlk yardım eğitimi ve güncel sağlık raporu (yüksekte çalışmaya uygunluk)</li>
              <li>En az 3 yıl saha deneyimi ve kullandığı vinç modeline özel oryantasyon</li>
              <li>İSG uzmanlarımız tarafından yıllık periyodik değerlendirme</li>
            </ul>
            <p className={pClass}>
              Kiralamalarımız operatör dahil yapıldığı için sizin ayrıca belge veya ehliyet bulundurmanız gerekmez.
            </p>
          </section>

          {/* 11 */}
          <section>
            <h2 className={h2Class}>Sepetli Vinç Bakım ve Periyodik Kontrolleri</h2>
            <p className={pClass}>
              Güvenli operasyonun temeli düzenli bakımdır. Filomuzdaki her vinç için uygulanan bakım programı:
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
                    <td className={tdClass}>Her gün (operasyon öncesi)</td>
                    <td className={tdClass}>Hidrolik kaçak, acil stop, korkuluk, kumanda ve sensör testleri</td>
                  </tr>
                  <tr>
                    <td className={tdClass}>Haftalık</td>
                    <td className={tdClass}>Bom pimleri, hidrolik yağ seviyesi, lastik/palet ve fren kontrolü</td>
                  </tr>
                  <tr>
                    <td className={tdClass}>Aylık</td>
                    <td className={tdClass}>Yük sensörü kalibrasyonu, kaynak ve şase çatlak kontrolü, gres bakımı</td>
                  </tr>
                  <tr>
                    <td className={tdClass}>Yıllık (zorunlu)</td>
                    <td className={tdClass}>Yetkili makine mühendisi tarafından periyodik kontrol raporu düzenlenmesi</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className={pClass}>
              Aylık kiralamalarda tüm bakımlar hizmete dahildir; olası arızada 24 saat içinde yedek ekipman
              sağlanır.
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
