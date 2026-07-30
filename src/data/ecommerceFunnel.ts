export type RoleId = "owner" | "marketing" | "warehouse" | "support";

export type StageId = "comments" | "intent" | "dm" | "cart" | "order" | "paid" | "shipped";

export interface RoleMeta {
  id: RoleId;
  name: string;
  summary: string;
  canSeeRevenue: boolean;
  canSeeCampaign: boolean;
  canSeeWarehouse: boolean;
  canSeeContact: boolean;
  /** "org" sees every thread; "assigned" sees only threads routed to this user */
  scope: "org" | "assigned";
  /** Stages of the funnel this role is scoped to - the shape changes per role, not just the numbers */
  visibleStages: StageId[];
}

// The permission matrix the demo is really about: one dataset, four lenses.
export const roles: RoleMeta[] = [
  {
    id: "owner",
    name: "Owner",
    summary: "Full visibility across revenue, attribution, fulfilment, and customer contact details.",
    canSeeRevenue: true,
    canSeeCampaign: true,
    canSeeWarehouse: true,
    canSeeContact: true,
    scope: "org",
    visibleStages: ["comments", "intent", "dm", "cart", "order", "paid", "shipped"],
  },
  {
    id: "marketing",
    name: "Marketing",
    summary: "Attribution and cost per order. No customer contact details, no fulfilment queue.",
    canSeeRevenue: true,
    canSeeCampaign: true,
    canSeeWarehouse: false,
    canSeeContact: false,
    scope: "org",
    visibleStages: ["comments", "intent", "dm", "cart", "order", "paid"],
  },
  {
    id: "warehouse",
    name: "Warehouse",
    summary: "Pick queue and stock exposure. Revenue and campaign data are out of scope for this role.",
    canSeeRevenue: false,
    canSeeCampaign: false,
    canSeeWarehouse: true,
    canSeeContact: false,
    scope: "org",
    visibleStages: ["order", "paid", "shipped"],
  },
  {
    id: "support",
    name: "Support Agent",
    summary: "Only threads assigned to this agent, with customer handles masked.",
    canSeeRevenue: false,
    canSeeCampaign: false,
    canSeeWarehouse: false,
    canSeeContact: false,
    scope: "assigned",
    visibleStages: ["comments", "intent", "dm"],
  },
];

export const funnelStages: { id: StageId; label: string; note: string }[] = [
  { id: "comments", label: "Comments", note: "Captured from the post via Graph API webhook" },
  { id: "intent", label: "Buying intent", note: "Classified from comment text - price, size, or stock questions" },
  { id: "dm", label: "DM sent", note: "Must land inside the 24h messaging window" },
  { id: "cart", label: "Cart created", note: "Stock reserved at this point, not at checkout" },
  { id: "order", label: "Order placed", note: "Deduplicated per thread with an idempotency key" },
  { id: "paid", label: "Paid", note: "Payment captured" },
  { id: "shipped", label: "Shipped", note: "Handed to the courier" },
];

export type IncidentKind = "token" | "duplicate" | "oversell" | "window";

export const incidents: { kind: IncidentKind; label: string; handling: string }[] = [
  { kind: "token", label: "Graph API rate limit", handling: "Back off and resume from the saved cursor so no comments are dropped" },
  { kind: "duplicate", label: "Duplicate order in one thread", handling: "Idempotency key per thread discards the second order" },
  { kind: "oversell", label: "Two carts, one unit left", handling: "Reservation goes to the earlier cart; the other is offered a backorder" },
  { kind: "window", label: "24h messaging window closing", handling: "Queue is sorted by window expiry, not by arrival time" },
];

export type IntentLevel = "high" | "medium" | "none";
export type ThreadOutcome = "pending" | "ordered" | "backorder" | "deduped" | "lost-window";

export interface ThreadEvent {
  threadId: string;
  handle: string;
  comment: string;
  intent: IntentLevel;
  campaign: string;
  /** Hours left in Facebook's 24h messaging window when this thread was picked up */
  windowHoursLeft: number;
  assignedToAgent: boolean;
  outcome: ThreadOutcome;
}

export interface CampaignRow {
  name: string;
  /** Share of orders attributed to this campaign */
  share: number;
  /** Fixed daily spend, used to derive cost per order */
  spend: number;
}

export const campaignMix: CampaignRow[] = [
  { name: "IG Story - Bundle offer", share: 0.42, spend: 4800 },
  { name: "FB Post - Restock alert", share: 0.31, spend: 2600 },
  { name: "Organic / no UTM", share: 0.18, spend: 0 },
  { name: "Line broadcast", share: 0.09, spend: 900 },
];

export interface FunnelStep {
  clock: string;
  counts: Record<StageId, number>;
  revenue: number;
  reach: number;
  stockRemaining: number;
  pickQueue: number;
  windowAtRisk: number;
  thread?: ThreadEvent;
  log: { level: "info" | "warn" | "error" | "success"; message: string; incident?: IncidentKind };
}

const c = (
  comments: number,
  intent: number,
  dm: number,
  cart: number,
  order: number,
  paid: number,
  shipped: number
): Record<StageId, number> => ({ comments, intent, dm, cart, order, paid, shipped });

export const REACH = 24_800;

// One trading day on a campaign post. The four incidents are spaced so each gets a
// beat of its own: an API limit early, a duplicate mid-morning, a stock collision at
// lunch, then the messaging window closing in the afternoon.
export const funnelRunScript: FunnelStep[] = [
  {
    clock: "09:00",
    counts: c(0, 0, 0, 0, 0, 0, 0),
    revenue: 0,
    reach: REACH,
    stockRemaining: 48,
    pickQueue: 0,
    windowAtRisk: 0,
    log: { level: "info", message: "Campaign post live - Graph API webhook subscribed to comments and messages" },
  },
  {
    clock: "09:12",
    counts: c(34, 11, 9, 4, 2, 2, 0),
    revenue: 3_160,
    reach: REACH,
    stockRemaining: 46,
    pickQueue: 2,
    windowAtRisk: 0,
    thread: {
      threadId: "4471",
      handle: "nok.ss",
      comment: "How much for the bundle? Do you have size M?",
      intent: "high",
      campaign: "IG Story - Bundle offer",
      windowHoursLeft: 23.8,
      assignedToAgent: true,
      outcome: "ordered",
    },
    log: { level: "info", message: "34 comments captured, 11 classified as buying intent" },
  },
  {
    clock: "09:31",
    counts: c(78, 26, 22, 11, 7, 6, 2),
    revenue: 9_840,
    reach: REACH,
    stockRemaining: 41,
    pickQueue: 5,
    windowAtRisk: 0,
    thread: {
      threadId: "4483",
      handle: "areeya.p",
      comment: "Is this still in stock?",
      intent: "high",
      campaign: "FB Post - Restock alert",
      windowHoursLeft: 23.5,
      assignedToAgent: false,
      outcome: "ordered",
    },
    log: { level: "info", message: "Conversion holding at 9% comment-to-order" },
  },
  {
    clock: "09:48",
    counts: c(78, 26, 22, 11, 7, 7, 3),
    revenue: 9_840,
    reach: REACH,
    stockRemaining: 41,
    pickQueue: 4,
    windowAtRisk: 0,
    log: {
      level: "error",
      message: "Graph API returned HTTP 429 on comment sync - backing off 30s, pagination cursor preserved",
      incident: "token",
    },
  },
  {
    clock: "09:49",
    counts: c(96, 33, 27, 14, 9, 8, 3),
    revenue: 12_640,
    reach: REACH,
    stockRemaining: 39,
    pickQueue: 6,
    windowAtRisk: 0,
    log: { level: "success", message: "Sync resumed from the saved cursor - backlog drained, no comments dropped" },
  },
  {
    clock: "10:22",
    counts: c(148, 51, 44, 23, 15, 14, 7),
    revenue: 21_300,
    reach: REACH,
    stockRemaining: 33,
    pickQueue: 8,
    windowAtRisk: 0,
    thread: {
      threadId: "4471",
      handle: "nok.ss",
      comment: "Sorry, ordering again just in case the first one failed",
      intent: "high",
      campaign: "IG Story - Bundle offer",
      windowHoursLeft: 22.4,
      assignedToAgent: true,
      outcome: "deduped",
    },
    log: {
      level: "warn",
      message: "Thread 4471 produced a second order - idempotency key matched, duplicate discarded before payment",
      incident: "duplicate",
    },
  },
  {
    clock: "10:55",
    counts: c(206, 71, 62, 33, 22, 20, 12),
    revenue: 31_200,
    reach: REACH,
    stockRemaining: 24,
    pickQueue: 10,
    windowAtRisk: 1,
    log: { level: "info", message: "Restock alert campaign overtaking the bundle offer on volume" },
  },
  {
    clock: "11:02",
    counts: c(224, 77, 68, 36, 23, 21, 14),
    revenue: 32_650,
    reach: REACH,
    stockRemaining: 1,
    pickQueue: 11,
    windowAtRisk: 1,
    thread: {
      threadId: "4519",
      handle: "titima.w",
      comment: "I'll take the last one!",
      intent: "high",
      campaign: "FB Post - Restock alert",
      windowHoursLeft: 21.1,
      assignedToAgent: false,
      outcome: "backorder",
    },
    log: {
      level: "warn",
      message: "Two carts held the last unit of SKU-2210 - reservation granted to the earlier cart",
      incident: "oversell",
    },
  },
  {
    clock: "11:03",
    counts: c(224, 77, 68, 36, 24, 22, 14),
    revenue: 34_100,
    reach: REACH,
    stockRemaining: 0,
    pickQueue: 12,
    windowAtRisk: 1,
    log: { level: "success", message: "Second buyer offered a backorder with a 3-day ETA - retained rather than lost" },
  },
  {
    clock: "11:40",
    counts: c(281, 96, 85, 45, 30, 28, 19),
    revenue: 42_400,
    reach: REACH,
    stockRemaining: 0,
    pickQueue: 11,
    windowAtRisk: 2,
    log: { level: "info", message: "SKU-2210 switched to backorder capture so intent is still collected" },
  },
  {
    clock: "12:10",
    counts: c(318, 108, 94, 50, 33, 31, 22),
    revenue: 46_900,
    reach: REACH,
    stockRemaining: 0,
    pickQueue: 11,
    windowAtRisk: 3,
    thread: {
      threadId: "4396",
      handle: "somchai.k",
      comment: "Can I still get the bundle price?",
      intent: "high",
      campaign: "IG Story - Bundle offer",
      windowHoursLeft: 0.8,
      assignedToAgent: true,
      outcome: "pending",
    },
    log: {
      level: "warn",
      message: "Thread 4396 has 47 minutes left in its 24h messaging window - moved to the front of the agent queue",
      incident: "window",
    },
  },
  {
    clock: "12:35",
    counts: c(342, 116, 102, 55, 36, 34, 24),
    revenue: 51_300,
    reach: REACH,
    stockRemaining: 0,
    pickQueue: 12,
    windowAtRisk: 2,
    thread: {
      threadId: "4396",
      handle: "somchai.k",
      comment: "Yes please, send me the payment link",
      intent: "high",
      campaign: "IG Story - Bundle offer",
      windowHoursLeft: 0.4,
      assignedToAgent: true,
      outcome: "ordered",
    },
    log: { level: "success", message: "Thread 4396 answered inside the window and converted to a cart" },
  },
  {
    clock: "13:05",
    counts: c(366, 124, 108, 58, 38, 36, 26),
    revenue: 54_100,
    reach: REACH,
    stockRemaining: 0,
    pickQueue: 12,
    windowAtRisk: 1,
    thread: {
      threadId: "4102",
      handle: "pimchanok.r",
      comment: "Do you ship to Chiang Mai?",
      intent: "high",
      campaign: "Organic / no UTM",
      windowHoursLeft: 0,
      assignedToAgent: false,
      outcome: "lost-window",
    },
    log: {
      level: "error",
      message: "Thread 4102 window closed before pickup - high-intent lead now unreachable by platform rule, not by choice",
      incident: "window",
    },
  },
  {
    clock: "13:45",
    counts: c(392, 132, 116, 61, 40, 37, 28),
    revenue: 56_800,
    reach: REACH,
    stockRemaining: 0,
    pickQueue: 9,
    windowAtRisk: 0,
    log: { level: "info", message: "Agent queue cleared - every reachable thread answered inside its window" },
  },
  {
    clock: "14:15",
    counts: c(412, 138, 121, 63, 41, 38, 29),
    revenue: 58_400,
    reach: REACH,
    stockRemaining: 0,
    pickQueue: 9,
    windowAtRisk: 0,
    log: { level: "success", message: "Day complete - 412 comments to 41 orders at 10.0% conversion, 1 lead lost to the window" },
  },
];
