export type EtlNodeId =
  | "src-ops"
  | "src-asset"
  | "src-event"
  | "src-model"
  | "src-lake"
  | "adf"
  | "func"
  | "blob"
  | "sql"
  | "keyvault"
  | "insights"
  | "alerts";

export type EtlNodeState = "pending" | "running" | "done" | "late" | "failed" | "retrying";
export type EtlLogLevel = "info" | "warn" | "error" | "success";
export type SlaStatus = "on-track" | "at-risk" | "met";

export const etlSources: { id: EtlNodeId; label: string }[] = [
  { id: "src-ops", label: "Ops Telemetry" },
  { id: "src-asset", label: "Asset Metrics" },
  { id: "src-event", label: "Event History" },
  { id: "src-model", label: "Model Outputs" },
  { id: "src-lake", label: "Curated Lake" },
];

export interface EtlRunStep {
  clock: string;
  states: Partial<Record<EtlNodeId, EtlNodeState>>;
  log: { level: EtlLogLevel; message: string };
  rows: number;
  retries: number;
  alerts: number;
  sla: SlaStatus;
}

export const SLA_DEADLINE = "06:00";
export const CORRELATION_ID = "run-2f9a41";

// A single overnight run. Two things are deliberate: an upstream source misses its
// readiness window (proving the alerting path), and the transform stage hits a
// transient 429 that recovers on retry (proving the pipeline is not brittle).
// Both resolve inside the SLA, which is the point the case study makes.
export const etlRunScript: EtlRunStep[] = [
  {
    clock: "02:00",
    states: {},
    log: { level: "info", message: `Scheduler armed - consolidated dataset due by ${SLA_DEADLINE}` },
    rows: 0,
    retries: 0,
    alerts: 0,
    sla: "on-track",
  },
  {
    clock: "02:12",
    states: { "src-ops": "done" },
    log: { level: "info", message: "Ops Telemetry marked ready - 1.2M rows staged" },
    rows: 1_200_000,
    retries: 0,
    alerts: 0,
    sla: "on-track",
  },
  {
    clock: "02:31",
    states: { "src-ops": "done", "src-asset": "done" },
    log: { level: "info", message: "Asset Metrics marked ready - 486K rows staged" },
    rows: 1_686_000,
    retries: 0,
    alerts: 0,
    sla: "on-track",
  },
  {
    clock: "02:54",
    states: { "src-ops": "done", "src-asset": "done", "src-event": "done" },
    log: { level: "info", message: "Event History marked ready - 2.1M rows staged" },
    rows: 3_786_000,
    retries: 0,
    alerts: 0,
    sla: "on-track",
  },
  {
    clock: "03:20",
    states: { "src-ops": "done", "src-asset": "done", "src-event": "done", "src-model": "late" },
    log: { level: "warn", message: "Model Outputs past its readiness window - pipeline dependency unmet" },
    rows: 3_786_000,
    retries: 0,
    alerts: 0,
    sla: "at-risk",
  },
  {
    clock: "03:20",
    states: { "src-ops": "done", "src-asset": "done", "src-event": "done", "src-model": "late", alerts: "running", insights: "done" },
    log: { level: "error", message: `Alert routed to on-call - upstream Model Outputs late (${CORRELATION_ID})` },
    rows: 3_786_000,
    retries: 0,
    alerts: 1,
    sla: "at-risk",
  },
  {
    clock: "03:38",
    states: { "src-ops": "done", "src-asset": "done", "src-event": "done", "src-model": "late", "src-lake": "done", alerts: "done", insights: "done" },
    log: { level: "info", message: "Curated Lake marked ready - 940K rows staged" },
    rows: 4_726_000,
    retries: 0,
    alerts: 1,
    sla: "at-risk",
  },
  {
    clock: "04:02",
    states: { "src-ops": "done", "src-asset": "done", "src-event": "done", "src-model": "done", "src-lake": "done", alerts: "done", insights: "done" },
    log: { level: "success", message: "Model Outputs arrived - all dependencies satisfied" },
    rows: 4_726_000,
    retries: 0,
    alerts: 1,
    sla: "on-track",
  },
  {
    clock: "04:03",
    states: { "src-ops": "done", "src-asset": "done", "src-event": "done", "src-model": "done", "src-lake": "done", adf: "running", keyvault: "done", insights: "done", alerts: "done" },
    log: { level: "info", message: "Data Factory triggered - dependency-aware pipeline start" },
    rows: 4_726_000,
    retries: 0,
    alerts: 1,
    sla: "on-track",
  },
  {
    clock: "04:11",
    states: { "src-ops": "done", "src-asset": "done", "src-event": "done", "src-model": "done", "src-lake": "done", adf: "done", func: "running", keyvault: "done", insights: "done", alerts: "done" },
    log: { level: "info", message: `Functions transforming - correlation ID ${CORRELATION_ID} propagated across stages` },
    rows: 4_726_000,
    retries: 0,
    alerts: 1,
    sla: "on-track",
  },
  {
    clock: "04:26",
    states: { "src-ops": "done", "src-asset": "done", "src-event": "done", "src-model": "done", "src-lake": "done", adf: "done", func: "failed", keyvault: "done", insights: "done", alerts: "running" },
    log: { level: "error", message: "Transient throttling from Asset Metrics API (HTTP 429) - transform stage failed" },
    rows: 4_726_000,
    retries: 0,
    alerts: 2,
    sla: "at-risk",
  },
  {
    clock: "04:27",
    states: { "src-ops": "done", "src-asset": "done", "src-event": "done", "src-model": "done", "src-lake": "done", adf: "done", func: "retrying", keyvault: "done", insights: "done", alerts: "done" },
    log: { level: "warn", message: "Retry 1 of 3 with exponential backoff - failing stage only, not the whole run" },
    rows: 4_726_000,
    retries: 1,
    alerts: 2,
    sla: "at-risk",
  },
  {
    clock: "04:39",
    states: { "src-ops": "done", "src-asset": "done", "src-event": "done", "src-model": "done", "src-lake": "done", adf: "done", func: "done", keyvault: "done", insights: "done", alerts: "done" },
    log: { level: "success", message: "Transform completed - schema drift normalized across 3 optional fields" },
    rows: 4_726_000,
    retries: 1,
    alerts: 2,
    sla: "on-track",
  },
  {
    clock: "04:52",
    states: { "src-ops": "done", "src-asset": "done", "src-event": "done", "src-model": "done", "src-lake": "done", adf: "done", func: "done", blob: "done", keyvault: "done", insights: "done", alerts: "done" },
    log: { level: "info", message: "Curated zone published to Blob Storage" },
    rows: 4_726_000,
    retries: 1,
    alerts: 2,
    sla: "on-track",
  },
  {
    clock: "05:06",
    states: { "src-ops": "done", "src-asset": "done", "src-event": "done", "src-model": "done", "src-lake": "done", adf: "done", func: "done", blob: "done", sql: "done", keyvault: "done", insights: "done", alerts: "done" },
    log: { level: "success", message: "Azure SQL tables refreshed for downstream BI" },
    rows: 4_726_000,
    retries: 1,
    alerts: 2,
    sla: "met",
  },
  {
    clock: "05:06",
    states: { "src-ops": "done", "src-asset": "done", "src-event": "done", "src-model": "done", "src-lake": "done", adf: "done", func: "done", blob: "done", sql: "done", keyvault: "done", insights: "done", alerts: "done" },
    log: { level: "success", message: "Run complete - 4.7M rows published 54 minutes ahead of SLA" },
    rows: 4_726_000,
    retries: 1,
    alerts: 2,
    sla: "met",
  },
];
