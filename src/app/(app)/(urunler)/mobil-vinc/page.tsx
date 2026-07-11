import heroImage from '@/images/vinc/hero-mobil.webp'
import { Metadata } from 'next'
import KategoriUrunBolumu from '@/components/KategoriUrunBolumu'
import ProductPageLayout from '../_components/ProductPageLayout'

export const metadata: Metadata = {
  title: 'Mobil Vinç Kiralama ve Fiyatları 2026',
  description:
    'Mobil vinç kiralama fiyatları, çeşitleri, tonaj kapasiteleri ve kullanım alanları. Günlük ve proje bazlı operatörlü mobil vinç kiralama için Vinç Burada: 0532 303 90 89.',
}

const SITE_URL = 'https://vincburada.com.tr'

const faqs = [
  {
    q: 'Mobil vinç kiralama fiyatları ne kadar?',
    a: 'Fiyatlar; vincin tonaj kapasitesi, bom uzunluğu, çalışma süresi ve şantiyenin konumuna göre belirlenir. Kısa işlerde saatlik/günlük, uzun operasyonlarda proje bazlı fiyatlandırma yapılır. Net fiyat için 0532 303 90 89 numarasından ücretsiz teklif alabilirsiniz.',
  },
  {
    q: 'Mobil vinç kaç ton kaldırır?',
    a: 'Filomuzda 25 tondan 500 tona kadar farklı kapasitelerde mobil vinçler bulunur. Kaldırma kapasitesi bom açısı ve mesafeye göre değiştiğinden, yükünüzün ağırlığı ve konumuna göre doğru tonajı birlikte belirleriz.',
  },
  {
    q: 'Mobil vinç aynı gün gelebilir mi?',
    a: 'Evet. Mobil vinçler kendi şasesiyle trafiğe çıktığından İstanbul genelinde çoğu talebe aynı gün yanıt veriyoruz. Acil kaldırma işleriniz için 7/24 bize ulaşabilirsiniz.',
  },
  {
    q: 'Mobil vinç için sahada nasıl bir zemin gerekir?',
    a: 'Vinç, ayaklarını (outrigger) açarak yükü zemine aktarır. Zeminin düz ve taşıma kapasitesinin yeterli olması gerekir; gerekli durumlarda çelik plakalar ile yük dağıtımı yapılır. Keşifte zemin durumu birlikte değerlendirilir.',
  },
  {
    q: 'Operatör kiralamaya dahil mi?',
    a: 'Evet. Tüm mobil vinçlerimiz MEB onaylı belgeye sahip deneyimli operatörleriyle birlikte kiralanır; operatör, yakıt ve sigorta bedele dahildir.',
  },
  {
    q: 'Saatlik mobil vinç kiralanabilir mi?',
    a: 'Evet. Makine indirme-bindirme, klima santrali montajı gibi kısa işler için minimum 4 saatlik kiralama seçeneğimiz vardır. İş birkaç saat sürse bile nakliye (gidiş-dönüş yol) bedeli fiyata yansır.',
  },
  {
    q: 'Şehirler arası mobil vinç gönderiyor musunuz?',
    a: 'Evet. Proje bazlı işlerde Marmara Bölgesi başta olmak üzere Türkiye genelinde hizmet veriyoruz. Şehir dışı işlerde konaklama ve yol bedeli teklife dahil edilir.',
  },
  {
    q: 'Mobil vinç ile insan kaldırılabilir mi?',
    a: 'Hayır. Mobil vinçler yük kaldırma makinesidir; insan yükseltmek için tasarlanmış ve sertifikalandırılmış sepetli vinç (manlift) kullanılması gerekir. Bu ayrım yasal bir zorunluluktur.',
  },
  {
    q: 'Ağır ve gabari dışı yükler için izin gerekir mi?',
    a: 'Yüksek tonajlı vinçlerin karayolunda seyri için Karayolları özel yük taşıma izni gerekebilir. İzin süreçlerini ve güzergah planlamasını tarafımızca yürütüyoruz.',
  },
  {
    q: 'Rüzgarlı havada kaldırma yapılır mı?',
    a: 'Rüzgar hızı, üreticinin yük tablosunda belirtilen limiti (genellikle 9-14 m/s, yüke göre değişir) aştığında operasyon durdurulur. Geniş yüzeyli yüklerde limit daha da düşer; planlamada yedek gün önerilir.',
  },
]

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Mobil Vinç Kiralama',
    serviceType: 'Mobil Vinç Kiralama',
    description:
      'Saatlik, günlük ve proje bazlı operatörlü mobil vinç kiralama hizmeti. 25-500 ton kapasite aralığı, aynı gün sevkiyat.',
    url: `${SITE_URL}/mobil-vinc`,
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
      { '@type': 'ListItem', position: 2, name: 'Mobil Vinç Kiralama', item: `${SITE_URL}/mobil-vinc` },
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
        wideChildren={<KategoriUrunBolumu handle="mobil-vinc" kategoriAdi="Mobil Vinç" />}
        heroImage={heroImage}
        title="Mobil Vinç"
        heroHeading="Mobil Vinç Kiralama ve Fiyatları"
        subHeading="25-500 ton kapasite aralığı, sertifikalı operatör ve aynı gün sevkiyat ile saatlik, günlük ve proje bazlı mobil vinç kiralama."
      >
        <article className="flex flex-col gap-y-14">
          {/* 1 */}
          <section>
            <h2 className={h2Class}>Mobil Vinç Nedir?</h2>
            <p className={pClass}>
              Mobil vinç; lastik tekerlekli veya paletli bir şase üzerine monte edilmiş, kendi gücüyle hareket
              edebilen teleskopik ya da kafes bomlu kaldırma makinesidir. Sabit kurulum gerektirmeden sahaya gelir,
              ayaklarını açar ve dakikalar içinde ağır yük kaldırmaya başlar. Noktasal ve kısa süreli kaldırma
              işlerinin standart çözümüdür.
            </p>
            <ul className={ulClass}>
              <li>Kendi şasesiyle trafiğe çıkar; şantiyeler arasında aynı gün yer değiştirebilir.</li>
              <li>Kurulum süresi tipik olarak 30-60 dakikadır; temel veya montaj gerektirmez.</li>
              <li>Teleskopik bom sayesinde farklı yükseklik ve mesafelere aynı ekipmanla erişir.</li>
            </ul>
          </section>

          {/* 2 */}
          <section>
            <h2 className={h2Class}>Mobil Vinç Çeşitleri</h2>
            <p className={pClass}>
              Yükün ağırlığı, sahanın zemini ve erişim koşullarına göre üç ana mobil vinç tipi arasından seçim
              yapılır:
            </p>

            <h3 className={h3Class}>Kamyon Üstü Mobil Vinçler</h3>
            <p className={pClass}>
              Standart kamyon şasisi üzerine monte edilen bu vinçler, karayolunda yüksek hızda seyredebilir. Şehir
              içi ve şehirler arası işlere en hızlı ulaşan tiptir. 25-90 ton aralığındaki modeller; makine
              yerleşimi, klima santrali montajı ve prefabrik eleman indirme gibi günlük işlerin en çok tercih edilen
              çözümüdür.
            </p>

            <h3 className={h3Class}>Paletli Mobil Vinçler</h3>
            <p className={pClass}>
              Lastik yerine palet üzerinde hareket eder; yükü asılıyken bile saha içinde yürüyebilir. Zayıf ve
              çamurlu zeminlerde düşük zemin basıncı sayesinde çalışabilir. Kafes bomlu ağır sınıf modelleri, enerji
              santrali ve köprü projeleri gibi yüzlerce tonluk kaldırmaların ekipmanıdır; sahaya parçalar halinde
              taşınıp kurulur.
            </p>

            <h3 className={h3Class}>Arazöz Tipi (All-Terrain) Mobil Vinçler</h3>
            <p className={pClass}>
              Hem karayolunda seyahat edebilen hem de çok akslı yapısı ve arazi lastikleriyle bozuk zeminlerde
              ilerleyebilen hibrit sınıftır. Tüm akslardan dönüş (yengeç yürüyüşü) özelliğiyle dar sahalara girebilir.
              100-500 ton aralığındaki modeller; rüzgar türbini montajı ve ağır endüstriyel kaldırmalarda kullanılır.
            </p>
          </section>

          {/* 3 */}
          <section>
            <h2 className={h2Class}>Mobil Vinç Kullanım Alanları</h2>
            <p className={pClass}>
              Mobil vinçler, hızlı kurulum ve yüksek kapasite gerektiren hemen her sektörde görev alır. En yaygın üç
              kullanım alanı:
            </p>

            <h3 className={h3Class}>İnşaat ve Şantiye Uygulamalarında Kullanımı</h3>
            <ul className={ulClass}>
              <li>Çelik konstrüksiyon kolon ve makas montajı</li>
              <li>Prefabrik kiriş, panel ve hazır merdiven yerleştirme</li>
              <li>Kule vinç montaj ve demontaj operasyonları</li>
              <li>Çatı makası ve HVAC ekipmanlarının bina üzerine alınması</li>
            </ul>

            <h3 className={h3Class}>Enerji ve Rüzgar Türbini Projelerinde Kullanımı</h3>
            <ul className={ulClass}>
              <li>Rüzgar türbini kule segmentleri, nasel ve kanat montajı</li>
              <li>Trafo, jeneratör ve türbin ekipmanlarının yerleşimi</li>
              <li>Enerji nakil hattı direklerinin dikimi</li>
              <li>Güneş santrali sahalarında ağır ekipman taşıma</li>
            </ul>

            <h3 className={h3Class}>Liman ve Yükleme-Boşaltma İşlemlerinde Kullanımı</h3>
            <ul className={ulClass}>
              <li>Gemi ve mavna yükleme-boşaltma operasyonları</li>
              <li>Konteyner ve proje kargosu elleçleme</li>
              <li>Tersanelerde blok çevirme ve montaj</li>
              <li>Ağır makinelerin lowbed araçlara indirilip bindirilmesi</li>
            </ul>
          </section>

          {/* 4 */}
          <section>
            <h2 className={h2Class}>Mobil Vinç Teknik Özellikleri</h2>
            <p className={pClass}>
              Mobil vinç seçiminde üç temel değer incelenir: maksimum kaldırma kapasitesi, bom uzunluğu ve karşı
              ağırlık konfigürasyonu. Filomuzdaki tipik değerler:
            </p>
            <div className={tableWrapClass}>
              <table className={tableClass}>
                <thead>
                  <tr>
                    <th className={thClass}>Özellik</th>
                    <th className={thClass}>Hafif Sınıf</th>
                    <th className={thClass}>Orta Sınıf</th>
                    <th className={thClass}>Ağır Sınıf</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className={tdClass}>Kapasite</td>
                    <td className={tdClass}>25-60 ton</td>
                    <td className={tdClass}>70-160 ton</td>
                    <td className={tdClass}>200-500 ton</td>
                  </tr>
                  <tr>
                    <td className={tdClass}>Ana bom uzunluğu</td>
                    <td className={tdClass}>30-40 m</td>
                    <td className={tdClass}>45-62 m</td>
                    <td className={tdClass}>60-80 m</td>
                  </tr>
                  <tr>
                    <td className={tdClass}>Uzatma (jib) ile erişim</td>
                    <td className={tdClass}>45-55 m</td>
                    <td className={tdClass}>70-90 m</td>
                    <td className={tdClass}>100-150 m</td>
                  </tr>
                  <tr>
                    <td className={tdClass}>Tipik kullanım</td>
                    <td className={tdClass}>Şehir içi montaj, makine indirme</td>
                    <td className={tdClass}>Çelik yapı, kule vinç montajı</td>
                    <td className={tdClass}>Türbin, köprü, endüstriyel proje</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className={h3Class}>Bom Uzunluğu ve Kaldırma Kapasitesi</h3>
            <p className={pClass}>
              Vinç etiketindeki tonaj, en kısa bom ve en yakın mesafedeki maksimum değerdir. Bom uzayıp yük
              vinçten uzaklaştıkça kapasite hızla düşer: örneğin 60 tonluk bir vinç, 30 metre mesafede yaklaşık 5-8
              ton kaldırabilir. Bu nedenle teklif aşamasında yükün ağırlığıyla birlikte <strong>kaldırma mesafesi ve
              yüksekliği</strong> mutlaka paylaşılmalı; seçim yük tablosu (load chart) üzerinden yapılmalıdır.
            </p>
          </section>

          {/* 5 */}
          <section>
            <h2 className={h2Class}>Mobil Vinç Kiralama Fiyatları</h2>
            <p className={pClass}>
              Mobil vinç kiralama fiyatları sabit bir liste üzerinden değil; iş özelinde hesaplanır. Fiyatı
              belirleyen ana faktörler:
            </p>
            <ul className={ulClass}>
              <li><strong>Tonaj sınıfı:</strong> Kapasite büyüdükçe hem ekipman hem nakliye bedeli artar.</li>
              <li><strong>Çalışma süresi:</strong> Saatlik işlerde minimum ücret uygulanır; süre uzadıkça birim maliyet düşer.</li>
              <li><strong>Mesafe:</strong> Vincin sahaya gidiş-dönüş yolu (mobilizasyon) fiyata eklenir.</li>
              <li><strong>Operasyon koşulları:</strong> Gece çalışması, yol kapama izni ve özel güzergah gereksinimleri bedeli etkiler.</li>
            </ul>

            <h3 className={h3Class}>Günlük Kiralama Fiyatları</h3>
            <p className={pClass}>
              Makine yerleşimi, çatı ekipmanı montajı ve indirme-bindirme gibi işler için en yaygın modeldir. Günlük
              bedele operatör, yakıt ve sigorta dahildir. Kısa işler için minimum 4 saatlik kiralama da mümkündür;
              aynı gün sevkiyat çoğu bölge için sağlanır.
            </p>

            <h3 className={h3Class}>Proje Bazlı Kiralama Fiyatları</h3>
            <p className={pClass}>
              Haftalar veya aylar sürecek montaj işlerinde; mobilizasyon, kira, operatör ve olası jib
              konfigürasyonlarını kapsayan anahtar teslim proje fiyatı verilir. Uzun süreli işlerde günlük birim
              maliyet belirgin şekilde düşer ve vinç sahanızda sabit kalır.
            </p>
            <p className={pClass}>
              Güncel ve net fiyat için{' '}
              <a href="tel:+905323039089" className="font-semibold text-orange-600 hover:underline dark:text-orange-400">
                0532 303 90 89
              </a>{' '}
              numarasından bize ulaşın; aynı gün içinde ücretsiz teklifinizi hazırlayalım.
            </p>
          </section>

          {/* 6 */}
          <section>
            <h2 className={h2Class}>Mobil Vinç Kiralarken Dikkat Edilmesi Gerekenler</h2>
            <ul className={ulClass}>
              <li><strong>Yük bilgisini net verin:</strong> Ağırlık, boyut ve ağırlık merkezini paylaşın; emniyet payıyla tonaj seçin.</li>
              <li><strong>Mesafeyi hesaba katın:</strong> Vincin kurulacağı nokta ile yükün konacağı nokta arasındaki mesafe kapasiteyi belirler.</li>
              <li><strong>Zemini kontrol edin:</strong> Ayak basma noktalarının taşıma kapasitesini ve yeraltı boşluklarını (bodrum, rögar) bildirin.</li>
              <li><strong>Erişim yolunu planlayın:</strong> Sahaya giriş genişliği, viraj ve köprü tonaj sınırlarını önceden iletin.</li>
              <li><strong>Enerji hatlarına dikkat:</strong> Çalışma alanındaki elektrik hatlarına güvenli mesafe bırakılmalıdır.</li>
              <li><strong>Belgeleri isteyin:</strong> Periyodik kontrol raporu, operatör belgesi ve sigorta poliçelerini teyit edin.</li>
              <li><strong>Sapan ekibini netleştirin:</strong> Yükün bağlanmasını kimin yapacağı ve aparatların kimden geleceği sözleşmede yazmalıdır.</li>
            </ul>
          </section>

          {/* 7 */}
          <section>
            <h2 className={h2Class}>Mobil Vinç Sevkiyat ve Nakliye Süreci</h2>
            <p className={pClass}>
              Mobil vincin en büyük avantajı hızlı sevkiyattır. Talebinizden operasyona kadar süreç şu şekilde işler:
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
                    <td className={tdClass}>1. Talep ve teklif</td>
                    <td className={tdClass}>Yük bilgisi ve saha koşullarına göre tonaj seçimi, yazılı teklif</td>
                    <td className={tdClass}>Aynı gün</td>
                  </tr>
                  <tr>
                    <td className={tdClass}>2. Keşif (gerekliyse)</td>
                    <td className={tdClass}>Zemin, erişim ve kaldırma planının yerinde doğrulanması</td>
                    <td className={tdClass}>Yarım gün</td>
                  </tr>
                  <tr>
                    <td className={tdClass}>3. Sevkiyat</td>
                    <td className={tdClass}>Vincin kendi şasesiyle sahaya intikali; ağır sınıfta karşı ağırlıkların tırla sevki</td>
                    <td className={tdClass}>Aynı gün / ertesi gün</td>
                  </tr>
                  <tr>
                    <td className={tdClass}>4. Kurulum</td>
                    <td className={tdClass}>Ayakların açılması, plaka yerleşimi ve bom konfigürasyonu</td>
                    <td className={tdClass}>30-60 dakika</td>
                  </tr>
                  <tr>
                    <td className={tdClass}>5. Operasyon ve çıkış</td>
                    <td className={tdClass}>Kaldırma işleminin tamamlanması ve vincin sahadan ayrılması</td>
                    <td className={tdClass}>İşe göre</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className={pClass}>
              200 ton üzeri vinçlerde karşı ağırlıklar ve jib elemanları ayrı araçlarla taşınır; gabari dışı seyir
              için gerekli karayolu izinleri tarafımızca alınır.
            </p>
          </section>

          {/* 8 */}
          <section>
            <h2 className={h2Class}>Mobil Vinç Güvenlik Standartları</h2>
            <p className={pClass}>
              Ağır kaldırma operasyonlarında güvenlik, planlamayla başlar. Tüm ekipman ve operasyonlarımız şu
              standartlara uygundur:
            </p>
            <ul className={ulClass}>
              <li><strong>TS EN 13000:</strong> Mobil vinçlerin tasarım ve güvenlik gereklilikleri standardı</li>
              <li><strong>6331 sayılı İş Sağlığı ve Güvenliği Kanunu</strong> ve İş Ekipmanları Yönetmeliği gereklilikleri</li>
              <li><strong>LMI (yük moment göstergesi):</strong> Kapasite aşımında operatörü uyaran ve hareketi kısıtlayan sistem</li>
              <li><strong>Kaldırma planı:</strong> Kritik kaldırmalarda yazılı plan, sapan hesabı ve İSG onayı</li>
              <li><strong>İşaretçi kullanımı:</strong> Operatörün göremediği her operasyonda eğitimli sinyalci görevlendirilir</li>
              <li><strong>Çalışma alanı izolasyonu:</strong> Operasyon bölgesi bariyer ve ikaz şeritleriyle kapatılır; yük altında durmak yasaktır</li>
              <li><strong>Günlük kontroller:</strong> Fren, halat, kanca mandalı ve outrigger testleri her operasyon öncesi yapılır</li>
            </ul>
          </section>

          {/* 9 */}
          <section>
            <h2 className={h2Class}>Mobil Vinç ile Diğer Vinç Türleri Arasındaki Farklar</h2>
            <p className={pClass}>
              Mobil vinci diğer tiplerden ayıran temel özellik, <strong>yüksek kapasiteyi mobiliteyle
              birleştirmesidir</strong>. Karşılaştırma tablosu:
            </p>
            <div className={tableWrapClass}>
              <table className={tableClass}>
                <thead>
                  <tr>
                    <th className={thClass}>Kriter</th>
                    <th className={thClass}>Mobil Vinç</th>
                    <th className={thClass}>Kule Vinç</th>
                    <th className={thClass}>Hiyap Vinç</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className={tdClass}>Maksimum kapasite</td>
                    <td className={tdClass}>500+ ton</td>
                    <td className={tdClass}>12-24 ton</td>
                    <td className={tdClass}>5-25 ton</td>
                  </tr>
                  <tr>
                    <td className={tdClass}>Kurulum süresi</td>
                    <td className={tdClass}>30-60 dakika</td>
                    <td className={tdClass}>1-3 gün</td>
                    <td className={tdClass}>5-10 dakika</td>
                  </tr>
                  <tr>
                    <td className={tdClass}>Yük taşıma + kaldırma</td>
                    <td className={tdClass}>Hayır (sadece kaldırma)</td>
                    <td className={tdClass}>Hayır</td>
                    <td className={tdClass}>Evet (kasasında taşır)</td>
                  </tr>
                  <tr>
                    <td className={tdClass}>Uygun iş tipi</td>
                    <td className={tdClass}>Noktasal ağır kaldırma</td>
                    <td className={tdClass}>Sürekli dikey taşıma</td>
                    <td className={tdClass}>Yükleme-boşaltma + nakliye</td>
                  </tr>
                  <tr>
                    <td className={tdClass}>Tipik kiralama süresi</td>
                    <td className={tdClass}>Saatlik - haftalık</td>
                    <td className={tdClass}>Aylık - yıllık</td>
                    <td className={tdClass}>Saatlik - günlük</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* 10 */}
          <section>
            <h2 className={h2Class}>Mobil Vinç Operatör Gereksinimleri</h2>
            <p className={pClass}>
              Ağır tonajlı kaldırmalarda operatör deneyimi, ekipman kadar belirleyicidir. Vinç Burada operatörleri şu
              şartları eksiksiz karşılar:
            </p>
            <ul className={ulClass}>
              <li>MEB onaylı <strong>Mobil Vinç Operatörlük Belgesi</strong></li>
              <li>Kullandığı tonaj sınıfına ve markaya özel model oryantasyonu</li>
              <li>Yük tablosu okuma, sapan hesabı ve kaldırma planı eğitimi</li>
              <li>En az 5 yıl saha deneyimi; kritik kaldırmalarda kıdemli operatör görevlendirmesi</li>
              <li>Güncel sağlık raporu ve İSG uzmanlarımızca yıllık değerlendirme</li>
            </ul>
            <p className={pClass}>
              Kiralamalarımız operatör dahil yapıldığı için sizin ayrıca belge bulundurmanız gerekmez; talep halinde
              eğitimli işaretçi ve sapancı personel de sağlanır.
            </p>
          </section>

          {/* 11 */}
          <section>
            <h2 className={h2Class}>Mobil Vinç Bakım ve Periyodik Kontrolleri</h2>
            <p className={pClass}>
              Hidrolik sistemi ve şasisiyle iki makineyi bir arada barındıran mobil vinçlerde bakım disiplini,
              operasyon güvenliğinin temelidir. Uyguladığımız program:
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
                    <td className={tdClass}>Her operasyon öncesi</td>
                    <td className={tdClass}>LMI testi, fren, halat, kanca mandalı, outrigger ve lastik kontrolleri</td>
                  </tr>
                  <tr>
                    <td className={tdClass}>Haftalık</td>
                    <td className={tdClass}>Hidrolik yağ ve filtre kontrolü, bom kızak yağlama, aydınlatma testleri</td>
                  </tr>
                  <tr>
                    <td className={tdClass}>Aylık</td>
                    <td className={tdClass}>Halat detay muayenesi, dönme dişlisi ve şase kaynak kontrolleri, kalibrasyon</td>
                  </tr>
                  <tr>
                    <td className={tdClass}>Yıllık (zorunlu)</td>
                    <td className={tdClass}>Yetkili makine mühendisi tarafından yük testli periyodik kontrol raporu</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className={pClass}>
              Tüm vinçlerimiz güncel periyodik kontrol raporlarıyla sahaya çıkar; raporlar operasyon öncesinde İSG
              dosyanız için tarafınıza iletilir.
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
