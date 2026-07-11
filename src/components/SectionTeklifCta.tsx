'use client'

import { useState } from 'react'

const WHATSAPP_NUMBER = '905323039089'

const EKIPMANLAR = ['Sepetli Vinç (Manlift)', 'Mobil Vinç', 'Kule Vinç', 'Hiyap Vinç', 'Elektrikli Vinç', 'Diğer / Emin değilim']

const inputClass =
  'w-full border-0 border-b border-neutral-200 bg-transparent px-0 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-orange-500 focus:ring-0 dark:border-neutral-700 dark:text-neutral-100 dark:placeholder:text-neutral-500'

const SectionTeklifCta = ({ className = '' }: { className?: string }) => {
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
      message && `Detay: ${message}`,
    ].filter(Boolean)
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join('\n'))}`,
      '_blank',
      'noopener,noreferrer'
    )
  }

  return (
    <div className={className}>
      <div className="relative grid overflow-hidden rounded-3xl bg-neutral-900 lg:grid-cols-2 dark:bg-neutral-800">
        {/* SOL: karanlık panel */}
        <div className="relative flex flex-col justify-center p-8 sm:p-12 lg:p-16">
          {/* Arka plan: ince vinç kancası deseni */}
          <svg
            aria-hidden="true"
            viewBox="0 0 200 200"
            className="pointer-events-none absolute -right-10 -bottom-10 size-64 text-white/[0.04]"
            fill="none"
            stroke="currentColor"
            strokeWidth="6"
            strokeLinecap="round"
          >
            <path d="M100 10v70" />
            <path d="M100 80a35 35 0 1 0 35 35" />
            <path d="M70 10h60" />
          </svg>

          <h2 className="text-3xl font-semibold text-white sm:text-4xl">
            Hemen <span className="text-orange-500">Teklif Alın</span>
          </h2>
          <div className="mt-4 h-1 w-14 rounded bg-orange-600" aria-hidden="true" />
          <p className="mt-6 max-w-md text-base/7 text-neutral-300">
            İhtiyacınız olan ekipmanı ve şantiye konumunuzu belirtin; kalem kalem yazılı teklifinizi aynı gün içinde
            hazırlayalım. Dilerseniz doğrudan arayabilir veya WhatsApp&apos;tan yazabilirsiniz.
          </p>

          <div className="mt-10 flex flex-col gap-8 sm:flex-row sm:gap-14">
            <div>
              <p className="text-xs font-semibold tracking-widest text-neutral-400 uppercase">Telefon</p>
              <a href="tel:+905323039089" className="mt-2 block text-xl font-semibold text-white hover:text-orange-400">
                0532 303 90 89
              </a>
            </div>
            <div>
              <p className="text-xs font-semibold tracking-widest text-neutral-400 uppercase">WhatsApp</p>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 block text-xl font-semibold text-white hover:text-orange-400"
              >
                7/24 Yazın
              </a>
            </div>
          </div>

          <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm text-neutral-400">
            {['Aynı gün dönüş', 'Operatör dahil', 'Sigortalı ekipman'].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <svg viewBox="0 0 20 20" fill="currentColor" className="size-4 text-orange-500" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.86-9.94a.75.75 0 1 0-1.22-.87l-2.96 4.14-1.4-1.4a.75.75 0 1 0-1.06 1.06l2 2a.75.75 0 0 0 1.14-.1l3.5-4.83Z"
                    clipRule="evenodd"
                  />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* SAĞ: form kartı */}
        <div className="bg-white p-8 sm:p-12 lg:p-16 dark:bg-neutral-900">
          <p className="text-sm font-semibold tracking-widest text-neutral-500 uppercase dark:text-neutral-400">
            Teklif Formu
          </p>
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
              className={`${inputClass} cursor-pointer ${equipment ? '' : 'text-neutral-400 dark:text-neutral-500'}`}
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
              rows={3}
              placeholder="Mesajınız... (yük, yükseklik, şantiye konumu)"
              aria-label="Mesajınız"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className={`${inputClass} resize-none`}
            />

            <button
              type="submit"
              className="group mt-2 flex items-center justify-center gap-3 rounded-xl bg-orange-600 px-8 py-4 text-sm font-bold tracking-widest text-white uppercase shadow-lg shadow-orange-600/25 transition hover:bg-orange-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
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
            <p className="text-center text-xs text-neutral-400 dark:text-neutral-500">
              Form, mesajınızı WhatsApp üzerinden bize iletir.
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SectionTeklifCta
