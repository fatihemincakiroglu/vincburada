import type { Metadata } from "next";
import { Oswald, Inter, IBM_Plex_Mono } from "next/font/google";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-oswald",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-inter",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
});

export const metadata: Metadata = {
  title: "Vinç Burada — Vinç Kiralama ve Yük Taşıma Hizmetleri",
  description:
    "Mobil, kule, paletli ve teleskopik vinç kiralama. Türkiye genelinde 7/24 saha hizmeti, sertifikalı operatörler ve tam sigorta kapsamı.",
};

export default function Home() {
  return (
    <div className={`${oswald.variable} ${inter.variable} ${plexMono.variable}`}>
<header>
  <nav className="wrap">
    <div className="logo"><span className="dot"></span>Vinç Burada</div>
    <div className="navlinks">
      <a href="#filo">Filomuz</a>
      <a href="#surec">Süreç</a>
      <a href="#teknik">Teknik Veriler</a>
      <a href="#sss">SSS</a>
      <a href="#iletisim">İletişim</a>
    </div>
    <div className="nav-cta">
      <span className="nav-phone">0850 222 46 26</span>
      <a className="btn btn-primary" style={{padding: '11px 20px', fontSize: '13px'}} href="#iletisim">Teklif Al</a>
    </div>
  </nav>
</header>

{/* ============ HERO ============ */}
<section className="hero">
  <div className="wrap">
    <div className="hero-grid">
      <div>
        <span className="eyebrow">7/24 SAHA HİZMETİ · TÜRKİYE GENELİ</span>
        <h1>İhtiyacın olan an,<br/>İhtiyacın olan yer<span className="accent">de.</span></h1>
        <p className="lead">Mobil, kule, paletli ve teleskopik vinç filomuzla 15 yıldır şantiyeden limana, enerji santralinden fabrika hattına kadar her yükü kaldırıyoruz.</p>
        <div className="hero-ctas">
          <a className="btn btn-primary" href="#iletisim">Hemen Teklif Al →</a>
          <a className="btn btn-ghost-dark" href="#filo">Filoyu İncele</a>
        </div>
        <div className="hero-stats">
          <div><b>15+</b><span>Yıl Tecrübe</span></div>
          <div><b>640</b><span>Tamamlanan Proje</span></div>
          <div><b>81</b><span>İl Kapsama</span></div>
          <div><b>24/7</b><span>Acil Müdahale</span></div>
        </div>
      </div>
      <div className="hero-art">
        <svg className="crane-svg" viewBox="0 0 420 360" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="300" width="420" height="60" fill="#1F1D15"/>
          <rect x="0" y="296" width="420" height="6" fill="#FFC600"/>
          <g className="boom">
            <rect x="178" y="280" width="22" height="40" fill="#E3E0D5"/>
            <circle cx="189" cy="285" r="34" fill="none" stroke="#4B4F58" strokeWidth="3"/>
            <line x1="189" y1="270" x2="339" y2="150" stroke="#FFC600" strokeWidth="10" strokeLinecap="round"/>
            <line x1="189" y1="270" x2="339" y2="150" stroke="#1F1D15" strokeWidth="10" strokeDasharray="4 10" strokeLinecap="round"/>
            <line x1="189" y1="260" x2="335" y2="150" stroke="#4B4F58" strokeWidth="2"/>
            <line x1="189" y1="270" x2="50" y2="300" stroke="#4B4F58" strokeWidth="6" strokeLinecap="round"/>
          </g>
          <g className="hook">
            <line x1="339" y1="150" x2="339" y2="210" stroke="#4B4F58" strokeWidth="2"/>
            <rect x="325" y="210" width="28" height="20" rx="2" fill="#D6491F"/>
            <path d="M333 230 q6 14 12 0" stroke="#1F1D15" strokeWidth="4" fill="none"/>
          </g>
          <rect x="120" y="282" width="138" height="20" rx="2" fill="#26241C"/>
          <circle cx="148" cy="306" r="13" fill="#1F1D15" stroke="#FFC600" strokeWidth="3"/>
          <circle cx="230" cy="306" r="13" fill="#1F1D15" stroke="#FFC600" strokeWidth="3"/>
          <rect x="30" y="316" width="360" height="3" fill="#4B4F58" opacity=".5"/>
        </svg>
      </div>
    </div>
  </div>
</section>
<div className="hazard"></div>

{/* ============ FLEET / SERVICES ============ */}
<section id="filo">
  <div className="wrap">
    <div className="section-head">
      <span className="eyebrow">Filomuz</span>
      <h2>Her yük için doğru ekipman</h2>
      <p>Operatörlü kiralama, sigortalı taşıma ve saha mühendisliği desteğiyle dört ana vinç sınıfını 7/24 sevkiyata hazır tutuyoruz.</p>
    </div>

    <div className="fleet-grid">
      <div className="fleet-card">
        <span className="num">01 / MOBİL</span>
        <svg viewBox="0 0 200 100" fill="none">
          <rect x="20" y="60" width="90" height="22" rx="3" fill="#26241C"/>
          <circle cx="40" cy="86" r="9" fill="#15140F"/>
          <circle cx="95" cy="86" r="9" fill="#15140F"/>
          <line x1="60" y1="60" x2="170" y2="20" stroke="#FFC600" strokeWidth="7" strokeLinecap="round"/>
          <line x1="170" y1="20" x2="170" y2="45" stroke="#4B4F58" strokeWidth="2"/>
        </svg>
        <h3>Mobil Vinç</h3>
        <p>Hızlı konuşlanma gerektiren şehir içi ve şantiye operasyonları için lastik tekerlekli, kendinden tahrikli çözüm.</p>
        <div className="specs">
          <span><b>Kapasite:</b> 25–150 ton</span>
          <span><b>Bom:</b> 12–58 m</span>
        </div>
      </div>
      <div className="fleet-card">
        <span className="num">02 / KULE</span>
        <svg viewBox="0 0 200 100" fill="none">
          <line x1="100" y1="10" x2="100" y2="95" stroke="#15140F" strokeWidth="6"/>
          <line x1="100" y1="20" x2="180" y2="20" stroke="#FFC600" strokeWidth="6"/>
          <line x1="100" y1="20" x2="40" y2="20" stroke="#4B4F58" strokeWidth="6"/>
          <line x1="100" y1="20" x2="180" y2="60" stroke="#4B4F58" strokeWidth="2"/>
          <line x1="160" y1="20" x2="160" y2="50" stroke="#4B4F58" strokeWidth="2"/>
          <rect x="86" y="92" width="28" height="6" fill="#26241C"/>
        </svg>
        <h3>Kule Vinç</h3>
        <p>Uzun süreli yüksek katlı inşaat projelerinde sabit kurulum ve yüksek çalışma yarıçapı sağlar.</p>
        <div className="specs">
          <span><b>Kapasite:</b> 6–20 ton</span>
          <span><b>Yükseklik:</b> 200 m'ye kadar</span>
        </div>
      </div>
      <div className="fleet-card">
        <span className="num">03 / PALETLİ</span>
        <svg viewBox="0 0 200 100" fill="none">
          <rect x="20" y="75" width="100" height="14" rx="6" fill="#15140F"/>
          <rect x="55" y="55" width="40" height="22" fill="#26241C"/>
          <line x1="80" y1="58" x2="175" y2="25" stroke="#FFC600" strokeWidth="8" strokeLinecap="round"/>
          <line x1="175" y1="25" x2="175" y2="48" stroke="#4B4F58" strokeWidth="2"/>
        </svg>
        <h3>Paletli Vinç</h3>
        <p>Zemini zayıf veya yumuşak sahalarda, ağır montaj işlerinde yüksek stabilite gerektiren işler için.</p>
        <div className="specs">
          <span><b>Kapasite:</b> 50–300 ton</span>
          <span><b>Bom:</b> 18–72 m</span>
        </div>
      </div>
      <div className="fleet-card">
        <span className="num">04 / TELESKOPİK</span>
        <svg viewBox="0 0 200 100" fill="none">
          <rect x="15" y="62" width="85" height="20" rx="3" fill="#26241C"/>
          <circle cx="35" cy="86" r="8" fill="#15140F"/>
          <circle cx="80" cy="86" r="8" fill="#15140F"/>
          <line x1="55" y1="62" x2="100" y2="38" stroke="#4B4F58" strokeWidth="6" strokeLinecap="round"/>
          <line x1="100" y1="38" x2="150" y2="20" stroke="#FFC600" strokeWidth="6" strokeLinecap="round"/>
          <line x1="150" y1="20" x2="185" y2="8" stroke="#FFC600" strokeWidth="4" strokeLinecap="round"/>
        </svg>
        <h3>Teleskopik Vinç</h3>
        <p>Ayarlanabilir bom uzunluğu sayesinde dar alanlarda ve değişken yükseklik ihtiyaçlarında esneklik sunar.</p>
        <div className="specs">
          <span><b>Kapasite:</b> 8–60 ton</span>
          <span><b>Bom:</b> 10–46 m</span>
        </div>
      </div>
    </div>
  </div>
</section>

{/* ============ WHY US ============ */}
<section className="why">
  <div className="wrap">
    <div className="why-grid">
      <div>
        <span className="eyebrow">Neden Vinç Burada</span>
        <h2 style={{fontSize: 'clamp(28px,3.6vw,40px)', textTransform: 'uppercase', margin: '14px 0 30px'}}>Şantiyenin asıl gecikme sebebi: ekipman değil</h2>
        <ul className="why-list">
          <li>
            <span className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="#FFC600" strokeWidth="2"><path d="M12 2v6m0 8v6M2 12h6m8 0h6" strokeLinecap="round"/></svg></span>
            <div><h4>Sertifikalı Operatörler</h4><p>Tüm operatörlerimiz G sınıfı belgeli ve yıllık iş güvenliği eğitiminden geçmektedir.</p></div>
          </li>
          <li>
            <span className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="#FFC600" strokeWidth="2"><path d="M3 12l9-9 9 9M5 10v10h14V10" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
            <div><h4>Saha Mühendisliği</h4><p>Kurulum öncesi zemin etüdü, yük hesaplama ve kaldırma planı saha mühendislerimizce hazırlanır.</p></div>
          </li>
          <li>
            <span className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="#FFC600" strokeWidth="2"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l4 2" strokeLinecap="round"/></svg></span>
            <div><h4>2 Saatte Sevkiyat</h4><p>81 il genelindeki depo ağımız sayesinde acil taleplere ortalama 2 saat içinde araç çıkarıyoruz.</p></div>
          </li>
          <li>
            <span className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="#FFC600" strokeWidth="2"><path d="M9 12l2 2 4-4M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7l8-4z" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
            <div><h4>Tam Sigorta Kapsamı</h4><p>Her operasyon, üçüncü şahıs ve yük sigortası dahil olmak üzere tam kapsamlı poliçeyle yürütülür.</p></div>
          </li>
        </ul>
      </div>
      <div className="why-img">
        <svg viewBox="0 0 480 600" width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
          <rect width="480" height="600" fill="#15140F"/>
          <g opacity="0.5" stroke="#FFC600" strokeWidth="1">
            <line x1="0" y1="100" x2="480" y2="100"/>
            <line x1="0" y1="220" x2="480" y2="220"/>
            <line x1="0" y1="340" x2="480" y2="340"/>
            <line x1="0" y1="460" x2="480" y2="460"/>
          </g>
          <line x1="60" y1="560" x2="60" y2="120" stroke="#4B4F58" strokeWidth="10"/>
          <line x1="60" y1="160" x2="380" y2="60" stroke="#FFC600" strokeWidth="14" strokeLinecap="round"/>
          <line x1="380" y1="60" x2="380" y2="280" stroke="#4B4F58" strokeWidth="3"/>
          <rect x="358" y="280" width="44" height="32" rx="3" fill="#D6491F"/>
          <circle cx="60" cy="565" r="22" fill="#15140F" stroke="#FFC600" strokeWidth="4"/>
          <rect x="0" y="555" width="480" height="45" fill="#26241C"/>
          <text x="30" y="585" fill="#FFC600" fontFamily="IBM Plex Mono" fontSize="14">VB · SAHA-04 · AKTİF</text>
        </svg>
      </div>
    </div>
  </div>
</section>

{/* ============ PROCESS ============ */}
<section className="process" id="surec">
  <div className="wrap">
    <div className="section-head">
      <span className="eyebrow" style={{color: '#FFC600'}}>İşleyiş</span>
      <h2>Talepten teslime 5 adım</h2>
      <p>Sürecin her aşaması saha ekibimiz ve operasyon merkezimiz tarafından eşzamanlı takip edilir.</p>
    </div>
    <div className="process-track">
      <div className="pstep">
        <div className="pnum">01</div>
        <h4>Talep &amp; Ön Bilgi</h4>
        <p>Yük tipi, ağırlık ve saha koordinatlarını iletin; 30 dakika içinde ön değerlendirme dönüşü alın.</p>
      </div>
      <div className="pstep">
        <div className="pnum">02</div>
        <h4>Saha Keşfi</h4>
        <p>Mühendis ekibimiz zemin yapısını, erişim yollarını ve engel yüksekliklerini saha ziyaretiyle doğrular.</p>
      </div>
      <div className="pstep">
        <div className="pnum">03</div>
        <h4>Kaldırma Planı</h4>
        <p>Uygun vinç sınıfı, bom konfigürasyonu ve güvenlik çevresi belirlenip yazılı plan onaya sunulur.</p>
      </div>
      <div className="pstep">
        <div className="pnum">04</div>
        <h4>Sevkiyat &amp; Operasyon</h4>
        <p>Ekipman ve sertifikalı operatör sahaya ulaşır; operasyon canlı olarak operasyon merkezinden izlenir.</p>
      </div>
      <div className="pstep">
        <div className="pnum">05</div>
        <h4>Teslim &amp; Raporlama</h4>
        <p>İş bitiminde saha tutanağı, yük raporu ve fatura aynı gün dijital olarak teslim edilir.</p>
      </div>
    </div>
  </div>
</section>
<div className="hazard"></div>

{/* ============ SPECS TABLE ============ */}
<section id="teknik">
  <div className="wrap">
    <div className="section-head">
      <span className="eyebrow">Teknik Veriler</span>
      <h2>Filo karşılaştırma tablosu</h2>
      <p>Doğru modeli seçmeden önce kapasite, bom uzunluğu ve sahaya konuşlanma süresini karşılaştırın.</p>
    </div>
    <div className="table-wrap">
      <table className="specs-table">
        <thead>
          <tr>
            <th>Model</th>
            <th>Sınıf</th>
            <th>Maks. Kapasite</th>
            <th>Bom Uzunluğu</th>
            <th>Maks. Yükseklik</th>
            <th>Konuşlanma</th>
            <th>Günlük Bedel*</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="model">VB-M120</td>
            <td><span className="tag">Mobil</span></td>
            <td>120 ton</td>
            <td>48 m</td>
            <td>62 m</td>
            <td>~2 saat</td>
            <td>₺18.500 – 24.000</td>
          </tr>
          <tr>
            <td className="model">VB-K8T</td>
            <td><span className="tag">Kule</span></td>
            <td>8 ton</td>
            <td>60 m radyus</td>
            <td>160 m</td>
            <td>3–5 gün (kurulum)</td>
            <td>₺9.200 – 13.000</td>
          </tr>
          <tr>
            <td className="model">VB-P250</td>
            <td><span className="tag">Paletli</span></td>
            <td>250 ton</td>
            <td>66 m</td>
            <td>78 m</td>
            <td>~6 saat</td>
            <td>₺32.000 – 41.500</td>
          </tr>
          <tr>
            <td className="model">VB-T35</td>
            <td><span className="tag">Teleskopik</span></td>
            <td>35 ton</td>
            <td>32 m</td>
            <td>40 m</td>
            <td>~1 saat</td>
            <td>₺11.000 – 15.500</td>
          </tr>
          <tr>
            <td className="model">VB-M60</td>
            <td><span className="tag">Mobil</span></td>
            <td>60 ton</td>
            <td>34 m</td>
            <td>45 m</td>
            <td>~1.5 saat</td>
            <td>₺13.500 – 17.000</td>
          </tr>
          <tr>
            <td className="model">VB-P400</td>
            <td><span className="tag">Paletli</span></td>
            <td>400 ton</td>
            <td>78 m</td>
            <td>96 m</td>
            <td>~8 saat</td>
            <td>₺46.000 – 58.000</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p className="table-note">* Fiyatlar operatör, yakıt ve sahaya nakliye dahil gösterge niteliğindedir; kesin teklif saha keşfi sonrası verilir.</p>
  </div>
</section>

{/* ============ COVERAGE (bullet list) ============ */}
<section className="why">
  <div className="wrap">
    <div className="coverage">
      <div>
        <span className="eyebrow">Hizmet Ağı</span>
        <h2 style={{fontSize: 'clamp(28px,3.6vw,38px)', textTransform: 'uppercase', margin: '14px 0 26px'}}>81 il, 14 bölge deposu</h2>
        <p style={{color: 'var(--steel)', fontSize: '15px', lineHeight: '1.6', marginBottom: '26px', maxWidth: '440px'}}>
          Bölge depolarımız sayesinde Türkiye'nin her noktasında aynı gün keşif, 48 saat içinde sevkiyat garantisi veriyoruz.
        </p>
        <ul className="coverage-list">
          <li>İstanbul (Avrupa)</li>
          <li>İstanbul (Anadolu)</li>
          <li>Ankara</li>
          <li>İzmir</li>
          <li>Bursa</li>
          <li>Kocaeli</li>
          <li>Antalya</li>
          <li>Adana</li>
          <li>Gaziantep</li>
          <li>Samsun</li>
          <li>Trabzon</li>
          <li>Konya</li>
        </ul>
      </div>
      <div className="coverage-map">
        <svg viewBox="0 0 400 400" width="100%" height="100%">
          <rect width="400" height="400" fill="#EFEDE6"/>
          <g stroke="#4B4F58" strokeWidth="0.6" opacity="0.4">
            <line x1="0" y1="50" x2="400" y2="50"/><line x1="0" y1="100" x2="400" y2="100"/>
            <line x1="0" y1="150" x2="400" y2="150"/><line x1="0" y1="200" x2="400" y2="200"/>
            <line x1="0" y1="250" x2="400" y2="250"/><line x1="0" y1="300" x2="400" y2="300"/>
            <line x1="0" y1="350" x2="400" y2="350"/>
            <line x1="50" y1="0" x2="50" y2="400"/><line x1="100" y1="0" x2="100" y2="400"/>
            <line x1="150" y1="0" x2="150" y2="400"/><line x1="200" y1="0" x2="200" y2="400"/>
            <line x1="250" y1="0" x2="250" y2="400"/><line x1="300" y1="0" x2="300" y2="400"/>
            <line x1="350" y1="0" x2="350" y2="400"/>
          </g>
          <g fill="#D6491F">
            <circle cx="120" cy="100" r="6"/><circle cx="200" cy="160" r="6"/>
            <circle cx="90" cy="190" r="6"/><circle cx="260" cy="210" r="6"/>
            <circle cx="180" cy="260" r="6"/><circle cx="300" cy="150" r="6"/>
            <circle cx="330" cy="260" r="6"/><circle cx="250" cy="310" r="6"/>
            <circle cx="150" cy="330" r="6"/>
          </g>
          <g fill="#15140F">
            <circle cx="170" cy="200" r="9"/>
          </g>
          <text x="184" y="204" fontFamily="IBM Plex Mono" fontSize="11" fill="#15140F">MERKEZ</text>
        </svg>
      </div>
    </div>
  </div>
</section>

{/* ============ TESTIMONIALS ============ */}
<section>
  <div className="wrap">
    <div className="section-head">
      <span className="eyebrow">Referanslar</span>
      <h2>Sahadan geri dönüşler</h2>
    </div>
    <div className="testi-grid">
      <div className="testi-card">
        <div className="stars">★★★★★</div>
        <p>"Liman sahasındaki 180 tonluk pres montajını öngörülenden bir gün önce tamamladılar. Operatörlerin saha disiplini fark yarattı."</p>
        <div className="testi-who"><div className="avatar">MK</div><div><b>Mert K.</b><span>Proje Müdürü, Liman Lojistik A.Ş.</span></div></div>
      </div>
      <div className="testi-card">
        <div className="stars">★★★★★</div>
        <p>"Acil bir arıza sonrası gece yarısı talep ettiğimiz mobil vinç 2 saat içinde sahada oldu. Bu hızı başka firmada görmedik."</p>
        <div className="testi-who"><div className="avatar">SD</div><div><b>Selin D.</b><span>Şantiye Şefi, Demirören İnşaat</span></div></div>
      </div>
      <div className="testi-card">
        <div className="stars">★★★★★</div>
        <p>"Kule vinç kurulumundan sökümüne kadar tüm süreç raporlandı; denetim sürecimizde elimizi çok rahatlattı."</p>
        <div className="testi-who"><div className="avatar">OY</div><div><b>Onur Y.</b><span>İSG Uzmanı, Aktif Enerji</span></div></div>
      </div>
    </div>
  </div>
</section>

{/* ============ FAQ ============ */}
<section className="faq" id="sss">
  <div className="wrap">
    <div className="section-head">
      <span className="eyebrow">Sıkça Sorulan Sorular</span>
      <h2>Kiralamadan önce bilmen gerekenler</h2>
    </div>
    <div className="faq-list">
      <details className="faq-item" open>
        <summary>Minimum kiralama süresi var mı?<span className="plus"></span></summary>
        <div className="body">Standart kiralamalarımız günlük bazda başlar; ancak tek seferlik kaldırma operasyonları için saatlik ücretlendirme de mümkündür. Uzun süreli şantiye projelerinde aylık sözleşme avantajları sunuyoruz.</div>
      </details>
      <details className="faq-item">
        <summary>Vinç fiyatına operatör dahil mi?<span className="plus"></span></summary>
        <div className="body">Evet, tüm kiralamalarımız G sınıfı sertifikalı operatör dahil olarak verilir. Sadece ekipman kiralamak isteyen kurumsal müşteriler için "operatörsüz" seçenek de mevcuttur, ancak bu durumda sigorta şartları değişir.</div>
      </details>
      <details className="faq-item">
        <summary>Sigorta kapsamı neyi içeriyor?<span className="plus"></span></summary>
        <div className="body">Her operasyon üçüncü şahıs mali sorumluluk sigortası ve taşınan yük sigortası ile güvence altındadır. Saha keşfi sırasında riskli operasyonlar için ek kapsam teklifi sunulur.</div>
      </details>
      <details className="faq-item">
        <summary>Hangi illerde hizmet veriyorsunuz?<span className="plus"></span></summary>
        <div className="body">14 bölge deposu üzerinden 81 ilin tamamına hizmet veriyoruz. Büyükşehirlerde aynı gün, diğer illerde 24–48 saat içinde sevkiyat garantisi veriyoruz.</div>
      </details>
      <details className="faq-item">
        <summary>Acil/gece operasyonları mümkün mü?<span className="plus"></span></summary>
        <div className="body">Operasyon merkezimiz 7/24 aktiftir. Acil talepler için ortalama müdahale süremiz büyükşehirlerde 2 saattir; gece ve resmi tatil operasyonları ek ücretle planlanır.</div>
      </details>
      <details className="faq-item">
        <summary>Ödeme ve faturalandırma nasıl işliyor?<span className="plus"></span></summary>
        <div className="body">Kurumsal müşterilerimize 30 güne kadar vadeli fatura, bireysel/küçük ölçekli işlerde ise iş bitiminde anlık fatura kesilmektedir. Banka havalesi ve kurumsal kredi kartı kabul edilir.</div>
      </details>
    </div>
  </div>
</section>

{/* ============ CTA BAND ============ */}
<div className="hazard"></div>
<section className="cta-band" id="iletisim">
  <div className="wrap">
    <div className="cta-row">
      <h2>Sahandaki yükü bugün planlayalım.</h2>
      <div style={{display: 'flex', gap: '16px', flexWrap: 'wrap'}}>
        <a className="btn btn-primary" style={{background: 'var(--ink)', color: 'var(--yellow)', boxShadow: '4px 4px 0 var(--ink-soft)'}} href="tel:+908502224626">0850 222 46 26</a>
        <a className="btn btn-ghost" href="mailto:teklif@vincburada.com">teklif@vincburada.com</a>
      </div>
    </div>
  </div>
</section>

{/* ============ FOOTER ============ */}
<footer>
  <div className="wrap">
    <div className="foot-grid">
      <div>
        <div className="logo" style={{marginBottom: '14px'}}><span className="dot"></span>Vinç Burada</div>
        <p style={{fontSize: '13.5px', lineHeight: '1.6', maxWidth: '280px'}}>Türkiye genelinde mobil, kule, paletli ve teleskopik vinç kiralama; saha mühendisliği ve sigortalı yük taşıma hizmeti.</p>
      </div>
      <div>
        <h5>Filomuz</h5>
        <ul>
          <li><a href="#filo">Mobil Vinç</a></li>
          <li><a href="#filo">Kule Vinç</a></li>
          <li><a href="#filo">Paletli Vinç</a></li>
          <li><a href="#filo">Teleskopik Vinç</a></li>
        </ul>
      </div>
      <div>
        <h5>Kurumsal</h5>
        <ul>
          <li><a href="#surec">Süreç</a></li>
          <li><a href="#teknik">Teknik Veriler</a></li>
          <li><a href="#sss">SSS</a></li>
          <li><a href="#iletisim">İletişim</a></li>
        </ul>
      </div>
      <div>
        <h5>İletişim</h5>
        <ul>
          <li>0850 222 46 26</li>
          <li>teklif@vincburada.com</li>
          <li>Merkez: İkitelli OSB, İstanbul</li>
        </ul>
      </div>
    </div>
    <div className="foot-bottom">
      <span>© 2026 Vinç Burada İş Makineleri San. ve Tic. A.Ş.</span>
      <span>Tüm operasyonlar ISO 9001 ve İSG yönetmeliklerine uygundur.</span>
    </div>
  </div>
</footer>

      <style jsx global>{`

  :root{
    --ink:#15140F;
    --ink-soft:#26241C;
    --yellow:#FFC600;
    --yellow-deep:#E2AE00;
    --steel:#4B4F58;
    --concrete:#EFEDE6;
    --concrete-2:#E3E0D5;
    --rust:#D6491F;
    --white:#FFFFFF;
    --line: rgba(21,20,15,0.12);
    --display: var(--font-oswald), sans-serif;
    --body: var(--font-inter), sans-serif;
    --mono: var(--font-plex-mono), monospace;
  }
  *{box-sizing:border-box;}
  html{scroll-behavior:smooth;}
  body{
    margin:0;
    font-family:var(--body);
    background:var(--concrete);
    color:var(--ink);
    -webkit-font-smoothing:antialiased;
  }
  img{max-width:100%;display:block;}
  a{color:inherit;text-decoration:none;}
  .wrap{max-width:1180px;margin:0 auto;padding:0 28px;}
  h1,h2,h3,h4{font-family:var(--display);margin:0;letter-spacing:-0.01em;}
  .eyebrow{
    font-family:var(--mono);
    font-size:12.5px;
    text-transform:uppercase;
    letter-spacing:0.14em;
    color:var(--rust);
    display:flex;
    align-items:center;
    gap:10px;
  }
  .eyebrow::before{
    content:"";
    width:18px;height:2px;background:var(--rust);
    display:inline-block;
  }
  .btn{
    font-family:var(--display);
    font-weight:600;
    text-transform:uppercase;
    letter-spacing:0.03em;
    font-size:14.5px;
    padding:15px 28px;
    border-radius:3px;
    display:inline-flex;
    align-items:center;
    gap:10px;
    transition:transform .18s ease, box-shadow .18s ease;
    border:2px solid transparent;
    cursor:pointer;
  }
  .btn:hover{transform:translateY(-2px);}
  .btn-primary{background:var(--yellow);color:var(--ink);box-shadow:4px 4px 0 var(--ink);}
  .btn-primary:hover{box-shadow:6px 6px 0 var(--ink);}
  .btn-ghost{border-color:var(--ink);color:var(--ink);}
  .btn-ghost:hover{background:var(--ink);color:var(--yellow);}
  .btn-ghost-dark{border-color:rgba(255,255,255,.35);color:var(--white);}
  .btn-ghost-dark:hover{background:var(--white);color:var(--ink);}

  /* HAZARD DIVIDER — signature element: the boom-angle chevron, echoes a crane jib's working angle */
  .hazard{
    height:14px;
    background:repeating-linear-gradient(115deg, var(--yellow) 0 18px, var(--ink) 18px 36px);
  }

  /* ===== NAV ===== */
  header{
    position:sticky;top:0;z-index:50;
    background:var(--ink);
    border-bottom:1px solid rgba(255,255,255,.08);
  }
  nav.wrap{
    display:flex;align-items:center;justify-content:space-between;
    height:74px;
  }
  .logo{
    font-family:var(--display);
    font-weight:700;
    font-size:21px;
    color:var(--white);
    display:flex;align-items:center;gap:10px;
    text-transform:uppercase;
    letter-spacing:0.01em;
  }
  .logo .dot{width:9px;height:9px;background:var(--yellow);border-radius:1px;transform:rotate(45deg);}
  .navlinks{display:flex;gap:34px;font-size:14.5px;font-weight:500;color:rgba(255,255,255,.78);}
  .navlinks a:hover{color:var(--yellow);}
  .nav-cta{display:flex;align-items:center;gap:18px;}
  .nav-phone{font-family:var(--mono);color:var(--yellow);font-size:14.5px;}
  @media (max-width:880px){ .navlinks{display:none;} .nav-phone{display:none;} }

  /* ===== HERO ===== */
  .hero{
    background:var(--ink);
    color:var(--white);
    position:relative;
    overflow:hidden;
    padding:88px 0 0;
  }
  .hero::before{
    content:"";
    position:absolute;inset:0;
    background-image:
      linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px);
    background-size:42px 42px;
    mask-image:linear-gradient(to bottom, black, transparent 85%);
  }
  .hero-grid{
    position:relative;z-index:2;
    display:grid;grid-template-columns:1.1fr 0.9fr;
    gap:40px;align-items:center;
    padding-bottom:60px;
  }
  .hero h1{
    font-size:clamp(44px,6.2vw,78px);
    line-height:0.98;
    text-transform:uppercase;
  }
  .hero h1 .accent{color:var(--yellow);}
  .hero p.lead{
    font-size:18px;line-height:1.6;color:rgba(255,255,255,.72);
    max-width:480px;margin:22px 0 34px;
  }
  .hero-ctas{display:flex;gap:16px;flex-wrap:wrap;margin-bottom:46px;}
  .hero-stats{
    display:grid;grid-template-columns:repeat(4,1fr);
    border-top:1px solid rgba(255,255,255,.12);
    padding-top:22px;
  }
  .hero-stats div{padding-right:18px;}
  .hero-stats b{
    font-family:var(--display);font-size:30px;color:var(--yellow);display:block;
  }
  .hero-stats span{font-size:12.5px;color:rgba(255,255,255,.55);text-transform:uppercase;letter-spacing:.06em;}
  @media (max-width:880px){
    .hero-grid{grid-template-columns:1fr;}
    .hero-stats{grid-template-columns:repeat(2,1fr);row-gap:20px;}
  }

  /* Hero crane SVG illustration */
  .hero-art{position:relative;z-index:2;}
  .crane-svg{width:100%;height:auto;}
  .crane-svg .boom{
    transform-origin:188px 290px;
    animation:liftboom 2.6s ease-in-out infinite alternate;
  }
  @keyframes liftboom{
    from{transform:rotate(0deg);}
    to{transform:rotate(-2.4deg);}
  }
  @media (prefers-reduced-motion:reduce){
    .crane-svg .boom{animation:none;}
  }
  .hook{
    animation:swing 3.4s ease-in-out infinite alternate;
    transform-origin:339px 150px;
  }
  @keyframes swing{from{transform:rotate(-1.2deg);} to{transform:rotate(1.2deg);}}
  @media (prefers-reduced-motion:reduce){.hook{animation:none;}}

  /* ===== SECTION GENERIC ===== */
  section{padding:96px 0;}
  .section-head{max-width:680px;margin-bottom:56px;}
  .section-head h2{font-size:clamp(30px,4vw,46px);text-transform:uppercase;margin-top:14px;}
  .section-head p{font-size:16.5px;color:var(--steel);line-height:1.6;margin-top:14px;}
  .section-dark{background:var(--ink);color:var(--white);}
  .section-dark .section-head p{color:rgba(255,255,255,.65);}

  /* ===== SERVICES (fleet) ===== */
  .fleet-grid{
    display:grid;grid-template-columns:repeat(4,1fr);gap:0;
    border:1px solid var(--line);
  }
  .fleet-card{
    border-right:1px solid var(--line);
    padding:30px 26px 34px;
    background:var(--white);
    position:relative;
    transition:background .2s ease;
  }
  .fleet-card:last-child{border-right:none;}
  .fleet-card:hover{background:var(--concrete-2);}
  .fleet-card .num{
    font-family:var(--mono);font-size:12.5px;color:var(--rust);
  }
  .fleet-card svg{width:100%;height:96px;margin:18px 0 20px;}
  .fleet-card h3{font-size:19px;text-transform:uppercase;margin-bottom:8px;}
  .fleet-card p{font-size:14px;color:var(--steel);line-height:1.55;margin:0 0 16px;}
  .fleet-card .specs{font-family:var(--mono);font-size:12px;color:var(--ink);display:flex;flex-direction:column;gap:4px;border-top:1px dashed var(--line);padding-top:14px;}
  .fleet-card .specs b{color:var(--rust);}
  @media (max-width:980px){.fleet-grid{grid-template-columns:repeat(2,1fr);} .fleet-card:nth-child(2){border-right:none;}}
  @media (max-width:560px){.fleet-grid{grid-template-columns:1fr;} .fleet-card{border-right:none !important;border-bottom:1px solid var(--line);}}

  /* ===== FEATURES / WHY US ===== */
  .why{background:var(--concrete-2);}
  .why-grid{display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:start;}
  .why-list{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;}
  .why-list li{
    display:flex;gap:18px;
    padding:22px 0;
    border-bottom:1px solid var(--line);
  }
  .why-list li:first-child{padding-top:0;}
  .why-list .ic{
    flex:0 0 44px;width:44px;height:44px;background:var(--ink);
    display:flex;align-items:center;justify-content:center;border-radius:3px;
  }
  .why-list .ic svg{width:22px;height:22px;}
  .why-list h4{font-size:16.5px;text-transform:uppercase;margin-bottom:5px;}
  .why-list p{margin:0;font-size:14.5px;color:var(--steel);line-height:1.55;}
  .why-img{
    position:relative;
    border:2px solid var(--ink);
    background:var(--ink);
    aspect-ratio:4/5;
    overflow:hidden;
  }
  @media (max-width:880px){.why-grid{grid-template-columns:1fr;gap:40px;} .why-img{order:-1;aspect-ratio:16/9;}}

  /* ===== PROCESS (real sequence → numbering is justified) ===== */
  .process{background:var(--ink);color:var(--white);position:relative;}
  .process-track{
    display:grid;grid-template-columns:repeat(5,1fr);gap:0;
    position:relative;
    margin-top:10px;
  }
  .process-track::before{
    content:"";position:absolute;top:34px;left:0;right:0;height:2px;
    background:repeating-linear-gradient(90deg, rgba(255,198,0,.5) 0 8px, transparent 8px 16px);
    z-index:0;
  }
  .pstep{position:relative;z-index:1;padding-right:24px;}
  .pstep .pnum{
    width:68px;height:68px;border-radius:50%;
    background:var(--ink);border:2px solid var(--yellow);
    display:flex;align-items:center;justify-content:center;
    font-family:var(--display);font-size:22px;color:var(--yellow);
    margin-bottom:22px;
  }
  .pstep h4{font-size:16px;text-transform:uppercase;margin-bottom:8px;letter-spacing:.02em;}
  .pstep p{font-size:13.8px;color:rgba(255,255,255,.6);line-height:1.55;margin:0;}
  @media (max-width:980px){.process-track{grid-template-columns:1fr 1fr;row-gap:42px;} .process-track::before{display:none;}}
  @media (max-width:560px){.process-track{grid-template-columns:1fr;}}

  /* ===== SPECS TABLE ===== */
  .table-wrap{overflow-x:auto;border:1px solid var(--ink);}
  table.specs-table{
    width:100%;border-collapse:collapse;min-width:760px;
    font-family:var(--mono);font-size:13.5px;
  }
  table.specs-table thead th{
    background:var(--ink);color:var(--yellow);
    text-align:left;padding:16px 18px;
    text-transform:uppercase;font-size:12px;letter-spacing:.05em;
    font-family:var(--body);font-weight:700;
  }
  table.specs-table tbody td{
    padding:16px 18px;border-bottom:1px solid var(--line);
    background:var(--white);
  }
  table.specs-table tbody tr:nth-child(even) td{background:var(--concrete-2);}
  table.specs-table tbody tr:hover td{background:#FBE9A6;}
  table.specs-table td.model{font-family:var(--body);font-weight:700;font-size:14px;}
  table.specs-table td.tag{
    font-family:var(--body);font-size:11.5px;font-weight:700;text-transform:uppercase;
    color:var(--rust);
  }
  .table-note{font-family:var(--mono);font-size:12.5px;color:var(--steel);margin-top:14px;}

  /* ===== COVERAGE / BULLET LIST SECTION ===== */
  .coverage{display:grid;grid-template-columns:0.9fr 1.1fr;gap:60px;}
  .coverage-list{margin:0;padding:0;list-style:none;display:grid;grid-template-columns:1fr 1fr;gap:14px 28px;}
  .coverage-list li{
    font-size:14.5px;font-weight:600;
    display:flex;align-items:center;gap:10px;
    padding:10px 0;border-bottom:1px solid var(--line);
  }
  .coverage-list li::before{
    content:"";width:8px;height:8px;background:var(--rust);
    flex:0 0 8px;border-radius:1px;transform:rotate(45deg);
  }
  .coverage-map{
    border:2px solid var(--ink);position:relative;background:var(--white);
    aspect-ratio:1/1;
  }
  @media (max-width:880px){.coverage{grid-template-columns:1fr;} .coverage-map{order:-1;}}

  /* ===== TESTIMONIALS ===== */
  .testi-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:0;border:1px solid var(--line);}
  .testi-card{padding:32px 28px;border-right:1px solid var(--line);background:var(--white);}
  .testi-card:last-child{border-right:none;}
  .testi-card .stars{color:var(--rust);font-size:14px;letter-spacing:2px;margin-bottom:16px;}
  .testi-card p{font-size:15px;line-height:1.6;color:var(--ink-soft);margin:0 0 22px;}
  .testi-who{display:flex;align-items:center;gap:12px;}
  .testi-who .avatar{
    width:40px;height:40px;border-radius:50%;background:var(--ink);
    display:flex;align-items:center;justify-content:center;color:var(--yellow);
    font-family:var(--display);font-size:15px;
  }
  .testi-who b{display:block;font-size:13.5px;}
  .testi-who span{font-size:12px;color:var(--steel);}
  @media (max-width:880px){.testi-grid{grid-template-columns:1fr;} .testi-card{border-right:none;border-bottom:1px solid var(--line);}}

  /* ===== FAQ (accordion) ===== */
  .faq{background:var(--concrete-2);}
  .faq-list{max-width:820px;}
  .faq-item{border-bottom:1px solid var(--line);}
  .faq-item summary{
    cursor:pointer;list-style:none;
    display:flex;align-items:center;justify-content:space-between;
    padding:24px 4px;
    font-family:var(--display);font-size:17px;text-transform:uppercase;letter-spacing:.01em;
  }
  .faq-item summary::-webkit-details-marker{display:none;}
  .faq-item .plus{
    flex:0 0 28px;width:28px;height:28px;border:2px solid var(--ink);border-radius:50%;
    display:flex;align-items:center;justify-content:center;position:relative;
  }
  .faq-item .plus::before,.faq-item .plus::after{
    content:"";position:absolute;background:var(--ink);transition:transform .2s ease;
  }
  .faq-item .plus::before{width:12px;height:2px;}
  .faq-item .plus::after{width:2px;height:12px;}
  .faq-item[open] .plus::after{transform:rotate(90deg);opacity:0;}
  .faq-item[open] summary{color:var(--rust);}
  .faq-item .body{padding:0 4px 26px;font-size:15px;line-height:1.65;color:var(--steel);max-width:680px;}

  /* ===== CTA BAND ===== */
  .cta-band{
    background:var(--yellow);
    padding:64px 0;
  }
  .cta-row{display:flex;align-items:center;justify-content:space-between;gap:30px;flex-wrap:wrap;}
  .cta-row h2{font-size:clamp(26px,3.4vw,38px);text-transform:uppercase;max-width:520px;}

  /* ===== FOOTER ===== */
  footer{background:var(--ink);color:rgba(255,255,255,.6);padding:70px 0 30px;}
  .foot-grid{display:grid;grid-template-columns:1.4fr 1fr 1fr 1fr;gap:40px;padding-bottom:50px;border-bottom:1px solid rgba(255,255,255,.1);}
  .foot-grid h5{color:var(--white);font-family:var(--display);font-size:13.5px;text-transform:uppercase;letter-spacing:.08em;margin-bottom:18px;}
  .foot-grid ul{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:10px;font-size:14px;}
  .foot-grid ul a:hover{color:var(--yellow);}
  .foot-bottom{display:flex;justify-content:space-between;padding-top:24px;font-size:12.5px;font-family:var(--mono);flex-wrap:wrap;gap:10px;}
  @media (max-width:880px){.foot-grid{grid-template-columns:1fr 1fr;}}

  .section-head .eyebrow + h2{margin-top:14px;}

      `}</style>
    </div>
  );
}
