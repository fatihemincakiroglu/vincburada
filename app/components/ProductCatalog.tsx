"use client";

import { useState } from "react";
import type { Product } from "../data/products/types";
export type { Product };

export default function ProductCatalog({ products }: { products: Product[] }) {
  const [selected, setSelected] = useState<string[]>([]);

  function toggle(id: string) {
    setSelected((prev) => (prev.includes(id) ? prev.filter((p) => p !== id) : prev.length >= 4 ? prev : [...prev, id]));
  }

  const selectedProducts = products.filter((p) => selected.includes(p.id));
  const specLabels = Array.from(new Set(selectedProducts.flatMap((p) => p.specs.map((s) => s.label))));

  return (
    <div>
      <div className="product-grid">
        {products.map((p) => {
          const isSelected = selected.includes(p.id);
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
                  <button type="button" className={`compare-toggle${isSelected ? " active" : ""}`} onClick={() => toggle(p.id)}>
                    {isSelected ? "✓ Seçildi" : "+ Karşılaştır"}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {selectedProducts.length > 0 ? (
        <div className="compare-panel">
          <div className="compare-panel-head">
            <h3>Karşılaştırma ({selectedProducts.length}/4)</h3>
            <button type="button" className="btn btn-glass" style={{ fontSize: "13px", padding: "8px 16px" }} onClick={() => setSelected([])}>
              Temizle
            </button>
          </div>
          <div className="table-wrap">
            <table className="specs-table compare-table">
              <thead>
                <tr>
                  <th>Özellik</th>
                  {selectedProducts.map((p) => (
                    <th key={p.id}>{p.name}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {specLabels.map((label) => (
                  <tr key={label}>
                    <td className="model">{label}</td>
                    {selectedProducts.map((p) => {
                      const spec = p.specs.find((s) => s.label === label);
                      return <td key={p.id}>{spec ? spec.value : "—"}</td>;
                    })}
                  </tr>
                ))}
                <tr>
                  <td className="model">Fiyat</td>
                  {selectedProducts.map((p) => (
                    <td key={p.id} className="tag-cell">
                      <a href="/iletisim">Teklif Al →</a>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className="compare-empty">Karşılaştırmak istediğiniz ürünleri yukarıdan &quot;+ Karşılaştır&quot; ile seçin (en fazla 4 ürün).</div>
      )}
    </div>
  );
}
