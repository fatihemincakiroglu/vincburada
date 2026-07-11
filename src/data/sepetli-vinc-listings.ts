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
import palfingerP900Turbin from '@/images/vinc/palfinger/p900-turbin.webp'
import palfingerP900Arac from '@/images/vinc/palfinger/p900-arac.webp'
import { StaticImageData } from 'next/image'

// ---------------------------------------------------------------------------
// SEPETLİ VİNÇ ÜRÜN VERİSİ
// Kaynak: sepetli_vinc_filtre_taksonomisi.xlsx
// Görseller şimdilik genel galeri fotoğraflarından atanmıştır; model bazlı
// fotoğraflar hazır olduğunda featuredImage / galleryImgs alanlarını güncelleyin.
// ---------------------------------------------------------------------------

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

const gorselSec = (i: number): { featuredImage: StaticImageData; galleryImgs: StaticImageData[] } => {
  const n = tumGorseller.length
  return {
    featuredImage: tumGorseller[i % n],
    galleryImgs: [tumGorseller[i % n], tumGorseller[(i + 1) % n], tumGorseller[(i + 2) % n], tumGorseller[(i + 3) % n]],
  }
}

// Filtre seçenekleri (Excel: "Filtre Öznitelikleri" sayfası) -----------------

export const ANA_KATEGORILER = [
  'Teleskopik',
  'Eklemli',
  'Makaslı',
  'Örümcek',
  'Kamyon Üstü',
  'Dikey Mast',
  'Telehandler',
] as const

export const GUC_KAYNAKLARI = ['Dizel', 'Elektrikli', 'Hibrit'] as const

export const ZEMIN_TIPLERI = ['Lastik', 'Paletli', 'Kamyon Üstü', '4x4 Arazi'] as const

export const KULLANIM_ORTAMLARI = ['İç Mekan', 'Dış Mekan', 'Her İkisi'] as const

export type TAnaKategori = (typeof ANA_KATEGORILER)[number]
export type TGucKaynagi = (typeof GUC_KAYNAKLARI)[number]
export type TZeminTipi = (typeof ZEMIN_TIPLERI)[number]
export type TKullanimOrtami = (typeof KULLANIM_ORTAMLARI)[number]

// Markalar (Excel: "Markalar" sayfası) ---------------------------------------

export async function getSepetliVincMarkalari() {
  return [
    {
      marka: 'JLG',
      mensei: 'ABD',
      urunGrubu: 'Teleskopik, eklemli, makaslı, dikey mast',
      seriler: '1200SJP, 1500SJ, 1350SJP, E18MCL, 1230ES',
      not: 'Sektör lideri, Ultra Serisi ile 75m+ erişim',
    },
    {
      marka: 'Genie',
      mensei: 'ABD',
      urunGrubu: 'Makaslı, teleskopik, eklemli',
      seriler: 'GS-4655, S-serisi teleskopik, Z-serisi eklemli',
      not: 'Geniş makaslı platform ürün gamı',
    },
    {
      marka: 'Haulotte',
      mensei: 'Fransa',
      urunGrubu: 'Makaslı, eklemli, teleskopik, örümcek (HTL)',
      seriler: 'Compact 8/10/12/14, HA-serisi eklemli',
      not: 'Kompakt iç mekan modelleriyle bilinir',
    },
    {
      marka: 'Palfinger',
      mensei: 'Avusturya',
      urunGrubu: 'Kamyon üstü katlanır bomlu vinç',
      seriler: 'P 900, P 750, PK 720 TEC, PK 33002 EH, PK 24001 SLD5',
      not: 'Yüksek çalışma basıncı (365 bar), hibrit seçenekli',
    },
    {
      marka: 'Manitou',
      mensei: 'Fransa',
      urunGrubu: 'Eklemli platform, telehandler',
      seriler: 'MT serisi telehandler, MHT ağır tonaj',
      not: 'Telehandler pazarında güçlü; manlift ürünleri de mevcut',
    },
    {
      marka: 'Socage',
      mensei: 'İtalya',
      urunGrubu: 'Kamyon üstü teleskopik/eklemli platform',
      seriler: 'Forste, Diamond serisi',
      not: "Avrupa'da yaygın kamyon üstü platform üreticisi",
    },
    {
      marka: 'CTE',
      mensei: 'İtalya',
      urunGrubu: 'Kamyon üstü platform, örümcek',
      seriler: 'Z-serisi, Traccess örümcek serisi',
      not: 'Örümcek tip platformlarda öne çıkar',
    },
    {
      marka: 'Multitel Pagliero',
      mensei: 'İtalya',
      urunGrubu: 'Kamyon üstü teleskopik platform',
      seriler: 'MX serisi',
      not: 'Ağır sanayi ve enerji sektörü odaklı',
    },
    {
      marka: 'Teupen',
      mensei: 'Almanya',
      urunGrubu: 'Örümcek (paletli) platform',
      seriler: 'Leo serisi',
      not: 'Ağaç bakımı ve hassas zeminlerde uzman',
    },
    {
      marka: 'Hinowa',
      mensei: 'İtalya',
      urunGrubu: 'Örümcek (paletli) platform',
      seriler: 'LightLift serisi',
      not: 'Kompakt ve hafif örümcek platformlar',
    },
    {
      marka: 'Dingli',
      mensei: 'Çin',
      urunGrubu: 'Makaslı, eklemli, teleskopik (ekonomik segment)',
      seriler: 'JCPT / BA / GTBZ serileri',
      not: 'Uygun fiyatlı geniş ürün gamı',
    },
    {
      marka: 'Sinoboom',
      mensei: 'Çin',
      urunGrubu: 'Makaslı, eklemli, teleskopik',
      seriler: 'GTJZ / GTBZ serileri',
      not: 'Hızla büyüyen Çinli üretici',
    },
    {
      marka: 'Zoomlion',
      mensei: 'Çin',
      urunGrubu: 'Makaslı, eklemli, teleskopik',
      seriler: 'ZT / ZE serileri',
      not: 'Ağır iş makineleri devi, AWP segmentinde büyüyor',
    },
    {
      marka: 'Skylift',
      mensei: 'Türkiye',
      urunGrubu: 'Kamyon üstü / römork tipi platform',
      seriler: 'Yerli üretim seri modeller',
      not: 'Türkiye pazarına özel çözümler',
    },
    {
      marka: 'CMC',
      mensei: 'İtalya',
      urunGrubu: 'Kamyon üstü platform, vinç',
      seriler: 'S-serisi',
      not: 'İtalyan üretici, kamyon üstü segment',
    },
    {
      marka: 'Palazzani',
      mensei: 'İtalya',
      urunGrubu: 'Paletli/örümcek platform',
      seriler: 'TSJ / XTJ serileri',
      not: 'Paletli platform uzmanı',
    },
  ]
}

// Ürünler (Excel: "Örnek Ürün Listesi" sayfası) ------------------------------

export async function getSepetliVincListings() {
  const urunler = [
    {
      id: 'sepetli-vinc://1',
      marka: 'JLG',
      model: '1200SJP',
      handle: 'jlg-1200sjp',
      title: 'JLG 1200SJP Teleskopik Platform',
      anaKategoriGosterim: 'Teleskopik Sepetli Vinç',
      kategori: 'Teleskopik' as TAnaKategori,
      calismaYuksekligi: 39.5,
      yatayErisim: 24.4,
      kapasiteKg: 227,
      gucKaynagiGosterim: 'Dizel',
      gucKaynaklari: ['Dizel'] as TGucKaynagi[],
      zeminGosterim: 'Lastik tekerlekli',
      zeminTipleri: ['Lastik'] as TZeminTipi[],
      kullanimOrtami: 'Dış Mekan' as TKullanimOrtami,
      sertifikalar: ['EN 280', 'CE'],
      not: 'Ultra Serisi, yüksek erişim',
      description:
        'JLG Ultra Serisi 1200SJP, 39.5 metre çalışma yüksekliği ve 24.4 metre yatay erişimiyle yüksek katlı cephe, çelik konstrüksiyon ve endüstriyel bakım işleri için güçlü bir teleskopik platformdur.',
      ...gorselSec(0),
    },
    {
      id: 'sepetli-vinc://2',
      marka: 'JLG',
      model: '1500SJ',
      handle: 'jlg-1500sj',
      title: 'JLG 1500SJ Teleskopik Platform',
      anaKategoriGosterim: 'Teleskopik Sepetli Vinç',
      kategori: 'Teleskopik' as TAnaKategori,
      calismaYuksekligi: 47,
      yatayErisim: 21.6,
      kapasiteKg: 230,
      gucKaynagiGosterim: 'Dizel',
      gucKaynaklari: ['Dizel'] as TGucKaynagi[],
      zeminGosterim: 'Lastik tekerlekli',
      zeminTipleri: ['Lastik'] as TZeminTipi[],
      kullanimOrtami: 'Dış Mekan' as TKullanimOrtami,
      sertifikalar: ['EN 280', 'CE'],
      not: 'Ultra Serisi',
      description:
        'JLG 1500SJ, 47 metre çalışma yüksekliğiyle Ultra Serisinin en yüksek erişimli teleskopik platformlarından biridir. Enerji, endüstriyel tesis ve yüksek yapı projelerinde tercih edilir.',
      ...gorselSec(1),
    },
    {
      id: 'sepetli-vinc://3',
      marka: 'JLG',
      model: '1350SJP',
      handle: 'jlg-1350sjp',
      title: 'JLG 1350SJP Teleskopik Platform',
      anaKategoriGosterim: 'Teleskopik Sepetli Vinç',
      kategori: 'Teleskopik' as TAnaKategori,
      calismaYuksekligi: 41.1,
      yatayErisim: 23.2,
      kapasiteKg: 227,
      gucKaynagiGosterim: 'Dizel',
      gucKaynaklari: ['Dizel'] as TGucKaynagi[],
      zeminGosterim: 'Lastik tekerlekli',
      zeminTipleri: ['Lastik'] as TZeminTipi[],
      kullanimOrtami: 'Dış Mekan' as TKullanimOrtami,
      sertifikalar: ['EN 280', 'CE'],
      not: 'Yüksek yatay erişim',
      description:
        'JLG 1350SJP, 23.2 metrelik yatay erişimiyle engellerin üzerinden uzanarak çalışma gerektiren projelerde öne çıkar. 41.1 metre çalışma yüksekliği sunar.',
      ...gorselSec(2),
    },
    {
      id: 'sepetli-vinc://4',
      marka: 'JLG',
      model: 'E18MCL',
      handle: 'jlg-e18mcl',
      title: 'JLG E18MCL Dikey Mast Platform',
      anaKategoriGosterim: 'Dikey Mast / Kompakt Platform',
      kategori: 'Dikey Mast' as TAnaKategori,
      calismaYuksekligi: 8.1,
      yatayErisim: null,
      kapasiteKg: 227,
      gucKaynagiGosterim: 'Elektrikli/Akülü',
      gucKaynaklari: ['Elektrikli'] as TGucKaynagi[],
      zeminGosterim: 'Lastik (iç mekan)',
      zeminTipleri: ['Lastik'] as TZeminTipi[],
      kullanimOrtami: 'İç Mekan' as TKullanimOrtami,
      sertifikalar: ['EN 280', 'CE'],
      not: 'Dar alan kullanımı',
      description:
        'JLG E18MCL, dar koridor ve kapı geçişleri için tasarlanmış akülü dikey mast platformdur. 8.1 metre çalışma yüksekliğiyle depo, AVM ve tesis içi bakım işlerinde idealdir.',
      ...gorselSec(3),
    },
    {
      id: 'sepetli-vinc://5',
      marka: 'JLG',
      model: '1230ES',
      handle: 'jlg-1230es',
      title: 'JLG 1230ES Kompakt Teleskopik Platform',
      anaKategoriGosterim: 'Teleskopik Sepetli Vinç',
      kategori: 'Teleskopik' as TAnaKategori,
      calismaYuksekligi: 12.5,
      yatayErisim: 8.2,
      kapasiteKg: 227,
      gucKaynagiGosterim: 'Elektrikli/Akülü',
      gucKaynaklari: ['Elektrikli'] as TGucKaynagi[],
      zeminGosterim: 'Lastik',
      zeminTipleri: ['Lastik'] as TZeminTipi[],
      kullanimOrtami: 'Her İkisi' as TKullanimOrtami,
      sertifikalar: ['EN 280', 'CE'],
      not: 'Kompakt teleskopik',
      description:
        'JLG 1230ES, 12.5 metre çalışma yüksekliği sunan elektrikli kompakt platformdur. Sessiz ve emisyonsuz çalışmasıyla hem iç hem dış mekanda kullanılabilir.',
      ...gorselSec(4),
    },
    {
      id: 'sepetli-vinc://6',
      marka: 'Genie',
      model: 'GS-4655',
      handle: 'genie-gs-4655',
      title: 'Genie GS-4655 Makaslı Platform',
      anaKategoriGosterim: 'Makaslı Platform',
      kategori: 'Makaslı' as TAnaKategori,
      calismaYuksekligi: 16.7,
      yatayErisim: null,
      kapasiteKg: 454,
      gucKaynagiGosterim: 'Elektrikli (E-Drive)',
      gucKaynaklari: ['Elektrikli'] as TGucKaynagi[],
      zeminGosterim: 'Lastik (iç mekan)',
      zeminTipleri: ['Lastik'] as TZeminTipi[],
      kullanimOrtami: 'İç Mekan' as TKullanimOrtami,
      sertifikalar: ['EN 280', 'CE'],
      not: 'Geniş platform kapasitesi',
      description:
        'Genie GS-4655, 454 kg taşıma kapasitesi ve geniş platformuyla malzeme ve personelin birlikte çalışmasına imkan tanıyan E-Drive elektrikli makaslı platformdur.',
      ...gorselSec(5),
    },
    {
      id: 'sepetli-vinc://7',
      marka: 'Haulotte',
      model: 'Compact 12',
      handle: 'haulotte-compact-12',
      title: 'Haulotte Compact 12 Makaslı Platform',
      anaKategoriGosterim: 'Makaslı Platform',
      kategori: 'Makaslı' as TAnaKategori,
      calismaYuksekligi: 12,
      yatayErisim: null,
      kapasiteKg: 320,
      gucKaynagiGosterim: 'Elektrikli/Akülü',
      gucKaynaklari: ['Elektrikli'] as TGucKaynagi[],
      zeminGosterim: 'Lastik (iç mekan)',
      zeminTipleri: ['Lastik'] as TZeminTipi[],
      kullanimOrtami: 'İç Mekan' as TKullanimOrtami,
      sertifikalar: ['EN 280', 'CE'],
      not: 'Dar koridor tipi',
      description:
        'Haulotte Compact 12, dar koridorlarda ve raf aralarında rahat manevra yapabilen akülü makaslı platformdur. 12 metre çalışma yüksekliği sunar.',
      ...gorselSec(6),
    },
    {
      id: 'sepetli-vinc://8',
      marka: 'Haulotte',
      model: 'Compact 10',
      handle: 'haulotte-compact-10',
      title: 'Haulotte Compact 10 Makaslı Platform',
      anaKategoriGosterim: 'Makaslı Platform',
      kategori: 'Makaslı' as TAnaKategori,
      calismaYuksekligi: 10,
      yatayErisim: null,
      kapasiteKg: 320,
      gucKaynagiGosterim: 'Elektrikli/Akülü',
      gucKaynaklari: ['Elektrikli'] as TGucKaynagi[],
      zeminGosterim: 'Lastik (iç mekan)',
      zeminTipleri: ['Lastik'] as TZeminTipi[],
      kullanimOrtami: 'İç Mekan' as TKullanimOrtami,
      sertifikalar: ['EN 280', 'CE'],
      not: 'Kompakt iç mekan',
      description:
        'Haulotte Compact 10, depo, AVM ve ofis içi tavan işleri için kompakt boyutlu, akülü makaslı platformdur. 10 metre çalışma yüksekliğine ulaşır.',
      ...gorselSec(7),
    },
    {
      id: 'sepetli-vinc://9',
      marka: 'Palfinger',
      model: 'P 750',
      handle: 'palfinger-p-750',
      title: 'Palfinger P 750 Kamyon Üstü Platform',
      anaKategoriGosterim: 'Kamyon Üstü Teleskopik Platform',
      kategori: 'Kamyon Üstü' as TAnaKategori,
      calismaYuksekligi: 75,
      yatayErisim: 39,
      kapasiteKg: 600,
      gucKaynagiGosterim: 'Dizel',
      gucKaynaklari: ['Dizel'] as TGucKaynagi[],
      zeminGosterim: 'Kamyon üstü',
      zeminTipleri: ['Kamyon Üstü'] as TZeminTipi[],
      kullanimOrtami: 'Dış Mekan' as TKullanimOrtami,
      sertifikalar: ['EN 280', 'CE'],
      not: '5 kişi kapasiteli, ağır sınıf',
      description:
        'Palfinger P 750, 75 metre çalışma yüksekliği ve 5 kişilik sepet kapasitesiyle filomuzun en yüksek erişimli kamyon üstü platformudur. Yüksek bina cephesi ve endüstriyel bakımda ağır sınıfın tercihi.',
      ...gorselSec(8),
    },
    {
      id: 'sepetli-vinc://15',
      marka: 'Palfinger',
      model: 'P 900',
      handle: 'palfinger-p-900',
      title: 'Palfinger P 900 Kamyon Üstü Platform',
      anaKategoriGosterim: 'Kamyon Üstü Teleskopik Platform',
      kategori: 'Kamyon Üstü' as TAnaKategori,
      calismaYuksekligi: 90,
      yatayErisim: 32.5,
      kapasiteKg: 530,
      gucKaynagiGosterim: 'Dizel',
      gucKaynaklari: ['Dizel'] as TGucKaynagi[],
      zeminGosterim: 'Kamyon üstü',
      zeminTipleri: ['Kamyon Üstü'] as TZeminTipi[],
      kullanimOrtami: 'Dış Mekan' as TKullanimOrtami,
      sertifikalar: ['EN 280', 'CE'],
      not: '90 m çalışma yüksekliği, rüzgar hızı 7 (15,5 m/s) çalışma imkanı',
      description:
        'Palfinger P 900, 90 metre çalışma yüksekliği ve 32,5 metre yatay erişimiyle segmentinin zirvesindeki kamyon üstü platformdur. 530 kg kapasiteli teleskopik sepeti, 180° sepet bomu dönüşü ve GPD (yerçekimi tahrikli iniş) sistemiyle rüzgar türbini bakımı, baca ve yüksek endüstriyel yapı çalışmalarının ekipmanıdır. Rüzgar hızı 7 (15,5 m/s) yükseltmesi sayesinde standart platformların çalışamadığı koşullarda dahi operasyona devam eder.',
      featuredImage: palfingerP900Turbin,
      galleryImgs: [palfingerP900Turbin, palfingerP900Arac, ...gorselSec(8).galleryImgs.slice(0, 2)],
    },
    {
      id: 'sepetli-vinc://10',
      marka: 'Palfinger',
      model: 'PK 33002 EH',
      handle: 'palfinger-pk-33002-eh',
      title: 'Palfinger PK 33002 EH Kamyon Üstü Vinç',
      anaKategoriGosterim: 'Kamyon Üstü Sepetli Vinç',
      kategori: 'Kamyon Üstü' as TAnaKategori,
      calismaYuksekligi: 29.5,
      yatayErisim: null,
      kapasiteKg: 800,
      gucKaynagiGosterim: 'Dizel/Hibrit',
      gucKaynaklari: ['Dizel', 'Hibrit'] as TGucKaynagi[],
      zeminGosterim: 'Kamyon üstü',
      zeminTipleri: ['Kamyon Üstü'] as TZeminTipi[],
      kullanimOrtami: 'Dış Mekan' as TKullanimOrtami,
      sertifikalar: ['EN 280', 'CE'],
      not: 'Çift kırma bom, 18 ton sınıfı',
      description:
        'Palfinger PK 33002 EH, çift kırma bom yapısı ve hibrit güç seçeneğiyle 18 ton sınıfında esnek bir kamyon üstü vinçtir. 29.5 metre çalışma yüksekliği sunar.',
      ...gorselSec(9),
    },
    {
      id: 'sepetli-vinc://11',
      marka: 'Palfinger',
      model: 'PK 24001 SLD5',
      handle: 'palfinger-pk-24001-sld5',
      title: 'Palfinger PK 24001 SLD5 Kamyon Üstü Vinç',
      anaKategoriGosterim: 'Kamyon Üstü Sepetli Vinç',
      kategori: 'Kamyon Üstü' as TAnaKategori,
      calismaYuksekligi: 24,
      yatayErisim: null,
      kapasiteKg: null,
      gucKaynagiGosterim: 'Dizel',
      gucKaynaklari: ['Dizel'] as TGucKaynagi[],
      zeminGosterim: 'Kamyon üstü',
      zeminTipleri: ['Kamyon Üstü'] as TZeminTipi[],
      kullanimOrtami: 'Dış Mekan' as TKullanimOrtami,
      sertifikalar: ['EN 280', 'CE'],
      not: 'Konteyner taşımacılığı için ideal',
      description:
        'Palfinger PK 24001 SLD5, konteyner ve ağır yük taşımacılığına uygun 24 metre çalışma yüksekliğine sahip kamyon üstü vinçtir.',
      ...gorselSec(10),
    },
    {
      id: 'sepetli-vinc://12',
      marka: 'Palfinger',
      model: 'PK 19001 SLD5',
      handle: 'palfinger-pk-19001-sld5',
      title: 'Palfinger PK 19001 SLD5 Kamyon Üstü Vinç',
      anaKategoriGosterim: 'Kamyon Üstü Sepetli Vinç',
      kategori: 'Kamyon Üstü' as TAnaKategori,
      calismaYuksekligi: 19,
      yatayErisim: null,
      kapasiteKg: null,
      gucKaynagiGosterim: 'Dizel',
      gucKaynaklari: ['Dizel'] as TGucKaynagi[],
      zeminGosterim: 'Kamyon üstü',
      zeminTipleri: ['Kamyon Üstü'] as TZeminTipi[],
      kullanimOrtami: 'Dış Mekan' as TKullanimOrtami,
      sertifikalar: ['EN 280', 'CE'],
      not: '6 ton kapasite, ekonomik seri',
      description:
        'Palfinger PK 19001 SLD5, 6 ton kaldırma kapasitesiyle ekonomik serinin güvenilir modelidir. Şehir içi taşıma ve montaj işlerinde yaygın kullanılır.',
      ...gorselSec(11),
    },
    {
      id: 'sepetli-vinc://13',
      marka: 'Palfinger',
      model: 'PCC 57.002',
      handle: 'palfinger-pcc-57-002',
      title: 'Palfinger PCC 57.002 Örümcek Platform',
      anaKategoriGosterim: 'Örümcek (Paletli) Sepetli Vinç',
      kategori: 'Örümcek' as TAnaKategori,
      calismaYuksekligi: 30,
      yatayErisim: null,
      kapasiteKg: 800,
      gucKaynagiGosterim: 'Dizel',
      gucKaynaklari: ['Dizel'] as TGucKaynagi[],
      zeminGosterim: 'Paletli',
      zeminTipleri: ['Paletli'] as TZeminTipi[],
      kullanimOrtami: 'Her İkisi' as TKullanimOrtami,
      sertifikalar: ['EN 280', 'CE'],
      not: '1.9x2.4m boyut, dar alan uzmanı',
      description:
        'Palfinger PCC 57.002, 1.9x2.4 metrelik kompakt gövdesiyle dar geçişlerden ilerleyip 30 metreye ulaşabilen paletli örümcek platformdur. Hassas zeminlerde güvenle çalışır.',
      ...gorselSec(0),
    },
    {
      id: 'sepetli-vinc://14',
      marka: 'Manitou',
      model: 'MT 1033',
      handle: 'manitou-mt-1033',
      title: 'Manitou MT 1033 Telehandler',
      anaKategoriGosterim: 'Telehandler (Sepetli Uyumlu)',
      kategori: 'Telehandler' as TAnaKategori,
      calismaYuksekligi: 10,
      yatayErisim: null,
      kapasiteKg: 3300,
      gucKaynagiGosterim: 'Dizel',
      gucKaynaklari: ['Dizel'] as TGucKaynagi[],
      zeminGosterim: '4x4 Lastik',
      zeminTipleri: ['Lastik', '4x4 Arazi'] as TZeminTipi[],
      kullanimOrtami: 'Dış Mekan' as TKullanimOrtami,
      sertifikalar: ['EN 280', 'CE'],
      not: '10m yükseklik, 3.3 ton kapasite',
      description:
        'Manitou MT 1033, sepet ataşmanıyla personel platformuna dönüşebilen 4x4 telehandlerdır. 10 metre yükseklik ve 3.3 ton kaldırma kapasitesi sunar.',
      ...gorselSec(3),
    },
  ]

  return urunler
}

export const getSepetliVincByHandle = async (handle: string) => {
  const listings = await getSepetliVincListings()
  return listings.find((l) => l.handle === handle)
}

export const getSepetliVincMarkaByAd = async (marka: string) => {
  const markalar = await getSepetliVincMarkalari()
  return markalar.find((m) => m.marka === marka)
}

export type TSepetliVinc = Awaited<ReturnType<typeof getSepetliVincListings>>[number]
export type TSepetliVincMarka = Awaited<ReturnType<typeof getSepetliVincMarkalari>>[number]
