import PortfolioNavigation from "@/components/PortfolioNavigation";
import Gallery2xN from "@/components/Gallery2xN";
import ContentFullWidth from "@/components/ContentFullWidth";
import { Box, Typography, Container } from "@mui/material";
import { colorCombos } from "@/utils/colors";
import { AccountBalanceOutlined, Cloud, OilBarrel, People } from "@mui/icons-material";
import LargeImage from "@/components/LargeImage";

const enterpriseProjects = [
  {
    name: "AWS Lambda Microservices Suite",
    text: "Comprehensive collection of 30+ serverless functions for enterprise automation, handling CRM integration, financial quotations, and document management. Achieved 80% reduction in manual processing time and 99.9% uptime.",
  },
  {
    name: "Government Electronic Visa System",
    text: "Electronic visa application system for diplomatic missions handling 10,000+ daily applications. Led frontend migration from .NET web forms to React.js with normalized database schema and PCI-DSS compliant payment processing.",
  },
  {
    name: "Oil & Gas Industry Solutions",
    text: "Comprehensive software solutions for petroleum engineering including reservoir management, drilling optimization, and production analysis. Built with .NET Framework, Azure cloud platform, and complex engineering calculations.",
  },
  {
    name: "Marketing Technology Solutions Platform",
    text: "Digital marketing ecosystem supporting multiple business units with custom CMS, scalable SMTP service handling 20K+ daily emails, and real-time analytics. Implemented load balancing and 70% performance improvement.",
  },
];

export default function EnterpriseSolutions() {
  return (
    <>
      <PortfolioNavigation currentPage="enterprise-solutions" />

      <Container maxWidth="lg" sx={{ paddingTop: "100px", paddingBottom: "60px" }}>
        <Typography variant="h2" component="h1" gutterBottom align="center" sx={{ marginBottom: "20px" }}>
          Enterprise Solutions
        </Typography>
        <Typography variant="h6" align="center" sx={{ marginBottom: "60px", color: colorCombos.text.secondary_1 }}>
          Showcasing <strong>cloud-based systems</strong>, <strong>serverless architectures</strong>, and <strong>integration platforms</strong> that automate business processes and connect multiple systems for large organizations. Experience includes <strong>oil & gas industry applications</strong>, <strong>government systems</strong>, and <strong>marketing technology platforms</strong>.
        </Typography>
      </Container>
            
      <LargeImage src="/enterprise-solutions-1.png" alt="Showcase Image" maxWidth={1150} />

      <ContentFullWidth
        title="Cloud-Native Enterprise Architecture"
        text="Specialized in building <strong>scalable enterprise solutions</strong> using <strong>AWS Lambda microservices</strong>, <strong>Azure cloud platforms</strong>, and <strong>modern .NET applications</strong>. Experience spans <strong>government systems</strong>, <strong>oil & gas industry</strong>, and <strong>marketing technology platforms</strong>."
        text2="Notable achievements include <strong>30+ Lambda functions</strong> with <strong>99.9% uptime</strong>, <strong>10,000+ daily processed applications</strong>, <strong>80% reduction in manual processing time</strong>, and comprehensive compliance with <strong>government standards</strong> and <strong>industry regulations</strong>."
        imagePosition="None"
      />

      <Box sx={{ py: 6, bgcolor: colorCombos.background.secondary }}>
        <Container maxWidth="lg">
          <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 600, mb: 4, color: colorCombos.text.primary }}>
            Technical Expertise & Achievements
          </Typography>

          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 4, mb: 4 }}>
            <Box sx={{ p: 3, bgcolor: colorCombos.background.primary, borderRadius: 2, boxShadow: 1 }}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, color: colorCombos.text.title }}>
                <Cloud fontSize="large" color="primary" />  AWS Lambda Microservices
              </Typography>
              <Typography variant="body2" color={colorCombos.text.secondary_1}>
                • <strong>30+ independent serverless functions</strong><br />
                • &lt;2000ms response times for critical operations<br />
                • <strong>99.9% uptime</strong> with CloudWatch monitoring<br />
                • <strong>80% reduction</strong> in manual processing time
              </Typography>
            </Box>

            <Box sx={{ p: 3, bgcolor: colorCombos.background.primary, borderRadius: 2, boxShadow: 1 }}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, color: colorCombos.text.title }}>
                <AccountBalanceOutlined fontSize="large" color="primary" />  Government Systems
              </Typography>
              <Typography variant="body2" color={colorCombos.text.secondary_1}>
                • <strong>10,000+ daily visa applications</strong> processed<br />
                • <strong>React.js migration</strong> from legacy .NET forms<br />
                • Multi-tier architecture with audit trails<br />
                • <strong>PCI-DSS compliant</strong> payment processing<br />
                • <strong>99.95% system availability</strong> achieved
              </Typography>
            </Box>

            <Box sx={{ p: 3, bgcolor: colorCombos.background.primary, borderRadius: 2, boxShadow: 1 }}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, color: colorCombos.text.title }}>
                <OilBarrel fontSize="large" color="primary" /> Oil & Gas Solutions
              </Typography>
              <Typography variant="body2" color={colorCombos.text.secondary_1}>
                • Comprehensive <strong>Azure cloud architecture</strong><br />
                • Real-time petroleum engineering calculations<br />
                • <strong>.NET Framework to .NET 8</strong> modernization<br />
                • <strong>15% improvement</strong> in well performance<br />
                • <strong>99.8% uptime</strong> with Azure SLA
              </Typography>
            </Box>

            <Box sx={{ p: 3, bgcolor: colorCombos.background.primary, borderRadius: 2, boxShadow: 1 }}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, color: colorCombos.text.title }}>
                <People fontSize="large" color="primary" /> Marketing Technology
              </Typography>
              <Typography variant="body2" color={colorCombos.text.secondary_1}>
                • <strong>20K+ daily emails</strong> processed<br />
                • Custom CMS with multi-site support<br />
                • <strong>70% performance improvement</strong> through optimization<br />
                • Load balancing with Redis caching<br />
                • <strong>99.2% email delivery rate</strong> achieved
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>

      <Gallery2xN
        title="Enterprise Project Portfolio"
        items={enterpriseProjects}
      />
    </>
  );
}
