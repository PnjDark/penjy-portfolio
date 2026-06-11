export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  problem: string;
  solution: string;
  technologies: string[];
  impact?: string;
  image?: string;
  link?: string;
  github?: string;
  featured: boolean;
}

export interface Skill {
  category: string;
  skills: string[];
}

export interface Experience {
  id: string;
  company: string;
  title: string;
  period: string;
  description: string;
  highlights: string[];
}

export interface Article {
  id: string;
  title: string;
  description: string;
  date: string;
  category: string;
  readTime: number;
  link?: string;
}

export const projects: Project[] = [
  {
    id: "civipass",
    title: "CIVIPASS",
    description: "Civic participation platform enabling streamlined government interaction",
    longDescription:
      "CIVIPASS is a comprehensive platform designed to modernize and simplify how citizens interact with government services. The platform provides integrated access to civic services, real-time notifications, and personalized dashboards.",
    problem:
      "Citizens face fragmented experiences when interacting with multiple government agencies, leading to confusion, delays, and incomplete service delivery.",
    solution:
      "Built a unified platform with microservices architecture, providing a seamless single-window access to government services with real-time status tracking and intelligent routing.",
    technologies: [
      "Node.js",
      "PostgreSQL",
      "React",
      "Docker",
      "Kubernetes",
      "Redis",
    ],
    impact: "Reduced service delivery time by 60%, improved citizen satisfaction by 45%",
    featured: true,
  },
  {
    id: "sky",
    title: "Sky",
    description: "Cloud infrastructure monitoring and optimization platform",
    longDescription:
      "Sky is a DevOps-focused platform for real-time cloud infrastructure monitoring, cost optimization, and automated scaling.",
    problem:
      "Teams struggle to monitor multi-cloud infrastructure, optimize costs, and maintain compliance across distributed systems.",
    solution:
      "Developed a unified monitoring layer with AI-powered cost recommendations, automated scaling policies, and compliance tracking across AWS, GCP, and Azure.",
    technologies: [
      "TypeScript",
      "Next.js",
      "Golang",
      "Prometheus",
      "Grafana",
      "Terraform",
    ],
    impact: "Reduced cloud costs by 35% for enterprise clients, enabled 99.99% uptime",
    featured: true,
  },
  {
    id: "infinite-towers",
    title: "InfiniteTowersOnline",
    description: "Multiplayer tower defense game with real-time networking",
    longDescription:
      "InfiniteTowersOnline is a real-time multiplayer tower defense game featuring procedurally generated maps, dynamic difficulty scaling, and social features.",
    problem:
      "Existing tower defense games lack true multiplayer experiences with fair matchmaking and engaging progression systems.",
    solution:
      "Built a full-stack game with WebSocket-based real-time sync, procedural map generation, and sophisticated matchmaking algorithms.",
    technologies: [
      "WebGL",
      "Node.js",
      "WebSockets",
      "MongoDB",
      "Redis",
      "TypeScript",
    ],
    impact: "10K+ active players, 98% session completion rate",
    featured: true,
  },
];

export const skills: Skill[] = [
  {
    category: "Software Engineering",
    skills: [
      "System Design",
      "Microservices",
      "Design Patterns",
      "Clean Code",
      "Testing",
      "Performance Optimization",
    ],
  },
  {
    category: "Frontend Development",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Performance & SEO",
    ],
  },
  {
    category: "Backend Development",
    skills: [
      "Node.js",
      "Golang",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "GraphQL",
      "REST APIs",
    ],
  },
  {
    category: "DevOps & Infrastructure",
    skills: [
      "Kubernetes",
      "Docker",
      "Terraform",
      "CI/CD",
      "AWS",
      "GCP",
      "Monitoring & Observability",
    ],
  },
  {
    category: "AI & Productivity",
    skills: [
      "LLM Integration",
      "Prompt Engineering",
      "AI Automation",
      "Data Processing",
      "Analytics",
    ],
  },
];

export const experience: Experience[] = [
  {
    id: "current",
    company: "TechCorp",
    title: "Senior Software Engineer",
    period: "2022 - Present",
    description:
      "Leading full-stack development of cloud-native infrastructure platform serving enterprise clients.",
    highlights: [
      "Architected microservices infrastructure reducing latency by 65%",
      "Led team of 5 engineers through two major product launches",
      "Implemented CI/CD pipeline reducing deployment time from 2 hours to 15 minutes",
      "Mentored junior engineers on best practices in system design and DevOps",
    ],
  },
  {
    id: "previous1",
    company: "Digital Innovations Inc",
    title: "Full Stack Engineer",
    period: "2020 - 2022",
    description: "Built and maintained customer-facing applications and backend services.",
    highlights: [
      "Developed React-based dashboards handling 1M+ concurrent users",
      "Designed and implemented payment processing system using Stripe integration",
      "Optimized database queries improving application performance by 40%",
      "Established code quality standards and introduced automated testing",
    ],
  },
  {
    id: "previous2",
    company: "StartupXYZ",
    title: "Junior Developer",
    period: "2019 - 2020",
    description: "Contributed to full-stack web application development in a fast-paced startup environment.",
    highlights: [
      "Built RESTful APIs using Node.js and Express",
      "Created responsive frontend components with React",
      "Participated in code reviews and sprint planning",
      "Learned agile development practices and cross-functional collaboration",
    ],
  },
];

export const articles: Article[] = [
  {
    id: "k8s-best-practices",
    title: "Kubernetes Best Practices for Production",
    description:
      "Essential patterns and practices for running Kubernetes in production environments.",
    date: "2024-03-15",
    category: "DevOps",
    readTime: 12,
  },
  {
    id: "react-performance",
    title: "Optimizing React Applications for Performance",
    description:
      "Advanced techniques for improving React app performance and reducing bundle size.",
    date: "2024-03-08",
    category: "Frontend",
    readTime: 8,
  },
  {
    id: "microservices-patterns",
    title: "Microservices Communication Patterns",
    description:
      "Comparing synchronous, asynchronous, and event-driven communication in microservices.",
    date: "2024-02-28",
    category: "Architecture",
    readTime: 15,
  },
  {
    id: "devops-automation",
    title: "Automating Infrastructure with Terraform",
    description:
      "Infrastructure as Code best practices using Terraform for multi-cloud deployments.",
    date: "2024-02-20",
    category: "DevOps",
    readTime: 10,
  },
];
