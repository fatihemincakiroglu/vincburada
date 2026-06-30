export default function Home() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section className="hero">
        <div className="hero-bg">
          <img src="/gallery/su-kulesi-gece-vinc.jpg" alt="Tarihi su kulesinde gece operasyonu" />
        </div>
        <div className="hero-content wrap">
          <span className="eyebrow" style={{ color: "var(--gold-soft)" }}>
            7/24 SAHA HİZMETİ · TÜRKİYE GENELİ
          </span>
          <h1>
            Her yüksekliğe,
            <br />
            her <span className="accent">sahaya.</span>
          </h1>
          <p className="lead">
            Vinç, forklift, manlift ve platform filomuzla camiden gökdelene, tarihi su
            kulesinden film setine kadar 15 yıldır her işi yukarı taşıyoruz.
          </p>
          <div className="hero-ctas">
            <a className="btn btn-gold" href="#iletisim">
              Hemen Teklif Al →
            </a>
            <a className="btn btn-glass" href="#sahalar">
              Sahalardan Kareler
            </a>
          </div>
          <div className="hero-stats">
            <div>
              <b>15+</b>
              <span>Yıl Tecrübe</span>
            </div>
            <div>
              <b>640</b>
              <span>Tamamlanan Proje</span>
            </div>
            <div>
              <b>81</b>
              <span>İl Kapsama</span>
            </div>
            <div>
              <b>24/7</b>
              <span>Acil Müdahale</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============ CATEGORY TILES ============ */}
      <section>
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Hizmetlerimiz</span>
            <h2>İhtiyacına göre dört ana kategori</h2>
            <p>Her kategori kendi filo detayları, teknik verileri ve kiralama koşullarıyla ayrı sayfasında.</p>
          </div>
          <div className="cat-grid">
            <a className="cat-card" href="/vinc">
              <img src="/gallery/anitkabir-vinc.jpg" alt="Vinç kiralama" />
              <div className="cat-label">
                <span className="k">01</span>
                <h3>Vinç</h3>
                <span className="arrow">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
                    <path d="M7 17L17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
            </a>
            <a className="cat-card" href="/forklift">
              <img src="/gallery/express-platform-kamyon.jpg" alt="Forklift kiralama" />
              <div className="cat-label">
                <span className="k">02</span>
                <h3>Forklift</h3>
                <span className="arrow">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
                    <path d="M7 17L17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
            </a>
            <a className="cat-card" href="/manlift">
              <img src="/gallery/cekim-platform-orman.jpg" alt="Manlift kiralama" />
              <div className="cat-label">
                <span className="k">03</span>
                <h3>Manlift</h3>
                <span className="arrow">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
                    <path d="M7 17L17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
            </a>
            <a className="cat-card" href="/platform">
              <img src="/gallery/zebra-desenli-platform.jpg" alt="Platform kiralama" />
              <div className="cat-label">
                <span className="k">04</span>
                <h3>Platform</h3>
                <span className="arrow">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
                    <path d="M7 17L17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* ============ BENTO GALLERY ============ */}
      <section id="sahalar" className="section-alt">
        <div className="wrap">
          <div className="section-flex" style={{ marginBottom: "44px" }}>
            <div className="section-head" style={{ marginBottom: 0 }}>
              <span className="eyebrow">Sahalardan</span>
              <h2>Yukarıdan baktığımız işler</h2>
              <p>Tarihi camilerden gökdelenlere, film setlerinden rezidans cephelerine — filomuzun gerçek saha kareleri.</p>
            </div>
          </div>

          <div className="bento">
            <div className="bento-item wide tall">
              <img src="/gallery/fatih-camii-platform.jpg" alt="Tarihi cami avlusunda kırmızı platform" />
              <span className="tag">Tarihi Cami Restorasyonu — Avlu</span>
            </div>
            <div className="bento-item tall">
              <img src="/gallery/fatih-camii-minare.jpg" alt="Minare bakımı havadan görünüm" />
              <span className="tag">Minare Bakımı — Havadan</span>
            </div>
            <div className="bento-item">
              <img src="/gallery/kongre-merkezi-gece.jpg" alt="İstanbul Kongre Merkezi gece operasyonu" />
              <span className="tag">Kongre Merkezi — Gece</span>
            </div>
            <div className="bento-item">
              <img src="/gallery/cami-vinc-kabin.jpg" alt="Cami kubbesi içinden vinç kabini" />
              <span className="tag">Kubbe İçi — Bakım</span>
            </div>

            <div className="bento-item">
              <img src="/gallery/gokdelen-yuksek-platform.jpg" alt="Gökdelen cephesinde yüksek erişim" />
              <span className="tag">Gökdelen Cephesi — 64m</span>
            </div>
            <div className="bento-item wide">
              <img src="/gallery/rezidans-cephe-vinc.jpg" alt="Eğrisel rezidans cephesi montajı" />
              <span className="tag">Rezidans Cephe Montajı</span>
            </div>
            <div className="bento-item">
              <img src="/gallery/istanbul-skyline-vinc.jpg" alt="Levent skyline üzerinden saha görünümü" />
              <span className="tag">Levent — Saha Görünümü</span>
            </div>

            <div className="bento-item tall">
              <img src="/gallery/zebra-desenli-platform.jpg" alt="Zebra desenli özel kaplama vinç" />
              <span className="tag">Özel Kaplama — Filo Aracı</span>
            </div>
            <div className="bento-item wide">
              <img src="/gallery/anitkabir-vinc.jpg" alt="Anıtkabir önünde özel izinli operasyon" />
              <span className="tag">Anıtkabir — Özel İzinli Operasyon</span>
            </div>
            <div className="bento-item">
              <img src="/gallery/cekim-platform-orman.jpg" alt="Orman içinde film çekimi platformu" />
              <span className="tag">Prodüksiyon Desteği</span>
            </div>

            <div className="bento-item">
              <img src="/gallery/cam-cephe-platform.jpg" alt="Cam cephe arasında platform" />
              <span className="tag">Cam Cephe Montajı</span>
            </div>
            <div className="bento-item wide">
              <img src="/gallery/tarihi-bina-cephe-platform.jpg" alt="Tarihi bina cephesinde onarım platformu" />
              <span className="tag">Tarihi Bina Cephe Onarımı</span>
            </div>
            <div className="bento-item">
              <img src="/gallery/platform-cam-bulutlar.jpg" alt="Maksimum yükseklikte bulutlara uzanan platform kolları" />
              <span className="tag">Maksimum Yükseklik</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============ WHY US ============ */}
      <section>
        <div className="wrap">
          <div className="why-grid">
            <div>
              <span className="eyebrow">Neden Vinç Burada</span>
              <h2 style={{ fontSize: "clamp(28px,3.6vw,40px)", margin: "14px 0 30px" }}>
                Şantiyenin asıl gecikme sebebi: ekipman değil
              </h2>
              <ul className="why-list">
                <li>
                  <span className="ic">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#A9762E" strokeWidth="2">
                      <path d="M12 2v6m0 8v6M2 12h6m8 0h6" strokeLinecap="round" />
                    </svg>
                  </span>
                  <div>
                    <h4>Sertifikalı Operatörler</h4>
                    <p>Tüm operatörlerimiz G sınıfı belgeli ve yıllık iş güvenliği eğitiminden geçmektedir.</p>
                  </div>
                </li>
                <li>
                  <span className="ic">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#A9762E" strokeWidth="2">
                      <path d="M3 12l9-9 9 9M5 10v10h14V10" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <div>
                    <h4>Saha Mühendisliği</h4>
                    <p>Kurulum öncesi zemin etüdü, yük hesaplama ve kaldırma planı saha mühendislerimizce hazırlanır.</p>
                  </div>
                </li>
                <li>
                  <span className="ic">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#A9762E" strokeWidth="2">
                      <circle cx="12" cy="12" r="9" />
                      <path d="M12 7v5l4 2" strokeLinecap="round" />
                    </svg>
                  </span>
                  <div>
                    <h4>2 Saatte Sevkiyat</h4>
                    <p>81 il genelindeki depo ağımız sayesinde acil taleplere ortalama 2 saat içinde araç çıkarıyoruz.</p>
                  </div>
                </li>
                <li>
                  <span className="ic">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#A9762E" strokeWidth="2">
                      <path d="M9 12l2 2 4-4M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7l8-4z" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <div>
                    <h4>Tam Sigorta Kapsamı</h4>
                    <p>Her operasyon, üçüncü şahıs ve yük sigortası dahil olmak üzere tam kapsamlı poliçeyle yürütülür.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="why-photo">
              <img src="/gallery/cephe-montaj-yuksek.jpg" alt="Yüksek kat cephe montajı operasyonu" />
              <div className="badge">VB · SAHA-04 · AKTİF OPERASYON</div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ PROCESS ============ */}
      <section className="section-alt" id="surec">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">İşleyiş</span>
            <h2>Talepten teslime 5 adım</h2>
            <p>Sürecin her aşaması saha ekibimiz ve operasyon merkezimiz tarafından eşzamanlı takip edilir.</p>
          </div>
          <div className="process-track">
            <div className="pstep">
              <div className="pnum">01</div>
              <h4>Talep &amp; Ön Bilgi</h4>
              <p>Yük tipi, ağırlık ve saha koordinatlarını iletin; 30 dakika içinde ön değerlendirme dönüşü alın.</p>
            </div>
            <div className="pstep">
              <div className="pnum">02</div>
              <h4>Saha Keşfi</h4>
              <p>Mühendis ekibimiz zemin yapısını, erişim yollarını ve engel yüksekliklerini saha ziyaretiyle doğrular.</p>
            </div>
            <div className="pstep">
              <div className="pnum">03</div>
              <h4>Kaldırma Planı</h4>
              <p>Uygun ekipman sınıfı ve güvenlik çevresi belirlenip yazılı plan onaya sunulur.</p>
            </div>
            <div className="pstep">
              <div className="pnum">04</div>
              <h4>Sevkiyat &amp; Operasyon</h4>
              <p>Ekipman ve sertifikalı operatör sahaya ulaşır; operasyon canlı olarak operasyon merkezinden izlenir.</p>
            </div>
            <div className="pstep">
              <div className="pnum">05</div>
              <h4>Teslim &amp; Raporlama</h4>
              <p>İş bitiminde saha tutanağı, yük raporu ve fatura aynı gün dijital olarak teslim edilir.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ COVERAGE ============ */}
      <section>
        <div className="wrap">
          <div className="coverage">
            <div>
              <span className="eyebrow">Hizmet Ağı</span>
              <h2 style={{ fontSize: "clamp(28px,3.6vw,38px)", margin: "14px 0 26px" }}>81 il, 14 bölge deposu</h2>
              <p style={{ color: "var(--steel)", fontSize: "15px", lineHeight: "1.6", marginBottom: "26px", maxWidth: "440px" }}>
                Bölge depolarımız sayesinde Türkiye&apos;nin her noktasında aynı gün keşif, 48 saat içinde sevkiyat garantisi veriyoruz.
              </p>
              <ul className="coverage-list">
                <li>İstanbul (Avrupa)</li>
                <li>İstanbul (Anadolu)</li>
                <li>Ankara</li>
                <li>İzmir</li>
                <li>Bursa</li>
                <li>Kocaeli</li>
                <li>Antalya</li>
                <li>Adana</li>
                <li>Gaziantep</li>
                <li>Samsun</li>
                <li>Trabzon</li>
                <li>Konya</li>
              </ul>
            </div>
            <div className="coverage-map">
              <img src="/gallery/istanbul-skyline-vinc.jpg" alt="İstanbul skyline saha görünümü" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
          </div>
        </div>
      </section>

      {/* ============ TESTIMONIALS ============ */}
      <section className="section-alt">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Referanslar</span>
            <h2>Sahadan geri dönüşler</h2>
          </div>
          <div className="testi-grid">
            <div className="testi-card">
              <div className="stars">★★★★★</div>
              <p>&quot;Liman sahasındaki 180 tonluk pres montajını öngörülenden bir gün önce tamamladılar. Operatörlerin saha disiplini fark yarattı.&quot;</p>
              <div className="testi-who">
                <div className="avatar">MK</div>
                <div>
                  <b>Mert K.</b>
                  <span>Proje Müdürü, Liman Lojistik A.Ş.</span>
                </div>
              </div>
            </div>
            <div className="testi-card">
              <div className="stars">★★★★★</div>
              <p>&quot;Acil bir arıza sonrası gece yarısı talep ettiğimiz mobil vinç 2 saat içinde sahada oldu. Bu hızı başka firmada görmedik.&quot;</p>
              <div className="testi-who">
                <div className="avatar">SD</div>
                <div>
                  <b>Selin D.</b>
                  <span>Şantiye Şefi, Demirören İnşaat</span>
                </div>
              </div>
            </div>
            <div className="testi-card">
              <div className="stars">★★★★★</div>
              <p>&quot;Kule vinç kurulumundan sökümüne kadar tüm süreç raporlandı; denetim sürecimizde elimizi çok rahatlattı.&quot;</p>
              <div className="testi-who">
                <div className="avatar">OY</div>
                <div>
                  <b>Onur Y.</b>
                  <span>İSG Uzmanı, Aktif Enerji</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section id="sss">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Sıkça Sorulan Sorular</span>
            <h2>Kiralamadan önce bilmen gerekenler</h2>
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

      {/* ============ CTA BAND ============ */}
      <section id="iletisim" style={{ paddingTop: "0" }}>
        <div className="cta-band">
          <div className="cta-band-bg">
            <img src="/gallery/gokdelen-yuksek-platform.jpg" alt="Gökdelen cephesinde yüksek erişim" />
          </div>
          <div className="cta-band-inner">
            <div className="cta-row">
              <h2>Sahandaki yükü bugün planlayalım.</h2>
              <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
                <a className="btn btn-gold" href="tel:+905323039089">
                  0532 303 90 89
                </a>
                <a className="btn btn-glass" href="mailto:info@vincburada.com.tr">
                  info@vincburada.com.tr
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
