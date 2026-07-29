"use client";

import React from "react";
import { etlSources, type EtlNodeId, type EtlNodeState } from "@/data/etlRun";

export type EtlFlowDiagramProps = {
    states?: Partial<Record<EtlNodeId, EtlNodeState>>;
    width?: number;
    height?: number;
};

// SVG-based ETL flow diagram, driven by live run state.
// Layout (left -> right):
// [5 upstream sources] -> [Azure Data Factory] -> [Azure Functions] -> [Blob Storage]
//                                                                  -> [Azure SQL]
// Side services (dashed): [Key Vault], [App Insights], [Alerts]
//
// Node fill encodes state so a run can be watched stage by stage. Nodes default to
// "pending" (grey) when no state is supplied for them.

const palette: Record<EtlNodeState, { fill: string; stroke: string; text: string }> = {
    pending: { fill: "#f5f5f5", stroke: "#9e9e9e", text: "#616161" },
    running: { fill: "#e3f2fd", stroke: "#1976d2", text: "#0d47a1" },
    done: { fill: "#e8f5e9", stroke: "#2e7d32", text: "#1b5e20" },
    late: { fill: "#fff8e1", stroke: "#f9a825", text: "#f57f17" },
    failed: { fill: "#ffebee", stroke: "#d32f2f", text: "#b71c1c" },
    retrying: { fill: "#fff3e0", stroke: "#ed6c02", text: "#e65100" },
};

const ARROW_COLORS = ["#9e9e9e", "#1976d2", "#2e7d32", "#ed6c02", "#d32f2f", "#f9a825"] as const;
const markerId = (color: string) => `etlflow-arrow-${color.replace("#", "")}`;

// Arrow colour follows the state of the node the arrow feeds out of
const flowColor = (state: EtlNodeState): string => {
    switch (state) {
        case "done":
            return "#2e7d32";
        case "running":
            return "#1976d2";
        case "failed":
            return "#d32f2f";
        case "retrying":
            return "#ed6c02";
        case "late":
            return "#f9a825";
        default:
            return "#9e9e9e";
    }
};

export default function EtlFlowDiagram({ states = {}, width = 1100, height = 460 }: EtlFlowDiagramProps) {
    const stateOf = (id: EtlNodeId): EtlNodeState => states[id] ?? "pending";

    const node = (
        x: number,
        y: number,
        w: number,
        h: number,
        title: string,
        subtitle: string | null,
        state: EtlNodeState,
        titleSize = 14
    ) => {
        const c = palette[state];
        return (
            <g>
                <rect
                    x={x}
                    y={y}
                    width={w}
                    height={h}
                    fill={c.fill}
                    stroke={c.stroke}
                    strokeWidth={state === "pending" ? 1.5 : 2.5}
                    rx={8}
                />
                <text
                    x={x + w / 2}
                    y={subtitle ? y + h / 2 - 8 : y + h / 2}
                    fill={c.text}
                    fontSize={titleSize}
                    fontWeight={700}
                    textAnchor="middle"
                    dominantBaseline="middle"
                >
                    {title}
                </text>
                {subtitle && (
                    <text x={x + w / 2} y={y + h / 2 + 11} fill={c.text} fontSize={11} textAnchor="middle" dominantBaseline="middle">
                        {subtitle}
                    </text>
                )}
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
    const spacingX = 60;
    const leftX = 40;
    const srcW = 130;
    const srcH = 38;
    const srcGap = 14;
    const srcStartY = 50;

    const adfW = 200, adfH = 60, adfX = 300, adfY = 130;
    const funcW = 220, funcH = 60, funcX = adfX + adfW + spacingX, funcY = adfY;

    const blobW = 170, blobH = 50, blobX = funcX + funcW + spacingX, blobY = funcY - 55;
    const sqlW = 170, sqlH = 50, sqlX = blobX, sqlY = funcY + 55;

    const sideY = 330;
    const kvW = 150, kvH = 44, kvX = adfX + 25;
    const aiW = 170, aiH = 44, aiX = funcX + 25;
    const alertW = 170, alertH = 44, alertX = blobX;

    return (
        <svg width={width} height={height} role="img" aria-label="ETL pipeline run diagram">
            <defs>
                {ARROW_COLORS.map((color) => (
                    <marker key={color} id={markerId(color)} markerWidth="10" markerHeight="10" refX="10" refY="3" orient="auto" markerUnits="strokeWidth">
                        <path d="M0,0 L0,6 L9,3 z" fill={color} />
                    </marker>
                ))}
            </defs>

            <rect x={0} y={0} width={width} height={height} fill="#ffffff" />

            <text x={width / 2} y={28} fontSize={18} fontWeight={700} fill="#0f172a" textAnchor="middle">
                End-to-End ETL Pipeline Run
            </text>

            {/* Upstream sources */}
            {etlSources.map((s, i) => {
                const y = srcStartY + i * (srcH + srcGap);
                const state = stateOf(s.id);
                return (
                    <g key={s.id}>
                        {node(leftX, y, srcW, srcH, s.label, null, state, 12)}
                        {arrow(leftX + srcW, y + srcH / 2, adfX, adfY + adfH / 2, flowColor(state))}
                    </g>
                );
            })}

            {/* Orchestration and transform */}
            {node(adfX, adfY, adfW, adfH, "Azure Data Factory", "orchestrate & ingest", stateOf("adf"))}
            {node(funcX, funcY, funcW, funcH, "Azure Functions", "transform & validate", stateOf("func"))}
            {arrow(adfX + adfW, adfY + adfH / 2, funcX, funcY + funcH / 2, flowColor(stateOf("adf")))}

            {/* Published targets */}
            {node(blobX, blobY, blobW, blobH, "Azure Blob Storage", null, stateOf("blob"), 13)}
            {node(sqlX, sqlY, sqlW, sqlH, "Azure SQL Database", null, stateOf("sql"), 13)}
            {arrow(funcX + funcW, funcY + funcH / 2, blobX, blobY + blobH / 2, flowColor(stateOf("func")))}
            {arrow(funcX + funcW, funcY + funcH / 2, sqlX, sqlY + sqlH / 2, flowColor(stateOf("func")))}

            {/* Side services */}
            {node(kvX, sideY, kvW, kvH, "Azure Key Vault", null, stateOf("keyvault"), 12)}
            {node(aiX, sideY, aiW, aiH, "App Insights", null, stateOf("insights"), 12)}
            {node(alertX, sideY, alertW, alertH, "Alerts (Monitor / Email)", null, stateOf("alerts"), 11)}

            {arrow(kvX + kvW / 2, sideY, adfX + adfW / 2, adfY + adfH, flowColor(stateOf("keyvault")), true)}
            {arrow(aiX + aiW / 2, sideY, funcX + funcW / 2, funcY + funcH, flowColor(stateOf("insights")), true)}
            {arrow(aiX + aiW, sideY + aiH / 2, alertX, sideY + alertH / 2, flowColor(stateOf("alerts")), true)}
        </svg>
    );
}
