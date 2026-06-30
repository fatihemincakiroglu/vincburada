export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-grid">
          <div>
            <div className="logo" style={{ marginBottom: "14px" }}>
              <span className="mark"></span>Vinç Burada
            </div>
            <p style={{ fontSize: "13.5px", lineHeight: "1.6", maxWidth: "280px", color: "var(--steel)" }}>
              Türkiye genelinde vinç, forklift, manlift ve platform kiralama; saha mühendisliği ve sigortalı yük taşıma hizmeti.
            </p>
          </div>
          <div>
            <h5>Hizmetlerimiz</h5>
            <ul>
              <li>
                <a href="/vinc">Vinç</a>
              </li>
              <li>
                <a href="/forklift">Forklift</a>
              </li>
              <li>
                <a href="/manlift">Manlift</a>
              </li>
              <li>
                <a href="/platform">Platform</a>
              </li>
            </ul>
          </div>
          <div>
            <h5>Kurumsal</h5>
            <ul>
              <li>
                <a href="/#sahalar">Sahalardan</a>
              </li>
              <li>
                <a href="/#teknik">Teknik Veriler</a>
              </li>
              <li>
                <a href="/#sss">SSS</a>
              </li>
              <li>
                <a href="/#iletisim">İletişim</a>
              </li>
            </ul>
          </div>
          <div>
            <h5>İletişim</h5>
            <ul>
              <li>0532 303 90 89</li>
              <li>teklif@vincburada.com</li>
              <li>
                İkitelli OSB, Giyim Sanatkarları İş ve Ticaret Merkezi
                <br />
                4. Ada A Blok Kat:1 D:112
                <br />
                34490 Başakşehir/İstanbul
              </li>
            </ul>
          </div>
        </div>
        <div className="foot-bottom">
          <span>© 2026 Vinç Burada İş Makineleri San. ve Tic. A.Ş.</span>
          <span>Tüm operasyonlar ISO 9001 ve İSG yönetmeliklerine uygundur.</span>
        </div>
      </div>
    </footer>
  );
}
