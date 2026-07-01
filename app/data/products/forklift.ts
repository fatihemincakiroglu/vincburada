import type { Product } from "./types";

export const forkliftProducts: Product[] = [
  {
    id: "fd30z",
    name: "FD30Z",
    tag: "Dizel Forklift",
    image: "/products/zoomlion-fd30z.webp",
    blurb: "Depo, şantiye ve açık alan lojistiğinde günlük kullanım için dengeli kapasiteli dizel forklift.",
    specs: [
      { label: "Kapasite", value: "3 ton" },
      { label: "Maks. Kaldırma", value: "3 – 6 m (direk seçeneğine göre)" },
      { label: "Yakıt", value: "Dizel" },
      { label: "Marka", value: "Zoomlion" },
    ],
  },
  {
    id: "fd50-mini",
    name: "FD50 Mini",
    tag: "Dizel Forklift",
    image: "/products/zoomlion-fd50-mini.webp",
    blurb: "Kompakt şasisiyle dar sahalarda dahi 5 ton kapasiteli yük taşıyabilen orta-ağır segment dizel forklift.",
    specs: [
      { label: "Kapasite", value: "5 ton" },
      { label: "Maks. Kaldırma", value: "3 – 6 m (direk seçeneğine göre)" },
      { label: "Yakıt", value: "Dizel" },
      { label: "Marka", value: "Zoomlion" },
    ],
  },
  {
    id: "fd70",
    name: "FD70",
    tag: "Ağır Tip Dizel Forklift",
    image: "/products/zoomlion-fd70.webp",
    blurb: "Liman, ağır sanayi ve büyük depo operasyonlarında konteyner ve büyük hacimli yük taşıma için filomuzun en güçlü forklifti.",
    specs: [
      { label: "Kapasite", value: "7 ton" },
      { label: "Maks. Kaldırma", value: "3 – 6 m (direk seçeneğine göre)" },
      { label: "Yakıt", value: "Dizel" },
      { label: "Marka", value: "Zoomlion" },
    ],
  },
];
