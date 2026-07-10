import { getTumKategoriListeleri } from '@/data/kategori-urunleri'
import { getSepetliVincListings, getSepetliVincMarkalari } from '@/data/sepetli-vinc-listings'
import { StaticImageData } from 'next/image'

// ---------------------------------------------------------------------------
// MARKALAR
// Tüm kategorilerdeki ürünleri marka bazında birleştirir.
// Marka künye bilgileri (menşei, ürün grubu vb.) mevcutsa sepetli vinç marka
// sayfasından zenginleştirilir.
// ---------------------------------------------------------------------------

export type TMarkaUrunu = {
  id: string
  kategoriHandle: string
  kategoriAdi: string
  model: string
  href: string
  ozet: string
  tip: string
  featuredImage: StaticImageData
}

export type TMarka = {
  marka: string
  handle: string
  mensei: string
  urunGrubu?: string
  seriler?: string
  not?: string
  urunler: TMarkaUrunu[]
}

export const markaSlug = (metin: string) =>
  metin
    .toLocaleLowerCase('tr')
    .replace(/ç/g, 'c')
    .replace(/ğ/g, 'g')
    .replace(/ı/g, 'i')
    .replace(/ö/g, 'o')
    .replace(/ş/g, 's')
    .replace(/ü/g, 'u')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')

const KATEGORI_ADLARI: Record<string, string> = {
  'sepetli-vinc': 'Sepetli Vinç',
  'kule-vinc': 'Kule Vinç',
  'elektrikli-vinc': 'Elektrikli Vinç',
  'mobil-vinc': 'Mobil Vinç',
  'hiyap-vinc': 'Hiyap Vinç',
}

const markalariHesapla = async (): Promise<TMarka[]> => {
  const harita = new Map<string, TMarka>()

  const ekle = (markaAdi: string, mensei: string, urun: TMarkaUrunu) => {
    const mevcut = harita.get(markaAdi)
    if (mevcut) {
      mevcut.urunler.push(urun)
      if (!mevcut.mensei && mensei) mevcut.mensei = mensei
    } else {
      harita.set(markaAdi, {
        marka: markaAdi,
        handle: markaSlug(markaAdi),
        mensei,
        urunler: [urun],
      })
    }
  }

  // Sepetli vinç ürünleri
  const sepetli = await getSepetliVincListings()
  for (const u of sepetli) {
    ekle(u.marka, '', {
      id: u.id,
      kategoriHandle: 'sepetli-vinc',
      kategoriAdi: KATEGORI_ADLARI['sepetli-vinc'],
      model: u.model,
      href: `/sepetli-vinc/${u.handle}`,
      ozet: `Çalışma yüksekliği ${u.calismaYuksekligi.toLocaleString('tr-TR')} m`,
      tip: u.kategori,
      featuredImage: u.featuredImage,
    })
  }

  // Diğer kategoriler
  const listeler = await getTumKategoriListeleri()
  for (const liste of listeler) {
    for (const u of liste.urunler) {
      ekle(u.marka, u.mensei, {
        id: u.id,
        kategoriHandle: liste.handle,
        kategoriAdi: KATEGORI_ADLARI[liste.handle] ?? liste.baslik,
        model: u.model,
        href: `/${liste.handle}/${u.handle}`,
        ozet: u.specs[0] ? `${u.specs[0].etiket} ${u.specs[0].deger}` : u.tip,
        tip: u.tip,
        featuredImage: u.featuredImage,
      })
    }
  }

  // Sepetli marka künyeleriyle zenginleştir
  const kunyeler = await getSepetliVincMarkalari()
  for (const k of kunyeler) {
    const m = harita.get(k.marka)
    if (m) {
      m.mensei = k.mensei
      m.urunGrubu = k.urunGrubu
      m.seriler = k.seriler
      m.not = k.not
    }
  }

  return Array.from(harita.values()).sort((a, b) => a.marka.localeCompare(b.marka, 'tr'))
}

export async function getMarkalar(): Promise<TMarka[]> {
  return markalariHesapla()
}

export async function getMarkaByHandle(handle: string): Promise<TMarka | undefined> {
  const markalar = await markalariHesapla()
  return markalar.find((m) => m.handle === handle)
}
