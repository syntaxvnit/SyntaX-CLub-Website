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
    bio: "​Driven to grow our campus coding community through SyntaX, I actively engage students in diverse activities so we can learn and evolve together. Blending my Chemical Engineering background with a deep interest in Data Science and AI/ML has cultivated a holistic learning mindset, empowering me to embrace leadership responsibilities, build impactful initiatives, and foster continuous peer growth.",
    socials: {
      github: "https://github.com/AritraSarkar1203",
      linkedin: "https://www.linkedin.com/in/aritra-sarkar120320",
    },
    skills: ["Python", "C++", "Pytorch", "Next.js", "Node.js", "JavaScript", "Langchain", "Hugging Face"],
    projects: [
    ],
    achievements: [
      
    ],
  },
  {
    slug: "Hrushikesh",
    name: "Hrushikesh Musaloj ",
    department: "Computer Science & Engineering",
    batch: "2027",
    roleCurrent: "Treasurer",
    bio: "Hey, I’m Hrushikesh, a final-year Computer Science student at VNIT Nagpur and a former Engineering Intern at Goldman Sachs. I enjoy building impactful technology, from full-stack applications and real-time systems to AI-powered tools that solve real-world problems. I’m passionate about turning ideas into practical solutions and constantly exploring new technologies.",
    socials: {
      github: "https://github.com/Hrushikesh-0105",
      website: "linkedin.com/in/hrushikeshmusaloj",
    },
    skills: ["Flutter", "MERN"],
    projects: [
      {
        title: "Warp (P2P file sharing)",
        description: " ",
      },
      {
        title: "GymSync",
        description: " ",
      },
      {
        title: "CRC Manager",
        description: " ",
      },
    ],
    achievements: [
      
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
      
    ],
    achievements: [
     
    ],
  },
  {
    slug: "Sangram",
    name: "Sangram Bavadhane",
    department: "Computer Science & Engineering",
    batch: "2028",
    roleCurrent: "CS Core Head",
    bio: "Full-stack and agentic AI developer building high-performance web applications and agentic workflows. CS Core Head at SyntaX, VNIT Nagpur, driving developer communities.",
    socials: {
      github: "https://github.com/SangramPrakashBavadhane",
      linkedin: "https://www.linkedin.com/in/sangram-bavadhane-329a53365/",
    },
    skills: ["TypeScript", "Next.js", "React.js", "Node.js", "Python", "Agentic AI", "PostgreSQL"],
    projects: [
     
    ],
    achievements: [
      
    ],
  },
  {
    slug: "Aditya-Sahu",
    name: "Aditya Sahu",
    department: "Computer Science & Engineering",
    batch: "2028",
    roleCurrent: "AI/ML Head",
    bio: "I am a third-year Computer Science and Engineering undergraduate at VNIT Nagpur and currently serve as the AI/ML Head at Syntax Club. My primary areas of interest include Machine Learning, Deep Learning, Computer Vision, and Generative AI, with a keen interest in exploring Large Language Models (LLMs) and Agentic AI. I enjoy understanding the underlying concepts of AI/ML and applying them to build practical, real-world solutions. My project experience includes developing hybrid recommendation systems, AI-powered applications, and computer vision-based solutions. I am also interested in backend engineering and scalable software systems, with experience in Python, Go, FastAPI, React, and SQL. I strongly believe in collaboration, knowledge sharing, and growing together through hands-on experiences. I see communities like Syntax as platforms where individuals can learn from one another, work on meaningful projects, and collectively develop their skills. I actively encourage collaborations and real-world project opportunities, including our collaboration through AXIS VNIT, where we worked on designing and developing a Campus Ambassador website. As AI/ML Head, I aim to foster an environment of collective learning, experimentation, and innovation.",
    socials: {
      github: "https://github.com/adityasahu1109",
      linkedin: "https://www.linkedin.com/in/sahuaditya11",
    },
    skills: ["Python", "Go (Golang)", "NumPy", "Pandas", "Scikit-learn", "OpenCV", "Machine Learning", "Deep Learning", "Computer Vision", "Generative AI", "LLMs", "FastAPI", "React.js", "PostgreSQL", "SQLite"],
    projects: [
      {
        title: "ORBIT (Hybrid Recommendation System)",
        description: " ",
      },
      {
        title: "Campus Ambassador Website (AXIS VNIT Collaboration)",
        description: " ",
      },
      {
        title: "Campus Ambassador Website (AXIS VNIT Collaboration)",
        description: " ",
      },
      {
        title: "Gemini AI Frontend Clone",
        description: " ",
      },
      {
        title: "Developer Portfolio",
        description: " ",
      },
    ],
    achievements: [
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
      
    ],
    achievements: [
      
    ],
  },
  {
    slug: "bhanu-prakash",
    name: "Tilavath Bhanu Prakash ",
    department: "Computer Science & Engineering",
    batch: "2028",
    roleCurrent: "DEV Head",
    bio: "Full-stack developer and aspiring AI engineer passionate about building scalable web applications and intelligent systems. Exploring Agentic AI, modern web technologies, and AI-powered developer tools while leading development initiatives at Syntax and mentoring aspiring developers at VNIT.",
    socials: {
      github: "https://github.com/bhanu806",
      linkedin: "https://www.linkedin.com/in/bhanu-prakash-tilavath-bb6804343/",
    },
    skills: ["JavaScript", "React", "Node.js", "Express.js", "MongoDB", "Socket.IO", "Agentic AI", "LLMs"],
    projects: [
      
    ],
    achievements: [
      
    ],
  },
  {
    slug: "Swanand-Dhere",
    name: "Swanand Dhere",
    department: "Computer Science & Engineering",
    batch: "2027",
    roleCurrent: "Advisory (2026-2027)",
    bio: "I am a Computer Science and Engineering undergraduate at VNIT Nagpur, passionate about competitive programming, software engineering, and building scalable systems. I gained industry experience as a Software Engineering Intern at Google, where I contributed to modernizing the Android Launcher experience for over 2 million users. As an ICPC Regionalist, I have solved over 900 algorithmic problems across LeetCode, Codeforces, and CodeChef, securing AIR 205 in ICPC Regionals. My technical interests include Data Structures and Algorithms, System Design, Full-Stack Development, Android Engineering, and Vector Databases. I served as the Competitive Programming Head at SyntaX – The Coding Club, VNIT Nagpur, where I organize coding contests, hackathons, and problem-solving sessions while mentoring fellow students. I enjoy tackling challenging technical problems, exploring innovative technologies, and fostering a collaborative programming culture. My focus is on continuous learning, building impactful software, and helping strengthen the competitive programming community.",
    socials: {
      github: "https://github.com/swand-12",
      linkedin: "https://www.linkedin.com/in/swanand-dhere-85647b27b?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    },
    skills: ["MERN", "Golang"],
    projects: [
      {
        title: "INTER NIT APP",
        description: " ",
      },
      {
        title: "Telephone Directory",
        description: " ",
      },
    ],
    achievements: [
      "SWE INTERN GOOGLE",
      "ICPC REGIONALIST",
      "UPCOMING SWE AT COHESITY"
    ],
  },
  {
    slug: "Srikar",
    name: "Srikar Bhamidipati",
    department: "Electrical and Electronics Engineering",
    batch: "2028",
    roleCurrent: "Competitive Programming Head",
    bio: "Competitive programmer and CP Head at VNIT SyntaX, focused on algorithms, dynamic programming, and helping peers grow through structured problem-solving sessions.",
    socials: {
      github: "https://github.com/srikarbhamidipati2005-code",
      linkedin: "https://www.linkedin.com/in/srikar-bhamidipati-670283336/",
    },
    skills: ["C++", "Python", "JavaScript", "TypeScript", "React", "Next.js", "FastAPI", "Node.js", "Docker", "PostgreSQL", "MongoDB", "Git", "Linux"],
    projects: [
      {
        title: "DSA Search Engine",
        description: "Built a search engine indexing 36,000+ competitive programming problems. Implemented TF-IDF, BM25 ranking, and fuzzy matching. Optimized search to deliver results in under 2 seconds.",
      },
      {
        title: "RAG Flow AI",
        description: "Built a Retrieval-Augmented Generation application using FastAPI, TypeScript, ChromaDB, Docker, and Gemini. Worked on document retrieval and AI-powered question answering.",
      },
      {
        title: "Live Collaborative Whiteboard",
        description: "Developed a real-time collaborative whiteboard using Socket.IO, JWT, and MongoDB. Supported multiple simultaneous users.",
      },
    ],
    achievements: [
      "Codeforces Expert (peak rating: 1739)",
      "AtCoder peak rating: 1387",
      "Codeforces Round 1071 Div. 3: Rank 459 out of approximately 14,000 participants"
    ],
  },
  {
    slug: "Pratk-Nawale",
    name: "Pratk Nawale",
    department: "Civil Engineering",
    batch: "2028",
    roleCurrent: "Advisory (2026-2027)",
    bio: "I give my 100% effort in whatever I do. My area of interest is Artificial Intelligence. I wanna go deep into AI research and try to make a positive change in the world.",
    socials: {
      github: "https://github.com/pratik-n30",
      linkedin: "https://www.linkedin.com/in/pratik-nawale-a97824361?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    },
    skills: ["Python", "C++", "PyTorch"],
    projects: [
    ],
    achievements: [
      
    ],
  },

  // Historical council members
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
      
    ],
  },
  {
    slug: "Vaidehi",
    name: "Vaidehi Kharde",
    department: "Computer Science & Engineering",
    batch: "2026",
    roleCurrent: "President (2025-2026)",
    bio: "I am a curious and driven individual with a passion for technology, problem-solving, and continuous learning. I enjoy exploring new ideas, building things, and taking on challenges that push me to grow. I believe in learning through experiences, collaborating with others, and turning ideas into meaningful outcomes. My journey as President of SyntaX has been an important part of my growth, shaping my approach to leadership, teamwork, and creating opportunities for others.",
    socials: {
      github: "https://github.com/Vaidehi-Kharde",
      linkedin: "https://www.linkedin.com/in/vaidehi-kharde-84351b279/",
    },
    skills: ["Go", "Python", "C/C++", "Java", "JavaScript", "TypeScript", "Django", "FastAPI", "Flutter", "SQL", "MongoDB", "Firebase", "GCP", "Docker", "Jenkins", "Git"],
    achievements: [
      
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
      
    ],
  },
  {
    slug: "Shivam-Raj",
    name: "Shivam Raj",
    department: "Metallurgical & Materials Engineering",
    batch: "2027",
    roleCurrent: "Advisory (2026-2027)",
    bio: "A developer passionate about building impactful products and solving complex problems. Interested in full-stack development, emerging technologies, and collaborative innovation.",
    socials: {
      github: "https://github.com/Shivamraj2006",
      linkedin: "https://www.linkedin.com/in/emailshivamraj/",
    },
    skills: ["C++", "C", "Python", "JavaScript", "TypeScript", "Dart", "MATLAB", "Flutter", "React.js", "Next.js", "Node.js", "Express.js"],
    achievements: [
      
    ],
  },
];

export function getPersonBySlug(slug: string): Person | undefined {
  return people.find((p) => p.slug === slug);
}
