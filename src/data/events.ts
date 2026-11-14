
export type EventCategory =
  | 'Hackathon'
  | 'Workshop'
  | 'CP Contest'
  | 'AI Bootcamp'
  | 'Guest Talk';

export type EventStatus = 'upcoming' | 'open' | 'closed' | 'completed';

export interface ClubEvent {
  slug: string;
  title: string;
  category: EventCategory;
  summary: string;
  description: string;
  date: string;
  year: number;
  venue: string;
  status: EventStatus;
  instagramUrl?: string;
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
  // ==================== 2026 ====================

{
  slug: 'code-clash-2026',
  title: 'SyntaX Code Clash',
  category: 'CP Contest',
  summary:
    'A high-energy, team-based coding quiz where participants tackle progressively harder live challenges, compete under time pressure, and collaborate to climb the leaderboard.',
  description:
    'SyntaX Code Clash is a competitive coding quiz designed around individual problem-solving and team collaboration. Participants first qualify individually through a 45-minute coding round. Based on qualifier performance, balanced teams are formed using a snake-draft approach. Teams then compete in progressively challenging live coding rounds, earning points for correct submissions. The event concludes with a high-value final challenge followed by results and awards.',
  date: '2026 · Date to be announced',
  year: 2026,
  venue: 'VNIT Nagpur · To be announced',
  status: 'upcoming',
  instagramUrl: 'https://www.instagram.com/syntax_vnit/',
  highlights: [
    '45-minute individual coding qualifier',
    'Balanced team formation based on qualifier performance',
    '2-hour-30-minute live team coding competition',
    '15-minute high-value final challenge',
    'Live leaderboard and competitive scoring',
    'Results and awards for winning teams',
  ],
  takeaways: [
    'Problem-solving under time pressure',
    'Teamwork and collaborative coding',
    'Accuracy, speed and logical thinking',
    'Competitive programming experience',
  ],
  doodleType: 'cp',
},

  {
    slug: 'gemini-ai-session-2026',
    title: 'Explore AI with Google Gemini',
    category: 'AI Bootcamp',
    summary:
      'An interactive AI-focused session introducing first-year students to Gemini, AI-assisted learning, creativity, and hands-on challenges.',
    description:
      'SyntaX announced an AI-focused session in collaboration with the Google Gemini Campus Ambassador. The session was designed for first-year VNIT students and included interactive AI-based games and challenges.',
    date: '27 September 2026 · 10:00 AM',
    year: 2026,
    venue: 'CRC 3–4, VNIT Nagpur',
    status: 'completed',
    instagramUrl: 'https://www.instagram.com/syntax_vnit/',
    highlights: [
      'Introduction to Google Gemini and practical AI use',
      'Interactive AI-based games and challenges',
      'Prizes and certificates for winners',
    ],
    doodleType: 'ai',
  },
  {
    slug: 'web-development-workshop-2026',
    title: 'Web Development Workshop & Recruitment Drive',
    category: 'Workshop',
    summary:
      'A first-year hands-on introduction to web development, building a Snake Game and exploring the Smart Quiz App recruitment project.',
    description:
      'SyntaX conducted a beginner-friendly web development workshop for first-year students. Participants started with the fundamentals and built a Snake Game, with an introduction to the Smart Quiz App as the recruitment project.',
    date: '14 February 2026 · 9:30 AM',
    year: 2026,
    venue: 'CRC, VNIT Nagpur',
    status: 'completed',
    instagramUrl: 'https://www.instagram.com/syntax_vnit/',
    highlights: [
      'Hands-on Snake Game project',
      'Logic building and DOM manipulation',
      'Introduction to the Smart Quiz App recruitment project',
    ],
    doodleType: 'web',
  },

  // ==================== 2025 ====================
  {
    slug: 'synhack-2025',
    title: 'SynHack 2025',
    category: 'Hackathon',
    summary:
      'A 30-hour hackathon bringing developers, designers, and problem-solvers together at VNIT Nagpur.',
    description:
      'SynHack 2025 was a hackathon organized by SyntaX VNIT. Participants worked on real-world problem statements with opportunities for mentorship, collaboration and rewards.',
    date: '8–9 November 2025',
    year: 2025,
    venue: 'VNIT Nagpur',
    status: 'completed',
    instagramUrl: 'https://www.instagram.com/syntax_vnit/',
    highlights: [
      '30 hours of building and collaboration',
      '70+ teams and 250+ participants',
      '24 teams in the final round',
      '₹50,000+ announced prize pool',
    ],
    doodleType: 'hackathon',
  },
  {
    slug: 'competitive-programming-workshop-2025',
    title: 'Competitive Programming Workshop',
    category: 'Workshop',
    summary:
      'A beginner-friendly session for first- and second-year students focused on logic, problem decomposition, and competitive programming.',
    description:
      'SyntaX hosted a Competitive Programming workshop for first- and second-year students. The session emphasized building logical thinking and breaking down problems.',
    date: '2025 · Exact date to be updated',
    year: 2025,
    venue: 'VNIT Nagpur',
    status: 'completed',
    instagramUrl: 'https://www.instagram.com/syntax_vnit/',
    highlights: [
      'Logic before language',
      'Problem breakdown and reasoning',
      'Introduction to competitive programming',
    ],
    doodleType: 'cp',
  },
];

// Add verified 2024 events here when their details are available.

export const eventYears = [2026, 2025, 2024] as const;

export function getEventsByYear(year: number): ClubEvent[] {
  return events.filter((event) => event.year === year);
}

export function getUpcomingEvents(): ClubEvent[] {
  return events.filter(
    (event) => event.status === 'upcoming' || event.status === 'open'
  );
}

export function getPastEvents(): ClubEvent[] {
  return events.filter(
    (event) => event.status === 'completed' || event.status === 'closed'
  );
}

export function getEventBySlug(
  slug: string
): ClubEvent | undefined {
  return events.find((event) => event.slug === slug);
}
