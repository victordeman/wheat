export interface StatItem {
  value: string;
  label: string;
  subtext?: string;
}

export interface PillarItem {
  id: string;
  title: string;
  description: string;
  tag: string;
}

export interface LeadershipItem {
  name: string;
  title: string;
  role: string;
  image: string;
}

export interface PathwayItem {
  id: string;
  title: string;
  description: string;
  actionText: string;
  image: string;
}

export const BASELINE_STATS: StatItem[] = [
  {
    value: "~4.3m MT",
    label: "Wheat imported each year",
    subtext: "National import volume baseline",
  },
  {
    value: "$3bn+",
    label: "Annual import cost",
    subtext: "Foreign exchange outlay",
  },
  {
    value: "~60,000 MT",
    label: "Domestic production today",
    subtext: "Local harvest output",
  },
  {
    value: "~50%",
    label: "Milling capacity utilised",
    subtext: "Current idle capacity line",
  },
];

export const CHALLENGE_TABS = [
  {
    id: "challenge",
    label: "The Challenge",
    title: "Nigeria consumes wheat at industrial scale, but produces almost none of it.",
    body: "The country imports around 4.3 million metric tonnes of wheat every year, at a cost of more than $3 billion. Domestic production stands at roughly 60,000 metric tonnes. That imbalance shapes the price of bread, noodles, pasta and other wheat-based staples in every market in the Federation.",
  },
  {
    id: "evidence",
    label: "The Evidence",
    title: "The numbers describe a value chain running below its potential.",
    body: "Milling utilisation sits at about 50%. Grain inventory is typically around 1 month. Artisanal and SME bakers already account for 72% of the baked-goods market — a vast productive base that remains exposed to imported grain, thin working capital and uneven flour supply.",
  },
  {
    id: "consequence",
    label: "The Consequence",
    title: "Import dependence feeds directly into household costs.",
    body: "When foreign exchange is scarce, wheat prices rise and consumer foods become less affordable. Idle milling capacity, short inventories and fragmented MSME production leave the chain unable to absorb shocks. The result is higher prices, weaker local enterprise and a persistent drain on national reserves.",
  },
  {
    id: "intervention",
    label: "The Intervention",
    title: "WHEAT-NESS exists to reset the economics of the chain.",
    body: "The programme coordinates value chain development, enterprise development, consumer demand for made-in-Nigeria wheat foods, and a self-renewing development fund. It is an industrial architecture for lower costs, higher utilisation and lasting private-sector participation.",
  },
];

export const PROGRAMME_OBJECTIVES: PillarItem[] = [
  {
    id: "01",
    title: "Raise milling utilisation",
    description: "Put idle mill capacity back to work through structured offtake partnerships and more predictable grain-to-flour flow. Raise milling utilisation from 50% to 65%.",
    tag: "Capacity Target: 50% → 65%",
  },
  {
    id: "02",
    title: "Ease consumer costs",
    description: "Target a 5–10% reduction in the cost of selected wheat-based consumer foods through a more efficient chain, not a permanent subsidy.",
    tag: "Cost Reduction: 5–10%",
  },
  {
    id: "03",
    title: "Scale MSMEs",
    description: "Equip bakeries and wheat-food enterprises with flour access, enterprise support and a clearer route into formal markets.",
    tag: "Market Base: 72% SME Bakeries",
  },
  {
    id: "04",
    title: "Endow a development fund",
    description: "Capitalise a self-renewing fund so the programme can keep financing value-chain activity after the first public allocation.",
    tag: "Self-Renewing Capital Spine",
  },
];

export const LEADERSHIP_PROFILES: LeadershipItem[] = [
  {
    name: "Senator John Owan Enoh",
    title: "Honourable Minister of State for Industry, Trade and Investment",
    role: "Chairman, Steering Committee",
    image: "https://wheatness-test.vercel.app/images/senator.jpg",
  },
  {
    name: "Gerald Okunsebor",
    title: "National Programme Coordinator, Project WHEAT-NESS",
    role: "Programme Delivery Unit",
    image: "https://wheatness-test.vercel.app/images/Gerald.jpg",
  },
];

export const GOVERNANCE_STEPS = [
  {
    step: "01",
    title: "The Presidency",
    description: "National authority and policy direction for a programme of Federation-wide economic consequence.",
  },
  {
    step: "02",
    title: "Steering Committee",
    description: "Chaired by the Honourable Minister of State for Industry, Trade and Investment, with representation from the Ministry of Finance, Ministry of Agriculture, and the Organised Private Sector.",
  },
  {
    step: "03",
    title: "Programme Delivery Unit",
    description: "Day-to-day coordination, partner management and public reporting of programme activity.",
  },
];

export const PARALLEL_TRACKS = [
  {
    title: "Miller Diversification",
    subtitle: "Industry",
    description: "Encourage millers to deepen participation in the consumer-foods chain not only as processors of imported grain, but as partners in offtake, product range and market stability.",
    image: "https://wheatness-test.vercel.app/images/photo-mill-2.jpg",
  },
  {
    title: "Research & Domestic Production",
    subtitle: "Agronomy & Long Horizon",
    description: "A longer track: research, agronomy and production systems that can raise Nigeria’s own wheat output from today’s ~60,000 MT baseline.",
    image: "https://wheatness-test.vercel.app/images/photo-wheat-blue.jpg",
  },
];

export const PATHWAYS: PathwayItem[] = [
  {
    id: "millers",
    title: "Millers",
    description: "Bring installed capacity into structured offtake arrangements and processing alignment.",
    actionText: "Start a conversation",
    image: "https://wheatness-test.vercel.app/images/photo-mill.jpg",
  },
  {
    id: "msmes",
    title: "MSMEs",
    description: "Bakeries and wheat-food enterprises seeking flour access and enterprise support.",
    actionText: "Register interest",
    image: "https://wheatness-test.vercel.app/images/photo-bakery.jpg",
  },
  {
    id: "investors",
    title: "Investors & OPS",
    description: "Organised private sector and capital partners for fund capitalisation and industrial scale.",
    actionText: "Request a briefing",
    image: "https://wheatness-test.vercel.app/images/photo-silos.png",
  },
  {
    id: "public",
    title: "General Public",
    description: "Households, journalists and citizens following the programme or raising a concern.",
    actionText: "Write to us",
    image: "https://wheatness-test.vercel.app/images/farmers-wheat-field.jpg",
  },
];
