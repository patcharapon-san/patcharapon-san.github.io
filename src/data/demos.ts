export interface DemoItem {
  title: string;
  slug: string;
  summary: string;
  technologies: string[];
  status?: "beta" | "stable" | "wip";
}

export const demos: DemoItem[] = [
  {
    title: "Monitoring Dashboard Demo",
    slug: "dashboard",
    summary: "Realtime-ish monitoring of users, events, batches and APIs with KPIs, mini charts and an activity table (mock data).",
    technologies: ["Next.js", "React", "MUI", "TypeScript"],
    status: "beta",
  },
  {
    title: "ETL Orchestration Demo",
    slug: "etl",
    summary: "Overview + process flow diagram: Azure Data Factory orchestrates data from multiple systems, Azure Functions transform, and outputs published to Storage & Azure SQL.",
    technologies: [
      "Azure Data Factory",
      "Azure Functions",
      "Azure Storage (Blob)",
      "Azure SQL Database",
      "Azure Key Vault",
      "Azure Application Insights",
      "Azure Monitor Alerts",
      "Logic Apps / Email Notifications"],
    status: "beta",
  },
];
