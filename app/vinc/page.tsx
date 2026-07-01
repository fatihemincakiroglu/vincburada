import type { Metadata } from "next";
import ProductCatalog from "../components/ProductCatalog";
import { vincProducts } from "../data/products/vinc";

export const metadata: Metadata = {
  title: "Vinç Kiralama — Vinç Burada",
  description: "Mobil, kule, paletli ve teleskopik vinç kiralama. Operatörlü, sigortalı ve 7/24 saha desteğiyle.",
};

export default function VincPage() {
  return (
    <>
      <section className="hero hero-light" style={{ minHeight: "70vh" }}>
        <div className="hero-bg">
          <img src="/gallery/anitkabir-vinc.jpg" alt="Vinç operasyonu" />
        </div>
        <div className="hero-content wrap">
          <span className="eyebrow" style={{ color: "var(--gold-soft)" }}>
            01 · VİNÇ
          </span>
          <h1>
            Ağır yükü,
            <br />
            doğru <span className="accent">açıyla</span> taşı.
          </h1>
          <p className="lead">
            25 ila 400 ton kapasite aralığında mobil, kule, paletli ve teleskopik vinçlerle
            şantiyeden enerji santraline her kaldırma operasyonu.
          </p>
          <div className="hero-ctas">
            <a className="btn btn-gold" href="/iletisim">
              Vinç Teklifi Al →
            </a>
            <a className="btn btn-glass" href="tel:+905323039089">
              0532 303 90 89
            </a>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Vinç Sınıfları</span>
            <h2>Her yük için doğru vinç tipi</h2>
            <p>Zemin yapısı, çalışma yarıçapı ve yük ağırlığına göre dört ana vinç sınıfından doğrusunu öneriyoruz.</p>
          </div>
          <div className="fleet-grid">
            <div className="fleet-card">
              <span className="num">01 / MOBİL</span>
              <svg viewBox="0 0 200 100" fill="none">
                <rect x="20" y="60" width="90" height="22" rx="3" fill="#E8E2D5" />
                <circle cx="40" cy="86" r="9" fill="#1C1A17" />
                <circle cx="95" cy="86" r="9" fill="#1C1A17" />
                <line x1="60" y1="60" x2="170" y2="20" stroke="#A9762E" strokeWidth="7" strokeLinecap="round" />
                <line x1="170" y1="20" x2="170" y2="45" stroke="#7A7367" strokeWidth="2" />
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
                <line x1="100" y1="10" x2="100" y2="95" stroke="#1C1A17" strokeWidth="6" />
                <line x1="100" y1="20" x2="180" y2="20" stroke="#A9762E" strokeWidth="6" />
                <line x1="100" y1="20" x2="40" y2="20" stroke="#7A7367" strokeWidth="6" />
                <line x1="100" y1="20" x2="180" y2="60" stroke="#7A7367" strokeWidth="2" />
                <line x1="160" y1="20" x2="160" y2="50" stroke="#7A7367" strokeWidth="2" />
                <rect x="86" y="92" width="28" height="6" fill="#E8E2D5" />
              </svg>
              <h3>Kule Vinç</h3>
              <p>Uzun süreli yüksek katlı inşaat projelerinde sabit kurulum ve yüksek çalışma yarıçapı sağlar.</p>
              <div className="specs">
                <span><b>Kapasite:</b> 6–20 ton</span>
                <span><b>Yükseklik:</b> 200 m&apos;ye kadar</span>
              </div>
            </div>
            <div className="fleet-card">
              <span className="num">03 / PALETLİ</span>
              <svg viewBox="0 0 200 100" fill="none">
                <rect x="20" y="75" width="100" height="14" rx="6" fill="#1C1A17" />
                <rect x="55" y="55" width="40" height="22" fill="#E8E2D5" />
                <line x1="80" y1="58" x2="175" y2="25" stroke="#A9762E" strokeWidth="8" strokeLinecap="round" />
                <line x1="175" y1="25" x2="175" y2="48" stroke="#7A7367" strokeWidth="2" />
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
                <rect x="15" y="62" width="85" height="20" rx="3" fill="#E8E2D5" />
                <circle cx="35" cy="86" r="8" fill="#1C1A17" />
                <circle cx="80" cy="86" r="8" fill="#1C1A17" />
                <line x1="55" y1="62" x2="100" y2="38" stroke="#7A7367" strokeWidth="6" strokeLinecap="round" />
                <line x1="100" y1="38" x2="150" y2="20" stroke="#A9762E" strokeWidth="6" strokeLinecap="round" />
                <line x1="150" y1="20" x2="185" y2="8" stroke="#A9762E" strokeWidth="4" strokeLinecap="round" />
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

      <section className="section-alt">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Sahadan</span>
            <h2>Vinç operasyonlarından kareler</h2>
          </div>
          <div className="bento">
            <div className="bento-item wide tall">
              <img src="/gallery/su-kulesi-gece-vinc.jpg" alt="Tarihi su kulesinde gece vinç operasyonu" />
              <span className="tag">Tarihi Su Kulesi — Gece</span>
            </div>
            <div className="bento-item tall">
              <img src="/gallery/fatih-camii-minare.jpg" alt="Minareye uzanan vinç" />
              <span className="tag">Minare Bakımı</span>
            </div>
            <div className="bento-item">
              <img src="/gallery/kongre-merkezi-gece.jpg" alt="Kongre merkezinde gece vinç operasyonu" />
              <span className="tag">Kongre Merkezi — Gece</span>
            </div>
            <div className="bento-item">
              <img src="/gallery/cami-vinc-kabin.jpg" alt="Cami kubbesi içinde vinç kabini" />
              <span className="tag">Kubbe İçi Bakım</span>
            </div>
            <div className="bento-item wide">
              <img src="/gallery/anitkabir-vinc.jpg" alt="Anıtkabir önünde vinç operasyonu" />
              <span className="tag">Anıtkabir — Özel İzinli Operasyon</span>
            </div>
            <div className="bento-item">
              <img src="/gallery/tarihi-bina-cephe-platform.jpg" alt="Tarihi bina cephesinde vinç" />
              <span className="tag">Tarihi Bina Cephe Onarımı</span>
            </div>
          </div>
        </div>
      </section>

      <section id="teknik">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Ürün Kataloğu</span>
            <h2>10 vinç modeli, tek tek incele</h2>
            <p>Mobilden paletliye, kuleden teleskopiğe kadar tüm vinç çeşitlerimizi karşılaştırarak doğru modeli seçin.</p>
          </div>
          <div className="cat-vinc"><ProductCatalog products={vincProducts} /></div>
          <p className="table-note">* Fiyat, ekipman tipi, süre ve saha koşullarına göre değişir; size özel teklif için “Teklif Al” butonunu kullanın.</p>
        </div>
      </section>


      <section className="section-alt" id="sss">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Sıkça Sorulan Sorular</span>
            <h2>Vinç kiralamadan önce</h2>
          </div>
          <div className="faq-list">
            <details className="faq-item" open>
              <summary>Vinç fiyatına operatör dahil mi?<span className="plus"></span></summary>
              <div className="body">Evet, tüm vinç kiralamalarımız G sınıfı sertifikalı operatör dahil olarak verilir.</div>
            </details>
            <details className="faq-item">
              <summary>Saha keşfi ücretli mi?<span className="plus"></span></summary>
              <div className="body">Hayır, kaldırma planı için yapılan ilk saha keşfi ücretsizdir; teklif onayından sonra planlama netleştirilir.</div>
            </details>
            <details className="faq-item">
              <summary>Kule vinç kurulum süresi ne kadar?<span className="plus"></span></summary>
              <div className="body">Yüksekliğe ve zemin koşullarına göre kurulum 3–5 gün arasında değişir; söküm benzer bir süre alır.</div>
            </details>
          </div>
        </div>
      </section>

      <section id="iletisim" style={{ paddingTop: "0" }}>
        <div className="cta-band">
          <div className="cta-band-bg">
            <img src="/gallery/gokdelen-yuksek-platform.jpg" alt="Yüksek erişim operasyonu" />
          </div>
          <div className="cta-band-inner">
            <div className="cta-row">
              <h2>Vinç ihtiyacını bugün planlayalım.</h2>
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
            <h2>Forklift, manlift ve platform</h2>
          </div>
          <div className="cat-grid" style={{ gridTemplateColumns: "repeat(3,1fr)" }}>
            <a className="cat-card" href="/forklift">
              <img src="/gallery/express-platform-kamyon.jpg" alt="Forklift" />
              <div className="cat-label"><span className="k">02</span><h3>Forklift</h3></div>
            </a>
            <a className="cat-card" href="/manlift">
              <img src="/gallery/cekim-platform-orman.jpg" alt="Manlift" />
              <div className="cat-label"><span className="k">03</span><h3>Manlift</h3></div>
            </a>
            <a className="cat-card" href="/platform">
              <img src="/gallery/zebra-desenli-platform.jpg" alt="Platform" />
              <div className="cat-label"><span className="k">04</span><h3>Platform</h3></div>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
