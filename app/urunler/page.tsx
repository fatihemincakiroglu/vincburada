import type { Metadata } from "next";
import AllProductsCatalog from "../components/AllProductsCatalog";
import { productGroups } from "../data/products/index";

export const metadata: Metadata = {
  title: "Tüm Ürünler — Vinç Burada",
  description: "Vinç, forklift, manlift ve platform filomuzdaki tüm modeller tek sayfada; en fazla 3 ürünü seçip özelliklerini anında karşılaştırın.",
};

export default function UrunlerPage() {
  const totalCount = productGroups.reduce((sum, g) => sum + g.products.length, 0);

  return (
    <>
      <section className="hero hero-light" style={{ minHeight: "48vh" }}>
        <div className="hero-bg">
          <img src="/gallery/istanbul-skyline-vinc.jpg" alt="Filo genel görünüm" />
        </div>
        <div className="hero-content wrap">
          <span className="eyebrow" style={{ color: "var(--gold-soft)" }}>ÜRÜN KATALOĞU</span>
          <h1>
            Filomuzdaki
            <br />
            <span className="accent">{totalCount} model</span>, tek sayfada.
          </h1>
          <p className="lead">
            Vinç, forklift, manlift ve platform kategorilerindeki tüm modelleri inceleyin; en fazla 3 ürünü
            seçip özelliklerini aşağıdaki tabloda anında karşılaştırın.
          </p>
          <div className="hero-ctas">
            <a className="btn btn-gold" href="#karsilastir">
              Karşılaştırmaya Başla ↓
            </a>
            <a className="btn btn-glass" href="/iletisim">
              Teklif Al
            </a>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <AllProductsCatalog groups={productGroups} />
        </div>
      </section>

      <section style={{ paddingTop: "0" }}>
        <div className="cta-band">
          <div className="cta-band-bg">
            <img src="/gallery/gokdelen-yuksek-platform.jpg" alt="Yüksek erişim operasyonu" />
          </div>
          <div className="cta-band-inner">
            <div className="cta-row">
              <h2>Aradığın modeli bulamadın mı?</h2>
              <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
                <a className="btn btn-gold" href="tel:+905323039089">0532 303 90 89</a>
                <a className="btn btn-glass" href="mailto:info@vincburada.com.tr">info@vincburada.com.tr</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
