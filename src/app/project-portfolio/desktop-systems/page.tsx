import PortfolioNavigation from "@/components/PortfolioNavigation";
import Gallery2xN from "@/components/Gallery2xN";
import ContentFullWidth from "@/components/ContentFullWidth";
import { Box, Typography, Container } from "@mui/material";
import { colorCombos } from "@/utils/colors";
import { DesignServices, DesktopWindows, Factory, School } from "@mui/icons-material";
import LargeImage from "@/components/LargeImage";

const desktopProjects = [
  {
    name: "Manufacturing Management Desktop Application",
    text: "Comprehensive system for tracking production processes, managing equipment, and generating reports in manufacturing facilities. Built with WPF and MVVM pattern, integrated with cloud systems for automated workflows.",
    image: "https://picsum.photos/400/300?random=50"
  },
  {
    name: "Educational Electrical Engineering Tool",
    text: "Interactive learning application helping engineering students understand electrical power systems through visual simulations, bus schema visualization, and real-time component interaction.",
    image: "https://picsum.photos/400/300?random=51"
  },
  {
    name: "Production Sheet Management System",
    text: "3-tier desktop application with comprehensive production sheet management, equipment tracking, and multi-format report generation. Features JWT authentication and dual database support.",
    image: "https://picsum.photos/400/300?random=52"
  },
  {
    name: "Legacy System Modernization Suite",
    text: "Modernized legacy desktop applications with MS Access to SQL Server migration, WPF implementation, and 300% performance improvement while maintaining backward compatibility.",
    image: "https://picsum.photos/400/300?random=53"
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
        <Typography variant="h6" align="center" sx={{ marginBottom: "60px", color: colorCombos.text.secondary }}>
          Rich client applications and specialized software solutions built for manufacturing, oil & gas, education, and production management. These applications demonstrate expertise in WPF, Windows Forms, and desktop integration technologies.
        </Typography>
      </Container>
      
            <LargeImage src="/desktop-systems-1.png" alt="Showcase Image" maxWidth={1150} />
            
      <ContentFullWidth
        title="Enterprise Desktop Solutions"
        text="Specialized in building robust desktop applications using modern frameworks like WPF with MVVM pattern, Entity Framework, and cloud integration. Experience includes manufacturing systems, educational tools, and legacy system modernization."
        text2="Notable achievements include 300% performance improvements through database optimization, successful MS Access to SQL Server migrations with 100% data integrity, and comprehensive 3-tier architectures supporting concurrent users with enterprise-grade security."
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
              <Typography variant="body2" color={colorCombos.text.secondary}>
                • Production tracking with real-time monitoring<br />
                • Equipment management and maintenance scheduling<br />
                • Crystal Reports integration with A3/A4 formats<br />
                • Cloud integration for automated workflows<br />
                • 96% reduction in report generation time
              </Typography>
            </Box>

            <Box sx={{ p: 3, bgcolor: colorCombos.background.primary, borderRadius: 2, boxShadow: 1 }}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, color: colorCombos.text.title }}>
                <School fontSize="large" color="primary" /> Educational Tools
              </Typography>
              <Typography variant="body2" color={colorCombos.text.secondary}>
                • Interactive electrical power system simulations<br />
                • Visual learning with bus schema configurations<br />
                • Real-time component interaction and feedback<br />
                • GDI+ custom drawing for electrical states<br />
                • Simplified complex engineering concepts
              </Typography>
            </Box>

            <Box sx={{ p: 3, bgcolor: colorCombos.background.primary, borderRadius: 2, boxShadow: 1 }}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, color: colorCombos.text.title }}>
                <DesktopWindows fontSize="large" color="primary" /> Legacy Modernization
              </Typography>
              <Typography variant="body2" color={colorCombos.text.secondary}>
                • MS Access to SQL Server migration<br />
                • Windows Forms to WPF transformation<br />
                • 300% performance improvement<br />
                • Concurrent user support (1 → 50+ users)<br />
                • 100% data integrity preservation
              </Typography>
            </Box>

            <Box sx={{ p: 3, bgcolor: colorCombos.background.primary, borderRadius: 2, boxShadow: 1 }}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, color: colorCombos.text.title }}>
                <DesignServices fontSize="large" color="primary" /> Architecture Expertise
              </Typography>
              <Typography variant="body2" color={colorCombos.text.secondary}>
                • 3-tier architecture design<br />
                • MVVM pattern implementation<br />
                • JWT authentication & role-based access<br />
                • Entity Framework with dual database support<br />
                • RESTful API integration
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
