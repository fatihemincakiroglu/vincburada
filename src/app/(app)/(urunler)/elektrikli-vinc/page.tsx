import heroImage from '@/images/vinc/hero-elektrikli.webp'
import { Metadata } from 'next'
import KategoriUrunBolumu from '@/components/KategoriUrunBolumu'
import ProductPageLayout from '../_components/ProductPageLayout'

export const metadata: Metadata = {
  title: 'Elektrikli Vinç Kiralama ve Fiyatları 2026',
  description:
    'Elektrikli vinç kiralama ve satış fiyatları, zincirli-halatlı çeşitleri, kapasiteleri ve montaj süreci. Fabrika ve atölyeler için elektrikli vinç: 0532 303 90 89.',
}

const SITE_URL = 'https://vincburada.com.tr'

const faqs = [
  {
    q: 'Elektrikli vinç fiyatları ne kadar?',
    a: 'Fiyat; kaldırma kapasitesi (500 kg - 25 ton), zincirli/halatlı tip, kaldırma yüksekliği ve monoray-portal gibi taşıyıcı sistem ihtiyacına göre belirlenir. Kiralama ve satış seçenekleri için 0532 303 90 89 numarasından ücretsiz teklif alabilirsiniz.',
  },
  {
    q: 'Elektrikli vinç kiralanabilir mi, satın mı almalıyım?',
    a: 'Kısa süreli projeler ve dönemsel işlerde kiralama; sürekli üretim hattı kullanımında satın alma daha ekonomiktir. Genel kural: kullanım süresi 1-2 yılı aşacaksa satın alma, altındaysa kiralama önerilir. İkisi için de teklif sunuyoruz.',
  },
  {
    q: 'Elektrikli vinç kaç ton kaldırır?',
    a: 'Zincirli modeller genellikle 250 kg - 5 ton, halatlı modeller 1 - 25 ton aralığında üretilir. Daha yüksek kapasiteler çift mekanizmalı özel sistemlerle mümkündür.',
  },
  {
    q: 'Elektrikli vinç için hangi elektrik altyapısı gerekir?',
    a: 'Küçük zincirli vinçler 220V monofaze ile çalışabilir; 1 ton üzeri modellerde 380V trifaze besleme gerekir. Montaj öncesi keşifte pano ve kablo kesiti ihtiyacı birlikte belirlenir.',
  },
  {
    q: 'Elektrikli vinç kullanmak için belge gerekir mi?',
    a: 'Yerden kumandalı elektrikli vinçler için operatörlük belgesi zorunlu değildir; ancak kullanıcıların kaldırma araçları güvenli kullanım eğitimi almış olması İSG mevzuatı gereğidir. Teslimatta kullanım eğitimi veriyoruz.',
  },
  {
    q: 'Montajı kim yapar, ne kadar sürer?',
    a: 'Montaj, teknik ekibimizce yapılır. Mevcut bir taşıyıcı kirişe monoray vinç montajı genellikle 1 gün; portal veya gezer köprü sistemi kurulumu ise 2-5 gün sürer.',
  },
  {
    q: 'Elektrikli vinç dış mekanda kullanılabilir mi?',
    a: 'Evet, ancak dış mekan için IP54 ve üzeri koruma sınıfına sahip, gerekirse ısıtıcılı modeller seçilmelidir. Deniz kenarı ve korozif ortamlarda özel kaplama önerilir.',
  },
  {
    q: 'Kiralık elektrikli vinçlerin bakımı kime ait?',
    a: 'Kiralama süresince periyodik bakım ve yasal kontroller tarafımızca yapılır. Arıza durumunda 24-48 saat içinde onarım veya değişim ekipmanı sağlanır.',
  },
  {
    q: 'İnvertörlü (frekans kontrollü) vinç ne avantaj sağlar?',
    a: 'Kalkış ve duruşlarda yükün salınımını azaltır, hassas konumlandırma sağlar ve mekanik aksamın ömrünü uzatır. Kalıp taşıma ve hassas montaj işlerinde özellikle önerilir.',
  },
  {
    q: 'Elektrikli vinç ile caraskal aynı şey mi?',
    a: 'Caraskal, zincirli kaldırma mekanizmasının yaygın adıdır; elektrikli zincirli vinçler "elektrikli caraskal" olarak da anılır. Halatlı vinçler ise daha yüksek kapasite ve kaldırma hızı sunan ayrı bir sınıftır.',
  },
]

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Elektrikli Vinç Kiralama ve Satış',
    serviceType: 'Elektrikli Vinç Kiralama',
    description:
      'Zincirli, halatlı ve monoray elektrikli vinç kiralama ve satış hizmeti. 500 kg - 25 ton kapasite, montaj ve periyodik bakım dahil.',
    url: `${SITE_URL}/elektrikli-vinc`,
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
      offerCount: 11,
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
      { '@type': 'ListItem', position: 2, name: 'Elektrikli Vinç Kiralama', item: `${SITE_URL}/elektrikli-vinc` },
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
        wideChildren={<KategoriUrunBolumu handle="elektrikli-vinc" kategoriAdi="Elektrikli Vinç" />}
        heroImage={heroImage}
        title="Elektrikli Vinç"
        heroHeading="Elektrikli Vinç Kiralama ve Fiyatları"
        subHeading="Fabrika, depo ve atölyeleriniz için 500 kg - 25 ton kapasiteli zincirli ve halatlı elektrikli vinç kiralama ve satış çözümleri."
      >
        <article className="flex flex-col gap-y-14">
          {/* 1 */}
          <section>
            <h2 className={h2Class}>Elektrikli Vinç Nedir?</h2>
            <p className={pClass}>
              Elektrikli vinç; yükleri elektrik motoru gücüyle zincir veya çelik halat üzerinden kaldıran, genellikle
              bir kiriş, monoray hat veya gezer köprü sistemine monte edilen kaldırma ekipmanıdır. Sessiz ve
              emisyonsuz çalıştığı için kapalı alanların standart kaldırma çözümüdür; üretim hattındaki tekrarlı
              kaldırma işlerinde yüksek verimlilik sağlar.
            </p>
            <ul className={ulClass}>
              <li>Egzoz gazı üretmez; kapalı fabrika ve depo ortamlarında güvenle kullanılır.</li>
              <li>Yerden (askılı buton) veya uzaktan kumandayla tek kişi tarafından kullanılabilir.</li>
              <li>Düşük işletme maliyeti: yakıt gideri yoktur, bakım ihtiyacı dizel ekipmanlara göre azdır.</li>
            </ul>
          </section>

          {/* 2 */}
          <section>
            <h2 className={h2Class}>Elektrikli Vinç Çeşitleri</h2>
            <p className={pClass}>
              Kaldırılacak yükün ağırlığına, kaldırma yüksekliğine ve taşıma hattına göre üç ana tip kullanılır:
            </p>

            <h3 className={h3Class}>Zincirli Elektrikli Vinçler</h3>
            <p className={pClass}>
              Yükü kalibre edilmiş çelik zincirle kaldırır. 250 kg - 5 ton aralığındaki kapasiteleriyle atölye, bakım
              istasyonu ve montaj hatlarının en yaygın ekipmanıdır. Kompakt gövdesi sayesinde düşük tavan
              yüksekliklerine sığar; sabit askı noktasına veya şaryolu (yürütmeli) olarak monoray hatta takılabilir.
            </p>

            <h3 className={h3Class}>Halatlı Elektrikli Vinçler</h3>
            <p className={pClass}>
              Yükü tambura sarılan çelik halatla kaldırır. 1 - 25 ton kapasite aralığı ve yüksek kaldırma hızlarıyla
              ağır sanayinin tercihi olan tiptir. Gezer köprü ve portal vinç sistemlerinin kaldırma grubunu oluşturur;
              yüksek çalışma sınıfı (duty class) sayesinde vardiyalı yoğun kullanıma uygundur.
            </p>

            <h3 className={h3Class}>Monoray Elektrikli Vinçler</h3>
            <p className={pClass}>
              Tavana veya çelik konstrüksiyona monte edilen tek ray (I-profil) üzerinde hareket eden sistemlerdir.
              Yükü belirli bir hat boyunca — örneğin üretim hattının başından sonuna — taşımak için idealdir. Düz
              hatların yanı sıra kurblu (dönüşlü) monoray hatlarla tesis içi tam bir taşıma rotası kurulabilir.
            </p>
          </section>

          {/* 3 */}
          <section>
            <h2 className={h2Class}>Elektrikli Vinç Kullanım Alanları</h2>
            <p className={pClass}>
              Elektrikli vinçler, kapalı ve yarı açık alanlardaki hemen tüm tekrarlı kaldırma işlerinde kullanılır:
            </p>

            <h3 className={h3Class}>Fabrika ve Üretim Tesislerinde Kullanımı</h3>
            <ul className={ulClass}>
              <li>Üretim hattında kalıp, sac ve profil taşıma</li>
              <li>CNC ve pres tezgahlarına parça yükleme-indirme</li>
              <li>Montaj hatlarında motor, şanzıman gibi ağır komponent taşıma</li>
              <li>Gezer köprü sistemleriyle hol boyu malzeme aktarımı</li>
            </ul>

            <h3 className={h3Class}>Depo ve Lojistik Alanlarda Kullanımı</h3>
            <ul className={ulClass}>
              <li>Ağır paletlerin ve sandıkların raf sistemlerine yerleştirilmesi</li>
              <li>Konteyner içi yükleme-boşaltma istasyonları</li>
              <li>Bobin, rulo ve varil gibi özel aparatlı yük elleçleme</li>
              <li>Sevkiyat rampalarında araç yükleme desteği</li>
            </ul>

            <h3 className={h3Class}>Atölye ve Bakım Onarım Alanlarında Kullanımı</h3>
            <ul className={ulClass}>
              <li>Araç servislerinde motor ve şanzıman sökme-takma</li>
              <li>Kaynak ve imalat atölyelerinde iş parçası çevirme</li>
              <li>Makine bakımlarında redüktör ve rulman değişimleri</li>
              <li>Tersane ve raylı sistem depolarında komponent taşıma</li>
            </ul>
          </section>

          {/* 4 */}
          <section>
            <h2 className={h2Class}>Elektrikli Vinç Teknik Özellikleri</h2>
            <p className={pClass}>
              Elektrikli vinç seçiminde kapasite, kaldırma yüksekliği, kaldırma hızı ve çalışma sınıfı (FEM/ISO duty)
              birlikte değerlendirilir. Tipik değerler:
            </p>
            <div className={tableWrapClass}>
              <table className={tableClass}>
                <thead>
                  <tr>
                    <th className={thClass}>Özellik</th>
                    <th className={thClass}>Zincirli</th>
                    <th className={thClass}>Halatlı</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className={tdClass}>Kapasite aralığı</td>
                    <td className={tdClass}>250 kg - 5 ton</td>
                    <td className={tdClass}>1 - 25 ton</td>
                  </tr>
                  <tr>
                    <td className={tdClass}>Kaldırma yüksekliği</td>
                    <td className={tdClass}>3 - 12 m</td>
                    <td className={tdClass}>6 - 30 m</td>
                  </tr>
                  <tr>
                    <td className={tdClass}>Kaldırma hızı</td>
                    <td className={tdClass}>4 - 8 m/dk</td>
                    <td className={tdClass}>5 - 12 m/dk (çift hız)</td>
                  </tr>
                  <tr>
                    <td className={tdClass}>Besleme</td>
                    <td className={tdClass}>220V / 380V</td>
                    <td className={tdClass}>380V trifaze</td>
                  </tr>
                  <tr>
                    <td className={tdClass}>Kumanda</td>
                    <td className={tdClass}>Askılı buton / uzaktan</td>
                    <td className={tdClass}>Askılı buton / telsiz kumanda</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className={h3Class}>Kaldırma Kapasitesi ve Motor Gücü</h3>
            <p className={pClass}>
              Motor gücü; kapasite ve kaldırma hızının çarpımıyla orantılıdır. Örneğin 2 tonluk bir yükü 8 m/dk
              hızla kaldırmak, aynı yükü 4 m/dk kaldırmaktan yaklaşık iki kat motor gücü gerektirir. Yoğun vardiyalı
              kullanımda motor gücü kadar <strong>çalışma sınıfı (FEM 2m/3m gibi)</strong> da önemlidir: düşük sınıf
              bir vinç yoğun kullanımda erken yıpranır. Keşif aşamasında günlük kaldırma sayınıza göre doğru sınıf
              belirlenir.
            </p>
          </section>

          {/* 5 */}
          <section>
            <h2 className={h2Class}>Elektrikli Vinç Kiralama ve Satış Fiyatları</h2>
            <p className={pClass}>
              Elektrikli vinçlerde hem kiralama hem satın alma seçeneği sunuyoruz. Fiyatı belirleyen ana faktörler:
            </p>
            <ul className={ulClass}>
              <li><strong>Kapasite ve tip:</strong> Tonaj büyüdükçe ve zincirliden halatlıya geçtikçe bedel artar.</li>
              <li><strong>Kaldırma yüksekliği:</strong> Zincir/halat boyu uzadıkça fiyat yükselir.</li>
              <li><strong>Taşıyıcı sistem:</strong> Mevcut kirişe montaj ile yeni monoray/portal kurulumu arasında belirgin fark vardır.</li>
              <li><strong>Ek donanımlar:</strong> Telsiz kumanda, invertör, yürüyüş grubu ve özel kanca aparatları bedele eklenir.</li>
            </ul>

            <h3 className={h3Class}>Günlük Kiralama Fiyatları</h3>
            <p className={pClass}>
              Kısa süreli montaj işleri, sergi-fuar kurulumları ve dönemsel yoğunluklar için günlük ve haftalık
              kiralama yapılır. Portatif portal vinç ile birlikte kiralanan zincirli vinçler, sabit altyapı olmayan
              sahalarda pratik bir çözüm sunar. Kiralama bedeline periyodik bakım dahildir.
            </p>

            <h3 className={h3Class}>Kapasiteye Göre Satış Fiyatları</h3>
            <p className={pClass}>
              Satın almalarda fiyat doğrudan kapasite ve çalışma sınıfına göre şekillenir: 1 tonluk standart bir
              zincirli vinç ile 10 tonluk çift hızlı halatlı bir vinç arasında kat kat fark bulunur. Montaj,
              devreye alma ve kullanım eğitimi satış paketine dahildir; tüm ürünlerde üretici garantisi geçerlidir.
              Marka ve model bazlı güncel liste için teklif isteyiniz.
            </p>
            <p className={pClass}>
              Güncel ve net fiyat için{' '}
              <a href="tel:+905323039089" className="font-semibold text-orange-600 hover:underline dark:text-orange-400">
                0532 303 90 89
              </a>{' '}
              numarasından bize ulaşın; tesisiniz için ücretsiz keşif planlayalım.
            </p>
          </section>

          {/* 6 */}
          <section>
            <h2 className={h2Class}>Elektrikli Vinç Seçerken Dikkat Edilmesi Gerekenler</h2>
            <ul className={ulClass}>
              <li><strong>Kapasiteyi doğru belirleyin:</strong> En ağır yükünüzün üzerine emniyet payı ekleyin; kapasiteyi kanca aparatlarının ağırlığı da tüketir.</li>
              <li><strong>Kaldırma yüksekliğini ölçün:</strong> Kanca en üst ve en alt konum arasındaki gerçek mesafeyi hesaplayın.</li>
              <li><strong>Çalışma sınıfını sorun:</strong> Günlük kaldırma sayınıza uygun FEM/ISO sınıfı seçilmezse vinç erken yıpranır.</li>
              <li><strong>Taşıyıcı yapıyı kontrol ettirin:</strong> Mevcut kirişin vinç yükünü taşıyıp taşımayacağı statik olarak doğrulanmalıdır.</li>
              <li><strong>Elektrik altyapısını hazırlayın:</strong> Gerekli voltaj, sigorta ve kablo kesiti montaj öncesi belirlenmelidir.</li>
              <li><strong>Ortam koşullarını bildirin:</strong> Toz, nem, korozif ortam veya dış mekan kullanımı için uygun koruma sınıfı seçilmelidir.</li>
              <li><strong>Yedek parça ve servis ağını sorun:</strong> Uzun ömürlü kullanım için servis desteği olan markaları tercih edin.</li>
            </ul>
          </section>

          {/* 7 */}
          <section>
            <h2 className={h2Class}>Elektrikli Vinç Montaj Süreci</h2>
            <p className={pClass}>
              Elektrikli vinç montajı; keşif, mekanik kurulum ve devreye alma adımlarından oluşan planlı bir süreçtir:
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
                    <td className={tdClass}>1. Keşif</td>
                    <td className={tdClass}>Yük analizi, taşıyıcı yapı ve elektrik altyapısı kontrolü</td>
                    <td className={tdClass}>Yarım gün</td>
                  </tr>
                  <tr>
                    <td className={tdClass}>2. Projelendirme</td>
                    <td className={tdClass}>Vinç seçimi, monoray/portal hattı çizimi ve statik doğrulama</td>
                    <td className={tdClass}>1-3 gün</td>
                  </tr>
                  <tr>
                    <td className={tdClass}>3. Mekanik montaj</td>
                    <td className={tdClass}>Ray/kiriş kurulumu, vinç gövdesi ve şaryo montajı</td>
                    <td className={tdClass}>1-4 gün</td>
                  </tr>
                  <tr>
                    <td className={tdClass}>4. Elektrik bağlantısı</td>
                    <td className={tdClass}>Besleme hattı, enerji zinciri/kablo makarası ve kumanda kurulumu</td>
                    <td className={tdClass}>1 gün</td>
                  </tr>
                  <tr>
                    <td className={tdClass}>5. Test ve eğitim</td>
                    <td className={tdClass}>Yük testi, limit ayarları, kullanım eğitimi ve teslim raporu</td>
                    <td className={tdClass}>Yarım gün</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className={pClass}>
              Mevcut bir kirişe yapılan basit zincirli vinç montajı çoğu zaman tek günde tamamlanır; üretiminizi
              aksatmamak için montaj hafta sonuna da planlanabilir.
            </p>
          </section>

          {/* 8 */}
          <section>
            <h2 className={h2Class}>Elektrikli Vinç Güvenlik Standartları</h2>
            <p className={pClass}>
              Elektrikli vinçler hem kaldırma hem elektrik güvenliği mevzuatına tabidir. Tüm ürün ve montajlarımız şu
              standartlara uygundur:
            </p>
            <ul className={ulClass}>
              <li><strong>TS EN 14492-2:</strong> Güç tahrikli vinçlerin (kaldırma üniteleri) güvenlik standardı</li>
              <li><strong>Makine Emniyet Yönetmeliği (2006/42/AT)</strong> ve CE uygunluğu</li>
              <li><strong>Periyodik kontroller:</strong> İş Ekipmanları Yönetmeliği uyarınca yılda en az bir kez yetkili kontrol</li>
              <li><strong>Yük sınırlayıcı:</strong> Kapasite aşımında kaldırmayı durduran mekanik/elektronik sistem</li>
              <li><strong>Limit switchler:</strong> Kancanın üst-alt son konumlarında hareketi kesen emniyet anahtarları</li>
              <li><strong>Acil stop:</strong> Kumanda üzerinde ve pano yanında acil durdurma butonları</li>
              <li><strong>Topraklama ve kaçak akım koruması:</strong> Elektriksel güvenlik testleriyle belgelendirme</li>
            </ul>
          </section>

          {/* 9 */}
          <section>
            <h2 className={h2Class}>Elektrikli Vinç ile Diğer Vinç Türleri Arasındaki Farklar</h2>
            <p className={pClass}>
              Elektrikli vinç, sahaya giden mobil ekipmanlardan farklı olarak <strong>tesise kurulan sabit bir
              kaldırma çözümüdür</strong>. Karşılaştırma tablosu:
            </p>
            <div className={tableWrapClass}>
              <table className={tableClass}>
                <thead>
                  <tr>
                    <th className={thClass}>Kriter</th>
                    <th className={thClass}>Elektrikli Vinç</th>
                    <th className={thClass}>Mobil Vinç</th>
                    <th className={thClass}>Hiyap Vinç</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className={tdClass}>Çalışma ortamı</td>
                    <td className={tdClass}>Kapalı/yarı açık tesis</td>
                    <td className={tdClass}>Açık saha</td>
                    <td className={tdClass}>Açık saha + yol</td>
                  </tr>
                  <tr>
                    <td className={tdClass}>Enerji</td>
                    <td className={tdClass}>Elektrik (emisyonsuz)</td>
                    <td className={tdClass}>Dizel</td>
                    <td className={tdClass}>Araç motoru (PTO)</td>
                  </tr>
                  <tr>
                    <td className={tdClass}>Kullanım şekli</td>
                    <td className={tdClass}>Tekrarlı, hat üzeri taşıma</td>
                    <td className={tdClass}>Noktasal ağır kaldırma</td>
                    <td className={tdClass}>Yükleme-boşaltma</td>
                  </tr>
                  <tr>
                    <td className={tdClass}>Operatör belgesi</td>
                    <td className={tdClass}>Gerekmez (eğitim yeterli)</td>
                    <td className={tdClass}>Zorunlu</td>
                    <td className={tdClass}>Zorunlu</td>
                  </tr>
                  <tr>
                    <td className={tdClass}>Gürültü</td>
                    <td className={tdClass}>Çok düşük</td>
                    <td className={tdClass}>Yüksek</td>
                    <td className={tdClass}>Orta</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* 10 */}
          <section>
            <h2 className={h2Class}>Elektrikli Vinç Kullanım Talimatları</h2>
            <p className={pClass}>
              Elektrikli vinç kullanımı basittir; ancak güvenli operasyon için şu temel talimatlara uyulmalıdır:
            </p>
            <ul className={ulClass}>
              <li><strong>Operasyon öncesi:</strong> Zincir/halat, kanca mandalı, kumanda ve fren her vardiya başında test edilir.</li>
              <li><strong>Yük bağlama:</strong> Yük daima kanca ortasına, uygun sapanla ve dengede bağlanır; kanca ucuyla kaldırma yapılmaz.</li>
              <li><strong>Eğik çekiş yasağı:</strong> Vinç yalnızca düşey kaldırma yapar; yükü yerde sürüklemek veya açılı çekmek halat/zincir hasarına yol açar.</li>
              <li><strong>Yük altında durulmaz:</strong> Askıdaki yükün altından geçmek ve yükü personel üzerinden taşımak yasaktır.</li>
              <li><strong>Limitlere yaslanılmaz:</strong> Üst-alt limit switchler acil emniyet içindir; rutin duruş noktası olarak kullanılmaz.</li>
              <li><strong>İş bitiminde:</strong> Kanca yaklaşık baş hizasının üzerine alınır, yük asılı bırakılmaz ve enerji kesilir.</li>
            </ul>
            <p className={pClass}>
              Teslimat sırasında ekibinize uygulamalı kullanım eğitimi verilir; talimat föyleri Türkçe olarak vinçle
              birlikte teslim edilir.
            </p>
          </section>

          {/* 11 */}
          <section>
            <h2 className={h2Class}>Elektrikli Vinç Bakım ve Periyodik Kontrolleri</h2>
            <p className={pClass}>
              Elektrikli vinçler az bakım ister; ancak planlı kontroller ömrü uzatır ve duruş riskini ortadan
              kaldırır. Uygulanan program:
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
                    <td className={tdClass}>Fren testi, kanca mandalı, kumanda butonları ve acil stop kontrolü</td>
                  </tr>
                  <tr>
                    <td className={tdClass}>Aylık</td>
                    <td className={tdClass}>Zincir/halat aşınma ölçümü, yağlama, şaryo tekerlek ve ray kontrolü</td>
                  </tr>
                  <tr>
                    <td className={tdClass}>6 aylık</td>
                    <td className={tdClass}>Fren balata ölçümü, redüktör yağı, elektrik pano ve kontaktör bakımı</td>
                  </tr>
                  <tr>
                    <td className={tdClass}>Yıllık (zorunlu)</td>
                    <td className={tdClass}>Yetkili mühendis tarafından yük testli periyodik kontrol raporu</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className={pClass}>
              Kiralık vinçlerde tüm bakımlar hizmete dahildir; satışlarda ise yıllık bakım anlaşmasıyla aynı servis
              güvencesi sağlanır.
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
