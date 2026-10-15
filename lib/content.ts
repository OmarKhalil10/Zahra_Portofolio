export type Locale = "fr" | "en";

export const EMAIL = "zahrachiibane@gmail.com";
export const LINKEDIN = "https://www.linkedin.com/in/zahra-chibane-366a4b182/";

export interface Project {
  slug: string;
  driveId: string;
  category: { fr: string; en: string };
  title: { fr: string; en: string };
  org: string;
  year: string;
  cover: string;
  accent: string;
  context: { fr: string; en: string };
  role: { fr: string; en: string };
  deliverables: { fr: string[]; en: string[] };
  kpis: { fr: string[]; en: string[] };
  tools: string[];
}

/* 5 public Drive files (Trust Bank + Retroplanning pending) */
export const PROJECTS: Project[] = [
  {
    slug: "bureautips-sfr",
    driveId: "1Ha5RBoHO1l83hSg8wB0voW84elSTLOXf",
    category: { fr: "Contenu interne", en: "Internal content" },
    title: { fr: "BureauTips — SFR Altice Campus", en: "BureauTips — SFR Altice Campus" },
    org: "SFR Altice Campus",
    year: "2025",
    cover: "BT",
    accent: "#C96F4A",
    context: {
      fr: "Lancement d'un format vidéo bureautique pour aider les collaborateurs à maîtriser leurs outils au quotidien. Projet mené en alternance au sein de la communication SI.",
      en: "Launch of a workplace video format helping employees master everyday digital tools. Led as an apprentice in SFR's IT communications team.",
    },
    role: {
      fr: "Cheffe de projet communication SI : cadrage, production de 50+ vidéos, animation de la chaîne SharePoint et diffusion via newsletters internes.",
      en: "IT communications project lead: scoping, 50+ videos produced, SharePoint channel management and internal newsletter distribution.",
    },
    deliverables: {
      fr: ["50+ vidéos produites", "Chaîne SharePoint BureauTips", "Blog bureautique + newsletters", "Kick-off & conduite du changement"],
      en: ["50+ videos produced", "BureauTips SharePoint channel", "Workplace blog + newsletters", "Kick-off & change management"],
    },
    kpis: {
      fr: ["50+ vidéos livrées", "2 chaînes animées", "Diffusion intranet régulière"],
      en: ["50+ videos delivered", "2 channels run", "Regular intranet distribution"],
    },
    tools: ["SharePoint", "CapCut", "Newsletter", "Enquête"],
  },
  {
    slug: "onboarding-sfr",
    driveId: "13C5c-3uUuiNcNj3MmII7JyqlDmROMkQv",
    category: { fr: "Parcours digital", en: "Digital journey" },
    title: { fr: "Onboarding digital — SFR", en: "Digital onboarding — SFR" },
    org: "SFR Altice Campus",
    year: "2025",
    cover: "ON",
    accent: "#9CAF88",
    context: {
      fr: "Parcours d'onboarding digital pour accueillir les nouveaux arrivants : vidéos d'accompagnement adossées à une enquête terrain.",
      en: "Digital onboarding journey for new joiners: support videos backed by field research.",
    },
    role: {
      fr: "Conception du parcours, enquête auprès de 400 nouveaux arrivants, création de la chaîne Onboarding et refonte des emails systèmes.",
      en: "Journey design, survey of 400 newcomers, Onboarding channel creation and system-email rewrite.",
    },
    deliverables: {
      fr: ["Vidéos d'accompagnement", "Chaîne SharePoint Onboarding", "Enquête 400 répondants", "50 emails systèmes réécrits"],
      en: ["Support videos", "Onboarding SharePoint channel", "400-respondent survey", "50 system emails rewritten"],
    },
    kpis: {
      fr: ["400 nouveaux arrivants interrogés", "50 emails refondus", "1 parcours digital complet"],
      en: ["400 newcomers surveyed", "50 emails rewritten", "1 complete digital journey"],
    },
    tools: ["SharePoint", "Google Forms", "Canva", "Intranet"],
  },
  {
    slug: "tchin-lait",
    driveId: "12o0pFc16WYu8HmLeODhVZlPacs95uu4l",
    category: { fr: "Stratégie 360°", en: "360° strategy" },
    title: { fr: "Tchin Lait — Présentation de marque", en: "Tchin Lait — Brand presentation" },
    org: "Projet académique",
    year: "2024",
    cover: "TL",
    accent: "#C9A86A",
    context: {
      fr: "Présentation stratégique complète : positionnement, insights consommateurs, plateforme de marque et plan d'activation 360°.",
      en: "Full strategic presentation: positioning, consumer insights, brand platform and 360° activation plan.",
    },
    role: {
      fr: "Analyse de marché, benchmark, brief créatif, planning et recommandations stratégiques.",
      en: "Market analysis, benchmarking, creative brief, planning and strategic recommendations.",
    },
    deliverables: {
      fr: ["Analyse de marché", "Benchmark concurrentiel", "Plateforme de marque", "Plan 360° TV / digital / print / influence"],
      en: ["Market analysis", "Competitive benchmark", "Brand platform", "360° TV / digital / print / influence plan"],
    },
    kpis: {
      fr: ["3 analyses & benchmarks", "4 axes d'activation", "1 présentation client"],
      en: ["3 analyses & benchmarks", "4 activation pillars", "1 client presentation"],
    },
    tools: ["PowerPoint", "Figma", "Benchmark", "Planning"],
  },
  {
    slug: "rituals",
    driveId: "1oCRpAUrzP9wLJCgVF1jyQZ2qd1WWljKG",
    category: { fr: "Retail & contenu", en: "Retail & content" },
    title: { fr: "Rituals — Cas retail beauté", en: "Rituals — Beauty retail case" },
    org: "Projet académique",
    year: "2024",
    cover: "RI",
    accent: "#B76E79",
    context: {
      fr: "Cas d'école autour de l'expérience retail et du storytelling de marque dans l'univers beauté / bien-être.",
      en: "Academic case on retail experience and brand storytelling in beauty / wellbeing.",
    },
    role: {
      fr: "Décryptage du parcours client, contenus engageants, activation social media et recommandations d'acquisition / fidélisation.",
      en: "Customer journey decoding, engaging content, social activation and acquisition / loyalty recommendations.",
    },
    deliverables: {
      fr: ["Audit social & retail", "Ligne éditoriale", "Concepts de contenus", "Recommandations ROI"],
      en: ["Social & retail audit", "Editorial line", "Content concepts", "ROI recommendations"],
    },
    kpis: {
      fr: ["Parcours client optimisé", "Contenus engageants", "KPIs & reporting"],
      en: ["Optimized customer journey", "Engaging content", "KPIs & reporting"],
    },
    tools: ["Canva", "Instagram", "Benchmark", "Reporting"],
  },
  {
    slug: "too-faced",
    driveId: "1IGAKnBcCBwy8eWIR70lv-qHssBj7K1u-",
    category: { fr: "Stratégie digitale", en: "Digital strategy" },
    title: { fr: "Too Faced — Stratégie digitale", en: "Too Faced — Digital strategy" },
    org: "Projet académique",
    year: "2024",
    cover: "TF",
    accent: "#E8A0BF",
    context: {
      fr: "Stratégie digitale complète pour une marque beauté : social ads, influence, SEO/SEA, emailing et display.",
      en: "Full digital strategy for a beauty brand: social ads, influence, SEO/SEA, emailing and display.",
    },
    role: {
      fr: "Pilotage 360° : objectifs, KPIs, plans d'action, coordination créative et gestion de campagnes d'influence.",
      en: "360° leadership: goals, KPIs, action plans, creative coordination and influencer campaign management.",
    },
    deliverables: {
      fr: ["Stratégie SEO / SEA / social ads", "Plan d'influence & partenariats", "Calendrier éditorial", "Reporting & optimisations"],
      en: ["SEO / SEA / social ads strategy", "Influence & partnership plan", "Editorial calendar", "Reporting & optimization"],
    },
    kpis: {
      fr: ["Acquisition & fidélisation", "Suivi KPIs", "Optimisation continue"],
      en: ["Acquisition & loyalty", "KPI tracking", "Continuous optimization"],
    },
    tools: ["SEO/SEA", "Social Ads", "HubSpot", "Analytics"],
  },
];

export interface JourneyItem {
  org: string;
  role: { fr: string; en: string };
  period: string;
  place: string;
  points: { fr: string[]; en: string[] };
  tag: { fr: string; en: string };
}

export const EXPERIENCE: JourneyItem[] = [
  {
    org: "SFR Altice Campus",
    role: { fr: "Chargée de communication SI — Alternance", en: "IT Communications Officer — Apprenticeship" },
    period: "Mar 2025 – Sep 2025 · Paris",
    place: "Paris",
    points: {
      fr: ["BureauTips : 50+ vidéos produites", "Onboarding : enquête 400 nouveaux arrivants", "2 chaînes SharePoint + blog + newsletters", "50 emails systèmes réécrits"],
      en: ["BureauTips: 50+ videos produced", "Onboarding: 400-newcomer survey", "2 SharePoint channels + blog + newsletters", "50 system emails rewritten"],
    },
    tag: { fr: "Communication SI", en: "IT Comms" },
  },
  {
    org: "TBWA\\Corporate",
    role: { fr: "Cheffe de projet — CDD", en: "Project Manager — Contract" },
    period: "Jun 2024 – Aug 2024",
    place: "Paris",
    points: {
      fr: ["4 lancements produits supervisés", "3 analyses de marché & benchmarks", "Briefs créatifs + suivi production", "Planning, budget, livrables"],
      en: ["4 product launches supervised", "3 market analyses & benchmarks", "Creative briefs + production follow-up", "Schedule, budget, deliverables"],
    },
    tag: { fr: "Marketing 360°", en: "360° Marketing" },
  },
  {
    org: "Third Advertising",
    role: { fr: "Social Media Strategist — CDI", en: "Social Media Strategist — Full-time" },
    period: "May 2023 – Dec 2023 · Alger",
    place: "Algiers",
    points: {
      fr: ["Campagnes online / offline : SEO, SEA, display, emailing, social ads", "Coordination créatifs + prestataires", "Reporting & recommandations"],
      en: ["Online / offline campaigns: SEO, SEA, display, emailing, social ads", "Creative + vendor coordination", "Reporting & recommendations"],
    },
    tag: { fr: "Social Media", en: "Social Media" },
  },
  {
    org: "Electrad",
    role: { fr: "Cheffe de projet social media — Stage", en: "Social Media Project Lead — Internship" },
    period: "Jul 2021 – Oct 2021",
    place: "Alger",
    points: {
      fr: ["Animation & modération des communautés", "Contenus engageants multicanaux", "Veille concurrentielle & tendances"],
      en: ["Community management & moderation", "Engaging multi-channel content", "Competitive & trend watch"],
    },
    tag: { fr: "Community", en: "Community" },
  },
  {
    org: "MAB Media",
    role: { fr: "Transcriptrice data — Temps partiel", en: "Data Transcriber — Part-time" },
    period: "Apr 2020 – Sep 2020",
    place: "Alger",
    points: {
      fr: ["Rigueur, fiabilité, respect des délais", "Première expérience média / data"],
      en: ["Rigor, reliability, deadlines", "First media / data experience"],
    },
    tag: { fr: "Data", en: "Data" },
  },
];

export const EDUCATION: JourneyItem[] = [
  {
    org: "INSEEC",
    role: { fr: "MSc Marketing, Communication & Stratégie de marque", en: "MSc Marketing, Comms & Brand Strategy" },
    period: "Aug 2026 – Sep 2027",
    place: "Paris",
    points: { fr: ["Alternance recherchée 1 an dès sept. 2026"], en: ["Seeking 1-year apprenticeship from Sept 2026"] },
    tag: { fr: "Master", en: "Master" },
  },
  {
    org: "Paris I Panthéon-Sorbonne",
    role: { fr: "Master pro Communication marketing", en: "Professional Master, Marketing Comms" },
    period: "Sep 2024 – Jun 2025",
    place: "Paris",
    points: { fr: ["Pilotage de projet, data, CRM"], en: ["Project management, data, CRM"] },
    tag: { fr: "Master", en: "Master" },
  },
  {
    org: "ENSJSI Alger",
    role: { fr: "Master Sciences de l'information (journalisme)", en: "Master Information Sciences (journalism)" },
    period: "2019 – Jun 2024",
    place: "Algiers",
    points: { fr: ["Concours d'accès Master validé — Jan 2021", "Storytelling & rédaction"], en: ["Master entrance exam passed — Jan 2021", "Storytelling & writing"] },
    tag: { fr: "Journalisme", en: "Journalism" },
  },
  {
    org: "GOMYCODE",
    role: { fr: "Business Intelligence — Data analysis", en: "Business Intelligence — Data analysis" },
    period: "Nov 2022 – Feb 2023",
    place: "Alger",
    points: { fr: ["Collecte, dataviz, dashboards BI"], en: ["Collection, dataviz, BI dashboards"] },
    tag: { fr: "Data", en: "Data" },
  },
];

export interface Skill {
  label: { fr: string; en: string };
  endorsements: number;
  verified?: boolean;
  detail: { fr: string; en: string };
}

export const SKILLS: Skill[] = [
  { label: { fr: "Communication", en: "Communication" }, endorsements: 4, detail: { fr: "Community management, storytelling", en: "Community management, storytelling" } },
  { label: { fr: "Management", en: "Management" }, endorsements: 3, detail: { fr: "Notion, Trello, Jira, Slack", en: "Notion, Trello, Jira, Slack" } },
  { label: { fr: "Relations publiques", en: "Public relations" }, endorsements: 3, detail: { fr: "Influence & partenariats", en: "Influence & partnerships" } },
  { label: { fr: "Microsoft Excel", en: "Microsoft Excel" }, endorsements: 2, verified: true, detail: { fr: "Test LinkedIn validé + SQL, Power BI", en: "LinkedIn test passed + SQL, Power BI" } },
  { label: { fr: "Stratégie d'entreprise", en: "Corporate strategy" }, endorsements: 2, detail: { fr: "Benchmarks, insights, positionnement", en: "Benchmarks, insights, positioning" } },
  { label: { fr: "Pack Office", en: "MS Office" }, endorsements: 2, detail: { fr: "PowerPoint, SharePoint, intranet", en: "PowerPoint, SharePoint, intranet" } },
  { label: { fr: "Travail d'équipe", en: "Teamwork" }, endorsements: 2, detail: { fr: "Environnements exigeants", en: "Demanding environments" } },
  { label: { fr: "Leadership d'équipe", en: "Team leadership" }, endorsements: 2, detail: { fr: "Coordination multi-acteurs", en: "Multi-stakeholder coordination" } },
  { label: { fr: "Anglais", en: "English" }, endorsements: 2, detail: { fr: "Niveau C1", en: "C1 level" } },
  { label: { fr: "Espagnol", en: "Spanish" }, endorsements: 2, detail: { fr: "Niveau B2", en: "B2 level" } },
  { label: { fr: "Français", en: "French" }, endorsements: 2, detail: { fr: "Langue maternelle de travail", en: "Working native language" } },
  { label: { fr: "Transcription", en: "Transcription" }, endorsements: 2, detail: { fr: "Rigueur & délais — MAB Media", en: "Rigor & deadlines — MAB Media" } },
  { label: { fr: "Business Intelligence (MSBI)", en: "Business Intelligence (MSBI)" }, endorsements: 1, detail: { fr: "Dashboards & reporting — GOMYCODE", en: "Dashboards & reporting — GOMYCODE" } },
  { label: { fr: "Reporting Services", en: "Reporting Services" }, endorsements: 1, detail: { fr: "KPIs & plans d'action", en: "KPIs & action plans" } },
  { label: { fr: "Marketing", en: "Marketing" }, endorsements: 1, detail: { fr: "SEO, SEA, display, emailing, social ads", en: "SEO, SEA, display, emailing, social ads" } },
  { label: { fr: "Rédaction de contenus", en: "Content writing" }, endorsements: 1, detail: { fr: "Canva, Figma, CapCut", en: "Canva, Figma, CapCut" } },
];

export const STRINGS = {
  fr: {
    nav: { work: "Projets", journey: "Parcours", skills: "Compétences", contact: "Contact", cv: "Télécharger CV" },
    hero: {
      badge: "Marketing & Com • Paris • Dispo sept. 2026",
      role: "Cheffe de projet Marketing / Communication",
      intro: "Étudiante en MSc Marketing & Communication (INSEEC), je cherche une alternance d'un an en gestion de projet, marketing ou communication.",
      cta1: "Voir mes projets",
      cta2: "Me recruter",
      since: "SFR • TBWA • THIRD • ELECTRAD",
    },
    manifesto: {
      kicker: "Message de Zahra",
      text: "Créer des contenus qui engagent, piloter des projets qui livrent, raconter des marques qui comptent.",
      stats: [
        { n: "50+", l: "vidéos BureauTips produites" },
        { n: "400", l: "nouveaux arrivants interrogés" },
        { n: "4", l: "lancements supervisés (TBWA)" },
        { n: "50", l: "emails systèmes réécrits" },
      ],
    },
    journey: { kicker: "Parcours", title: "On Track — Expérience", title2: "Éducation", hint: "Faites défiler horizontalement" },
    projects: {
      kicker: "Projets",
      title: "Hall of Fame des projets",
      sub: "Cliquez sur un projet pour voir le détail, les livrables et le document Drive.",
      viewDoc: "Voir le document",
      close: "Fermer",
      role: "Mon rôle",
      deliverables: "Livrables",
      results: "Résultats",
      tools: "Outils",
    },
    skills: { kicker: "Compétences", title: "Skills Hall of Fame", sub: "Classées par recommandations LinkedIn. Survolez pour le détail.", endorsements: "recommandations", verified: "Test LinkedIn validé" },
    cta: {
      title: "Alternance Sept. 2026 — Recrutez-moi",
      text: "1 an en gestion de projet, marketing ou communication. Basée à Asnières-sur-Seine, mobile Paris. Anglais C1, Espagnol B2.",
      btn1: "Envoyer un email",
      btn2: "Voir LinkedIn",
    },
    contact: { kicker: "Contact", title: "Créer, Piloter, Raconter.", name: "Votre nom", email: "Votre email", msg: "Votre message", send: "Envoyer via votre messagerie" },
    footer: { rights: "© 2026 Zahra Chibane. Tous droits réservés.", back: "Haut de page" },
  },
  en: {
    nav: { work: "Work", journey: "Journey", skills: "Skills", contact: "Contact", cv: "Download CV" },
    hero: {
      badge: "Marketing & Comms • Paris • Available Sept 2026",
      role: "Marketing / Communications Project Manager",
      intro: "MSc Marketing & Comms student (INSEEC) seeking a 1-year apprenticeship in project management, marketing or communications.",
      cta1: "See my work",
      cta2: "Hire me",
      since: "SFR • TBWA • THIRD • ELECTRAD",
    },
    manifesto: {
      kicker: "A note from Zahra",
      text: "Create content that engages, lead projects that deliver, tell brand stories that matter.",
      stats: [
        { n: "50+", l: "BureauTips videos produced" },
        { n: "400", l: "newcomers surveyed" },
        { n: "4", l: "launches supervised (TBWA)" },
        { n: "50", l: "system emails rewritten" },
      ],
    },
    journey: { kicker: "Journey", title: "On Track — Experience", title2: "Education", hint: "Scroll horizontally" },
    projects: {
      kicker: "Work",
      title: "Project Hall of Fame",
      sub: "Click a project for details, deliverables and the Drive document.",
      viewDoc: "View document",
      close: "Close",
      role: "My role",
      deliverables: "Deliverables",
      results: "Outcomes",
      tools: "Tools",
    },
    skills: { kicker: "Skills", title: "Skills Hall of Fame", sub: "Ranked by LinkedIn endorsements. Hover for detail.", endorsements: "endorsements", verified: "LinkedIn test passed" },
    cta: {
      title: "Sept 2026 Apprenticeship — Hire me",
      text: "1 year in project management, marketing or communications. Based in Asnières-sur-Seine, mobile in Paris. English C1, Spanish B2.",
      btn1: "Send email",
      btn2: "View LinkedIn",
    },
    contact: { kicker: "Contact", title: "Create, Lead, Tell Stories.", name: "Your name", email: "Your email", msg: "Your message", send: "Send via your email app" },
    footer: { rights: "© 2026 Zahra Chibane. All rights reserved.", back: "Back to top" },
  },
};
