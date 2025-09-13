import HeroSection from "@/components/HeroSection";
import Gallery2xN from "@/components/Gallery2xN";
import { Box, Typography, Paper, Stack, Container } from "@mui/material";
import GridLegacy from "@mui/material/GridLegacy";
import { Business, Web, DesktopWindowsOutlined, Cloud, AirplaneTicket, OilBarrel, SchoolOutlined, People } from "@mui/icons-material";
import { colorCombos } from "@/utils/colors";
import Link from "next/link";

const portfolioCategories = [
  {
    icon: <Business fontSize="large" color="primary" />,
    title: "Enterprise Solutions",
    desc: "Large-scale applications for enterprise clients.",
    href: "/project-portfolio/enterprise-solutions"
  },
  {
    icon: <Web fontSize="large" color="primary" />,
    title: "Web Platforms",
    desc: "Modern web applications and platforms.",
    href: "/project-portfolio/web-platforms"
  },
  {
    icon: <DesktopWindowsOutlined fontSize="large" color="primary" />,
    title: "Desktop Systems",
    desc: "Desktop applications and system solutions.",
    href: "/project-portfolio/desktop-systems"
  },
];

// Comprehensive project overview combining all categories
const allProjects = [
  // Enterprise Solutions
  {
    icon: <Cloud fontSize="large" color="primary" />,
    name: "AWS Lambda Microservices Suite",
    text: "30+ serverless functions for enterprise automation with 99.9% uptime and 80% reduction in manual processing time.",
  },
  {
    icon: <AirplaneTicket fontSize="large" color="primary" />,
    name: "Government Electronic Visa System",
    text: "Electronic visa system handling 10,000+ applications at peak time with React.js frontend and comprehensive security compliance",
  },
  // Desktop Systems
  {
    icon: <DesktopWindowsOutlined fontSize="large" color="primary" />,
    name: "Manufacturing Management Desktop Application",
    text: "WPF-based production tracking system with real-time monitoring and 96% reduction in report generation time.",
  },
  {
    icon: <SchoolOutlined fontSize="large" color="primary" />,
    name: "Educational Electrical Engineering Tool",
    text: "Interactive learning application for electrical power systems with visual simulations and real-time component interaction.",
  },
  // Oil & Gas Solutions
  {
    icon: <OilBarrel fontSize="large" color="primary" />,
    name: "Oil & Gas Industry Solutions",
    text: "Comprehensive Azure cloud platform for petroleum engineering with real-time data integration and 15% performance improvement.",
  },
  // Marketing Technology
  {
    icon: <People fontSize="large" color="primary" />,
    name: "Marketing Technology Platform",
    text: "Digital marketing ecosystem processing 20K+ daily emails with custom CMS and 70% performance optimization.",
  },
];

export default function ProjectPortfolio() {
  return (
    <>
      <HeroSection
        title="My Project Portfolio"
        subtitle="Explore my diverse range of projects across different industries and technologies."
      />

      <Box sx={{ py: 8, bgcolor: colorCombos.background.accent }}>
        <Container>
          <Typography variant="h4" align="center" sx={{ fontWeight: 700, mb: 6, color: colorCombos.text.primary }}>
            Project Categories
          </Typography>
          <GridLegacy container spacing={4} justifyContent="center">
            {portfolioCategories.map((category, i) => (
              <GridLegacy item xs={12} md={4} key={i} sx={{ display: 'flex', flexDirection: 'column' }}>
                <Link href={category.href} style={{ textDecoration: 'none', height: '100%' }}>
                  <Paper
                    elevation={3}
                    sx={{
                      p: 4,
                      textAlign: "center",
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      bgcolor: colorCombos.background.primary,
                      borderRadius: 2,
                      border: `1px solid ${colorCombos.border.light}`,
                      cursor: 'pointer',
                      "&:hover": {
                        bgcolor: colorCombos.background.accent,
                        boxShadow: `0 8px 25px ${colorCombos.card.shadow}`,
                        transform: "translateY(-4px)",
                        transition: "all 0.3s ease-in-out"
                      }
                    }}
                  >
                    <Stack alignItems="center" spacing={2} sx={{ flexGrow: 1 }}>
                      <Box sx={{ color: colorCombos.icon.primary }}>
                        {category.icon}
                      </Box>
                      <Typography variant="h6" sx={{ fontWeight: 600, color: colorCombos.text.primary }}>
                        {category.title}
                      </Typography>
                      <Typography sx={{ color: colorCombos.text.secondary_1 }}>
                        {category.desc}
                      </Typography>
                    </Stack>
                  </Paper>
                </Link>
              </GridLegacy>
            ))}
          </GridLegacy>
        </Container>
      </Box>

      {/* Project Overview Section */}
      <Box sx={{ py: 8, bgcolor: colorCombos.background.secondary }}>
        <Container>
          <Typography variant="h4" align="center" sx={{ fontWeight: 700, mb: 2, color: colorCombos.text.primary }}>
            Featured Projects Overview
          </Typography>
          <Typography variant="h6" align="center" sx={{ mb: 6, color: colorCombos.text.secondary_1 }}>
            Discover my portfolio of successful projects across various industries and technologies
          </Typography>

          <Gallery2xN
            title="Recent Projects"
            items={allProjects}
          />
        </Container>
      </Box>
    </>
  );
}
