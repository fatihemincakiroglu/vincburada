import type { Metadata } from "next";

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
            1.5 ila 25 ton kapasite aralığında dizel, LPG, elektrikli ve reach truck forkliftlerle depo, liman ve şantiye lojistiği.
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
            <h2>Zemine ve yüke göre doğru forklift</h2>
            <p>Kapalı depo, açık şantiye veya liman sahası — her ortam için ayrı tahrik ve lastik tipi öneriyoruz.</p>
          </div>
          <div className="fleet-grid">
            <div className="fleet-card">
              <span className="num">01 / DİZEL</span>
              <svg viewBox="0 0 200 100" fill="none">
                <rect x="30" y="50" width="70" height="32" rx="4" fill="#E8E2D5" />
                <rect x="95" y="30" width="8" height="52" fill="#1C1A17" />
                <rect x="103" y="30" width="6" height="52" fill="#A9762E" />
                <rect x="100" y="58" width="22" height="8" fill="#A9762E" />
                <circle cx="48" cy="86" r="10" fill="#1C1A17" />
                <circle cx="88" cy="86" r="10" fill="#1C1A17" />
              </svg>
              <h3>Dizel Forklift</h3>
              <p>Açık alan ve şantiye sahalarında yüksek tork ve dayanıklılık gerektiren ağır yük operasyonları için.</p>
              <div className="specs">
                <span><b>Kapasite:</b> 2.5–25 ton</span>
                <span><b>Kaldırma:</b> 3–7 m</span>
              </div>
            </div>
            <div className="fleet-card">
              <span className="num">02 / LPG</span>
              <svg viewBox="0 0 200 100" fill="none">
                <rect x="30" y="50" width="70" height="32" rx="4" fill="#E8E2D5" />
                <circle cx="40" cy="48" r="9" fill="#A9762E" />
                <rect x="95" y="30" width="8" height="52" fill="#1C1A17" />
                <rect x="103" y="30" width="6" height="52" fill="#A9762E" />
                <circle cx="48" cy="86" r="10" fill="#1C1A17" />
                <circle cx="88" cy="86" r="10" fill="#1C1A17" />
              </svg>
              <h3>LPG Forklift</h3>
              <p>Hem kapalı hem açık alanda çalışabilen, dizele kıyasla daha düşük emisyonlu orta segment çözüm.</p>
              <div className="specs">
                <span><b>Kapasite:</b> 1.5–7 ton</span>
                <span><b>Kaldırma:</b> 3–6 m</span>
              </div>
            </div>
            <div className="fleet-card">
              <span className="num">03 / ELEKTRİKLİ</span>
              <svg viewBox="0 0 200 100" fill="none">
                <rect x="30" y="50" width="70" height="32" rx="4" fill="#E8E2D5" />
                <path d="M62 56l-6 12h8l-6 12" stroke="#A9762E" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                <rect x="95" y="30" width="8" height="52" fill="#1C1A17" />
                <rect x="103" y="30" width="6" height="52" fill="#A9762E" />
                <circle cx="48" cy="86" r="10" fill="#1C1A17" />
                <circle cx="88" cy="86" r="10" fill="#1C1A17" />
              </svg>
              <h3>Elektrikli Forklift</h3>
              <p>Kapalı depo ve gıda/ilaç gibi emisyon hassasiyeti olan sahalarda sessiz ve temiz operasyon.</p>
              <div className="specs">
                <span><b>Kapasite:</b> 1.5–5 ton</span>
                <span><b>Kaldırma:</b> 3–6 m</span>
              </div>
            </div>
            <div className="fleet-card">
              <span className="num">04 / REACH TRUCK</span>
              <svg viewBox="0 0 200 100" fill="none">
                <rect x="30" y="55" width="60" height="27" rx="4" fill="#E8E2D5" />
                <rect x="90" y="20" width="6" height="62" fill="#1C1A17" />
                <rect x="97" y="20" width="5" height="62" fill="#A9762E" />
                <rect x="92" y="22" width="18" height="8" fill="#A9762E" />
                <circle cx="46" cy="86" r="9" fill="#1C1A17" />
                <circle cx="78" cy="86" r="9" fill="#1C1A17" />
              </svg>
              <h3>Reach Truck</h3>
              <p>Dar koridorlu yüksek raf depolarında hassas yerleştirme ve maksimum kaldırma yüksekliği.</p>
              <div className="specs">
                <span><b>Kapasite:</b> 1.4–2.5 ton</span>
                <span><b>Kaldırma:</b> 8–13 m</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-alt" id="teknik">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Teknik Veriler</span>
            <h2>Forklift filo karşılaştırma tablosu</h2>
          </div>
          <div className="table-wrap">
            <table className="specs-table">
              <thead>
                <tr><th>Model</th><th>Sınıf</th><th>Maks. Kapasite</th><th>Maks. Kaldırma</th><th>Yakıt</th><th>Günlük Bedel*</th></tr>
              </thead>
              <tbody>
                <tr><td className="model">VB-F25D</td><td><span className="tag-cell">Dizel</span></td><td>2.5 ton</td><td>4.5 m</td><td>Dizel</td><td>₺2.400 – 3.100</td></tr>
                <tr><td className="model">VB-F50D</td><td><span className="tag-cell">Dizel</span></td><td>5 ton</td><td>5 m</td><td>Dizel</td><td>₺3.600 – 4.500</td></tr>
                <tr><td className="model">VB-F25L</td><td><span className="tag-cell">LPG</span></td><td>2.5 ton</td><td>4.5 m</td><td>LPG</td><td>₺2.700 – 3.400</td></tr>
                <tr><td className="model">VB-F20E</td><td><span className="tag-cell">Elektrikli</span></td><td>2 ton</td><td>4 m</td><td>Elektrik</td><td>₺2.900 – 3.700</td></tr>
                <tr><td className="model">VB-RT16</td><td><span className="tag-cell">Reach Truck</span></td><td>1.6 ton</td><td>11 m</td><td>Elektrik</td><td>₺4.200 – 5.300</td></tr>
              </tbody>
            </table>
          </div>
          <p className="table-note">* Fiyatlar operatör dahil gösterge niteliğindedir; kesin teklif saha keşfi sonrası verilir.</p>
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
              <div className="body">Kapalı depo ve gıda/ilaç sektöründe elektrikli, açık şantiyede dizel, dar koridorlu raf sistemlerinde reach truck önerilir. Saha keşfinde size uygun modeli birlikte belirliyoruz.</div>
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
