"use client";
import { useCallback, useEffect, useMemo, useState } from "react";
import HeroSection from "@/components/HeroSection";
import {
    Box, Button, Chip, Container, LinearProgress, Paper, Stack, Table, TableBody,
    TableCell, TableHead, TableRow, ToggleButton, ToggleButtonGroup, Typography,
} from "@mui/material";
import GridLegacy from "@mui/material/GridLegacy";
import { PlayArrow, Pause, Replay, SkipNext, LockOutlined } from "@mui/icons-material";
import { colorCombos } from "@/utils/colors";
import FunnelChart from "@/components/charts/FunnelChart";
import {
    roles, funnelStages, funnelRunScript, campaignMix, incidents, REACH,
    type RoleId, type RoleMeta, type ThreadEvent, type ThreadOutcome, type IncidentKind,
} from "@/data/ecommerceFunnel";

const STEP_MS = 1500;

const outcomeChip: Record<ThreadOutcome, { label: string; bg: string }> = {
    pending: { label: "In queue", bg: colorCombos.button.primary.background },
    ordered: { label: "Ordered", bg: colorCombos.button.success.background },
    backorder: { label: "Backorder", bg: colorCombos.button.warning.background },
    deduped: { label: "Duplicate discarded", bg: colorCombos.button.secondary.background },
    "lost-window": { label: "Lost - window closed", bg: colorCombos.button.error.background },
};

const logColor = {
    info: colorCombos.text.secondary_1,
    warn: colorCombos.button.warning.background,
    error: colorCombos.button.error.background,
    success: colorCombos.button.success.background,
} as const;

// Contact details are masked for every role that is not cleared to see them
const maskHandle = (handle: string) => {
    const [head] = handle.split(".");
    return `${head.slice(0, 1)}${"•".repeat(Math.max(3, head.length - 1))}`;
};

const Metric = ({ label, value, locked }: { label: string; value?: string; locked?: boolean }) => (
    <Paper
        sx={{
            p: 2,
            textAlign: "center",
            height: "100%",
            bgcolor: locked ? colorCombos.background.accent : colorCombos.background.primary,
            border: `1px solid ${colorCombos.border.light}`,
            opacity: locked ? 0.75 : 1,
        }}
    >
        {locked ? (
            <>
                <LockOutlined sx={{ fontSize: 30, color: colorCombos.text.light, mt: 0.5 }} />
                <Typography variant="body2" sx={{ color: colorCombos.text.secondary_1, mt: 0.5 }}>
                    {label}
                </Typography>
                <Typography variant="caption" sx={{ color: colorCombos.text.light }}>
                    Restricted for this role
                </Typography>
            </>
        ) : (
            <>
                <Typography variant="h4" sx={{ fontWeight: 700, color: colorCombos.text.title }}>
                    {value}
                </Typography>
                <Typography variant="body2" sx={{ color: colorCombos.text.secondary_1 }}>
                    {label}
                </Typography>
            </>
        )}
    </Paper>
);

// Each role gets four tiles. Revenue stays in the layout even when restricted, so the
// permission boundary is visible rather than silently absent.
function metricsFor(role: RoleMeta, step: (typeof funnelRunScript)[number], myThreads: number) {
    const { counts, revenue } = step;
    const conversion = counts.comments > 0 ? ((counts.order / counts.comments) * 100).toFixed(1) : "0.0";
    const spend = campaignMix.reduce((t, c) => t + c.spend, 0);
    const cpo = counts.order > 0 ? Math.round(spend / counts.order) : 0;

    const revenueTile = role.canSeeRevenue
        ? { label: "Revenue", value: `฿${revenue.toLocaleString()}` }
        : { label: "Revenue", locked: true };

    switch (role.id) {
        case "owner":
            return [
                { label: "Comments", value: counts.comments.toLocaleString() },
                { label: "Orders", value: `${counts.order}` },
                revenueTile,
                { label: "Comment-to-order", value: `${conversion}%` },
            ];
        case "marketing":
            return [
                { label: "Comments", value: counts.comments.toLocaleString() },
                { label: "Orders", value: `${counts.order}` },
                revenueTile,
                { label: "Cost per order", value: `฿${cpo.toLocaleString()}` },
            ];
        case "warehouse":
            return [
                { label: "Orders to fulfil", value: `${counts.order}` },
                { label: "Shipped", value: `${counts.shipped}` },
                revenueTile,
                { label: "Pick queue", value: `${step.pickQueue}` },
            ];
        case "support":
            return [
                { label: "My threads", value: `${myThreads}` },
                { label: "DMs sent", value: `${counts.dm}` },
                revenueTile,
                { label: "Window at risk", value: `${step.windowAtRisk}` },
            ];
    }
}

export default function EcommerceFunnelDemo() {
    const [stepIndex, setStepIndex] = useState(0);
    const [playing, setPlaying] = useState(false);
    const [roleId, setRoleId] = useState<RoleId>("owner");

    const lastIndex = funnelRunScript.length - 1;
    const step = funnelRunScript[stepIndex];
    const atEnd = stepIndex >= lastIndex;
    const role = roles.find((r) => r.id === roleId)!;

    useEffect(() => {
        if (!playing) return;
        const id = setInterval(() => {
            setStepIndex((i) => {
                if (i >= lastIndex) {
                    setPlaying(false);
                    return i;
                }
                return i + 1;
            });
        }, STEP_MS);
        return () => clearInterval(id);
    }, [playing, lastIndex]);

    const reset = useCallback(() => {
        setPlaying(false);
        setStepIndex(0);
    }, []);

    // Threads seen so far, filtered to the role's scope
    const threads = useMemo(() => {
        const all = funnelRunScript
            .slice(0, stepIndex + 1)
            .map((s) => s.thread)
            .filter((t): t is ThreadEvent => Boolean(t));
        return role.scope === "assigned" ? all.filter((t) => t.assignedToAgent) : all;
    }, [stepIndex, role.scope]);

    const seenIncidents = useMemo(() => {
        const kinds = new Set<IncidentKind>();
        funnelRunScript.slice(0, stepIndex + 1).forEach((s) => s.log.incident && kinds.add(s.log.incident));
        return kinds;
    }, [stepIndex]);

    const visibleStages = funnelStages.filter((s) => role.visibleStages.includes(s.id));
    const tiles = metricsFor(role, step, threads.length) ?? [];
    const logEntries = funnelRunScript
        .slice(0, stepIndex + 1)
        .map((s, i) => ({ ...s.log, clock: s.clock, key: i }))
        .reverse();

    return (
        <>
            <HeroSection
                title="Social Commerce Funnel Demo"
                subtitle="Comments on a campaign post converting into orders - and the same day seen through four different roles, each scoped to what it is allowed to see."
                backgroundImage="/work-station-5.jpg"
                backgroundImageAlt="Work Station"
                textAlign="center"
            />

            <Box sx={{ py: 6, bgcolor: colorCombos.background.primary }}>
                <Container>
                    {/* Role switcher */}
                    <Paper sx={{ p: 3, mb: 4, bgcolor: colorCombos.background.primary, border: `1px solid ${colorCombos.border.light}` }}>
                        <Typography variant="overline" sx={{ color: colorCombos.text.secondary_1, fontWeight: 700 }}>
                            Signed in as
                        </Typography>
                        <ToggleButtonGroup
                            value={roleId}
                            exclusive
                            onChange={(_, v) => v && setRoleId(v as RoleId)}
                            sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: 1, mb: 2 }}
                        >
                            {roles.map((r) => (
                                <ToggleButton key={r.id} value={r.id} sx={{ flex: "1 1 auto", border: `1px solid ${colorCombos.border.light} !important`, borderRadius: "4px !important" }}>
                                    {r.name}
                                </ToggleButton>
                            ))}
                        </ToggleButtonGroup>
                        <Typography variant="body2" sx={{ color: colorCombos.text.secondary_1 }}>
                            {role.summary}
                        </Typography>
                    </Paper>

                    {/* Controls */}
                    <Paper sx={{ p: 3, mb: 4, bgcolor: colorCombos.background.primary, border: `1px solid ${colorCombos.border.light}` }}>
                        <Stack direction={{ xs: "column", sm: "row" }} spacing={2} alignItems={{ xs: "stretch", sm: "center" }} sx={{ mb: 3 }}>
                            <Button variant="contained" startIcon={playing ? <Pause /> : <PlayArrow />} onClick={() => (atEnd ? reset() : setPlaying((p) => !p))}>
                                {playing ? "Pause" : atEnd ? "Replay day" : "Play day"}
                            </Button>
                            <Button
                                variant="outlined"
                                startIcon={<SkipNext />}
                                disabled={atEnd}
                                onClick={() => {
                                    setPlaying(false);
                                    setStepIndex((i) => Math.min(i + 1, lastIndex));
                                }}
                            >
                                Step
                            </Button>
                            <Button variant="outlined" startIcon={<Replay />} disabled={stepIndex === 0} onClick={reset}>
                                Reset
                            </Button>
                            <Box sx={{ flexGrow: 1 }} />
                            <Stack direction="row" spacing={2} alignItems="baseline">
                                <Typography variant="h5" sx={{ fontWeight: 700, color: colorCombos.text.title, fontFamily: "monospace" }}>
                                    {step.clock}
                                </Typography>
                                <Typography variant="body2" sx={{ color: colorCombos.text.secondary_1 }}>
                                    post reach {REACH.toLocaleString()}
                                </Typography>
                            </Stack>
                        </Stack>
                        <LinearProgress variant="determinate" value={(stepIndex / lastIndex) * 100} sx={{ height: 8, borderRadius: 4 }} />
                        <Typography variant="body2" sx={{ mt: 1, color: colorCombos.text.secondary_1 }}>
                            Step {stepIndex + 1} of {funnelRunScript.length}
                        </Typography>
                    </Paper>

                    {/* Role-scoped metrics */}
                    <GridLegacy container spacing={3} sx={{ mb: 4 }}>
                        {tiles.map((t) => (
                            <GridLegacy item xs={6} md={3} key={t.label}>
                                <Metric {...t} />
                            </GridLegacy>
                        ))}
                    </GridLegacy>

                    {/* Funnel */}
                    <Typography variant="h5" sx={{ fontWeight: 700, mb: 1, color: colorCombos.text.title }}>
                        Conversion Funnel
                    </Typography>
                    <Typography variant="body2" sx={{ mb: 2, color: colorCombos.text.secondary_1 }}>
                        {role.visibleStages.length < funnelStages.length
                            ? `Scoped to ${role.visibleStages.length} of ${funnelStages.length} stages for the ${role.name} role.`
                            : "Full pipeline, from comment capture to courier handover."}
                    </Typography>
                    <Paper sx={{ p: 2, mb: 4, border: `1px solid ${colorCombos.border.light}`, bgcolor: colorCombos.background.primary, overflowX: "auto" }}>
                        <Box sx={{ minWidth: 900 }}>
                            <FunnelChart stages={visibleStages} counts={step.counts} width={900} />
                        </Box>
                    </Paper>

                    <GridLegacy container spacing={4}>
                        {/* Thread stream */}
                        <GridLegacy item xs={12} md={6}>
                            <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, color: colorCombos.text.title }}>
                                {role.scope === "assigned" ? "My Assigned Threads" : "Comment Threads"}
                            </Typography>
                            <Stack spacing={2}>
                                {threads.length === 0 && (
                                    <Paper sx={{ p: 3, bgcolor: colorCombos.background.accent, border: `1px solid ${colorCombos.border.light}` }}>
                                        <Typography variant="body2" sx={{ color: colorCombos.text.secondary_1 }}>
                                            No threads yet - press Play to start the day.
                                        </Typography>
                                    </Paper>
                                )}
                                {threads.map((t, i) => (
                                    <Paper key={`${t.threadId}-${i}`} sx={{ p: 2, bgcolor: colorCombos.background.primary, border: `1px solid ${colorCombos.border.light}` }}>
                                        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 1, gap: 1 }}>
                                            <Typography variant="subtitle2" sx={{ fontWeight: 700, color: colorCombos.text.primary }}>
                                                {role.canSeeContact ? `@${t.handle}` : maskHandle(t.handle)}
                                                <Typography component="span" variant="caption" sx={{ color: colorCombos.text.light, ml: 1 }}>
                                                    thread {t.threadId}
                                                </Typography>
                                            </Typography>
                                            <Chip label={outcomeChip[t.outcome].label} size="small" sx={{ backgroundColor: outcomeChip[t.outcome].bg, color: colorCombos.button.primary.text, fontWeight: 600 }} />
                                        </Box>
                                        <Typography variant="body2" sx={{ color: colorCombos.text.secondary_1, fontStyle: "italic", mb: 1 }}>
                                            &ldquo;{t.comment}&rdquo;
                                        </Typography>
                                        <Stack direction="row" spacing={1} sx={{ flexWrap: "wrap", gap: 0.5 }}>
                                            <Chip label={`intent: ${t.intent}`} size="small" variant="outlined" sx={{ borderColor: colorCombos.border.light, color: colorCombos.text.secondary_1 }} />
                                            <Chip
                                                label={t.windowHoursLeft > 0 ? `window: ${t.windowHoursLeft}h left` : "window: closed"}
                                                size="small"
                                                variant="outlined"
                                                sx={{
                                                    borderColor: t.windowHoursLeft <= 1 ? colorCombos.button.error.background : colorCombos.border.light,
                                                    color: t.windowHoursLeft <= 1 ? colorCombos.button.error.background : colorCombos.text.secondary_1,
                                                }}
                                            />
                                            {role.canSeeCampaign && (
                                                <Chip label={t.campaign} size="small" variant="outlined" sx={{ borderColor: colorCombos.border.light, color: colorCombos.text.secondary_1 }} />
                                            )}
                                        </Stack>
                                    </Paper>
                                ))}
                            </Stack>
                        </GridLegacy>

                        {/* Right column: role-specific panel + log */}
                        <GridLegacy item xs={12} md={6}>
                            {role.canSeeCampaign && (
                                <>
                                    <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, color: colorCombos.text.title }}>
                                        Attribution
                                    </Typography>
                                    <Paper sx={{ mb: 4, bgcolor: colorCombos.background.primary, border: `1px solid ${colorCombos.border.light}` }}>
                                        <Table size="small">
                                            <TableHead>
                                                <TableRow>
                                                    <TableCell>Campaign</TableCell>
                                                    <TableCell align="right">Orders</TableCell>
                                                    <TableCell align="right">Spend</TableCell>
                                                    <TableCell align="right">Cost / order</TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                {campaignMix.map((cm) => {
                                                    const orders = Math.round(step.counts.order * cm.share);
                                                    return (
                                                        <TableRow key={cm.name}>
                                                            <TableCell sx={{ color: colorCombos.text.secondary_1 }}>{cm.name}</TableCell>
                                                            <TableCell align="right">{orders}</TableCell>
                                                            <TableCell align="right">{cm.spend > 0 ? `฿${cm.spend.toLocaleString()}` : "-"}</TableCell>
                                                            <TableCell align="right">
                                                                {cm.spend > 0 && orders > 0 ? `฿${Math.round(cm.spend / orders).toLocaleString()}` : "-"}
                                                            </TableCell>
                                                        </TableRow>
                                                    );
                                                })}
                                            </TableBody>
                                        </Table>
                                    </Paper>
                                </>
                            )}

                            {role.canSeeWarehouse && (
                                <>
                                    <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, color: colorCombos.text.title }}>
                                        Fulfilment
                                    </Typography>
                                    <Paper sx={{ p: 2, mb: 4, bgcolor: colorCombos.background.primary, border: `1px solid ${colorCombos.border.light}` }}>
                                        <Stack spacing={1}>
                                            <Typography variant="body2" sx={{ color: colorCombos.text.secondary_1 }}>
                                                SKU-2210 stock remaining: <strong>{step.stockRemaining}</strong>
                                                {step.stockRemaining === 0 && " - backorder capture active"}
                                            </Typography>
                                            <Typography variant="body2" sx={{ color: colorCombos.text.secondary_1 }}>
                                                Orders awaiting pick: <strong>{step.pickQueue}</strong>
                                            </Typography>
                                            <Typography variant="body2" sx={{ color: colorCombos.text.secondary_1 }}>
                                                Shipped today: <strong>{step.counts.shipped}</strong> of {step.counts.paid} paid
                                            </Typography>
                                        </Stack>
                                    </Paper>
                                </>
                            )}

                            <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, color: colorCombos.text.title }}>
                                Incidents Handled
                            </Typography>
                            <Stack spacing={1.5} sx={{ mb: 4 }}>
                                {incidents.map((inc) => {
                                    const hit = seenIncidents.has(inc.kind);
                                    return (
                                        <Paper
                                            key={inc.kind}
                                            sx={{
                                                p: 2,
                                                bgcolor: hit ? colorCombos.background.accent : colorCombos.background.primary,
                                                border: `1px solid ${hit ? colorCombos.button.warning.background : colorCombos.border.light}`,
                                                opacity: hit ? 1 : 0.6,
                                            }}
                                        >
                                            <Typography variant="subtitle2" sx={{ fontWeight: 700, color: colorCombos.text.primary }}>
                                                {inc.label}
                                            </Typography>
                                            <Typography variant="body2" sx={{ color: colorCombos.text.secondary_1 }}>
                                                {inc.handling}
                                            </Typography>
                                        </Paper>
                                    );
                                })}
                            </Stack>

                            <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, color: colorCombos.text.title }}>
                                Event Log
                            </Typography>
                            <Paper sx={{ p: 2, maxHeight: 300, overflowY: "auto", bgcolor: colorCombos.background.primary, border: `1px solid ${colorCombos.border.light}` }}>
                                <Stack spacing={1.5}>
                                    {logEntries.map((e) => (
                                        <Box key={e.key} sx={{ display: "flex", gap: 1.5, alignItems: "flex-start" }}>
                                            <Box sx={{ mt: "6px", width: 8, height: 8, borderRadius: "50%", flexShrink: 0, backgroundColor: logColor[e.level] }} />
                                            <Typography variant="body2" sx={{ color: colorCombos.text.light, fontFamily: "monospace", flexShrink: 0 }}>
                                                {e.clock}
                                            </Typography>
                                            <Typography variant="body2" sx={{ color: colorCombos.text.secondary_1 }}>
                                                {e.message}
                                            </Typography>
                                        </Box>
                                    ))}
                                </Stack>
                            </Paper>
                        </GridLegacy>
                    </GridLegacy>

                    {/* Explanation */}
                    <Box sx={{ mt: 6 }}>
                        <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, color: colorCombos.text.title }}>
                            Why This Funnel Is Different
                        </Typography>
                        <Typography variant="body1" sx={{ color: colorCombos.text.secondary_1, mb: 2 }}>
                            A normal storefront funnel starts with a visit. This one starts with a <strong>comment</strong>, and that changes
                            the engineering. Intent has to be read out of ordinary language, a reply has to reach the customer through a
                            messaging platform with its own rules, and stock has to be reserved the moment a cart appears rather than at
                            checkout. Every stage above is a place where a sale can be lost for reasons that have nothing to do with the
                            customer changing their mind.
                        </Typography>
                        <Typography variant="body1" sx={{ color: colorCombos.text.secondary_1, mb: 2 }}>
                            The hardest of those is the <strong>24-hour messaging window</strong>. Facebook only permits a reply within 24
                            hours of the customer&apos;s last interaction, so a high-intent lead picked up too late is simply unreachable - no
                            retry, no workaround. The queue here is sorted by <strong>window expiry rather than arrival time</strong>, which is
                            why thread 4396 converts with 47 minutes to spare while thread 4102 is recorded as lost. Making that loss
                            visible matters more than hiding it: you cannot manage a leak you do not measure.
                        </Typography>
                        <Typography variant="body1" sx={{ color: colorCombos.text.secondary_1, mb: 2 }}>
                            The role switcher is the other half. The same day&apos;s data serves four audiences with genuinely different
                            needs, and the boundaries are enforced rather than cosmetic: warehouse staff get the pick queue but not
                            revenue, marketing gets attribution but not customer handles, and a support agent sees only their own threads.
                            Revenue stays in the layout as a <strong>locked tile</strong> so the permission boundary is something you can see
                            instead of something you have to trust.
                        </Typography>
                        <Paper sx={{ p: 2, bgcolor: colorCombos.background.accent, border: `1px solid ${colorCombos.border.light}` }}>
                            <Typography variant="body2" sx={{ color: colorCombos.text.secondary_1 }}>
                                <strong>Note:</strong> this page replays a representative trading day on a fixed script - the site is a
                                static export with no backend, and the handles, volumes, campaigns, and SKU are invented and
                                client-agnostic. The funnel stages, failure modes, and permission model reflect production systems built
                                with the Facebook Graph API, Laravel, and .NET.
                            </Typography>
                        </Paper>
                    </Box>
                </Container>
            </Box>
        </>
    );
}
