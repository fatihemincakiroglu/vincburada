import galeri1 from '@/images/vinc/galeri-1.webp'
import galeri10 from '@/images/vinc/galeri-10.webp'
import galeri2 from '@/images/vinc/galeri-2.webp'
import galeri23 from '@/images/vinc/galeri-23.webp'
import galeri25 from '@/images/vinc/galeri-25.webp'
import galeri28 from '@/images/vinc/galeri-28.webp'
import galeri5 from '@/images/vinc/galeri-5.webp'
import galeri56 from '@/images/vinc/galeri-56.webp'
import galeri6 from '@/images/vinc/galeri-6.webp'
import galeri8 from '@/images/vinc/galeri-8.webp'
import galeri9 from '@/images/vinc/galeri-9.webp'
import galeriWa from '@/images/vinc/galeri-wa.webp'
import zlZrt400 from '@/images/vinc/zoomlion/zrt400v452.webp'
import zlZrt600 from '@/images/vinc/zoomlion/zrt600v552-1.webp'
import zlZrt850 from '@/images/vinc/zoomlion/zrt850v552-1.webp'
import zlZrt1100 from '@/images/vinc/zoomlion/zrt1100v552.webp'
import zlZrt1300 from '@/images/vinc/zoomlion/zrt1300v552.webp'
import zlZct600 from '@/images/vinc/zoomlion/zct600v552.webp'
import zlZct1000 from '@/images/vinc/zoomlion/zct1000v552-1.webp'
import zlZct1500 from '@/images/vinc/zoomlion/zct1500v653.webp'
import zlZct3000 from '@/images/vinc/zoomlion/zct3000v853.webp'
import zlZcc850 from '@/images/vinc/zoomlion/zcc850v-1e5.webp'
import zlZcc1000 from '@/images/vinc/zoomlion/zcc1000v-1e5.webp'
import zlZcc1500 from '@/images/vinc/zoomlion/zcc1500v-1e5.webp'
import zlZcc2200 from '@/images/vinc/zoomlion/zcc2200ve5.webp'
import zlZcc3500 from '@/images/vinc/zoomlion/zcc3500v-2e5.webp'
import zlZcc4000 from '@/images/vinc/zoomlion/zcc4000ve5.webp'
import zlZcc7200 from '@/images/vinc/zoomlion/zcc7200e5.webp'
import zlZcc9800 from '@/images/vinc/zoomlion/zcc9800we5.webp'
import zlZat1200 from '@/images/vinc/zoomlion/zat1200v753e.webp'
import zlZat1600 from '@/images/vinc/zoomlion/zat1600v853e.webp'
import zlWaKapak from '@/images/vinc/zoomlion/wa-kapak.webp'
import zlWaSaha from '@/images/vinc/zoomlion/wa-saha.webp'
import zlWaYakin from '@/images/vinc/zoomlion/wa-yakin.webp'
import jkCdh3b from '@/images/vinc/jekko/spx1280-cdh3b.webp'
import jkCl3 from '@/images/vinc/jekko/spx1280-cl3.webp'
import jkYan from '@/images/vinc/jekko/spx1280-yan.webp'
import { StaticImageData } from 'next/image'

// ---------------------------------------------------------------------------
// KATEGORİ ÜRÜN LİSTELERİ
// Kaynak: sepetli_vinc_filtre_taksonomisi (1).xlsx
// Not: Model ve teknik değerler, üretici genel katalog verilerine dayanan
// yaklaşık referans bilgilerdir.
// Görseller şimdilik genel galeri fotoğraflarından atanmıştır; model bazlı
// fotoğraflar hazır olduğunda gorselSec ataması güncellenebilir.
// ---------------------------------------------------------------------------

export type TKategoriUrun = {
  id: string
  marka: string
  model: string
  mensei: string
  tip: string
  specs: { etiket: string; deger: string }[]
  not: string
  handle: string
  featuredImage: StaticImageData
  galleryImgs: StaticImageData[]
}

type TKategoriUrunHam = Omit<TKategoriUrun, 'handle' | 'featuredImage' | 'galleryImgs'> & {
  ozelGorsel?: StaticImageData
}

export type TKategoriUrunListesi = {
  handle: string
  baslik: string
  aciklama: string
  dipnot: string
  urunler: TKategoriUrun[]
}

const tumGorseller = [
  galeri1,
  galeri2,
  galeri5,
  galeri6,
  galeri8,
  galeri9,
  galeri10,
  galeri23,
  galeri25,
  galeri28,
  galeri56,
  galeriWa,
]

const trSlug = (metin: string) =>
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

const zenginlestir = (urunler: TKategoriUrunHam[]): TKategoriUrun[] =>
  urunler.map(({ ozelGorsel, ...u }, i) => {
    const n = tumGorseller.length
    return {
      ...u,
      handle: trSlug(`${u.marka} ${u.model}`),
      featuredImage: ozelGorsel ?? tumGorseller[i % n],
      galleryImgs: ozelGorsel
        ? [ozelGorsel, tumGorseller[i % n], tumGorseller[(i + 1) % n], tumGorseller[(i + 2) % n]]
        : [tumGorseller[i % n], tumGorseller[(i + 1) % n], tumGorseller[(i + 2) % n], tumGorseller[(i + 3) % n]],
    }
  })

const DIPNOT =
  'Model ve teknik değerler, üretici genel katalog verilerine dayanan yaklaşık referans bilgilerdir; kiralama öncesi güncel teknik döküman ile teyit edilir.'

// KULE VİNÇ ------------------------------------------------------------------

const kuleVincUrunleri: TKategoriUrunHam[] = [
  {
    id: 'kule://1',
    marka: 'Potain',
    model: 'MDT 219 J10',
    mensei: 'Fransa',
    tip: 'Topless',
    specs: [
      { etiket: 'Maks. Kapasite', deger: '10 ton' },
      { etiket: 'Bom Uzunluğu', deger: '60 m' },
      { etiket: 'Uç Kapasitesi', deger: '1,3 ton' },
      { etiket: 'Kurulum Yüksekliği', deger: '55 m' },
    ],
    not: 'Yüksek katlı konut/ticari projeler',
  },
  {
    id: 'kule://2',
    marka: 'Potain',
    model: 'Igo T 85 A',
    mensei: 'Fransa',
    tip: 'Hızlı Kurulum',
    specs: [
      { etiket: 'Maks. Kapasite', deger: '4 ton' },
      { etiket: 'Bom Uzunluğu', deger: '45 m' },
      { etiket: 'Uç Kapasitesi', deger: '1 ton' },
      { etiket: 'Kurulum Yüksekliği', deger: '27,9 m' },
    ],
    not: 'Küçük-orta ölçekli şantiye, hızlı montaj',
  },
  {
    id: 'kule://3',
    marka: 'Liebherr',
    model: '280 EC-H 12 Litronic',
    mensei: 'Almanya',
    tip: 'Flat-Top',
    specs: [
      { etiket: 'Maks. Kapasite', deger: '12 ton' },
      { etiket: 'Bom Uzunluğu', deger: '65 m' },
      { etiket: 'Uç Kapasitesi', deger: '2,5 ton' },
    ],
    not: 'Yüksek yapı, büyük ölçekli proje',
  },
  {
    id: 'kule://4',
    marka: 'Liebherr',
    model: '132 EC-H 8',
    mensei: 'Almanya',
    tip: 'Flat-Top',
    specs: [
      { etiket: 'Maks. Kapasite', deger: '8 ton' },
      { etiket: 'Bom Uzunluğu', deger: '55 m' },
      { etiket: 'Uç Kapasitesi', deger: '1,85 ton' },
    ],
    not: 'Orta ölçekli konut projeleri',
  },
  {
    id: 'kule://5',
    marka: 'Comansa',
    model: '21LC290',
    mensei: 'İspanya',
    tip: 'Flat-Top',
    specs: [
      { etiket: 'Maks. Kapasite', deger: '12 ton' },
      { etiket: 'Bom Uzunluğu', deger: '65 m' },
      { etiket: 'Uç Kapasitesi', deger: '2,3 ton' },
    ],
    not: 'Büyük ölçekli, modüler kurulum',
  },
  {
    id: 'kule://6',
    marka: 'Comansa',
    model: 'LC1130',
    mensei: 'İspanya',
    tip: 'Luffing',
    specs: [
      { etiket: 'Maks. Kapasite', deger: '20 ton' },
      { etiket: 'Bom Uzunluğu', deger: '50 m' },
    ],
    not: 'Dar şehir merkezi, komşu bina kısıtı',
  },
  {
    id: 'kule://7',
    marka: 'Wolffkran',
    model: '6031 clear',
    mensei: 'Almanya',
    tip: 'Flat-Top',
    specs: [
      { etiket: 'Maks. Kapasite', deger: '12 ton' },
      { etiket: 'Bom Uzunluğu', deger: '60 m' },
    ],
    not: 'Şehir içi büyük projeler',
  },
  {
    id: 'kule://8',
    marka: 'Raimondi',
    model: 'LR213',
    mensei: 'İtalya',
    tip: 'Flat-Top',
    specs: [
      { etiket: 'Maks. Kapasite', deger: '10 ton' },
      { etiket: 'Bom Uzunluğu', deger: '65 m' },
    ],
    not: 'Orta-büyük ölçekli inşaat',
  },
  {
    id: 'kule://9',
    marka: 'Jaso',
    model: 'J280PA',
    mensei: 'İspanya',
    tip: 'Flat-Top',
    specs: [
      { etiket: 'Maks. Kapasite', deger: '12 ton' },
      { etiket: 'Bom Uzunluğu', deger: '65 m' },
    ],
    not: 'Yüksek kapasiteli konut/altyapı',
  },
  {
    id: 'kule://10',
    marka: 'XCMG',
    model: 'XGT7520-16',
    mensei: 'Çin',
    tip: 'Flat-Top',
    specs: [
      { etiket: 'Maks. Kapasite', deger: '16 ton' },
      { etiket: 'Bom Uzunluğu', deger: '75 m' },
    ],
    not: 'Ekonomik segment, geniş bom',
  },
  {
    id: 'kule://11',
    marka: 'Zoomlion',
    model: 'T7020-16',
    mensei: 'Çin',
    tip: 'Flat-Top',
    specs: [
      { etiket: 'Maks. Kapasite', deger: '16 ton' },
      { etiket: 'Bom Uzunluğu', deger: '70 m' },
    ],
    not: 'Hızla büyüyen ürün gamı',
  },
  {
    id: 'kule://12',
    marka: 'Saez',
    model: 'TL55',
    mensei: 'İspanya',
    tip: 'Luffing',
    specs: [
      { etiket: 'Maks. Kapasite', deger: '5 ton' },
      { etiket: 'Bom Uzunluğu', deger: '55 m' },
    ],
    not: 'Kısıtlı alanlarda dönüş yarıçapı avantajı',
  },
  // ZOOMLION — WA Serisi Düz Tepe (Flat-Top) Kule Vinç Kataloğu (2023)
  {
    id: 'kule://13',
    marka: 'Zoomlion',
    model: 'WA5610-6F',
    mensei: 'Çin',
    tip: 'Flat-Top',
    specs: [
      { etiket: 'Maks. Kapasite', deger: '6 ton' },
      { etiket: 'Maks. Bom', deger: '56 m' },
      { etiket: 'Uç Yük', deger: '1,0 ton' },
    ],
    not: 'WA serisi; 30 yıl hizmet ömrüne göre tasarım, EN standartlarında test',
    ozelGorsel: zlWaKapak,
  },
  {
    id: 'kule://14',
    marka: 'Zoomlion',
    model: 'WA6013-6F/8F',
    mensei: 'Çin',
    tip: 'Flat-Top',
    specs: [
      { etiket: 'Maks. Kapasite', deger: '6 / 8 ton' },
      { etiket: 'Maks. Bom', deger: '60 m' },
      { etiket: 'Uç Yük', deger: '1,3 ton' },
    ],
    not: '1,6 m mast kesiti; temelli kurulumda 45 m serbest duruş yüksekliği',
    ozelGorsel: zlWaSaha,
  },
  {
    id: 'kule://15',
    marka: 'Zoomlion',
    model: 'WA6017-8E/10E',
    mensei: 'Çin',
    tip: 'Flat-Top',
    specs: [
      { etiket: 'Maks. Kapasite', deger: '8 / 10 ton' },
      { etiket: 'Maks. Bom', deger: '60 m' },
      { etiket: 'Uç Yük', deger: '1,7 ton' },
    ],
    not: '2,0 m mast kesiti ile 60 m serbest duruş yüksekliği',
    ozelGorsel: zlWaYakin,
  },
  {
    id: 'kule://16',
    marka: 'Zoomlion',
    model: 'WA6515-8E/10E',
    mensei: 'Çin',
    tip: 'Flat-Top',
    specs: [
      { etiket: 'Maks. Kapasite', deger: '8 / 10 ton' },
      { etiket: 'Maks. Bom', deger: '65 m' },
      { etiket: 'Uç Yük', deger: '1,5 ton' },
    ],
    not: 'Uzaktan kumanda sistemi ve kule vinç bağlantısı (telematik) desteği',
    ozelGorsel: zlWaKapak,
  },
  {
    id: 'kule://17',
    marka: 'Zoomlion',
    model: 'WA7015-10E',
    mensei: 'Çin',
    tip: 'Flat-Top',
    specs: [
      { etiket: 'Maks. Kapasite', deger: '10 ton' },
      { etiket: 'Maks. Bom', deger: '70 m' },
      { etiket: 'Uç Yük', deger: '1,5 ton' },
    ],
    not: 'Aşırı yük/çarpışma önleme ve tayfun karşıtı güvenlik donanımları',
    ozelGorsel: zlWaSaha,
  },
  {
    id: 'kule://18',
    marka: 'Zoomlion',
    model: 'WA7025-10E/12E',
    mensei: 'Çin',
    tip: 'Flat-Top',
    specs: [
      { etiket: 'Maks. Kapasite', deger: '10 / 12 ton' },
      { etiket: 'Maks. Bom', deger: '70 m' },
      { etiket: 'Uç Yük', deger: '2,5 ton' },
    ],
    not: 'İnvertör kontrolle 5 mm/s altı hassas yerleştirme hızı',
    ozelGorsel: zlWaYakin,
  },
  {
    id: 'kule://19',
    marka: 'Zoomlion',
    model: 'WA7527-16D/20D',
    mensei: 'Çin',
    tip: 'Flat-Top',
    specs: [
      { etiket: 'Maks. Kapasite', deger: '16 / 20 ton' },
      { etiket: 'Maks. Bom', deger: '75 m' },
      { etiket: 'Uç Yük', deger: '2,7 ton' },
    ],
    not: 'Ağır sınıf düz tepe; 2,5 x 1,6 m klimalı ergonomik kabin',
    ozelGorsel: zlWaKapak,
  },
  {
    id: 'kule://20',
    marka: 'Zoomlion',
    model: 'WA350-16T/20T',
    mensei: 'Çin',
    tip: 'Flat-Top',
    specs: [
      { etiket: 'Maks. Kapasite', deger: '16 / 20 ton' },
      { etiket: 'Maks. Bom', deger: '80 m' },
      { etiket: 'Uç Yük', deger: '2,2 ton' },
    ],
    not: 'Serinin amiral gemisi; 80 m bom ve 62 m serbest duruş yüksekliği',
    ozelGorsel: zlWaSaha,
  },
]

// ELEKTRİKLİ VİNÇ -------------------------------------------------------------

const elektrikliVincUrunleri: TKategoriUrunHam[] = [
  {
    id: 'elektrikli://1',
    marka: 'Demag (Konecranes)',
    model: 'DC-Pro 5-1000',
    mensei: 'Almanya',
    tip: 'Zincirli',
    specs: [
      { etiket: 'Kapasite', deger: '1 ton' },
      { etiket: 'Kaldırma Yüksekliği', deger: '6 m' },
      { etiket: 'Motor Gücü', deger: '0,6 kW' },
      { etiket: 'Kullanım', deger: 'Atölye, montaj hattı' },
    ],
    not: 'Kompakt, hassas konumlandırma',
  },
  {
    id: 'elektrikli://2',
    marka: 'Demag (Konecranes)',
    model: 'DR-Pro 10',
    mensei: 'Almanya',
    tip: 'Halatlı',
    specs: [
      { etiket: 'Kapasite', deger: '10 ton' },
      { etiket: 'Kaldırma Yüksekliği', deger: '12 m' },
      { etiket: 'Motor Gücü', deger: '7,5 kW' },
      { etiket: 'Kullanım', deger: 'Fabrika, depo' },
    ],
    not: 'Yüksek verimli motor grubu',
  },
  {
    id: 'elektrikli://3',
    marka: 'Konecranes',
    model: 'CXT Halatlı Vinç',
    mensei: 'Finlandiya',
    tip: 'Halatlı',
    specs: [
      { etiket: 'Kapasite', deger: '20 ton' },
      { etiket: 'Kaldırma Yüksekliği', deger: '18 m' },
      { etiket: 'Motor Gücü', deger: '15 kW' },
      { etiket: 'Kullanım', deger: 'Ağır sanayi, çelik yapı' },
    ],
    not: 'Modüler, IoT izleme (TRUCONNECT)',
  },
  {
    id: 'elektrikli://4',
    marka: 'STAHL CraneSystems',
    model: 'AS7',
    mensei: 'Almanya',
    tip: 'Halatlı',
    specs: [
      { etiket: 'Kapasite', deger: '32 ton' },
      { etiket: 'Kaldırma Yüksekliği', deger: '20 m' },
      { etiket: 'Motor Gücü', deger: '22 kW' },
      { etiket: 'Kullanım', deger: 'Ağır sanayi, döküm' },
    ],
    not: 'Zorlu ortam koşullarına dayanıklı',
  },
  {
    id: 'elektrikli://5',
    marka: 'R&M Materials Handling',
    model: 'Ovation',
    mensei: 'ABD',
    tip: 'Zincirli',
    specs: [
      { etiket: 'Kapasite', deger: '2 ton' },
      { etiket: 'Kaldırma Yüksekliği', deger: '8 m' },
      { etiket: 'Motor Gücü', deger: '1,1 kW' },
      { etiket: 'Kullanım', deger: 'Otomotiv, hafif imalat' },
    ],
    not: 'Değişken hız kontrolü',
  },
  {
    id: 'elektrikli://6',
    marka: 'Street Crane',
    model: 'SX Halatlı Vinç',
    mensei: 'İngiltere',
    tip: 'Halatlı',
    specs: [
      { etiket: 'Kapasite', deger: '5 ton' },
      { etiket: 'Kaldırma Yüksekliği', deger: '10 m' },
      { etiket: 'Motor Gücü', deger: '4 kW' },
      { etiket: 'Kullanım', deger: 'Genel imalat' },
    ],
    not: 'Kısa yapı yüksekliği',
  },
  {
    id: 'elektrikli://7',
    marka: 'Kito',
    model: 'ER2',
    mensei: 'Japonya',
    tip: 'Zincirli',
    specs: [
      { etiket: 'Kapasite', deger: '2 ton' },
      { etiket: 'Kaldırma Yüksekliği', deger: '6 m' },
      { etiket: 'Motor Gücü', deger: '1,5 kW' },
      { etiket: 'Kullanım', deger: 'Bakım, hafif kaldırma' },
    ],
    not: 'Sessiz çalışma, kompakt gövde',
  },
  {
    id: 'elektrikli://8',
    marka: 'Yale',
    model: 'VS Serisi',
    mensei: 'Almanya',
    tip: 'Zincirli',
    specs: [
      { etiket: 'Kapasite', deger: '1 ton' },
      { etiket: 'Kaldırma Yüksekliği', deger: '6 m' },
      { etiket: 'Motor Gücü', deger: '0,75 kW' },
      { etiket: 'Kullanım', deger: 'Depo, atölye' },
    ],
    not: 'Ekonomik segment',
  },
  {
    id: 'elektrikli://9',
    marka: 'ABUS Kransysteme',
    model: 'ZQ Halatlı Vinç',
    mensei: 'Almanya',
    tip: 'Halatlı',
    specs: [
      { etiket: 'Kapasite', deger: '12,5 ton' },
      { etiket: 'Kaldırma Yüksekliği', deger: '12 m' },
      { etiket: 'Motor Gücü', deger: '9 kW' },
      { etiket: 'Kullanım', deger: 'Köprülü vinç sistemleri' },
    ],
    not: 'Alüminyum köprülü vinçlerle uyumlu',
  },
  {
    id: 'elektrikli://10',
    marka: 'Vinçsan',
    model: 'VS Serisi Elektrikli Halatlı Vinç',
    mensei: 'Türkiye',
    tip: 'Halatlı',
    specs: [
      { etiket: 'Kapasite', deger: '5 ton' },
      { etiket: 'Kaldırma Yüksekliği', deger: '12 m' },
      { etiket: 'Motor Gücü', deger: '5,5 kW' },
      { etiket: 'Kullanım', deger: 'Fabrika, liman, depo' },
    ],
    not: 'Yerli üretim, hızlı servis desteği',
  },
  {
    id: 'elektrikli://11',
    marka: 'Podem',
    model: 'Elektrikli Halatlı Vinç',
    mensei: 'Bulgaristan',
    tip: 'Halatlı',
    specs: [
      { etiket: 'Kapasite', deger: '10 ton' },
      { etiket: 'Kaldırma Yüksekliği', deger: '15 m' },
      { etiket: 'Motor Gücü', deger: '11 kW' },
      { etiket: 'Kullanım', deger: 'Ağır sanayi' },
    ],
    not: "Doğu Avrupa'da yaygın kullanım",
  },
]

// MOBİL VİNÇ ------------------------------------------------------------------

const mobilVincUrunleri: TKategoriUrunHam[] = [
  {
    id: 'mobil://1',
    marka: 'Liebherr',
    model: 'LTM 1090-4.2',
    mensei: 'Almanya',
    tip: 'Tüm Arazi',
    specs: [
      { etiket: 'Maks. Kapasite', deger: '90 ton' },
      { etiket: 'Bom Uzunluğu', deger: '50 m' },
      { etiket: 'Hareket', deger: '4 dingilli, lastik tekerlekli' },
    ],
    not: 'Kompakt boyut, yüksek manevra kabiliyeti',
  },
  {
    id: 'mobil://2',
    marka: 'Liebherr',
    model: 'LTM 11200-9.1',
    mensei: 'Almanya',
    tip: 'Tüm Arazi',
    specs: [
      { etiket: 'Maks. Kapasite', deger: '1200 ton' },
      { etiket: 'Bom Uzunluğu', deger: '100 m' },
      { etiket: 'Hareket', deger: '9 dingilli, lastik tekerlekli' },
    ],
    not: 'Dünyanın en güçlü mobil vinçlerinden',
  },
  {
    id: 'mobil://3',
    marka: 'Tadano',
    model: 'GR-1000XL-3',
    mensei: 'Japonya',
    tip: 'Arazi Tipi',
    specs: [
      { etiket: 'Maks. Kapasite', deger: '90 ton' },
      { etiket: 'Hareket', deger: '4x4, büyük lastikler' },
    ],
    not: 'Şantiye içi arazi koşulları',
  },
  {
    id: 'mobil://4',
    marka: 'Tadano',
    model: 'ATF 220G-5',
    mensei: 'Japonya/Almanya',
    tip: 'Tüm Arazi',
    specs: [
      { etiket: 'Maks. Kapasite', deger: '220 ton' },
      { etiket: 'Hareket', deger: 'Çok dingilli, lastik tekerlekli' },
    ],
    not: 'Şehir içi ve karayolu taşınabilir',
  },
  {
    id: 'mobil://5',
    marka: 'Grove (Manitowoc)',
    model: 'GMK5250L',
    mensei: 'ABD',
    tip: 'Tüm Arazi',
    specs: [
      { etiket: 'Maks. Kapasite', deger: '250 ton' },
      { etiket: 'Hareket', deger: '5 dingilli, lastik tekerlekli' },
    ],
    not: 'Uzun tek parça bom',
  },
  {
    id: 'mobil://6',
    marka: 'Grove (Manitowoc)',
    model: 'GRT880',
    mensei: 'ABD',
    tip: 'Arazi Tipi',
    specs: [
      { etiket: 'Maks. Kapasite', deger: '80 ton' },
      { etiket: 'Hareket', deger: '4x4 arazi tipi' },
    ],
    not: 'Şantiye içi kısa mesafe taşıma',
  },
  {
    id: 'mobil://7',
    marka: 'XCMG',
    model: 'XCT25',
    mensei: 'Çin',
    tip: 'Kamyon Üstü',
    specs: [
      { etiket: 'Maks. Kapasite', deger: '25 ton' },
      { etiket: 'Hareket', deger: 'Kamyon şasisi üstü' },
    ],
    not: 'Ekonomik segment, şehir içi kullanım',
  },
  {
    id: 'mobil://8',
    marka: 'XCMG',
    model: 'QAY1000',
    mensei: 'Çin',
    tip: 'Tüm Arazi',
    specs: [
      { etiket: 'Maks. Kapasite', deger: '1000 ton' },
      { etiket: 'Hareket', deger: 'Çok dingilli, lastik tekerlekli' },
    ],
    not: 'Ağır sanayi ve enerji projeleri',
  },
  {
    id: 'mobil://9',
    marka: 'Zoomlion',
    model: 'ZAT2600H',
    mensei: 'Çin',
    tip: 'Tüm Arazi',
    specs: [
      { etiket: 'Maks. Kapasite', deger: '260 ton' },
      { etiket: 'Hareket', deger: 'Çok dingilli, lastik tekerlekli' },
    ],
    not: 'Rüzgar enerjisi kurulumlarında yaygın',
  },
  {
    id: 'mobil://10',
    marka: 'Sany',
    model: 'STC500',
    mensei: 'Çin',
    tip: 'Kamyon Üstü',
    specs: [
      { etiket: 'Maks. Kapasite', deger: '50 ton' },
      { etiket: 'Hareket', deger: 'Kamyon şasisi üstü' },
    ],
    not: 'Hızlı büyüyen Çinli üretici',
  },
  {
    id: 'mobil://11',
    marka: 'Kato Works',
    model: 'SL-1300Rk',
    mensei: 'Japonya',
    tip: 'Arazi Tipi',
    specs: [
      { etiket: 'Maks. Kapasite', deger: '130 ton' },
      { etiket: 'Hareket', deger: '4x4 arazi tipi' },
    ],
    not: 'Kompakt gövde, yüksek kapasite',
  },
  {
    id: 'mobil://12',
    marka: 'Sennebogen',
    model: '683',
    mensei: 'Almanya',
    tip: 'Paletli',
    specs: [
      { etiket: 'Maks. Kapasite', deger: '60 ton' },
      { etiket: 'Hareket', deger: 'Paletli' },
    ],
    not: 'Sabit sahalarda uzun süreli çalışma',
  },
  // ZOOMLION — Genel Vinç Kataloğu (2024)
  {
    id: 'mobil://13',
    marka: 'Zoomlion',
    model: 'ZRT400V452',
    mensei: 'Çin',
    tip: 'Arazi Tipi',
    specs: [
      { etiket: 'Maks. Kapasite', deger: '40 ton' },
      { etiket: 'Maks. Moment', deger: '1305 kN.m' },
      { etiket: 'Bom Uzunluğu', deger: '33 m' },
    ],
    not: '2,69 m araç genişliği ve çoklu direksiyon moduyla dar arazilere uygun',
    ozelGorsel: zlZrt400,
  },
  {
    id: 'mobil://14',
    marka: 'Zoomlion',
    model: 'ZRT600V552.1',
    mensei: 'Çin',
    tip: 'Arazi Tipi',
    specs: [
      { etiket: 'Maks. Kapasite', deger: '60 ton' },
      { etiket: 'Maks. Moment', deger: '2337 kN.m' },
      { etiket: 'Bom Uzunluğu', deger: '45 m' },
    ],
    not: 'Tek kademeli H tipi destek ayaklar (7,5 x 7,4 m), Euro V emisyon uyumlu',
    ozelGorsel: zlZrt600,
  },
  {
    id: 'mobil://15',
    marka: 'Zoomlion',
    model: 'ZRT850V552.1',
    mensei: 'Çin',
    tip: 'Arazi Tipi',
    specs: [
      { etiket: 'Maks. Kapasite', deger: '85 ton' },
      { etiket: 'Maks. Moment', deger: '2824 kN.m' },
      { etiket: 'Bom Uzunluğu', deger: '47 m' },
    ],
    not: 'Dört tekerlekten çekiş ve çok modlu direksiyonla üstün arazi performansı',
    ozelGorsel: zlZrt850,
  },
  {
    id: 'mobil://16',
    marka: 'Zoomlion',
    model: 'ZRT1100V552',
    mensei: 'Çin',
    tip: 'Arazi Tipi',
    specs: [
      { etiket: 'Maks. Kapasite', deger: '110 ton' },
      { etiket: 'Maks. Moment', deger: '3332 kN.m' },
      { etiket: 'Bom Uzunluğu', deger: '49 m' },
    ],
    not: '8 x 8 m süper geniş destek ayak açıklığıyla yüksek stabilite',
    ozelGorsel: zlZrt1100,
  },
  {
    id: 'mobil://17',
    marka: 'Zoomlion',
    model: 'ZRT1300V552',
    mensei: 'Çin',
    tip: 'Arazi Tipi',
    specs: [
      { etiket: 'Maks. Kapasite', deger: '130 ton' },
      { etiket: 'Maks. Moment', deger: '3760 kN.m' },
      { etiket: 'Bom Uzunluğu', deger: '50 m' },
    ],
    not: 'Sınıfının en güçlü U-kesitli ana bomu ve yeni nesil veri paneli',
    ozelGorsel: zlZrt1300,
  },
  {
    id: 'mobil://18',
    marka: 'Zoomlion',
    model: 'ZCT600V552',
    mensei: 'Çin',
    tip: 'Paletli',
    specs: [
      { etiket: 'Sınıf', deger: '60 ton sınıfı' },
      { etiket: 'Bom Uzunluğu', deger: '46 m' },
      { etiket: 'Jib Uzunluğu', deger: '16 m' },
    ],
    not: 'Teleskopik bomlu paletli; 3,3 m taşıma genişliğiyle sökümsüz nakliye',
    ozelGorsel: zlZct600,
  },
  {
    id: 'mobil://19',
    marka: 'Zoomlion',
    model: 'ZCT1000V552.1',
    mensei: 'Çin',
    tip: 'Paletli',
    specs: [
      { etiket: 'Sınıf', deger: '100 ton sınıfı' },
      { etiket: 'Bom Uzunluğu', deger: '47 m' },
      { etiket: 'Jib Uzunluğu', deger: '14,2 m' },
    ],
    not: 'Teleskopik bomlu paletli; %45 tırmanma yeteneği, 3087 kN.m moment',
    ozelGorsel: zlZct1000,
  },
  {
    id: 'mobil://20',
    marka: 'Zoomlion',
    model: 'ZCT1500V653',
    mensei: 'Çin',
    tip: 'Paletli',
    specs: [
      { etiket: 'Sınıf', deger: '150 ton sınıfı' },
      { etiket: 'Bom Uzunluğu', deger: '65 m' },
      { etiket: 'Jib Uzunluğu', deger: '17,5 m' },
    ],
    not: 'Teleskopik bomlu paletli; rüzgar santrali montajının ideal yardımcı vinci',
    ozelGorsel: zlZct1500,
  },
  {
    id: 'mobil://21',
    marka: 'Zoomlion',
    model: 'ZCT3000V853',
    mensei: 'Çin',
    tip: 'Paletli',
    specs: [
      { etiket: 'Sınıf', deger: '300 ton sınıfı' },
      { etiket: 'Bom Uzunluğu', deger: '90 m' },
      { etiket: 'Jib Uzunluğu', deger: '20 / 28 / 37,5 m (ops.)' },
    ],
    not: 'Teleskopik bomlu paletli; kendi başına sökülüp monte edilebilir',
    ozelGorsel: zlZct3000,
  },
  {
    id: 'mobil://22',
    marka: 'Zoomlion',
    model: 'ZCC850V-1E5',
    mensei: 'Çin',
    tip: 'Paletli',
    specs: [
      { etiket: 'Sınıf', deger: '85 ton sınıfı' },
      { etiket: 'Bom Uzunluğu', deger: '13 - 61 m' },
      { etiket: 'Jib Uzunluğu', deger: '7 - 19 m' },
    ],
    not: 'Kafes bomlu paletli; uygun maliyet ve yüksek verimlilik',
    ozelGorsel: zlZcc850,
  },
  {
    id: 'mobil://23',
    marka: 'Zoomlion',
    model: 'ZCC1000V-1E5',
    mensei: 'Çin',
    tip: 'Paletli',
    specs: [
      { etiket: 'Sınıf', deger: '100 ton sınıfı' },
      { etiket: 'Bom Uzunluğu', deger: '13 - 61 m' },
      { etiket: 'Jib Uzunluğu', deger: '7 - 19 m' },
    ],
    not: 'Kafes bomlu paletli; 10,4 inç ekranlı yeni nesil operatör kabini',
    ozelGorsel: zlZcc1000,
  },
  {
    id: 'mobil://24',
    marka: 'Zoomlion',
    model: 'ZCC1500V-1E5',
    mensei: 'Çin',
    tip: 'Paletli',
    specs: [
      { etiket: 'Sınıf', deger: '150 ton sınıfı' },
      { etiket: 'Bom Uzunluğu', deger: '16 - 76 m' },
      { etiket: 'Jib Uzunluğu', deger: '13 - 31 m' },
    ],
    not: 'Kafes bomlu paletli; güçlü üretkenlik ve yüksek yatırım getirisi',
    ozelGorsel: zlZcc1500,
  },
  {
    id: 'mobil://25',
    marka: 'Zoomlion',
    model: 'ZCC2200VE5',
    mensei: 'Çin',
    tip: 'Paletli',
    specs: [
      { etiket: 'Sınıf', deger: '220 ton sınıfı' },
      { etiket: 'Bom Uzunluğu', deger: '16 - 85 m' },
      { etiket: 'Jib Uzunluğu', deger: '13 - 31 m' },
    ],
    not: 'Kafes bomlu paletli; 7 m altı dönüş yarıçapıyla şehir inşaatının kaldırma ustası',
    ozelGorsel: zlZcc2200,
  },
  {
    id: 'mobil://26',
    marka: 'Zoomlion',
    model: 'ZCC3500V-2E5',
    mensei: 'Çin',
    tip: 'Paletli',
    specs: [
      { etiket: 'Sınıf', deger: '350 ton sınıfı' },
      { etiket: 'Bom Uzunluğu', deger: '24 - 84 m' },
      { etiket: 'Kapalı Bom', deger: '24 - 60 m' },
    ],
    not: 'Kafes bomlu paletli; köprü, metro ve çelik yapı inşaatları için',
    ozelGorsel: zlZcc3500,
  },
  {
    id: 'mobil://27',
    marka: 'Zoomlion',
    model: 'ZCC4000VE5',
    mensei: 'Çin',
    tip: 'Paletli',
    specs: [
      { etiket: 'Sınıf', deger: '400 ton sınıfı' },
      { etiket: 'Ağır Bom', deger: '24-84 m (superlift: 36-96 m)' },
      { etiket: 'Hafif Bom', deger: '72-108 m (superlift: 72-126 m)' },
    ],
    not: 'Kafes bomlu paletli; 84 m bomda 11 m yarıçapta 157 ton kapasite',
    ozelGorsel: zlZcc4000,
  },
  {
    id: 'mobil://28',
    marka: 'Zoomlion',
    model: 'ZCC7200E5',
    mensei: 'Çin',
    tip: 'Paletli',
    specs: [
      { etiket: 'Sınıf', deger: '600 ton sınıfı' },
      { etiket: 'Ağır Bom', deger: '24-84 / 36-120 m' },
      { etiket: 'Rüzgar Konf.', deger: '114+8 m / 147+8 m' },
    ],
    not: 'Kafes bomlu paletli; rüzgar enerjisi ve süper kaldırma çalışma modu',
    ozelGorsel: zlZcc7200,
  },
  {
    id: 'mobil://29',
    marka: 'Zoomlion',
    model: 'ZCC9800WE5',
    mensei: 'Çin',
    tip: 'Paletli',
    specs: [
      { etiket: 'Maks. Moment', deger: '107.800 kN.m' },
      { etiket: 'Ağır Bom', deger: '39 - 141 m' },
      { etiket: 'Rüzgar Konf.', deger: '171+7 m' },
    ],
    not: 'Kafes bomlu paletli; 2,3-3 MW rüzgar türbini kaldırmanın kralı',
    ozelGorsel: zlZcc9800,
  },
  {
    id: 'mobil://30',
    marka: 'Zoomlion',
    model: 'ZAT1200V753E',
    mensei: 'Çin',
    tip: 'Tüm Arazi',
    specs: [
      { etiket: 'Maks. Kapasite', deger: '120 ton' },
      { etiket: 'Maks. Moment', deger: '3140 kN.m' },
      { etiket: 'Bom Uzunluğu', deger: '12,5 - 66 m' },
    ],
    not: 'Kompakt 4 dingilli AT; jib ile 94 m kaldırma yüksekliği, Euro V motor',
    ozelGorsel: zlZat1200,
  },
  {
    id: 'mobil://31',
    marka: 'Zoomlion',
    model: 'ZAT1600V853E',
    mensei: 'Çin',
    tip: 'Tüm Arazi',
    specs: [
      { etiket: 'Maks. Kapasite', deger: '160 ton' },
      { etiket: 'Maks. Moment', deger: '5008 kN.m' },
      { etiket: 'Bom Uzunluğu', deger: '14,1 - 85 m' },
    ],
    not: 'Maliyet-etkin 5 dingilli AT; jib ile 113 m kaldırma yüksekliği',
    ozelGorsel: zlZat1600,
  },
]

// HİYAP VİNÇ ------------------------------------------------------------------

// MİNİ VİNÇ (ÖRÜMCEK VİNÇ) -----------------------------------------------------

const miniVincUrunleri: TKategoriUrunHam[] = [
  // JEKKO — SPX1280 Teknik Döküman (REV3.0, 2025, EN 13000:2014)
  {
    id: 'mini://1',
    marka: 'Jekko',
    model: 'SPX1280 CDH-3B',
    mensei: 'İtalya',
    tip: 'Mini Paletli (Örümcek)',
    specs: [
      { etiket: 'Maks. Kapasite', deger: '8.000 kg' },
      { etiket: 'Bom Uzunluğu', deger: '4,9 - 17,7 m' },
      { etiket: 'Güç', deger: 'Dizel 18,5 kW (25 HP)' },
    ],
    not: '1,45 m kapalı genişlik ve 2,05 m yükseklikle kapılardan geçip 8 ton kaldırır; 360° dönüş',
    ozelGorsel: jkCdh3b,
  },
  {
    id: 'mini://2',
    marka: 'Jekko',
    model: 'SPX1280 CL-3',
    mensei: 'İtalya',
    tip: 'Mini Paletli (Örümcek)',
    specs: [
      { etiket: 'Maks. Kapasite', deger: '8.000 kg' },
      { etiket: 'Bom Uzunluğu', deger: '4,9 - 17,7 m' },
      { etiket: 'Güç', deger: 'Lityum 96V 400Ah, 20 kW' },
    ],
    not: 'Tam elektrikli, sıfır emisyon; iç mekan ve kapalı alan operasyonlarının ideali',
    ozelGorsel: jkCl3,
  },
  {
    id: 'mini://3',
    marka: 'Jekko',
    model: 'SPX1280 + JIB1502.3HX',
    mensei: 'İtalya',
    tip: 'Jib Konfigürasyonu',
    specs: [
      { etiket: 'Maks. Kanca Yüksekliği', deger: '26,7 m' },
      { etiket: 'Maks. Yarıçap', deger: '20 m' },
      { etiket: 'Jib Kapasitesi', deger: '1.500 kg' },
    ],
    not: 'Hidrolik eklemli jib (-15°/+60°); cam cephe ve çatı üstü negatif açılı montajlar için',
    ozelGorsel: jkYan,
  },
  {
    id: 'mini://4',
    marka: 'Jekko',
    model: 'SPX1280 + JIB500GR',
    mensei: 'İtalya',
    tip: 'Jib Konfigürasyonu',
    specs: [
      { etiket: 'Maks. Kanca Yüksekliği', deger: '21,2 m' },
      { etiket: 'Maks. Yarıçap', deger: '18,1 m' },
      { etiket: 'Manipülatör Kapasitesi', deger: '500 kg' },
    ],
    not: 'Cam ve boru tutucu (grabber) manipülatörlü konfigürasyon; 360° döner kafa ile hassas cam montajı',
    ozelGorsel: jkYan,
  },
]

const hiyapVincUrunleri: TKategoriUrunHam[] = [
  {
    id: 'hiyap://1',
    marka: 'HIAB',
    model: 'X-HiPro 232',
    mensei: 'Finlandiya/İsveç',
    tip: 'Kamyonet Üstü',
    specs: [
      { etiket: 'Kaldırma Momenti', deger: '21 tm' },
      { etiket: 'Yatay Erişim', deger: '16,4 m' },
    ],
    not: 'Yüksek hassasiyetli hareket kontrolü (HiPro)',
  },
  {
    id: 'hiyap://2',
    marka: 'HIAB',
    model: 'XS 244',
    mensei: 'Finlandiya/İsveç',
    tip: 'Kamyon Üstü',
    specs: [
      { etiket: 'Kaldırma Momenti', deger: '24 tm' },
      { etiket: 'Yatay Erişim', deger: '17 m' },
    ],
    not: 'Orta-ağır sınıf yükleme vinci',
  },
  {
    id: 'hiyap://3',
    marka: 'Palfinger',
    model: 'PK 23001',
    mensei: 'Avusturya',
    tip: 'Kamyon Üstü',
    specs: [
      { etiket: 'Kaldırma Momenti', deger: '23 tm' },
      { etiket: 'Yatay Erişim', deger: '15 m' },
    ],
    not: 'Yaygın kullanılan orta sınıf model',
  },
  {
    id: 'hiyap://4',
    marka: 'Palfinger',
    model: 'PK 96002',
    mensei: 'Avusturya',
    tip: 'Ağır Tonaj',
    specs: [
      { etiket: 'Kaldırma Momenti', deger: '90 tm' },
      { etiket: 'Yatay Erişim', deger: '26 m' },
    ],
    not: 'Ağır sanayi ve enerji sektörü',
  },
  {
    id: 'hiyap://5',
    marka: 'Fassi',
    model: 'F235A',
    mensei: 'İtalya',
    tip: 'Kamyon Üstü',
    specs: [
      { etiket: 'Kaldırma Momenti', deger: '22,9 tm' },
      { etiket: 'Yatay Erişim', deger: '15,8 m' },
    ],
    not: 'Kompakt katlanma, geniş erişim',
  },
  {
    id: 'hiyap://6',
    marka: 'Fassi',
    model: 'F1150',
    mensei: 'İtalya',
    tip: 'Ağır Tonaj',
    specs: [
      { etiket: 'Kaldırma Momenti', deger: '108 tm' },
      { etiket: 'Yatay Erişim', deger: '30 m' },
    ],
    not: 'Büyük ölçekli endüstriyel yükleme',
  },
  {
    id: 'hiyap://7',
    marka: 'Effer',
    model: '235',
    mensei: 'İtalya',
    tip: 'Kamyon Üstü',
    specs: [
      { etiket: 'Kaldırma Momenti', deger: '21,5 tm' },
      { etiket: 'Yatay Erişim', deger: '15,5 m' },
    ],
    not: 'Dengeli performans/fiyat oranı',
  },
  {
    id: 'hiyap://8',
    marka: 'PM Group',
    model: 'PM 23028',
    mensei: 'İtalya',
    tip: 'Kamyon Üstü',
    specs: [
      { etiket: 'Kaldırma Momenti', deger: '22,9 tm' },
      { etiket: 'Yatay Erişim', deger: '16 m' },
    ],
    not: 'Geniş aksesuar/ataşman uyumu',
  },
  {
    id: 'hiyap://9',
    marka: 'Hyva',
    model: 'HB 210',
    mensei: 'Hollanda',
    tip: 'Kamyon Üstü',
    specs: [
      { etiket: 'Kaldırma Momenti', deger: '20 tm' },
      { etiket: 'Yatay Erişim', deger: '14,5 m' },
    ],
    not: 'Damperli araç segmentinde de yaygın',
  },
  {
    id: 'hiyap://10',
    marka: 'Atlas',
    model: '165.2',
    mensei: 'Almanya',
    tip: 'Kamyonet Üstü',
    specs: [
      { etiket: 'Kaldırma Momenti', deger: '16 tm' },
      { etiket: 'Yatay Erişim', deger: '12 m' },
    ],
    not: 'Hafif ticari araç segmenti',
  },
  {
    id: 'hiyap://11',
    marka: 'HMF',
    model: '2220 K',
    mensei: 'Danimarka',
    tip: 'Kamyon Üstü',
    specs: [
      { etiket: 'Kaldırma Momenti', deger: '21,5 tm' },
      { etiket: 'Yatay Erişim', deger: '15,6 m' },
    ],
    not: 'İskandinav pazarında güçlü konum',
  },
  {
    id: 'hiyap://12',
    marka: 'Cormach',
    model: '21500 E7',
    mensei: 'İtalya',
    tip: 'Kamyon Üstü',
    specs: [
      { etiket: 'Kaldırma Momenti', deger: '20,9 tm' },
      { etiket: 'Yatay Erişim', deger: '15 m' },
    ],
    not: '7 hidrolik uzatmalı bom',
  },
]

// DIŞA AKTARIM ----------------------------------------------------------------

const listeler: Record<string, TKategoriUrunListesi> = {
  'kule-vinc': {
    handle: 'kule-vinc',
    baslik: 'Kule Vinç Modelleri',
    aciklama: 'Flat-top, luffing ve hızlı kurulum tipi kule vinç modellerini marka ve tipe göre filtreleyin.',
    dipnot: DIPNOT,
    urunler: zenginlestir(kuleVincUrunleri),
  },
  'elektrikli-vinc': {
    handle: 'elektrikli-vinc',
    baslik: 'Elektrikli Vinç Modelleri',
    aciklama: 'Zincirli ve halatlı elektrikli vinç modellerini marka ve tipe göre filtreleyin.',
    dipnot: DIPNOT,
    urunler: zenginlestir(elektrikliVincUrunleri),
  },
  'mini-vinc': {
    handle: 'mini-vinc',
    baslik: 'Mini Vinç Modelleri',
    aciklama: 'Dar alanlara giren paletli mini örümcek vinç modellerini ve jib konfigürasyonlarını filtreleyin.',
    dipnot: DIPNOT,
    urunler: zenginlestir(miniVincUrunleri),
  },
  'mobil-vinc': {
    handle: 'mobil-vinc',
    baslik: 'Mobil Vinç Modelleri',
    aciklama: 'Tüm arazi, arazi tipi, kamyon üstü ve paletli mobil vinç modellerini filtreleyin.',
    dipnot: DIPNOT,
    urunler: zenginlestir(mobilVincUrunleri),
  },
  'hiyap-vinc': {
    handle: 'hiyap-vinc',
    baslik: 'Hiyap Vinç Modelleri',
    aciklama: 'Kamyon ve kamyonet üstü katlanır bomlu (hiyap) vinç modellerini filtreleyin.',
    dipnot: DIPNOT,
    urunler: zenginlestir(hiyapVincUrunleri),
  },
}

export async function getKategoriUrunListesi(handle: string): Promise<TKategoriUrunListesi | undefined> {
  return listeler[handle]
}

export async function getTumKategoriListeleri(): Promise<TKategoriUrunListesi[]> {
  return Object.values(listeler)
}

export async function getKategoriUrunByHandle(
  kategoriHandle: string,
  urunHandle: string
): Promise<TKategoriUrun | undefined> {
  return listeler[kategoriHandle]?.urunler.find((u) => u.handle === urunHandle)
}
