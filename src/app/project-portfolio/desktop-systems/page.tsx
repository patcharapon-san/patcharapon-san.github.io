import PortfolioNavigation from "@/components/PortfolioNavigation";
import Gallery2xN from "@/components/Gallery2xN";
import ContentFullWidth from "@/components/ContentFullWidth";
import { Box, Typography, Container } from "@mui/material";
import { colorCombos } from "@/utils/colors";
import { DesignServices, DesktopWindowsOutlined, Factory, SchoolOutlined } from "@mui/icons-material";
import LargeImage from "@/components/LargeImage";

const desktopProjects = [
  {
    name: "Manufacturing Management Desktop Application",
    text: "Comprehensive system for tracking production processes, managing equipment, and generating reports in manufacturing facilities. Built with WPF and MVVM pattern, integrated with cloud systems for automated workflows.",
  },
  {
    name: "Educational Electrical Engineering Tool",
    text: "Interactive learning application helping engineering students understand electrical power systems through visual simulations, bus schema visualization, and real-time component interaction.",
  },
  {
    name: "Production Sheet Management System",
    text: "3-tier desktop application with comprehensive production sheet management, equipment tracking, and multi-format report generation. Features JWT authentication and dual database support.",
  },
  {
    name: "Legacy System Modernization Suite",
    text: "Modernized legacy desktop applications with MS Access to SQL Server migration, WPF implementation, and 300% performance improvement while maintaining backward compatibility.",
  },
];

export default function DesktopSystems() {
  return (
    <>
      <PortfolioNavigation currentPage="desktop-systems" />

      <Container maxWidth="lg" sx={{ paddingTop: "100px", paddingBottom: "60px" }}>
        <Typography variant="h2" component="h1" gutterBottom align="center" sx={{ marginBottom: "20px" }}>
          Desktop Systems
        </Typography>
        <Typography variant="h6" align="center" sx={{ marginBottom: "60px", color: colorCombos.text.secondary_1 }}>
          <strong>Rich client applications</strong> and <strong>specialized software solutions</strong> built for <strong>manufacturing</strong>, <strong>oil & gas</strong>, <strong>education</strong>, and <strong>production management</strong>. These applications demonstrate expertise in <strong>WPF</strong>, <strong>Windows Forms</strong>, and <strong>desktop integration technologies</strong>.
        </Typography>
      </Container>
      
            <LargeImage src="/desktop-systems-1.png" alt="Showcase Image" maxWidth={1150} />
            
      <ContentFullWidth
        title="Enterprise Desktop Solutions"
        text="Specialized in building <strong>robust desktop applications</strong> using modern frameworks like <strong>WPF with MVVM pattern</strong>, <strong>Entity Framework</strong>, and <strong>cloud integration</strong>. Experience includes <strong>manufacturing systems</strong>, <strong>educational tools</strong>, and <strong>legacy system modernization</strong>."
        text2="Notable achievements include <strong>300% performance improvements</strong> through <strong>database optimization</strong>, successful <strong>MS Access to SQL Server migrations</strong> with <strong>100% data integrity</strong>, and comprehensive <strong>3-tier architectures</strong> supporting <strong>concurrent users</strong> with <strong>enterprise-grade security</strong>."
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
                <Factory fontSize="large" color="primary" /> Manufacturing Systems
              </Typography>
              <Typography variant="body2" color={colorCombos.text.secondary_1}>
                • <strong>Production tracking</strong> with real-time monitoring<br />
                • Equipment management and maintenance scheduling<br />
                • Crystal Reports integration with A3/A4 formats<br />
                • <strong>Cloud integration</strong> for automated workflows<br />
                • <strong>96% reduction</strong> in report generation time
              </Typography>
            </Box>

            <Box sx={{ p: 3, bgcolor: colorCombos.background.primary, borderRadius: 2, boxShadow: 1 }}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, color: colorCombos.text.title }}>
                <SchoolOutlined fontSize="large" color="primary" /> Educational Tools
              </Typography>
              <Typography variant="body2" color={colorCombos.text.secondary_1}>
                • Interactive <strong>electrical power system</strong> simulations<br />
                • Visual learning with <strong>bus schema configurations</strong><br />
                • Real-time component interaction and feedback<br />
                • <strong>GDI+ custom drawing</strong> for electrical states<br />
                • Simplified complex engineering concepts
              </Typography>
            </Box>

            <Box sx={{ p: 3, bgcolor: colorCombos.background.primary, borderRadius: 2, boxShadow: 1 }}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, color: colorCombos.text.title }}>
                <DesktopWindowsOutlined fontSize="large" color="primary" /> Legacy Modernization
              </Typography>
              <Typography variant="body2" color={colorCombos.text.secondary_1}>
                • <strong>MS Access to SQL Server</strong> migration<br />
                • Windows Forms to WPF transformation<br />
                • <strong>300% performance improvement</strong><br />
                • Concurrent user support (1 → 50+ users)<br />
                • <strong>100% data integrity</strong> preservation
              </Typography>
            </Box>

            <Box sx={{ p: 3, bgcolor: colorCombos.background.primary, borderRadius: 2, boxShadow: 1 }}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, color: colorCombos.text.title }}>
                <DesignServices fontSize="large" color="primary" /> Architecture Expertise
              </Typography>
              <Typography variant="body2" color={colorCombos.text.secondary_1}>
                • <strong>3-tier architecture</strong> design<br />
                • <strong>MVVM pattern</strong> implementation<br />
                • JWT authentication & role-based access<br />
                • Entity Framework with dual database support<br />
                • <strong>RESTful API integration</strong>
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>

      <Gallery2xN
        title="Our Desktop System Projects"
        items={desktopProjects}
      />
    </>
  );
}
