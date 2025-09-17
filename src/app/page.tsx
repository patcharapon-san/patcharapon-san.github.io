"use client";
import HeroSection from "@/components/HeroSection";
import ContentFullWidth from "@/components/ContentFullWidth";
import Gallery3xN from "@/components/Gallery3xN";
import Gallery2xN from "@/components/Gallery2xN";
import {
  Build, Code, DesignServices, Cloud, DesktopWindowsOutlined, IntegrationInstructions,
  Factory, OilBarrel, SchoolOutlined,
  ShoppingCartOutlined,
  AccountBalanceOutlined,
  Terminal,
  WorkOutline,
  ViewModule,
  Assessment
} from "@mui/icons-material";
import { Box, Container, Typography, Paper, Stack } from "@mui/material";
import { colorCombos } from "@/utils/colors";
import Link from "next/link";


const coreCompetencies = [
  { icon: <Code fontSize="large" color="primary" />, title: "Full-Stack Development", desc: "End-to-end application development from UI to database with cloud integration." },
  { icon: <DesignServices fontSize="large" color="primary" />, title: "Enterprise Solutions", desc: "Scalable solutions for oil & gas, government, and e-commerce sectors." },
  { icon: <IntegrationInstructions fontSize="large" color="primary" />, title: "System Integration", desc: "Third-party payment processing, identity verification, and data communication." },
  { icon: <Cloud fontSize="large" color="primary" />, title: "Cloud Architecture", desc: "AWS/Azure services implementation and serverless solutions." },
  { icon: <DesktopWindowsOutlined fontSize="large" color="primary" />, title: "Desktop Applications", desc: "Rich client applications with modern UI frameworks and 3D visualization." },
  { icon: <Build fontSize="large" color="primary" />, title: "Performance Optimization", desc: "Database tuning, application optimization, and security enhancement." },
];


const clientSuccessStories = [
  {
    icon: <Factory fontSize="large" color="primary" />,
    name: "Manufacturing Client",
    text: "Streamlined production tracking and reduced report generation time from hours to minutes. The system handles daily operations seamlessly.",
  },
  {
    icon: <AccountBalanceOutlined fontSize="large" color="primary" />,
    name: "Government Agency",
    text: "Developed a comprehensive electronic visa system that enhanced security and streamlined processing for embassy operations.",
  },
  {
    icon: <ShoppingCartOutlined fontSize="large" color="primary" />,
    name: "E-commerce Platform",
    text: "Built complete ecosystem including warehouse management and delivery tracking. Improved operational efficiency significantly.",
  },
  {
    icon: <OilBarrel fontSize="large" color="primary" />,
    name: "Oil & Gas Company",
    text: "Created specialized applications for reservoir management and petroleum engineering that transformed workflows.",
  },
  {
    icon: <SchoolOutlined fontSize="large" color="primary" />,
    name: "Educational Institution",
    text: "Interactive electrical engineering tool simplified complex concepts and improved learning outcomes for students.",
  },
];

export default function Home() {
  return (
    <>
      <Box id="home">
        <HeroSection
          title="Hey, I'm Patcharapon Sangsatra"
          subtitle="Full-Stack Developer specializing in enterprise solutions, cloud architecture, and system integration with 10+ years of experience across diverse industries."
          buttonText="View Portfolio Projects"
          buttonFunction={() => window.location.href = '/project-portfolio'}
          sx={{ backgroundImage: 'url(/work-station-1.jpg)', backgroundSize: 'cover' }}
          textAlign="left"
        />
      </Box>

      {/* Navigation Section */}
      <Box sx={{ py: 8, bgcolor: colorCombos.background.primary }}>
        <Container>
          <Typography variant="h4" align="center" sx={{ fontWeight: 700, mb: 2, color: colorCombos.text.primary }}>
            Explore My Portfolio
          </Typography>
          <Typography variant="h6" align="center" sx={{ mb: 6, color: colorCombos.text.secondary_1 }}>
            Discover my expertise, projects, and professional journey
          </Typography>
          
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} justifyContent="center" alignItems={{ xs: 'center', sm: 'stretch' }}>
            <Link href="/skills" style={{ textDecoration: 'none', width: '100%', maxWidth: '280px', display: 'flex' }}>
              <Paper
                sx={{
                  p: 3,
                  textAlign: 'center',
                  bgcolor: colorCombos.background.primary,
                  border: `2px solid ${colorCombos.border.light}`,
                  cursor: 'pointer',
                  minHeight: '140px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  position: 'relative',
                  overflow: 'hidden',
                  flex: 1,
                  '&:hover': {
                    bgcolor: colorCombos.background.accent,
                    transform: 'translateY(-4px)',
                    boxShadow: `0 8px 25px ${colorCombos.card.shadow}`,
                    borderColor: colorCombos.button.primary.background,
                    transition: 'all 0.3s ease-in-out'
                  },
                  '&:active': {
                    transform: 'translateY(-2px)',
                    boxShadow: `0 4px 15px ${colorCombos.card.shadow}`,
                  },
                  '&::after': {
                    content: '"→"',
                    position: 'absolute',
                    bottom: 8,
                    right: 12,
                    fontSize: '18px',
                    color: colorCombos.button.primary.background,
                    opacity: { xs: 1, md: 0.7 },
                    transition: 'opacity 0.3s ease'
                  }
                }}
              >
                <Terminal fontSize="large" sx={{ color: colorCombos.button.primary.background, mb: 1 }} />
                <Typography variant="h6" sx={{ fontWeight: 600, color: colorCombos.text.primary, mb: 1 }}>
                  Skills & Technologies
                </Typography>
                <Typography variant="body2" sx={{ color: colorCombos.text.secondary_1 }}>
                  10+ years of experience across multiple technologies
                </Typography>
              </Paper>
            </Link>

            <Link href="/project-portfolio" style={{ textDecoration: 'none', width: '100%', maxWidth: '280px', display: 'flex' }}>
              <Paper
                sx={{
                  p: 3,
                  textAlign: 'center',
                  bgcolor: colorCombos.background.primary,
                  border: `2px solid ${colorCombos.border.light}`,
                  cursor: 'pointer',
                  minHeight: '140px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  position: 'relative',
                  overflow: 'hidden',
                  flex: 1,
                  '&:hover': {
                    bgcolor: colorCombos.background.accent,
                    transform: 'translateY(-4px)',
                    boxShadow: `0 8px 25px ${colorCombos.card.shadow}`,
                    borderColor: colorCombos.button.primary.background,
                    transition: 'all 0.3s ease-in-out'
                  },
                  '&:active': {
                    transform: 'translateY(-2px)',
                    boxShadow: `0 4px 15px ${colorCombos.card.shadow}`,
                  },
                  '&::after': {
                    content: '"→"',
                    position: 'absolute',
                    bottom: 8,
                    right: 12,
                    fontSize: '18px',
                    color: colorCombos.button.secondary.text,
                    opacity: { xs: 1, md: 0.7 },
                    transition: 'opacity 0.3s ease'
                  }
                }}
              >
                <WorkOutline fontSize="large" sx={{ color: colorCombos.button.secondary.text, mb: 1 }} />
                <Typography variant="h6" sx={{ fontWeight: 600, color: colorCombos.text.primary, mb: 1 }}>
                  Project Portfolio
                </Typography>
                <Typography variant="body2" sx={{ color: colorCombos.text.secondary_1 }}>
                  Comprehensive collection of my work across industries
                </Typography>
              </Paper>
            </Link>

            <Link href="/showcase" style={{ textDecoration: 'none', width: '100%', maxWidth: '280px', display: 'flex' }}>
              <Paper
                sx={{
                  p: 3,
                  textAlign: 'center',
                  bgcolor: colorCombos.background.primary,
                  border: `2px solid ${colorCombos.border.light}`,
                  cursor: 'pointer',
                  minHeight: '140px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  position: 'relative',
                  overflow: 'hidden',
                  flex: 1,
                  '&:hover': {
                    bgcolor: colorCombos.background.accent,
                    transform: 'translateY(-4px)',
                    boxShadow: `0 8px 25px ${colorCombos.card.shadow}`,
                    borderColor: colorCombos.button.primary.background,
                    transition: 'all 0.3s ease-in-out'
                  },
                  '&:active': {
                    transform: 'translateY(-2px)',
                    boxShadow: `0 4px 15px ${colorCombos.card.shadow}`,
                  },
                  '&::after': {
                    content: '"→"',
                    position: 'absolute',
                    bottom: 8,
                    right: 12,
                    fontSize: '18px',
                    color: colorCombos.button.success.background,
                    opacity: { xs: 1, md: 0.7 },
                    transition: 'opacity 0.3s ease'
                  }
                }}
              >
                <ViewModule fontSize="large" sx={{ color: colorCombos.button.success.background, mb: 1 }} />
                <Typography variant="h6" sx={{ fontWeight: 600, color: colorCombos.text.primary, mb: 1 }}>
                  Project Showcase
                </Typography>
                <Typography variant="body2" sx={{ color: colorCombos.text.secondary_1 }}>
                  Charts, dashboards, APIs, and 3D visualizations
                </Typography>
              </Paper>
            </Link>

            <Link href="/about" style={{ textDecoration: 'none', width: '100%', maxWidth: '280px', display: 'flex' }}>
              <Paper
                sx={{
                  p: 3,
                  textAlign: 'center',
                  bgcolor: colorCombos.background.primary,
                  border: `2px solid ${colorCombos.border.light}`,
                  cursor: 'pointer',
                  minHeight: '140px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  position: 'relative',
                  overflow: 'hidden',
                  flex: 1,
                  '&:hover': {
                    bgcolor: colorCombos.background.accent,
                    transform: 'translateY(-4px)',
                    boxShadow: `0 8px 25px ${colorCombos.card.shadow}`,
                    borderColor: colorCombos.button.primary.background,
                    transition: 'all 0.3s ease-in-out'
                  },
                  '&:active': {
                    transform: 'translateY(-2px)',
                    boxShadow: `0 4px 15px ${colorCombos.card.shadow}`,
                  },
                  '&::after': {
                    content: '"→"',
                    position: 'absolute',
                    bottom: 8,
                    right: 12,
                    fontSize: '18px',
                    color: colorCombos.button.warning.background,
                    opacity: { xs: 1, md: 0.7 },
                    transition: 'opacity 0.3s ease'
                  }
                }}
              >
                <Assessment fontSize="large" sx={{ color: colorCombos.button.warning.background, mb: 1 }} />
                <Typography variant="h6" sx={{ fontWeight: 600, color: colorCombos.text.primary, mb: 1 }}>
                  About Me
                </Typography>
                <Typography variant="body2" sx={{ color: colorCombos.text.secondary_1 }}>
                  My journey, philosophy, and professional background
                </Typography>
              </Paper>
            </Link>
          </Stack>
        </Container>
      </Box>

      <Box id="overview">
        <ContentFullWidth
          image={["/work-station-1.jpg"]}
          title="Professional Background"
          text="With over <strong>10+ years of experience</strong> across <strong>enterprise environments</strong> and <strong>independent contractor/freelance projects</strong>, I've specialized in oil & gas industry applications, CRM systems, job platforms, e-commerce systems, and government solutions."
          text2="I focus on building <strong>full-stack applications</strong>, <strong>serverless cloud systems</strong>, and <strong>integration solutions</strong> spanning from desktop applications to cloud-based microservices with strong expertise in Azure and AWS cloud services"
          imagePosition="None"
          sx={{ backgroundColor: 'rgba(255, 255, 255, 0.0)', borderTop: 'none' }} />

        <ContentFullWidth
          image={["/solution.png", "/integration.png", "/problem-solving.png", "/database-server.png"]}
          title="Technical Excellence & Impact"
          text="I specialize in solving <strong>complex business problems</strong> with <strong>scalable technical solutions</strong>. Key achievements include <strong>80% reduction in manual processing time</strong>, <strong>150% user engagement improvement</strong>, and enterprise solutions serving daily operations with <strong>99.9% uptime</strong>."
          text2="My expertise covers <strong>system integration</strong> with third-party payment processors, identity verification services, performance optimization through database tuning, and implementing robust security measures across multiple platforms."
          imagePosition="below"
          sx={{ pt: 0, backgroundColor: 'rgba(255, 255, 255, 0.0)', borderTop: 'none' }} />
      </Box>

      <Box id="coreCompetencies">
        <Gallery3xN title="Core Competencies" items={coreCompetencies} />
      </Box>
      <Box id="clientSuccessStories">
        <Gallery2xN title="Client Success Stories" items={clientSuccessStories} />
      </Box>
    </>
  );
}