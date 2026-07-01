"use client";

import { useState } from "react";
import type { ProductGroup } from "../data/products/index";
import type { Product } from "../data/products/types";

const CAT_CLASS: Record<string, string> = {
  Vinç: "cat-vinc",
  Forklift: "cat-forklift",
  Manlift: "cat-manlift",
  Platform: "cat-platform",
};

const MAX_COMPARE = 3;

export default function AllProductsCatalog({ groups }: { groups: ProductGroup[] }) {
  const [selected, setSelected] = useState<string[]>([]);

  const lookup = new Map<string, { product: Product; category: string }>();
  groups.forEach((g) => g.products.forEach((p) => lookup.set(p.id, { product: p, category: g.key })));

  function toggle(id: string) {
    setSelected((prev) => {
      if (prev.includes(id)) return prev.filter((x) => x !== id);
      if (prev.length >= MAX_COMPARE) return prev;
      return [...prev, id];
    });
  }

  const selectedItems = selected.map((id) => lookup.get(id)!).filter(Boolean);
  const specLabels = Array.from(new Set(selectedItems.flatMap((s) => s.product.specs.map((sp) => sp.label))));

  return (
    <div>
      {/* ---- LIVE COMPARISON PANEL ---- */}
      <div className="compare-panel" id="karsilastir" style={{ scrollMarginTop: "110px" }}>
        <div className="compare-panel-head">
          <h3>Karşılaştırma ({selectedItems.length}/{MAX_COMPARE})</h3>
          {selectedItems.length > 0 && (
            <button type="button" className="btn btn-glass" style={{ fontSize: "13px", padding: "8px 16px" }} onClick={() => setSelected([])}>
              Temizle
            </button>
          )}
        </div>

        {selectedItems.length === 0 ? (
          <div className="compare-empty">
            Kategorilerden en fazla {MAX_COMPARE} ürün seçin — özellikleri burada anında karşılaştırılır.
          </div>
        ) : (
          <div className="table-wrap">
            <table className="specs-table compare-table">
              <thead>
                <tr>
                  <th>Özellik</th>
                  {selectedItems.map(({ product, category }) => (
                    <th key={product.id}>
                      <span className={CAT_CLASS[category]} style={{ color: "var(--cat-soft)" }}>
                        {category}
                      </span>
                      <br />
                      {product.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="model">Tip</td>
                  {selectedItems.map(({ product }) => (
                    <td key={product.id}>{product.tag}</td>
                  ))}
                </tr>
                {specLabels.map((label) => (
                  <tr key={label}>
                    <td className="model">{label}</td>
                    {selectedItems.map(({ product }) => {
                      const spec = product.specs.find((s) => s.label === label);
                      return <td key={product.id}>{spec ? spec.value : "—"}</td>;
                    })}
                  </tr>
                ))}
                <tr>
                  <td className="model">Fiyat</td>
                  {selectedItems.map(({ product, category }) => (
                    <td key={product.id} className={`tag-cell ${CAT_CLASS[category]}`}>
                      <a href="/iletisim">Teklif Al →</a>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* ---- CATEGORY GROUPS ---- */}
      {groups.map((group) => (
        <div key={group.key} style={{ marginTop: "56px" }}>
          <div className="section-flex" style={{ marginBottom: "22px" }}>
            <h2 className={CAT_CLASS[group.key]} style={{ color: "var(--cat-color)", fontSize: "24px" }}>
              {group.label}
              <span style={{ fontFamily: "var(--mono)", fontSize: "13px", color: "var(--steel)", marginLeft: "12px", textTransform: "none", fontWeight: 500 }}>
                {group.products.length} model
              </span>
            </h2>
            <a className="btn btn-glass" style={{ fontSize: "13px", padding: "9px 18px" }} href={group.href}>
              {group.label} sayfasına git →
            </a>
          </div>

          <div className={`product-grid ${CAT_CLASS[group.key]}`}>
            {group.products.map((p) => {
              const isSelected = selected.includes(p.id);
              const disabled = !isSelected && selected.length >= MAX_COMPARE;
              return (
                <div className={`product-card${isSelected ? " is-selected" : ""}`} key={p.id}>
                  <div className="product-img">
                    <img src={p.image} alt={p.name} />
                  </div>
                  <div className="product-body">
                    <span className="product-tag">{p.tag}</span>
                    <h3>{p.name}</h3>
                    <p>{p.blurb}</p>
                    <div className="product-chips">
                      {p.specs.slice(0, 2).map((s) => (
                        <span key={s.label}>
                          <b>{s.label}:</b> {s.value}
                        </span>
                      ))}
                    </div>
                    <div className="product-foot">
                      <a className="product-price" href="/iletisim">
                        Teklif Al →
                      </a>
                      <button
                        type="button"
                        className={`compare-toggle${isSelected ? " active" : ""}`}
                        disabled={disabled}
                        style={disabled ? { opacity: 0.4, cursor: "not-allowed" } : undefined}
                        onClick={() => toggle(p.id)}
                      >
                        {isSelected ? "✓ Seçildi" : "+ Karşılaştır"}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
