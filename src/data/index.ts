import type { Testimonial, Article, SkillGroup, TimelineEvent } from '@/types';

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: 'Reference contact available upon request.',
    name: 'Mr. Ibrahim Akambi',
    role: 'CEO, Private Flyers International Limited • privateflyersinternational@yahoo.com • +234 808 434 7007',
    initials: 'IA',
  },
  {
    quote: 'Reference contact available upon request.',
    name: 'Mr. Yakubu Salihu',
    role: 'CEO/MD, YaksMotos • +234 813 473 2913',
    initials: 'YS',
  },
];

export const ARTICLES: Article[] = [
  {
    title: 'Blog Microservices Platform',
    excerpt: 'Built User, Post, and Comment services behind an API Gateway with RabbitMQ event communication, Docker Compose containerization, and CI automation.',
    category: 'Microservices',
    readTime: 'Case study',
    color: 'from-blue-500 to-cyan-500',
    link: '#',
  },
  {
    title: 'Premium Cinematic Portfolio',
    excerpt: 'Engineered immersive animations and responsive layouts using GSAP, Framer Motion, and Lenis Scroll, with secure contact functionality via Nodemailer.',
    category: 'Frontend',
    readTime: 'Case study',
    color: 'from-purple-500 to-pink-500',
    link: '#',
  },
  {
    title: 'Aladdin Drive: Automotive Digital Ecosystem',
    excerpt: 'A premium automotive digital showroom built with Next.js + Tailwind + shadcn/ui, Auth.js authentication, Stripe/PayPal payments, and MongoDB-backed admin tooling.',
    category: 'Full Stack',
    readTime: 'Case study',
    color: 'from-orange-500 to-red-500',
    link: '#',
  },
];

export const SKILLS: SkillGroup[] = [
  {
    category: 'Programming Languages',
    items: ['JavaScript (ES6+)', 'TypeScript'],
  },
  {
    category: 'Frontend Technologies',
    items: [
      'React.js',
      'Next.js',
      'HTML5',
      'CSS3',
      'Tailwind CSS',
      'Vite',
      'Material UI',
      'shadcn/ui',
      'Bootstrap',
      'Framer Motion',
      'Redux Toolkit',
      'Context API',
    ],
  },
  {
    category: 'Backend Technologies',
    items: ['Node.js', 'Express.js', 'Nginx', 'RESTful APIs'],
  },
  {
    category: 'Database Management',
    items: ['MongoDB', 'NoSQL', 'PostgreSQL', 'Mongoose'],
  },
  {
    category: 'Architecture',
    items: ['Controller–Service–Repository', 'Microservices', 'MVC'],
  },
  {
    category: 'DevOps / Cloud',
    items: ['CI/CD', 'Docker', 'RabbitMQ', 'AWS EC2', 'AWS S3', 'Google Cloud', 'Firebase'],
  },
  {
    category: 'Tools',
    items: ['Postman', 'Figma', 'Git', 'VS Code', 'Android Studio', 'Xcode'],
  },
  {
    category: 'Integrations',
    items: ['Razorpay', 'Stripe', 'Nodemailer', 'Socket.io', 'WebRTC', 'S3', 'JWT'],
  },
  {
    category: 'Languages',
    items: ['English', 'Hausa', 'Ebira'],
  },
];

export const TIMELINE_DATA: TimelineEvent[] = [
  {
    year: '05/2025 – 03/2026',
    title: 'Information Communication and Technology (ICT)',
    org: 'JD Marc Limited • Abuja, Nigeria',
    description:
      'Architected and shipped a secure enterprise web app with SSO + RBAC; integrated a real-time sync layer reducing latency to sub-second; deployed AI automation pipelines removing ~40% of repetitive workflow steps; maintained 99.9% uptime via monitoring and performance tuning.',
    type: 'work',
  },
  {
    year: '02/2024 – 01/2025',
    title: 'IT & Data Manager',
    org: 'Private Flyers International Limited • Kaduna, Nigeria',
    description:
      'Managed IT infrastructure and enterprise data systems with 100% uptime across core platforms; enforced integrity/security protocols; implemented automation cutting manual reporting time by ~30%; led monitoring and troubleshooting to minimize business disruption.',
    type: 'work',
  },
  {
    year: '09/2021 – 10/2022',
    title: 'Network Service Agent',
    org: 'National Assembly of Nigeria • Abuja, Nigeria',
    description:
      'Maintained and troubleshot network, hardware, and communication infrastructure across departments to ensure uninterrupted ICT operations for a high-profile institution.',
    type: 'work',
  },
  {
    year: '2019 – 2020',
    title: 'Regulatory Compliance & Governance (Procurement)',
    org: 'National Agency for the Great Green Wall (NAGGW) • Abuja, Nigeria',
    description:
      'Executed end-to-end procurement processes in compliance with the Public Procurement Act and audit regulations; streamlined sourcing/vendor selection for ecological projects; led contract negotiations to achieve cost savings while maintaining technical and quality requirements.',
    type: 'work',
  },
  {
    year: '2019 – 2023',
    title: 'B.Sc. Computer Science',
    org: 'Federal University of Lafia • Lafia, Nigeria',
    description: 'Bachelor of Science in Computer Science.',
    type: 'education',
  },
  {
    year: '04/2026 – Present',
    title: 'Data Analytics Certificate',
    org: 'IBM SkillsBuild (University of the People)',
    description: 'Ongoing certificate program focused on practical data analytics skills.',
    type: 'education',
  },
  {
    year: '2026 – Present',
    title: 'CS50: Introduction to Computer Science',
    org: 'Harvard University',
    description:
      'Studying core computer science concepts and the art of programming through CS50 coursework.',
    type: 'education',
  },
];
