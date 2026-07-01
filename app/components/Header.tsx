export default function Header() {
  return (
    <>
      <div className="topbar">
        <div className="topbar-inner">
          <div className="topbar-links">
            <a href="mailto:info@vincburada.com.tr">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 6h18v12H3z" strokeLinejoin="round" />
                <path d="M3 7l9 6 9-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              info@vincburada.com.tr
            </a>
            <a href="https://wa.me/905323039089" className="hide-mobile">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 11.5a8.5 8.5 0 1 1-4-7.2L21 3l-1.2 4.1a8.46 8.46 0 0 1 1.2 4.4z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              WhatsApp Hattı
            </a>
          </div>
          <div className="topbar-links">
            <span className="topbar-badge hide-mobile">
              <span className="dot"></span>7/24 Acil Saha Desteği
            </span>
            <a href="tel:+905323039089">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.9.6 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.8.5 2.8.6a2 2 0 0 1 1.8 2.2z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              0532 303 90 89
            </a>
          </div>
        </div>
      </div>
      <header>
        <div className="nav-shell">
          <nav className="nav-inner">
            <a href="/" className="logo">
              <span className="mark"></span>Vinç Burada
            </a>
            <div className="navlinks">
              <a href="/vinc">Vinç</a>
              <a href="/forklift">Forklift</a>
              <a href="/manlift">Manlift</a>
              <a href="/platform">Platform</a>
              <a href="/sss">SSS</a>
              <a href="/iletisim">İletişim</a>
            </div>
            <div className="nav-cta">
              <span className="nav-phone">0532 303 90 89</span>
              <a className="btn btn-gold" style={{ padding: "10px 20px", fontSize: "13px" }} href="/iletisim">
                Teklif Al
              </a>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
