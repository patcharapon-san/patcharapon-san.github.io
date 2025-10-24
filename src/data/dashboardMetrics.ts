// Dashboard demo data - System performance metrics over 30 days
// This data shows realistic trends of improving system performance over time

export interface SystemMetricsData {
  activeConnections: number[];
  throughputPerMin: number[];
  responseTime: number[];
  successRate: number[];
  errorCount: number[];
}

// Static data table for multi-line chart - 30 days of historical metrics
// Data shows realistic trends: improving performance over time
export const SYSTEM_METRICS_DATA: SystemMetricsData = {
  // Active connections trending upward (120 → 198)
  activeConnections: [
    120, 125, 130, 128, 135, 140, 138, 142, 145, 148, 
    150, 155, 152, 158, 160, 162, 165, 168, 170, 172,
    175, 178, 180, 182, 185, 188, 190, 192, 195, 198
  ],
  // Throughput increasing steadily (850 → 1005)
  throughputPerMin: [
    850, 860, 870, 865, 880, 890, 885, 895, 900, 905,
    910, 920, 915, 925, 930, 935, 940, 945, 950, 955,
    960, 965, 970, 975, 980, 985, 990, 995, 1000, 1005
  ],
  // Response time improving (125 → 45 ms)
  responseTime: [
    125, 120, 115, 118, 110, 105, 108, 102, 98, 95,
    92, 88, 90, 85, 82, 80, 78, 75, 72, 70,
    68, 65, 62, 60, 58, 55, 52, 50, 48, 45
  ],
  // Success rate trending toward 100%
  successRate: [
    96, 97, 98, 97.5, 98.2, 98.5, 98.8, 99, 98.7, 99.2,
    99.5, 99.3, 99.6, 99.8, 99.5, 99.7, 99.9, 99.6, 99.8, 100,
    99.9, 99.7, 99.8, 100, 99.9, 99.8, 100, 99.9, 100, 99.8
  ],
  // Error count decreasing (15 → ~0-1)
  errorCount: [
    15, 12, 8, 10, 6, 4, 5, 2, 3, 1,
    0, 1, 0, 0, 1, 0, 0, 1, 0, 0,
    0, 1, 0, 0, 0, 1, 0, 0, 0, 1
  ]
};

// Helper function to generate date labels for the last N days
export function generateDateLabels(days: number = 30): string[] {
  return Array.from({ length: days }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() - (days - 1 - i));
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  });
}