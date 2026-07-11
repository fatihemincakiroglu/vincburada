'use client'

import { useState } from 'react'

const WHATSAPP_NUMBER = '905323039089'

const EKIPMANLAR = ['Sepetli Vinç (Manlift)', 'Mobil Vinç', 'Kule Vinç', 'Hiyap Vinç', 'Elektrikli Vinç', 'Diğer / Emin değilim']

const inputClass =
  'w-full border-0 border-b border-neutral-700 bg-transparent px-0 py-3 text-sm text-white placeholder:text-neutral-500 focus:border-orange-500 focus:ring-0'

const ContactForm = () => {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [equipment, setEquipment] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const lines = [
      'Merhaba, web sitesi üzerinden teklif almak istiyorum.',
      name && `Ad Soyad: ${name}`,
      phone && `Telefon: ${phone}`,
      equipment && `Ekipman: ${equipment}`,
      message && `Mesaj: ${message}`,
    ].filter(Boolean)

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join('\n'))}`
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="relative overflow-hidden rounded-3xl bg-neutral-900 shadow-xl shadow-neutral-900/20 dark:bg-neutral-800">
      {/* Emniyet şeridi */}
      <div
        aria-hidden="true"
        className="h-1.5"
        style={{ background: 'repeating-linear-gradient(45deg, #ea580c 0 14px, #171717 14px 28px)' }}
      />

      <div className="p-8 sm:p-10">
        <div className="flex items-center justify-between gap-4">
          <p className="text-sm font-semibold tracking-widest text-neutral-400 uppercase">Teklif Formu</p>
          <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-400">
            <span className="relative flex size-2" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
            </span>
            Aynı gün dönüş
          </span>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-6">
          <input
            type="text"
            required
            placeholder="Adınız, soyadınız"
            aria-label="Adınız, soyadınız"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={inputClass}
          />
          <input
            type="tel"
            required
            placeholder="Telefon"
            aria-label="Telefon"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className={inputClass}
          />
          <select
            aria-label="Ekipman türü"
            value={equipment}
            onChange={(e) => setEquipment(e.target.value)}
            className={`${inputClass} cursor-pointer ${equipment ? '' : 'text-neutral-500'}`}
          >
            <option value="" disabled>
              Ekipman türü seçin
            </option>
            {EKIPMANLAR.map((e) => (
              <option key={e} value={e} className="text-neutral-900">
                {e}
              </option>
            ))}
          </select>
          <textarea
            rows={4}
            required
            placeholder="Mesajınız... (yük, çalışma yüksekliği, şantiye konumu)"
            aria-label="Mesajınız"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className={`${inputClass} resize-none`}
          />

          <button
            type="submit"
            className="group mt-2 flex items-center justify-center gap-3 rounded-xl bg-orange-600 px-8 py-4 text-sm font-bold tracking-widest text-white uppercase shadow-lg shadow-orange-600/30 transition hover:bg-orange-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
          >
            Teklif Al
            <svg
              viewBox="0 0 20 20"
              fill="currentColor"
              className="size-4 transition-transform group-hover:translate-x-1"
              aria-hidden="true"
            >
              <path d="M3 10a.75.75 0 0 1 .75-.75h10.6L10.7 5.8a.75.75 0 1 1 1.1-1.02l4.9 4.7a.75.75 0 0 1 0 1.04l-4.9 4.7a.75.75 0 1 1-1.1-1.02l3.65-3.45H3.75A.75.75 0 0 1 3 10Z" />
            </svg>
          </button>
          <p className="text-center text-xs text-neutral-500">Form, mesajınızı WhatsApp üzerinden bize iletir.</p>
        </form>
      </div>
    </div>
  )
}

export default ContactForm
