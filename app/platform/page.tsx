import type { Metadata } from "next";
import ProductCatalog from "../components/ProductCatalog";
import { platformProducts } from "../data/products/platform";

export const metadata: Metadata = {
  title: "Platform Kiralama — Vinç Burada",
  description: "Sepetli, teleskopik ve eklemli kamyon üstü platform kiralama. Cephe, cami restorasyonu ve bakım işleri için.",
};

export default function PlatformPage() {
  return (
    <>
      <section className="hero hero-light">
        <div className="hero-bg">
          <img src="/gallery/zebra-desenli-platform.jpg" alt="Platform operasyonu" />
        </div>
        <div className="hero-content wrap">
          <span className="eyebrow" style={{ color: "var(--gold-soft)" }}>04 · PLATFORM</span>
          <h1>
            Cepheye,
            <br />
            <span className="accent">dakikalar</span> içinde ulaş.
          </h1>
          <p className="lead">
            Kamyon üstü sepetli ve teleskopik platformlarla cami restorasyonundan cam cephe montajına,
            gökdelen bakımından prodüksiyon setlerine kadar hızlı erişim.
          </p>
          <div className="hero-ctas">
            <a className="btn btn-gold" href="/iletisim">Platform Teklifi Al →</a>
            <a className="btn btn-glass" href="tel:+905323039089">0532 303 90 89</a>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Platform Sınıfları</span>
            <h2>Erişim mesafesine göre doğru platform</h2>
            <p>Kamyon üstü platformlar, kendi gücüyle hareket eden manliftlerden farklı olarak hızlı nakliye ve kurulum sağlar.</p>
          </div>
          <div className="fleet-grid">
            <div className="fleet-card">
              <span className="num">01 / TELESKOPİK</span>
              <svg viewBox="0 0 200 100" fill="none">
                <rect x="15" y="68" width="80" height="18" rx="3" fill="#10141A" />
                <circle cx="35" cy="88" r="8" fill="#10141A" />
                <circle cx="78" cy="88" r="8" fill="#10141A" />
                <line x1="55" y1="68" x2="170" y2="20" stroke="#F2B400" strokeWidth="7" strokeLinecap="round" />
                <rect x="166" y="13" width="18" height="12" rx="2" fill="#E8E2D5" />
              </svg>
              <h3>Teleskopik Platform</h3>
              <p>Düz bom yapısı ile uzun mesafeli, dik erişim gerektiren cephe ve minare gibi yüksek noktalar için.</p>
              <div className="specs">
                <span><b>Erişim:</b> 20–58 m</span>
                <span><b>Sepet Kapasite:</b> 200–300 kg</span>
              </div>
            </div>
            <div className="fleet-card">
              <span className="num">02 / EKLEMLİ</span>
              <svg viewBox="0 0 200 100" fill="none">
                <rect x="15" y="68" width="80" height="18" rx="3" fill="#10141A" />
                <circle cx="35" cy="88" r="8" fill="#10141A" />
                <circle cx="78" cy="88" r="8" fill="#10141A" />
                <line x1="55" y1="68" x2="90" y2="30" stroke="#6C7078" strokeWidth="7" strokeLinecap="round" />
                <line x1="90" y1="30" x2="160" y2="45" stroke="#F2B400" strokeWidth="6" strokeLinecap="round" />
                <rect x="158" y="38" width="18" height="12" rx="2" fill="#E8E2D5" />
              </svg>
              <h3>Eklemli Platform</h3>
              <p>Çıkıntılı çatı, sundurma veya engebeli cephe detaylarının üzerinden geçerek erişim sağlar.</p>
              <div className="specs">
                <span><b>Erişim:</b> 16–42 m</span>
                <span><b>Yatay Erişim:</b> 12–24 m</span>
              </div>
            </div>
            <div className="fleet-card">
              <span className="num">03 / İKİZ KOLLU</span>
              <svg viewBox="0 0 200 100" fill="none">
                <rect x="60" y="70" width="80" height="16" rx="3" fill="#10141A" />
                <line x1="75" y1="70" x2="40" y2="25" stroke="#F2B400" strokeWidth="6" strokeLinecap="round" />
                <line x1="125" y1="70" x2="160" y2="25" stroke="#F2B400" strokeWidth="6" strokeLinecap="round" />
                <rect x="32" y="18" width="16" height="11" rx="2" fill="#E8E2D5" />
                <rect x="152" y="18" width="16" height="11" rx="2" fill="#E8E2D5" />
              </svg>
              <h3>İkiz Kollu Platform</h3>
              <p>İki ayrı kol sayesinde aynı anda iki ayrı noktaya erişim; özellikle iskele kurulumlarında zaman kazandırır.</p>
              <div className="specs">
                <span><b>Erişim:</b> 14–32 m (her kol)</span>
                <span><b>Sepet Kapasite:</b> 2x200 kg</span>
              </div>
            </div>
            <div className="fleet-card">
              <span className="num">04 / KOMPAKT</span>
              <svg viewBox="0 0 200 100" fill="none">
                <rect x="20" y="65" width="60" height="20" rx="3" fill="#10141A" />
                <circle cx="35" cy="88" r="8" fill="#10141A" />
                <circle cx="68" cy="88" r="8" fill="#10141A" />
                <line x1="50" y1="65" x2="120" y2="30" stroke="#F2B400" strokeWidth="6" strokeLinecap="round" />
                <rect x="116" y="23" width="16" height="11" rx="2" fill="#E8E2D5" />
              </svg>
              <h3>Kompakt Platform</h3>
              <p>Dar sokak ve avlu gibi kısıtlı alanlarda hızlı konuşlanan, küçük gabarili şehir içi çözüm.</p>
              <div className="specs">
                <span><b>Erişim:</b> 12–20 m</span>
                <span><b>Genişlik:</b> 2.1–2.4 m</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-alt" id="sahalar-platform">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Sahadan</span>
            <h2>Platform operasyonlarından kareler</h2>
          </div>
          <div className="bento">
            <div className="bento-item wide tall">
              <img src="/gallery/fatih-camii-platform.jpg" alt="Tarihi cami avlusunda platform" />
              <span className="tag">Tarihi Cami Restorasyonu</span>
            </div>
            <div className="bento-item tall">
              <img src="/gallery/zebra-desenli-platform.jpg" alt="Zebra desenli platform" />
              <span className="tag">Özel Kaplama Filo Aracı</span>
            </div>
            <div className="bento-item">
              <img src="/gallery/rezidans-cephe-vinc.jpg" alt="Rezidans cephe platformu" />
              <span className="tag">Rezidans Cephe Montajı</span>
            </div>
            <div className="bento-item">
              <img src="/gallery/rezidans-cephe-vinc-2.jpg" alt="Rezidans cephe platformu 2" />
              <span className="tag">Cephe Detay Montajı</span>
            </div>
            <div className="bento-item">
              <img src="/gallery/cam-cephe-platform.jpg" alt="Cam cephe platformu" />
              <span className="tag">Cam Cephe Montajı</span>
            </div>
            <div className="bento-item wide">
              <img src="/gallery/cephe-giyim-platform.jpg" alt="Cephe giyim platformu" />
              <span className="tag">Cephe Giyim İşleri</span>
            </div>
            <div className="bento-item">
              <img src="/gallery/express-platform-kamyon.jpg" alt="Filo aracı" />
              <span className="tag">Filo Aracı — Sahaya Hazır</span>
            </div>
            <div className="bento-item wide">
              <img src="/gallery/platform-cam-bulutlar.jpg" alt="Maksimum yükseklik" />
              <span className="tag">Maksimum Yükseklik</span>
            </div>
          </div>
        </div>
      </section>

      <section id="teknik">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Ürün Kataloğu</span>
            <h2>10 platform modeli, tek tek incele</h2>
            <p>Teleskopikten eklemliye, ikiz kollu&apos;dan kompakta kadar tüm platform çeşitlerimizi karşılaştırarak doğru modeli seçin.</p>
          </div>
          <div className="cat-platform"><ProductCatalog products={platformProducts} /></div>
          <p className="table-note">* Fiyat, ekipman tipi, süre ve saha koşullarına göre değişir; size özel teklif için “Teklif Al” butonunu kullanın.</p>
        </div>
      </section>


      <section className="section-alt" id="sss">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Sıkça Sorulan Sorular</span>
            <h2>Platform kiralamadan önce</h2>
          </div>
          <div className="faq-list">
            <details className="faq-item" open>
              <summary>Tarihi yapılarda platform kullanılabilir mi?<span className="plus"></span></summary>
              <div className="body">Evet, cami ve tarihi bina restorasyonlarında ilgili kurumlardan gerekli izinler alınarak hassas ve kontrollü operasyon planı ile çalışıyoruz.</div>
            </details>
            <details className="faq-item">
              <summary>Platform için saha erişimi ne kadar yer kaplar?<span className="plus"></span></summary>
              <div className="body">Modelden ayağa açılma genişliği değişmekle birlikte ortalama 4–6 metre yan boşluk gereklidir; dar sokaklarda kompakt modelimizi öneririz.</div>
            </details>
            <details className="faq-item">
              <summary>Gece operasyonu mümkün mü?<span className="plus"></span></summary>
              <div className="body">Evet, aydınlatma donanımlı araçlarımızla gece operasyonları (örneğin kongre merkezi ve etkinlik kurulumları) düzenli olarak yapılmaktadır.</div>
            </details>
          </div>
        </div>
      </section>

      <section id="iletisim" style={{ paddingTop: "0" }}>
        <div className="cta-band">
          <div className="cta-band-bg">
            <img src="/gallery/kongre-merkezi-gece.jpg" alt="Gece operasyonu" />
          </div>
          <div className="cta-band-inner">
            <div className="cta-row">
              <h2>Platform ihtiyacını bugün planlayalım.</h2>
              <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
                <a className="btn btn-gold" href="tel:+905323039089">0532 303 90 89</a>
                <a className="btn btn-glass" href="mailto:info@vincburada.com.tr">info@vincburada.com.tr</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Diğer Hizmetlerimiz</span>
            <h2>Vinç, forklift ve manlift</h2>
          </div>
          <div className="cat-grid" style={{ gridTemplateColumns: "repeat(3,1fr)" }}>
            <a className="cat-card" href="/vinc">
              <img src="/gallery/anitkabir-vinc.jpg" alt="Vinç" />
              <div className="cat-label"><span className="k">01</span><h3>Vinç</h3></div>
            </a>
            <a className="cat-card" href="/forklift">
              <img src="/gallery/express-platform-kamyon.jpg" alt="Forklift" />
              <div className="cat-label"><span className="k">02</span><h3>Forklift</h3></div>
            </a>
            <a className="cat-card" href="/manlift">
              <img src="/gallery/cekim-platform-orman.jpg" alt="Manlift" />
              <div className="cat-label"><span className="k">03</span><h3>Manlift</h3></div>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
