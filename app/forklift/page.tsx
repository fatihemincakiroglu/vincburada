import type { Metadata } from "next";
import ProductCatalog, { Product } from "../components/ProductCatalog";

export const metadata: Metadata = {
  title: "Forklift Kiralama — Vinç Burada",
  description: "Dizel, LPG, elektrikli ve reach truck forklift kiralama. Depo, liman ve şantiye için operatörlü çözümler.",
};

const forkliftProducts: Product[] = [
  {
    id: "vb-f16d",
    name: "VB-F16D",
    tag: "Dizel Forklift",
    image: "/gallery/express-platform-kamyon.jpg",
    blurb: "Küçük ve orta ölçekli depo/şantiye işleri için ekonomik dizel forklift.",
    price: "₺2.100 – 2.700 / gün",
    specs: [
      { label: "Kapasite", value: "1.6 ton" },
      { label: "Maks. Kaldırma", value: "4 m" },
      { label: "Yakıt", value: "Dizel" },
    ],
  },
  {
    id: "vb-f25d",
    name: "VB-F25D",
    tag: "Dizel Forklift",
    image: "/gallery/cephe-montaj-yuksek.jpg",
    blurb: "Açık alan ve şantiye sahalarında yüksek tork gerektiren orta segment yük operasyonları için.",
    price: "₺2.400 – 3.100 / gün",
    specs: [
      { label: "Kapasite", value: "2.5 ton" },
      { label: "Maks. Kaldırma", value: "4.5 m" },
      { label: "Yakıt", value: "Dizel" },
    ],
  },
  {
    id: "vb-f50d",
    name: "VB-F50D",
    tag: "Dizel Forklift",
    image: "/gallery/cam-cephe-platform.jpg",
    blurb: "Ağır palet ve büyük hacimli yüklerde dayanıklılık öne çıkan güçlü dizel forklift.",
    price: "₺3.600 – 4.500 / gün",
    specs: [
      { label: "Kapasite", value: "5 ton" },
      { label: "Maks. Kaldırma", value: "5 m" },
      { label: "Yakıt", value: "Dizel" },
    ],
  },
  {
    id: "vb-f100d",
    name: "VB-F100D",
    tag: "Ağır Tip Dizel Forklift",
    image: "/gallery/cephe-giyim-platform.jpg",
    blurb: "Liman ve ağır sanayi sahalarında konteyner ve büyük ekipman taşıma için filomuzun en güçlü forklifti.",
    price: "₺6.800 – 8.500 / gün",
    specs: [
      { label: "Kapasite", value: "10 ton" },
      { label: "Maks. Kaldırma", value: "6 m" },
      { label: "Yakıt", value: "Dizel" },
    ],
  },
  {
    id: "vb-f25l",
    name: "VB-F25L",
    tag: "LPG Forklift",
    image: "/gallery/rezidans-cephe-vinc.jpg",
    blurb: "Hem kapalı hem açık alanda çalışabilen, dizele kıyasla daha düşük emisyonlu orta segment çözüm.",
    price: "₺2.700 – 3.400 / gün",
    specs: [
      { label: "Kapasite", value: "2.5 ton" },
      { label: "Maks. Kaldırma", value: "4.5 m" },
      { label: "Yakıt", value: "LPG" },
    ],
  },
  {
    id: "vb-f20e",
    name: "VB-F20E",
    tag: "Elektrikli Forklift",
    image: "/gallery/rezidans-cephe-vinc-2.jpg",
    blurb: "Kapalı depo ve gıda/ilaç gibi emisyon hassasiyeti olan sahalarda sessiz ve temiz operasyon.",
    price: "₺2.900 – 3.700 / gün",
    specs: [
      { label: "Kapasite", value: "2 ton" },
      { label: "Maks. Kaldırma", value: "4 m" },
      { label: "Yakıt", value: "Elektrik" },
    ],
  },
  {
    id: "vb-f30e",
    name: "VB-F30E",
    tag: "Elektrikli Forklift",
    image: "/gallery/platform-cam-bulutlar.jpg",
    blurb: "Daha yüksek kapasiteli elektrikli model; çok vardiyalı depo operasyonları için uzun batarya ömrü.",
    price: "₺3.300 – 4.100 / gün",
    specs: [
      { label: "Kapasite", value: "3 ton" },
      { label: "Maks. Kaldırma", value: "4.5 m" },
      { label: "Yakıt", value: "Elektrik" },
    ],
  },
  {
    id: "vb-rt16",
    name: "VB-RT16",
    tag: "Reach Truck",
    image: "/gallery/zebra-desenli-platform.jpg",
    blurb: "Dar koridorlu yüksek raf depolarında hassas yerleştirme ve maksimum kaldırma yüksekliği.",
    price: "₺4.200 – 5.300 / gün",
    specs: [
      { label: "Kapasite", value: "1.6 ton" },
      { label: "Maks. Kaldırma", value: "11 m" },
      { label: "Yakıt", value: "Elektrik" },
    ],
  },
];

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
            <span className="eyebrow">Ürün Kataloğu</span>
            <h2>8 forklift modeli, tek tek incele</h2>
            <p>Dizelden elektrikliye, standarttan reach truck&apos;a kadar tüm forklift çeşitlerimizi karşılaştırarak doğru modeli seçin.</p>
          </div>
          <ProductCatalog products={forkliftProducts} />
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
