"use client";
import * as React from "react";

type BarChartMiniProps = {
  data: number[];
  width?: number;
  height?: number;
  barColor?: string;
};

export default function BarChartMini({
  data,
  width = 180,
  height = 60,
  barColor = "#26a69a",
}: BarChartMiniProps) {
  if (!data.length) return null;
  const max = Math.max(...data) || 1;
  const barWidth = width / data.length;

  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} role="img" aria-label="mini bar chart">
      {data.map((v, i) => {
        const h = (v / max) * (height - 2);
        const x = i * barWidth;
        const y = height - h;
        return <rect key={i} x={x + 1} y={y} width={barWidth - 2} height={h} fill={barColor} rx={2} />;
      })}
    </svg>
  );
}
