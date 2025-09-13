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
    image: "https://picsum.photos/400/300?random=10"
  },
  {
    name: "Government Electronic Visa System",
    text: "Electronic visa application system for diplomatic missions handling 10,000+ daily applications. Led frontend migration from .NET web forms to React.js with normalized database schema and PCI-DSS compliant payment processing.",
    image: "https://picsum.photos/400/300?random=11"
  },
  {
    name: "Oil & Gas Industry Solutions",
    text: "Comprehensive software solutions for petroleum engineering including reservoir management, drilling optimization, and production analysis. Built with .NET Framework, Azure cloud platform, and complex engineering calculations.",
    image: "https://picsum.photos/400/300?random=12"
  },
  {
    name: "Marketing Technology Solutions Platform",
    text: "Digital marketing ecosystem supporting multiple business units with custom CMS, scalable SMTP service handling 20+ daily emails, and real-time analytics. Implemented load balancing and 70% performance improvement.",
    image: "https://picsum.photos/400/300?random=13"
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
          Showcasing cloud-based systems, serverless architectures, and integration platforms that automate business processes and connect multiple systems for large organizations. Experience includes oil & gas industry applications, government systems, and marketing technology platforms.
        </Typography>
      </Container>
            
      <LargeImage src="/enterprise-solutions-1.png" alt="Showcase Image" maxWidth={1150} />

      <ContentFullWidth
        title="Cloud-Native Enterprise Architecture"
        text="Specialized in building scalable enterprise solutions using AWS Lambda microservices, Azure cloud platforms, and modern .NET applications. Experience spans government systems, oil & gas industry, and marketing technology platforms."
        text2="Notable achievements include 30+ Lambda functions with 99.9% uptime, daily processed applications, 80% reduction in manual processing time, and comprehensive compliance with government standards and industry regulations."
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
                • 30+ independent serverless functions<br />
                • &lt;2000ms response times for critical operations<br />
                • 99.9% uptime with CloudWatch monitoring<br />
                • 80% reduction in manual processing time
              </Typography>
            </Box>

            <Box sx={{ p: 3, bgcolor: colorCombos.background.primary, borderRadius: 2, boxShadow: 1 }}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, color: colorCombos.text.title }}>
                <AccountBalanceOutlined fontSize="large" color="primary" />  Government Systems
              </Typography>
              <Typography variant="body2" color={colorCombos.text.secondary_1}>
                • 10,000+ daily visa applications processed<br />
                • React.js migration from legacy .NET forms<br />
                • Multi-tier architecture with audit trails<br />
                • PCI-DSS compliant payment processing<br />
                • 99.95% system availability achieved
              </Typography>
            </Box>

            <Box sx={{ p: 3, bgcolor: colorCombos.background.primary, borderRadius: 2, boxShadow: 1 }}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, color: colorCombos.text.title }}>
                <OilBarrel fontSize="large" color="primary" /> Oil & Gas Solutions
              </Typography>
              <Typography variant="body2" color={colorCombos.text.secondary_1}>
                • Comprehensive Azure cloud architecture<br />
                • Real-time petroleum engineering calculations<br />
                • .NET Framework to .NET 8 modernization<br />
                • 15% improvement in well performance<br />
                • 99.8% uptime with Azure SLA
              </Typography>
            </Box>

            <Box sx={{ p: 3, bgcolor: colorCombos.background.primary, borderRadius: 2, boxShadow: 1 }}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, color: colorCombos.text.title }}>
                <People fontSize="large" color="primary" /> Marketing Technology
              </Typography>
              <Typography variant="body2" color={colorCombos.text.secondary_1}>
                • 20K+ daily emails processed<br />
                • Custom CMS with multi-site support<br />
                • 70% performance improvement through optimization<br />
                • Load balancing with Redis caching<br />
                • 99.2% email delivery rate achieved
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
