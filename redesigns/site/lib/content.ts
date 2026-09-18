import { LINKS } from './links';

export type ProjectLink = { label: string; href: string | null };

export const METRICS = [
  { value: 'hourly → <1s', label: 'Data sync latency, after replacing batch updates', source: 'JD Marc Limited' },
  { value: '−40%', label: 'Repetitive workflow steps removed by automation', source: 'JD Marc Limited' },
  { value: '9', label: 'Departments behind one role-based access model', source: 'JD Marc Limited' },
  { value: '99.9%', label: 'Uptime held across staging and production', source: 'Monitoring and tuning' },
];

export const PRACTICE = [
  {
    title: 'Access control first',
    body: 'I put authorisation at the layer that cannot be bypassed — row-level policies, gateway-issued claims — before I write the screen that uses it. Hiding a button is not a permission model.',
  },
  {
    title: 'Automate the boring path',
    body: 'Most internal software is people retyping things into a second system. I look for that first, because it is usually the largest measurable win available and nobody has been asked to fix it.',
  },
  {
    title: 'Own it after it ships',
    body: 'Every system here, I also had to keep running — monitoring, tuning, and being the person who gets the message when it breaks. It changes how you build the second one.',
  },
];

export const TIERS = [
  {
    name: 'Daily',
    note: 'I have shipped and maintained production code in these.',
    items: ['TypeScript', 'React', 'Next.js', 'Node.js', 'Express', 'PostgreSQL / Supabase', 'MongoDB', 'Tailwind', 'Git'],
    strong: ['TypeScript', 'React', 'Next.js', 'Node.js', 'PostgreSQL / Supabase'],
  },
  {
    name: 'Working knowledge',
    note: 'Used on real builds; I would want a code review on the edge cases.',
    items: ['Docker', 'GitHub Actions', 'RabbitMQ', 'Kubernetes', 'AWS (EC2, S3)', 'Firebase', 'Nginx', 'Redux Toolkit', 'WebRTC', 'Stripe / PayPal'],
    strong: [] as string[],
  },
  {
    name: 'Learning',
    note: 'In front of me right now, not on my CV as expertise.',
    items: ['Python for data analytics (IBM SkillsBuild)', 'C and algorithms (CS50)', 'Go'],
    strong: [] as string[],
  },
];

export const TIMELINE = [
  {
    date: 'Jul 2025 — Mar 2026',
    role: 'Full-Stack Developer',
    org: 'JD Marc Limited, Abuja',
    body: 'Designed and shipped the multi-department operations platform: SSO and role-based access replacing shared credentials, a realtime sync layer that took reporting from hourly batches to sub-second, and automation pipelines that removed roughly 40% of repetitive workflow steps. Held 99.9% uptime across staging and production.',
  },
  {
    date: 'Feb 2024 — Jan 2025',
    role: 'IT & Data Manager',
    org: 'Private Flyers International, Kaduna',
    body: 'Ran IT infrastructure and enterprise data systems for a private aviation firm. Tightened data integrity and security practice, and automated reporting that had been manual — cutting the time to produce it by about 30%.',
  },
  {
    date: 'Sep 2021 — Oct 2022',
    role: 'Network Service Agent',
    org: 'National Assembly of Nigeria, Abuja',
    body: 'Kept network, hardware, and communication infrastructure running across departments of a government institution — the first job where being wrong meant someone else could not work.',
  },
  {
    date: '2019 — 2023',
    role: 'B.Sc. Computer Science',
    org: 'Federal University of Lafia',
    body: 'Currently extending it with CS50 from Harvard and a data analytics certificate through IBM SkillsBuild.',
  },
];

export const COMPACT_PROJECTS = [
  {
    title: 'File storage application',
    body: 'Drag-and-drop uploads with rename, sort, and delete, backed by Firebase Storage for blobs and Firestore for metadata — with optimistic UI so the list updates before the upload finishes, and rolls back if it does not.',
    stack: 'Next.js, TypeScript, shadcn/ui, Firebase',
    links: [{ label: 'Source', href: LINKS.filesRepo }] as ProjectLink[],
  },
  {
    title: 'Animated portfolio build',
    body: 'An earlier front-end exercise in scroll choreography: GSAP timelines, Framer Motion transitions, and Lenis smooth scroll, with a contact route wired through Nodemailer and environment-scoped credentials.',
    stack: 'React, Next.js, GSAP, Framer Motion, Nodemailer',
    links: [{ label: 'Source', href: LINKS.animRepo }] as ProjectLink[],
  },
];
