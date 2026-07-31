export interface DemoItem {
  title: string;
  slug: string;
  summary: string;
  technologies: string[];
  status?: "beta" | "stable" | "wip";
}

export const demos: DemoItem[] = [
  {
    title: "Social Commerce Funnel Demo",
    slug: "ecommerce",
    summary: "Replay a trading day where post comments convert into orders, then switch between Owner, Marketing, Warehouse, and Support to see the same data scoped by role - including the 24h messaging window that decides which leads are still reachable.",
    technologies: ["Facebook Graph API", "Laravel", ".NET", "Next.js", "TypeScript", "RBAC"],
    status: "beta",
  },
  {
    title: "Agentic Workflow Demo",
    slug: "agentic",
    summary: "Step through a task moving across a multi-agent pipeline - planner, parallel workers, review gate - including the rejection and retry loop (scripted simulation).",
    technologies: ["Next.js", "React", "TypeScript", "SVG", "MUI"],
    status: "beta",
  },
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
    summary: "Replay one overnight Azure Data Factory run end to end - a late upstream source, an alert to on-call, a transform that fails on a 429 and recovers on retry, and the dataset still published ahead of SLA.",
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
