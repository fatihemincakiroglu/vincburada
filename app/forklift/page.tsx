import type { Metadata } from "next";
import ProductCatalog from "../components/ProductCatalog";
import { forkliftProducts } from "../data/products/forklift";

export const metadata: Metadata = {
  title: "Forklift Kiralama — Vinç Burada",
  description: "Dizel, LPG, elektrikli ve reach truck forklift kiralama. Depo, liman ve şantiye için operatörlü çözümler.",
};

export default function ForkliftPage() {
  return (
    <>
      <section className="hero hero-light" style={{ minHeight: "62vh" }}>
        <div className="hero-bg">
          <img src="/gallery/cephe-montaj-yuksek.jpg" alt="Saha lojistiği" />
        </div>
        <div className="hero-content wrap">
          <span className="eyebrow" style={{ color: "var(--gold-soft)" }}>02 · FORKLİFT</span>
          <h1>
            Depodan sahaya,
            <br />
            yükü <span className="accent">akıcı</span> taşı.
          </h1>
          <p className="lead">
            3 ila 7 ton kapasite aralığında dizel forkliftlerle depo, liman ve şantiye lojistiği.
          </p>
          <div className="hero-ctas">
            <a className="btn btn-gold" href="/iletisim">Forklift Teklifi Al →</a>
            <a className="btn btn-glass" href="tel:+905323039089">0532 303 90 89</a>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Forklift Sınıfları</span>
            <h2>Yüke göre üç dizel forklift sınıfı</h2>
            <p>Depo, açık şantiye veya liman sahası — kapasiteye göre üç tonaj sınıfından doğrusunu öneriyoruz.</p>
          </div>
          <div className="fleet-grid" style={{ gridTemplateColumns: "repeat(3,1fr)" }}>
            <div className="fleet-card">
              <span className="num">01 / HAFİF</span>
              <svg viewBox="0 0 200 100" fill="none">
                <rect x="30" y="50" width="70" height="32" rx="4" fill="#E8E2D5" />
                <rect x="95" y="30" width="8" height="52" fill="#10141A" />
                <rect x="103" y="30" width="6" height="52" fill="#F2B400" />
                <rect x="100" y="58" width="22" height="8" fill="#F2B400" />
                <circle cx="48" cy="86" r="10" fill="#10141A" />
                <circle cx="88" cy="86" r="10" fill="#10141A" />
              </svg>
              <h3>FD30Z</h3>
              <p>Depo ve şantiye lojistiğinde günlük kullanım için dengeli kapasiteli dizel forklift.</p>
              <div className="specs">
                <span><b>Kapasite:</b> 3 ton</span>
                <span><b>Kaldırma:</b> 3–6 m</span>
              </div>
            </div>
            <div className="fleet-card">
              <span className="num">02 / ORTA</span>
              <svg viewBox="0 0 200 100" fill="none">
                <rect x="28" y="48" width="74" height="34" rx="4" fill="#E8E2D5" />
                <rect x="98" y="28" width="8" height="54" fill="#10141A" />
                <rect x="106" y="28" width="6" height="54" fill="#F2B400" />
                <rect x="103" y="56" width="22" height="8" fill="#F2B400" />
                <circle cx="48" cy="86" r="10" fill="#10141A" />
                <circle cx="90" cy="86" r="10" fill="#10141A" />
              </svg>
              <h3>FD50 Mini</h3>
              <p>Kompakt şasisiyle dar sahalarda dahi orta-ağır segment yük operasyonları için.</p>
              <div className="specs">
                <span><b>Kapasite:</b> 5 ton</span>
                <span><b>Kaldırma:</b> 3–6 m</span>
              </div>
            </div>
            <div className="fleet-card">
              <span className="num">03 / AĞIR TİP</span>
              <svg viewBox="0 0 200 100" fill="none">
                <rect x="24" y="46" width="80" height="36" rx="4" fill="#E8E2D5" />
                <rect x="102" y="24" width="9" height="58" fill="#10141A" />
                <rect x="111" y="24" width="7" height="58" fill="#F2B400" />
                <rect x="107" y="54" width="24" height="9" fill="#F2B400" />
                <circle cx="48" cy="86" r="11" fill="#10141A" />
                <circle cx="94" cy="86" r="11" fill="#10141A" />
              </svg>
              <h3>FD70</h3>
              <p>Liman ve ağır sanayi sahalarında konteyner ve büyük hacimli yük taşıma için filomuzun en güçlü forklifti.</p>
              <div className="specs">
                <span><b>Kapasite:</b> 7 ton</span>
                <span><b>Kaldırma:</b> 3–6 m</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-alt" id="teknik">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Ürün Kataloğu</span>
            <h2>3 forklift modeli, tek tek incele</h2>
            <p>Dizelden elektrikliye, standarttan reach truck&apos;a kadar tüm forklift çeşitlerimizi karşılaştırarak doğru modeli seçin.</p>
          </div>
          <div className="cat-forklift"><ProductCatalog products={forkliftProducts} /></div>
          <p className="table-note">* Fiyat, ekipman tipi, süre ve saha koşullarına göre değişir; size özel teklif için “Teklif Al” butonunu kullanın.</p>
        </div>
      </section>


      <section id="sss">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Sıkça Sorulan Sorular</span>
            <h2>Forklift kiralamadan önce</h2>
          </div>
          <div className="faq-list">
            <details className="faq-item" open>
              <summary>Hangi forklift tipini seçmeliyim?<span className="plus"></span></summary>
              <div className="body">Filomuzdaki üç dizel model tonaja göre ayrılır: hafif ve orta işler için FD30Z ve FD50 Mini, ağır konteyner/palet işleri için FD70. Saha keşfinde size uygun modeli birlikte belirliyoruz.</div>
            </details>
            <details className="faq-item">
              <summary>Aylık kiralama indirimi var mı?<span className="plus"></span></summary>
              <div className="body">Evet, 1 aydan uzun kiralamalarda günlük birim fiyat üzerinden kademeli indirim uyguluyoruz.</div>
            </details>
            <details className="faq-item">
              <summary>Operatör eğitimi gerekiyor mu?<span className="plus"></span></summary>
              <div className="body">Operatörlü kiralamada ek eğitime gerek yoktur. Kendi operatörünüzle çalışmak isterseniz G veya İŞ Makinesi Operatörü belgesi istenir.</div>
            </details>
          </div>
        </div>
      </section>

      <section id="iletisim" style={{ paddingTop: "0" }}>
        <div className="cta-band">
          <div className="cta-band-bg">
            <img src="/gallery/cam-cephe-platform.jpg" alt="Saha operasyonu" />
          </div>
          <div className="cta-band-inner">
            <div className="cta-row">
              <h2>Forklift ihtiyacını bugün planlayalım.</h2>
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
            <h2>Vinç, manlift ve platform</h2>
          </div>
          <div className="cat-grid" style={{ gridTemplateColumns: "repeat(3,1fr)" }}>
            <a className="cat-card" href="/vinc">
              <img src="/gallery/anitkabir-vinc.jpg" alt="Vinç" />
              <div className="cat-label"><span className="k">01</span><h3>Vinç</h3></div>
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
