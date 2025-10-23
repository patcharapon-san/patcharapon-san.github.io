"use client";

import React from "react";

export type EtlFlowDiagramProps = {
    width?: number;
    height?: number;
};

// Simple SVG-based ETL flow diagram
// Layout (left ➔ right):
// [ERP] [CRM] [Payments] [Inventory] [Support] ➔ [Azure Data Factory] ➔ [Azure Functions]
//                                                               ➘                ➔ [Azure SQL]
//                                                                ➔ [Blob Storage]
// Side: [Key Vault] (dashed to ADF/Func) and [App Insights] (dashed to Func/SQL)
export default function EtlFlowDiagram({ width = 1100, height = 460 }: EtlFlowDiagramProps) {
    const box = (x: number, y: number, w: number, h: number, fill: string, stroke = "#111", rx = 8) => (
        <rect x={x} y={y} width={w} height={h} fill={fill} stroke={stroke} strokeWidth={1.5} rx={rx} />
    );
    const label = (x: number, y: number, text: string, color = "#111", size = 14, weight = 600) => (
        <text x={x} y={y} fill={color} fontSize={size} fontWeight={weight} textAnchor="middle" dominantBaseline="middle">
            {text}
        </text>
    );
    const arrow = (
        x1: number,
        y1: number,
        x2: number,
        y2: number,
        color = "#555",
        dashed = false
    ) => (
        <g>
            <defs>
                <marker id="arrow" markerWidth="10" markerHeight="10" refX="10" refY="3" orient="auto" markerUnits="strokeWidth">
                    <path d="M0,0 L0,6 L9,3 z" fill={color} />
                </marker>
            </defs>
            <line
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke={color}
                strokeWidth={2}
                strokeDasharray={dashed ? "6,6" : undefined}
                markerEnd="url(#arrow)"
            />
        </g>
    );

    // Coordinates
    const spacingY = 80;
    const spacingX = 60;

    const leftX = 40;
    const srcW = 130;
    const srcH = 38;
    const srcGap = 14;
    const srcStartY = 40;

    const adfW = 200;
    const adfH = 60;
    const adfX = 300;
    const adfY = 100;

    const funcW = 220;
    const funcH = 60;
    const funcX = adfX + adfW + spacingX;
    const funcY = adfY;

    const blobW = 160;
    const blobH = 50;
    const blobX = funcX + funcW + spacingX;
    const blobY = funcY - 50;

    const sqlW = 160;
    const sqlH = 50;
    const sqlX = blobX;
    const sqlY = funcY + 50;

    const kvW = 140;
    const kvH = 44;
    const kvX = adfX + 30;
    const kvY = adfY + adfH + spacingY;

    const aiW = 160;
    const aiH = 44;
    const aiX = funcX + 30;
    const aiY = funcY + funcH + spacingY;

    // Alerts/Notifications box (client-agnostic)
    const alertW = 160;
    const alertH = 44;
    const alertX = blobX;
    const alertY = aiY;

    const sources = ["Ops Telemetry", "Asset Metrics", "Event History", "Model Outputs", "Curated Lake"];

    return (
        <svg width={width} height={height} role="img" aria-label="ETL process flow diagram">
            {/* Background */}
            <rect x={0} y={0} width={width} height={height} fill="#ffffff" />

            {/* Title */}
            <text x={width / 2} y={28} fontSize={18} fontWeight={700} fill="#0f172a" textAnchor="middle">
                End-to-End ETL Process Flow
            </text>

            {/* Sources */}
            {sources.map((s, i) => {
                const y = srcStartY + i * (srcH + srcGap);
                return (
                    <g key={s}>
                        {box(leftX, y, srcW, srcH, "#e3f2fd", "#1976d2")}
                        {label(leftX + srcW / 2, y + srcH / 2, s, "#0d47a1", 14)}
                        {arrow(leftX + srcW, y + srcH / 2, adfX, adfY + adfH / 2, "#1976d2")}
                    </g>
                );
            })}

            {/* Azure Data Factory */}
            {box(adfX, adfY, adfW, adfH, "#e3f2fd", "#1976d2")}
            {label(adfX + adfW / 2, adfY + adfH / 2 - 8, "Azure Data Factory", "#0d47a1")}
            <text x={adfX + adfW / 2} y={adfY + adfH / 2 + 12} fontSize={12} fill="#0d47a1" textAnchor="middle">
                Orchestrate & Ingest
            </text>

            {/* Azure Functions */}
            {box(funcX, funcY, funcW, funcH, "#fff3e0", "#ed6c02")}
            {label(funcX + funcW / 2, funcY + funcH / 2 - 8, "Azure Functions", "#e65100")}
            <text x={funcX + funcW / 2} y={funcY + funcH / 2 + 12} fontSize={12} fill="#e65100" textAnchor="middle">
                Transform & Validate
            </text>

            {/* Storage outputs */}
            {box(blobX, blobY, blobW, blobH, "#e8f5e9", "#2e7d32")}
            {label(blobX + blobW / 2, blobY + blobH / 2, "Azure Blob Storage", "#1b5e20", 13)}

            {box(sqlX, sqlY, sqlW, sqlH, "#e8f5e9", "#2e7d32")}
            {label(sqlX + sqlW / 2, sqlY + sqlH / 2, "Azure SQL Database", "#1b5e20", 13)}

            {/* Side services */}
            {box(kvX, kvY, kvW, kvH, "#ede7f6", "#5e35b1")}
            {label(kvX + kvW / 2, kvY + kvH / 2, "Azure Key Vault", "#4527a0", 12)}

            {box(aiX, aiY, aiW, aiH, "#f3e5f5", "#8e24aa")}
            {label(aiX + aiW / 2, aiY + aiH / 2, "Azure App Insights", "#6a1b9a", 12)}

            {/* Alerts & Notifications */}
            {box(alertX, alertY, alertW, alertH, "#fffde7", "#f9a825")}
            {label(alertX + alertW / 2, alertY + alertH / 2, "Alerts (Monitor / Email)", "#f57f17", 12)}

            {/* Arrows between main stages */}
            {arrow(adfX + adfW, adfY + adfH / 2, funcX, funcY + funcH / 2, "#555")}
            {arrow(funcX + funcW, funcY + funcH / 2, blobX, blobY + blobH / 2, "#2e7d32")}
            {arrow(funcX + funcW, funcY + funcH / 2, sqlX, sqlY + sqlH / 2, "#2e7d32")}

            {/* Dashed arrows for Key Vault & Insights */}
            {arrow(kvX + kvW / 2, kvY, adfX + (adfW / 2), adfY + adfH, "#5e35b1", true)}
            {arrow(kvX + kvW / 2, kvY, funcX, funcY + funcH, "#5e35b1", true)}
            {arrow(aiX + aiW / 2, aiY, funcX + (funcW / 2), funcY + funcH, "#8e24aa", true)}
            {arrow(aiX + aiW / 2, aiY, sqlX, sqlY + (sqlH/2), "#8e24aa", true)}
            {arrow(aiX + aiW, aiY + aiH / 2, alertX, alertY + alertH / 2, "#f9a825", true)}

            {/* Legend */}
            <g>
                <rect x={20} y={height - 100} width={width - 40} height={70} fill="#fafafa" stroke="#e0e0e0" rx={8} />
                <text x={40} y={height - 75} fontSize={12} fill="#111" fontWeight={700}>
                    Legend
                </text>
                <circle cx={120} cy={height - 50} r={6} fill="#1976d2" />
                <text x={135} y={height - 47} fontSize={12} fill="#374151">Ingestion / Orchestration</text>
                <circle cx={330} cy={height - 50} r={6} fill="#ed6c02" />
                <text x={345} y={height - 47} fontSize={12} fill="#374151">Transformation</text>
                <circle cx={510} cy={height - 50} r={6} fill="#2e7d32" />
                <text x={525} y={height - 47} fontSize={12} fill="#374151">Published Data Targets</text>
                <rect x={720} y={height - 56} width={24} height={10} fill="none" stroke="#9e9e9e" strokeDasharray="6,6" />
                <text x={750} y={height - 47} fontSize={12} fill="#374151">Observability, Secrets & Alerts</text>
            </g>
        </svg>
    );
}
