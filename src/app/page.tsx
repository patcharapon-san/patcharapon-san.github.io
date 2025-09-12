"use client";
import HeroSection from "@/components/HeroSection";
import ContentFullWidth from "@/components/ContentFullWidth";
import Gallery3xN from "@/components/Gallery3xN";
import Gallery2xN from "@/components/Gallery2xN";
import LargeImage from "@/components/LargeImage";
import { Build, Code, DesignServices, Cloud, DesktopWindows, IntegrationInstructions, LinkedIn, Email, GitHub } from "@mui/icons-material";
import { Box, Typography, Container, IconButton, Link } from "@mui/material";
import { colorCombos } from "@/utils/colors";


const coreCompetencies = [
  { icon: <Code fontSize="large" color="primary" />, title: "Full-Stack Development", desc: "End-to-end application development from UI to database with cloud integration." },
  { icon: <DesignServices fontSize="large" color="primary" />, title: "Enterprise Solutions", desc: "Scalable solutions for oil & gas, government, and e-commerce sectors." },
  { icon: <IntegrationInstructions  fontSize="large" color="primary" />, title: "System Integration", desc: "Third-party payment processing, identity verification, and data communication." },
  { icon: <Cloud fontSize="large" color="primary" />, title: "Cloud Architecture", desc: "AWS/Azure services implementation and serverless solutions." },
  { icon: <DesktopWindows fontSize="large" color="primary" />, title: "Desktop Applications", desc: "Rich client applications with modern UI frameworks and 3D visualization." },
  { icon: <Build fontSize="large" color="primary" />, title: "Performance Optimization", desc: "Database tuning, application optimization, and security enhancement." },
];


const testimonials = [
  { name: "Manufacturing Client", text: "Streamlined production tracking and reduced report generation time from hours to minutes. The system handles daily operations seamlessly.", image: "https://picsum.photos/100/100?random=1" },
  { name: "Government Agency", text: "Developed a comprehensive electronic visa system that enhanced security and streamlined processing for embassy operations.", image: "https://picsum.photos/100/100?random=2" },
  { name: "E-commerce Platform", text: "Built complete ecosystem including warehouse management and delivery tracking. Improved operational efficiency significantly.", image: "https://picsum.photos/100/100?random=3" },
  { name: "Oil & Gas Company", text: "Created specialized applications for reservoir management and petroleum engineering that transformed workflows.", image: "https://picsum.photos/100/100?random=4" },
  { name: "Educational Institution", text: "Interactive electrical engineering tool simplified complex concepts and improved learning outcomes for students.", image: "https://picsum.photos/100/100?random=5" },
];

export default function Home() {
  return (
    <>
      <Box id="home">
        <HeroSection
          title="Hey, I'm Patcharapon Sangsatra"
          subtitle="Full-Stack Developer specializing in enterprise solutions, cloud architecture, and system integration with 10+ years of experience across diverse industries."
          buttonText="Explore My Work"
          buttonFunction={() => window.location.href = '/project-portfolio'}
        />
      </Box>

      <LargeImage src="https://picsum.photos/1150/600" alt="Showcase Image" maxWidth={1150} />

      <Box id="about">
        <ContentFullWidth
          image={["https://picsum.photos/600/400?random=80"]}
          title="Professional Background"
          text="With over 10 years of experience across enterprise environments and independent contractor/freelance projects, I've specialized in oil & gas industry applications, CRM systems, job platforms, e-commerce systems, and government solutions."
          text2="I focus on building full-stack applications, serverless cloud systems, and integration solutions spanning from desktop applications to cloud-based microservices with strong expertise in Azure and AWS cloud services."
          imagePosition="above" />
        <ContentFullWidth
          image={["https://picsum.photos/600/400?random=81"]}
          title="Technical Excellence & Impact"
          text="I specialize in solving complex business problems with scalable technical solutions. Key achievements include 80% reduction in manual processing time, 150% user engagement improvement, and enterprise solutions serving daily operations with 99.9% uptime."
          text2="My expertise covers system integration with third-party payment processors, identity verification services, performance optimization through database tuning, and implementing robust security measures across multiple platforms."
          imagePosition="below" />
      </Box>

      <Box id="coreCompetencies">
        <Gallery3xN title="Core Competencies" items={coreCompetencies} />
      </Box>
      <Box id="testimonials">
        <Gallery2xN title="Client Success Stories" items={testimonials} />
      </Box>

      <Box sx={{ py: 6, bgcolor: colorCombos.background.primary }}>
        <Container maxWidth="lg">
          <Box sx={{ p: 4, bgcolor: colorCombos.background.primary, borderRadius: 2, boxShadow: 1, textAlign: 'center' }}>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, color: colorCombos.text.title, mb: 3 }}>
              Let&apos;s Connect
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3, mb: 3 }}>
              <Link href="https://www.linkedin.com/in/patcharaponsan/" target="_blank" rel="noopener noreferrer" sx={{ textDecoration: 'none' }}>
                <IconButton size="large" sx={{ bgcolor: colorCombos.button.info.background, color: colorCombos.button.info.text, '&:hover': { bgcolor: colorCombos.button.info.hover } }}>
                  <LinkedIn fontSize="large" />
                </IconButton>
              </Link>
              <Link href="mailto:p.sangsartra@gmail.com" sx={{ textDecoration: 'none' }}>
                <IconButton size="large" sx={{ bgcolor: colorCombos.button.error.background, color: colorCombos.button.error.text, '&:hover': { bgcolor: colorCombos.button.error.hover } }}>
                  <Email fontSize="large" />
                </IconButton>
              </Link>
              <Link href="https://github.com/patcharapon-san" target="_blank" rel="noopener noreferrer" sx={{ textDecoration: 'none' }}>
                <IconButton size="large" sx={{ bgcolor: colorCombos.button.github.background, color: colorCombos.button.github.text, '&:hover': { bgcolor: colorCombos.button.github.hover } }}>
                  <GitHub fontSize="large" />
                </IconButton>
              </Link>
            </Box>
            <Typography variant="body1" color={colorCombos.text.secondary}>
              Feel free to reach out for collaborations, opportunities, or just to say hello!
            </Typography>
          </Box>
        </Container>
      </Box>
    </>
  );
}