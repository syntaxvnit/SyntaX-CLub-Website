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
    academicYear: "2026-2027",
    isCurrent: true,
    theme: "Engineering With Intent",
    tenure: "July 2026 – June 2027",
    summary: "Focused on expanding open-source contributions, launching AI research tracks, hosting SynHack '27, and fostering rigorous competitive programming culture across VNIT.",
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
        category: "Executive",
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
        personSlug: "bhanu-prakash",
        role: "DEV Head",
        category: "Domains",
        order: 6,
      },
      {
        personSlug: "Aditya-Sahu",
        role: "AI/ML Head",
        category: "Domains",
        order: 7,
      },
      {
        personSlug: "Harshit-Raj",
        role: "DSA Head",
        category: "Domains",
        order: 8,
      },
      {
        personSlug: "Srikar",
        role: "Competitive Programming Head",
        category: "Domains",
        order: 9,
      },
      {
        personSlug: "Shivam-Raj",
        role: "Advisory",
        category: "Domains",
        order: 10,
      },
      {
        personSlug: "Swanand-Dhere",
        role: "Advisory",
        category: "Domains",
        order: 11,
      },
      {
        personSlug: "Pratk-Nawale",
        role: "Advisory",
        category: "Domains",
        order: 12,
      },
    ],
  },

  {
      academicYear: "2025-2026",
      isCurrent: false,
      theme: "Foundations & Code",
      tenure: "July 2025 – June 2026",
      summary: "The formative year when SyntaX established weekly algorithmic contests, foundational Git workshops, and campus-wide peer programming circles.",
      roles: [
        {
          personSlug: "Vaidehi",
          role: "President",
          category: "Executive",
          order: 1,
        },
        {
          personSlug: "Omkar-More",
          role: "Vice President",
          category: "Executive",
          order: 2,
        },
        {
          personSlug: "Shivam-Raj",
          role: "WEB Head",
          category: "Domains",
          order: 3,
        },
        {
          personSlug: "Aritra-Sarkar",
          role: "AI/ML Head",
          category: "Domains",
          order: 3,
        },
      ],
  },

  {
    academicYear: "2024-2025",
    isCurrent: false,
    theme: "Building at Scale",
    tenure: "July 2024 – June 2025",
    summary: "Marked by the launch of SynHack as a national flagship hackathon, record attendance in campus technical bootcamps, and multiple national hackathon victories.",
    roles: [
      {
        personSlug: "Shresth-Verma",
        role: "President",
        category: "Executive",
        order: 1,
      },
      {
        personSlug: "Pratik-Jha",
        role: "Vice President",
        category: "Executive",
        order: 2,
      },
      {
        personSlug: "Deepak-Jalan",
        role: "Treasurer",
        category: "Executive",
        order: 3,
      },
      {
        personSlug: "Bhupendra-Tiwari",
        role: "Project Head",
        category: "Executive",
        order: 4,
      },
      {
        personSlug: "Yash-Goyal",
        role: "Event Head",
        category: "Executive",
        order: 5,
      },
      {
        personSlug: "Aryan-Dwivedi",
        role: "Blockchain Head",
        category: "Domains",
        order: 6,
      },
      {
        personSlug: "Smit-Gharat",
        role: "Operations Head",
        category: "Executive",
        order: 7,
      },
      {
        personSlug: "Om-Kharat",
        role: "Event Head",
        category: "Executive",
        order: 8,
      },
      {
        personSlug: "Ansh-Dalal",
        role: "WEB Head",
        category: "Domains",
        order: 9,
      },
      {
        personSlug: "Vaidehi",
        role: "Technical Operations Head",
        category: "Technical",
        order: 10,
      },
      {
        personSlug: "Harshada",
        role: "APP Head",
        category: "Domains",
        order: 11,
      },
      {
        personSlug: "Sakshi",
        role: "Operations Head",
        category: "Executive",
        order: 12,
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
