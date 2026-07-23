export type Locale = "en" | "fr";

export type LocalizedString = Record<Locale, string>;

export type CaseStudy = {
  slug: string;
  niche: string[];
  year: string;
  featured: boolean;
  accent: string;
  /** Path under /public, e.g. /work/atelier-nord.jpg */
  image: string;
  title: LocalizedString;
  summary: LocalizedString;
  challenge: LocalizedString;
  approach: LocalizedString;
  outcome: LocalizedString;
};

export type Package = {
  id: "launch" | "growth" | "custom";
  name: LocalizedString;
  priceFrom: LocalizedString;
  description: LocalizedString;
  features: LocalizedString[];
  highlighted?: boolean;
};

export type ProcessStep = {
  id: string;
  title: LocalizedString;
  body: LocalizedString;
};
