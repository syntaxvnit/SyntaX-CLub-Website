export interface Achievement {
  id: string;
  title: string;
  academicYear: string;
  date: string;
  competition: string;
  recipientOrTeam: string;
  award: string;
  category: 'Competition' | 'Open Source' | 'Hackathon' | 'Research';
  description: string;
  impactMetrics?: string;
  link?: string;
  tags: string[];
}

export const achievements: Achievement[] = [
  {
    id: "sih-2023-finalists",
    title: "Smart India Hackathon 2023 Finalists",
    academicYear: "2023-2024",
    date: "December 2023",
    competition: "Smart India Hackathon (Ministry of Education, Govt of India)",
    recipientOrTeam: "Team SyntaX Algorunners (VNIT)",
    award: "Grand National Finalists",
    category: "Hackathon",
    description: "Built an automated AI telemetry analysis platform for rural water monitoring sensors, delivering real-time anomaly detection under intermittent connectivity.",
    impactMetrics: "Top 5 nationally in Problem Statement #SIH1340",
    tags: ["SIH", "National Hackathon", "IoT", "AI"],
  },
  {
    id: "icpc-amritapuri-2023",
    title: "ICPC Regional Qualifiers (Amritapuri & Kanpur Sites)",
    academicYear: "2023-2024",
    date: "November 2023",
    competition: "International Collegiate Programming Contest (ICPC)",
    recipientOrTeam: "Team SyntaX_nullptr",
    award: "Regional Qualifiers",
    category: "Competition",
    description: "Two SyntaX VNIT algorithmic teams ranked among top 50 in India preliminary rounds, advancing to the on-site regional showdowns.",
    impactMetrics: "Top 3% among 4,000+ participating collegiate teams",
    tags: ["ICPC", "Competitive Programming", "Algorithms", "C++"],
  },
  {
    id: "gsoc-2023-selection",
    title: "Google Summer of Code 2023 Contributor Selection",
    academicYear: "2022-2023",
    date: "May 2023",
    competition: "Google Summer of Code (GSoC)",
    recipientOrTeam: "Siddharth Rao (SyntaX Mentor)",
    award: "GSoC Fellow (Linux Foundation)",
    category: "Open Source",
    description: "Mentored through SyntaX open-source study groups, selected to contribute core kernel tracing and eBPF tooling to the Linux Foundation.",
    impactMetrics: "Global Open Source Fellowship",
    tags: ["GSoC", "Open Source", "Linux", "eBPF"],
  },
  {
    id: "central-india-hackathon-2024",
    title: "1st Place – Central India Mobile Dev Challenge",
    academicYear: "2023-2024",
    date: "February 2024",
    competition: "Regional Innovation Summit 2024",
    recipientOrTeam: "Team FlutterSyntaX",
    award: "1st Prize Winner (₹25,000)",
    category: "Hackathon",
    description: "Developed an offline-first mesh communications app enabling emergency medical dispatch teams to coordinate without cellular towers.",
    impactMetrics: "1st out of 60 regional collegiate entries",
    tags: ["Mobile", "Flutter", "Mesh", "1st Prize"],
  },
  {
    id: "codeforces-candidate-masters",
    title: "3 Club Members Achieved Candidate Master Rank",
    academicYear: "2023-2024",
    date: "Ongoing",
    competition: "Codeforces Global Competitions",
    recipientOrTeam: "SyntaX CP Track Members",
    award: "1900+ Rating (Candidate Master)",
    category: "Competition",
    description: "Continuous algorithmic rigor, bi-weekly campus contests, and weekly problem reviews pushed three SyntaX leads into the top tier of competitive programmers worldwide.",
    impactMetrics: "Top 4% worldwide on Codeforces",
    tags: ["Codeforces", "Rating Milestone", "Algorithms"],
  },
  {
    id: "hacktoberfest-vnit-super-chapter",
    title: "Hacktoberfest VNIT Chapter – 200+ Merged PRs",
    academicYear: "2023-2024",
    date: "October 2023",
    competition: "Hacktoberfest Global Open Source",
    recipientOrTeam: "SyntaX Student Community",
    award: "Recognized Community Chapter",
    category: "Open Source",
    description: "SyntaX hosted campus sprint clinics guiding 140+ students through their inaugural open-source contributions to real-world repositories.",
    impactMetrics: "214 validated pull requests merged into public open-source repos",
    tags: ["Hacktoberfest", "Open Source", "Community"],
  },
];
