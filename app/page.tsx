import type { Metadata } from "next";
import { Oswald, Inter, IBM_Plex_Mono } from "next/font/google";
import "./vincburada.css";

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
    </div>
  );
}
