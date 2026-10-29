export interface SiteConfig {
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  college: string;
  location: string;
  establishedYear: number;
  url: string;
  logo: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  socials: {
    github?: string;
    linkedin?: string;
    instagram?: string;
    discord?: string;
    email?: string;
  };
  navigation: Array<{
    label: string;
    href: string;
    badge?: string;
  }>;
  synhackCta: {
    label: string;
    href: string;
  };
}

export const siteConfig: SiteConfig = {
  name: "SyntaX VNIT",
  shortName: "SyntaX",
  tagline: "Ideas into interfaces. Problems into possibilities.",
  description: "The premier Web & App Development, Competitive Programming, and Artificial Intelligence club at Visvesvaraya National Institute of Technology (VNIT), Nagpur.",
  college: "Visvesvaraya National Institute of Technology (VNIT)",
  location: "Nagpur, Maharashtra, India",
  establishedYear: 2020,
  url: "https://syntaxvnit.vercel.app",
  logo: {
    src: "/logo/syntax-logo.png",
    alt: "SyntaX VNIT Official Club Logo",
    width: 256,
    height: 256,
  },
  socials: {
    github: "https://github.com/syntaxvnit",
    linkedin: "https://linkedin.com/company/syntaxvnit",
    instagram: "https://instagram.com/syntax_vnit",
    email: "syntax.vnit@gmail.com",
  },
  navigation: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Council", href: "/council" },
    { label: "Events", href: "/events" },
    { label: "Achievements", href: "/achievements" },
    { label: "Journal", href: "/blogs" },
    { label: "Alumni", href: "/alumni" },
  ],
  synhackCta: {
    label: "SynHack '25",
    href: "/synhack",
  },
};
