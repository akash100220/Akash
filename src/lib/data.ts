// Every string here is the site owner's own content. Components only read from this file.
export type Family =
  "Languages" | "Frontend" | "Backend" | "Databases" | "Tools";

export interface Skill {
  id: string;
  symbol: string;
  name: string;
  family: Family;
  /** Key into the TechLogo BRAND or CONCEPT map */
  logo: string;
}

export interface Project {
  id: string;
  index: string;
  title: string;
  kicker: string;
  description: string;
  features: string[];
  tech: { name: string; logo: string }[];
  link?: { label: string; href: string };
  github?: { label: string; href: string };
}

export interface Stop {
  period: string;
  title: string;
  place: string;
  detail: string[];
}

export const PROFILE = {
  name: "Amir Hossain Akash",
  firstName: "Amir",
  initials: "AA",
  role: "Freelance Full Stack Developer",
  email: "amirhossainakash8@gmail.com",
  phone: "",
  phoneHref: "",
  github: "https://github.com/akash100220",
  githubLabel: "github.com/akash100220",
  linkedin: "",
  linkedinLabel: "",
  website: "https://akash100220.github.io/Akash/",
  websiteLabel: "akash100220.github.io/Akash",
  resume: "",
  resumeFile: "",
  resumeSummary:
    "Freelance Full Stack Developer building fast, accessible websites and web applications with React.js, Next.js and Node.js. Works directly with clients from the first idea to launch, with clean, maintainable code and performance, accessibility and security treated as defaults rather than additions.",
  availability:
    "Available for freelance projects — websites, web apps and long-term collaborations.",
  currentRole: "Independent — open for freelance projects",
  quote:
    "Performance, accessibility and security are defaults — not additions.",
};

export const NAV = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "work", label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
] as const;

export const FAMILIES: Family[] = [
  "Languages",
  "Frontend",
  "Backend",
  "Databases",
  "Tools",
];

export const SKILLS: Skill[] = [
  {
    id: "javascript",
    symbol: "Js",
    name: "JavaScript",
    family: "Languages",
    logo: "javascript",
  },
  {
    id: "typescript",
    symbol: "Ts",
    name: "TypeScript",
    family: "Languages",
    logo: "typescript",
  },
  { id: "html", symbol: "Ht", name: "HTML", family: "Languages", logo: "html" },
  { id: "css", symbol: "Cs", name: "CSS", family: "Languages", logo: "css" },
  {
    id: "react",
    symbol: "Re",
    name: "React.js",
    family: "Frontend",
    logo: "react",
  },
  {
    id: "next",
    symbol: "Nx",
    name: "Next.js",
    family: "Frontend",
    logo: "next",
  },
  {
    id: "tailwind",
    symbol: "Tw",
    name: "Tailwind CSS",
    family: "Frontend",
    logo: "tailwind",
  },
  { id: "vite", symbol: "Vi", name: "Vite", family: "Frontend", logo: "vite" },
  {
    id: "responsive",
    symbol: "Rl",
    name: "Responsive layout",
    family: "Frontend",
    logo: "responsive",
  },
  {
    id: "a11y",
    symbol: "Ax",
    name: "Web accessibility",
    family: "Frontend",
    logo: "a11y",
  },
  { id: "seo", symbol: "Se", name: "SEO", family: "Frontend", logo: "seo" },
  {
    id: "node",
    symbol: "No",
    name: "Node.js",
    family: "Backend",
    logo: "node",
  },
  {
    id: "rest",
    symbol: "Ra",
    name: "REST APIs",
    family: "Backend",
    logo: "rest",
  },
  {
    id: "postgres",
    symbol: "Pg",
    name: "PostgreSQL",
    family: "Databases",
    logo: "postgres",
  },
  {
    id: "supabase",
    symbol: "Sb",
    name: "Supabase",
    family: "Databases",
    logo: "supabase",
  },
  {
    id: "rls",
    symbol: "Rs",
    name: "Row Level Security",
    family: "Databases",
    logo: "rls",
  },
  { id: "git", symbol: "Gi", name: "Git", family: "Tools", logo: "git" },
  {
    id: "github",
    symbol: "Gh",
    name: "GitHub",
    family: "Tools",
    logo: "github",
  },
  {
    id: "actions",
    symbol: "Ga",
    name: "GitHub Actions",
    family: "Tools",
    logo: "actions",
  },
  {
    id: "vscode",
    symbol: "Vs",
    name: "VS Code",
    family: "Tools",
    logo: "vscode",
  },
  { id: "linux", symbol: "Lx", name: "Linux", family: "Tools", logo: "linux" },
];

export const PROJECTS: Project[] = [
  {
    id: "nexora",
    index: "01",
    title: "Custom Web Applications",
    kicker: "Full-stack product development",
    description:
      "End-to-end web applications — authentication, dashboards, search, admin areas and databases — built to scale and easy to maintain.",
    features: [
      "Responsive React and Next.js front ends",
      "Node.js APIs on PostgreSQL schemas",
      "Secure authentication and role-based access",
      "Search, filtering and admin dashboards",
      "Accessible, keyboard-friendly interfaces",
      "Automated builds and GitHub Pages deploys",
    ],
    tech: [
      { name: "React", logo: "react" },
      { name: "TypeScript", logo: "typescript" },
      { name: "Node.js", logo: "node" },
      { name: "Tailwind CSS", logo: "tailwind" },
      { name: "PostgreSQL", logo: "postgres" },
    ],
  },
  {
    id: "portfolio",
    index: "02",
    title: "Business & Portfolio Websites",
    kicker: "Fast, responsive marketing sites",
    description:
      "Clean, accessible websites for small businesses, freelancers and personal brands — with light and dark themes, contact flows and complete SEO.",
    features: [
      "Light and dark themes with system detection",
      "Keyboard navigation and visible focus states",
      "Reduced-motion support",
      "Complete SEO and social metadata",
      "Structured data and a sitemap",
      "Custom 404 page and static deployment",
    ],
    tech: [
      { name: "HTML", logo: "html" },
      { name: "CSS", logo: "css" },
      { name: "JavaScript", logo: "javascript" },
      { name: "SEO", logo: "seo" },
      { name: "Accessibility", logo: "a11y" },
    ],
  },
  {
    id: "interactive",
    index: "03",
    title: "Interactive Experiences",
    kicker: "Animation and micro-interactions",
    description:
      "Sites that feel alive: animated heroes, physics-driven details and smooth scrolling, tuned to stay fast and respect reduced-motion settings.",
    features: [
      "Animated hero sections and page transitions",
      "Pointer-driven and physics-based interactions",
      "Smooth scrolling with performance guards",
      "Motion-reduced fallbacks for every effect",
      "Responsive layouts on every screen",
      "Modern SSR architecture",
    ],
    tech: [
      { name: "React 19", logo: "react" },
      { name: "TypeScript", logo: "typescript" },
      { name: "Tailwind CSS", logo: "tailwind" },
      { name: "Vite", logo: "vite" },
      { name: "GitHub Actions", logo: "actions" },
    ],
  },
  {
    id: "islamic-life",
    index: "04",
    title: "Browser-first Web Apps",
    kicker: "Offline-friendly tools with no backend",
    description:
      "Data-rich apps that run entirely in the browser — bundled content, on-device calculations and maps — so they stay fast, private and cheap to host.",
    features: [
      "Large datasets bundled and code-split",
      "On-device calculations with no server",
      "Interactive maps and geolocation",
      "Works without accounts or a backend",
      "Static builds deployed from CI",
      "Heavy features lazy-loaded on demand",
    ],
    tech: [
      { name: "React 19", logo: "react" },
      { name: "TypeScript", logo: "typescript" },
      { name: "Vite", logo: "vite" },
      { name: "Tailwind CSS", logo: "tailwind" },
      { name: "Leaflet", logo: "leaflet" },
      { name: "Three.js", logo: "three" },
    ],
  },
  {
    id: "hawa-computer",
    index: "05",
    title: "Store & Booking Platforms",
    kicker: "Commerce and operations systems",
    description:
      "Bilingual storefronts and booking systems with customer accounts, orders, payments and a staff admin area behind role-based permissions.",
    features: [
      "Bilingual storefront and account areas",
      "Orders, bookings, checkout and payment proof",
      "Customer invoices, tickets and files",
      "Staff admin panel with granular permissions",
      "Audit log and CSV exports",
      "Validated server actions and rate limiting",
    ],
    tech: [
      { name: "Next.js", logo: "next" },
      { name: "TypeScript", logo: "typescript" },
      { name: "Tailwind CSS", logo: "tailwind" },
      { name: "Prisma", logo: "prisma" },
      { name: "PostgreSQL", logo: "postgres" },
    ],
  },
];

export const SKILL_PROJECTS: Record<string, string[]> = {
  react: [
    "Custom Web Applications",
    "Interactive Experiences",
    "Browser-first Web Apps",
    "Store & Booking Platforms",
  ],
  typescript: [
    "Custom Web Applications",
    "Interactive Experiences",
    "Browser-first Web Apps",
    "Store & Booking Platforms",
  ],
  next: ["Custom Web Applications", "Store & Booking Platforms"],
  vite: ["Interactive Experiences", "Browser-first Web Apps"],
  tailwind: [
    "Custom Web Applications",
    "Interactive Experiences",
    "Browser-first Web Apps",
    "Store & Booking Platforms",
  ],
  postgres: ["Custom Web Applications", "Store & Booking Platforms"],
  actions: [
    "Custom Web Applications",
    "Business & Portfolio Websites",
    "Browser-first Web Apps",
  ],
  github: [
    "Custom Web Applications",
    "Business & Portfolio Websites",
    "Interactive Experiences",
  ],
  html: ["Business & Portfolio Websites"],
  css: ["Business & Portfolio Websites", "Interactive Experiences"],
  javascript: ["Business & Portfolio Websites"],
  seo: ["Business & Portfolio Websites"],
  a11y: [
    "Business & Portfolio Websites",
    "Interactive Experiences",
    "Browser-first Web Apps",
    "Store & Booking Platforms",
  ],
  responsive: [
    "Business & Portfolio Websites",
    "Interactive Experiences",
    "Browser-first Web Apps",
    "Store & Booking Platforms",
  ],
  node: ["Custom Web Applications"],
  rest: ["Store & Booking Platforms"],
};

export const EXPERIENCE: Stop[] = [
  {
    period: "Available now",
    title: "Independent Freelance Developer",
    place: "Self-employed · Remote",
    detail: [
      "Building responsive websites and web applications for clients.",
      "Working end to end — from the first idea to deployment.",
      "Focused on performance, accessibility and clean, maintainable code.",
    ],
  },
];
