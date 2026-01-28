export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  category: string;
  shortDescription: string;
  tags: string[];
  overview: string;
  problem: string;
  role: string;
  techStack: string[];
  keyFeatures: string[];
  challenges: {
    challenge: string;
    solution: string;
  }[];
  outcome?: string;
  results?: string;
  keyLearnings: string[];
}

export const caseStudiesConfig: CaseStudy[] = [
  {
    id: "01",
    slug: "freelance-marketplace",
    title: "Freelance Marketplace",
    category: "Platform Development",
    shortDescription: "Building a scalable MERN stack platform for freelancers with secure payment integration and real-time chat.",
    tags: ["Real-time Chat", "Role-Based Access", "Secure Payments"],
    overview: "The Freelance Marketplace is a full-stack platform designed to connect freelancers and clients through a secure, role-based ecosystem. The system supports job posting, bidding, real-time communication, and payment workflows, with scalability as a core design goal.",
    problem: "Existing freelance platforms often struggle with:\n- Poor separation of user roles\n- Delayed communication between clients and freelancers\n- Limited extensibility for payments and future features\n\nThe challenge was to design a clean, scalable architecture that supports real-time interaction while maintaining security and role isolation.",
    role: "Full-Stack Developer\n- Designed frontend architecture and UI flows\n- Built REST APIs and backend logic\n- Implemented role-based access control\n- Integrated real-time communication\n- Structured scalable database models",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Node.js", "Express", "MongoDB", "Socket.IO", "JWT Authentication"],
    keyFeatures: [
      "Real-time Chat – Instant communication using WebSockets",
      "Role-Based Access – Client, Freelancer, and Admin workflows",
      "Secure Payments – Designed payment-ready architecture",
      "Scalable APIs – Modular backend for future expansion"
    ],
    challenges: [
      {
        challenge: "Managing multiple user roles without code duplication",
        solution: "Centralized role-based middleware and shared user models"
      },
      {
        challenge: "Real-time message reliability",
        solution: "Event-based Socket.IO architecture with fallback handling"
      }
    ],
    outcome: "- Clean separation of user responsibilities\n- Improved communication efficiency\n- Scalable foundation for payments, reviews, and analytics",
    keyLearnings: [
      "Designing production-ready MERN architectures",
      "Real-time system design",
      "Secure role-based application flow"
    ]
  },
  {
    id: "02",
    slug: "marketing-crew-ai",
    title: "Marketing Crew AI",
    category: "Business Automation",
    shortDescription: "Developing a system of autonomous AI agents to handle SEO, content creation, and social media posting.",
    tags: ["AI Agents", "SEO Automation", "24/7 Operation"],
    overview: "Marketing Crew AI is an AI-driven automation system built to reduce manual marketing effort by using autonomous agents for SEO analysis, content generation, and scheduled social media publishing.",
    problem: "Marketing teams spend excessive time on:\n- Keyword research\n- Content planning and posting\n- Monitoring performance metrics\n\nThe goal was to build an always-on AI system capable of executing these tasks with minimal human intervention.",
    role: "AI Automation Engineer\n- Designed multi-agent workflow architecture\n- Implemented AI task orchestration\n- Integrated third-party APIs\n- Structured automation pipelines",
    techStack: ["LangChain", "OpenAI APIs", "Node.js / Python services", "Cloud deployment"],
    keyFeatures: [
      "AI Agents – Autonomous task execution",
      "SEO Automation – Keyword analysis and optimization",
      "Content Generation – AI-driven post creation",
      "24/7 Operation – Continuous, unattended workflows"
    ],
    challenges: [
      {
        challenge: "Coordinating multiple AI agents reliably",
        solution: "Built a dependency-aware orchestration layer"
      },
      {
        challenge: "Maintaining consistency in AI outputs",
        solution: "Structured prompt templates and validation rules"
      }
    ],
    outcome: "- Reduced manual marketing effort by ~70%\n- Enabled continuous content production\n- Scalable automation architecture for future tools",
    keyLearnings: [
      "Designing autonomous AI agent systems",
      "Prompt engineering for predictable outputs",
      "End-to-end automation pipeline design"
    ]
  },
  {
    id: "03",
    slug: "finance-insight-pro",
    title: "Finance Insight Pro",
    category: "AI/ML Solutions",
    shortDescription: "AI-powered personal finance assistant with expense prediction and smart budget recommendations.",
    tags: ["Machine Learning", "Data Visualization", "Predictive Analytics"],
    overview: "Finance Insight Pro is an AI-powered personal finance assistant designed to help users predict expenses, analyze spending behavior, and receive smart financial recommendations.",
    problem: "Many individuals lack:\n- Visibility into spending patterns\n- Predictive insights for budgeting\n- Personalized financial guidance\n\nThe goal was to build an intelligent, user-friendly finance assistant.",
    role: "AI Engineer\n- Data preprocessing pipelines\n- Machine learning model integration\n- Frontend visualization\n- API-based insights delivery",
    techStack: ["React", "Python", "Scikit-learn", "Node.js", "AWS"],
    keyFeatures: [
      "Expense categorization",
      "Predictive budgeting insights",
      "AI-driven recommendations",
      "Interactive data visualization"
    ],
    challenges: [
      {
        challenge: "Noisy financial data",
        solution: "Implemented preprocessing and normalization pipelines"
      },
      {
        challenge: "Making AI insights understandable to users",
        solution: "Converted raw predictions into human-readable recommendations"
      }
    ],
    results: "- Improved user budgeting awareness\n- Actionable financial recommendations\n- Scalable ML pipeline for future features",
    keyLearnings: [
      "Applying ML to real-world financial data",
      "Translating AI outputs into UX-friendly insights",
      "End-to-end ML system design"
    ]
  }
];

export const getCaseStudyBySlug = (slug: string): CaseStudy | undefined => {
  return caseStudiesConfig.find(study => study.slug === slug);
};

export const getAllCaseStudies = (): CaseStudy[] => {
  return caseStudiesConfig;
};
