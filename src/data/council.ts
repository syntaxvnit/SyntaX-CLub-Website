import { people, type Person } from './people';

export interface CouncilRoleAssignment {
  personSlug: string;
  role: string;
  category: 'Executive' | 'Technical' | 'Domains' | 'Operations' | 'Creative';
  order: number;
}

export interface CouncilYear {
  academicYear: string;
  isCurrent: boolean;
  theme?: string;
  tenure: string;
  summary: string;
  roles: CouncilRoleAssignment[];
}

export const councilYears: CouncilYear[] = [
  {
    academicYear: "2024-2025",
    isCurrent: true,
    theme: "Engineering With Intent",
    tenure: "July 2024 – June 2025",
    summary: "Focused on expanding open-source contributions, launching AI research tracks, hosting SynHack '25, and fostering rigorous competitive programming culture across VNIT.",
    roles: [
      {
        personSlug: "Omkar-More",
        role: "President",
        category: "Executive",
        order: 1,
      },
      {
        personSlug: "Aritra-Sarkar",
        role: "Vice President",
        category: "Executive",
        order: 2,
      },
      {
        personSlug: "Hrushikesh",
        role: "Treasurer",
        category: "Operations",
        order: 3,
      },
      {
        personSlug: "Ayush-Kumar",
        role: "Organisational Head",
        category: "Operations",
        order: 4,
      },
      {
        personSlug: "Sangram",
        role: "Computer Science Core Head",
        category: "Domains",
        order: 5,
      },
      {
        personSlug: "Aditya-Sahu",
        role: "AI/ML Head",
        category: "Domains",
        order: 6,
      },
      {
        personSlug: "Harshit-Raj",
        role: "DSA Head",
        category: "Domains",
        order: 7,
      },
      {
        personSlug: "Srikar",
        role: "Competitive Programming Head",
        category: "Domains",
        order: 8,
      },
    ],
  },
  {
    academicYear: "2023-2024",
    isCurrent: false,
    theme: "Building at Scale",
    tenure: "July 2023 – June 2024",
    summary: "Marked by the launch of SynHack as a national flagship hackathon, record attendance in campus technical bootcamps, and multiple national hackathon victories.",
    roles: [
      {
        personSlug: "siddharth-rao",
        role: "President",
        category: "Executive",
        order: 1,
      },
      {
        personSlug: "megha-bose",
        role: "Vice President",
        category: "Executive",
        order: 2,
      },
      {
        personSlug: "omkar-deshmukh",
        role: "Web Development Lead",
        category: "Technical",
        order: 3,
      },
      {
        personSlug: "ananya-sharma",
        role: "Competitive Programming Lead",
        category: "Domains",
        order: 4,
      },
    ],
  },
  {
    academicYear: "2022-2023",
    isCurrent: false,
    theme: "Foundations & Code",
    tenure: "July 2022 – June 2023",
    summary: "The formative year when SyntaX established weekly algorithmic contests, foundational Git workshops, and campus-wide peer programming circles.",
    roles: [
      {
        personSlug: "varun-gupta",
        role: "Technical Lead",
        category: "Technical",
        order: 1,
      },
      {
        personSlug: "siddharth-rao",
        role: "General Secretary",
        category: "Executive",
        order: 2,
      },
      {
        personSlug: "megha-bose",
        role: "Event Coordinator",
        category: "Operations",
        order: 3,
      },
    ],
  },
];

export function getCurrentCouncil(): CouncilYear {
  return councilYears.find((c) => c.isCurrent) || councilYears[0];
}

export function getCouncilByYear(year: string): CouncilYear | undefined {
  // matches "2024-2025" or "2024"
  return councilYears.find(
    (c) => c.academicYear === year || c.academicYear.startsWith(year)
  );
}

export interface EnrichedCouncilMember {
  role: string;
  category: string;
  order: number;
  person: Person;
}

export function getEnrichedCouncil(council: CouncilYear): EnrichedCouncilMember[] {
  return council.roles
    .map((r) => {
      const p = people.find((item) => item.slug === r.personSlug);
      if (!p) return null;
      return {
        role: r.role,
        category: r.category,
        order: r.order,
        person: p,
      };
    })
    .filter((item): item is EnrichedCouncilMember => item !== null)
    .sort((a, b) => a.order - b.order);
}
