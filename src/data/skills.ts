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
  // Slug of a demo that lets a reader verify the claim instead of taking it on trust
  demoSlug?: string;
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
  { name: "PHP", startYear: 2025, description: "Laravel framework, E-commerce applications", category: "proficient" },
  { name: "VB.NET", yearsLabel: "2+", description: "Legacy system maintenance", category: "proficient" },
];

// Frontend Technologies
export const frontendTechData: TechData[] = [
  { name: "ASP.NET Core MVC", yearsLabel: "6+", description: "Server-side rendering, Razor views" },
  { name: "React", yearsLabel: "4+", description: "Hooks, Context, SSR, Modern patterns" },
  { name: "Next.js", yearsLabel: "2+", description: "App Router, Static generation, Performance" },
  { name: "Material-UI", yearsLabel: "2+", description: "Theming, Custom components, Responsive design" },
  { name: "Chart.js", yearsLabel: "2+", description: "Interactive charts, Data visualization" },
  { name: "Web Analytics & Tracking", yearsLabel: "2+", description: "Google Tag Manager, GA4, Meta Pixel, UTM attribution, Event & conversion tracking" },
  { name: "Three.js", yearsLabel: "2+", description: "3D web graphics and rendering" },
  { name: "Tailwind CSS", yearsLabel: "2+", description: "Utility-first, Custom design systems" },
  { name: "WPF", yearsLabel: "3+", description: "Desktop applications, MVVM, Custom controls" },
];

// Backend & Cloud Technologies
export const backendCloudTechData: TechData[] = [
  { name: "ASP.NET Web API", yearsLabel: "8+", description: "RESTful services, Authentication, Middleware (.NET 10)" },
  { name: "Entity Framework", yearsLabel: "8+", description: "EF Core 10, ORM, Code First, Dual-tracked migrations" },
  { name: "Auth & Security", yearsLabel: "4+", description: "JWT, Refresh-token rotation, RBAC policies, PBKDF2 hashing" },
  { name: "Azure Services", yearsLabel: "4+", description: "App Services, Data Factory, Azure Functions, Storage, etc." },
  { name: "Microsoft Entra ID", yearsLabel: "3+", description: "Identity management, Authorization, SSO" },
  { name: "Node.js", yearsLabel: "3+", description: "Express, RESTful APIs, Microservices" },
  { name: ".NET Worker Services", yearsLabel: "2+", description: "Background jobs, Hosted services, Scheduled sync workers" },
  { name: "AWS Lambda", yearsLabel: "2+", description: "Serverless functions, Event-driven architecture" },
  { name: "FastAPI", yearsLabel: "2+", description: "Python web framework, API development" },
  { name: "Social Media APIs", yearsLabel: "2+", description: "Facebook Graph API — login, messaging, posts, page management" },
  { name: "Laravel", startYear: 2025, description: "PHP framework, MVC architecture, E-commerce platforms" },
  { name: "Redis", yearsLabel: "1+", description: "Distributed caching (IDistributedCache), cache invalidation" },
  { name: "Docker", yearsLabel: "1+", description: "Containerization, Docker Compose, Multi-service orchestration" },
];

// DevOps & CI/CD
export const devOpsData: TechData[] = [
  { name: "Azure DevOps", yearsLabel: "4+", description: "CI/CD pipelines, Repos, Boards" },
  { name: "GitHub Actions", yearsLabel: "2+", description: "CI/CD workflows, Automated test & static-site deployment" },
  { name: "GitLab CI/CD", yearsLabel: "2+", description: "Pipelines, Runners, Test & deploy automation" },
  { name: "DigitalOcean", yearsLabel: "2+", description: "Droplet provisioning, Server deployment & management" },
  { name: "Vercel", yearsLabel: "2+", description: "Next.js hosting, Preview deployments, Edge network" },
  { name: "Cloudflare", yearsLabel: "2+", description: "DNS, CDN, Pages, Edge caching" },
];

// AI-Assisted Development
export const aiToolsData: TechData[] = [
  { name: "Prompt Engineering", yearsLabel: "2+", description: "Structured prompting, prompt chaining, reproducible workflows" },
  { name: "GitHub Copilot", yearsLabel: "2+", description: "In-editor AI pair programming, code completion" },
  { name: "AI Agents", yearsLabel: "1+", description: "Designing and building custom agents for development tasks" },
  { name: "Claude Code", yearsLabel: "1+", description: "Agentic coding, custom Skill.md authoring, CLI-driven workflows" },
  { name: "Multi-Agent Systems", yearsLabel: "1+", description: "Orchestrating multiple agents to implement & maintain full systems" },
];

// Databases
export const databasesData: TechData[] = [
  { name: "SQL Server", yearsLabel: "9+", description: "T-SQL, Stored procedures, Performance optimization" },
  { name: "MySQL", yearsLabel: "3+", description: "Database design, Replication, High availability" },
  { name: "PostgreSQL", yearsLabel: "2+", description: "Npgsql, Advanced queries, JSON support, Soft-delete patterns" },
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
  { title: "Framework Modernization", description: ".NET Framework 4.8 → .NET 8 production migration", impact: "High" },
  { title: "Legacy Data Migration", description: "Migrated MS Access system to PostgreSQL", impact: "Medium" },
  { title: "Technical Leadership", description: "Technical direction, code review, and developer mentoring as team lead", impact: "High" },
  { title: "AI-Augmented Delivery", description: "Agentic and multi-agent workflows adopted in day-to-day development", impact: "High", demoSlug: "agentic" },
];
