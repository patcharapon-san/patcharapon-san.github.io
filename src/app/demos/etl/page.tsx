"use client";
import { useCallback, useEffect, useState } from "react";
import HeroSection from "@/components/HeroSection";
import { Box, Button, Chip, Container, LinearProgress, Paper, Stack, Typography } from "@mui/material";
import GridLegacy from "@mui/material/GridLegacy";
import { PlayArrow, Pause, Replay, SkipNext } from "@mui/icons-material";
import { colorCombos } from "@/utils/colors";
import CaseStudy from "@/components/CaseStudy";
import { etlCaseStudy } from "@/data/caseStudies";
import EtlFlowDiagram from "@/components/diagrams/EtlFlowDiagram";
import {
    etlRunScript,
    SLA_DEADLINE,
    type EtlLogLevel,
    type EtlNodeState,
    type SlaStatus,
} from "@/data/etlRun";

const STEP_MS = 1500;

const stateLegend: { state: EtlNodeState; label: string; color: string }[] = [
    { state: "pending", label: "Pending", color: "#9e9e9e" },
    { state: "running", label: "Running", color: "#1976d2" },
    { state: "done", label: "Complete", color: "#2e7d32" },
    { state: "late", label: "Late", color: "#f9a825" },
    { state: "failed", label: "Failed", color: "#d32f2f" },
    { state: "retrying", label: "Retrying", color: "#ed6c02" },
];

const logColor: Record<EtlLogLevel, string> = {
    info: colorCombos.text.secondary_1,
    warn: colorCombos.button.warning.background,
    error: colorCombos.button.error.background,
    success: colorCombos.button.success.background,
};

const slaDisplay: Record<SlaStatus, { label: string; color: string }> = {
    "on-track": { label: "On track", color: colorCombos.button.primary.background },
    "at-risk": { label: "At risk", color: colorCombos.button.warning.background },
    met: { label: "Met", color: colorCombos.button.success.background },
};

const Metric = ({ label, value, color }: { label: string; value: string; color?: string }) => (
    <Paper sx={{ p: 2, textAlign: "center", height: "100%", bgcolor: colorCombos.background.primary, border: `1px solid ${colorCombos.border.light}` }}>
        <Typography variant="h4" sx={{ fontWeight: 700, color: color ?? colorCombos.text.title }}>
            {value}
        </Typography>
        <Typography variant="body2" sx={{ color: colorCombos.text.secondary_1 }}>
            {label}
        </Typography>
    </Paper>
);

export default function EtlDemo() {
    const [stepIndex, setStepIndex] = useState(0);
    const [playing, setPlaying] = useState(false);

    const lastIndex = etlRunScript.length - 1;
    const step = etlRunScript[stepIndex];
    const atEnd = stepIndex >= lastIndex;

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

    const sla = slaDisplay[step.sla];
    const logEntries = etlRunScript.slice(0, stepIndex + 1).map((s, i) => ({ ...s.log, clock: s.clock, key: i })).reverse();

    return (
        <>
            <HeroSection
                title="ETL Orchestration Demo"
                subtitle={`Watch one overnight run end to end: a late upstream source, an alert, a failed transform that recovers on retry, and the consolidated dataset still published before the ${SLA_DEADLINE} SLA.`}
                backgroundImage="/work-station-2.jpg"
                backgroundImageAlt="Work Station"
                textAlign="center"
            />

            <Box sx={{ py: 6, bgcolor: colorCombos.background.primary }}>
                <Container>
                    {/* Controls */}
                    <Paper sx={{ p: 3, mb: 4, bgcolor: colorCombos.background.primary, border: `1px solid ${colorCombos.border.light}` }}>
                        <Stack direction={{ xs: "column", sm: "row" }} spacing={2} alignItems={{ xs: "stretch", sm: "center" }} sx={{ mb: 3 }}>
                            <Button
                                variant="contained"
                                startIcon={playing ? <Pause /> : <PlayArrow />}
                                onClick={() => (atEnd ? reset() : setPlaying((p) => !p))}
                            >
                                {playing ? "Pause" : atEnd ? "Run again" : "Play run"}
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

                            <Stack direction="row" spacing={1} sx={{ flexWrap: "wrap", gap: 1 }}>
                                {stateLegend.map((s) => (
                                    <Chip
                                        key={s.state}
                                        label={s.label}
                                        size="small"
                                        variant="outlined"
                                        icon={<Box sx={{ width: 10, height: 10, borderRadius: "50%", backgroundColor: s.color, ml: 1 }} />}
                                        sx={{ borderColor: colorCombos.border.light, color: colorCombos.text.secondary_1 }}
                                    />
                                ))}
                            </Stack>
                        </Stack>

                        <LinearProgress variant="determinate" value={(stepIndex / lastIndex) * 100} sx={{ height: 8, borderRadius: 4 }} />
                        <Typography variant="body2" sx={{ mt: 1, color: colorCombos.text.secondary_1 }}>
                            Step {stepIndex + 1} of {etlRunScript.length}
                        </Typography>
                    </Paper>

                    {/* Diagram */}
                    <Paper sx={{ p: 2, mb: 4, border: `1px solid ${colorCombos.border.light}`, bgcolor: colorCombos.background.primary, overflowX: "auto" }}>
                        <Box sx={{ minWidth: 1100 }}>
                            <EtlFlowDiagram states={step.states} width={1100} height={420} />
                        </Box>
                    </Paper>

                    {/* Metrics */}
                    <GridLegacy container spacing={3} sx={{ mb: 4 }}>
                        <GridLegacy item xs={6} md={3}>
                            <Metric label={`Pipeline clock (SLA ${SLA_DEADLINE})`} value={step.clock} />
                        </GridLegacy>
                        <GridLegacy item xs={6} md={3}>
                            <Metric label="Rows staged" value={`${(step.rows / 1_000_000).toFixed(1)}M`} />
                        </GridLegacy>
                        <GridLegacy item xs={6} md={3}>
                            <Metric label="Retries / Alerts" value={`${step.retries} / ${step.alerts}`} />
                        </GridLegacy>
                        <GridLegacy item xs={6} md={3}>
                            <Metric label="SLA status" value={sla.label} color={sla.color} />
                        </GridLegacy>
                    </GridLegacy>

                    {/* Run log */}
                    <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, color: colorCombos.text.title }}>
                        Run Log
                    </Typography>
                    <Paper
                        sx={{
                            p: 2,
                            mb: 5,
                            maxHeight: 320,
                            overflowY: "auto",
                            bgcolor: colorCombos.background.primary,
                            border: `1px solid ${colorCombos.border.light}`,
                        }}
                    >
                        <Stack spacing={1.5}>
                            {logEntries.map((entry) => (
                                <Box key={entry.key} sx={{ display: "flex", gap: 1.5, alignItems: "flex-start" }}>
                                    <Box sx={{ mt: "6px", width: 8, height: 8, borderRadius: "50%", flexShrink: 0, backgroundColor: logColor[entry.level] }} />
                                    <Typography variant="body2" sx={{ color: colorCombos.text.light, fontFamily: "monospace", flexShrink: 0 }}>
                                        {entry.clock}
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: colorCombos.text.secondary_1 }}>
                                        {entry.message}
                                    </Typography>
                                </Box>
                            ))}
                        </Stack>
                    </Paper>

                    {/* What the run demonstrates */}
                    <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, color: colorCombos.text.title }}>
                        What This Run Demonstrates
                    </Typography>
                    <Typography variant="body1" sx={{ color: colorCombos.text.secondary_1, mb: 2 }}>
                        Every pipeline works on a good night. What matters is the bad one. This run contains two failures on purpose.
                        An upstream source misses its readiness window, and rather than starting on incomplete data or failing outright,
                        the <strong>dependency-aware trigger holds the pipeline</strong> and routes an alert to on-call with the correlation
                        ID attached. Later the transform stage hits a <strong>transient HTTP 429</strong> from an upstream API, and only the
                        failing stage retries with backoff - the run does not restart from zero.
                    </Typography>
                    <Typography variant="body1" sx={{ color: colorCombos.text.secondary_1, mb: 4 }}>
                        Both incidents are visible, both are diagnosable from the log without access to the client systems, and the
                        consolidated dataset still lands <strong>54 minutes ahead of the {SLA_DEADLINE} deadline</strong>. That margin is the
                        real deliverable: the business sees a report on time and never learns anything went wrong.
                    </Typography>

                    <Paper sx={{ p: 2, mb: 5, bgcolor: colorCombos.background.accent, border: `1px solid ${colorCombos.border.light}` }}>
                        <Typography variant="body2" sx={{ color: colorCombos.text.secondary_1 }}>
                            <strong>Note:</strong> this page replays a representative run on a fixed script - the site is a static export
                            with no backend, and the timings, volumes, and source names are illustrative and client-agnostic. The
                            architecture, failure handling, and observability approach are taken from the production system described below.
                        </Typography>
                    </Paper>

                    {/* Case study */}
                    <CaseStudy {...etlCaseStudy} />
                </Container>
            </Box>
        </>
    );
}
