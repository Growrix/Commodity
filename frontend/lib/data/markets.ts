import type { OriginMarket, DestinationMarket, TradeCorridor } from "@/lib/types";

export const originMarkets: OriginMarket[] = [
  {
    slug: "brazil",
    name: "Brazil",
    region: "South America",
    summary: "The world's leading exporter of soybeans, corn, sugar, and beef — a cornerstone of our agricultural origination.",
    commodities: ["Soybeans", "Corn", "Soybean Meal", "Sugar", "Pulses"],
    ports: ["Santos", "Paranaguá", "São Luís", "Rio Grande"],
    seasonalNotes: "Soybean harvest March–May; corn summer harvest June–July; multi-crop cycles enable year-round supply.",
  },
  {
    slug: "ukraine",
    name: "Ukraine",
    region: "Black Sea",
    summary: "A critical origin for wheat, corn, sunflower oil, and barley with strong export infrastructure.",
    commodities: ["Wheat", "Corn", "Sunflower Seeds", "Barley", "Soybean Meal"],
    ports: ["Odessa", "Chornomorsk", "Mykolaiv", "Pivdennyi"],
    seasonalNotes: "Wheat harvest July–August; corn harvest October–November; year-round export activity.",
  },
  {
    slug: "russia",
    name: "Russia",
    region: "Black Sea / FSU",
    summary: "World's largest wheat exporter and a significant origin for nitrogen fertilizers, coal, and energy products.",
    commodities: ["Wheat", "Barley", "Urea", "Ammonium Nitrate", "Steam Coal"],
    ports: ["Novorossiysk", "Taman", "Rostov-on-Don"],
    seasonalNotes: "Wheat harvest July–August; continuous fertilizer and coal exports year-round.",
  },
  {
    slug: "australia",
    name: "Australia",
    region: "Asia-Pacific",
    summary: "Premium origin for wheat, barley, canola, lentils, and chickpeas with strong quality credentials.",
    commodities: ["Wheat", "Barley", "Canola", "Lentils", "Chickpeas"],
    ports: ["Port Kembla", "Fremantle", "Port Adelaide", "Geelong"],
    seasonalNotes: "Grain harvest November–January; premium milling and malting quality; strong Asia-Pacific access.",
  },
  {
    slug: "argentina",
    name: "Argentina",
    region: "South America",
    summary: "Leading origin for soybeans, corn, soybean meal, and sunflower products.",
    commodities: ["Soybeans", "Corn", "Soybean Meal", "Sunflower Seed Oil"],
    ports: ["Rosario", "Buenos Aires", "Bahía Blanca"],
    seasonalNotes: "Soybean harvest April–May; corn harvest March–April; export taxes can affect seasonal flow.",
  },
  {
    slug: "indonesia",
    name: "Indonesia",
    region: "South & Southeast Asia",
    summary: "Key origin for steam coal and an emerging origin for palm-based products and wood pellets.",
    commodities: ["Steam Coal", "Wood Pellets", "Palm Kernel Expeller"],
    ports: ["Samarinda", "Bontang", "Tarahan", "Tanjung Bara"],
    seasonalNotes: "Coal exports year-round; seasonality driven by monsoon-related logistics disruptions.",
  },
  {
    slug: "morocco",
    name: "Morocco",
    region: "North Africa",
    summary: "World's largest phosphate rock reserves and a leading producer of DAP, MAP, and TSP.",
    commodities: ["DAP", "MAP", "TSP", "Phosphate Rock"],
    ports: ["Jorf Lasfar", "Casablanca", "Safi"],
    seasonalNotes: "Year-round phosphate production; OCP Group export programmes provide supply stability.",
  },
  {
    slug: "south-africa",
    name: "South Africa",
    region: "Sub-Saharan Africa",
    summary: "Origin for steam coal, iron ore, manganese, and chrome for industrial buyers.",
    commodities: ["Steam Coal", "Iron Ore", "Manganese", "Chrome"],
    ports: ["Richards Bay", "Durban", "Port Elizabeth"],
    seasonalNotes: "Year-round mineral exports; Richards Bay Coal Terminal one of the world's largest coal export terminals.",
  },
];

export const destinationMarkets: DestinationMarket[] = [
  {
    slug: "southeast-asia",
    name: "Southeast Asia",
    region: "Asia-Pacific",
    summary: "Fast-growing demand for food commodities, feed ingredients, and fertilizers across a diverse market cluster.",
    commodities: ["Wheat", "Corn", "Soybeans", "Urea", "DAP", "Steam Coal"],
    ports: ["Singapore", "Bangkok", "Ho Chi Minh City", "Manila", "Jakarta", "Colombo"],
    importNotes: "Phytosanitary compliance varies by country; SGS inspection widely required at destination port.",
  },
  {
    slug: "east-africa",
    name: "East Africa",
    region: "Sub-Saharan Africa",
    summary: "Growing demand for wheat flour, sugar, fertilizers, and energy commodities in a USD-driven import market.",
    commodities: ["Wheat", "Sugar", "Urea", "DAP", "Diesel"],
    ports: ["Mombasa", "Dar es Salaam", "Djibouti", "Berbera"],
    importNotes: "LC preferred for most buyers; freight insurance documentation critical; East African Community customs requirements apply.",
  },
  {
    slug: "middle-east",
    name: "Middle East",
    region: "Middle East & North Africa",
    summary: "High-value market for wheat, feed ingredients, fertilizers, and industrial materials.",
    commodities: ["Wheat", "Soybean Meal", "DAP", "Urea", "Aluminium Ingots"],
    ports: ["Jeddah", "Dubai / Port Rashid", "Kuwait", "Abu Dhabi", "Oman"],
    importNotes: "Halal certification required for food products; Saudi SFDA and UAE MOIAT compliance standard.",
  },
  {
    slug: "west-africa",
    name: "West Africa",
    region: "Sub-Saharan Africa",
    summary: "Important destination for broken rice, sugar, wheat, and fertilizers — strong growth market.",
    commodities: ["Broken Rice", "Sugar", "Wheat", "Urea", "DAP"],
    ports: ["Lagos / Apapa", "Abidjan", "Dakar", "Tema"],
    importNotes: "ECOWAS tariff framework applies; trade finance often through confirmed LCs; transit logistics complex.",
  },
  {
    slug: "south-asia",
    name: "South Asia",
    region: "Asia-Pacific",
    summary: "Demand centre for fertilizers, edible oils, sugar, and pulses across India, Bangladesh, Pakistan, and Sri Lanka.",
    commodities: ["Urea", "DAP", "Palm Oil", "Sugar", "Lentils", "Chickpeas"],
    ports: ["Mumbai", "Kandla", "Chittagong", "Karachi", "Colombo"],
    importNotes: "BIS/FSSAI compliance for food products in India; price-sensitive market with seasonally driven procurement.",
  },
];

export const tradeCorridors: TradeCorridor[] = [
  {
    slug: "black-sea-to-east-africa",
    name: "Black Sea → East Africa",
    origin: "Ukraine / Russia",
    destination: "Kenya, Tanzania, Ethiopia, Djibouti",
    summary: "High-volume grain and fertilizer corridor supporting food security across East African markets.",
    commodities: ["Wheat", "Sunflower Oil", "Urea", "Ammonium Nitrate"],
    transitDays: "18–25 days",
    documentation: ["Bill of Lading", "SGS Certificate of Quality", "Phytosanitary Certificate", "Certificate of Origin", "Letter of Credit"],
  },
  {
    slug: "south-america-to-southeast-asia",
    name: "South America → Southeast Asia",
    origin: "Brazil / Argentina",
    destination: "Vietnam, Indonesia, Philippines, Thailand",
    summary: "Major soybean, soybean meal, and sugar route serving Asian feed and food manufacturing demand.",
    commodities: ["Soybeans", "Soybean Meal", "Corn", "Sugar"],
    transitDays: "22–35 days",
    documentation: ["Bill of Lading", "SGS Quality Certificate", "OMIC or equivalent inspection", "Certificate of Origin", "LC or DA/DP terms"],
  },
  {
    slug: "north-america-to-middle-east",
    name: "North America → Middle East",
    origin: "USA / Canada",
    destination: "Saudi Arabia, UAE, Kuwait, Egypt",
    summary: "Wheat, barley, and pulse corridor supplying food-secure procurement by Gulf state buyers.",
    commodities: ["Wheat", "Barley", "Lentils", "Chickpeas"],
    transitDays: "20–30 days",
    documentation: ["Bill of Lading", "USDA/CFIA phytosanitary certificate", "SGS weight and quality certificate", "Halal declaration (food)"],
  },
  {
    slug: "indonesia-to-india",
    name: "Indonesia → India",
    origin: "Indonesia",
    destination: "India (Kandla, Mundra, Paradip)",
    summary: "Steam coal and petroleum coke movement serving Indian power and industrial consumers.",
    commodities: ["Steam Coal", "Petroleum Coke"],
    transitDays: "7–14 days",
    documentation: ["Bill of Lading", "Quality and weight certificate", "Certificate of Origin", "Draft survey report"],
  },
  {
    slug: "morocco-to-west-africa",
    name: "Morocco → West Africa",
    origin: "Morocco (Jorf Lasfar)",
    destination: "Nigeria, Ghana, Côte d'Ivoire, Senegal",
    summary: "Phosphate fertilizer corridor from OCP-backed exports to West African agri-input markets.",
    commodities: ["DAP", "MAP", "TSP", "SSP"],
    transitDays: "7–12 days",
    documentation: ["Bill of Lading", "OCP quality certificate", "Certificate of Origin", "ECOWAS import documentation"],
  },
];

export function getOriginMarketBySlug(slug: string): OriginMarket | undefined {
  return originMarkets.find((m) => m.slug === slug);
}

export function getDestinationMarketBySlug(slug: string): DestinationMarket | undefined {
  return destinationMarkets.find((m) => m.slug === slug);
}

export function getTradeCorridorBySlug(slug: string): TradeCorridor | undefined {
  return tradeCorridors.find((c) => c.slug === slug);
}
