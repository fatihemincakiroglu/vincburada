import avatarImage1 from '@/images/avatars/Image-1.png'
import avatarImage2 from '@/images/avatars/Image-2.png'
import avatarImage3 from '@/images/avatars/Image-3.png'
import avatarImage4 from '@/images/avatars/Image-4.png'
import logoAvatar from '@/app/icon.png'
import blogImg1 from '@/images/vinc/hero-mobil.webp'
import blogImg2 from '@/images/vinc/hero-sepetli.webp'
import blogImg3 from '@/images/vinc/hero-kule.webp'
import blogImg4 from '@/images/vinc/galeri-5.webp'

const blogAuthor = {
  name: 'Vinç Burada Ekibi',
  avatar: {
    src: logoAvatar.src,
    alt: 'Vinç Burada',
    width: logoAvatar.width,
    height: logoAvatar.height,
  },
  description:
    'Vinç Burada ekibi; vinç kiralama, yüksekte çalışma ve kaldırma operasyonları alanındaki saha deneyimini blog yazılarıyla paylaşır.',
}

export async function getListingReviews(handle: string) {
  return [
    {
      id: '1',
      title: "Can't say enough good things",
      rating: 5,
      content: 'Lovely hostess, very friendly! I would definitely stay here again. ',
      author: 'S. Walkinshaw',
      authorAvatar: avatarImage1,
      date: 'May 16, 2025',
      datetime: '2025-01-06',
    },
    {
      id: '2',
      title: 'Perfect for going out when you want to stay comfy',
      rating: 4,
      content: 'Excellent place. The host is super friendly, the room is clean and quiet.',
      author: 'Risako M',
      authorAvatar: avatarImage2,
      date: 'May 11, 2021',
      datetime: '2025-01-06',
    },
    {
      id: '3',
      title: 'Very nice feeling sweater!',
      rating: 5,
      content:
        'Very nice and friendly lady. Be pleasant to talk with her. The room looks better than in the pictures. ',
      author: 'Eden Birch',
      authorAvatar: avatarImage3,
      date: 'Aug 22, 2022',
      datetime: '2025-01-06',
    },
    {
      id: '4',
      title: 'Very nice feeling sweater!',
      rating: 5,
      content:
        'Lots of nice restaurants nearby and I tried two of them. I had so limited time in Paris this time and look forward to living here again.',
      author: 'Jonathan Edwards',
      authorAvatar: avatarImage4,
      date: 'May 16, 2025',
      datetime: '2025-01-06',
    },
  ]
}
export async function getBlogPosts() {
  return [
    {
      id: '1',
      title: 'Vinç Kiralarken Nelere Dikkat Edilmeli? 7 Önemli Kriter',
      handle: 'vinc-kiralarken-nelere-dikkat-edilmeli',
      excerpt:
        'Doğru vinç seçimi projenizin güvenliğini ve bütçesini doğrudan etkiler. Tonaj hesabından operatör belgesine, sigortadan keşif sürecine kadar vinç kiralamadan önce mutlaka kontrol etmeniz gereken 7 kriteri derledik.',
      featuredImage: {
        src: blogImg1.src,
        alt: 'Şantiyede çalışan kiralık mobil vinç',
        width: blogImg1.width,
        height: blogImg1.height,
      },
      date: '15 Haziran 2026',
      datetime: '2026-06-15',
      category: { title: 'Vinç Kiralama', href: '/vinc' },
      timeToRead: '5 dk okuma',
      author: blogAuthor,
      tags: ['vinç kiralama', 'şantiye', 'maliyet'],
      content: `
        <p>Vinç kiralama, çoğu projede en kritik satın alma kararlarından biridir. Yanlış kapasitede ya da yanlış tipte bir vinç; iş güvenliği riski, zaman kaybı ve beklenmedik maliyetler anlamına gelir. İşte kiralama öncesinde kontrol etmeniz gereken 7 temel kriter:</p>
        <h2>1. Yükün ağırlığını ve boyutunu netleştirin</h2>
        <p>Kaldırılacak yükün ağırlığı (tonaj), boyutları ve ağırlık merkezi vinç seçiminin başlangıç noktasıdır. Emniyet payı bırakmadan sınırda kapasite seçmek en sık yapılan hatadır; vinç kapasitesinin, yükün ağırlığının üzerinde güvenli bir marj bırakacak şekilde seçilmesi gerekir.</p>
        <h2>2. Çalışma yüksekliği ve mesafeyi hesaplayın</h2>
        <p>Vinçlerin kaldırma kapasitesi, bom açıldıkça ve yatay mesafe arttıkça düşer. "Kaç ton kaldırır?" sorusu tek başına yeterli değildir; <strong>hangi yükseklikte ve hangi mesafede</strong> kaç ton kaldıracağı önemlidir. Yük tablosunu (load chart) birlikte incelemekten çekinmeyin.</p>
        <h2>3. Zemin ve saha koşullarını değerlendirin</h2>
        <p>Vincin kurulacağı zeminin taşıma kapasitesi, sahaya giriş yolu, enerji hatları ve çevre yapılar operasyonu doğrudan etkiler. Ciddi firmalar kiralama öncesi ücretsiz keşif yaparak bu riskleri önceden tespit eder.</p>
        <h2>4. Operatörlü kiralama tercih edin</h2>
        <p>Vinç operatörlüğü belgeli ve deneyim gerektiren bir iştir. Operatörüyle birlikte kiralanan vinçlerde hem iş güvenliği hem de operasyon hızı belirgin şekilde artar. Operatörün ilgili sınıfta belgesi olduğunu mutlaka teyit edin.</p>
        <h2>5. Ekipmanın bakım ve periyodik kontrol kayıtlarını sorun</h2>
        <p>Türkiye'de kaldırma araçlarının periyodik kontrolleri yasal zorunluluktur. Güncel periyodik kontrol raporu olmayan bir vinci sahaya sokmayın; hem yasal hem de operasyonel risk oluşturur.</p>
        <h2>6. Sigorta kapsamını netleştirin</h2>
        <p>Olası bir hasarda sorumluluğun kimde olacağı sözleşmede açıkça yazmalıdır. Ekipman, yük ve üçüncü şahıs sorumluluğuna dair sigorta kapsamlarını kiralamadan önce sorun.</p>
        <h2>7. Fiyatı değil toplam maliyeti karşılaştırın</h2>
        <p>Nakliye, kurulum, operatör, mesai ve minimum kiralama süresi gibi kalemler teklifler arasında büyük fark yaratabilir. Saatlik fiyatı düşük görünen bir teklif, toplamda daha pahalıya gelebilir. Her zaman kalem kalem yazılı teklif isteyin.</p>
        <p>İhtiyacınıza uygun vinci birlikte belirlemek ve aynı gün teklif almak için <a href="/iletisim">bize ulaşabilirsiniz</a>.</p>
      `,
    },
    {
      id: '2',
      title: 'Sepetli Vinç (Manlift) Nedir? Hangi İşlerde Kullanılır?',
      handle: 'sepetli-vinc-manlift-nedir-hangi-islerde-kullanilir',
      excerpt:
        'Sepetli vinç, personeli güvenli bir platform içinde yüksekte çalıştırmak için tasarlanmış ekipmandır. Cephe işlerinden tabela montajına, budamadan bakım-onarıma kadar kullanım alanlarını ve çeşitlerini bu yazıda bulabilirsiniz.',
      featuredImage: {
        src: blogImg2.src,
        alt: 'Yüksekte çalışma için sepetli vinç (manlift)',
        width: blogImg2.width,
        height: blogImg2.height,
      },
      date: '28 Mayıs 2026',
      datetime: '2026-05-28',
      category: { title: 'Sepetli Vinç', href: '/sepetli-vinc' },
      timeToRead: '4 dk okuma',
      author: blogAuthor,
      tags: ['sepetli vinç', 'manlift', 'yüksekte çalışma'],
      content: `
        <p>Sepetli vinç (manlift ya da personel yükseltici platform), insanları yük değil <strong>personel taşıma amacıyla</strong> güvenli bir sepet içinde yükseğe çıkaran iş makinesidir. Merdiven ve iskeleye göre çok daha hızlı ve güvenli bir çözüm sunar.</p>
        <h2>Başlıca kullanım alanları</h2>
        <ul>
          <li><strong>Cephe işleri:</strong> Dış cephe kaplama, boya, mantolama ve cam temizliği</li>
          <li><strong>Tabela ve reklam montajı:</strong> Bina ve yol kenarı tabelalarının kurulumu ve bakımı</li>
          <li><strong>Elektrik ve aydınlatma:</strong> Sokak aydınlatması, enerji hattı ve trafo bakımları</li>
          <li><strong>Ağaç budama:</strong> Belediye ve site yönetimlerinin yüksek ağaç çalışmaları</li>
          <li><strong>Tesis bakımı:</strong> Fabrika, depo ve AVM'lerde çatı, havalandırma ve vinç yolu bakımları</li>
        </ul>
        <h2>Sepetli vinç çeşitleri</h2>
        <p><strong>Teleskopik (düz bomlu) platformlar</strong> maksimum erişim yüksekliği ve ileri uzanma gerektiren işlerde tercih edilir. <strong>Eklemli (articulated) platformlar</strong> engellerin üzerinden aşarak çalışma imkânı verir. <strong>Makaslı platformlar</strong> ise dikey yükselme ve geniş sepet alanı gereken iç mekân işlerinde idealdir. Araç üstü sepetli vinçler de şehir içi kısa süreli işlerin en pratik çözümüdür.</p>
        <h2>Doğru sepetli vinç nasıl seçilir?</h2>
        <p>Seçimde üç soru belirleyicidir: Çalışma yüksekliği kaç metre? Yatayda ne kadar uzanmanız gerekiyor? Zemin ve çalışma ortamı nasıl (iç/dış mekân, düz/eğimli zemin)? Bu üç cevaba göre dizel, akülü veya araç üstü modeller arasından en verimli seçenek belirlenir.</p>
        <p>Kiralık sepetli vinç modellerimizi <a href="/sepetli-vinc">buradan inceleyebilir</a>, projeniz için aynı gün teklif alabilirsiniz.</p>
      `,
    },
    {
      id: '3',
      title: 'Kule Vinç mi, Mobil Vinç mi? Projenize Uygun Vinç Seçimi',
      handle: 'kule-vinc-mi-mobil-vinc-mi-dogru-secim',
      excerpt:
        'Uzun soluklu inşaat projelerinde kule vinç, kısa süreli ve noktasal işlerde mobil vinç öne çıkar. İki vinç tipinin avantajlarını, maliyet yapısını ve hangi projede hangisinin mantıklı olduğunu karşılaştırdık.',
      featuredImage: {
        src: blogImg3.src,
        alt: 'İnşaat sahasında kule vinç',
        width: blogImg3.width,
        height: blogImg3.height,
      },
      date: '10 Mayıs 2026',
      datetime: '2026-05-10',
      category: { title: 'Kule Vinç', href: '/kule-vinc' },
      timeToRead: '4 dk okuma',
      author: blogAuthor,
      tags: ['kule vinç', 'mobil vinç', 'vinç seçimi'],
      content: `
        <p>İnşaat ve montaj projelerinde en sık aldığımız sorulardan biri: "Kule vinç mi kiralasak, mobil vinç mi?" Doğru cevap projenin süresine, yük profiline ve sahanın koşullarına bağlıdır.</p>
        <h2>Kule vincin avantajları</h2>
        <p>Kule vinç, şantiyeye kurulan ve proje boyunca sabit kalan bir çözümdür. Yüksek katlı yapılarda kesintisiz dikey taşıma, geniş çalışma yarıçapı ve sürekli kullanımda düşük birim maliyet sağlar. Aylar sürecek bir konut ya da ticari yapı projesinde toplam maliyette genellikle en verimli seçenektir. Karşılığında kurulum-söküm süreci, temel hazırlığı ve montaj maliyeti gerektirir.</p>
        <h2>Mobil vincin avantajları</h2>
        <p>Mobil vinç kendi şasesi üzerinde sahaya gelir, kısa sürede kurulur ve işi bitince ayrılır. Makine yerleşimi, çelik konstrüksiyon montajı, prefabrik eleman yerleştirme gibi <strong>noktasal ve kısa süreli</strong> kaldırma işlerinin ideal çözümüdür. Saatlik/günlük kiralanabildiği için kısa işlerde toplam maliyeti düşüktür.</p>
        <h2>Hızlı karar rehberi</h2>
        <ul>
          <li>Proje <strong>3 aydan uzun</strong> ve sürekli malzeme taşıma varsa → kule vinç</li>
          <li>İş <strong>birkaç saat ile birkaç gün</strong> sürecekse → mobil vinç</li>
          <li>Çok ağır tekil yükler (trafo, makine, kiriş) kaldırılacaksa → yüksek tonajlı mobil vinç</li>
          <li>Saha dar ve kule vinç temeli için yer yoksa → mobil vinç veya kendinden kurulumlu kule vinç</li>
        </ul>
        <p>Bazı projelerde iki tipin birlikte kullanılması da yaygındır: kule vinç rutin taşımayı yaparken, ağır tekil yükler için günlük mobil vinç çağrılır.</p>
        <p>Projenizi anlatın, <a href="/iletisim">ücretsiz keşif</a> ile en doğru kombinasyonu birlikte planlayalım. Kiralık modeller için <a href="/kule-vinc">kule vinç</a> ve <a href="/mobil-vinc">mobil vinç</a> sayfalarımızı inceleyebilirsiniz.</p>
      `,
    },
    {
      id: '4',
      title: 'Vinç Operasyonlarında İş Güvenliği: Sahada Uyulması Gereken Temel Kurallar',
      handle: 'vinc-operasyonlarinda-is-guvenligi-temel-kurallar',
      excerpt:
        'Vinçle yapılan kaldırma işleri, şantiyelerin en riskli operasyonları arasındadır. Kaldırma planından işaretçi kullanımına, sapan kontrolünden yasak bölge uygulamasına kadar sahada hayat kurtaran temel güvenlik kurallarını özetledik.',
      featuredImage: {
        src: blogImg4.src,
        alt: 'Vinç operasyonunda güvenli yük kaldırma',
        width: blogImg4.width,
        height: blogImg4.height,
      },
      date: '22 Nisan 2026',
      datetime: '2026-04-22',
      category: { title: 'İş Güvenliği', href: '/vinc' },
      timeToRead: '5 dk okuma',
      author: blogAuthor,
      tags: ['iş güvenliği', 'kaldırma planı', 'şantiye'],
      content: `
        <p>Vinç kazalarının büyük bölümü ekipman arızasından değil; plansız operasyon, yanlış sapanlama ve iletişim eksikliğinden kaynaklanır. Aşağıdaki kurallar, her kaldırma operasyonunda uygulanması gereken temel güvenlik pratikleridir.</p>
        <h2>Kaldırma planı olmadan operasyon başlamaz</h2>
        <p>Yükün ağırlığı, bağlantı noktaları, vinç pozisyonu, bom açısı ve yükün izleyeceği rota önceden planlanmalıdır. Kritik kaldırmalarda (kapasitenin yüksek oranında, çift vinçle veya insanlı bölge üzerinde yapılan işlerde) yazılı kaldırma planı zorunlu kabul edilmelidir.</p>
        <h2>Belgeli operatör ve işaretçi</h2>
        <p>Operatörün ilgili vinç sınıfında belgesi olmalı; operatörün göremediği her kaldırmada eğitimli bir işaretçi (sinyalci) görev almalıdır. El işaretleri veya telsiz üzerinden tek bir kişinin yönlendirme yapması, karışık komutları önler.</p>
        <h2>Sapan ve kaldırma aparatları her kullanımdan önce kontrol edilir</h2>
        <p>Halat, zincir ve tekstil sapanlarda ezilme, kesik, aşınma ve etiket kontrolü yapılmadan yük bağlanmaz. Şüpheli ekipman derhal kullanım dışı bırakılır.</p>
        <h2>Yük altında ve yasak bölgede kimse bulunamaz</h2>
        <p>Askıdaki yükün altından geçmek ve yükün savrulma alanında durmak kesinlikle yasaktır. Operasyon alanı bariyer ve ikaz şeritleriyle sınırlandırılmalı, ilgisiz personelin girişi engellenmelidir.</p>
        <h2>Hava koşulları ve zemin sürekli izlenir</h2>
        <p>Rüzgâr hızı üreticinin belirttiği limiti aştığında operasyon durdurulur. Ayakların (outrigger) tam açık ve uygun plakalar üzerinde olduğu, zeminde oturma olmadığı operasyon boyunca kontrol edilir.</p>
        <h2>Periyodik kontroller ve günlük check-list</h2>
        <p>Vinçlerin yasal periyodik kontrollerinin güncel olması yeterli değildir; operatör her vardiya başında fren, limit switch, halat ve kanca emniyet mandalını içeren günlük kontrol listesini uygulamalıdır.</p>
        <p>Vinç Burada olarak tüm ekipmanlarımızı güncel periyodik kontrol raporlarıyla ve belgeli operatörlerimizle sahaya gönderiyoruz. Güvenli bir operasyon planlamak için <a href="/iletisim">bizimle iletişime geçin</a>.</p>
      `,
    },
  ]
}

export async function getBlogPostsByHandle(handle: string) {
  const posts = await getBlogPosts()
  return posts.find((post) => post.handle === handle.toLowerCase())
}

//
export type TListingReivew = Awaited<ReturnType<typeof getListingReviews>>[number]
export type TBlogPost = Awaited<ReturnType<typeof getBlogPosts>>[number]
