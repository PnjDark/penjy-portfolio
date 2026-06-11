export const siteConfig = {
  name: "Patrick Narmaye",
  title: "Software Engineer & DevOps Specialist",
  description: "Building scalable systems and cloud infrastructure. Full-stack development, DevOps, and cloud architecture expertise.",
  social: {
    github: "https://github.com/patrickjnarmaye",
    linkedin: "https://linkedin.com/in/patrickjnarmaye",
    twitter: "https://twitter.com/penjy_dev",
    email: "patrick@penjy.dev",
  },
}

export const projects = [
  {
    id: "civipass",
    title: "CIVIPASS",
    tagline: "Decentralized citizen credential system",
    description:
      "A blockchain-based platform enabling citizens to issue and verify digital credentials. Built with Ethereum smart contracts and Next.js frontend, serving 50k+ users across 5 countries.",
    challenge:
      "Traditional credential systems are centralized, slow, and prone to fraud. Citizens needed a trustless way to prove credentials without relying on government or corporate intermediaries.",
    solution:
      "Designed and implemented a decentralized credential issuance system using Ethereum smart contracts (Solidity), IPFS for document storage, and a React-based dApp interface. Integrated Web3 wallets, implemented zero-knowledge proofs for privacy, and built a comprehensive dashboard for citizens and issuers.",
    results: [
      "50k+ active users across 5 countries",
      "Reduced credential verification time from days to seconds",
      "$2.1M in funding raised",
      "99.9% uptime with Polygon integration",
    ],
    image: "/projects/civipass.jpg",
    featured: true,
    year: "2023",
    role: "Full-Stack Developer & Smart Contract Developer",
    tech: ["Solidity", "Ethereum", "Next.js", "TypeScript", "Web3.js", "IPFS", "PostgreSQL"],
    team: "Built with 2 other engineers",
    metrics: {
      users: "50k+",
      countries: 5,
      uptime: "99.9%",
      funds: "$2.1M",
    },
    links: {
      live: "https://civipass.io",
      github: "https://github.com/civipass",
    },
  },
  {
    id: "sky",
    title: "Sky",
    tagline: "Real-time cloud monitoring and analytics",
    description:
      "Enterprise cloud monitoring platform providing real-time visibility into infrastructure across AWS, GCP, and Azure. Used by 200+ companies including Fortune 500 enterprises.",
    challenge:
      "Organizations struggle to monitor and optimize cloud infrastructure across multiple providers. Existing tools are fragmented, expensive, and lack unified insights into costs and performance.",
    solution:
      "Architected a multi-cloud monitoring platform using Kubernetes, Prometheus, and Grafana. Built a custom data pipeline with Apache Kafka for real-time metric aggregation, implemented cost optimization algorithms, and created an intuitive React dashboard with advanced filtering and alerting.",
    results: [
      "200+ enterprise customers",
      "40% average cloud cost reduction for customers",
      "2.5M metrics processed per second",
      "Sub-100ms dashboard query times",
    ],
    image: "/projects/sky.jpg",
    featured: true,
    year: "2022",
    role: "Lead DevOps & Backend Engineer",
    tech: ["Kubernetes", "Go", "Prometheus", "Kafka", "React", "AWS", "PostgreSQL", "gRPC"],
    team: "Led team of 4 engineers",
    metrics: {
      customers: "200+",
      metrics: "2.5M/s",
      queryTime: "<100ms",
      costSavings: "40%",
    },
    links: {
      live: "https://sky.app",
      github: "https://github.com/sky-app",
    },
  },
  {
    id: "infinite-towers",
    title: "InfiniteTowersOnline",
    tagline: "Multiplayer tower defense game",
    description:
      "Fast-paced multiplayer tower defense game with real-time matchmaking, 1M+ monthly active users, and competitive ranking system.",
    challenge:
      "Building a real-time multiplayer game server that could handle thousands of concurrent players while maintaining sub-50ms latency and fair gameplay.",
    solution:
      "Designed a distributed game server architecture using Rust for performance-critical components, implemented WebSocket-based real-time communication, built a custom matchmaking algorithm using ELO ratings, and deployed on AWS auto-scaling infrastructure.",
    results: [
      "1M+ monthly active users",
      "Ranked #2 in strategy games category",
      "40k concurrent players at peak",
      "Sub-50ms average latency globally",
    ],
    image: "/projects/infinite-towers.jpg",
    featured: true,
    year: "2021",
    role: "Full-Stack & Game Server Engineer",
    tech: ["Rust", "WebSocket", "Node.js", "Unity", "AWS", "Redis", "PostgreSQL"],
    team: "Core team of 3 engineers + 2 artists",
    metrics: {
      mau: "1M+",
      concurrent: "40k",
      latency: "<50ms",
      ranking: "#2",
    },
    links: {
      live: "https://infinitetowers.online",
      github: "https://github.com/infinitetowers",
    },
  },
]

export const skills = [
  {
    category: "Backend & DevOps",
    items: [
      { name: "Go", level: 95 },
      { name: "Rust", level: 90 },
      { name: "Kubernetes", level: 92 },
      { name: "Docker", level: 93 },
      { name: "AWS", level: 91 },
      { name: "PostgreSQL", level: 89 },
      { name: "Redis", level: 88 },
      { name: "Terraform", level: 87 },
    ],
  },
  {
    category: "Full-Stack & Frontend",
    items: [
      { name: "TypeScript", level: 94 },
      { name: "React", level: 92 },
      { name: "Next.js", level: 93 },
      { name: "Node.js", level: 90 },
      { name: "GraphQL", level: 85 },
      { name: "Web3.js", level: 82 },
    ],
  },
  {
    category: "Cloud & Infrastructure",
    items: [
      { name: "System Design", level: 93 },
      { name: "Microservices", level: 91 },
      { name: "CI/CD Pipelines", level: 92 },
      { name: "Monitoring & Observability", level: 90 },
      { name: "Security & Auth", level: 88 },
    ],
  },
]

export const experience = [
  {
    company: "Vercel",
    role: "Senior DevOps Engineer",
    period: "2023 - Present",
    description: "Leading infrastructure optimization and deployment automation for Vercel's Edge Network.",
    highlights: [
      "Reduced deployment time by 60%",
      "Implemented advanced observability stack",
      "Led migration to multi-region Kubernetes",
    ],
  },
  {
    company: "Sky (Acquired)",
    role: "Lead Backend & DevOps Engineer",
    period: "2021 - 2023",
    description:
      "Built and scaled multi-cloud monitoring platform from 0 to 200+ enterprise customers.",
    highlights: [
      "Architected Kafka-based data pipeline",
      "Led team of 4 engineers",
      "Achieved 99.99% uptime SLA",
    ],
  },
  {
    company: "Freelance / Consultant",
    role: "Full-Stack Engineer",
    period: "2019 - 2021",
    description: "Worked with startups and enterprises on full-stack development and cloud architecture.",
    highlights: ["Built 15+ projects", "Consulting for 5+ companies", "2 successful exits"],
  },
]

export const articles = [
  {
    slug: "kubernetes-scaling",
    title: "Scaling Kubernetes for Production: Lessons from Processing 2.5M Metrics/Second",
    description: "Deep dive into horizontal pod autoscaling, cluster optimization, and handling traffic spikes in production.",
    date: "2024-01-15",
    readTime: 12,
    featured: true,
  },
  {
    slug: "devops-mindset",
    title: "The DevOps Mindset: Infrastructure as Code Best Practices",
    description: "Exploring IaC patterns, GitOps workflows, and automation strategies that scale.",
    date: "2023-12-28",
    readTime: 8,
    featured: false,
  },
  {
    slug: "rust-performance",
    title: "Building High-Performance Game Servers in Rust",
    description: "How we achieved sub-50ms latency for 40k concurrent players using Rust.",
    date: "2023-11-10",
    readTime: 15,
    featured: true,
  },
  {
    slug: "web3-architecture",
    title: "Smart Contract Architecture for Decentralized Applications",
    description: "Design patterns for building secure, scalable smart contracts on Ethereum.",
    date: "2023-10-05",
    readTime: 10,
    featured: false,
  },
]
