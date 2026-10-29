export interface SocialLinks {
  linkedin?: string;
  github?: string;
  instagram?: string;
  website?: string;
  twitter?: string;
}

export interface Person {
  slug: string;
  name: string;
  photo?: string;
  roleCurrent?: string;
  department?: string;
  batch?: string;
  bio: string;
  socials: SocialLinks;
  skills: string[];
  projects?: Array<{
    title: string;
    description: string;
    link?: string;
  }>;
  achievements?: string[];
}

export const people: Person[] = [
  {
    slug: "omkar-deshmukh",
    name: "Omkar Deshmukh",
    department: "Computer Science & Engineering",
    batch: "2025",
    roleCurrent: "President",
    bio: "Systems architect and full-stack engineer passionate about building high-performance web applications, developer tooling, and distributed systems. Leading SyntaX into its next era of student engineering excellence at VNIT.",
    socials: {
      github: "https://github.com/syntaxvnit",
      linkedin: "https://linkedin.com/company/syntaxvnit",
    },
    skills: ["TypeScript", "Next.js", "Go", "Docker", "PostgreSQL", "Cloud Architecture"],
    projects: [
      {
        title: "VNIT Campus Portal Engine",
        description: "Open-source high-throughput platform for academic schedules and student society coordination.",
        link: "https://github.com/syntaxvnit",
      },
      {
        title: "SynHack Online Judge",
        description: "Automated sandboxed evaluation pipeline for algorithmic problem sets.",
      },
    ],
    achievements: [
      "Smart India Hackathon Finalist 2023",
      "Lead Organizer for SynHack 2024 (500+ participants)",
    ],
  },
  {
    slug: "ananya-sharma",
    name: "Ananya Sharma",
    department: "Computer Science & Engineering",
    batch: "2025",
    roleCurrent: "Vice President",
    bio: "Machine learning practitioner and competitive programmer focused on computer vision, generative models, and algorithmic efficiency. Mentors junior members in data structures and graph algorithms.",
    socials: {
      github: "https://github.com/syntaxvnit",
      linkedin: "https://linkedin.com/company/syntaxvnit",
    },
    skills: ["Python", "PyTorch", "C++", "FastAPI", "Computer Vision", "Algorithms"],
    projects: [
      {
        title: "Medical Image Segmentation Pipeline",
        description: "Lightweight neural network architecture for localized lesion detection in low-resource environments.",
      },
    ],
    achievements: [
      "ICPC Amritapuri Regionalist 2023",
      "Knight on LeetCode (Top 2% globally)",
    ],
  },
  {
    slug: "rohit-kulkarni",
    name: "Rohit Kulkarni",
    department: "Electronics & Communication",
    batch: "2025",
    roleCurrent: "Technical Head (Web & Systems)",
    bio: "Obsessed with web standards, frontend craft, micro-interactions, and accessible interface engineering. Drives the core tech stack and open-source initiatives across SyntaX.",
    socials: {
      github: "https://github.com/syntaxvnit",
      website: "https://syntaxvnit.vercel.app",
    },
    skills: ["Astro", "React", "Rust", "WebAssembly", "Tailwind CSS", "Design Systems"],
    projects: [
      {
        title: "SyntaX Design System & UI Kit",
        description: "Bespoke design tokens and accessible web components for club projects.",
      },
    ],
    achievements: [
      "Top 10 Global Open Source Contributor (Hacktoberfest VNIT Chapter)",
    ],
  },
  {
    slug: "priya-verma",
    name: "Priya Verma",
    department: "Computer Science & Engineering",
    batch: "2025",
    roleCurrent: "Competitive Programming Lead",
    bio: "Algorithmic problem solver and mathematical modeler. Curates the weekly SyntaX contest problem sets, code walkthroughs, and contest preparation roadmaps for VNITians.",
    socials: {
      github: "https://github.com/syntaxvnit",
      linkedin: "https://linkedin.com/company/syntaxvnit",
    },
    skills: ["C++20", "Data Structures", "Dynamic Programming", "Combinatorics", "Graph Theory"],
    projects: [
      {
        title: "AlgoVisualizer VNIT",
        description: "Interactive visual tool explaining complex graph algorithms and segment trees step-by-step.",
      },
    ],
    achievements: [
      "Codeforces Candidate Master",
      "Top 50 in Google Kick Start Round F",
    ],
  },
  {
    slug: "aditya-nair",
    name: "Aditya Nair",
    department: "Computer Science & Engineering",
    batch: "2026",
    roleCurrent: "AI & Research Lead",
    bio: "Deep learning enthusiast working on LLM fine-tuning, retrieval-augmented generation (RAG), and efficient inference pipelines. Organizing AI study groups and hands-on workshops.",
    socials: {
      github: "https://github.com/syntaxvnit",
      linkedin: "https://linkedin.com/company/syntaxvnit",
    },
    skills: ["Python", "Hugging Face", "LangChain", "Vector DBs", "Linux", "MLOps"],
    projects: [
      {
        title: "CampusDoc RAG",
        description: "Semantic search engine over VNIT course syllabi, past exams, and institutional documents.",
      },
    ],
    achievements: [
      "Best Technical Paper Award at IEEE Student Conference 2024",
    ],
  },
  {
    slug: "tanvi-joshi",
    name: "Tanvi Joshi",
    department: "Computer Science & Engineering",
    batch: "2026",
    roleCurrent: "App Development Lead",
    bio: "Mobile engineer specializing in cross-platform Flutter and React Native architectures. Passionate about fluid 60fps animations, offline-first sync, and intuitive user experiences.",
    socials: {
      github: "https://github.com/syntaxvnit",
      linkedin: "https://linkedin.com/company/syntaxvnit",
    },
    skills: ["Flutter", "Dart", "React Native", "Firebase", "Kotlin", "UI/UX Design"],
    projects: [
      {
        title: "VNIT Timetable & Mess Companion",
        description: "Mobile utility used by 2,000+ VNIT students with live schedule notifications and mess menus.",
      },
    ],
    achievements: [
      "1st Prize, Central India Mobile App Hackathon 2024",
    ],
  },
  {
    slug: "harsh-patel",
    name: "Harsh Patel",
    department: "Mechanical Engineering",
    batch: "2026",
    roleCurrent: "Design & Creative Lead",
    bio: "Digital artist and visual designer crafting illustrations, brand identities, and editorial layouts. Blends engineering discipline with expressive digital drawing.",
    socials: {
      instagram: "https://instagram.com/syntax_vnit",
      linkedin: "https://linkedin.com/company/syntaxvnit",
    },
    skills: ["Figma", "Vector Illustration", "Blender", "Motion Design", "Typography"],
    projects: [
      {
        title: "SyntaX Visual Identity 2.0",
        description: "Complete brand guidelines, editorial doodle system, and merchandise design for SyntaX VNIT.",
      },
    ],
    achievements: [
      "Winner, National Youth Festival Design Trophy 2023",
    ],
  },
  {
    slug: "sneha-mukherjee",
    name: "Sneha Mukherjee",
    department: "Electrical Engineering",
    batch: "2026",
    roleCurrent: "Operations & SynHack Convener",
    bio: "Community builder and event strategist. Coordinates sponsor partnerships, hackathon logistics, venue operations, and inter-college outreach for SynHack.",
    socials: {
      linkedin: "https://linkedin.com/company/syntaxvnit",
    },
    skills: ["Event Operations", "Sponsorship Outreach", "Public Relations", "Team Leadership"],
    projects: [
      {
        title: "SynHack 2024 Logistics Pipeline",
        description: "End-to-end participant onboarding, mentoring track scheduling, and live evaluation rounds.",
      },
    ],
    achievements: [
      "Organized Central India's largest student hackathon with 600+ physical attendees",
    ],
  },
  // Historical council members
  {
    slug: "siddharth-rao",
    name: "Siddharth Rao",
    department: "Computer Science & Engineering",
    batch: "2024",
    roleCurrent: "Past President (2023-2024)",
    bio: "Software Engineer at a tier-1 tech firm. Former SyntaX President who spearheaded the inauguration of SynHack as Central India's premier collegiate hackathon.",
    socials: {
      github: "https://github.com/syntaxvnit",
      linkedin: "https://linkedin.com/company/syntaxvnit",
    },
    skills: ["Distributed Systems", "Go", "Kubernetes", "C++", "System Architecture"],
    achievements: [
      "Google Summer of Code 2023 (Linux Foundation)",
      "Founding Convener of SynHack",
    ],
  },
  {
    slug: "megha-bose",
    name: "Megha Bose",
    department: "Computer Science & Engineering",
    batch: "2024",
    roleCurrent: "Past Vice President (2023-2024)",
    bio: "Cloud Systems Engineer and open-source enthusiast. Championed women in engineering workshops and competitive coding bootcamps at VNIT.",
    socials: {
      github: "https://github.com/syntaxvnit",
      linkedin: "https://linkedin.com/company/syntaxvnit",
    },
    skills: ["Cloud Engineering", "AWS", "Python", "TypeScript", "Mentorship"],
    achievements: [
      "Grace Hopper Celebration India Scholar 2023",
    ],
  },
  {
    slug: "varun-gupta",
    name: "Varun Gupta",
    department: "Computer Science & Engineering",
    batch: "2023",
    roleCurrent: "Past Technical Lead (2022-2023)",
    bio: "Backend specialist and founding member of SyntaX. Laid the initial architectural foundation for student code reviews and repository governance.",
    socials: {
      github: "https://github.com/syntaxvnit",
      linkedin: "https://linkedin.com/company/syntaxvnit",
    },
    skills: ["Java", "Spring Boot", "Microservices", "Kafka", "PostgreSQL"],
    achievements: [
      "SyntaX Club Co-founder",
    ],
  },
];

export function getPersonBySlug(slug: string): Person | undefined {
  return people.find((p) => p.slug === slug);
}
