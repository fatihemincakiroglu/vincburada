import { vincProducts } from "./vinc";
import { forkliftProducts } from "./forklift";
import { manliftProducts } from "./manlift";
import { platformProducts } from "./platform";
import type { CategoryKey, Product } from "./types";

export type ProductGroup = {
  key: CategoryKey;
  label: string;
  href: string;
  products: Product[];
};

export const productGroups: ProductGroup[] = [
  { key: "Vinç", label: "Vinç", href: "/vinc", products: vincProducts },
  { key: "Forklift", label: "Forklift", href: "/forklift", products: forkliftProducts },
  { key: "Manlift", label: "Manlift", href: "/manlift", products: manliftProducts },
  { key: "Platform", label: "Platform", href: "/platform", products: platformProducts },
];

export { vincProducts, forkliftProducts, manliftProducts, platformProducts };
export type { Product, CategoryKey } from "./types";
