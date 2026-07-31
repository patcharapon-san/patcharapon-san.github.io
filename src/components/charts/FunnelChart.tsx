"use client";

import React from "react";
import type { StageId } from "@/data/ecommerceFunnel";

export type FunnelChartProps = {
    stages: { id: StageId; label: string; note: string }[];
    counts: Record<StageId, number>;
    width?: number;
    height?: number;
};

// Centred horizontal bars, widest at the top: label on the left, bar in the middle,
// count and step conversion on the right. Bars are scaled against the first visible
// stage so the funnel still reads correctly when a role only sees part of it.

const BAR_FILLS = ["#1976d2", "#1e88e5", "#26a69a", "#43a047", "#66bb6a", "#7cb342", "#9ccc65"];

const ROW_H = 54;
const LABEL_W = 190;
const COUNT_W = 150;

export default function FunnelChart({ stages, counts, width = 900 }: FunnelChartProps) {
    const height = stages.length * ROW_H + 24;
    const barArea = width - LABEL_W - COUNT_W;
    const top = stages[0] ? counts[stages[0].id] : 0;
    const scaleMax = Math.max(top, 1);

    return (
        <svg width={width} height={height} role="img" aria-label="Comment-to-order conversion funnel">
            <rect x={0} y={0} width={width} height={height} fill="#ffffff" />

            {stages.map((stage, i) => {
                const count = counts[stage.id];
                const prev = i > 0 ? counts[stages[i - 1].id] : null;
                const retained = prev && prev > 0 ? Math.round((count / prev) * 100) : null;
                const barW = Math.max(4, (count / scaleMax) * barArea);
                const y = 12 + i * ROW_H;
                const barY = y + 8;
                const barH = ROW_H - 22;
                const x = LABEL_W + (barArea - barW) / 2;

                return (
                    <g key={stage.id}>
                        <text x={8} y={barY + barH / 2 - 5} fontSize={13} fontWeight={700} fill="#0f172a" dominantBaseline="middle">
                            {stage.label}
                        </text>
                        <text x={8} y={barY + barH / 2 + 10} fontSize={10} fill="#6b7280" dominantBaseline="middle">
                            {stage.note.length > 34 ? `${stage.note.slice(0, 33)}…` : stage.note}
                        </text>

                        <rect x={x} y={barY} width={barW} height={barH} fill={BAR_FILLS[i % BAR_FILLS.length]} rx={4} />

                        <text
                            x={width - COUNT_W + 12}
                            y={barY + barH / 2 - 5}
                            fontSize={15}
                            fontWeight={700}
                            fill="#0f172a"
                            dominantBaseline="middle"
                        >
                            {count.toLocaleString()}
                        </text>
                        {retained !== null && (
                            <text x={width - COUNT_W + 12} y={barY + barH / 2 + 11} fontSize={11} fill="#6b7280" dominantBaseline="middle">
                                {`${retained}% of previous`}
                            </text>
                        )}
                    </g>
                );
            })}
        </svg>
    );
}
