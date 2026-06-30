"use client";

export default function ContactForm() {
  return (
    <form style={{ display: "flex", flexDirection: "column", gap: "16px" }} onSubmit={(e) => e.preventDefault()}>
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
  );
}
