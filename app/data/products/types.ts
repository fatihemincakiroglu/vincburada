export type Spec = { label: string; value: string };

export type Product = {
  id: string;
  name: string;
  tag: string;
  image: string;
  blurb: string;
  specs: Spec[];
};

export type CategoryKey = "Vinç" | "Forklift" | "Manlift" | "Platform";
