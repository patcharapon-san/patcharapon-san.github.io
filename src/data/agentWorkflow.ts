export type AgentId = "planner" | "explorer" | "implementer" | "tester" | "reviewer";
export type AgentState = "idle" | "running" | "done" | "retry" | "blocked";
export type StageId = "intake" | "plan" | "execute" | "review" | "integrate";
export type LogLevel = "info" | "warn" | "error" | "success";

export interface AgentMeta {
  id: AgentId;
  name: string;
  role: string;
}

export const agents: AgentMeta[] = [
  { id: "planner", name: "Planner", role: "Decomposes the request into ordered subtasks" },
  { id: "explorer", name: "Explorer", role: "Maps the codebase and reports call sites" },
  { id: "implementer", name: "Implementer", role: "Writes the diff against the plan" },
  { id: "tester", name: "Tester", role: "Generates and runs cases from the plan" },
  { id: "reviewer", name: "Reviewer", role: "Gates the diff before it can be integrated" },
];

export const stages: { id: StageId; label: string }[] = [
  { id: "intake", label: "Intake" },
  { id: "plan", label: "Plan" },
  { id: "execute", label: "Execute" },
  { id: "review", label: "Review" },
  { id: "integrate", label: "Integrate" },
];

export interface RunStep {
  stage: StageId;
  states: Record<AgentId, AgentState>;
  log: { level: LogLevel; message: string };
  subtasksDone: number;
  elapsedSec: number;
}

export const TOTAL_SUBTASKS = 4;

// Positional helper keeps the script below readable: planner, explorer, implementer, tester, reviewer
const st = (
  planner: AgentState,
  explorer: AgentState,
  implementer: AgentState,
  tester: AgentState,
  reviewer: AgentState
): Record<AgentId, AgentState> => ({ planner, explorer, implementer, tester, reviewer });

// A scripted run of one task through the workflow. The rejection at step 10 is
// deliberate — the retry loop is the part of the pattern worth showing.
export const runScript: RunStep[] = [
  {
    stage: "intake",
    states: st("idle", "idle", "idle", "idle", "idle"),
    log: { level: "info", message: "Task received - add role-based analytics to the orders API" },
    subtasksDone: 0,
    elapsedSec: 0,
  },
  {
    stage: "plan",
    states: st("running", "idle", "idle", "idle", "idle"),
    log: { level: "info", message: "Planner decomposing the request into subtasks" },
    subtasksDone: 0,
    elapsedSec: 3,
  },
  {
    stage: "plan",
    states: st("done", "idle", "idle", "idle", "idle"),
    log: { level: "info", message: "Plan ready - 4 subtasks identified, 2 can run in parallel" },
    subtasksDone: 0,
    elapsedSec: 9,
  },
  {
    stage: "execute",
    states: st("done", "running", "running", "idle", "idle"),
    log: { level: "info", message: "Explorer and Implementer dispatched in parallel" },
    subtasksDone: 0,
    elapsedSec: 12,
  },
  {
    stage: "execute",
    states: st("done", "done", "running", "idle", "idle"),
    log: { level: "info", message: "Explorer mapped 12 call sites across 5 files" },
    subtasksDone: 1,
    elapsedSec: 24,
  },
  {
    stage: "execute",
    states: st("done", "done", "running", "running", "idle"),
    log: { level: "info", message: "Tester generating cases from the plan" },
    subtasksDone: 1,
    elapsedSec: 31,
  },
  {
    stage: "execute",
    states: st("done", "done", "done", "running", "idle"),
    log: { level: "info", message: "Implementer produced a diff (+142 / -18)" },
    subtasksDone: 2,
    elapsedSec: 46,
  },
  {
    stage: "execute",
    states: st("done", "done", "done", "done", "idle"),
    log: { level: "warn", message: "Tester reports 2 of 14 cases failing" },
    subtasksDone: 3,
    elapsedSec: 58,
  },
  {
    stage: "review",
    states: st("done", "done", "done", "done", "running"),
    log: { level: "info", message: "Review gate checking the diff against the failing cases" },
    subtasksDone: 3,
    elapsedSec: 62,
  },
  {
    stage: "review",
    states: st("done", "done", "retry", "done", "blocked"),
    log: { level: "error", message: "Review rejected - unhandled null on an empty result set" },
    subtasksDone: 3,
    elapsedSec: 70,
  },
  {
    stage: "execute",
    states: st("done", "done", "running", "idle", "idle"),
    log: { level: "warn", message: "Implementer patching the edge case - attempt 2" },
    subtasksDone: 3,
    elapsedSec: 73,
  },
  {
    stage: "execute",
    states: st("done", "done", "done", "running", "idle"),
    log: { level: "info", message: "Re-running the suite against the patched diff" },
    subtasksDone: 3,
    elapsedSec: 88,
  },
  {
    stage: "review",
    states: st("done", "done", "done", "done", "running"),
    log: { level: "success", message: "14 of 14 cases passing - back to the review gate" },
    subtasksDone: 4,
    elapsedSec: 97,
  },
  {
    stage: "review",
    states: st("done", "done", "done", "done", "done"),
    log: { level: "success", message: "Review passed - diff approved" },
    subtasksDone: 4,
    elapsedSec: 104,
  },
  {
    stage: "integrate",
    states: st("done", "done", "done", "done", "done"),
    log: { level: "success", message: "Changes integrated to feature/role-analytics" },
    subtasksDone: 4,
    elapsedSec: 108,
  },
];
