"use client";
import { useCallback, useEffect, useState } from "react";
import HeroSection from "@/components/HeroSection";
import { Box, Button, Chip, Container, LinearProgress, Paper, Stack, Typography } from "@mui/material";
import GridLegacy from "@mui/material/GridLegacy";
import { PlayArrow, Pause, Replay, SkipNext } from "@mui/icons-material";
import { colorCombos } from "@/utils/colors";
import AgentFlowDiagram from "@/components/diagrams/AgentFlowDiagram";
import {
    agents,
    stages,
    runScript,
    TOTAL_SUBTASKS,
    type AgentState,
    type LogLevel,
} from "@/data/agentWorkflow";

const STEP_MS = 1600;

const stateChip: Record<AgentState, { label: string; bg: string; fg: string }> = {
    idle: { label: "Idle", bg: colorCombos.background.accent, fg: colorCombos.text.secondary_1 },
    running: { label: "Running", bg: colorCombos.button.primary.background, fg: colorCombos.button.primary.text },
    done: { label: "Done", bg: colorCombos.button.success.background, fg: colorCombos.button.success.text },
    retry: { label: "Retrying", bg: colorCombos.button.warning.background, fg: colorCombos.button.warning.text },
    blocked: { label: "Blocked", bg: colorCombos.button.error.background, fg: colorCombos.button.error.text },
};

const logColor: Record<LogLevel, string> = {
    info: colorCombos.text.secondary_1,
    warn: colorCombos.button.warning.background,
    error: colorCombos.button.error.background,
    success: colorCombos.button.success.background,
};

const Metric = ({ label, value }: { label: string; value: string }) => (
    <Paper sx={{ p: 2, textAlign: "center", height: "100%", bgcolor: colorCombos.background.primary, border: `1px solid ${colorCombos.border.light}` }}>
        <Typography variant="h4" sx={{ fontWeight: 700, color: colorCombos.text.title }}>
            {value}
        </Typography>
        <Typography variant="body2" sx={{ color: colorCombos.text.secondary_1 }}>
            {label}
        </Typography>
    </Paper>
);

export default function AgenticDemo() {
    const [stepIndex, setStepIndex] = useState(0);
    const [playing, setPlaying] = useState(false);

    const lastIndex = runScript.length - 1;
    const step = runScript[stepIndex];
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

    const activeAgents = agents.filter((a) => step.states[a.id] === "running").length;
    const rejections = runScript.slice(0, stepIndex + 1).filter((s) => s.log.level === "error").length;
    const currentStageIndex = stages.findIndex((s) => s.id === step.stage);

    // Newest first, so the log reads like a console
    const logEntries = runScript.slice(0, stepIndex + 1).map((s, i) => ({ ...s.log, key: i })).reverse();

    return (
        <>
            <HeroSection
                title="Agentic Workflow Demo"
                subtitle="How a single task moves through a multi-agent pipeline: planning, parallel execution, a review gate, and the retry loop when work is rejected."
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
                                {playing ? "Pause" : atEnd ? "Run again" : "Play"}
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
                                {stages.map((s, i) => (
                                    <Chip
                                        key={s.id}
                                        label={s.label}
                                        size="small"
                                        sx={{
                                            fontWeight: i === currentStageIndex ? 700 : 500,
                                            backgroundColor: i === currentStageIndex ? colorCombos.button.primary.background : colorCombos.background.accent,
                                            color: i === currentStageIndex ? colorCombos.button.primary.text : colorCombos.text.secondary_1,
                                        }}
                                    />
                                ))}
                            </Stack>
                        </Stack>

                        <LinearProgress
                            variant="determinate"
                            value={(stepIndex / lastIndex) * 100}
                            sx={{ height: 8, borderRadius: 4 }}
                        />
                        <Typography variant="body2" sx={{ mt: 1, color: colorCombos.text.secondary_1 }}>
                            Step {stepIndex + 1} of {runScript.length}
                        </Typography>
                    </Paper>

                    {/* Diagram */}
                    <Paper sx={{ p: 2, mb: 4, border: `1px solid ${colorCombos.border.light}`, bgcolor: colorCombos.background.primary, overflowX: "auto" }}>
                        <Box sx={{ minWidth: 1100 }}>
                            <AgentFlowDiagram states={step.states} stage={step.stage} width={1100} height={380} />
                        </Box>
                    </Paper>

                    {/* Metrics */}
                    <GridLegacy container spacing={3} sx={{ mb: 4 }}>
                        <GridLegacy item xs={6} md={3}>
                            <Metric label="Elapsed" value={`${step.elapsedSec}s`} />
                        </GridLegacy>
                        <GridLegacy item xs={6} md={3}>
                            <Metric label="Subtasks complete" value={`${step.subtasksDone}/${TOTAL_SUBTASKS}`} />
                        </GridLegacy>
                        <GridLegacy item xs={6} md={3}>
                            <Metric label="Agents working" value={`${activeAgents}`} />
                        </GridLegacy>
                        <GridLegacy item xs={6} md={3}>
                            <Metric label="Review rejections" value={`${rejections}`} />
                        </GridLegacy>
                    </GridLegacy>

                    <GridLegacy container spacing={3}>
                        {/* Agent roster */}
                        <GridLegacy item xs={12} md={6}>
                            <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, color: colorCombos.text.title }}>
                                Agents
                            </Typography>
                            <Stack spacing={2}>
                                {agents.map((agent) => {
                                    const chip = stateChip[step.states[agent.id]];
                                    return (
                                        <Paper
                                            key={agent.id}
                                            sx={{ p: 2, bgcolor: colorCombos.background.primary, border: `1px solid ${colorCombos.border.light}` }}
                                        >
                                            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 0.5 }}>
                                                <Typography variant="h6" sx={{ fontWeight: 600, color: colorCombos.text.primary }}>
                                                    {agent.name}
                                                </Typography>
                                                <Chip
                                                    label={chip.label}
                                                    size="small"
                                                    sx={{ backgroundColor: chip.bg, color: chip.fg, fontWeight: 600 }}
                                                />
                                            </Box>
                                            <Typography variant="body2" sx={{ color: colorCombos.text.secondary_1 }}>
                                                {agent.role}
                                            </Typography>
                                        </Paper>
                                    );
                                })}
                            </Stack>
                        </GridLegacy>

                        {/* Activity log */}
                        <GridLegacy item xs={12} md={6}>
                            <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, color: colorCombos.text.title }}>
                                Orchestration Log
                            </Typography>
                            <Paper
                                sx={{
                                    p: 2,
                                    maxHeight: 420,
                                    overflowY: "auto",
                                    bgcolor: colorCombos.background.primary,
                                    border: `1px solid ${colorCombos.border.light}`,
                                }}
                            >
                                <Stack spacing={1.5}>
                                    {logEntries.map((entry) => (
                                        <Box key={entry.key} sx={{ display: "flex", gap: 1.5, alignItems: "flex-start" }}>
                                            <Box
                                                sx={{
                                                    mt: "6px",
                                                    width: 8,
                                                    height: 8,
                                                    borderRadius: "50%",
                                                    flexShrink: 0,
                                                    backgroundColor: logColor[entry.level],
                                                }}
                                            />
                                            <Typography variant="body2" sx={{ color: colorCombos.text.secondary_1 }}>
                                                {entry.message}
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
                            What This Pattern Solves
                        </Typography>
                        <Typography variant="body1" sx={{ color: colorCombos.text.secondary_1, mb: 2 }}>
                            Handing a whole feature to a single agent tends to fail quietly: the work is plausible but unverified.
                            Splitting the task changes that. A <strong>planner</strong> decomposes the request so independent work can run
                            in parallel, an <strong>explorer</strong> grounds the change in the real codebase before a line is written, and
                            a <strong>tester</strong> derives cases from the plan rather than from the implementation - so the tests
                            do not simply agree with whatever the implementer did.
                        </Typography>
                        <Typography variant="body1" sx={{ color: colorCombos.text.secondary_1, mb: 2 }}>
                            The <strong>review gate</strong> is the part that matters most. Nothing merges until it passes, and a rejection
                            sends the work back with feedback attached rather than escalating to a human. In the run above, the first diff
                            is rejected for an unhandled null on an empty result set, the implementer patches it, the suite re-runs, and only
                            then does the change integrate. That loop is what makes the throughput trustworthy instead of merely fast.
                        </Typography>
                        <Paper sx={{ p: 2, bgcolor: colorCombos.background.accent, border: `1px solid ${colorCombos.border.light}` }}>
                            <Typography variant="body2" sx={{ color: colorCombos.text.secondary_1 }}>
                                <strong>Note:</strong> this page runs a scripted simulation, not live model calls. The site is a static
                                export with no backend, so the timings and log lines are fixed in order to illustrate the orchestration
                                pattern. The workflow it depicts is the one used in real project work.
                            </Typography>
                        </Paper>
                    </Box>
                </Container>
            </Box>
        </>
    );
}
