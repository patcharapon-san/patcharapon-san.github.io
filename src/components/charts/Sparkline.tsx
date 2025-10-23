"use client";
import * as React from "react";

type SparklineProps = {
  data: number[];
  width?: number;
  height?: number;
  stroke?: string;
  fill?: string;
  strokeWidth?: number;
};

export default function Sparkline({
  data,
  width = 140,
  height = 40,
  stroke = "#3f51b5",
  fill = "transparent",
  strokeWidth = 2,
}: SparklineProps) {
  if (!data.length) return null;
  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min || 1;
  const stepX = width / (data.length - 1);
  const points = data
    .map((d, i) => {
      const x = i * stepX;
      const y = height - ((d - min) / range) * height;
      return `${x},${y}`;
    })
    .join(" ");

  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} role="img" aria-label="sparkline">
      <polyline
        fill={fill}
        stroke={stroke}
        strokeWidth={strokeWidth}
        points={points}
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  );
}
