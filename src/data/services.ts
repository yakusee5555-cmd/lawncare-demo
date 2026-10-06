export interface ServiceDetail {
  slug: string;
  title: string;
  tagline: string;
  img: string;
  description: string[];
  included: string[];
  steps: { title: string; desc: string }[];
  pricingHint: string;
  faqs: { q: string; a: string }[];
  meta: string;
}

export const SERVICE_DETAILS: ServiceDetail[] = [
  {
    slug: "lawn-mowing",
    title: "Lawn Mowing",
    tagline: "Crisp stripes, every visit.",
    img: "/img/lawn/mower.jpg",
    description: [
      "A great lawn is a routine, not a rescue mission. We cut weekly or biweekly at the right height for your grass type, stripe it clean, and edge every border so the whole property looks sharp.",
      "Same crew, same day, all season. You never have to think about the yard again.",
    ],
    included: [
      "Mowing at proper grass height",
      "Crisp stripe patterns",
      "Edging along walks & drives",
      "Trimming around beds & trees",
      "Clippings mulched or bagged",
      "Blow-off of all hard surfaces",
    ],
    steps: [
      { title: "Walkthrough",
        desc: "We measure the lawn, note gates and trouble spots, and set your day.", },
      { title: "First cut",
        desc: "We reset everything once so maintenance starts from clean.", },
      { title: "Regular visits",
        desc: "Weekly or biweekly, same crew. Stripes every time.", },
      { title: "Seasonal tweaks",
        desc: "Cut height adjusts with the Texas heat so grass never scalps.", },
    ],
    pricingHint: "Weekly plans from $45/visit depending on lot size. Free walkthrough and a firm quote first.",
    faqs: [
      {
        q: "How much does lawn mowing cost?",
        a: "Most Dallas homes run $45–$120 per visit depending on lot size. We quote firm and free before the first cut.",
      },
      {
        q: "How often do you come?",
        a: "Weekly in growing season, biweekly when growth slows. You pick the rhythm.",
      },
      {
        q: "Do you edge every time?",
        a: "Yes. Every visit includes edging along walks, drives, and beds, plus a full blow-off.",
      },
      {
        q: "What if it rains on my day?",
        a: "We shift you to the next dry day that week. You are never skipped.",
      },
    ],
    meta: "Lawn mowing in Dallas, TX. Weekly plans, crisp stripes, edging included. Free estimates.",
  },
  {
    slug: "edging-trimming",
    title: "Edging & Trimming",
    tagline: "Sharp lines, every visit.",
    img: "/img/lawn/edging.jpg",
    description: [
      "Edges are what separate a decent lawn from a great one. We cut clean vertical lines along every sidewalk, driveway, and bed border, and trim around everything the mower can't reach.",
      "It is the detail neighbors actually notice, and it is included in every visit, not sold as an add-on.",
    ],
    included: [
      "Vertical edging on all hardscapes",
      "Trimming around trees & beds",
      "Fence-line touch-ups",
      "Blow-off after every edge",
      "Overgrowth reset available",
      "Included in every mowing visit",
    ],
    steps: [
      { title: "Assess",
        desc: "We walk the borders and note where edges have grown over.", },
      { title: "Cut",
        desc: "Clean vertical cuts re-establish every line.", },
      { title: "Trim",
        desc: "String work around obstacles, beds, and tight corners.", },
      { title: "Blow off",
        desc: "Every hard surface left spotless.", },
    ],
    pricingHint: "Included free with every mowing plan. Standalone edge resets from $79.",
    faqs: [
      {
        q: "Is edging included or extra?",
        a: "Included. Every mowing visit gets full edging and trimming at no extra charge.",
      },
      {
        q: "My edges are totally overgrown. Can you fix that?",
        a: "Yes. A one-time edge reset brings every border back, then weekly visits keep it there.",
      },
      {
        q: "Do you edge flower beds too?",
        a: "Yes, bed borders get the same crisp treatment as sidewalks.",
      },
    ],
    meta: "Lawn edging in Dallas, TX. Crisp lines along walks, drives, and beds. Free estimates.",
  },
  {
    slug: "fertilization-weed-control",
    title: "Fertilization & Weed Control",
    tagline: "Thick, green, weed-free.",
    img: "/img/lawn/stripes2.webp",
    description: [
      "Thin, weedy grass is almost always a feeding problem. Our season-long program feeds your lawn what Texas soil actually needs and keeps weeds from ever getting a foothold.",
      "You get a scheduled program, not a one-time spray. Thick turf crowds weeds out on its own, so results compound all season.",
    ],
    included: [
      "Season-long fertilization program",
      "Pre-emergent weed prevention",
      "Broadleaf weed control",
      "Grub & pest treatments",
      "Soil-tuned for Texas lawns",
      "Scheduled visits, no reminders needed",
    ],
    steps: [
      { title: "Lawn analysis",
        desc: "We check grass type, weeds present, and trouble areas.", },
      { title: "Program plan",
        desc: "You get the season schedule up front: what goes down and when.", },
      { title: "Applications",
        desc: "Timed treatments through the growing season.", },
      { title: "Check-ins",
        desc: "We watch for breakthrough weeds and spot-treat between visits.", },
    ],
    pricingHint: "Season programs from $59/application, typically 6–8 rounds per year. Free lawn analysis.",
    faqs: [
      {
        q: "How much does fertilization cost?",
        a: "Most programs run $59–$99 per application with 6–8 rounds a season. The analysis and quote are free.",
      },
      {
        q: "Is it safe for kids and pets?",
        a: "Yes. We use family-safe products and tell you exactly when it is fine to use the lawn again.",
      },
      {
        q: "How fast will I see results?",
        a: "Weeds start dying back in 1–2 weeks; thickness builds over the season.",
      },
      {
        q: "Can I just do weed control?",
        a: "Yes, but feeding plus prevention together is what keeps weeds from coming back.",
      },
    ],
    meta: "Lawn fertilization in Dallas, TX. Weed control, season programs, thicker turf. Free estimates.",
  },
  {
    slug: "aeration-overseeding",
    title: "Aeration & Overseeding",
    tagline: "Thicker grass from the roots.",
    img: "/img/lawn/lawn1.jpg",
    description: [
      "Texas soil compacts like concrete, and compacted soil starves roots. Core aeration pulls thousands of plugs so air, water, and nutrients finally reach the root zone.",
      "Pair it with overseeding and the lawn fills in bare spots with fresh, dense growth. It is the single best thing you can do for a tired lawn short of replacing it.",
    ],
    included: [
      "Core aeration, full lawn",
      "Overseeding with premium seed",
      "Starter fertilizer included",
      "Bare-spot focus treatment",
      "Plug cleanup",
      "Watering guide after service",
    ],
    steps: [
      { title: "Assess",
        desc: "We check compaction and bare areas to set expectations.", },
      { title: "Aerate",
        desc: "Thousands of cores pulled across the whole lawn.", },
      { title: "Seed & feed",
        desc: "Premium seed worked into the holes with starter fertilizer.", },
      { title: "Aftercare",
        desc: "You get a simple watering plan; we check germination.", },
    ],
    pricingHint: "Aeration from $149; aeration + overseeding from $249 depending on lawn size.",
    faqs: [
      {
        q: "When should I aerate?",
        a: "Fall is ideal in Dallas — warm soil, less weed pressure, perfect for seed.",
      },
      {
        q: "Will it fix my bare spots?",
        a: "Yes, especially paired with overseeding. Most lawns thicken visibly within 6–8 weeks.",
      },
      {
        q: "Do you clean up the plugs?",
        a: "Yes. Cores break down fast, and we tidy any stragglers before we leave.",
      },
    ],
    meta: "Lawn aeration in Dallas, TX. Core aeration and overseeding for thicker turf. Free estimates.",
  },
  {
    slug: "yard-cleanup",
    title: "Yard Cleanup",
    tagline: "Debris gone, lawn breathing.",
    img: "/img/lawn/mower2.jpg",
    description: [
      "Leaves, fallen branches, and a season of neglect bury a lawn fast. Our cleanups strip all of it away and haul everything off so the grass can breathe again.",
      "One visit or seasonal: spring wake-ups, fall leaf removal, and storm debris. Whatever the yard needs, we reset it.",
    ],
    included: [
      "Leaf & debris removal",
      "Branch & stick pickup",
      "Bed cleanout",
      "Gutter-line clearing",
      "Full haul-away included",
      "Mow & edge to finish",
    ],
    steps: [
      { title: "Walkthrough",
        desc: "We scope the debris and quote firm on the spot.", },
      { title: "Clear",
        desc: "Rake, blow, and gather everything.", },
      { title: "Haul",
        desc: "Every bag and branch leaves with us.", },
      { title: "Finish",
        desc: "We mow and edge so the yard looks reset, not just cleared.", },
    ],
    pricingHint: "Cleanups from $149 depending on debris volume. Firm quote free on-site.",
    faqs: [
      {
        q: "How much does a yard cleanup cost?",
        a: "Most run $149–$399 depending on how much debris there is. We quote firm before starting.",
      },
      {
        q: "Do you haul everything away?",
        a: "Yes. Every bag, branch, and pile leaves with us.",
      },
      {
        q: "Can you do storm debris?",
        a: "Yes. Fallen limbs and scattered debris are a standard cleanup call.",
      },
    ],
    meta: "Yard cleanup in Dallas, TX. Leaf removal, debris haul-away, seasonal resets. Free estimates.",
  },
  {
    slug: "mulch-bed-care",
    title: "Mulch & Bed Care",
    tagline: "Fresh mulch, sharp beds.",
    img: "/img/lawn/stripes.jpg",
    description: [
      "Tired beds drag down the whole property. We weed, edge, and lay fresh mulch so beds look intentional again and stay that way.",
      "Mulch does real work too: holds moisture through Texas summers, blocks weeds, and feeds the soil as it breaks down.",
    ],
    included: [
      "Bed weeding & cleanout",
      "Crisp bed re-edging",
      "Premium mulch installation",
      "Weed barrier options",
      "Seasonal color add-ons",
      "All debris hauled away",
    ],
    steps: [
      { title: "Cleanout",
        desc: "Weeds pulled, old mulch leveled, edges re-cut.", },
      { title: "Mulch",
        desc: "Fresh 2–3 inch layer, kept off stems and trunks.", },
      { title: "Detail",
        desc: "Beds blown clean, borders sharp.", },
      { title: "Maintain",
        desc: "Add bed care to your mowing plan and never think about it.", },
    ],
    pricingHint: "Mulch installs from $99 per cubic yard installed. Bed cleanouts quoted free.",
    faqs: [
      {
        q: "How much does mulching cost?",
        a: "Installed mulch runs about $99 per cubic yard, which covers roughly 100 sq ft at 3 inches deep.",
      },
      {
        q: "What color mulch do you use?",
        a: "Black, brown, and red hardwood plus cedar. We will match what you have or recommend.",
      },
      {
        q: "How often should beds be remulched?",
        a: "Once a year keeps color rich and weeds down. We can fold it into your seasonal plan.",
      },
    ],
    meta: "Mulch and bed care in Dallas, TX. Fresh mulch, weed-free beds. Free estimates.",
  },
];
