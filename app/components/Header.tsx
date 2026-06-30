export default function Header() {
  return (
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
            <a href="/#sss">SSS</a>
            <a href="/#iletisim">İletişim</a>
          </div>
          <div className="nav-cta">
            <span className="nav-phone">0532 303 90 89</span>
            <a className="btn btn-primary" style={{ padding: "10px 20px", fontSize: "13px" }} href="/#iletisim">
              Teklif Al
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
