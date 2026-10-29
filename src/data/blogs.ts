export interface BlogPost {
  slug: string;
  title: string;
  author: {
    name: string;
    role: string;
    slug?: string;
  };
  publishedAt: string;
  readTime: string;
  category: 'Web Architecture' | 'Algorithms' | 'AI & ML' | 'Engineering Culture';
  summary: string;
  tags: string[];
  featured?: boolean;
  content: string; // Markdown formatted article body
}

export const blogPosts: BlogPost[] = [
  {
    slug: "building-static-first-web-systems",
    title: "Building Static-First: Why Campus Websites Don't Need Databases",
    author: {
      name: "Rohit Kulkarni",
      role: "Technical Head (Web & Systems)",
      slug: "rohit-kulkarni",
    },
    publishedAt: "October 18, 2024",
    readTime: "6 min read",
    category: "Web Architecture",
    featured: true,
    tags: ["Astro", "Static Site", "Architecture", "Performance", "No-Database"],
    summary: "How modern static site generation, Island Architecture, and Git-backed workflows eliminate server maintenance, scale to thousands of users, and cost zero hosting dollars.",
    content: `
### The Monolithic Default

For years, the default stack for university societies and departmental portals was predictable: spin up an unpatched VPS running PHP and MySQL, or deploy a heavyweight Node.js backend with an always-on relational database. 

Within two semesters, the inevitable occurs:
1. The student administrator graduates and loses the SSH key.
2. The server database crashes during peak exam or hackathon registration traffic.
3. Security vulnerabilities accumulate in outdated dependencies.
4. Annual renewal invoices create institutional friction.

When we re-architected SyntaX VNIT's digital presence, we committed to an uncompromising premise: **Zero database. Zero custom API servers. 100% Git-backed content.**

### The Island Architecture Advantage

Unlike single-page applications (SPAs) that deliver empty HTML shells and expect the client's mobile CPU to execute megabytes of JavaScript before displaying text, static-first frameworks like Astro compile everything to pure HTML and CSS during build time.

\`\`\`
Client Request -> Edge CDN Edge Server -> Pure Cached HTML (12ms TTFB)
\`\`\`

When interactive components are strictly necessary—such as our interactive hackathon timeline, theme switcher, or filtered search—Astro hydrates *only that specific component island* while leaving 95% of the page as lightweight, zero-runtime HTML.

### What Replaces the Database?

For an editorial website, technical journal, and council archive, your database is already sitting in front of you: **Git commits and strongly typed TypeScript collections**.

- **Editorial control:** Council members submit PRs with Markdown files or edit typed JSON/TS records.
- **Audit trail:** Git commit history provides an immutable, transparent timeline of who edited what and when.
- **Resilience:** If the hosting provider disappears tomorrow, the complete website and all historical records exist safely across every developer's local laptop.

### Form Integrations Without Servers

For external data collection—such as SynHack registration and alumni life updates—we leverage battle-tested form providers like Tally and Google Forms. Responses stream directly into private, authenticated Google Sheets, giving organizers spreadsheet exports, real-time response counters, and automated email confirmation triggers without managing a single SQL query.

Static-first isn't a compromise. It is the pinnacle of engineering elegance for community software.
    `,
  },
  {
    slug: "demystifying-segment-trees-and-lazy-propagation",
    title: "A Visual Intuition for Segment Trees & Lazy Propagation",
    author: {
      name: "Priya Verma",
      role: "Competitive Programming Lead",
      slug: "priya-verma",
    },
    publishedAt: "September 20, 2024",
    readTime: "8 min read",
    category: "Algorithms",
    featured: false,
    tags: ["Competitive Programming", "C++", "Data Structures", "Segment Trees"],
    summary: "Breaking down range query problems, tree construction in 4N memory, and how lazy tags delay updates until strictly necessary.",
    content: `
### The Classic Range Query Dilemma

Consider the canonical challenge: Given an array of $N$ integers, support two operations:
1. Update elements across a continuous range $[L, R]$ by adding value $V$.
2. Query the minimum or sum across a range $[Q_L, Q_R]$.

A naive linear sweep achieves $O(1)$ updates and $O(N)$ queries, or vice-versa with prefix sums. But when $Q, N \\le 2 \\times 10^5$, $O(N \\times Q)$ guarantees a Time Limit Exceeded (TLE) verdict. Enter the **Segment Tree**.

\`\`\`
                 [1, 8]
               /        \\
         [1, 4]          [5, 8]
        /      \\        /      \\
     [1, 2]  [3, 4]  [5, 6]  [7, 8]
\`\`\`

### The Core Invariant

A segment tree is a complete binary tree where each node represents an interval $[L, R]$. The root node represents the entire array $[1, N]$, and leaves represent individual indices $[i, i]$.

Building the tree takes $O(N)$ time. Queries decompose any arbitrary interval into at most $O(\\log N)$ canonical disjoint segments.

### Why Lazy Propagation is Revolutionary

If you need to update an entire range $[L, R]$, updating every leaf individually would still degrade to $O(N \\log N)$. 

The genius of **Lazy Propagation** is the principle of postponed responsibility:
> *"Never update a child node until a query or deeper update forces you to inspect it."*

When a node's interval is fully covered by the update range $[L, R]$, we store the pending update in a \`lazy\` array at that node and immediately return. Only when a subsequent operation needs to travel into that node's children do we "push down" the pending update.

\`\`\`cpp
void push(int node, int l, int r) {
    if (lazy[node] != 0) {
        tree[node] += lazy[node] * (r - l + 1);
        if (l != r) {
            lazy[2 * node] += lazy[node];
            lazy[2 * node + 1] += lazy[node];
        }
        lazy[node] = 0;
    }
}
\`\`\`

With lazy propagation, both range updates and range queries execute in strict $O(\\log N)$ time, unlocking sub-second execution across 200,000 queries.
    `,
  },
  {
    slug: "practical-rag-pipelines-vnit-documents",
    title: "Engineering a Practical RAG Pipeline for VNIT Course Syllabi",
    author: {
      name: "Aditya Nair",
      role: "AI & Research Lead",
      slug: "aditya-nair",
    },
    publishedAt: "August 30, 2024",
    readTime: "7 min read",
    category: "AI & ML",
    featured: false,
    tags: ["AI", "RAG", "Vector Search", "Python", "Local LLM"],
    summary: "How we parsed complex academic PDFs, tuned hybrid chunking, and ran localized inference without expensive cloud API tokens.",
    content: `
### The Problem with College Information

Every semester at VNIT, students spend hours hunting down course prerequisites, lab grading rubrics, academic ordinances, and elective credits scattered across disparate PDF bulletins.

We set out to build **CampusDoc**, a semantic retrieval-augmented generation engine capable of answering nuanced queries like *"Can a 3rd year ECE student take Distributed Operating Systems as an open elective?"*

### Overcoming Naive Chunking

Most tutorial RAG implementations divide text into naive 500-token chunks with 50-token overlaps. In institutional academic documents, this completely breaks:
- Tables of course prerequisites get sliced across chunk boundaries.
- Grading schemas lose their heading context.
- Numbered clauses reference definitions made 3 pages earlier.

We implemented a **hierarchical Markdown parser** that preserves document outline metadata (e.g. \`Department > Semester > Course Code > Syllabus Module\`) inside each chunk's embedding header:

\`\`\`python
def construct_chunk_header(metadata):
    return f"Context: [{metadata['dept']}] Course {metadata['course_code']} - {metadata['title']}\\n\\n"
\`\`\`

### Hybrid Search: Dense Meets Sparse

Vector embeddings (dense retrieval) excel at conceptual understanding, but fail on exact alphanumeric codes like \`CSL312\` or \`MAL204\`.

By combining **BM25 lexical search** with **bge-small-en-v1.5 embeddings** using Reciprocal Rank Fusion (RRF), our accuracy on exact course code queries jumped from 61% to 94.8%.

Running this over an quantized local Mistral/Llama model on campus lab GPUs meant zero recurring inference costs and total privacy for institutional data.
    `,
  },
];

export function getFeaturedBlog(): BlogPost {
  return blogPosts.find((b) => b.featured) || blogPosts[0];
}

export function getBlogBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((b) => b.slug === slug);
}
