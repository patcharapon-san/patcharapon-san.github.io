export const etlCaseStudy = {
  projectName: "Enterprise ETL Orchestration (Azure)",
  objective:
    "Consolidate data from multiple operational and analytics systems into a clean, analytics-ready store with predictable SLAs, proactive alerting, and comprehensive traceability—while minimizing manual intervention.",
  description:
    "Built an Azure-native ETL pipeline orchestrated by Data Factory that ingests from several upstream domains (e.g., operational telemetry, asset performance metrics, event history, modeling outputs, and curated lake zones). Azure Functions perform conditional transformations aligned to each source's readiness window. Standardized data is published to Azure Storage and Azure SQL for downstream BI and applications. Email alerts and structured activity logs provide end-to-end visibility and root-cause analysis without exposing client-specific systems or industries.",
  technologies: [
    "Azure Data Factory",
    "Azure Functions",
    "Azure Storage (Blob)",
    "Azure SQL Database",
    "Azure Key Vault",
    "Azure Application Insights",
    "Azure Monitor Alerts",
    "Logic Apps / Email Notifications",
  ],
  challenges: [
    "Data from each upstream becomes available at different times and with varying quality",
    "Transient API errors and throttling from certain sources",
    "Schema drift and optional fields that vary per domain",
    "Need proactive notifications and granular logging that pinpoint the failing stage and upstream source",
    "SLA pressure to publish a consolidated dataset before business hours",
  ],
  solution:
    "Implemented dependency-aware ADF pipelines that trigger only when required sources are marked 'ready'. Each ingestion step lands raw data into controlled zones; Azure Functions execute validation, enrichment, and normalization with correlation IDs propagated across stages. Telemetry is captured via Application Insights with structured, queryable logs in Log Analytics. Azure Monitor Alerts route to email (via Logic Apps) with rich context—pipeline, stage, source, error class, and runbook links—making it easy to distinguish upstream data issues from internal processing errors. Secrets are managed via Key Vault; publishing targets include curated Blob containers and SQL tables.",
  results: [
    "Reduced manual reconciliation by ~80%",
    "Improved on-time availability of the consolidated dataset to 99.5%",
    "Significantly faster incident response (lower MTTD/MTTR) due to proactive alerts and diagnostic breadcrumbs",
    "Clear observability with run metrics, error traces, dependency timelines, and audit-ready activity logs",
    "Lowered processing costs via batching and event-driven triggers",
  ],
  feedback:
    "Stakeholders reported faster report availability, fewer escalations, and higher confidence thanks to timely email alerts and traceable logs; operations praised the ability to identify exactly which stage and source caused issues without revealing client-specific systems or industries.",
} as const;
