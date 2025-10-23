"use client";
import * as React from "react";

type PieChartDonutProps = {
  data: number[]; // values per segment
  width?: number;
  height?: number;
  thickness?: number; // stroke width
  colors?: string[];
  backgroundTrack?: string;
};

export default function PieChartDonut({
  data,
  width = 160,
  height = 160,
  thickness = 18,
  colors = ["#1976d2", "#2e7d32", "#ed6c02", "#9c27b0", "#26a69a"],
  backgroundTrack = "#e0e0e0",
}: PieChartDonutProps) {
  const total = data.reduce((a, b) => a + b, 0) || 1;
  const cx = width / 2;
  const cy = height / 2;
  const r = Math.min(width, height) / 2 - thickness / 2;
  const circumference = 2 * Math.PI * r;

  let offset = 0; // cumulative offset in units of circumference

  return (
    <svg width={width} height={height} role="img" aria-label="donut chart">
      {/* Background track */}
      <circle cx={cx} cy={cy} r={r} fill="none" stroke={backgroundTrack} strokeWidth={thickness} />
      {data.map((value, i) => {
        const portion = value / total;
        const dash = portion * circumference;
        const dashArray = `${dash} ${circumference - dash}`;
        const strokeDashoffset = -offset * circumference; // rotate segments along the circle
        const color = colors[i % colors.length];
        // Update offset AFTER computing
        offset += portion;
        return (
          <circle
            key={i}
            cx={cx}
            cy={cy}
            r={r}
            fill="none"
            stroke={color}
            strokeWidth={thickness}
            strokeDasharray={dashArray}
            strokeDashoffset={strokeDashoffset}
            transform={`rotate(-90 ${cx} ${cy})`}
            strokeLinecap="butt"
          />
        );
      })}
    </svg>
  );
}
