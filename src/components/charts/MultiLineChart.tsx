"use client";
import * as React from "react";
import { Box, Stack, Typography } from "@mui/material";

type DataSeries = {
  label: string;
  data: number[];
  color: string;
};

type MultiLineChartProps = {
  series: DataSeries[];
  width?: number;
  height?: number;
  strokeWidth?: number;
  showGrid?: boolean;
  showLabels?: boolean;
  gridColor?: string;
  xAxisLabels?: string[];
};

export default function MultiLineChart({
  series,
  width = 600,
  height = 300,
  strokeWidth = 2,
  showGrid = true,
  showLabels = true,
  gridColor = "#e0e0e0",
  xAxisLabels = [],
}: MultiLineChartProps) {
  if (!series.length || !series[0]?.data.length) return null;

  const padding = { top: 20, right: 20, bottom: showLabels ? 40 : 20, left: 60 };
  const chartWidth = width - padding.left - padding.right;
  const chartHeight = height - padding.top - padding.bottom;
  
  // Get all data points to calculate global min/max
  const allData = series.flatMap(s => s.data);
  const globalMin = Math.min(...allData);
  const globalMax = Math.max(...allData);
  const range = globalMax - globalMin || 1;
  
  const dataLength = series[0].data.length;
  const stepX = chartWidth / (dataLength - 1);

  // Generate grid lines
  const gridLines = [];
  const gridLinesCount = 5;
  
  if (showGrid) {
    // Horizontal grid lines
    for (let i = 0; i <= gridLinesCount; i++) {
      const y = padding.top + (i * chartHeight) / gridLinesCount;
      gridLines.push(
        <line
          key={`h-grid-${i}`}
          x1={padding.left}
          y1={y}
          x2={padding.left + chartWidth}
          y2={y}
          stroke={gridColor}
          strokeWidth={0.5}
          opacity={0.5}
        />
      );
    }
    
    // Vertical grid lines
    for (let i = 0; i < dataLength; i += Math.max(1, Math.floor(dataLength / 8))) {
      const x = padding.left + i * stepX;
      gridLines.push(
        <line
          key={`v-grid-${i}`}
          x1={x}
          y1={padding.top}
          x2={x}
          y2={padding.top + chartHeight}
          stroke={gridColor}
          strokeWidth={0.5}
          opacity={0.3}
        />
      );
    }
  }

  // Generate Y-axis labels
  const yAxisLabels = [];
  if (showLabels) {
    for (let i = 0; i <= gridLinesCount; i++) {
      const y = padding.top + (i * chartHeight) / gridLinesCount;
      const value = globalMax - (i * range) / gridLinesCount;
      yAxisLabels.push(
        <text
          key={`y-label-${i}`}
          x={padding.left - 10}
          y={y + 4}
          textAnchor="end"
          fontSize="10"
          fill="#666"
        >
          {Math.round(value).toLocaleString()}
        </text>
      );
    }
  }

  // Generate X-axis labels
  const xAxisLabelsElements = [];
  if (showLabels && xAxisLabels.length > 0) {
    const labelStep = Math.max(1, Math.floor(dataLength / 8));
    for (let i = 0; i < dataLength; i += labelStep) {
      if (i < xAxisLabels.length) {
        const x = padding.left + i * stepX;
        xAxisLabelsElements.push(
          <text
            key={`x-label-${i}`}
            x={x}
            y={height - 5}
            textAnchor="middle"
            fontSize="10"
            fill="#666"
          >
            {xAxisLabels[i]}
          </text>
        );
      }
    }
  }

  return (
    <Box>
      <svg 
        width={width} 
        height={height} 
        viewBox={`0 0 ${width} ${height}`} 
        role="img" 
        aria-label="multi-line chart"
      >
        {/* Grid lines */}
        {gridLines}
        
        {/* Chart border */}
        <rect
          x={padding.left}
          y={padding.top}
          width={chartWidth}
          height={chartHeight}
          fill="none"
          stroke={gridColor}
          strokeWidth={1}
        />
        
        {/* Y-axis labels */}
        {yAxisLabels}
        
        {/* X-axis labels */}
        {xAxisLabelsElements}
        
        {/* Data series */}
        {series.map((seriesData, seriesIndex) => {
          const points = seriesData.data
            .map((d, i) => {
              const x = padding.left + i * stepX;
              const y = padding.top + chartHeight - ((d - globalMin) / range) * chartHeight;
              return `${x},${y}`;
            })
            .join(" ");

          return (
            <g key={seriesIndex}>
              <polyline
                fill="none"
                stroke={seriesData.color}
                strokeWidth={strokeWidth}
                points={points}
                strokeLinejoin="round"
                strokeLinecap="round"
              />
              {/* Data points */}
              {seriesData.data.map((d, i) => {
                const x = padding.left + i * stepX;
                const y = padding.top + chartHeight - ((d - globalMin) / range) * chartHeight;
                return (
                  <circle
                    key={`point-${seriesIndex}-${i}`}
                    cx={x}
                    cy={y}
                    r={2}
                    fill={seriesData.color}
                  />
                );
              })}
            </g>
          );
        })}
      </svg>
      
      {/* Legend */}
      {showLabels && (
        <Stack direction="row" justifyContent="center" spacing={2.5} sx={{ mt: 1, flexWrap: 'wrap' }}>
          {series.map((seriesData, index) => (
            <Stack key={index} direction="row" alignItems="center" spacing={0.5}>
              <Box
                sx={{
                  width: 12,
                  height: 12,
                  backgroundColor: seriesData.color,
                  borderRadius: 0.5
                }}
              />
              <Typography variant="caption" sx={{ color: '#666', fontSize: '12px' }}>
                {seriesData.label}
              </Typography>
            </Stack>
          ))}
        </Stack>
      )}
    </Box>
  );
}