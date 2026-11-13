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
    slug: "Omkar-More",
    name: "Omkar More",
    department: "Metallurgical & Materials Engineering",
    batch: "2027",
    roleCurrent: "President",
    bio: "I've always wondered how computers have shaped our lives in the 21st century, the thinking behind every design decision, and how today's right answers often emerge from yesterday's wrong ones.\nMy journey into tech started with web development, but curiosity eventually led me towards systems engineering and backend development.\nComing from a non-CS branch (MME) hasn't stopped me from exploring computer science, and it shouldn't stop you either. Curiosity matters more than where you are right now.",
    socials: {
      github: "https://royalbeast2211.github.io/",
      linkedin: "https://www.linkedin.com/in/theomkarmore/",
    },
    skills: ["GO", "MERN Stack", "LangChain", "Agentic AI"],
    projects: [
      {
        title: "GitLike: Version Control System",
        description: "Developed a command-line version control system implementing repository creation, staging, committing, and branching from scratch.",
        link: "https://github.com/syntaxvnit",
      },
      {
        title: "RayTracer: Ray Tracing Engine",
        description: "Created a ray tracer that renders spheres with recursive reflection, refraction, shadows, and Lambertian shading.",
      },
    ],
    achievements: [
      "3-Star rating of 1600 on CodeChef; 1900+ Knight on LeetCode; 950+ questions solved on Codolio.",
      "Flipkart GRID 7.0 semifinalist across India.",
    ],
  },
  {
    slug: "Aritra-Sarkar",
    name: "Aritra Sarkar",
    department: "Chemical Engineering",
    batch: "2027",
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
    slug: "Hrushikesh",
    name: "Hrushikesh",
    department: "Electronics & Communication",
    batch: "2025",
    roleCurrent: "Treasurer",
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
    slug: "Ayush-Kumar",
    name: "Ayush Kumar",
    department: "Metallurgical & Materials Engineering",
    batch: "2028",
    roleCurrent: "Organisational Head",
    bio: "Figuring things out as I go, staying ahead of the curve, and keeping things simple. Here to build cool stuff and enjoy the ride.",
    socials: {
      github: "https://github.com/AyushKumar5944",
      linkedin: "https://www.linkedin.com/in/ayush-kumar-a4259831b/",
    },
    skills: ["AI/ML", "CP"],
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
    slug: "Sangram",
    name: "Sangram",
    department: "Computer Science & Engineering",
    batch: "2026",
    roleCurrent: "Computer Science Core Head",
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
    slug: "Aditya-Sahu",
    name: "Aditya Sahu",
    department: "Computer Science & Engineering",
    batch: "2026",
    roleCurrent: "AI/ML Head",
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
    slug: "Harshit-Raj",
    name: "Harshit Raj",
    department: "Civil Engineering",
    batch: "2028",
    roleCurrent: "DSA Head",
    bio: "A little curious, a little ambitious, and always finding new ways to grow. I enjoy exploring new ideas and believe in growing together",
    socials: {
      github: "https://github.com/itsharshiit",
      linkedin: "https://www.linkedin.com/in/harshit-raj-97851936b/",
    },
    skills: ["Python", "MERN Stack", "OpenCV", "REST APIs", "DSA","Arduino IDE"],
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
    slug: "Srikar",
    name: "Srikar",
    department: "Competitive Programming Head",
    batch: "2026",
    roleCurrent: "DSA Head",
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
  {
    slug: "Shresth-Verma",
    name: "Shresth Verma",
    department: "Computer Science & Engineering",
    batch: "2025",
    roleCurrent: "President (2024-2025)",
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
  {
    slug: "Pratik-Jha",
    name: "Pratik Jha",
    department: "Computer Science & Engineering",
    batch: "2025",
    roleCurrent: "Vice President (2024-2025)",
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
  {
    slug: "Deepak-Jalan",
    name: "Deepak Jalan",
    department: "Computer Science & Engineering",
    batch: "2025",
    roleCurrent: "Treasurer (2024-2025)",
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
  {
    slug: "Bhupendra-Tiwari",
    name: "Bhupendra Tiwari",
    department: "Computer Science & Engineering",
    batch: "2025",
    roleCurrent: "Project Head (2024-2025)",
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
  {
    slug: "Yash-Goyal",
    name: "Yash Goyal",
    department: "Computer Science & Engineering",
    batch: "2025",
    roleCurrent: "Event Head (2024-2025)",
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
  {
    slug: "Aryan-Dwivedi",
    name: "Aryan Dwivedi",
    department: "Computer Science & Engineering",
    batch: "2025",
    roleCurrent: "Blockchain Head (2024-2025)",
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
  {
    slug: "Smit-Gharat",
    name: "Smit Gharat",
    department: "Computer Science & Engineering",
    batch: "2025",
    roleCurrent: "Operations Head (2024-2025)",
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
  {
    slug: "Om-Kharat",
    name: "Om Kharat",
    department: "Computer Science & Engineering",
    batch: "2025",
    roleCurrent: "Event Head (2024-2025)",
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
  {
    slug: "Ansh-Dalal",
    name: "Ansh Dalal",
    department: "Computer Science & Engineering",
    batch: "2026",
    roleCurrent: "WEB Head (2024-2025)",
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
  {
    slug: "Vaidehi",
    name: "Vaidehi",
    department: "Computer Science & Engineering",
    batch: "2026",
    roleCurrent: "President (2025-2026)",
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
  {
    slug: "Harshada",
    name: "Harshada",
    department: "Computer Science & Engineering",
    batch: "2026",
    roleCurrent: "APP Head (2024-2025)",
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
  {
    slug: "Sakshi",
    name: "Sakshi",
    department: "Computer Science & Engineering",
    batch: "2026",
    roleCurrent: "Operations Head (2024-2025)",
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
