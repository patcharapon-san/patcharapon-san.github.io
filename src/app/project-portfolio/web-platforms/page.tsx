import PortfolioNavigation from "@/components/PortfolioNavigation";
import Gallery2xN from "@/components/Gallery2xN";
import ContentFullWidth from "@/components/ContentFullWidth";
import { Box, Typography, Container } from "@mui/material";
import { colorCombos } from "@/utils/colors";
import { Assessment, BusinessCenter, ShoppingCartCheckout, ViewInAr } from "@mui/icons-material";
import LargeImage from "@/components/LargeImage";

const webPlatformProjects = [
  {
    name: "Manufacturing Order Management Platform",
    text: "Collaborative platform for manufacturers enabling order process management with 3D STEP data visualization, post-sale and engineering team coordination, customer information management from multiple sources, AI-powered STEP to order data conversion, and seamless integration with internal systems and third-party services like FlowAccount.",
  },
  {
    name: "E-commerce & Warehouse Management Platform",
    text: "Complete e-commerce ecosystem with customer store, warehouse management, delivery tracking, and business intelligence. Reduced order processing time by 81% and improved inventory accuracy to 96%.",
  },
  {
    name: "Business Analytics Web Platform",
    text: "Comprehensive analytics platform with interactive charts (Recharts/MUI X), real-time dashboards, static reports, and multi-format export capabilities. Supports 500+ concurrent users with optimized performance.",
  },
  {
    name: "HR Job Platform Web Application",
    text: "Dual-portal job platform serving employers and job seekers with advanced matching algorithms, application tracking, and automated workflow. Reduced time-to-hire by 44% and improved application response time by 83%.",
  },
];

export default function WebPlatforms() {
  return (
    <>
      <PortfolioNavigation currentPage="web-platforms" />

      <Container maxWidth="lg" sx={{ paddingTop: "100px", paddingBottom: "60px" }}>
        <Typography variant="h2" component="h1" gutterBottom align="center" sx={{ marginBottom: "20px" }}>
          Web Platforms
        </Typography>
        <Typography variant="h6" align="center" sx={{ marginBottom: "60px", color: colorCombos.text.secondary_1 }}>
          Modern web applications featuring <strong>advanced UI/UX</strong>, <strong>real-time data visualization</strong>, and <strong>interactive user experiences</strong>. Built with cutting-edge technologies including <strong>React</strong>, <strong>Next.js</strong>, <strong>Three.js</strong>, and <strong>cloud infrastructure</strong>.
        </Typography>
      </Container>

      <LargeImage src="/web-platform-1.png" alt="Showcase Image" maxWidth={1150} />
      
      <ContentFullWidth
        title="Advanced Web Application Development"
        text="Specialized in building sophisticated web platforms with 3D visualization using <strong>Three.js</strong>, <strong>real-time analytics</strong> with <strong>interactive charts</strong>, <strong>e-commerce ecosystems</strong> with <strong>warehouse management</strong>, and <strong>comprehensive business intelligence platforms</strong>."
        text2="Notable achievements include <strong>150% user engagement improvement</strong> through interactive 3D features, <strong>81% reduction in order processing time</strong>, support for <strong>500+ concurrent users</strong>, and <strong>44% reduction in time-to-hire</strong> through automated workflows."
        imagePosition="None"
      />

      <Box sx={{ py: 6, bgcolor: colorCombos.background.secondary }}>
        <Container maxWidth="lg">
          <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 600, mb: 4, color: colorCombos.text.primary }}>
            Key Technologies & Achievements
          </Typography>

          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 4, mb: 4 }}>
            <Box sx={{ p: 3, bgcolor: colorCombos.background.primary, borderRadius: 2, boxShadow: 1 }}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, color: colorCombos.text.title }}>
                <ViewInAr fontSize="large" color="primary" /> Manufacturing Order Management Platform
              </Typography>
              <Typography variant="body2" color={colorCombos.text.secondary_1}>
                • Order process platform for shop owners (manufacturers) with 3D visualization<br />
                • Post-sale & engineering collaboration for <strong>STEP data review</strong> and order updates<br />
                • Customer information management from external sources and new customer creation<br />
                • <strong>AI integration</strong> for STEP to order data conversion<br />
                • <strong>Third-party integrations (FlowAccount)</strong> and internal system connectivity
              </Typography>
            </Box>

            <Box sx={{ p: 3, bgcolor: colorCombos.background.primary, borderRadius: 2, boxShadow: 1 }}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, color: colorCombos.text.title }}>
                <ShoppingCartCheckout fontSize="large" color="primary" />  E-commerce Platforms
              </Typography>
              <Typography variant="body2" color={colorCombos.text.secondary_1}>
                • <strong>Complete ecosystem</strong> with React.js + .NET Core<br />
                • <strong>Real-time inventory</strong> with SignalR integration<br />
                • Automated order processing and warehouse management<br />
                • <strong>96% inventory accuracy improvement</strong>
              </Typography>
            </Box>

            <Box sx={{ p: 3, bgcolor: colorCombos.background.primary, borderRadius: 2, boxShadow: 1 }}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, color: colorCombos.text.title }}>
                <Assessment fontSize="large" color="primary" /> Analytics Platforms
              </Typography>
              <Typography variant="body2" color={colorCombos.text.secondary_1}>
                • <strong>Interactive charts</strong> with Recharts + MUI X Charts<br />
                • <strong>Real-time dashboards</strong> with live data streaming<br />
                • <strong>Multi-format export</strong> (PDF, Excel, CSV)<br />
                • Optimized for large datasets with virtual scrolling
              </Typography>
            </Box>

            <Box sx={{ p: 3, bgcolor: colorCombos.background.primary, borderRadius: 2, boxShadow: 1 }}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, color: colorCombos.text.title }}>
                <BusinessCenter fontSize="large" color="primary" />  HR & Job Platforms
              </Typography>
              <Typography variant="body2" color={colorCombos.text.secondary_1}>
                • <strong>Dual-portal architecture</strong> with C# .NET Framework<br />
                • Advanced search and filtering capabilities<br />
                • <strong>Automated application tracking</strong> workflow<br />
                • <strong>83% faster application response time</strong>
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>

      <Gallery2xN
        title="Our Web Platform Projects"
        items={webPlatformProjects}
      />
    </>
  );
}
