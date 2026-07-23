import type { CaseStudy } from "./types";

export const caseStudies: CaseStudy[] = [
  {
    slug: "atelier-nord",
    niche: ["salon", "barber", "local-service"],
    year: "2024",
    featured: true,
    accent: "#1B3A4B",
    title: {
      en: "Atelier Nord — booking that matches the cut",
      fr: "Atelier Nord — une réservation digne de la coupe",
    },
    summary: {
      en: "A Mile-End barbershop needed a site as sharp as its chairs — with easy booking and bilingual trust signals.",
      fr: "Un salon de coiffure du Mile-End voulait un site aussi net que ses chaises — réservation simple et signaux de confiance bilingues.",
    },
    challenge: {
      en: "Walk-ins and Instagram DMs were the only booking paths. The old one-page site looked generic, buried hours and pricing, and lost French-speaking clients who bounced before calling.",
      fr: "Les walk-ins et les DM Instagram étaient les seuls canaux de réservation. L’ancien site une page paraissait générique, noyait horaires et tarifs, et perdait les clients francophones avant même un appel.",
    },
    approach: {
      en: "We rebuilt around a calm navy palette, clear service menus, and a frictionless booking CTA above the fold. EN/FR toggle, real barber portraits, and Google Maps integration made the shop feel local and premium — not like a template.",
      fr: "Nous avons reconstruit autour d’une palette marine calme, de menus de services clairs et d’un CTA de réservation sans friction au-dessus de la ligne de flottaison. Bascule EN/FR, vrais portraits de barbiers et Google Maps : le salon paraît local et premium — pas un modèle générique.",
    },
    outcome: {
      en: "Online bookings became the primary channel within six weeks. Phone interruptions dropped, and the team reported more first-time clients arriving already sold on the brand.",
      fr: "Les réservations en ligne sont devenues le canal principal en six semaines. Moins d’interruptions téléphoniques, et davantage de nouveaux clients déjà convaincus par la marque.",
    },
  },
  {
    slug: "clinique-riviera",
    niche: ["medical", "healthcare", "clinic"],
    year: "2024",
    featured: true,
    accent: "#2A9D8F",
    title: {
      en: "Clinique Riviera — clarity patients can trust",
      fr: "Clinique Riviera — une clarté qui inspire confiance",
    },
    summary: {
      en: "A South Shore clinic modernized its digital front door so patients find services, insurance info, and forms without calling the desk.",
      fr: "Une clinique de la Rive-Sud a modernisé sa porte d’entrée numérique pour que les patients trouvent services, assurances et formulaires sans appeler la réception.",
    },
    challenge: {
      en: "Patients couldn’t tell which specialties were offered, what documents to bring, or how to request an appointment. Staff spent mornings re-explaining the same logistics over the phone.",
      fr: "Les patients ne savaient pas quelles spécialités étaient offertes, quels documents apporter ni comment demander un rendez-vous. Le personnel réexpliquait chaque matin la même logistique au téléphone.",
    },
    approach: {
      en: "We designed a serene, accessible experience: service cards with plain-language descriptions, a guided intake path, printable prep checklists, and bilingual content that meets Quebec expectations for clarity and professionalism.",
      fr: "Nous avons conçu une expérience sereine et accessible : cartes de services en langage simple, parcours d’admission guidé, listes de préparation imprimables et contenu bilingue conforme aux attentes québécoises de clarté et de professionnalisme.",
    },
    outcome: {
      en: "Front-desk call volume for basic questions fell noticeably after launch. Appointment requests shifted online, and patient feedback praised how “easy and calm” the site felt.",
      fr: "Le volume d’appels pour les questions de base a nettement baissé après le lancement. Les demandes de rendez-vous sont passées en ligne, et les patients ont salué un site « simple et rassurant ».",
    },
  },
  {
    slug: "montreal-trades",
    niche: ["trades", "directory", "b2b"],
    year: "2025",
    featured: true,
    accent: "#E9C46A",
    title: {
      en: "Montréal Trades — a directory that actually converts",
      fr: "Montréal Trades — un annuaire qui convertit vraiment",
    },
    summary: {
      en: "A multi-trade contractor network needed a fast, filterable directory that wins RFPs instead of collecting dust.",
      fr: "Un réseau de sous-traitants multi-métiers avait besoin d’un annuaire rapide et filtrable qui gagne des appels d’offres au lieu de prendre la poussière.",
    },
    challenge: {
      en: "Profiles lived in spreadsheets and a clunky PDF catalogue. Project managers couldn’t filter by trade, borough, or certification — so the network lost bids to better-organized competitors.",
      fr: "Les profils vivaient dans des tableurs et un catalogue PDF maladroit. Les chargés de projet ne pouvaient pas filtrer par métier, arrondissement ou certification — le réseau perdait des soumissions face à des concurrents mieux organisés.",
    },
    approach: {
      en: "We shipped a structured directory with trade tags, service-area filters, insurance badges, and lead forms wired to the right contractor. Performance stayed snappy on mobile job sites; copy stayed bilingual and practical.",
      fr: "Nous avons livré un annuaire structuré : tags de métiers, filtres par zone, badges d’assurance et formulaires de leads routés au bon entrepreneur. Performance fluide sur mobile de chantier; textes bilingues et pragmatiques.",
    },
    outcome: {
      en: "Qualified inbound leads rose within the first quarter. Member contractors reported shorter time-to-contact and fewer mismatched inquiries.",
      fr: "Les leads qualifiés ont augmenté dès le premier trimestre. Les entrepreneurs membres ont noté un contact plus rapide et moins de demandes mal ciblées.",
    },
  },
  {
    slug: "nuit-mtl",
    niche: ["nightlife", "events", "hospitality"],
    year: "2024",
    featured: false,
    accent: "#9B5DE5",
    title: {
      en: "Nuit MTL — events energy, premium polish",
      fr: "Nuit MTL — l’énergie des soirs, le polish premium",
    },
    summary: {
      en: "A downtown nightlife collective needed a site that sells nights out without looking like every other club flyer online.",
      fr: "Un collectif nightlife du centre-ville voulait un site qui vend la sortie sans ressembler à toutes les affiches de club en ligne.",
    },
    challenge: {
      en: "Lineups and ticket links were scattered across Instagram stories that expired overnight. Regulars knew the vibe; tourists and corporate bookers had nowhere credible to land.",
      fr: "Les line-ups et liens de billets étaient dispersés dans des stories Instagram qui expiraient le lendemain. Les habitués connaissaient l’ambiance; touristes et bookers corporatifs n’avaient nulle part de crédible où atterrir.",
    },
    approach: {
      en: "Dark, cinematic layouts with restrained motion, a living events calendar, promoter profiles, and clear table/VIP CTAs. Bilingual copy kept the edge without sacrificing readability.",
      fr: "Mises en page sombres et cinématographiques, motion retenu, calendrier d’événements vivant, profils de promoteurs et CTA table/VIP clairs. Textes bilingues avec du caractère, sans sacrifier la lisibilité.",
    },
    outcome: {
      en: "Ticket click-through stabilized as a owned channel, not just social spillover. Private-event inquiries from hotels and agencies increased after the rebrand went live.",
      fr: "Les clics billets se sont stabilisés comme canal propriétaire, pas seulement un débordement des réseaux. Les demandes d’événements privés (hôtels, agences) ont augmenté après le rebrand.",
    },
  },
  {
    slug: "planxo",
    niche: ["saas", "product", "startup"],
    year: "2025",
    featured: false,
    accent: "#00BBF9",
    title: {
      en: "Planxo — an indie SaaS landing that ships confidence",
      fr: "Planxo — un landing SaaS indie qui inspire confiance",
    },
    summary: {
      en: "A Montreal-built planning tool needed a product page that explains the “why” in seconds and points serious users to a clean trial.",
      fr: "Un outil de planification conçu à Montréal avait besoin d’une page produit qui explique le « pourquoi » en quelques secondes et mène les utilisateurs sérieux vers un essai clair.",
    },
    challenge: {
      en: "Early adopters loved the product; strangers bounced. Feature lists read like a changelog, pricing felt buried, and there was no narrative for solo founders juggling too many tools.",
      fr: "Les early adopters adoraient le produit; les inconnus rebondissaient. La liste de fonctions ressemblait à un changelog, les tarifs étaient enfouis, et aucun récit pour les fondateurs solos noyés sous les outils.",
    },
    approach: {
      en: "We rewrote the story around one painful job-to-be-done, added crisp product UI frames, social proof from Quebec startups, and a bilingual FAQ that pre-empts support tickets. Motion stayed subtle and purposeful.",
      fr: "Nous avons recentré le récit sur un seul job-to-be-done douloureux, ajouté des captures UI nettes, de la preuve sociale de startups québécoises et une FAQ bilingue qui anticipe les tickets. Motion subtil et utile.",
    },
    outcome: {
      en: "Trial starts improved after relaunch, and the founder stopped rewriting hero copy every week. The page now doubles as a sales deck for angel conversations.",
      fr: "Les démarrages d’essai se sont améliorés après le relancement, et le fondateur a cessé de réécrire le hero chaque semaine. La page sert aussi de deck de vente pour les discussions angels.",
    },
  },
  {
    slug: "adgen",
    niche: ["ai", "marketing", "product"],
    year: "2025",
    featured: false,
    accent: "#F15BB5",
    title: {
      en: "AdGen — AI marketing that feels human",
      fr: "AdGen — du marketing IA qui reste humain",
    },
    summary: {
      en: "An AI ad-copy platform needed product marketing that builds trust in a skeptical, ad-fatigued market.",
      fr: "Une plateforme d’IA pour textes publicitaires avait besoin d’un marketing produit qui bâtit la confiance dans un marché sceptique et saturé de pubs.",
    },
    challenge: {
      en: "Prospects assumed “AI slop.” The previous site over-promised magic and under-explained workflow, compliance, and brand voice controls — fatal for agencies in Montreal and Toronto.",
      fr: "Les prospects imaginaient du « AI slop ». L’ancien site surpromettait la magie et sous-expliquait le flux de travail, la conformité et le contrôle de la voix de marque — fatal pour les agences à Montréal et Toronto.",
    },
    approach: {
      en: "We led with before/after examples, transparent model limits, and a guided demo path. Bilingual messaging positioned AdGen as a craft tool for marketers — not a black box that replaces them.",
      fr: "Nous avons mis en avant des avant/après, des limites de modèle transparentes et un parcours démo guidé. Le message bilingue positionne AdGen comme un outil d’artisanat pour marketeurs — pas une boîte noire qui les remplace.",
    },
    outcome: {
      en: "Demo requests from mid-size agencies rose, and sales calls opened with fewer “is this just ChatGPT?” objections. Time-to-qualified-lead shortened for the GTM team.",
      fr: "Les demandes de démo d’agences mid-size ont augmenté, et les appels commerciaux s’ouvrent avec moins d’objections du type « c’est juste ChatGPT? ». Le délai vers un lead qualifié a raccourci pour l’équipe GTM.",
    },
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}

export function getFeaturedCaseStudies() {
  return caseStudies.filter((c) => c.featured).slice(0, 3);
}
