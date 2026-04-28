export interface ContentSection {
  heading: string;
  paragraphs: string[];
}

export interface DocumentLink {
  label: string;
  href: string;
}

export interface TrustDocument {
  slug: string;
  title: string;
  documentType: string;
  owner: string;
  effectiveDate: string;
  reviewedAt: string;
  summary: string;
  sections: ContentSection[];
  relatedLinks: DocumentLink[];
}

export interface LegalDocument {
  route: "privacy-policy" | "terms-and-conditions" | "cookie-policy";
  title: string;
  owner: string;
  effectiveDate: string;
  summary: string;
  sections: ContentSection[];
  relatedLinks: DocumentLink[];
}

export const contactPaths = [
  {
    title: "Request a Quote",
    href: "/partner-with-us/buyers#quote",
    description:
      "For qualified buyers with a defined commodity, destination, volume, and delivery window.",
  },
  {
    title: "Sourcing Request",
    href: "/partner-with-us/buyers#sourcing",
    description:
      "For harder-to-source requirements, multi-origin supply programs, or open specification support.",
  },
  {
    title: "Supplier Registration",
    href: "/partner-with-us/suppliers",
    description:
      "For producers, exporters, and processors that want to onboard into our supply network.",
  },
  {
    title: "Strategic Partnership",
    href: "/partner-with-us/partners",
    description:
      "For logistics, finance, warehousing, distribution, or market development partnerships.",
  },
];

export const regionalOffices = [
  {
    city: "London",
    country: "United Kingdom",
    focus: "Head office, Europe, and cross-border trade coordination",
    timezone: "GMT / BST",
    email: "commercial@veterraglobal.com",
  },
  {
    city: "Dubai",
    country: "United Arab Emirates",
    focus: "MENA, South Asia, and structured trade finance coverage",
    timezone: "GST",
    email: "mena@veterraglobal.com",
  },
  {
    city: "Singapore",
    country: "Singapore",
    focus: "Asia-Pacific buyers, suppliers, and corridor execution",
    timezone: "SGT",
    email: "asia@veterraglobal.com",
  },
  {
    city: "Nairobi",
    country: "Kenya",
    focus: "East and Sub-Saharan Africa commercial support",
    timezone: "EAT",
    email: "africa@veterraglobal.com",
  },
];

export const trustDocuments: TrustDocument[] = [
  {
    slug: "compliance-policy",
    title: "Compliance and Anti-Bribery Policy",
    documentType: "Governance Policy",
    owner: "Group Compliance",
    effectiveDate: "2026-01-15",
    reviewedAt: "2026-04-10",
    summary:
      "The control framework governing sanctions screening, anti-bribery commitments, counterparty onboarding, and escalation expectations across all markets.",
    sections: [
      {
        heading: "Policy Scope",
        paragraphs: [
          "This policy applies to all employees, commercial representatives, and third-party intermediaries acting on behalf of Veterra Global across sourcing, sales, logistics, and finance workflows.",
          "The policy covers anti-bribery, anti-corruption, sanctions compliance, gifts and hospitality, facilitation payments, and high-risk market escalation requirements.",
        ],
      },
      {
        heading: "Counterparty Controls",
        paragraphs: [
          "Every buyer, supplier, and intermediary is screened before onboarding against UK, EU, UN, and OFAC sanctions lists. Higher-risk counterparties require enhanced due diligence and documented compliance approval.",
          "Commercial teams may not confirm business with a new counterparty until KYC, beneficial ownership review, and applicable market risk checks are completed.",
        ],
      },
      {
        heading: "Escalation and Reporting",
        paragraphs: [
          "Potential bribery, sanctions, documentary irregularity, or politically exposed party concerns must be escalated immediately to Group Compliance before any contractual commitment is made.",
          "Confirmed breaches are recorded, investigated, and retained in the incident register together with remediation actions and management sign-off.",
        ],
      },
    ],
    relatedLinks: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Supplier Code of Conduct", href: "/trust-center/supplier-code" },
      { label: "Contact Compliance Team", href: "/contact" },
    ],
  },
  {
    slug: "supplier-code",
    title: "Supplier Code of Conduct",
    documentType: "Supplier Standard",
    owner: "Procurement and Compliance",
    effectiveDate: "2026-01-20",
    reviewedAt: "2026-04-10",
    summary:
      "Minimum operating, labour, environmental, and documentary standards expected from all suppliers and processors before onboarding or renewal.",
    sections: [
      {
        heading: "Business Integrity",
        paragraphs: [
          "Suppliers must comply with applicable anti-bribery, sanctions, export control, and competition laws in every jurisdiction where goods are sourced, handled, or sold.",
          "False documentation, undisclosed agent relationships, or attempts to bypass sanctions or origin controls are grounds for immediate disqualification.",
        ],
      },
      {
        heading: "Labour and Human Rights",
        paragraphs: [
          "Suppliers must prohibit forced labour, child labour, discriminatory employment practices, and unsafe working conditions across owned sites and material subcontractors.",
          "We may request supporting evidence, certifications, or corrective action plans where sourcing regions or commodities carry elevated risk.",
        ],
      },
      {
        heading: "Traceability and Documentation",
        paragraphs: [
          "Suppliers must maintain documentation supporting origin, quality, specification, and lawful export of goods, including certificates required by the commodity and destination market.",
          "Failure to provide traceable and auditable records may delay shipment approval or lead to removal from the approved supplier list.",
        ],
      },
    ],
    relatedLinks: [
      { label: "Supplier Registration", href: "/partner-with-us/suppliers" },
      { label: "Environmental Policy", href: "/trust-center/environmental-policy" },
      { label: "Data Retention Policy", href: "/trust-center/data-retention" },
    ],
  },
  {
    slug: "environmental-policy",
    title: "Environmental and Responsible Sourcing Policy",
    documentType: "Sustainability Policy",
    owner: "Operations and Compliance",
    effectiveDate: "2026-02-01",
    reviewedAt: "2026-04-12",
    summary:
      "The baseline environmental and responsible sourcing commitments applied to supplier onboarding, commodity review, and customer assurance requests.",
    sections: [
      {
        heading: "Responsible Sourcing Baseline",
        paragraphs: [
          "We assess environmental and social risk as part of supplier onboarding, with specific attention to land-use change, deforestation exposure, waste handling, and water stewardship where relevant to the commodity.",
          "Priority commodities and higher-risk origin markets may require enhanced declarations, certification evidence, or origin traceability before approval.",
        ],
      },
      {
        heading: "Operational Expectations",
        paragraphs: [
          "Approved suppliers are expected to maintain lawful environmental permits, incident reporting procedures, and practical controls around storage, spills, emissions, and waste.",
          "Where material non-compliance is identified, suppliers must complete a corrective action plan or risk suspension from future tenders and trade allocations.",
        ],
      },
      {
        heading: "Customer Support",
        paragraphs: [
          "Commercial teams support buyer due diligence requests by coordinating available certifications, origin declarations, and commodity-specific responsible sourcing evidence.",
          "This policy does not replace buyer-specific ESG terms but establishes the minimum controls applied across our phase-1 sourcing model.",
        ],
      },
    ],
    relatedLinks: [
      { label: "Trust Center", href: "/trust-center" },
      { label: "About Our Standards", href: "/about#compliance" },
      { label: "Contact Our Team", href: "/contact" },
    ],
  },
  {
    slug: "data-retention",
    title: "Data Retention Policy",
    documentType: "Data Governance Policy",
    owner: "Operations and Compliance",
    effectiveDate: "2026-02-10",
    reviewedAt: "2026-04-12",
    summary:
      "Retention principles for commercial inquiries, supplier onboarding records, operational documentation, and incident evidence handled across public-site workflows.",
    sections: [
      {
        heading: "Retention Principles",
        paragraphs: [
          "Information is retained only for the period needed to support contractual performance, compliance obligations, legal defense, or documented operational requirements.",
          "Retention schedules differ by record type, with the shortest practical retention used where there is no continuing compliance or commercial justification.",
        ],
      },
      {
        heading: "Operational Records",
        paragraphs: [
          "Inquiry submissions, supplier onboarding materials, and supporting commercial correspondence are retained in secure operational systems with access limited to authorized teams.",
          "Deletion, anonymization, or archival controls are applied at the end of the retention window unless a legal hold or active dispute requires preservation.",
        ],
      },
      {
        heading: "Data Subject and Customer Requests",
        paragraphs: [
          "Privacy-related requests are reviewed alongside the applicable retention obligation and any overriding compliance or dispute-management requirements.",
          "Where deletion cannot be completed immediately, the requesting party is informed of the legal or operational basis for continued retention.",
        ],
      },
    ],
    relatedLinks: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Cookie Policy", href: "/cookie-policy" },
      { label: "Contact Our Team", href: "/contact" },
    ],
  },
];

export const legalDocuments: LegalDocument[] = [
  {
    route: "privacy-policy",
    title: "Privacy Policy",
    owner: "Operations and Compliance",
    effectiveDate: "2026-02-10",
    summary:
      "How we collect, use, retain, and protect personal information submitted through the public site and related commercial workflows.",
    sections: [
      {
        heading: "What We Collect",
        paragraphs: [
          "We collect contact information, company details, inquiry content, and any information voluntarily submitted through contact, quote, sourcing, supplier, or partnership forms.",
          "We may also collect limited technical data such as device, browser, approximate region, and referral context to support site security, analytics, and troubleshooting.",
        ],
      },
      {
        heading: "How We Use Information",
        paragraphs: [
          "Information is used to respond to inquiries, assess commercial fit, manage supplier onboarding, maintain operational records, and protect the site against abuse or malicious activity.",
          "We do not sell personal data. Internal access is limited to personnel who need the information for commercial response, compliance review, or operational support.",
        ],
      },
      {
        heading: "Retention and Requests",
        paragraphs: [
          "Personal information is retained in line with our documented retention schedules and deleted or anonymized when no longer required, subject to legal or dispute-related obligations.",
          "Questions about privacy handling or lawful requests regarding personal data may be submitted through our contact channels for review by the responsible team.",
        ],
      },
    ],
    relatedLinks: [
      { label: "Cookie Policy", href: "/cookie-policy" },
      { label: "Terms and Conditions", href: "/terms-and-conditions" },
      { label: "Contact Responsible Team", href: "/contact" },
    ],
  },
  {
    route: "terms-and-conditions",
    title: "Terms and Conditions",
    owner: "Legal and Commercial Operations",
    effectiveDate: "2026-02-10",
    summary:
      "The general use terms governing access to this website, reliance on information, inquiry submissions, and intellectual property on the public marketing site.",
    sections: [
      {
        heading: "Use of the Site",
        paragraphs: [
          "This site is provided for business information and introductory commercial engagement. It does not create a binding offer, quotation, supply commitment, or contractual obligation by itself.",
          "Users must not misuse the site, attempt to gain unauthorized access, disrupt functionality, or submit unlawful, misleading, or malicious content through any form or contact channel.",
        ],
      },
      {
        heading: "Information and Reliance",
        paragraphs: [
          "Commodity availability, route examples, certifications, and market commentary are presented for general informational purposes and may change without notice.",
          "Any binding commercial terms are governed only by executed contracts, trade confirmations, or other signed commercial instruments.",
        ],
      },
      {
        heading: "Ownership and Contact",
        paragraphs: [
          "Site content, structure, trademarks, and design remain the property of the relevant rights holders unless otherwise stated. Unauthorized reproduction or misleading use is prohibited.",
          "Questions about these terms, website use, or responsible contact routes may be directed through the main contact page.",
        ],
      },
    ],
    relatedLinks: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Cookie Policy", href: "/cookie-policy" },
      { label: "Contact Responsible Team", href: "/contact" },
    ],
  },
  {
    route: "cookie-policy",
    title: "Cookie Policy",
    owner: "Operations and Compliance",
    effectiveDate: "2026-02-10",
    summary:
      "An overview of the cookies and similar technologies used to support site performance, analytics, and basic functional experience.",
    sections: [
      {
        heading: "Types of Cookies",
        paragraphs: [
          "We may use strictly necessary cookies to support secure site delivery and session continuity, as well as analytics cookies where approved for measurement and performance monitoring.",
          "The exact set of analytics tools may change as the project finalizes provider selection, but any optional measurement technology is expected to follow the documented consent and governance posture.",
        ],
      },
      {
        heading: "How Cookies Support the Site",
        paragraphs: [
          "Cookies and similar technologies help us understand content usage, improve navigation, detect operational issues, and maintain a reliable frontend experience across device types.",
          "They are not used to create a customer portal profile or enable personalized pricing in phase 1.",
        ],
      },
      {
        heading: "Managing Preferences",
        paragraphs: [
          "Users can manage or clear cookies through browser settings. If consent tooling is introduced for optional analytics, those preferences will be reflected in the site experience.",
          "Questions about cookie handling or related privacy topics can be submitted through the main contact route.",
        ],
      },
    ],
    relatedLinks: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms and Conditions", href: "/terms-and-conditions" },
      { label: "Contact Responsible Team", href: "/contact" },
    ],
  },
];

export const careerPillars = [
  {
    title: "Commercial Exposure",
    body:
      "Work close to live trade flows, pricing decisions, and real operational execution rather than abstract internal projects.",
  },
  {
    title: "International Scope",
    body:
      "Coordinate with buyers, suppliers, inspectors, banks, and logistics partners across multiple regions and time zones.",
  },
  {
    title: "Execution Culture",
    body:
      "We value judgment, responsiveness, and documentation discipline. Teams are expected to act with rigor and commercial ownership.",
  },
  {
    title: "Cross-Functional Learning",
    body:
      "Roles regularly intersect with trading, logistics, compliance, and finance, giving operators a broad view of the business.",
  },
];

export const openRoles = [
  {
    slug: "trade-analyst",
    title: "Trade Analyst",
    team: "Commercial",
    location: "Dubai or London",
    summary:
      "Support market monitoring, trade desk reporting, and buyer-facing commodity intelligence across agriculture and fertilizers.",
  },
  {
    slug: "logistics-coordinator",
    title: "Logistics Coordinator",
    team: "Operations",
    location: "Singapore",
    summary:
      "Coordinate shipment milestones, documentation readiness, and exception handling across Asia-Pacific trade corridors.",
  },
  {
    slug: "supplier-onboarding-specialist",
    title: "Supplier Onboarding Specialist",
    team: "Procurement and Compliance",
    location: "Nairobi",
    summary:
      "Own intake quality, documentary review, and onboarding coordination for new origin-side suppliers and processors.",
  },
];

export const popularQueries = [
  "wheat",
  "urea",
  "east africa",
  "trade finance",
  "supplier code",
  "quality assurance",
];

export const careersContactEmail = "careers@veterraglobal.com";

export function getTrustDocumentBySlug(slug: string) {
  return trustDocuments.find((document) => document.slug === slug);
}

export function getLegalDocumentByRoute(route: LegalDocument["route"]) {
  return legalDocuments.find((document) => document.route === route);
}