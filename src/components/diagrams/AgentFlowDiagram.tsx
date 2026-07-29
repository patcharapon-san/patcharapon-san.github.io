"use client";

import React from "react";
import type { AgentId, AgentState, StageId } from "@/data/agentWorkflow";

export type AgentFlowDiagramProps = {
    states: Record<AgentId, AgentState>;
    stage: StageId;
    width?: number;
    height?: number;
};

// SVG orchestration diagram. Layout (left -> right):
// [Task] -> [Planner] -> [Explorer / Implementer / Tester] -> [Review Gate] -> [Integrate]
// with a feedback path from the review gate back to the Implementer (the retry loop).
// Node fills are driven by live agent state so the diagram animates with the run.

const palette: Record<AgentState, { fill: string; stroke: string; text: string }> = {
    idle: { fill: "#f5f5f5", stroke: "#9e9e9e", text: "#616161" },
    running: { fill: "#e3f2fd", stroke: "#1976d2", text: "#0d47a1" },
    done: { fill: "#e8f5e9", stroke: "#2e7d32", text: "#1b5e20" },
    retry: { fill: "#fff3e0", stroke: "#ed6c02", text: "#e65100" },
    blocked: { fill: "#ffebee", stroke: "#d32f2f", text: "#b71c1c" },
};

const ARROW_COLORS = ["#9e9e9e", "#1976d2", "#2e7d32", "#ed6c02"] as const;
const markerId = (color: string) => `agentflow-arrow-${color.replace("#", "")}`;

export default function AgentFlowDiagram({ states, stage, width = 1100, height = 380 }: AgentFlowDiagramProps) {
    const stageIndex = ["intake", "plan", "execute", "review", "integrate"].indexOf(stage);

    const node = (x: number, y: number, w: number, h: number, title: string, subtitle: string, state: AgentState) => {
        const c = palette[state];
        return (
            <g>
                <rect x={x} y={y} width={w} height={h} fill={c.fill} stroke={c.stroke} strokeWidth={state === "idle" ? 1.5 : 2.5} rx={8} />
                <text x={x + w / 2} y={y + h / 2 - 7} fill={c.text} fontSize={14} fontWeight={700} textAnchor="middle" dominantBaseline="middle">
                    {title}
                </text>
                <text x={x + w / 2} y={y + h / 2 + 11} fill={c.text} fontSize={11} textAnchor="middle" dominantBaseline="middle">
                    {subtitle}
                </text>
            </g>
        );
    };

    const arrow = (x1: number, y1: number, x2: number, y2: number, color: string, dashed = false) => (
        <line
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke={color}
            strokeWidth={2}
            strokeDasharray={dashed ? "6,6" : undefined}
            markerEnd={`url(#${markerId(color)})`}
        />
    );

    // Coordinates
    const rowY = 168;
    const boxH = 52;
    const midY = rowY + boxH / 2;

    const taskX = 30, taskW = 110;
    const planX = 190, planW = 150;
    const workX = 400, workW = 190;
    const revX = 670, revW = 150;
    const intX = 890, intW = 170;

    const explorerY = 86;
    const implementerY = rowY;
    const testerY = 250;

    const taskState: AgentState = stageIndex <= 0 ? "running" : "done";
    const integrateState: AgentState = stage === "integrate" ? "done" : "idle";

    // The retry path only lights up once a rejection has actually happened
    const retryActive = states.implementer === "retry" || states.reviewer === "blocked";
    const retryColor = retryActive ? "#ed6c02" : "#9e9e9e";

    const workerLine = (y: number, id: AgentId) => {
        const active = states[id] === "running";
        const color = active ? "#1976d2" : states[id] === "done" ? "#2e7d32" : "#9e9e9e";
        return (
            <g key={id}>
                {arrow(planX + planW, midY, workX, y + boxH / 2, color)}
                {arrow(workX + workW, y + boxH / 2, revX, midY, color)}
            </g>
        );
    };

    return (
        <svg width={width} height={height} role="img" aria-label="Multi-agent workflow orchestration diagram">
            <defs>
                {ARROW_COLORS.map((color) => (
                    <marker
                        key={color}
                        id={markerId(color)}
                        markerWidth="10"
                        markerHeight="10"
                        refX="10"
                        refY="3"
                        orient="auto"
                        markerUnits="strokeWidth"
                    >
                        <path d="M0,0 L0,6 L9,3 z" fill={color} />
                    </marker>
                ))}
            </defs>

            <rect x={0} y={0} width={width} height={height} fill="#ffffff" />

            <text x={width / 2} y={28} fontSize={18} fontWeight={700} fill="#0f172a" textAnchor="middle">
                Multi-Agent Task Orchestration
            </text>

            {/* Task intake */}
            {node(taskX, rowY, taskW, boxH, "Task", "user request", taskState)}
            {arrow(taskX + taskW, midY, planX, midY, stageIndex >= 1 ? "#2e7d32" : "#9e9e9e")}

            {/* Planner */}
            {node(planX, rowY, planW, boxH, "Planner", "decompose", states.planner)}

            {/* Parallel workers */}
            {workerLine(explorerY, "explorer")}
            {workerLine(implementerY, "implementer")}
            {workerLine(testerY, "tester")}

            {node(workX, explorerY, workW, boxH, "Explorer", "map the codebase", states.explorer)}
            {node(workX, implementerY, workW, boxH, "Implementer", "write the diff", states.implementer)}
            {node(workX, testerY, workW, boxH, "Tester", "generate + run cases", states.tester)}

            {/* Review gate */}
            {node(revX, rowY, revW, boxH, "Review Gate", "approve or reject", states.reviewer)}
            {arrow(revX + revW, midY, intX, midY, stage === "integrate" ? "#2e7d32" : "#9e9e9e")}

            {/* Integrate */}
            {node(intX, rowY, intW, boxH, "Integrate", "merge to branch", integrateState)}

            {/* Retry feedback loop: review gate -> back to implementer */}
            <path
                d={`M ${revX + revW / 2} ${rowY + boxH} L ${revX + revW / 2} 332 L ${workX + workW / 2} 332 L ${workX + workW / 2} ${implementerY + boxH}`}
                fill="none"
                stroke={retryColor}
                strokeWidth={2}
                strokeDasharray="6,6"
                markerEnd={`url(#${markerId(retryColor)})`}
            />
            <text
                x={(revX + revW / 2 + workX + workW / 2) / 2}
                y={324}
                fontSize={12}
                fontWeight={retryActive ? 700 : 500}
                fill={retryColor}
                textAnchor="middle"
            >
                rejected - retry with feedback
            </text>
        </svg>
    );
}
