# SyntaX VNIT — Official Club Website

> **Ideas into interfaces. Problems into possibilities.**  
> The official digital publication and home of **SyntaX**, the Web & App Development, Competitive Programming, and Artificial Intelligence club at **Visvesvaraya National Institute of Technology (VNIT), Nagpur, India**.

---

## 1. Architectural Philosophy

This website is designed as a **cutting-edge digital editorial publication** with a deep obsidian cyber canvas (`#07090E`), radiant electric neon cyan and purple accents (`#2ED3FE`, `#8B5CF6`), glassmorphism, interactive telemetry counters, and custom technology-universe SVG HUDs.

### Core Architecture Principles:
- **Static-First & Edge Native:** Powered by [Astro](https://astro.build) with TypeScript. All pages compile to clean, ultra-fast static HTML and CSS.
- **Zero Database & Zero Custom Backend:** Eliminates server maintenance, runtime security vulnerabilities, and database crash risks during peak traffic.
- **100% Git-Driven Content:** Every article, event, achievement, council member, and alumni record is version-controlled in Git.
- **External Form Integrations:** Event registration (SynHack) and alumni updates use external form providers (Google Forms / Tally) with responses exported to private Google Sheets for council review.
- **Authentic Brand Identity:** Features the official SyntaX VNIT logo mark and an opening video loading animation with instant skip and session storage memory.

---

## 2. Quickstart & Local Setup

### Prerequisites
- Node.js `v18.0.0` or later (tested on Node v24)
- npm `v9.0.0` or later

### Installation
```bash
# Clone the repository
git clone https://github.com/syntaxvnit/SyntaX-CLub-Website.git
cd SyntaX-CLub-Website

# Install dependencies
npm install

# Start the local development server (runs at http://localhost:4321)
npm run dev
```

### Production Build & Preview
```bash
# Validate TypeScript and compile production static bundle into /dist
npm run build

# Preview the production static output locally
npm run preview
```

---

## 3. Repository Structure

```text
SyntaX Website/
├── public/
│   ├── logo/                # Authentic SyntaX club logos (transparent & square)
│   ├── video/               # Trimmed intro animation (MP4 & WebM)
│   ├── illustrations/       # Vector references and illustrations
│   └── robots.txt           # Search engine crawler configuration
├── src/
│   ├── components/
│   │   ├── illustrations/   # Bespoke hand-drawn SVG doodles (Hero, Web, CP, AI, SynHack)
│   │   ├── layout/          # Footer and layout shell
│   │   ├── motion/          # VideoLoader with session caching & skip button
│   │   └── navigation/      # Sticky responsive Navbar with mobile drawer
│   ├── data/
│   │   ├── site.ts          # Global site metadata, navigation, socials
│   │   ├── people.ts        # Canonical member profiles & social links
│   │   ├── council.ts       # Council roles grouped by academic year
│   │   ├── synhack.ts       # SynHack hackathon configuration & editions archive
│   │   ├── events.ts        # Upcoming & completed workshops, contests
│   │   ├── achievements.ts  # Verified awards (SIH, ICPC, GSoC, Codeforces)
│   │   ├── blogs.ts         # Technical journal articles & tutorials
│   │   └── alumni.ts        # Alumni directory & submission form configuration
│   ├── layouts/
│   │   └── BaseLayout.astro # Base HTML layout with SEO & Open Graph tags
│   ├── pages/
│   │   ├── index.astro      # Editorial Homepage
│   │   ├── about.astro      # Club history, pillars, and thesis
│   │   ├── council/         # Council index & dynamic [year].astro pages
│   │   ├── people/          # Dynamic member profile pages [slug].astro
│   │   ├── synhack/         # SynHack flagship index & dynamic [year].astro
│   │   ├── events/          # Events directory & dynamic [slug].astro
│   │   ├── achievements.astro# Hall of Achievements
│   │   ├── blogs/           # Technical Journal & dynamic [slug].astro
│   │   ├── alumni.astro     # Alumni Network & submissions workflow
│   │   └── 404.astro        # Custom hand-drawn error page
│   └── styles/
│       ├── tokens.css       # Color variables, typography scales, shadows
│       └── global.css       # Typography, buttons, cards, responsive rules
├── astro.config.mjs         # Astro static output & sitemap configuration
├── package.json             # Scripts & dependencies
└── tsconfig.json            # Strict TypeScript configuration
```

---

## 4. Content Maintenance Guide (No Code Knowledge Required)

Future club councils can maintain all website content by directly editing the typed files in `src/data/`.

### 4.1. How to Add a Person / Council Member
Open `src/data/people.ts` and add a new entry to the `people` array:
```ts
{
  slug: "first-last",
  name: "First Last",
  department: "Computer Science & Engineering",
  batch: "2026",
  roleCurrent: "Technical Head", // Optional
  bio: "Brief approved bio written by the member...",
  socials: {
    github: "https://github.com/username", // Only include links that exist!
    linkedin: "https://linkedin.com/in/username"
  },
  skills: ["TypeScript", "Python", "Algorithms"],
  projects: [
    { title: "Project Name", description: "What it does..." }
  ],
  achievements: ["Optional award citation"]
}
```
*Note: A profile page will automatically generate at `/people/first-last`.*

### 4.2. How to Add a Council Academic Year
Open `src/data/council.ts`:
1. Add a new `CouncilYear` object to `councilYears`:
```ts
{
  academicYear: "2025-2026",
  isCurrent: true, // Mark previous year as false
  theme: "Autonomous Systems & Scale",
  tenure: "July 2025 – June 2026",
  summary: "Annual mission summary...",
  roles: [
    { personSlug: "first-last", role: "President", category: "Executive", order: 1 },
    { personSlug: "second-person", role: "Vice President", category: "Executive", order: 2 }
  ]
}
```

### 4.3. How to Configure SynHack Registration
Open `src/data/synhack.ts`:
```ts
export const synhackEditions: SynHackEdition[] = [
  {
    year: "2025",
    edition: "SynHack '25",
    // Toggle status: 'upcoming' | 'open' | 'closed' | 'completed'
    status: "open",
    // When status is 'open', paste your Google Form or Tally registration link:
    registrationUrl: "https://forms.gle/your-synhack-registration-form",
    ...
  }
];
```
- `upcoming`: Displays coming-soon badge. No active button.
- `open`: Activates the primary "Register Team Now" button directing to `registrationUrl`.
- `closed`: Informs hackers that registrations have ended.
- `completed`: Displays archived winners and results.

### 4.4. How to Configure Alumni Submissions
Open `src/data/alumni.ts`:
```ts
export const alumniConfig: AlumniFormConfig = {
  formUrl: "https://forms.gle/your-alumni-google-form",
  isFormConfigured: true, // Set to true once the form is live
  ...
};
```
#### Council Review & Publication Flow:
1. Alumnus submits the external Google Form / Tally.
2. Form responses land in a private Google Sheet accessible only to the executive council.
3. The council verifies graduation year and secures publication permission.
4. An authorized member copies the approved text into `alumniStories` in `src/data/alumni.ts`.
5. Commit and push to `main`; the site deploys automatically.

### 4.5. How to Add an Event
Open `src/data/events.ts` and append to the `events` array:
```ts
{
  slug: "my-workshop-slug",
  title: "Workshop Title",
  category: "Workshop", // 'Hackathon' | 'Workshop' | 'CP Contest' | 'AI Bootcamp'
  summary: "One-sentence summary...",
  description: "Comprehensive description...",
  date: "November 15, 2024",
  venue: "Department of CSE, VNIT",
  status: "upcoming", // or 'completed'
  highlights: ["Point 1", "Point 2"],
  takeaways: ["Skill 1", "Skill 2"],
  doodleType: "web"
}
```

### 4.6. How to Add a Blog Post / Article
Open `src/data/blogs.ts` and append to `blogPosts`:
```ts
{
  slug: "article-slug",
  title: "Article Title",
  author: {
    name: "Author Name",
    role: "Core Member",
    slug: "author-slug" // Optional, links to /people/author-slug
  },
  publishedAt: "November 2024",
  readTime: "5 min read",
  category: "Web Architecture", // 'Web Architecture' | 'Algorithms' | 'AI & ML' | 'Engineering Culture'
  summary: "Brief teaser...",
  tags: ["TypeScript", "Performance"],
  content: `
### Section Heading
Your markdown formatted content here...
  `
}
```

### 4.7. How to Add an Achievement
Open `src/data/achievements.ts` and append to `achievements`:
```ts
{
  id: "sih-2024",
  title: "Smart India Hackathon 2024 Finalist",
  academicYear: "2024-2025",
  date: "December 2024",
  competition: "Smart India Hackathon",
  recipientOrTeam: "Team SyntaX",
  award: "National Finalist",
  category: "Hackathon",
  description: "What the team achieved...",
  tags: ["SIH", "Hackathon"]
}
```

---

## 5. Deployment Guide

### Deploying to Vercel (Recommended)
1. Push this repository to GitHub under the `syntaxvnit` organization.
2. Log into [Vercel](https://vercel.com) using the club GitHub account.
3. Click **Add New Project** and import `SyntaX-CLub-Website`.
4. Vercel automatically detects **Astro**:
   - Framework Preset: `Astro`
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. Click **Deploy**. Any future commits to `main` will automatically build and publish!

### Deploying to GitHub Pages
If deploying via GitHub Pages:
1. In `astro.config.mjs`, update `site` to `https://syntaxvnit.github.io`.
2. Add a standard Astro GitHub Actions workflow `.github/workflows/deploy.yml`.

---

## 6. Handover & Council Account Transition Checklist

When transferring ownership to a new academic year council:
1. **GitHub Org Access:** Grant `Admin` rights on the `syntaxvnit/SyntaX-CLub-Website` repository to the incoming President and Technical Head.
2. **Form Ownership:** Transfer ownership of the SynHack Google Form and Alumni Google Form to the incoming council Gmail address (`syntax.vnit@gmail.com`).
3. **Response Spreadsheets:** Ensure the incoming council has editor permissions on the private Google Sheets storing form responses.
4. **Vercel / Hosting:** Add incoming leads as team members on the hosting provider dashboard.
5. **Update Current Council:** Edit `src/data/council.ts` to mark the new academic session as `isCurrent: true`.

---

## 7. License

Built with pride by the student engineers of **SyntaX VNIT**.  
Licensed under the [MIT License](LICENSE).
