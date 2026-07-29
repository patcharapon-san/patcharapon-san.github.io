export type SkillCategory = "expert" | "proficient";

export interface SkillData {
  name: string;
  description: string;
  category?: SkillCategory;
  // Prefer startYear for anything still in active use: it recomputes every year.
  // Keep yearsLabel only for legacy/project-bound tech used in bursts rather than
  // continuously, where "started in year X" would overstate the gap since.
  yearsLabel?: string; // e.g., "9+"
  startYear?: number; // the year this tech was first used; rendered via fmtYears()
}

export interface TechData {
  name: string;
  description: string;
  yearsLabel?: string;
  startYear?: number;
}

export type IndustryIconKey =
  | "OilBarrel"
  | "AccountBalanceOutlined"
  | "Factory"
  | "WebOutlined"
  | "Code"
  | "People"
  | "SchoolOutlined";

export interface IndustryData {
  name: string;
  projects: string;
  iconKey: IndustryIconKey;
  yearsLabel?: string;
  startYear?: number;
}

export interface AchievementData {
  title: string;
  description: string;
  impact: "High" | "Medium" | "Low";
  // Slug of a demo that lets a reader verify the claim instead of taking it on trust
  demoSlug?: string;
}

// Programming Languages
export const programmingLanguagesData: SkillData[] = [
  { name: "C#/.NET", startYear: 2017, description: "Enterprise applications, WPF, Web API", category: "expert" },
  { name: "SQL", startYear: 2018, description: "Database design, optimization, stored procedures", category: "expert" },
  { name: "HTML/CSS", startYear: 2019, description: "Semantic markup, responsive design", category: "expert" },
  { name: "JavaScript/TypeScript", startYear: 2020, description: "Modern web development, Node.js", category: "expert" },
  { name: "PowerShell", startYear: 2022, description: "System administration, DevOps automation", category: "proficient" },
  { name: "Python", startYear: 2023, description: "Automation, data processing, scripting", category: "proficient" },
  { name: "XAML", startYear: 2023, description: "WPF/UWP application UI development", category: "proficient" },
  { name: "PHP", startYear: 2025, description: "Laravel framework, E-commerce applications", category: "proficient" },
  { name: "VB.NET", yearsLabel: "2+", description: "Legacy system maintenance", category: "proficient" },
];

// Frontend Technologies
export const frontendTechData: TechData[] = [
  { name: "ASP.NET Core MVC", startYear: 2020, description: "Server-side rendering, Razor views" },
  { name: "React", startYear: 2022, description: "Hooks, Context, SSR, Modern patterns" },
  { name: "Next.js", startYear: 2024, description: "App Router, Static generation, Performance" },
  { name: "Material-UI", startYear: 2024, description: "Theming, Custom components, Responsive design" },
  { name: "Chart.js", startYear: 2024, description: "Interactive charts, Data visualization" },
  { name: "Three.js", yearsLabel: "2+", description: "3D web graphics and rendering" },
  { name: "Tailwind CSS", startYear: 2024, description: "Utility-first, Custom design systems" },
  { name: "WPF", startYear: 2023, description: "Desktop applications, MVVM, Custom controls" },
];

// Backend & Cloud Technologies
export const backendCloudTechData: TechData[] = [
  { name: "ASP.NET Web API", startYear: 2018, description: "RESTful services, Authentication, Middleware" },
  { name: "Entity Framework", startYear: 2018, description: "ORM, Code First, Database migrations" },
  { name: "Azure Services", startYear: 2022, description: "App Services, Data Factory, Azure Functions, Storage, etc." },
  { name: "Microsoft Entra ID", startYear: 2023, description: "Identity management, Authorization, SSO" },
  { name: "Azure DevOps", startYear: 2022, description: "CI/CD pipelines, Repos, Boards" },
  { name: "Node.js", startYear: 2023, description: "Express, RESTful APIs, Microservices" },
  { name: "AWS Lambda", startYear: 2024, description: "Serverless functions, Event-driven architecture" },
  { name: "FastAPI", startYear: 2024, description: "Python web framework, API development" },
  { name: "Laravel", startYear: 2025, description: "PHP framework, MVC architecture, E-commerce platforms" },
  { name: "Docker", startYear: 2025, description: "Containerization, Microservices deployment" },
];

// AI & Developer Tooling
export const aiToolingData: TechData[] = [
  { name: "GitHub Copilot", startYear: 2024, description: "Inline completion, Chat-assisted refactoring" },
  { name: "Claude Code", startYear: 2025, description: "Agentic coding, Codebase-wide changes, Automated review" },
  { name: "Multi-Agent Workflows", startYear: 2025, description: "Parallel agents, Task delegation, Orchestrated delivery" },
  { name: "Prompt & Context Engineering", startYear: 2024, description: "Reusable instructions, Project context design, Output steering" },
  { name: "Model Context Protocol (MCP)", startYear: 2025, description: "Tool integration, Custom servers, Connecting agents to systems" },
];

// Databases
export const databasesData: TechData[] = [
  { name: "SQL Server", startYear: 2017, description: "T-SQL, Stored procedures, Performance optimization" },
  { name: "MySQL", startYear: 2023, description: "Database design, Replication, High availability" },
  { name: "PostgreSQL", startYear: 2025, description: "Advanced queries, JSON support, Full-text search" },
  { name: "Oracle", yearsLabel: "3+", description: "Enterprise databases, PL/SQL, Data warehousing" },
];

// Industry Experience
export const industryExperienceData: IndustryData[] = [
  { name: "Oil & Gas", yearsLabel: "4+", projects: "Production systems, Regulatory compliance", iconKey: "OilBarrel" },
  { name: "Government", yearsLabel: "1+", projects: "Electronic visa systems, Public services", iconKey: "AccountBalanceOutlined" },
  { name: "Manufacturing", yearsLabel: "2+", projects: "Production tracking, Inventory management", iconKey: "Factory" },
  { name: "E-commerce", yearsLabel: "2+", projects: "Payment processing, Order management, Facebook API integration (messages & posts), Role-based analytics for comment-to-order conversion", iconKey: "WebOutlined" },
  { name: "Marketing Tech", yearsLabel: "2+", projects: "Email automation, CMS, Analytics", iconKey: "Code" },
  { name: "HR Technology", yearsLabel: "2+", projects: "Recruitment systems, Employee management", iconKey: "People" },
  { name: "Education", yearsLabel: "2+", projects: "Learning management, Student information", iconKey: "SchoolOutlined" },
];

// Key Achievements
export const keyAchievementsData: AchievementData[] = [
  { title: "Performance Optimization", description: "96% reduction in report generation time", impact: "High" },
  { title: "Microservices Architecture", description: "30+ AWS Lambda functions in production", impact: "High" },
  { title: "System Reliability", description: "99.9% uptime for critical business systems", impact: "High" },
  { title: "Process Automation", description: "80% reduction in manual processing", impact: "Medium", demoSlug: "etl" },
  { title: "Email Marketing Platform", description: "20,000+ daily emails processed", impact: "Medium" },
  { title: "Concurrent Processing", description: "10,000+ visa applications at peak time", impact: "High" },
  { title: "Technical Leadership", description: "Technical direction, code review, and developer mentoring as team lead", impact: "High" },
  { title: "AI-Augmented Delivery", description: "Agentic and multi-agent workflows adopted in day-to-day development", impact: "High", demoSlug: "agentic" },
];
