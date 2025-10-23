export type ShowcaseIconKey =
  | "BarChart"
  | "Dashboard"
  | "Assessment"
  | "ThreeDRotation"
  | "PieChart"
  | "ViewInAr"
  | "Architecture"
  | "BubbleChart";

export interface ProjectData {
  title: string;
  description: string;
  technologies: string[];
  features: string[];
  iconKey: ShowcaseIconKey;
  category: string;
}

export interface CategoryData {
  title: string;
  description: string;
  count: string;
  iconKey: ShowcaseIconKey;
  color: string;
}

export interface VisualizationTechData {
  name: string;
  description: string;
  yearsLabel?: string; // e.g., "2+"
  startYear?: number;  // dynamic alternative
}

// Chart & Visualization Projects
export const chartProjectsData: ProjectData[] = [
  {
    title: "Cumulative Production Analysis",
    description:
      "Real-time production monitoring with cumulative analysis, trend tracking, and performance optimization insights",
    technologies: [
      "Azure Data Factory",
      "Azure Function",
      "Azure Storage Account",
      "SQL Server",
      "C#",
      ".NET8",
      "Telerik",
      "Infragistics",
    ],
    features: ["Cumulative tracking", "Trend analysis", "Trend prediction", "Alert notifications"],
    iconKey: "BarChart",
    category: "Analytics",
  },
  {
    title: "User, Event, Batch and API Monitoring Dashboard",
    description:
      "Comprehensive monitoring dashboard tracking user activities, system events, batch processes, and API performance",
    technologies: [
      "React",
      "Azure App Service",
      "Azure Application Insights",
      "Azure Communication Services",
      "SQL Server",
    ],
    features: [
      "Real-time monitoring",
      "Event tracking",
      "Batch process status",
      "API performance metrics",
    ],
    iconKey: "Dashboard",
    category: "Dashboard",
  },
  {
    title: "Order Process Tracking (Dashboard & Report)",
    description:
      "End-to-end order tracking system with interactive dashboard and automated reporting for order lifecycle management",
    technologies: ["Next.js", "React", "Chart.js", "AWS Lambda", "MySQL"],
    features: ["Order lifecycle tracking", "Status dashboards", "Customize reports", "Exception handling"],
    iconKey: "Assessment",
    category: "Dashboard & Reports",
  },
  {
    title: "Customer Behavior Analysis",
    description:
      "Comprehensive customer analytics system with formal reporting, comparative analysis, and change tracking capabilities",
    technologies: ["C#", ".NET8", "Telerik", "Crystal Report"],
    features: ["Formal report", "Comparative analysis", "Progress report", "Changing record logging"],
    iconKey: "PieChart",
    category: "Analytics",
  },
];

// Backend & API Projects
export const backendProjectsData: ProjectData[] = [
  {
    title: "AWS API Service Architecture",
    description:
      "Enterprise-scale serverless architecture with 30+ Lambda functions, comprehensive monitoring, and multi-tier security across AWS cloud services",
    technologies: [
      "AWS Lambda",
      "API Gateway",
      "Aurora & RDS",
      "CloudWatch",
      "IAM",
      "S3",
      "Secrets Manager",
      "VPC",
      "Route 53",
      "Systems Manager",
      "Python",
      "FastAPI",
    ],
    features: [
      "Auto-scaling with CloudWatch",
      "Secure VPC networking",
      "Multi-database support",
      "Centralized monitoring",
      "99.9% uptime SLA",
    ],
    iconKey: "Architecture",
    category: "AWS API Architecture",
  },
  {
    title: "Azure API Service Architecture",
    description:
      "Enterprise-grade API ecosystem with Microsoft Entra ID authorization, comprehensive system integration for inbound/outbound data flows across organizational systems",
    technologies: [
      "Azure API Management",
      "Azure Functions",
      "Azure Key Vault",
      "Azure Storage",
      "Azure Application Insights",
      "Azure SQL Database",
      "Microsoft Entra ID",
    ],
    features: [
      "Microsoft Entra ID authentication",
      "Inbound/Outbound system integration",
      "API gateway management",
      "Cross-system data orchestration",
      "Comprehensive logging & monitoring",
    ],
    iconKey: "Architecture",
    category: "Azure API Architecture",
  },
  {
    title: "Electronic Visa Processing API",
    description:
      "High-performance on-premises API system processing 10,000+ visa applications concurrently with government integration, implemented per SI project requirements",
    technologies: [
      "ASP.NET Web API",
      "Windows Server",
      "SQL Server",
      "IIS",
      "Windows Services",
      "Active Directory",
    ],
    features: [
      "On-premises deployment",
      "Concurrent processing",
      "Government integration",
      "Secure authentication",
      "Real-time status tracking",
    ],
    iconKey: "Assessment",
    category: "Government API",
  },
  {
    title: "Data Processing Pipeline",
    description:
      "Automated ETL pipeline with Azure Data Factory integrating multiple enterprise systems, achieving 96% performance improvement in report generation",
    technologies: [
      "Azure Data Factory",
      "Azure Functions",
      "SQL Server",
      "Azure Storage",
      "Azure Key Vault",
    ],
    features: [
      "Multi-system integration",
      "ETL automation",
      "96% performance gain",
      "Scheduled processing",
      "Cross-platform data orchestration",
    ],
    iconKey: "ViewInAr",
    category: "Data Pipeline",
  },
];

// 3D Rendering & Visualization Projects
export const renderingProjectsData: ProjectData[] = [
  {
    title: "3D Product Configurator",
    description:
      "Interactive 3D product visualization with real-time customization and AR preview",
    technologies: ["Three.js", "React", "Next.js"],
    features: [
      "Real-time rendering",
      "Material editor",
      "Export options",
      "Convert product file to order information",
    ],
    iconKey: "ThreeDRotation",
    category: "3D Visualization",
  },
];

// Dashboard & Report Categories
export const showcaseCategoriesData: CategoryData[] = [
  {
    title: "Business Intelligence Dashboards",
    description: "Executive dashboards, KPI tracking, and business performance monitoring",
    count: "10+ Projects",
    iconKey: "Dashboard",
    color: "var(--color-primary)",
  },
  {
    title: "Backend & API Development",
    description: "Scalable APIs, microservices, and data processing systems",
    count: "300+ APIs",
    iconKey: "Architecture",
    color: "var(--color-secondary-text)",
  },
  {
    title: "Data Analytics & Charts",
    description: "Interactive charts, data visualization, and statistical analysis tools",
    count: "20+ Implementations",
    iconKey: "BubbleChart",
    color: "var(--color-success-bg)",
  },
  {
    title: "3D Visualizations",
    description: "3D rendering, product configurators, and immersive data visualization",
    count: "3D Projects",
    iconKey: "ThreeDRotation",
    color: "var(--color-warning-bg)",
  },
];

// Key Technologies Used (Visualization)
export const visualizationTechData: VisualizationTechData[] = [
  { name: "Crystal Reports", description: "Enterprise reporting solution", startYear: 2020 },
  { name: "Telerik", description: "UI components and reporting tools", startYear: 2021 },
  { name: "Infragistics", description: "Advanced UI controls and data visualization", startYear: 2021 },
  { name: "Chart.js", description: "Interactive charts and graphs", startYear: 2024 },
  { name: "Three.js", description: "3D web graphics and rendering", startYear: 2024 },
  { name: "Power BI", description: "Business intelligence dashboards", startYear: 2024 },
];
