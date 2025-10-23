"use client";
import HeroSection from "@/components/HeroSection";
import { Box, Container, Paper, Typography } from "@mui/material";
import { colorCombos } from "@/utils/colors";
import CaseStudy from "@/components/CaseStudy";
import { etlCaseStudy } from "@/data/caseStudies";
import EtlFlowDiagram from "@/components/diagrams/EtlFlowDiagram";

export default function EtlDemo() {
  // Page now focuses on the case study and a clear process flow diagram

  return (
    <>
      <HeroSection
        title="ETL Orchestration Demo"
        subtitle="Overview of Azure Data Factory orchestration with Azure Functions transforms and published outputs."
        sx={{ backgroundImage: 'url(/work-station-2.jpg)', backgroundSize: 'cover' }}
        textAlign="center"
      />

      <Box sx={{ py: 6, bgcolor: colorCombos.background.primary }}>
        <Container>
          {/* Case Study Overview */}
          <Box sx={{ mb: 4 }}>
            <CaseStudy {...etlCaseStudy} />
          </Box>

          {/* Process Flow Diagram */}
          <Typography variant="h5" sx={{ fontWeight: 700, color: colorCombos.text.title, mb: 2 }}>Process Flow</Typography>
          <Paper sx={{ p: 2, border: `1px solid ${colorCombos.border.light}`, bgcolor: colorCombos.background.primary, overflowX: "auto" }}>
            <Box sx={{ minWidth: 1100 }}>
              <EtlFlowDiagram width={1100} height={460} />
            </Box>
            <Typography variant="body2" sx={{ mt: 2, color: colorCombos.text.secondary_1 }}>
              Sources are orchestrated by Azure Data Factory, transformed via Azure Functions, and published to Blob Storage and Azure SQL Database. Secrets are managed via Azure Key Vault; pipelines and workloads are monitored with Application Insights, and alerts are routed through Azure Monitor/Logic Apps to email for proactive notification.
            </Typography>
          </Paper>
        </Container>
      </Box>
    </>
  );
}
