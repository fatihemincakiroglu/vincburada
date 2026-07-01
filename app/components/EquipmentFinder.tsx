"use client";

import { useState, FormEvent } from "react";
import { finderProducts, FinderProduct, Category, Use, Power } from "../data/finder-products";
import FinderSelect from "./FinderSelect";

export default function EquipmentFinder() {
  const [use, setUse] = useState<Use | "">("");
  const [category, setCategory] = useState<Category | "">("");
  const [power, setPower] = useState<Power | "">("");
  const [minH, setMinH] = useState("");
  const [maxH, setMaxH] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [results, setResults] = useState<FinderProduct[]>([]);

  function handleSearch(e: FormEvent) {
    e.preventDefault();
    const min = minH.trim() !== "" ? parseFloat(minH) : null;
    const max = maxH.trim() !== "" ? parseFloat(maxH) : null;

    const filtered = finderProducts.filter((p) => {
      if (use && p.use !== use) return false;
      if (category && p.category !== category) return false;
      if (power && p.power !== power) return false;
      if (min !== null && !Number.isNaN(min) && p.maxHeight < min) return false;
      if (max !== null && !Number.isNaN(max) && p.maxHeight > max) return false;
      return true;
    });

    setResults(filtered);
    setSubmitted(true);

    requestAnimationFrame(() => {
      document.getElementById("bul-sonuclar")?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  return (
    <>
      <form className="search-float" onSubmit={handleSearch}>
        <div className="search-float-bar">
          <FinderSelect
            label="Ne Taşıyacaksınız?"
            value={use}
            onChange={(v) => setUse(v as Use | "")}
            options={[
              { value: "İnsan", label: "İnsan" },
              { value: "Malzeme", label: "Malzeme" },
            ]}
          />

          <FinderSelect
            label="Ekipman"
            value={category}
            onChange={(v) => setCategory(v as Category | "")}
            options={[
              { value: "Vinç", label: "Vinç" },
              { value: "Forklift", label: "Forklift" },
              { value: "Manlift", label: "Manlift" },
              { value: "Platform", label: "Platform" },
            ]}
          />

          <FinderSelect
            label="Güç Kaynağı"
            value={power}
            onChange={(v) => setPower(v as Power | "")}
            options={[
              { value: "Akülü", label: "Akülü" },
              { value: "Dizel", label: "Dizel" },
              { value: "Çift Enerjili", label: "Çift Enerjili" },
            ]}
          />

          <div className="search-float-field">
            <label>Yükseklik (Min)</label>
            <input
              type="number"
              inputMode="numeric"
              min={0}
              placeholder="Metre"
              value={minH}
              onChange={(e) => setMinH(e.target.value)}
            />
          </div>
          <div className="search-float-field">
            <label>Yükseklik (Max)</label>
            <input
              type="number"
              inputMode="numeric"
              min={0}
              placeholder="Metre"
              value={maxH}
              onChange={(e) => setMaxH(e.target.value)}
            />
          </div>

          <button type="submit" className="search-float-btn">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="7" />
              <path d="M21 21l-4.35-4.35" strokeLinecap="round" />
            </svg>
            Bul
          </button>
        </div>
        <p className="search-float-note">
          Veya <a href="#filo">tüm filomuzu</a> aşağıda inceleyin.
        </p>
      </form>

      {submitted && (
        <div className="wrap" id="bul-sonuclar" style={{ marginTop: "44px", scrollMarginTop: "110px" }}>
          <div className="section-head" style={{ marginBottom: "28px" }}>
            <span className="eyebrow">Arama Sonucu</span>
            <h2>
              {results.length > 0
                ? `${results.length} ekipman bulundu`
                : "Bu kriterlere uygun ekipman bulunamadı"}
            </h2>
            {results.length === 0 && (
              <p>Filtreleri gevşetip tekrar deneyin veya doğrudan saha ekibimize ulaşın; ihtiyacınıza en yakın ekipmanı biz önerelim.</p>
            )}
          </div>

          {results.length > 0 ? (
            <div className="product-grid">
              {results.map((p) => (
                <div className="product-card" key={p.id}>
                  <div className="product-img">
                    <img src={p.image} alt={p.name} />
                  </div>
                  <div className="product-body">
                    <span className="product-tag">
                      {p.category} · {p.tag}
                    </span>
                    <h3>{p.name}</h3>
                    <p>{p.blurb}</p>
                    <div className="product-chips">
                      <span>{p.specLine}</span>
                      <span>
                        <b>Güç:</b> {p.power}
                      </span>
                    </div>
                    <div className="product-foot">
                      <a className="product-price" href="/iletisim">
                        Teklif Al →
                      </a>
                      <a className="btn btn-glass" style={{ padding: "8px 16px", fontSize: "12px" }} href={p.href}>
                        Detay →
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <a className="btn btn-gold" href="/iletisim">
              Bize Ulaşın →
            </a>
          )}
        </div>
      )}
    </>
  );
}
