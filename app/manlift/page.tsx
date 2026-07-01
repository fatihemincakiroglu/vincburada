import type { Metadata } from "next";
import ProductCatalog, { Product } from "../components/ProductCatalog";

export const metadata: Metadata = {
  title: "Manlift Kiralama — Vinç Burada",
  description: "Eklemli, teleskopik, makaslı ve örümcek manlift kiralama. İç/dış mekan bakım ve montaj erişimi.",
};

const manliftProducts: Product[] = [
  {
    id: "vb-a12",
    name: "VB-A12",
    tag: "Eklemli Manlift",
    image: "/gallery/cekim-platform-orman.jpg",
    blurb: "Kompakt eklemli kol ile dar alanlarda küçük engelleri aşarak erişim sağlar.",
    specs: [
      { label: "Çalışma Yüksekliği", value: "12 m" },
      { label: "Yatay Erişim", value: "6 m" },
      { label: "Platform Kapasite", value: "230 kg" },
    ],
  },
  {
    id: "vb-a16",
    name: "VB-A16",
    tag: "Eklemli Manlift",
    image: "/gallery/gokdelen-yuksek-platform.jpg",
    blurb: "Engeller üzerinden geçerek erişim sağlayan, yatay ve dikey hareket esnekliği yüksek orta segment model.",
    specs: [
      { label: "Çalışma Yüksekliği", value: "16 m" },
      { label: "Yatay Erişim", value: "8 m" },
      { label: "Platform Kapasite", value: "230 kg" },
    ],
  },
  {
    id: "vb-a20",
    name: "VB-A20",
    tag: "Eklemli Manlift",
    image: "/gallery/istanbul-skyline-vinc.jpg",
    blurb: "Daha geniş yatay erişim gerektiren cephe ve çatı işleri için yüksek menzilli eklemli manlift.",
    specs: [
      { label: "Çalışma Yüksekliği", value: "20 m" },
      { label: "Yatay Erişim", value: "11 m" },
      { label: "Platform Kapasite", value: "230 kg" },
    ],
  },
  {
    id: "vb-t28",
    name: "VB-T28",
    tag: "Teleskopik Manlift",
    image: "/gallery/cephe-montaj-yuksek.jpg",
    blurb: "Düz bom ile maksimum yükseklik ve yatay erişim gerektiren geniş alan operasyonları için.",
    specs: [
      { label: "Çalışma Yüksekliği", value: "28 m" },
      { label: "Yatay Erişim", value: "22 m" },
      { label: "Platform Kapasite", value: "250 kg" },
    ],
  },
  {
    id: "vb-t36",
    name: "VB-T36",
    tag: "Teleskopik Manlift",
    image: "/gallery/su-kulesi-gece-vinc.jpg",
    blurb: "Filomuzun en uzun menzilli manlifti; büyük çaplı endüstriyel tesis ve depo çatı işleri için.",
    specs: [
      { label: "Çalışma Yüksekliği", value: "36 m" },
      { label: "Yatay Erişim", value: "24 m" },
      { label: "Platform Kapasite", value: "250 kg" },
    ],
  },
  {
    id: "vb-s10",
    name: "VB-S10",
    tag: "Makaslı Manlift",
    image: "/gallery/cami-vinc-kabin.jpg",
    blurb: "Düz zeminli kapalı alanlarda geniş platform yüzeyiyle ekonomik dikey çalışma çözümü.",
    specs: [
      { label: "Çalışma Yüksekliği", value: "10 m" },
      { label: "Yatay Erişim", value: "—" },
      { label: "Platform Kapasite", value: "320 kg" },
    ],
  },
  {
    id: "vb-s12",
    name: "VB-S12",
    tag: "Makaslı Manlift",
    image: "/gallery/tarihi-bina-cephe-platform.jpg",
    blurb: "Daha yüksek platform kapasitesiyle birden fazla kişi ve malzemenin aynı anda taşınmasına imkân verir.",
    specs: [
      { label: "Çalışma Yüksekliği", value: "12 m" },
      { label: "Yatay Erişim", value: "—" },
      { label: "Platform Kapasite", value: "450 kg" },
    ],
  },
  {
    id: "vb-sp18",
    name: "VB-SP18",
    tag: "Örümcek Manlift",
    image: "/gallery/fatih-camii-minare.jpg",
    blurb: "Paletli ve daraltılabilir ayaklarıyla merdivenden geçebilen, iç mekân yüksek tavan işleri için.",
    specs: [
      { label: "Çalışma Yüksekliği", value: "18 m" },
      { label: "Yatay Erişim", value: "9 m" },
      { label: "Platform Kapasite", value: "200 kg" },
    ],
  },
  {
    id: "vb-s18rt",
    name: "VB-S18RT",
    tag: "Arazi Tipi Makaslı Manlift",
    image: "/gallery/cekim-platform-orman.jpg",
    blurb: "Düz olmayan ve açık şantiye zeminlerinde dört çeker şasisiyle güvenli dikey erişim sağlayan geniş platformlu manlift.",
    specs: [
      { label: "Çalışma Yüksekliği", value: "18 m" },
      { label: "Yatay Erişim", value: "—" },
      { label: "Platform Kapasite", value: "450 kg" },
    ],
  },
  {
    id: "vb-t44",
    name: "VB-T44",
    tag: "Teleskopik Manlift",
    image: "/gallery/istanbul-skyline-vinc.jpg",
    blurb: "Filomuzun en yüksek ve en uzun yatay erişimli manlifti; büyük endüstriyel tesis ve stadyum çatı işleri için.",
    specs: [
      { label: "Çalışma Yüksekliği", value: "44 m" },
      { label: "Yatay Erişim", value: "24 m" },
      { label: "Platform Kapasite", value: "250 kg" },
    ],
  },
];

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
            <a className="btn btn-gold" href="/iletisim">Manlift Teklifi Al →</a>
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
            <span className="eyebrow">Ürün Kataloğu</span>
            <h2>10 manlift modeli, tek tek incele</h2>
            <p>Eklemliden makaslıya, teleskopikten örümceğe kadar tüm manlift çeşitlerimizi karşılaştırarak doğru modeli seçin.</p>
          </div>
          <ProductCatalog products={manliftProducts} />
          <p className="table-note">* Fiyat, ekipman tipi, süre ve saha koşullarına göre değişir; size özel teklif için “Teklif Al” butonunu kullanın.</p>
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
