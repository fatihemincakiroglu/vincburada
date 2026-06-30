import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "İletişim — Vinç Burada",
  description: "Vinç Burada ile iletişime geçin: telefon, e-posta, adres ve teklif formu.",
};

export default function IletisimPage() {
  return (
    <>
      <section className="hero hero-light" style={{ minHeight: "52vh" }}>
        <div className="hero-bg">
          <img src="/gallery/istanbul-skyline-vinc.jpg" alt="İletişim" />
        </div>
        <div className="hero-content wrap">
          <span className="eyebrow" style={{ color: "var(--gold-soft)" }}>
            İletişim
          </span>
          <h1>
            Sahandaki yükü
            <br />
            <span className="accent">birlikte</span> planlayalım.
          </h1>
          <p className="lead">Telefon, e-posta veya aşağıdaki formla bize ulaşın; ortalama 30 dakika içinde dönüş sağlıyoruz.</p>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="fleet-grid">
            <div className="fleet-card">
              <span className="num">TELEFON</span>
              <h3 style={{ marginTop: "18px" }}>0532 303 90 89</h3>
              <p>Operasyon merkezimiz 7/24 açık. Acil talepler için doğrudan arayabilirsiniz.</p>
              <div className="specs">
                <a className="btn btn-glass" style={{ padding: "10px 18px", fontSize: "13px" }} href="tel:+905323039089">
                  Hemen Ara →
                </a>
              </div>
            </div>
            <div className="fleet-card">
              <span className="num">E-POSTA</span>
              <h3 style={{ marginTop: "18px", fontSize: "16px" }}>info@vincburada.com.tr</h3>
              <p>Teklif talepleri ve kurumsal yazışmalar için. Ortalama yanıt süresi 2 saattir.</p>
              <div className="specs">
                <a className="btn btn-glass" style={{ padding: "10px 18px", fontSize: "13px" }} href="mailto:info@vincburada.com.tr">
                  Mail Gönder →
                </a>
              </div>
            </div>
            <div className="fleet-card">
              <span className="num">ADRES</span>
              <h3 style={{ marginTop: "18px", fontSize: "15.5px", lineHeight: "1.4" }}>
                İkitelli OSB, Giyim Sanatkarları İş ve Ticaret Merkezi
              </h3>
              <p>4. Ada A Blok Kat:1 D:112 <br />34490 Başakşehir/İstanbul</p>
            </div>
            <div className="fleet-card">
              <span className="num">ÇALIŞMA SAATLERİ</span>
              <h3 style={{ marginTop: "18px" }}>7/24 Operasyon</h3>
              <p>Ofis: Hafta içi 08:30–18:30 <br />Saha operasyonları: Haftanın her günü, gece dahil.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-alt">
        <div className="wrap">
          <div className="coverage">
            <div>
              <span className="eyebrow">Teklif Formu</span>
              <h2 style={{ fontSize: "clamp(26px,3.4vw,36px)", margin: "14px 0 26px" }}>Bize sahanı anlat</h2>
              <p style={{ color: "var(--steel)", fontSize: "15px", lineHeight: "1.6", marginBottom: "30px", maxWidth: "440px" }}>
                Formu doldurun, ekibimiz ihtiyacınıza en uygun ekipman ve operatörle 30 dakika içinde size dönsün.
              </p>

              <form
                style={{ display: "flex", flexDirection: "column", gap: "16px" }}
                onSubmit={(e) => e.preventDefault()}
              >
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                  <input
                    type="text"
                    placeholder="Ad Soyad"
                    style={{
                      padding: "14px 16px",
                      borderRadius: "12px",
                      border: "1px solid var(--line-strong)",
                      background: "var(--bg-3)",
                      fontFamily: "var(--body)",
                      fontSize: "14px",
                    }}
                  />
                  <input
                    type="tel"
                    placeholder="Telefon"
                    style={{
                      padding: "14px 16px",
                      borderRadius: "12px",
                      border: "1px solid var(--line-strong)",
                      background: "var(--bg-3)",
                      fontFamily: "var(--body)",
                      fontSize: "14px",
                    }}
                  />
                </div>
                <input
                  type="email"
                  placeholder="E-posta"
                  style={{
                    padding: "14px 16px",
                    borderRadius: "12px",
                    border: "1px solid var(--line-strong)",
                    background: "var(--bg-3)",
                    fontFamily: "var(--body)",
                    fontSize: "14px",
                  }}
                />
                <select
                  style={{
                    padding: "14px 16px",
                    borderRadius: "12px",
                    border: "1px solid var(--line-strong)",
                    background: "var(--bg-3)",
                    fontFamily: "var(--body)",
                    fontSize: "14px",
                    color: "var(--ink-soft)",
                  }}
                  defaultValue=""
                >
                  <option value="" disabled>
                    Hizmet seçin
                  </option>
                  <option>Vinç</option>
                  <option>Forklift</option>
                  <option>Manlift</option>
                  <option>Platform</option>
                </select>
                <textarea
                  placeholder="Saha bilgisi, yük tipi, tarih..."
                  rows={4}
                  style={{
                    padding: "14px 16px",
                    borderRadius: "12px",
                    border: "1px solid var(--line-strong)",
                    background: "var(--bg-3)",
                    fontFamily: "var(--body)",
                    fontSize: "14px",
                    resize: "vertical",
                  }}
                />
                <button type="submit" className="btn btn-gold" style={{ alignSelf: "flex-start" }}>
                  Talebi Gönder →
                </button>
              </form>
            </div>

            <div className="coverage-map" style={{ aspectRatio: "4/5" }}>
              <iframe
                title="Vinç Burada Konum"
                src="https://www.google.com/maps?q=İkitelli+OSB+Giyim+Sanatkarlari+is+ve+Ticaret+Merkezi+Basaksehir+Istanbul&output=embed"
                style={{ width: "100%", height: "100%", border: "0" }}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Hizmetlerimiz</span>
            <h2>Hangi ekipmana ihtiyacın var?</h2>
          </div>
          <div className="cat-grid">
            <a className="cat-card" href="/vinc">
              <img src="/gallery/anitkabir-vinc.jpg" alt="Vinç" />
              <div className="cat-label">
                <span className="k">01</span>
                <h3>Vinç</h3>
              </div>
            </a>
            <a className="cat-card" href="/forklift">
              <img src="/gallery/express-platform-kamyon.jpg" alt="Forklift" />
              <div className="cat-label">
                <span className="k">02</span>
                <h3>Forklift</h3>
              </div>
            </a>
            <a className="cat-card" href="/manlift">
              <img src="/gallery/cekim-platform-orman.jpg" alt="Manlift" />
              <div className="cat-label">
                <span className="k">03</span>
                <h3>Manlift</h3>
              </div>
            </a>
            <a className="cat-card" href="/platform">
              <img src="/gallery/zebra-desenli-platform.jpg" alt="Platform" />
              <div className="cat-label">
                <span className="k">04</span>
                <h3>Platform</h3>
              </div>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
