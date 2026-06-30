import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Manlift Kiralama — Vinç Burada",
  description: "Eklemli, teleskopik, makaslı ve örümcek manlift kiralama. İç/dış mekan bakım ve montaj erişimi.",
};

export default function ManliftPage() {
  return (
    <>
      <section className="hero hero-light" style={{ minHeight: "70vh" }}>
        <div className="hero-bg">
          <img src="/gallery/cekim-platform-orman.jpg" alt="Manlift operasyonu" />
        </div>
        <div className="hero-content wrap">
          <span className="eyebrow" style={{ color: "var(--gold-soft)" }}>03 · MANLİFT</span>
          <h1>
            Zor erişimi,
            <br />
            <span className="accent">güvenle</span> aş.
          </h1>
          <p className="lead">
            Eklemli, teleskopik, makaslı ve örümcek manliftlerle iç/dış mekan bakım, montaj ve prodüksiyon
            erişimi — dar alanlarda da yüksekte de.
          </p>
          <div className="hero-ctas">
            <a className="btn btn-gold" href="/#iletisim">Manlift Teklifi Al →</a>
            <a className="btn btn-glass" href="tel:+905323039089">0532 303 90 89</a>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Manlift Sınıfları</span>
            <h2>Erişim şekline göre doğru manlift</h2>
            <p>Engebeli zemin, dar koridor veya çok yüksek tavan — her senaryo için ayrı bir manlift tipi var.</p>
          </div>
          <div className="fleet-grid">
            <div className="fleet-card">
              <span className="num">01 / EKLEMLİ</span>
              <svg viewBox="0 0 200 100" fill="none">
                <rect x="20" y="75" width="50" height="14" rx="4" fill="#1C1A17" />
                <line x1="45" y1="75" x2="80" y2="40" stroke="#A9762E" strokeWidth="7" strokeLinecap="round" />
                <line x1="80" y1="40" x2="140" y2="55" stroke="#7A7367" strokeWidth="6" strokeLinecap="round" />
                <rect x="138" y="48" width="20" height="14" rx="2" fill="#E8E2D5" />
              </svg>
              <h3>Eklemli (Articulating)</h3>
              <p>Engeller üzerinden geçerek erişim sağlayan, yatay ve dikey hareket esnekliği yüksek tip.</p>
              <div className="specs">
                <span><b>Çalışma Yük.:</b> 12–28 m</span>
                <span><b>Yatay Erişim:</b> 8–18 m</span>
              </div>
            </div>
            <div className="fleet-card">
              <span className="num">02 / TELESKOPİK</span>
              <svg viewBox="0 0 200 100" fill="none">
                <rect x="20" y="75" width="50" height="14" rx="4" fill="#1C1A17" />
                <line x1="45" y1="75" x2="160" y2="25" stroke="#A9762E" strokeWidth="7" strokeLinecap="round" />
                <rect x="156" y="18" width="18" height="13" rx="2" fill="#E8E2D5" />
              </svg>
              <h3>Teleskopik Manlift</h3>
              <p>Düz bom ile maksimum yükseklik ve yatay erişim gerektiren geniş alan operasyonları için.</p>
              <div className="specs">
                <span><b>Çalışma Yük.:</b> 16–43 m</span>
                <span><b>Yatay Erişim:</b> 10–24 m</span>
              </div>
            </div>
            <div className="fleet-card">
              <span className="num">03 / MAKASLI</span>
              <svg viewBox="0 0 200 100" fill="none">
                <rect x="50" y="20" width="100" height="14" rx="2" fill="#E8E2D5" />
                <line x1="60" y1="34" x2="100" y2="80" stroke="#7A7367" strokeWidth="5" />
                <line x1="100" y1="34" x2="60" y2="80" stroke="#7A7367" strokeWidth="5" />
                <line x1="100" y1="34" x2="140" y2="80" stroke="#A9762E" strokeWidth="5" />
                <line x1="140" y1="34" x2="100" y2="80" stroke="#A9762E" strokeWidth="5" />
                <rect x="45" y="80" width="110" height="10" rx="3" fill="#1C1A17" />
              </svg>
              <h3>Makaslı (Scissor)</h3>
              <p>Düz zeminli kapalı alanlarda geniş platform yüzeyiyle dikey çalışma için en stabil çözüm.</p>
              <div className="specs">
                <span><b>Çalışma Yük.:</b> 8–18 m</span>
                <span><b>Platform Kapasite:</b> 230–450 kg</span>
              </div>
            </div>
            <div className="fleet-card">
              <span className="num">04 / ÖRÜMCEK</span>
              <svg viewBox="0 0 200 100" fill="none">
                <rect x="80" y="60" width="40" height="20" rx="3" fill="#E8E2D5" />
                <line x1="70" y1="80" x2="40" y2="95" stroke="#1C1A17" strokeWidth="5" strokeLinecap="round" />
                <line x1="130" y1="80" x2="160" y2="95" stroke="#1C1A17" strokeWidth="5" strokeLinecap="round" />
                <line x1="100" y1="60" x2="120" y2="20" stroke="#A9762E" strokeWidth="6" strokeLinecap="round" />
                <line x1="120" y1="20" x2="160" y2="10" stroke="#7A7367" strokeWidth="4" strokeLinecap="round" />
              </svg>
              <h3>Örümcek (Spider)</h3>
              <p>Paletli ve daraltılabilir ayaklarıyla merdivenden geçebilen, iç mekân yüksek tavan işleri için.</p>
              <div className="specs">
                <span><b>Çalışma Yük.:</b> 14–30 m</span>
                <span><b>Genişlik:</b> 78–110 cm</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-alt">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Sahadan</span>
            <h2>Manlift operasyonlarından kareler</h2>
          </div>
          <div className="bento">
            <div className="bento-item wide tall">
              <img src="/gallery/cekim-platform-orman.jpg" alt="Orman içinde film çekimi manlift" />
              <span className="tag">Prodüksiyon Desteği — Orman</span>
            </div>
            <div className="bento-item tall">
              <img src="/gallery/gokdelen-yuksek-platform.jpg" alt="Gökdelen cephesinde manlift" />
              <span className="tag">Gökdelen Cephesi</span>
            </div>
            <div className="bento-item">
              <img src="/gallery/istanbul-skyline-vinc.jpg" alt="Levent skyline saha görünümü" />
              <span className="tag">Levent — Saha Görünümü</span>
            </div>
            <div className="bento-item">
              <img src="/gallery/cephe-montaj-yuksek.jpg" alt="Yüksek kat cephe montajı" />
              <span className="tag">Yüksek Kat Montaj</span>
            </div>
          </div>
        </div>
      </section>

      <section id="teknik">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Teknik Veriler</span>
            <h2>Manlift filo karşılaştırma tablosu</h2>
          </div>
          <div className="table-wrap">
            <table className="specs-table">
              <thead>
                <tr><th>Model</th><th>Sınıf</th><th>Çalışma Yüksekliği</th><th>Yatay Erişim</th><th>Platform Kapasite</th><th>Günlük Bedel*</th></tr>
              </thead>
              <tbody>
                <tr><td className="model">VB-A16</td><td><span className="tag-cell">Eklemli</span></td><td>16 m</td><td>8 m</td><td>230 kg</td><td>₺3.800 – 4.700</td></tr>
                <tr><td className="model">VB-T28</td><td><span className="tag-cell">Teleskopik</span></td><td>28 m</td><td>22 m</td><td>250 kg</td><td>₺6.200 – 7.800</td></tr>
                <tr><td className="model">VB-S12</td><td><span className="tag-cell">Makaslı</span></td><td>12 m</td><td>—</td><td>450 kg</td><td>₺2.600 – 3.300</td></tr>
                <tr><td className="model">VB-SP18</td><td><span className="tag-cell">Örümcek</span></td><td>18 m</td><td>9 m</td><td>200 kg</td><td>₺4.400 – 5.500</td></tr>
              </tbody>
            </table>
          </div>
          <p className="table-note">* Fiyatlar operatör dahil gösterge niteliğindedir; kesin teklif saha keşfi sonrası verilir.</p>
        </div>
      </section>

      <section className="section-alt" id="sss">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Sıkça Sorulan Sorular</span>
            <h2>Manlift kiralamadan önce</h2>
          </div>
          <div className="faq-list">
            <details className="faq-item" open>
              <summary>Manlift ile platform arasındaki fark nedir?<span className="plus"></span></summary>
              <div className="body">Manlift kendinden tahrikli, sahada bağımsız hareket edebilen bir erişim ekipmanıdır. Platform ise genellikle bir kamyon üzerine monteli, taşınabilir bir erişim çözümüdür.</div>
            </details>
            <details className="faq-item">
              <summary>İç mekanda kullanılabilir mi?<span className="plus"></span></summary>
              <div className="body">Evet, elektrikli makaslı ve örümcek modellerimiz iç mekan kullanımına uygundur; gaz emisyonu yapmaz.</div>
            </details>
            <details className="faq-item">
              <summary>Operatör eğitimi gerekiyor mu?<span className="plus"></span></summary>
              <div className="body">Operatörlü kiralamada ek eğitime gerek yoktur. Kendi personelinizle çalışmak isterseniz yüksekte çalışma sertifikası istenir.</div>
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
              <h2>Manlift ihtiyacını bugün planlayalım.</h2>
              <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
                <a className="btn btn-gold" href="tel:+905323039089">0532 303 90 89</a>
                <a className="btn btn-glass" href="mailto:teklif@vincburada.com">teklif@vincburada.com</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Diğer Hizmetlerimiz</span>
            <h2>Vinç, forklift ve platform</h2>
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
