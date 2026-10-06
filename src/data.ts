export const BUSINESS = {
  name: "Lawn Care and Landscaping",
  phone: "(972) 961-6084",
  phoneHref: "tel:+19729616084",
  address: "Serving Dallas–Fort Worth, TX",
  hours: "Mon–Sat 8am–6pm",
  emergency: "Storm cleanup with fast response",
  rating: "5.0",
  reviewCount: "120+",
};

export const NAV = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Service Areas", href: "/service-areas" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

/* Stacked headline words (section 2) */
export const STACK_WORDS = ["Mowing.", "Edging.", "Fertilizing.", "Cleanup."];

export interface FloatCard {
  img: string;
  title: string;
  meta: string;
  rotate: string;
  offset: string;
}

export const FLOAT_CARDS: FloatCard[] = [
  {
    img: "/img/lawn/mower.jpg",
    title: "Lawn mowing",
    meta: "Stripes & edges · Weekly plans",
    rotate: "rotate-[4deg]",
    offset: "md:translate-y-10",
  },
  {
    img: "/img/lawn/edging.jpg",
    title: "Edging & trimming",
    meta: "Crisp lines · Every visit",
    rotate: "rotate-[-3deg]",
    offset: "md:-translate-y-6",
  },
  {
    img: "/img/lawn/stripes2.webp",
    title: "Fertilization & weed control",
    meta: "Weed-free · Season program",
    rotate: "rotate-[2.5deg]",
    offset: "md:translate-y-16",
  },
];

/* Dark numbered list (section 3) */
export interface ListRow {
  img: string;
  title: string;
  desc: string;
}

export const LIST_ROWS: ListRow[] = [
  {
    img: "/img/lawn/mower.jpg",
    title: "Lawn mowing",
    desc: "Weekly cuts with sharp stripes",
  },
  {
    img: "/img/lawn/edging.jpg",
    title: "Edging & trimming",
    desc: "Clean lines, every visit",
  },
  {
    img: "/img/lawn/stripes2.webp",
    title: "Fertilization & weed control",
    desc: "Green turf, no weeds",
  },
  {
    img: "/img/lawn/lawn1.jpg",
    title: "Aeration & overseeding",
    desc: "Thicker grass from the roots",
  },
  {
    img: "/img/lawn/mower2.jpg",
    title: "Yard cleanup",
    desc: "Debris gone, lawn breathing",
  },
];

/* Glass cards on full-bleed image (section 4) */
export interface GlassCard {
  title: string;
  desc: string;
  pos: string;
}

export const GLASS_CARDS: GlassCard[] = [
  {
    title: "Free estimates",
    desc: "On-site quotes, usually same-day.",
    pos: "left-[6%] top-[16%]",
  },
  {
    title: "Licensed & insured",
    desc: "Full coverage on every single job.",
    pos: "right-[8%] top-[24%]",
  },
  {
    title: "Weekly plans",
    desc: "Same crew, same day, all season.",
    pos: "left-[10%] bottom-[20%]",
  },
  {
    title: "5.0 ★★★★★",
    desc: "120+ Google reviews from Dallas neighbors.",
    pos: "right-[10%] bottom-[14%]",
  },
];

/* Real work gallery (section 5) — actual tree-work photos */
export interface WorkShot {
  img: string;
  title: string;
  location: string;
}

export const WORK_SHOTS: WorkShot[] = [
  { img: "/img/lawn/stripes.jpg", title: "Weekly mow with sharp stripes", location: "Dallas, TX" },
  { img: "/img/lawn/mower.jpg", title: "Mid-season cut, full service", location: "Garland, TX" },
  { img: "/img/lawn/edging.jpg", title: "Edge work along walk and drive", location: "Plano, TX" },
  { img: "/img/lawn/stripes2.webp", title: "Fertilization program results", location: "Richardson, TX" },
  { img: "/img/lawn/lawn1.jpg", title: "Aeration and overseed recovery", location: "Irving, TX" },
  { img: "/img/lawn/mower2.jpg", title: "Fall cleanup, haul-away included", location: "Mesquite, TX" },
];

export interface Service {
  img: string;
  title: string;
  desc: string;
}

export const SERVICES: Service[] = [
  {
    img: "/img/lawn/mower.jpg",
    title: "Lawn mowing",
    desc: "Crisp stripes and clean edges, every single visit. Weekly or biweekly plans.",
  },
  {
    img: "/img/lawn/edging.jpg",
    title: "Edging & trimming",
    desc: "Sharp lines along sidewalks, driveways, and garden beds.",
  },
  {
    img: "/img/lawn/stripes2.webp",
    title: "Fertilization & weed control",
    desc: "Thick, green, weed-free turf on a season-long program.",
  },
  {
    img: "/img/lawn/lawn1.jpg",
    title: "Aeration & overseeding",
    desc: "Loosened soil and thicker grass that crowds weeds out naturally.",
  },
  {
    img: "/img/lawn/mower2.jpg",
    title: "Yard cleanup",
    desc: "Leaves, sticks, and overgrowth cleared and hauled away.",
  },
  {
    img: "/img/lawn/stripes.jpg",
    title: "Mulch & bed care",
    desc: "Fresh mulch, weed-free beds, and sharp definition.",
  },
];

export interface Review {
  name: string;
  town: string;
  text: string;
}

export const REVIEWS: Review[] = [
  {
    name: "Marcus T.",
    town: "Dallas",
    text: "My lawn went from patchy embarrassment to the best-looking yard on the block in about two months. The stripes alone are worth it.",
  },
  {
    name: "Priya S.",
    town: "Plano",
    text: "They show up the same day every week without me having to think about it. Edges are always razor sharp. Zero complaints.",
  },
  {
    name: "Dave R.",
    town: "Garland",
    text: "Fair price, and the fertilization program actually worked — weeds gone, grass thick. They explain everything they do.",
  },
  {
    name: "Angela M.",
    town: "Richardson",
    text: "Had them do a full fall cleanup plus aeration. Hauled everything away and the lawn came back stronger in spring.",
  },
];

export const TOWNS = [
  "Dallas",
  "Garland",
  "Mesquite",
  "Richardson",
  "Plano",
  "Irving",
  "Grand Prairie",
  "Arlington",
  "Farmers Branch",
  "Addison",
  "Carrollton",
  "Coppell",
];

export interface ServiceCard {
  img: string;
  from: string;
  title: string;
  desc: string;
}

export const SERVICE_CARDS: ServiceCard[] = [
  {
    img: "/img/lawn/cards/mow.jpg",
    from: "$45",
    title: "Lawn mowing",
    desc: "Weekly cuts with crisp stripes and edging included, at the right height for Texas grass.",
  },
  {
    img: "/img/lawn/cards/edge.jpg",
    from: "$79",
    title: "Edging & trimming",
    desc: "Sharp lines along walks, drives, and garden beds — finished on every single visit.",
  },
  {
    img: "/img/lawn/cards/feed.jpg",
    from: "$59",
    title: "Fertilization & weed control",
    desc: "Season-long feeding that keeps turf thick, green, and weeds crowded out.",
  },
  {
    img: "/img/lawn/cards/aerate.jpg",
    from: "$149",
    title: "Aeration & overseeding",
    desc: "Loosened, decompacted soil and thicker growth starting from the roots.",
  },
  {
    img: "/img/lawn/cards/cleanup.jpg",
    from: "$149",
    title: "Yard cleanup",
    desc: "Leaves, sticks, and overgrowth cleared and hauled away, yard left breathing.",
  },
  {
    img: "/img/lawn/cards/mulch.jpg",
    from: "$99",
    title: "Mulch & bed care",
    desc: "Fresh mulch, weed-free beds, and sharp definition that frames the whole lawn.",
  },
];
