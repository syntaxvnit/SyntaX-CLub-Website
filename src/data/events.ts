export type EventCategory = 'Hackathon' | 'Workshop' | 'CP Contest' | 'AI Bootcamp' | 'Guest Talk';
export type EventStatus = 'upcoming' | 'open' | 'closed' | 'completed';

export interface ClubEvent {
  slug: string;
  title: string;
  category: EventCategory;
  summary: string;
  description: string;
  date: string;
  venue: string;
  status: EventStatus;
  registrationUrl?: string;
  speaker?: {
    name: string;
    role: string;
    organization: string;
  };
  highlights?: string[];
  takeaways?: string[];
  prerequisites?: string[];
  doodleType: 'web' | 'cp' | 'ai' | 'hackathon' | 'general';
}

export const events: ClubEvent[] = [
  {
    slug: "synhack-2025",
    title: "SynHack '25: The Flagship 36-Hour Hackathon",
    category: "Hackathon",
    summary: "Central India's biggest collegiate hackathon uniting 500+ developers, designers, and problem solvers at VNIT Nagpur.",
    description: "SynHack '25 is the premier annual hackathon organized by SyntaX VNIT. Featuring tracks in Autonomous Agents, Distributed Infrastructure, Campus Modernization, and Open Innovation, participants spend 36 hours building high-impact prototypes with direct mentorship from industry veterans and VNIT alumni.",
    date: "March 2025 (Official Dates Dropping Soon)",
    venue: "CSE Department & Assembly Hall, VNIT Nagpur",
    status: "upcoming",
    doodleType: "hackathon",
    highlights: [
      "₹1,50,000+ Prize Pool with track bounties",
      "Round-the-clock technical mentorship from leading tech architects",
      "Direct fast-track interview pipelines for standout teams",
      "Midnight mini-games, algorithmic sprints, and developer swag",
    ],
    takeaways: [
      "Ship a working production-grade full-stack prototype in 36 hours",
      "Master rapid architectural trade-offs under high-energy sprint conditions",
      "Collaborate with multidisciplinary engineering peers across India",
    ],
    prerequisites: ["Curiosity to build, laptop with dev environment, collaborative mindset."],
  },
  {
    slug: "zero-to-production-web-systems",
    title: "Zero to Production: Modern Web Systems & Edge Architecture",
    category: "Workshop",
    summary: "Hands-on deep dive into building ultra-fast static-first applications, edge compute, and headless CMS architecture.",
    description: "An intensive weekend technical session conducted by senior SyntaX engineers exploring the paradigm shift from heavy monolithic servers to edge-rendered, statically optimized web applications using Astro, TypeScript, and distributed edge workers.",
    date: "October 12, 2024",
    venue: "Lab 3, Department of CSE, VNIT Nagpur",
    status: "completed",
    doodleType: "web",
    highlights: [
      "120+ VNIT students attended in-person",
      "100% of attendees built and deployed their personal portfolio to edge CDN in 3 hours",
      "Deep dive into Island Architecture, Partial Hydration, and Lighthouse performance profiling",
    ],
    takeaways: [
      "How browser rendering pipelines execute DOM, CSSOM, and composite passes",
      "Configuring zero-JS baselines with Astro components",
      "Deploying distributed edge functions on Vercel and Cloudflare",
    ],
  },
  {
    slug: "code-syntax-october-contest",
    title: "Code-SyntaX: Bi-Weekly Algorithmic Clash (Round 14)",
    category: "CP Contest",
    summary: "Curated 2-hour competitive programming sprint challenging problem solvers across dynamic programming and graph invariants.",
    description: "Our signature bi-weekly algorithmic contest designed to simulate ACM-ICPC and Google Code Jam environments. 6 carefully balanced problems spanning standard data structures to tricky mathematical number theory.",
    date: "September 28, 2024",
    venue: "Online on CodeChef / HackerRank Platform",
    status: "completed",
    doodleType: "cp",
    highlights: [
      "180+ active participants across 4 VNIT batches",
      "First blood achieved in 4 minutes 12 seconds on Problem A",
      "Comprehensive post-contest video editorial and testcase breakdowns",
    ],
    takeaways: [
      "Techniques for identifying optimal greedy bounds vs memoized states",
      "Writing clean C++20 template setups with fast I/O",
      "Handling edge-case overflow constraints and memory limits",
    ],
  },
  {
    slug: "llm-agents-rag-hands-on",
    title: "Demystifying Agentic AI & RAG Pipelines",
    category: "AI Bootcamp",
    summary: "A practical guide to building autonomous multi-step reasoning agents, vector embeddings, and evaluation metrics.",
    description: "The AI track of SyntaX hosted an exploratory masterclass on modern generative workflows. Students built an end-to-end question-answering agent over VNIT academic regulations and past research papers using open-weights models.",
    date: "August 24, 2024",
    venue: "Audi-2, Academic Block, VNIT Nagpur",
    status: "completed",
    doodleType: "ai",
    speaker: {
      name: "SyntaX AI Division",
      role: "Lead Researchers",
      organization: "SyntaX VNIT",
    },
    highlights: [
      "Constructed a local vector database using ChromaDB and sentence transformers",
      "Evaluated semantic chunking strategies vs sliding windows",
      "Deployed a live Streamlit interface for campus document synthesis",
    ],
    takeaways: [
      "How cosine similarity and hybrid BM25 search combine in production RAG",
      "Tool-calling schemas and JSON-mode prompting protocols",
      "Optimizing local inference with Ollama and quantization",
    ],
  },
  {
    slug: "git-and-open-source-foundations",
    title: "Git, GitHub & The Art of Open Source Contributions",
    category: "Workshop",
    summary: "The essential orientation workshop for first-year engineers to master version control, branch management, and pull requests.",
    description: "Every engineer's journey starts with version control. SyntaX mentors guided freshers through Git plumbing, resolving merge conflicts, crafting meaningful commit messages, and contributing their first PR to VNIT club repositories.",
    date: "August 10, 2024",
    venue: "CSE Seminar Hall, VNIT Nagpur",
    status: "completed",
    doodleType: "general",
    highlights: [
      "220+ first-year students equipped with Git workflows",
      "Hands-on interactive conflict resolution terminal drills",
      "Launch of SyntaX Fresher Mentorship Cohort 2024",
    ],
  },
];

export function getUpcomingEvents(): ClubEvent[] {
  return events.filter((e) => e.status === 'upcoming' || e.status === 'open');
}

export function getPastEvents(): ClubEvent[] {
  return events.filter((e) => e.status === 'completed' || e.status === 'closed');
}

export function getEventBySlug(slug: string): ClubEvent | undefined {
  return events.find((e) => e.slug === slug);
}
