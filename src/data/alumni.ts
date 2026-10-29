export interface AlumniStory {
  id: string;
  name: string;
  graduationYear: string;
  department: string;
  currentRole: string;
  currentOrg: string;
  location?: string;
  quoteOrUpdate: string;
  careerPath: string[];
  linkedinUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export interface AlumniFormConfig {
  formUrl: string; // Configurable external form link (e.g. Tally / Google Form)
  isFormConfigured: boolean;
  submissionInstructions: string;
  reviewPolicy: string;
}

export const alumniConfig: AlumniFormConfig = {
  // Public form link configured for alumni submissions
  // To configure: Replace with your Google Form or Tally link (e.g., https://tally.so/r/syntax-alumni)
  formUrl: "https://forms.gle/syntax-vnit-alumni-submission-placeholder",
  isFormConfigured: false, // Set to true once the production form link is wired up
  submissionInstructions: "We invite all VNIT SyntaX alumni to share their ongoing engineering pursuits, startup milestones, research breakthroughs, and career journeys. Every submission is reviewed by the council and published with full author consent.",
  reviewPolicy: "Submissions are stored securely by the external form provider and exported to the council review sheet. Verified updates are added to the Git repository and deployed automatically.",
};

export const alumniStories: AlumniStory[] = [
  {
    id: "siddharth-rao",
    name: "Siddharth Rao",
    graduationYear: "2024",
    department: "Computer Science & Engineering",
    currentRole: "Software Engineer",
    currentOrg: "Distributed Systems Firm",
    location: "Bengaluru, India",
    quoteOrUpdate: "SyntaX was where I learned that software engineering is a collaborative craft, not a solitary pursuit. Leading the team during the inaugural SynHack gave me the confidence to design resilient systems in high-stakes environments.",
    careerPath: ["SyntaX President (2023-24)", "GSoC Fellow @ Linux Foundation", "Software Engineer"],
    linkedinUrl: "https://linkedin.com/company/syntaxvnit",
    githubUrl: "https://github.com/syntaxvnit",
    featured: true,
  },
  {
    id: "varun-gupta",
    name: "Varun Gupta",
    graduationYear: "2023",
    department: "Computer Science & Engineering",
    currentRole: "Backend Infrastructure Engineer",
    currentOrg: "Global Fintech Scaleup",
    location: "Pune, India",
    quoteOrUpdate: "Starting the club in our third year seemed daunting, but seeing SyntaX grow into VNIT's beating technical heart makes me immensely proud. The weekly algorithmic contest culture continues to pay dividends across all our careers.",
    careerPath: ["SyntaX Co-founder", "Senior Systems Lead", "Backend Infrastructure Engineer"],
    linkedinUrl: "https://linkedin.com/company/syntaxvnit",
    githubUrl: "https://github.com/syntaxvnit",
    featured: true,
  },
  {
    id: "megha-bose",
    name: "Megha Bose",
    graduationYear: "2024",
    department: "Computer Science & Engineering",
    currentRole: "Cloud Platform Specialist",
    currentOrg: "Enterprise Cloud Solutions",
    location: "Hyderabad, India",
    quoteOrUpdate: "SyntaX provided a supportive, ego-free sandbox to experiment with cutting-edge tools, make architecture mistakes early, and mentor junior women engineers in coding.",
    careerPath: ["SyntaX Vice President (2023-24)", "GHC India Scholar", "Cloud Platform Specialist"],
    linkedinUrl: "https://linkedin.com/company/syntaxvnit",
    featured: false,
  },
  {
    id: "arjun-shukla",
    name: "Arjun Shukla",
    graduationYear: "2022",
    department: "Electronics & Communication",
    currentRole: "Co-founder & CTO",
    currentOrg: "DeepTech AI Startup",
    location: "Bengaluru, India",
    quoteOrUpdate: "The problem-solving velocity cultivated during campus hackathons is identical to early-stage startup building: rapid hypothesis testing, minimal abstractions, and ruthless execution.",
    careerPath: ["Competitive Programmer", "AI Research Intern", "Startup Co-founder & CTO"],
    linkedinUrl: "https://linkedin.com/company/syntaxvnit",
    featured: false,
  },
];
