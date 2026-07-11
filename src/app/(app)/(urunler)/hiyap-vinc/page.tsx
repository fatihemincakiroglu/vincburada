import heroImage from '@/images/vinc/hero-hiyap.webp'
import { Metadata } from 'next'
import KategoriUrunBolumu from '@/components/KategoriUrunBolumu'
import ProductPageLayout from '../_components/ProductPageLayout'

export const metadata: Metadata = {
  title: 'Hiyap Vinç Kiralama ve Fiyatları 2026',
  description:
    'Hiyap vinç (araç üstü katlanır bomlu vinç) kiralama fiyatları, çeşitleri ve kullanım alanları. Yükleme-boşaltma ve nakliye için hiyap kiralama: 0532 303 90 89.',
}

const SITE_URL = 'https://vincburada.com.tr'

const faqs = [
  {
    q: 'Hiyap vinç kiralama fiyatları ne kadar?',
    a: 'Fiyat; vincin kaldırma momenti (ton-metre), aracın kasa kapasitesi, işin süresi ve mesafeye göre belirlenir. Kısa işlerde saatlik, taşımalı işlerde sefer bazlı fiyat verilir. Net fiyat için 0532 303 90 89 numarasından ücretsiz teklif alabilirsiniz.',
  },
  {
    q: 'Hiyap vinç ne demek?',
    a: 'Hiyap; kamyon şasisine monte edilen katlanır bomlu vinçlerin Türkiye\'deki yaygın adıdır. İsim, bu vinç tipinin öncü üreticisi İsveçli HIAB markasından gelir. "Araç üstü katlanır bomlu vinç" veya "kamyon arkası vinç" olarak da bilinir.',
  },
  {
    q: 'Hiyap vinç kaç ton kaldırır?',
    a: 'Kapasite, yükün bom üzerindeki mesafesine bağlıdır ve ton-metre (tm) ile ifade edilir. Filomuzdaki 15-80 tm araçlar; yakın mesafede 5-25 ton, 10 metre açıklıkta 1,5-8 ton kaldırabilir.',
  },
  {
    q: 'Hiyap ile hem taşıma hem kaldırma yapılır mı?',
    a: 'Evet, hiyabın en büyük avantajı budur: yükü kendi vinciyle kasasına alır, taşır ve varış noktasında yine kendisi indirir. Ayrı vinç ve ayrı nakliye aracı maliyetini tek araçta birleştirir.',
  },
  {
    q: 'Hiyap vinç aynı gün gelebilir mi?',
    a: 'Evet. Hiyaplar trafiğe kayıtlı kamyonlar olduğundan İstanbul içi taleplerin çoğuna aynı gün, hatta birkaç saat içinde yanıt verebiliyoruz.',
  },
  {
    q: 'Operatör kiralamaya dahil mi?',
    a: 'Evet. Araç; hem sürücü belgesine hem vinç operatörlük belgesine sahip deneyimli personelimizle birlikte gelir. Yakıt ve sigorta bedele dahildir.',
  },
  {
    q: 'Konteyner taşıyabiliyor musunuz?',
    a: 'Evet. Uygun tonajdaki hiyap araçlarımızla 20\'lik konteynerlerin yüklemesi, taşınması ve indirilmesi yapılmaktadır. Konteyner ağırlığını teklif aşamasında bildirmeniz yeterlidir.',
  },
  {
    q: 'Hiyap vinç sepetle insan kaldırabilir mi?',
    a: 'Yalnızca insan taşımaya uygun sertifikalı sepet aparatı takılmış ve bu kullanım için belgelendirilmiş araçlarda mümkündür. Standart hiyaplar yük içindir; yüksekte personel çalışması için sepetli vinç kiralamanızı öneririz.',
  },
  {
    q: 'Dar sokaklara hiyap girebilir mi?',
    a: 'Araç boyutları modele göre değişir. Dar sokak ve site içi işler için kompakt şasili araçlarımız mevcuttur; adres bilgisini paylaştığınızda uygun aracı yönlendiririz.',
  },
  {
    q: 'Şehirler arası taşıma yapıyor musunuz?',
    a: 'Evet. Yükün alındığı noktadan Türkiye genelinde varış adresine kadar taşıma ve indirme hizmetini tek seferde veriyoruz. Şehirler arası işlerde fiyat, güzergah üzerinden hesaplanır.',
  },
]

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Hiyap Vinç Kiralama',
    serviceType: 'Hiyap Vinç Kiralama',
    description:
      'Saatlik ve sefer bazlı operatörlü hiyap vinç (araç üstü katlanır bomlu vinç) kiralama. Yükleme, taşıma ve boşaltma tek araçta.',
    url: `${SITE_URL}/hiyap-vinc`,
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
      { '@type': 'ListItem', position: 2, name: 'Hiyap Vinç Kiralama', item: `${SITE_URL}/hiyap-vinc` },
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
        wideChildren={<KategoriUrunBolumu handle="hiyap-vinc" kategoriAdi="Hiyap Vinç" />}
        heroImage={heroImage}
        title="Hiyap Vinç"
        heroHeading="Hiyap Vinç Kiralama ve Fiyatları"
        subHeading="Yükleme, taşıma ve boşaltmayı tek araçta birleştiren operatörlü hiyap vinç kiralama; İstanbul genelinde aynı gün hizmet."
      >
        <article className="flex flex-col gap-y-14">
          {/* 1 */}
          <section>
            <h2 className={h2Class}>Hiyap Vinç Nedir?</h2>
            <p className={pClass}>
              Hiyap vinç; kamyon şasisi ile kasası arasına (veya kasa arkasına) monte edilen, hidrolik katlanır bomlu
              bir vinç ile yük kasasını aynı araçta birleştiren ekipmandır. Yükü kendi vinciyle kasasına alır,
              karayolunda taşır ve varış noktasında yine kendisi indirir. Adını, bu vinç tipinin öncüsü olan HIAB
              markasından alır.
            </p>
            <ul className={ulClass}>
              <li>Kaldırma ve nakliyeyi tek araçta birleştirir; ayrı vinç ve kamyon maliyetini ortadan kaldırır.</li>
              <li>Ayaklarını açıp 5-10 dakikada çalışmaya hazır hale gelir.</li>
              <li>Katlanır bom, seyir halinde kasa arkasında toplanır; araç standart kamyon gabarisinde kalır.</li>
            </ul>
          </section>

          {/* 2 */}
          <section>
            <h2 className={h2Class}>Hiyap Vinç Çeşitleri</h2>
            <p className={pClass}>
              Bom yapısına göre üç ana hiyap tipi bulunur; seçim, yükün ağırlığı ve çalışılacak mesafeye göre yapılır:
            </p>

            <h3 className={h3Class}>Sabit Kollu Hiyap Vinçler</h3>
            <p className={pClass}>
              Tek parça, uzamayan bom yapısına sahip en yalın tiptir. Kısa mesafede yüksek kaldırma gücü sunar;
              mekanik yapısı basit olduğu için arıza riski düşüktür. Hurda, tomruk ve konteyner elleçleme gibi kanca
              yerine kepçe/polip aparatıyla yapılan tekrarlı işlerde tercih edilir.
            </p>

            <h3 className={h3Class}>Teleskopik Kollu Hiyap Vinçler</h3>
            <p className={pClass}>
              Bomun içinden hidrolik uzayan segmentlerle erişim mesafesini artıran tiptir. 15-20 metreye kadar yatay
              erişim sağlayarak yükü bina arkasına, çatı üzerine veya şantiye içine uzatabilir. İnşaat malzemesi
              dağıtımı ve makine yerleşiminde en çok kullanılan sınıftır.
            </p>

            <h3 className={h3Class}>Katlanır Kollu Hiyap Vinçler</h3>
            <p className={pClass}>
              Knuckle-boom olarak bilinen, birden çok eklemle katlanan bom yapısıdır. Eklemleri sayesinde alçak
              tavanlı ve dar alanlarda hassas manevra yapabilir; bom kendi üzerine katlanarak minimum yer kaplar.
              Jib uzatmalı versiyonları hem yüksek erişim hem eklem hareketini birleştirir.
            </p>
          </section>

          {/* 3 */}
          <section>
            <h2 className={h2Class}>Hiyap Vinç Kullanım Alanları</h2>
            <p className={pClass}>
              Hiyap vinçler, &quot;kaldır-taşı-indir&quot; zincirinin tek araçla çözülmesi gereken her işte kullanılır:
            </p>

            <h3 className={h3Class}>Yük Nakliyesi ve Lojistikte Kullanımı</h3>
            <ul className={ulClass}>
              <li>Konteyner, ofis konteyneri ve şantiye barakası taşıma</li>
              <li>Jeneratör, trafo ve kompresör gibi ekipmanların adrese teslimi</li>
              <li>Depo ve mağazalara ağır ürün sevkiyatı ve yerinde indirme</li>
              <li>Fuar, etkinlik ve sahne ekipmanlarının kurulum lojistiği</li>
            </ul>

            <h3 className={h3Class}>İnşaat Malzemesi Taşımacılığında Kullanımı</h3>
            <ul className={ulClass}>
              <li>Paletli tuğla, gazbeton ve çimento indirimi; kat aralarına malzeme uzatma</li>
              <li>Demir donatı ve çelik profil sevkiyatı</li>
              <li>Prefabrik duvar paneli ve merdiven elemanlarının montaj noktasına verilmesi</li>
              <li>Kalıp ve iskele malzemesinin şantiyeler arası transferi</li>
            </ul>

            <h3 className={h3Class}>Sanayi ve Fabrika İçi Yükleme İşlemlerinde Kullanımı</h3>
            <ul className={ulClass}>
              <li>Tezgah, pres ve CNC makinelerinin taşınıp yerleştirilmesi</li>
              <li>Fabrika taşınmalarında hat ekipmanlarının sökülüp kurulması</li>
              <li>Bobin, kalıp ve ağır yedek parça sevkiyatı</li>
              <li>Atık ve hurda konteynerlerinin değişim operasyonları</li>
            </ul>
          </section>

          {/* 4 */}
          <section>
            <h2 className={h2Class}>Hiyap Vinç Teknik Özellikleri</h2>
            <p className={pClass}>
              Hiyap seçiminde en önemli değer <strong>kaldırma momentidir (ton-metre)</strong>; kasa kapasitesi ve
              erişim mesafesi bunu tamamlar. Filomuzdaki tipik değerler:
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
                    <td className={tdClass}>Kaldırma momenti</td>
                    <td className={tdClass}>15-25 tm</td>
                    <td className={tdClass}>30-45 tm</td>
                    <td className={tdClass}>50-80 tm</td>
                  </tr>
                  <tr>
                    <td className={tdClass}>Yakın mesafe kapasitesi</td>
                    <td className={tdClass}>5-8 ton</td>
                    <td className={tdClass}>10-15 ton</td>
                    <td className={tdClass}>16-25 ton</td>
                  </tr>
                  <tr>
                    <td className={tdClass}>Maksimum erişim</td>
                    <td className={tdClass}>8-12 m</td>
                    <td className={tdClass}>14-18 m</td>
                    <td className={tdClass}>20-30 m (jib ile)</td>
                  </tr>
                  <tr>
                    <td className={tdClass}>Kasa yükü</td>
                    <td className={tdClass}>5-8 ton</td>
                    <td className={tdClass}>10-12 ton</td>
                    <td className={tdClass}>12-15 ton</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className={h3Class}>Kol Uzunluğu ve Kaldırma Momenti</h3>
            <p className={pClass}>
              Ton-metre değeri, kapasitenin mesafeyle çarpımını ifade eder: 40 tm bir hiyap; 2 metrede yaklaşık 20
              ton, 10 metrede 4 ton, 16 metrede ise yaklaşık 2,5 ton kaldırır. Bu nedenle teklif isterken yükün
              ağırlığıyla birlikte <strong>aracın park edeceği nokta ile yükün konacağı nokta arasındaki
              mesafeyi</strong> bildirmek, doğru araç seçiminin anahtarıdır.
            </p>
          </section>

          {/* 5 */}
          <section>
            <h2 className={h2Class}>Hiyap Vinç Kiralama Fiyatları</h2>
            <p className={pClass}>
              Hiyap kiralamada fiyat; işin niteliğine göre saatlik, günlük veya sefer (taşıma) bazlı hesaplanır.
              Fiyatı belirleyen ana faktörler:
            </p>
            <ul className={ulClass}>
              <li><strong>Araç sınıfı:</strong> Ton-metre değeri ve kasa kapasitesi büyüdükçe bedel artar.</li>
              <li><strong>İş tipi:</strong> Sabit noktada yükleme-boşaltma ile şehirler arası taşımalı iş farklı fiyatlanır.</li>
              <li><strong>Mesafe:</strong> Gidiş-dönüş yol ve taşıma güzergahı fiyata yansır.</li>
              <li><strong>Aparat ihtiyacı:</strong> Palet çatalı, kepçe veya jib gibi ek aparatlar bedeli etkiler.</li>
            </ul>

            <h3 className={h3Class}>Günlük Kiralama Fiyatları</h3>
            <p className={pClass}>
              Şantiye içi malzeme dağıtımı ve gün boyu sürecek yükleme işleri için günlük kiralama en verimli
              modeldir. Bedele araç, operatör, yakıt ve sigorta dahildir; kısa işler için minimum 4 saatlik
              kiralama seçeneği de sunulur.
            </p>

            <h3 className={h3Class}>Araç Tonajına Göre Fiyatlar</h3>
            <p className={pClass}>
              Fiyatlar araç sınıfına göre kademelenir: 15-25 tm hafif sınıf araçlar en ekonomik seçenektir; 50 tm ve
              üzeri ağır sınıf araçlar hem kapasite hem erişim gerektiren işlerde kullanılır ve buna göre
              fiyatlanır. İşinizi anlattığınızda gereğinden büyük araç kiralamamanız için en uygun sınıfı öneririz.
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
            <h2 className={h2Class}>Hiyap Vinç Kiralarken Dikkat Edilmesi Gerekenler</h2>
            <ul className={ulClass}>
              <li><strong>Yük ve mesafeyi birlikte bildirin:</strong> Kapasite mesafeye bağlı olduğundan ton-metre hesabı bu iki bilgiyle yapılır.</li>
              <li><strong>Araç erişimini kontrol edin:</strong> Sokak genişliği, geçit yüksekliği ve site giriş kısıtlarını önceden paylaşın.</li>
              <li><strong>Zemini değerlendirin:</strong> Ayak basma noktalarının sağlam olduğundan emin olun; gerekirse plaka kullanılır.</li>
              <li><strong>Kasa ölçüsünü sorun:</strong> Taşınacak yükün kasaya sığıp sığmayacağını (uzunluk/genişlik) teyit edin.</li>
              <li><strong>Aparatları netleştirin:</strong> Palet çatalı, sapan veya kepçe ihtiyacını teklif aşamasında belirtin.</li>
              <li><strong>Belgeleri isteyin:</strong> Periyodik kontrol raporu, operatör belgesi ve sigorta poliçelerini teyit edin.</li>
              <li><strong>Enerji hatlarını bildirin:</strong> Çalışma alanındaki elektrik hatları güzergah planını değiştirebilir.</li>
            </ul>
          </section>

          {/* 7 */}
          <section>
            <h2 className={h2Class}>Hiyap Vinç Montaj ve Araç Uyumu</h2>
            <p className={pClass}>
              Hiyap vinç performansı, vincin monte edildiği araçla doğrudan ilişkilidir. Vinç-araç uyumunda dikkate
              alınan başlıklar:
            </p>
            <div className={tableWrapClass}>
              <table className={tableClass}>
                <thead>
                  <tr>
                    <th className={thClass}>Uyum Kriteri</th>
                    <th className={thClass}>Açıklama</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className={tdClass}>Şasi dayanımı</td>
                    <td className={tdClass}>Vinç momenti, kamyonun şasi ve dingil kapasitesine uygun seçilir; gerekirse yardımcı şasi eklenir</td>
                  </tr>
                  <tr>
                    <td className={tdClass}>Montaj konumu</td>
                    <td className={tdClass}>Kabin arkası montaj kasa boyunu korur; kasa arkası montaj çekiş erişimini artırır</td>
                  </tr>
                  <tr>
                    <td className={tdClass}>PTO ve hidrolik sistem</td>
                    <td className={tdClass}>Vinç gücünü aracın motorundan alan güç aktarma (PTO) ünitesi araca göre projelendirilir</td>
                  </tr>
                  <tr>
                    <td className={tdClass}>Denge ayakları</td>
                    <td className={tdClass}>Bom kapasitesine uygun açılımda outrigger seçimi devrilme emniyetini belirler</td>
                  </tr>
                  <tr>
                    <td className={tdClass}>Yasal uygunluk</td>
                    <td className={tdClass}>Montaj sonrası araç projesi (tadilat) onayı ve muayene işlemleri tamamlanır</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className={pClass}>
              Kiralık araçlarımızın tümü bu uyum kriterlerine göre kurulmuş, proje onaylı ve muayeneli araçlardır;
              siz yalnızca işinizi tarif edersiniz, uygun aracı biz yönlendiririz.
            </p>
          </section>

          {/* 8 */}
          <section>
            <h2 className={h2Class}>Hiyap Vinç Güvenlik Standartları</h2>
            <p className={pClass}>
              Araç üstü vinç operasyonları hem karayolu hem kaldırma mevzuatına tabidir. Tüm araç ve
              operasyonlarımız şu standartlara uygundur:
            </p>
            <ul className={ulClass}>
              <li><strong>TS EN 12999:</strong> Araca monte edilen yükleyici vinçlerin güvenlik standardı</li>
              <li><strong>6331 sayılı İş Sağlığı ve Güvenliği Kanunu</strong> ve İş Ekipmanları Yönetmeliği</li>
              <li><strong>Aşırı yük koruması:</strong> Kapasite aşımında bom hareketini kısıtlayan hidrolik/elektronik sistem</li>
              <li><strong>Stabilite kontrolü:</strong> Ayak açılımına göre kapasiteyi sınırlayan denge izleme sistemleri</li>
              <li><strong>Uzaktan kumanda emniyeti:</strong> Acil stop ve ölü adam (dead-man) fonksiyonlu telsiz kumandalar</li>
              <li><strong>Seyir emniyeti:</strong> Bom kilidi ve ayak sensörleriyle araç, vinç toplanmadan hareket edemez</li>
              <li><strong>Çalışma alanı izolasyonu:</strong> Yük altında durulmaz; operasyon bölgesi ikaz elemanlarıyla sınırlandırılır</li>
            </ul>
          </section>

          {/* 9 */}
          <section>
            <h2 className={h2Class}>Hiyap Vinç ile Diğer Vinç Türleri Arasındaki Farklar</h2>
            <p className={pClass}>
              Hiyabı diğer tiplerden ayıran özellik, <strong>kaldırma ile taşımayı tek araçta
              birleştirmesidir</strong>. Karşılaştırma tablosu:
            </p>
            <div className={tableWrapClass}>
              <table className={tableClass}>
                <thead>
                  <tr>
                    <th className={thClass}>Kriter</th>
                    <th className={thClass}>Hiyap Vinç</th>
                    <th className={thClass}>Mobil Vinç</th>
                    <th className={thClass}>Sepetli Vinç</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className={tdClass}>Ana amaç</td>
                    <td className={tdClass}>Yükle-taşı-indir</td>
                    <td className={tdClass}>Ağır noktasal kaldırma</td>
                    <td className={tdClass}>Personel yükseltme</td>
                  </tr>
                  <tr>
                    <td className={tdClass}>Yük taşıma kasası</td>
                    <td className={tdClass}>Var</td>
                    <td className={tdClass}>Yok</td>
                    <td className={tdClass}>Yok</td>
                  </tr>
                  <tr>
                    <td className={tdClass}>Kurulum süresi</td>
                    <td className={tdClass}>5-10 dakika</td>
                    <td className={tdClass}>30-60 dakika</td>
                    <td className={tdClass}>15-20 dakika</td>
                  </tr>
                  <tr>
                    <td className={tdClass}>Maksimum kapasite</td>
                    <td className={tdClass}>25 ton (yakın mesafe)</td>
                    <td className={tdClass}>500+ ton</td>
                    <td className={tdClass}>Sepet: 200-600 kg</td>
                  </tr>
                  <tr>
                    <td className={tdClass}>Tipik iş süresi</td>
                    <td className={tdClass}>Saatlik - günlük</td>
                    <td className={tdClass}>Günlük - haftalık</td>
                    <td className={tdClass}>Saatlik - aylık</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* 10 */}
          <section>
            <h2 className={h2Class}>Hiyap Vinç Operatör Gereksinimleri</h2>
            <p className={pClass}>
              Hiyap kullanımı hem araç sürüşü hem vinç operatörlüğü yetkinliği gerektirir. Personelimiz şu şartları
              eksiksiz karşılar:
            </p>
            <ul className={ulClass}>
              <li>Araç sınıfına uygun <strong>C/CE sürücü belgesi</strong> ve SRC/psikoteknik evrakları</li>
              <li>MEB onaylı <strong>Araç Üstü Vinç Operatörlük Belgesi</strong></li>
              <li>Sapanlama, yük dengeleme ve işaretçiyle çalışma eğitimi</li>
              <li>En az 3 yıl saha deneyimi ve kullanılan araca özel oryantasyon</li>
              <li>Güncel sağlık raporu ve İSG uzmanlarımızca yıllık değerlendirme</li>
            </ul>
            <p className={pClass}>
              Kiralamalarımız operatörlü yapıldığı için tarafınızda herhangi bir belge gerekmez; yük bağlama
              aparatları araçla birlikte gelir.
            </p>
          </section>

          {/* 11 */}
          <section>
            <h2 className={h2Class}>Hiyap Vinç Bakım ve Periyodik Kontrolleri</h2>
            <p className={pClass}>
              Hem karayolu aracı hem kaldırma makinesi olan hiyaplarda bakım iki koldan yürütülür. Uyguladığımız
              program:
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
                    <td className={tdClass}>Hidrolik kaçak, ayak ve bom kilitleri, kumanda ve kanca mandalı testleri</td>
                  </tr>
                  <tr>
                    <td className={tdClass}>Haftalık</td>
                    <td className={tdClass}>Bom pim ve burç yağlama, hidrolik yağ seviyesi, hortum kontrolleri</td>
                  </tr>
                  <tr>
                    <td className={tdClass}>Aylık</td>
                    <td className={tdClass}>Döner tabla cıvata torku, kaynak ve şasi kontrolü, valf blok bakımı</td>
                  </tr>
                  <tr>
                    <td className={tdClass}>Yıllık (zorunlu)</td>
                    <td className={tdClass}>Yetkili mühendis periyodik kontrolü + araç fenni muayenesi</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className={pClass}>
              Tüm araçlarımız güncel periyodik kontrol raporları ve muayene belgeleriyle hizmet verir; belgeler
              talep halinde operasyon öncesinde paylaşılır.
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
