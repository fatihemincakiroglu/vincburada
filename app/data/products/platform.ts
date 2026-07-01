import type { Product } from "./types";

export const platformProducts: Product[] = [
  {
    id: "vb-pt32",
    name: "VB-PT32",
    tag: "Teleskopik Platform",
    image: "/gallery/zebra-desenli-platform.jpg",
    blurb: "Orta yükseklikteki cephe ve bakım işleri için hızlı konuşlanan teleskopik platform.",
    specs: [
      { label: "Erişim Mesafesi", value: "32 m" },
      { label: "Yatay Erişim", value: "16 m" },
      { label: "Sepet Kapasite", value: "250 kg" },
    ],
  },
  {
    id: "vb-pt45",
    name: "VB-PT45",
    tag: "Teleskopik Platform",
    image: "/gallery/fatih-camii-platform.jpg",
    blurb: "Düz bom yapısı ile uzun mesafeli, dik erişim gerektiren cephe ve minare gibi yüksek noktalar için.",
    specs: [
      { label: "Erişim Mesafesi", value: "45 m" },
      { label: "Yatay Erişim", value: "22 m" },
      { label: "Sepet Kapasite", value: "250 kg" },
    ],
  },
  {
    id: "vb-pt58",
    name: "VB-PT58",
    tag: "Teleskopik Platform",
    image: "/gallery/platform-cam-bulutlar.jpg",
    blurb: "Filomuzun en uzun erişimli platformu; gökdelen ve yüksek kule projelerinde tercih edilir.",
    specs: [
      { label: "Erişim Mesafesi", value: "58 m" },
      { label: "Yatay Erişim", value: "26 m" },
      { label: "Sepet Kapasite", value: "250 kg" },
    ],
  },
  {
    id: "vb-pa24",
    name: "VB-PA24",
    tag: "Eklemli Platform",
    image: "/gallery/rezidans-cephe-vinc.jpg",
    blurb: "Çıkıntılı çatı, sundurma veya engebeli cephe detaylarının üzerinden geçerek erişim sağlar.",
    specs: [
      { label: "Erişim Mesafesi", value: "24 m" },
      { label: "Yatay Erişim", value: "14 m" },
      { label: "Sepet Kapasite", value: "230 kg" },
    ],
  },
  {
    id: "vb-pa32",
    name: "VB-PA32",
    tag: "Eklemli Platform",
    image: "/gallery/rezidans-cephe-vinc-2.jpg",
    blurb: "Daha geniş yatay erişim gerektiren karmaşık cephe geometrilerinde esnek erişim çözümü.",
    specs: [
      { label: "Erişim Mesafesi", value: "32 m" },
      { label: "Yatay Erişim", value: "18 m" },
      { label: "Sepet Kapasite", value: "230 kg" },
    ],
  },
  {
    id: "vb-pd24",
    name: "VB-PD24",
    tag: "İkiz Kollu Platform",
    image: "/gallery/cam-cephe-platform.jpg",
    blurb: "İki ayrı kol sayesinde aynı anda iki ayrı noktaya erişim; iskele kurulumlarında zaman kazandırır.",
    specs: [
      { label: "Erişim Mesafesi", value: "24 m (her kol)" },
      { label: "Yatay Erişim", value: "14 m" },
      { label: "Sepet Kapasite", value: "2x200 kg" },
    ],
  },
  {
    id: "vb-pk16",
    name: "VB-PK16",
    tag: "Kompakt Platform",
    image: "/gallery/cephe-giyim-platform.jpg",
    blurb: "Dar sokak ve avlu gibi kısıtlı alanlarda hızlı konuşlanan, küçük gabarili şehir içi çözüm.",
    specs: [
      { label: "Erişim Mesafesi", value: "16 m" },
      { label: "Yatay Erişim", value: "9 m" },
      { label: "Sepet Kapasite", value: "200 kg" },
    ],
  },
  {
    id: "vb-pk20",
    name: "VB-PK20",
    tag: "Kompakt Platform",
    image: "/gallery/express-platform-kamyon.jpg",
    blurb: "Kompakt seride biraz daha yüksek erişim sunan, şehir içi bakım işleri için ideal model.",
    specs: [
      { label: "Erişim Mesafesi", value: "20 m" },
      { label: "Yatay Erişim", value: "11 m" },
      { label: "Sepet Kapasite", value: "200 kg" },
    ],
  },
  {
    id: "vb-pb50",
    name: "VB-PB50",
    tag: "Ağır Tip Kamyon Platformu",
    image: "/gallery/gokdelen-yuksek-platform.jpg",
    blurb: "Ağır ticari araç şasisi üzerine kurulu, uzun mesafeli ve yüksek sepet kapasiteli endüstriyel tesis ve gökdelen operasyonları için.",
    specs: [
      { label: "Erişim Mesafesi", value: "50 m" },
      { label: "Yatay Erişim", value: "24 m" },
      { label: "Sepet Kapasite", value: "300 kg" },
    ],
  },
  {
    id: "vb-pc10",
    name: "VB-PC10",
    tag: "Şehir Tipi Mini Platform",
    image: "/gallery/cephe-giyim-platform.jpg",
    blurb: "Panelvan üzerine monte, dar sokak ve tarihi doku sahalarında trafiği kesmeden hızlı bakım erişimi sağlar.",
    specs: [
      { label: "Erişim Mesafesi", value: "10 m" },
      { label: "Yatay Erişim", value: "6 m" },
      { label: "Sepet Kapasite", value: "180 kg" },
    ],
  },
];
