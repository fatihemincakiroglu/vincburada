'use client'

import { TKategoriUrun } from '@/data/kategori-urunleri'
import ButtonThird from '@/shared/ButtonThird'
import clsx from 'clsx'
import Link from 'next/link'
import { useMemo, useState } from 'react'

const WHATSAPP = 'https://wa.me/905323039089'

const chipClass = (aktif: boolean) =>
  clsx(
    'rounded-full border px-3 py-1.5 text-xs font-medium transition-colors',
    aktif
      ? 'border-neutral-900 bg-neutral-900 text-white dark:border-white dark:bg-white dark:text-neutral-900'
      : 'border-neutral-300 text-neutral-700 hover:border-neutral-500 dark:border-neutral-600 dark:text-neutral-300'
  )

const KategoriUrunGrid = ({
  urunler,
  kategoriAdi,
  kategoriHandle,
}: {
  urunler: TKategoriUrun[]
  kategoriAdi: string
  kategoriHandle: string
}) => {
  const [sorgu, setSorgu] = useState('')
  const [markalar, setMarkalar] = useState<string[]>([])
  const [tip, setTip] = useState<string | null>(null)

  const tumMarkalar = useMemo(() => Array.from(new Set(urunler.map((u) => u.marka))).sort(), [urunler])
  const tumTipler = useMemo(() => Array.from(new Set(urunler.map((u) => u.tip))).sort(), [urunler])

  const markaToggle = (m: string) =>
    setMarkalar(markalar.includes(m) ? markalar.filter((x) => x !== m) : [...markalar, m])

  const filtreli = useMemo(() => {
    const q = sorgu.trim().toLocaleLowerCase('tr')
    return urunler.filter((u) => {
      if (q && !`${u.marka} ${u.model} ${u.tip}`.toLocaleLowerCase('tr').includes(q)) return false
      if (markalar.length && !markalar.includes(u.marka)) return false
      if (tip && u.tip !== tip) return false
      return true
    })
  }, [urunler, sorgu, markalar, tip])

  const filtreAktif = sorgu.trim() !== '' || markalar.length > 0 || tip !== null

  const temizle = () => {
    setSorgu('')
    setMarkalar([])
    setTip(null)
  }

  return (
    <div>
      {/* Filtre araç çubuğu */}
      <div className="flex flex-col gap-y-4 rounded-3xl border border-neutral-200 p-5 dark:border-neutral-700">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <input
            type="search"
            value={sorgu}
            onChange={(e) => setSorgu(e.target.value)}
            placeholder="Model / marka ara..."
            aria-label="Model veya marka ara"
            className="w-full rounded-xl border border-neutral-300 bg-transparent px-4 py-2.5 text-sm focus:border-neutral-500 focus:ring-0 sm:max-w-xs dark:border-neutral-600 dark:text-neutral-100"
          />
          {tumTipler.length > 1 && (
            <div className="flex flex-wrap gap-2">
              {tumTipler.map((t) => (
                <button key={t} onClick={() => setTip(tip === t ? null : t)} className={chipClass(tip === t)}>
                  {t}
                </button>
              ))}
            </div>
          )}
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <span className="me-1 text-xs font-semibold tracking-widest text-neutral-400 uppercase">Marka</span>
          {tumMarkalar.map((m) => (
            <button key={m} onClick={() => markaToggle(m)} className={chipClass(markalar.includes(m))}>
              {m}
            </button>
          ))}
          {filtreAktif && (
            <button
              onClick={temizle}
              className="ms-auto text-sm text-primary-600 hover:underline dark:text-primary-400"
            >
              Temizle
            </button>
          )}
        </div>
      </div>

      {/* Sonuç sayısı */}
      <p className="mt-5 text-sm text-neutral-500 dark:text-neutral-400">
        <span className="font-semibold text-neutral-900 dark:text-neutral-100">{filtreli.length}</span> model
        listeleniyor
      </p>

      {/* Kartlar */}
      {filtreli.length === 0 ? (
        <div className="mt-6 flex flex-col items-start gap-y-4 rounded-3xl border border-dashed border-neutral-300 p-8 dark:border-neutral-700">
          <p className="text-neutral-600 dark:text-neutral-300">
            Bu filtrelerle eşleşen model bulunamadı. Filomuzda listede olmayan modeller de bulunuyor — ihtiyacınızı
            iletin, size uygun modeli önerelim.
          </p>
          <ButtonThird onClick={temizle} className="border border-neutral-300 dark:border-neutral-600">
            Filtreleri temizle
          </ButtonThird>
        </div>
      ) : (
        <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtreli.map((u) => (
            <div
              key={u.id}
              className="group flex flex-col rounded-3xl border border-neutral-200 p-5 transition hover:border-amber-500/60 hover:shadow-lg dark:border-neutral-700"
            >
              <div className="flex items-start justify-between gap-x-3">
                <div>
                  <p className="text-[11px] font-semibold tracking-[0.2em] text-amber-600 uppercase dark:text-amber-400">
                    {u.marka}
                  </p>
                  <h3 className="mt-1 font-semibold text-neutral-900 dark:text-neutral-100">
                    <Link href={`/${kategoriHandle}/${u.handle}`} className="hover:underline">
                      {u.model}
                    </Link>
                  </h3>
                </div>
                <span className="shrink-0 rounded-full bg-neutral-100 px-2.5 py-1 text-[11px] font-medium text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300">
                  {u.tip}
                </span>
              </div>

              <dl className="mt-4 grid grid-cols-2 gap-x-4 gap-y-3 border-t border-neutral-100 pt-4 dark:border-neutral-800">
                {u.specs.map((s) => (
                  <div key={s.etiket}>
                    <dt className="text-[11px] font-medium tracking-wide text-neutral-400 uppercase">{s.etiket}</dt>
                    <dd className="mt-0.5 text-sm font-semibold text-neutral-800 dark:text-neutral-200">{s.deger}</dd>
                  </div>
                ))}
              </dl>

              <p className="mt-3 grow text-xs text-neutral-500 dark:text-neutral-400">
                {u.not} · {u.mensei}
              </p>

              <div className="mt-4 flex items-center gap-2">
                <Link
                  href={`/${kategoriHandle}/${u.handle}`}
                  className="inline-flex flex-1 items-center justify-center rounded-full border border-neutral-300 px-4 py-2 text-sm font-medium text-neutral-700 transition hover:border-neutral-500 dark:border-neutral-600 dark:text-neutral-300"
                >
                  İncele
                </Link>
                <a
                  href={`${WHATSAPP}?text=${encodeURIComponent(`Merhaba, ${u.marka} ${u.model} (${kategoriAdi}) kiralama için teklif almak istiyorum.`)}`}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex flex-1 items-center justify-center rounded-full border border-neutral-900 px-4 py-2 text-sm font-medium text-neutral-900 transition hover:bg-neutral-900 hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-neutral-900"
                >
                  Teklif Al
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default KategoriUrunGrid
