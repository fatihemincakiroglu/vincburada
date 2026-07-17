// Vinç arama formu — ortak seçenekler (masaüstü + mobil)

export type TOption = { value: string; label: string }

// A) İŞ TÜRÜ ODAKLI --------------------------------------------------------
// Müşteri işini söyler; form doğru kategoriye yönlendirir.
export const isTuruOptions: TOption[] = [
  { value: '', label: 'Lütfen seçiniz' },
  { value: 'yuk', label: 'Yük kaldıracağım' },
  { value: 'personel', label: 'Yüksekte personel çalışacak' },
  { value: 'santiye', label: 'Uzun süreli şantiye kurulumu' },
  { value: 'tasima', label: 'Taşıma + kaldırma bir arada' },
  { value: 'daralan', label: 'Dar alan / iç mekân işi' },
]

// İş türü -> hedef kategori sayfası
export const isTuruHedef: Record<string, string> = {
  yuk: '/mobil-vinc',
  personel: '/sepetli-vinc',
  santiye: '/kule-vinc',
  tasima: '/hiyap-vinc',
  daralan: '/mini-vinc',
}

// İş türüne göre ikinci alan: tonaj mı yükseklik mi?
export const isTuruIkinciAlan: Record<string, 'tonaj' | 'yukseklik'> = {
  yuk: 'tonaj',
  personel: 'yukseklik',
  santiye: 'tonaj',
  tasima: 'tonaj',
  daralan: 'yukseklik',
}

export const tonajOptions: TOption[] = [
  { value: '', label: 'Fark etmez' },
  { value: '0-20', label: '20 tona kadar' },
  { value: '20-50', label: '20 – 50 ton' },
  { value: '50-100', label: '50 – 100 ton' },
  { value: '100+', label: '100 ton üzeri' },
]

export const yukseklikOptions: TOption[] = [
  { value: '', label: 'Fark etmez' },
  { value: '0-15', label: '15 metreye kadar' },
  { value: '15-30', label: '15 – 30 metre' },
  { value: '30+', label: '30 metre üzeri' },
]

// B) VİNÇ TİPİ ODAKLI ------------------------------------------------------
export const vincTipiOptions: TOption[] = [
  { value: '', label: 'Vinç tipi seçiniz' },
  { value: '/vinc', label: 'Vinç (Genel)' },
  { value: '/sepetli-vinc', label: 'Sepetli Vinç' },
  { value: '/kule-vinc', label: 'Kule Vinç' },
  { value: '/mobil-vinc', label: 'Mobil Vinç' },
  { value: '/hiyap-vinc', label: 'Hiyap Vinç' },
  { value: '/elektrikli-vinc', label: 'Elektrikli Vinç' },
  { value: '/mini-vinc', label: 'Mini Vinç' },
]

// Yükseklik aralığı -> sepetli sayfasının okuduğu height_min/height_max
export const yukseklikToParams = (aralik: string): Record<string, string> => {
  switch (aralik) {
    case '0-15':
      return { height_max: '15' }
    case '15-30':
      return { height_min: '15', height_max: '30' }
    case '30+':
      return { height_min: '30' }
    default:
      return {}
  }
}
