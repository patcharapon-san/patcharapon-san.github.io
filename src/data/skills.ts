export type SkillCategory = "expert" | "proficient";

export interface SkillData {
  name: string;
  description: string;
  category?: SkillCategory;
  yearsLabel?: string; // e.g., "9+"
  startYear?: number; // optional dynamic alternative to yearsLabel
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
}

// Programming Languages
export const programmingLanguagesData: SkillData[] = [
  { name: "C#/.NET", yearsLabel: "9+", description: "Enterprise applications, WPF, Web API", category: "expert" },
  { name: "SQL", yearsLabel: "8+", description: "Database design, optimization, stored procedures", category: "expert" },
  { name: "HTML/CSS", yearsLabel: "7+", description: "Semantic markup, responsive design", category: "expert" },
  { name: "JavaScript/TypeScript", yearsLabel: "6+", description: "Modern web development, Node.js", category: "expert" },
  { name: "PowerShell", yearsLabel: "4+", description: "System administration, DevOps automation", category: "proficient" },
  { name: "Python", yearsLabel: "3+", description: "Automation, data processing, scripting", category: "proficient" },
  { name: "XAML", yearsLabel: "3+", description: "WPF/UWP application UI development", category: "proficient" },
  { name: "VB.NET", yearsLabel: "2+", description: "Legacy system maintenance", category: "proficient" },
];

// Frontend Technologies
export const frontendTechData: TechData[] = [
  { name: "ASP.NET Core MVC", yearsLabel: "6+", description: "Server-side rendering, Razor views" },
  { name: "React", yearsLabel: "4+", description: "Hooks, Context, SSR, Modern patterns" },
  { name: "Next.js", yearsLabel: "2+", description: "App Router, Static generation, Performance" },
  { name: "Material-UI", yearsLabel: "2+", description: "Theming, Custom components, Responsive design" },
  { name: "Chart.js", yearsLabel: "2+", description: "Interactive charts, Data visualization" },
  { name: "Three.js", yearsLabel: "2+", description: "3D web graphics and rendering" },
  { name: "Tailwind CSS", yearsLabel: "2+", description: "Utility-first, Custom design systems" },
  { name: "WPF", yearsLabel: "3+", description: "Desktop applications, MVVM, Custom controls" },
];

// Backend & Cloud Technologies
export const backendCloudTechData: TechData[] = [
  { name: "ASP.NET Web API", yearsLabel: "8+", description: "RESTful services, Authentication, Middleware" },
  { name: "Entity Framework", yearsLabel: "8+", description: "ORM, Code First, Database migrations" },
  { name: "Azure Services", yearsLabel: "4+", description: "App Services, Data Factory, Azure Functions, Storage, etc." },
  { name: "Microsoft Entra ID", yearsLabel: "3+", description: "Identity management, Authorization, SSO" },
  { name: "Azure DevOps", yearsLabel: "4+", description: "CI/CD pipelines, Repos, Boards" },
  { name: "Node.js", yearsLabel: "3+", description: "Express, RESTful APIs, Microservices" },
  { name: "AWS Lambda", yearsLabel: "2+", description: "Serverless functions, Event-driven architecture" },
  { name: "FastAPI", yearsLabel: "2+", description: "Python web framework, API development" },
  { name: "Docker", yearsLabel: "1+", description: "Containerization, Microservices deployment" },
];

// Databases
export const databasesData: TechData[] = [
  { name: "SQL Server", yearsLabel: "9+", description: "T-SQL, Stored procedures, Performance optimization" },
  { name: "MySQL", yearsLabel: "3+", description: "Database design, Replication, High availability" },
  { name: "PostgreSQL", yearsLabel: "1+", description: "Advanced queries, JSON support, Full-text search" },
  { name: "Oracle", yearsLabel: "3+", description: "Enterprise databases, PL/SQL, Data warehousing" },
];

// Industry Experience
export const industryExperienceData: IndustryData[] = [
  { name: "Oil & Gas", yearsLabel: "4+", projects: "Production systems, Regulatory compliance", iconKey: "OilBarrel" },
  { name: "Government", yearsLabel: "1+", projects: "Electronic visa systems, Public services", iconKey: "AccountBalanceOutlined" },
  { name: "Manufacturing", yearsLabel: "2+", projects: "Production tracking, Inventory management", iconKey: "Factory" },
  { name: "E-commerce", yearsLabel: "2+", projects: "Payment processing, Order management", iconKey: "WebOutlined" },
  { name: "Marketing Tech", yearsLabel: "2+", projects: "Email automation, CMS, Analytics", iconKey: "Code" },
  { name: "HR Technology", yearsLabel: "2+", projects: "Recruitment systems, Employee management", iconKey: "People" },
  { name: "Education", yearsLabel: "2+", projects: "Learning management, Student information", iconKey: "SchoolOutlined" },
];

// Key Achievements
export const keyAchievementsData: AchievementData[] = [
  { title: "Performance Optimization", description: "96% reduction in report generation time", impact: "High" },
  { title: "Microservices Architecture", description: "30+ AWS Lambda functions in production", impact: "High" },
  { title: "System Reliability", description: "99.9% uptime for critical business systems", impact: "High" },
  { title: "Process Automation", description: "80% reduction in manual processing", impact: "Medium" },
  { title: "Email Marketing Platform", description: "20,000+ daily emails processed", impact: "Medium" },
  { title: "Concurrent Processing", description: "10,000+ visa applications at peak time", impact: "High" },
];
