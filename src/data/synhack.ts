export type SynHackStatus = 'upcoming' | 'open' | 'closed' | 'completed';

export interface SynHackEdition {
  year: string;
  edition: string;
  theme: string;
  tagline: string;
  status: SynHackStatus;
  dates: string;
  venue: string;
  mode: 'In-person (VNIT Campus)' | 'Hybrid' | 'Online';
  durationHours: number;
  expectedHackerCount: number;
  prizePool: string;
  registrationUrl?: string; // Configurable external form link (Tally or Google Forms)
  registrationDeadline?: string;
  isCurrent: boolean;
  overview: string;
  tracks: Array<{
    title: string;
    description: string;
    doodleIcon: string;
    bounties?: string;
  }>;
  schedule: Array<{
    time: string;
    title: string;
    description: string;
    day: string;
  }>;
  prizes: Array<{
    rank: string;
    reward: string;
    perks: string;
  }>;
  sponsors?: Array<{
    name: string;
    tier: 'Title' | 'Gold' | 'Silver' | 'Community';
    category: string;
  }>;
  highlights?: Array<{
    metric: string;
    label: string;
  }>;
  winners?: Array<{
    track: string;
    teamName: string;
    projectTitle: string;
    description: string;
    members: string[];
  }>;
}

export const synhackEditions: SynHackEdition[] = [
  {
    year: "2025",
    edition: "SynHack '25",
    theme: "Autonomous Agents, Resilient Infrastructure & Open Web",
    tagline: "36 hours of relentless engineering at VNIT Nagpur.",
    status: "upcoming", // Can be toggled to 'open', 'closed', or 'completed'
    dates: "March 2025 (Dates Announced Shortly)",
    venue: "Department of Computer Science & Engineering, VNIT Nagpur",
    mode: "In-person (VNIT Campus)",
    durationHours: 36,
    expectedHackerCount: 500,
    prizePool: "₹1,50,000+ in Cash & Cloud Credits",
    registrationUrl: "", // When open, insert external Google Form / Tally link
    registrationDeadline: "TBA with official announcement",
    isCurrent: true,
    overview: "SynHack is Central India's flagship student hackathon hosted annually by SyntaX at VNIT Nagpur. It brings together over 500 ambitious builders, developers, designers, and algorithmic thinkers for 36 hours of nonstop prototyping, mentorship sessions, and technical showmanship.",
    tracks: [
      {
        title: "Autonomous AI & Intelligent Agents",
        description: "Multi-agent workflows, local SLM inference, computer vision for public safety, and domain-specialized LLM tools.",
        doodleIcon: "ai",
        bounties: "Best Agentic Workflow Award",
      },
      {
        title: "Decentralized & Resilient Infrastructure",
        description: "P2P communication networks, offline-first architectures, encrypted peer sync, and distributed storage systems.",
        doodleIcon: "network",
      },
      {
        title: "EdTech & Campus Modernization",
        description: "Next-generation institutional software, interactive pedagogy, automated lab management, and student tools.",
        doodleIcon: "code",
      },
      {
        title: "Open Innovation & Algorithmic Tooling",
        description: "Developer tools, compiler plugins, performance profilers, and creative computing solutions with no boundary.",
        doodleIcon: "terminal",
      },
    ],
    schedule: [
      { day: "Day 1", time: "09:00 AM", title: "Check-in & Kit Distribution", description: "Badge pickup, campus verification, and swag kits distribution." },
      { day: "Day 1", time: "11:00 AM", title: "Opening Ceremony", description: "Keynote address, problem statement reveal, and judging criteria overview." },
      { day: "Day 1", time: "12:00 PM", title: "Hacking Begins (T=0)", description: "36-hour countdown clock starts. Mentorship desk opens." },
      { day: "Day 1", time: "08:00 PM", title: "Mentorship Round 1", description: "One-on-one architecture review with industry mentors and alumni." },
      { day: "Day 2", time: "02:00 AM", title: "Midnight Coding Sprints", description: "Caffeine, snacks, and mini algorithmic challenges." },
      { day: "Day 2", time: "10:00 AM", title: "Mentorship Round 2", description: "Progress checkpoints and live product pitch coaching." },
      { day: "Day 2", time: "09:00 PM", title: "Soft Freeze & Dry Runs", description: "Deployment checks and presentation deck submission." },
      { day: "Day 3", time: "00:00 AM", title: "Hacking Concludes", description: "Code freeze on GitHub and judging queue assignment." },
      { day: "Day 3", time: "10:00 AM", title: "Live Demos & Expo", description: "Top 15 finalist live demonstrations in front of grand jury panel." },
      { day: "Day 3", time: "02:00 PM", title: "Award Ceremony", description: "Prize distribution, trophy handover, and closing remarks." },
    ],
    prizes: [
      { rank: "Overall Winner (1st Place)", reward: "₹60,000 Cash", perks: "Trophy + VC Mentorship Fast-track + Cloud credits" },
      { rank: "1st Runner Up (2nd Place)", reward: "₹40,000 Cash", perks: "Runner-up Trophy + Premium dev tool licenses" },
      { rank: "2nd Runner Up (3rd Place)", reward: "₹25,000 Cash", perks: "Trophy + Goodies bundle" },
      { rank: "Best All-Women Team", reward: "₹15,000 Cash", perks: "Special citation + Diversity in Tech fellowship" },
      { rank: "Best Freshers Team", reward: "₹10,000 Cash", perks: "Junior builder starter grants" },
    ],
    highlights: [
      { metric: "36 hrs", label: "Hacking Duration" },
      { metric: "500+", label: "Expected Hackers" },
      { metric: "₹1.5L+", label: "Prize Pool" },
      { metric: "10+", label: "Industry Mentors" },
    ],
  },
  {
    year: "2024",
    edition: "SynHack '24",
    theme: "Intelligence Everywhere: From Microcontrollers to Cloud",
    tagline: "Central India's biggest inter-collegiate hackathon.",
    status: "completed",
    dates: "March 15–17, 2024",
    venue: "Assembly Hall & CSE Labs, VNIT Nagpur",
    mode: "In-person (VNIT Campus)",
    durationHours: 36,
    expectedHackerCount: 420,
    prizePool: "₹1,20,000 Cash",
    isCurrent: false,
    overview: "SynHack '24 drew over 400 developers from 45 engineering colleges across Maharashtra, Madhya Pradesh, and Chhattisgarh. Teams engineered working solutions spanning IoT hardware integrations to generative AI copilots.",
    tracks: [
      { title: "Generative AI & Agentic Systems", description: "Domain assistants, code generation tools, and RAG architectures.", doodleIcon: "ai" },
      { title: "IoT & Smart Hardware", description: "Campus sensor grids, low-power mesh networks, and telemetry dashboards.", doodleIcon: "network" },
      { title: "FinTech & Secure Transactions", description: "Fraud detection pipelines, UPI analytics, and zero-knowledge proofs.", doodleIcon: "code" },
    ],
    schedule: [],
    prizes: [
      { rank: "1st Prize", reward: "₹50,000", perks: "SynHack Grand Trophy" },
      { rank: "2nd Prize", reward: "₹30,000", perks: "Runner Up Trophy" },
      { rank: "3rd Prize", reward: "₹20,000", perks: "Special Citation" },
    ],
    highlights: [
      { metric: "450+", label: "Registered Hackers" },
      { metric: "84", label: "Projects Submitted" },
      { metric: "14", label: "States Represented" },
      { metric: "100%", label: "Working Demos" },
    ],
    winners: [
      {
        track: "Overall Champions",
        teamName: "Team NeuralMesh",
        projectTitle: "MeshGuard: Zero-Infrastructure Disaster Mesh Network",
        description: "An ad-hoc LoRa + WebAssembly peer network providing real-time location telemetry during cellular power blackouts.",
        members: ["Rohan K.", "Aditi P.", "Suraj T.", "Karan V."],
      },
      {
        track: "Best AI Innovation",
        teamName: "Team CodeSight",
        projectTitle: "DiffLens: High-Precision Bug Triaging Agent",
        description: "Static analysis AST diffing combined with local open-weights code intelligence for automated regression warnings.",
        members: ["Harshit S.", "Tanmay J."],
      },
    ],
  },
  {
    year: "2023",
    edition: "SynHack '23",
    theme: "Building Solutions for Real-World Friction",
    tagline: "The inaugural edition of VNIT's flagship hackathon.",
    status: "completed",
    dates: "April 7–9, 2023",
    venue: "VNIT Nagpur Campus",
    mode: "In-person (VNIT Campus)",
    durationHours: 24,
    expectedHackerCount: 250,
    prizePool: "₹75,000 Cash",
    isCurrent: false,
    overview: "The groundbreaking inaugural edition that kicked off the SynHack legacy, uniting 250+ VNIT and regional college developers for 24 hours of focused product building.",
    tracks: [
      { title: "Web & Mobile Utilities", description: "Campus productivity, social impact, and open platforms.", doodleIcon: "code" },
      { title: "Algorithmic Challenges", description: "Data optimization and computational efficiency.", doodleIcon: "terminal" },
    ],
    schedule: [],
    prizes: [],
    highlights: [
      { metric: "250+", label: "Participants" },
      { metric: "52", label: "Working Prototypes" },
      { metric: "24 hrs", label: "Sprint Duration" },
    ],
  },
];

export function getCurrentSynHack(): SynHackEdition {
  return synhackEditions.find((e) => e.isCurrent) || synhackEditions[0];
}

export function getSynHackByYear(year: string): SynHackEdition | undefined {
  return synhackEditions.find((e) => e.year === year || e.edition.toLowerCase().includes(year.toLowerCase()));
}
