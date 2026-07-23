import type { Package } from "./types";

export const packages: Package[] = [
  {
    id: "launch",
    name: {
      en: "Launch",
      fr: "Lancement",
    },
    priceFrom: {
      en: "From $2,500",
      fr: "À partir de 2 500 $",
    },
    description: {
      en: "A polished, conversion-ready site for local businesses ready to show up online with clarity.",
      fr: "Un site soigné et prêt à convertir pour les entreprises locales qui veulent une présence claire en ligne.",
    },
    features: [
      {
        en: "Up to 5 custom pages",
        fr: "Jusqu’à 5 pages sur mesure",
      },
      {
        en: "Mobile-first responsive design",
        fr: "Design responsive mobile-first",
      },
      {
        en: "Contact form + basic SEO setup",
        fr: "Formulaire de contact + SEO de base",
      },
      {
        en: "EN or FR launch (bilingual optional add-on)",
        fr: "Lancement EN ou FR (bilingue en option)",
      },
      {
        en: "2 weeks of post-launch polish",
        fr: "2 semaines de peaufinage post-lancement",
      },
    ],
  },
  {
    id: "growth",
    name: {
      en: "Growth",
      fr: "Croissance",
    },
    priceFrom: {
      en: "From $5,500",
      fr: "À partir de 5 500 $",
    },
    description: {
      en: "A fuller brand presence with richer storytelling, stronger SEO foundations, and room to scale.",
      fr: "Une présence de marque plus complète : récit enrichi, bases SEO solides et marge pour croître.",
    },
    highlighted: true,
    features: [
      {
        en: "Up to 10 pages + case/work sections",
        fr: "Jusqu’à 10 pages + sections projets",
      },
      {
        en: "Full bilingual EN/FR experience",
        fr: "Expérience bilingue EN/FR complète",
      },
      {
        en: "Advanced layout system & motion",
        fr: "Système de mise en page avancé et motion",
      },
      {
        en: "On-page SEO + analytics setup",
        fr: "SEO on-page + configuration analytics",
      },
      {
        en: "CMS-ready structure for easy updates",
        fr: "Structure prête CMS pour mises à jour faciles",
      },
    ],
  },
  {
    id: "custom",
    name: {
      en: "Custom",
      fr: "Sur mesure",
    },
    priceFrom: {
      en: "Let's scope",
      fr: "À définir",
    },
    description: {
      en: "Product marketing sites, multi-step funnels, or complex builds that don’t fit a fixed package.",
      fr: "Sites produit, entonnoirs multi-étapes ou projets complexes hors forfait standard.",
    },
    features: [
      {
        en: "Discovery workshop & technical plan",
        fr: "Atelier découverte et plan technique",
      },
      {
        en: "Custom UI systems and interactions",
        fr: "Systèmes d’interface et interactions sur mesure",
      },
      {
        en: "Integrations (CRM, booking, email, APIs)",
        fr: "Intégrations (CRM, réservation, courriel, API)",
      },
      {
        en: "Flexible timeline and phased delivery",
        fr: "Échéancier flexible et livraison par phases",
      },
      {
        en: "Ongoing partnership options",
        fr: "Options de partenariat continu",
      },
    ],
  },
];
