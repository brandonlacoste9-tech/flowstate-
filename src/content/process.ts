import type { ProcessStep } from "./types";

export const processSteps: ProcessStep[] = [
  {
    id: "discover",
    title: {
      en: "Discover",
      fr: "Découvrir",
    },
    body: {
      en: "We map your audience, offer, and constraints — then define clear goals, messaging, and success metrics before a single layout is drawn.",
      fr: "Nous cartographions votre public, votre offre et vos contraintes — puis définissons objectifs, messages et indicateurs de succès avant toute maquette.",
    },
  },
  {
    id: "design",
    title: {
      en: "Design",
      fr: "Concevoir",
    },
    body: {
      en: "Calm-premium visuals, tight hierarchy, and bilingual-ready structure. You review high-fidelity directions, not endless vague wireframes.",
      fr: "Visuels calmes et premium, hiérarchie serrée et structure prête au bilingue. Vous validez des directions haute fidélité, pas des wireframes vagues à l’infini.",
    },
  },
  {
    id: "build",
    title: {
      en: "Build",
      fr: "Construire",
    },
    body: {
      en: "Production-grade Next.js implementation: performance, accessibility, SEO foundations, and the integrations your leads actually need.",
      fr: "Implémentation Next.js de niveau production : performance, accessibilité, bases SEO et intégrations dont vos leads ont vraiment besoin.",
    },
  },
  {
    id: "launch",
    title: {
      en: "Launch",
      fr: "Lancer",
    },
    body: {
      en: "QA, soft launch, analytics, and a clear handoff. We stay close through the first weeks so the site earns trust — not just goes live.",
      fr: "AQ, lancement progressif, analytics et transfert clair. Nous restons proches les premières semaines pour que le site inspire confiance — pas seulement qu’il soit en ligne.",
    },
  },
];
