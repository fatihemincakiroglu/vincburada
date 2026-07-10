'use client'

import { Badge } from '@/shared/Badge'
import ButtonPrimary from '@/shared/ButtonPrimary'
import ButtonThird from '@/shared/ButtonThird'
import {
  ANA_KATEGORILER,
  GUC_KAYNAKLARI,
  KULLANIM_ORTAMLARI,
  TSepetliVinc,
  ZEMIN_TIPLERI,
} from '@/data/sepetli-vinc-listings'
import clsx from 'clsx'
import Slider from 'rc-slider'
import Image from 'next/image'
import { useSearchParams } from 'next/navigation'
import { useMemo, useState } from 'react'

const YUKSEKLIK_MIN = 0
const YUKSEKLIK_MAX = 80

const kategoriBadgeRengi: Record<string, 'blue' | 'green' | 'amber' | 'purple' | 'teal' | 'rose' | 'zinc'> = {
  Teleskopik: 'blue',
  Eklemli: 'purple',
  Makaslı: 'green',
  Örümcek: 'teal',
  'Kamyon Üstü': 'amber',
  'Dikey Mast': 'rose',
  Telehandler: 'zinc',
}

const CheckboxGrup = ({
  baslik,
  secenekler,
  secili,
  onToggle,
}: {
  baslik: string
  secenekler: readonly string[]
  secili: string[]
  onToggle: (deger: string) => void
}) => (
  <div>
    <p className="text-sm font-semibold">{baslik}</p>
    <div className="mt-3 flex flex-col gap-y-2.5">
      {secenekler.map((s) => (
        <label key={s} className="flex cursor-pointer items-center gap-x-2.5 text-sm">
          <input
            type="checkbox"
            checked={secili.includes(s)}
            onChange={() => onToggle(s)}
            className="size-4 rounded border-neutral-300 text-primary-600 focus:ring-primary-500 dark:border-neutral-600 dark:bg-neutral-800"
          />
          <span className="text-neutral-700 dark:text-neutral-300">{s}</span>
        </label>
      ))}
    </div>
  </div>
)

const gucMap: Record<string, string> = { akulu: 'Elektrikli', dizel: 'Dizel', cift_enerjili: 'Hibrit' }

const SepetliVincFilterGrid = ({ listings }: { listings: TSepetliVinc[] }) => {
  // Arama formlarından gelen URL parametrelerini başlangıç filtresi olarak uygula
  const searchParams = useSearchParams()
  const pGuc = searchParams.get('power_source')
  const initialGucler = pGuc && gucMap[pGuc] ? [gucMap[pGuc]] : []
  const hMin = Number(searchParams.get('height_min'))
  const hMax = Number(searchParams.get('height_max'))
  const initialYukseklik: [number, number] = [
    Number.isFinite(hMin) && searchParams.get('height_min') ? Math.max(YUKSEKLIK_MIN, hMin) : YUKSEKLIK_MIN,
    Number.isFinite(hMax) && searchParams.get('height_max') ? Math.min(YUKSEKLIK_MAX, hMax) : YUKSEKLIK_MAX,
  ]
  const initialQuery = searchParams.get('q') ?? ''

  const [sorgu, setSorgu] = useState(initialQuery)
  const [kategori, setKategori] = useState<string | null>(null)
  const [markalar, setMarkalar] = useState<string[]>([])
  const [gucler, setGucler] = useState<string[]>(initialGucler)
  const [zeminler, setZeminler] = useState<string[]>([])
  const [ortam, setOrtam] = useState<string | null>(null)
  const [yukseklik, setYukseklik] = useState<[number, number]>(initialYukseklik)

  const tumMarkalar = useMemo(() => Array.from(new Set(listings.map((l) => l.marka))).sort(), [listings])

  const toggle = (dizi: string[], setDizi: (d: string[]) => void, deger: string) => {
    setDizi(dizi.includes(deger) ? dizi.filter((d) => d !== deger) : [...dizi, deger])
  }

  const filtreliListe = useMemo(() => {
    const q = sorgu.trim().toLocaleLowerCase('tr')
    return listings.filter((l) => {
      if (q && !`${l.marka} ${l.model} ${l.title} ${l.kategori}`.toLocaleLowerCase('tr').includes(q)) return false
      if (kategori && l.kategori !== kategori) return false
      if (markalar.length && !markalar.includes(l.marka)) return false
      if (gucler.length && !l.gucKaynaklari.some((g) => gucler.includes(g))) return false
      if (zeminler.length && !l.zeminTipleri.some((z) => zeminler.includes(z))) return false
      if (ortam && l.kullanimOrtami !== ortam && l.kullanimOrtami !== 'Her İkisi') return false
      if (l.calismaYuksekligi < yukseklik[0] || l.calismaYuksekligi > yukseklik[1]) return false
      return true
    })
  }, [listings, sorgu, kategori, markalar, gucler, zeminler, ortam, yukseklik])

  const filtreAktif =
    sorgu.trim() !== '' ||
    kategori !== null ||
    markalar.length > 0 ||
    gucler.length > 0 ||
    zeminler.length > 0 ||
    ortam !== null ||
    yukseklik[0] !== YUKSEKLIK_MIN ||
    yukseklik[1] !== YUKSEKLIK_MAX

  const filtreleriTemizle = () => {
    setSorgu('')
    setKategori(null)
    setMarkalar([])
    setGucler([])
    setZeminler([])
    setOrtam(null)
    setYukseklik([YUKSEKLIK_MIN, YUKSEKLIK_MAX])
  }

  return (
    <div className="flex flex-col gap-10 lg:flex-row lg:items-start">
      {/* ------- FİLTRE PANELİ ------- */}
      <aside className="w-full shrink-0 rounded-3xl border border-neutral-200 p-6 lg:w-72 dark:border-neutral-700">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Filtrele</h2>
          {filtreAktif && (
            <button
              onClick={filtreleriTemizle}
              className="text-sm text-primary-600 hover:underline dark:text-primary-400"
            >
              Temizle
            </button>
          )}
        </div>

        <div className="mt-6 flex flex-col gap-y-7">
          {/* Metin araması */}
          <div>
            <input
              type="search"
              value={sorgu}
              onChange={(e) => setSorgu(e.target.value)}
              placeholder="Model / marka ara..."
              aria-label="Model veya marka ara"
              className="w-full rounded-xl border border-neutral-300 bg-transparent px-4 py-2.5 text-sm focus:border-neutral-500 focus:ring-0 dark:border-neutral-600 dark:text-neutral-100"
            />
          </div>

          {/* Ana Kategori */}
          <div>
            <p className="text-sm font-semibold">Ana Kategori</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {ANA_KATEGORILER.map((k) => (
                <button
                  key={k}
                  onClick={() => setKategori(kategori === k ? null : k)}
                  className={clsx(
                    'rounded-full border px-3 py-1.5 text-xs font-medium transition-colors',
                    kategori === k
                      ? 'border-neutral-900 bg-neutral-900 text-white dark:border-white dark:bg-white dark:text-neutral-900'
                      : 'border-neutral-300 text-neutral-700 hover:border-neutral-500 dark:border-neutral-600 dark:text-neutral-300'
                  )}
                >
                  {k}
                </button>
              ))}
            </div>
          </div>

          {/* Çalışma Yüksekliği */}
          <div>
            <p className="text-sm font-semibold">
              Çalışma Yüksekliği:{' '}
              <span className="font-normal text-neutral-500 dark:text-neutral-400">
                {yukseklik[0]}m – {yukseklik[1]}m
              </span>
            </p>
            <div className="mt-4 px-1">
              <Slider
                range
                min={YUKSEKLIK_MIN}
                max={YUKSEKLIK_MAX}
                step={1}
                value={yukseklik}
                allowCross={false}
                onChange={(v) => setYukseklik(v as [number, number])}
              />
            </div>
          </div>

          <CheckboxGrup
            baslik="Marka"
            secenekler={tumMarkalar}
            secili={markalar}
            onToggle={(d) => toggle(markalar, setMarkalar, d)}
          />

          <CheckboxGrup
            baslik="Güç Kaynağı"
            secenekler={GUC_KAYNAKLARI}
            secili={gucler}
            onToggle={(d) => toggle(gucler, setGucler, d)}
          />

          <CheckboxGrup
            baslik="Zemin / Hareket Tipi"
            secenekler={ZEMIN_TIPLERI}
            secili={zeminler}
            onToggle={(d) => toggle(zeminler, setZeminler, d)}
          />

          {/* Kullanım Ortamı */}
          <div>
            <p className="text-sm font-semibold">Kullanım Ortamı</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {KULLANIM_ORTAMLARI.map((o) => (
                <button
                  key={o}
                  onClick={() => setOrtam(ortam === o ? null : o)}
                  className={clsx(
                    'rounded-full border px-3 py-1.5 text-xs font-medium transition-colors',
                    ortam === o
                      ? 'border-neutral-900 bg-neutral-900 text-white dark:border-white dark:bg-white dark:text-neutral-900'
                      : 'border-neutral-300 text-neutral-700 hover:border-neutral-500 dark:border-neutral-600 dark:text-neutral-300'
                  )}
                >
                  {o}
                </button>
              ))}
            </div>
          </div>
        </div>
      </aside>

      {/* ------- SONUÇLAR ------- */}
      <div className="grow">
        <p className="text-sm text-neutral-500 dark:text-neutral-400">
          <span className="font-semibold text-neutral-900 dark:text-neutral-100">{filtreliListe.length}</span> model
          bulundu
        </p>

        {filtreliListe.length === 0 ? (
          <div className="mt-10 flex flex-col items-start gap-y-4 rounded-3xl border border-dashed border-neutral-300 p-10 dark:border-neutral-700">
            <p className="text-neutral-600 dark:text-neutral-300">
              Bu filtrelerle eşleşen model bulunamadı. Filtreleri gevşetmeyi deneyin ya da bize ihtiyacınızı iletin —
              filomuzda listede olmayan modeller de bulunuyor.
            </p>
            <div className="flex gap-3">
              <ButtonThird onClick={filtreleriTemizle} className="border border-neutral-300 dark:border-neutral-600">
                Filtreleri temizle
              </ButtonThird>
              <ButtonPrimary href="/iletisim">Bize ulaşın</ButtonPrimary>
            </div>
          </div>
        ) : (
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {filtreliListe.map((urun) => (
              <div
                key={urun.id}
                className="group relative flex flex-col overflow-hidden rounded-3xl border border-neutral-200 transition-shadow hover:shadow-lg dark:border-neutral-700"
              >
                <div className="relative aspect-4/3 w-full overflow-hidden">
                  <Image
                    src={urun.featuredImage}
                    alt={urun.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="flex grow flex-col p-5">
                  <div className="flex items-center gap-2">
                    <Badge color={kategoriBadgeRengi[urun.kategori] ?? 'zinc'}>{urun.kategori}</Badge>
                    <span className="text-xs text-neutral-500 dark:text-neutral-400">{urun.marka}</span>
                  </div>
                  <h3 className="mt-2 text-base font-semibold">{urun.title}</h3>
                  <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm text-neutral-600 dark:text-neutral-300">
                    <span>↑ {urun.calismaYuksekligi} m</span>
                    {urun.yatayErisim ? <span>→ {urun.yatayErisim} m</span> : null}
                    {urun.kapasiteKg ? <span>⚖ {urun.kapasiteKg} kg</span> : null}
                  </div>
                  <p className="mt-2 grow text-xs text-neutral-500 dark:text-neutral-400">
                    {urun.gucKaynagiGosterim} · {urun.zeminGosterim}
                  </p>
                  <a
                    href={`https://wa.me/905323039089?text=${encodeURIComponent(`Merhaba, ${urun.marka} ${urun.model} kiralama için teklif almak istiyorum.`)}`}
                    target="_blank"
                    rel="noopener"
                    className="mt-4 inline-flex items-center justify-center rounded-full border border-neutral-900 px-4 py-2 text-sm font-medium text-neutral-900 transition group-hover:bg-neutral-900 group-hover:text-white dark:border-white dark:text-white dark:group-hover:bg-white dark:group-hover:text-neutral-900"
                  >
                    Bu Model İçin Teklif Al
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default SepetliVincFilterGrid
