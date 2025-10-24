"use client";
import { useEffect, useState } from "react";
import HeroSection from "@/components/HeroSection";
import { Box, Container, Paper, Stack, Typography, Chip, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import GridLegacy from "@mui/material/GridLegacy";
import Sparkline from "@/components/charts/Sparkline";
import BarChartMini from "@/components/charts/BarChartMini";
import PieChartDonut from "@/components/charts/PieChartDonut";
import ScatterPlotMini from "@/components/charts/ScatterPlotMini";
import MultiLineChart from "@/components/charts/MultiLineChart";
import { colorCombos } from "@/utils/colors";
import { SYSTEM_METRICS_DATA, generateDateLabels } from "@/data/dashboardMetrics";
import { CheckCircle, ErrorOutline, Timeline, People, CloudQueue, Http } from "@mui/icons-material";

// Lightweight mock generators
function randInt(min: number, max: number) { return Math.floor(Math.random() * (max - min + 1)) + min; }
function shiftAndPush(arr: number[], next: number, maxLen = 24) { const a = arr.slice(1).concat(next); return a.slice(-maxLen); }

export default function DashboardDemo() {
  // KPIs and timeseries
  const [usersOnline, setUsersOnline] = useState(128);
  const [eventsPerMin, setEventsPerMin] = useState(860);
  const [apiLatencyMs, setApiLatencyMs] = useState(120);
  const [batchSuccess, setBatchSuccess] = useState(98);

  const [usersSeries, setUsersSeries] = useState<number[]>(Array.from({ length: 24 }, () => randInt(80, 160)));
  const [eventsSeries, setEventsSeries] = useState<number[]>(Array.from({ length: 24 }, () => randInt(600, 1000)));
  const [latencySeries, setLatencySeries] = useState<number[]>(Array.from({ length: 24 }, () => randInt(90, 180)));

  // Generate month labels for x-axis
  const monthLabels = generateDateLabels(30);

  // Extra visuals: pie breakdown and scatter relation
  const [pieData, setPieData] = useState<number[]>([50, 30, 20]); // e.g., Users/System/API share
  type Pt = { x: number; y: number };
  const [scatterPoints, setScatterPoints] = useState<Pt[]>(() =>
    Array.from({ length: 24 }, (_, i) => ({ x: 80 + i * 2, y: 100 + randInt(-20, 20) }))
  );

  // Derived metrics that correlate with pie chart and scatter plot
  const [derivedMetrics, setDerivedMetrics] = useState({
    userTrafficLoad: 50, // Correlates with pie chart user percentage
    systemLoad: 30, // Correlates with pie chart system percentage  
    apiLoad: 20, // Correlates with pie chart API percentage
    performanceIndex: Math.round((128 / 120) * 100), // Correlates with scatter plot relationship
  });

  type ActivityRow = { time: string; type: "info" | "warn" | "error"; message: string };
  const [activity, setActivity] = useState<ActivityRow[]>([
    { time: "10:02:11", type: "info", message: "User login success (john.doe)" },
    { time: "10:03:45", type: "warn", message: "Batch JOB-342 delay detected (2m)" },
    { time: "10:05:20", type: "info", message: "API /orders processed 412 reqs" },
    { time: "10:07:03", type: "error", message: "API /payments timeout spike (latency > 2s)" },
  ]);

  useEffect(() => {
    const id = setInterval(() => {
      const nextUsers = usersOnline + randInt(-5, 5);
      const nextEvents = eventsPerMin + randInt(-40, 40);
      const nextLatency = Math.max(60, apiLatencyMs + randInt(-10, 10));
      const nextBatch = Math.max(90, Math.min(100, batchSuccess + randInt(-1, 1)));

      setUsersOnline(Math.max(50, nextUsers));
      setEventsPerMin(Math.max(200, nextEvents));
      setApiLatencyMs(nextLatency);
      setBatchSuccess(nextBatch);

      setUsersSeries((s) => shiftAndPush(s, nextUsers));
      setEventsSeries((s) => shiftAndPush(s, nextEvents));
      setLatencySeries((s) => shiftAndPush(s, nextLatency));

  // Update pie (normalize three positive slices totalling ~100)
  const a = Math.max(10, 40 + randInt(-10, 10));
  const b = Math.max(10, 35 + randInt(-10, 10));
  const c = Math.max(10, 25 + randInt(-10, 10));
  const sum = a + b + c;
  const newPieData = [Math.round((a / sum) * 100), Math.round((b / sum) * 100), Math.round((c / sum) * 100)];
  setPieData(newPieData);

  // Update derived metrics based on current KPIs and pie data
  setDerivedMetrics({
    userTrafficLoad: newPieData[0],
    systemLoad: newPieData[1],
    apiLoad: newPieData[2],
    performanceIndex: Math.round((nextUsers / nextLatency) * 100),
  });

  // Update scatter with latest relation users vs latency
  const nextPoint = { x: Math.max(50, nextUsers), y: nextLatency + randInt(-8, 8) };
  setScatterPoints((pts) => (pts.concat(nextPoint)).slice(-50));

      // Occasionally append an activity row
      if (Math.random() < 0.35) {
        const kinds: ActivityRow["type"][] = ["info", "warn", "error"];
        const kind = kinds[randInt(0, kinds.length - 1)];
        const now = new Date();
        const t = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
        const msgMap = {
          info: [`API /search processed ${randInt(100, 600)} reqs`, `Cache warmed for /products`, `User logout (jane.smith)`],
          warn: [`Batch JOB-${randInt(100,999)} slow (1-3m)`, `High memory on worker-${randInt(1,4)}`],
          error: [`API /payments timeout`, `DB connection retry exceeded on shard-${randInt(1,3)}`],
        } as const;
        const message = msgMap[kind][randInt(0, msgMap[kind].length - 1)];
        setActivity((rows) => [{ time: t, type: kind, message }, ...rows].slice(0, 10));
      }
    }, 2000);
    return () => clearInterval(id);
  }, [usersOnline, eventsPerMin, apiLatencyMs, batchSuccess]);

  return (
    <>
      <HeroSection
        title="Monitoring Dashboard Demo"
        subtitle="Realtime-ish KPIs, mini charts and activity stream using mock data."
        sx={{ backgroundImage: 'url(/work-station-5.jpg)', backgroundSize: 'cover' }}
        textAlign="center"
      />

      <Box sx={{ py: 6, bgcolor: colorCombos.background.primary }}>
        <Container>
          {/* KPI Cards */}
          <GridLegacy container spacing={3} sx={{ mb: 3 }}>
            {[
              { label: 'Users Online', value: usersOnline.toLocaleString(), icon: <People color="primary" />, series: usersSeries, color: colorCombos.button.primary.background },
              { label: 'Events / min', value: eventsPerMin.toLocaleString(), icon: <Timeline color="primary" />, series: eventsSeries, color: colorCombos.button.success.background },
              { label: 'API Latency (ms)', value: apiLatencyMs.toString(), icon: <Http color="primary" />, series: latencySeries, color: colorCombos.button.warning.background },
              { label: 'Batch Success (%)', value: `${batchSuccess}%`, icon: <CheckCircle color="primary" />, series: eventsSeries, color: colorCombos.button.secondary.text },
            ].map((kpi, i) => (
              <GridLegacy key={i} item xs={12} md={6} lg={3}>
                <Paper sx={{ p: 2.5, border: `1px solid ${colorCombos.border.light}`, bgcolor: colorCombos.background.primary }}>
                  <Stack direction="row" justifyContent="space-between" alignItems="center">
                    <Box>
                      <Typography variant="overline" sx={{ color: colorCombos.text.secondary_1 }}>{kpi.label}</Typography>
                      <Typography variant="h4" sx={{ fontWeight: 700, color: colorCombos.text.title }}>{kpi.value}</Typography>
                    </Box>
                    <Box>{kpi.icon}</Box>
                  </Stack>
                  <Box sx={{ mt: 1 }}>
                    <Sparkline data={kpi.series} stroke={kpi.color} />
                  </Box>
                </Paper>
              </GridLegacy>
            ))}
          </GridLegacy>

          {/* Charts Row */}
          <GridLegacy container spacing={3} sx={{ mb: 3 }}>
            <GridLegacy item xs={12}>
              <Paper sx={{ p: 3, border: `1px solid ${colorCombos.border.light}`, bgcolor: colorCombos.background.primary }}>
                <Typography variant="h6" sx={{ fontWeight: 600, color: colorCombos.text.title, mb: 1 }}>System Performance Metrics (30 Days)</Typography>
                <Typography variant="body2" sx={{ color: colorCombos.text.secondary_1, mb: 2 }}>
                  Historical performance trends showing Active Connections, Throughput, Response Time, Success Rate, and Error Count over the past month
                </Typography>
                <MultiLineChart
                  series={[
                    { label: 'Active Connections', data: SYSTEM_METRICS_DATA.activeConnections, color: colorCombos.button.primary.background },
                    { label: 'Throughput/Min', data: SYSTEM_METRICS_DATA.throughputPerMin, color: colorCombos.button.success.background },
                    { label: 'Response Time (ms)', data: SYSTEM_METRICS_DATA.responseTime, color: colorCombos.button.warning.background },
                    { label: 'Success Rate (%)', data: SYSTEM_METRICS_DATA.successRate, color: colorCombos.button.secondary.text },
                    { label: 'Error Count', data: SYSTEM_METRICS_DATA.errorCount, color: '#e91e63' },
                  ]}
                  width={800}
                  height={350}
                  xAxisLabels={monthLabels}
                  gridColor={colorCombos.border.light}
                />
              </Paper>
            </GridLegacy>
          </GridLegacy>

          {/* Secondary Charts Row */}
          <GridLegacy container spacing={3} sx={{ mb: 3 }}>
            <GridLegacy item xs={12} md={8}>
              <Paper sx={{ p: 3, border: `1px solid ${colorCombos.border.light}`, bgcolor: colorCombos.background.primary }}>
                <Typography variant="h6" sx={{ fontWeight: 600, color: colorCombos.text.title, mb: 1 }}>Requests per Minute (last 24 ticks)</Typography>
                <BarChartMini data={eventsSeries} barColor={colorCombos.button.success.background} />
              </Paper>
            </GridLegacy>
            <GridLegacy item xs={12} md={4}>
              <Paper sx={{ p: 3, border: `1px solid ${colorCombos.border.light}`, bgcolor: colorCombos.background.primary }}>
                <Typography variant="h6" sx={{ fontWeight: 600, color: colorCombos.text.title, mb: 1 }}>System Status</Typography>
                <Stack spacing={1}>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <CheckCircle sx={{ color: colorCombos.button.success.background }} />
                    <Typography sx={{ color: colorCombos.text.secondary_1 }}>All services healthy</Typography>
                  </Stack>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <CloudQueue sx={{ color: colorCombos.button.secondary.text }} />
                    <Typography sx={{ color: colorCombos.text.secondary_1 }}>Queue depth normal</Typography>
                  </Stack>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <ErrorOutline sx={{ color: colorCombos.button.warning.background }} />
                    <Typography sx={{ color: colorCombos.text.secondary_1 }}>2 degraded endpoints</Typography>
                  </Stack>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <Timeline sx={{ color: colorCombos.button.primary.background }} />
                    <Typography sx={{ color: colorCombos.text.secondary_1 }}>
                      Perf Index: {derivedMetrics.performanceIndex}
                    </Typography>
                  </Stack>
                </Stack>
              </Paper>
            </GridLegacy>
          </GridLegacy>

          {/* Additional Charts Row: Pie & Scatter */}
          <GridLegacy container spacing={3} sx={{ mb: 3 }}>
            <GridLegacy item xs={12} md={4}>
              <Paper sx={{ p: 3, border: `1px solid ${colorCombos.border.light}`, bgcolor: colorCombos.background.primary, textAlign: 'center' }}>
                <Typography variant="h6" sx={{ fontWeight: 600, color: colorCombos.text.title, mb: 1 }}>Traffic Distribution</Typography>
                <Typography variant="body2" sx={{ color: colorCombos.text.secondary_1, mb: 2 }}>
                  Current load breakdown (Users/System/API) - these percentages influence throughput patterns in the performance chart
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                  <PieChartDonut data={pieData} width={200} height={200} thickness={20} colors={[colorCombos.button.primary.background, colorCombos.button.success.background, colorCombos.button.warning.background]} />
                </Box>
                <Stack direction="row" spacing={1} justifyContent="center" sx={{ mt: 2 }}>
                  <Chip label={`Users ${pieData[0]}%`} size="small" />
                  <Chip label={`System ${pieData[1]}%`} size="small" />
                  <Chip label={`API ${pieData[2]}%`} size="small" />
                </Stack>
              </Paper>
            </GridLegacy>
            <GridLegacy item xs={12} md={8}>
              <Paper sx={{ p: 3, border: `1px solid ${colorCombos.border.light}`, bgcolor: colorCombos.background.primary }}>
                <Typography variant="h6" sx={{ fontWeight: 600, color: colorCombos.text.title, mb: 1 }}>Latency vs Users Correlation</Typography>
                <Typography variant="body2" sx={{ color: colorCombos.text.secondary_1, mb: 2 }}>
                  Each dot shows user count vs API response time. This relationship feeds into the multi-line chart&apos;s Active Connections and Response Time series above.
                </Typography>
                <ScatterPlotMini points={scatterPoints} width={520} height={220} pointColor={colorCombos.button.secondary.text} />
              </Paper>
            </GridLegacy>
          </GridLegacy>

          {/* Activity Table */}
          <Paper sx={{ p: 2, border: `1px solid ${colorCombos.border.light}`, bgcolor: colorCombos.background.primary }}>
            <Typography variant="h6" sx={{ fontWeight: 600, color: colorCombos.text.title, mb: 1 }}>Recent Activity</Typography>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell>Time</TableCell>
                  <TableCell>Type</TableCell>
                  <TableCell>Message</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {activity.map((row, idx) => (
                  <TableRow key={idx}>
                    <TableCell>{row.time}</TableCell>
                    <TableCell>
                      <Chip
                        label={row.type.toUpperCase()}
                        size="small"
                        sx={{
                          backgroundColor:
                            row.type === 'error' ? colorCombos.button.warning.background :
                            row.type === 'warn' ? colorCombos.button.secondary.text : colorCombos.button.success.background,
                          color: colorCombos.button.primary.text
                        }}
                      />
                    </TableCell>
                    <TableCell>{row.message}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>
        </Container>
      </Box>
    </>
  );
}
