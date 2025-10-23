"use client";
import * as React from "react";

type Point = { x: number; y: number };

type ScatterPlotMiniProps = {
  points: Point[];
  width?: number;
  height?: number;
  pointRadius?: number;
  pointColor?: string;
  padding?: number; // inner padding for axes boundaries
};

export default function ScatterPlotMini({
  points,
  width = 260,
  height = 160,
  pointRadius = 3,
  pointColor = "#1976d2",
  padding = 10,
}: ScatterPlotMiniProps) {
  if (!points.length) return null;
  const xs = points.map((p) => p.x);
  const ys = points.map((p) => p.y);
  const minX = Math.min(...xs);
  const maxX = Math.max(...xs);
  const minY = Math.min(...ys);
  const maxY = Math.max(...ys);
  const xRange = maxX - minX || 1;
  const yRange = maxY - minY || 1;

  const innerW = width - padding * 2;
  const innerH = height - padding * 2;

  const sx = (x: number) => padding + ((x - minX) / xRange) * innerW;
  const sy = (y: number) => height - padding - ((y - minY) / yRange) * innerH;

  return (
    <svg width={width} height={height} role="img" aria-label="scatter plot">
      {/* Axes (minimal) */}
      <line x1={padding} y1={height - padding} x2={width - padding} y2={height - padding} stroke="#ccc" strokeWidth={1} />
      <line x1={padding} y1={padding} x2={padding} y2={height - padding} stroke="#ccc" strokeWidth={1} />

      {/* Points */}
      {points.map((p, i) => (
        <circle key={i} cx={sx(p.x)} cy={sy(p.y)} r={pointRadius} fill={pointColor} />
      ))}
    </svg>
  );
}
