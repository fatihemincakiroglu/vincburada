import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sıkça Sorulan Sorular — Vinç Burada",
  description: "Vinç, forklift, manlift ve platform kiralama hakkında sıkça sorulan sorular ve cevapları.",
};

export default function SssPage() {
  return (
    <>
      <section className="hero hero-light" style={{ minHeight: "48vh" }}>
        <div className="hero-bg">
          <img src="/gallery/tarihi-bina-cephe-platform.jpg" alt="Sıkça Sorulan Sorular" />
        </div>
        <div className="hero-content wrap">
          <span className="eyebrow" style={{ color: "var(--gold-soft)" }}>
            SSS
          </span>
          <h1>
            Kiralamadan önce
            <br />
            bilmen <span className="accent">gerekenler.</span>
          </h1>
          <p className="lead">Genel kiralama koşullarından ekipmana özel detaylara kadar en sık sorulan sorular.</p>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Genel</span>
            <h2>Kiralama, sigorta ve ödeme</h2>
          </div>
          <div className="faq-list">
            <details className="faq-item" open>
              <summary>
                Minimum kiralama süresi var mı?<span className="plus"></span>
              </summary>
              <div className="body">
                Standart kiralamalarımız günlük bazda başlar; ancak tek seferlik operasyonlar için saatlik ücretlendirme de mümkündür. Uzun süreli şantiye projelerinde aylık sözleşme avantajları sunuyoruz.
              </div>
            </details>
            <details className="faq-item">
              <summary>
                Fiyata operatör dahil mi?<span className="plus"></span>
              </summary>
              <div className="body">
                Evet, tüm kiralamalarımız sertifikalı operatör dahil olarak verilir. Sadece ekipman kiralamak isteyen kurumsal müşteriler için &quot;operatörsüz&quot; seçenek de mevcuttur, ancak bu durumda sigorta şartları değişir.
              </div>
            </details>
            <details className="faq-item">
              <summary>
                Sigorta kapsamı neyi içeriyor?<span className="plus"></span>
              </summary>
              <div className="body">
                Her operasyon üçüncü şahıs mali sorumluluk sigortası ve taşınan yük sigortası ile güvence altındadır. Saha keşfi sırasında riskli operasyonlar için ek kapsam teklifi sunulur.
              </div>
            </details>
            <details className="faq-item">
              <summary>
                Hangi illerde hizmet veriyorsunuz?<span className="plus"></span>
              </summary>
              <div className="body">
                14 bölge deposu üzerinden 81 ilin tamamına hizmet veriyoruz. Büyükşehirlerde aynı gün, diğer illerde 24–48 saat içinde sevkiyat garantisi veriyoruz.
              </div>
            </details>
            <details className="faq-item">
              <summary>
                Acil/gece operasyonları mümkün mü?<span className="plus"></span>
              </summary>
              <div className="body">
                Operasyon merkezimiz 7/24 aktiftir. Acil talepler için ortalama müdahale süremiz büyükşehirlerde 2 saattir; gece ve resmi tatil operasyonları ek ücretle planlanır.
              </div>
            </details>
            <details className="faq-item">
              <summary>
                Ödeme ve faturalandırma nasıl işliyor?<span className="plus"></span>
              </summary>
              <div className="body">
                Kurumsal müşterilerimize 30 güne kadar vadeli fatura, bireysel/küçük ölçekli işlerde ise iş bitiminde anlık fatura kesilmektedir. Banka havalesi ve kurumsal kredi kartı kabul edilir.
              </div>
            </details>
          </div>
        </div>
      </section>

      <section className="section-alt">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Vinç</span>
            <h2>Vinç kiralamaya özel sorular</h2>
          </div>
          <div className="faq-list">
            <details className="faq-item">
              <summary>
                Saha keşfi ücretli mi?<span className="plus"></span>
              </summary>
              <div className="body">Hayır, kaldırma planı için yapılan ilk saha keşfi ücretsizdir; teklif onayından sonra planlama netleştirilir.</div>
            </details>
            <details className="faq-item">
              <summary>
                Kule vinç kurulum süresi ne kadar?<span className="plus"></span>
              </summary>
              <div className="body">Yüksekliğe ve zemin koşullarına göre kurulum 3–5 gün arasında değişir; söküm benzer bir süre alır.</div>
            </details>
            <details className="faq-item">
              <summary>
                Hangi vinç sınıfı bana uygun?<span className="plus"></span>
              </summary>
              <div className="body">Yük ağırlığı, çalışma yarıçapı ve zemin koşullarına göre mobil, kule, paletli veya teleskopik vinç önerimizi saha keşfi sonrası netleştiriyoruz.</div>
            </details>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Forklift</span>
            <h2>Forklift kiralamaya özel sorular</h2>
          </div>
          <div className="faq-list">
            <details className="faq-item">
              <summary>
                Hangi forklift tipini seçmeliyim?<span className="plus"></span>
              </summary>
              <div className="body">Kapalı depo ve gıda/ilaç sektöründe elektrikli, açık şantiyede dizel, dar koridorlu raf sistemlerinde reach truck önerilir.</div>
            </details>
            <details className="faq-item">
              <summary>
                Aylık kiralama indirimi var mı?<span className="plus"></span>
              </summary>
              <div className="body">Evet, 1 aydan uzun kiralamalarda günlük birim fiyat üzerinden kademeli indirim uyguluyoruz.</div>
            </details>
            <details className="faq-item">
              <summary>
                Operatör eğitimi gerekiyor mu?<span className="plus"></span>
              </summary>
              <div className="body">Operatörlü kiralamada ek eğitime gerek yoktur. Kendi operatörünüzle çalışmak isterseniz G veya İş Makinesi Operatörü belgesi istenir.</div>
            </details>
          </div>
        </div>
      </section>

      <section className="section-alt">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Manlift</span>
            <h2>Manlift kiralamaya özel sorular</h2>
          </div>
          <div className="faq-list">
            <details className="faq-item">
              <summary>
                Manlift ile platform arasındaki fark nedir?<span className="plus"></span>
              </summary>
              <div className="body">Manlift kendinden tahrikli, sahada bağımsız hareket edebilen bir erişim ekipmanıdır. Platform ise genellikle bir kamyon üzerine monteli, taşınabilir bir erişim çözümüdür.</div>
            </details>
            <details className="faq-item">
              <summary>
                İç mekanda kullanılabilir mi?<span className="plus"></span>
              </summary>
              <div className="body">Evet, elektrikli makaslı ve örümcek modellerimiz iç mekan kullanımına uygundur; gaz emisyonu yapmaz.</div>
            </details>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Platform</span>
            <h2>Platform kiralamaya özel sorular</h2>
          </div>
          <div className="faq-list">
            <details className="faq-item">
              <summary>
                Tarihi yapılarda platform kullanılabilir mi?<span className="plus"></span>
              </summary>
              <div className="body">Evet, cami ve tarihi bina restorasyonlarında ilgili kurumlardan gerekli izinler alınarak hassas ve kontrollü operasyon planı ile çalışıyoruz.</div>
            </details>
            <details className="faq-item">
              <summary>
                Platform için saha erişimi ne kadar yer kaplar?<span className="plus"></span>
              </summary>
              <div className="body">Modelden ayağa açılma genişliği değişmekle birlikte ortalama 4–6 metre yan boşluk gereklidir; dar sokaklarda kompakt modelimizi öneririz.</div>
            </details>
            <details className="faq-item">
              <summary>
                Gece operasyonu mümkün mü?<span className="plus"></span>
              </summary>
              <div className="body">Evet, aydınlatma donanımlı araçlarımızla gece operasyonları düzenli olarak yapılmaktadır.</div>
            </details>
          </div>
        </div>
      </section>

      <section id="iletisim" style={{ paddingTop: "0" }}>
        <div className="cta-band">
          <div className="cta-band-bg">
            <img src="/gallery/gokdelen-yuksek-platform.jpg" alt="İletişim" />
          </div>
          <div className="cta-band-inner">
            <div className="cta-row">
              <h2>Aradığın cevabı bulamadın mı?</h2>
              <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
                <a className="btn btn-gold" href="tel:+905323039089">
                  0532 303 90 89
                </a>
                <a className="btn btn-glass" href="/iletisim">
                  İletişim Sayfasına Git →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
