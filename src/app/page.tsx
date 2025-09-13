"use client";
import HeroSection from "@/components/HeroSection";
import ContentFullWidth from "@/components/ContentFullWidth";
import Gallery3xN from "@/components/Gallery3xN";
import Gallery2xN from "@/components/Gallery2xN";
import {
  Build, Code, DesignServices, Cloud, DesktopWindowsOutlined, IntegrationInstructions,
  Factory, OilBarrel, SchoolOutlined,
  ShoppingCartOutlined,
  AccountBalanceOutlined
} from "@mui/icons-material";
import { Box, } from "@mui/material";


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
          buttonText="Explore My Work"
          buttonFunction={() => window.location.href = '/project-portfolio'}
          sx={{ backgroundImage: 'url(/work-station-1.jpg)', backgroundSize: 'cover' }}
          textAlign="left"
        />
      </Box>

      <Box id="overview">
        <ContentFullWidth
          image={["/work-station-1.jpg"]}
          title="Professional Background"
          text="With over 10 years of experience across enterprise environments and independent contractor/freelance projects, I've specialized in oil & gas industry applications, CRM systems, job platforms, e-commerce systems, and government solutions."
          text2="I focus on building full-stack applications, serverless cloud systems, and integration solutions spanning from desktop applications to cloud-based microservices with strong expertise in Azure and AWS cloud services."
          imagePosition="None"
          sx={{ backgroundColor: 'rgba(255, 255, 255, 0.0)', borderTop: 'none' }} />

        <ContentFullWidth
          image={["/solution.png", "/integration.png", "/problem-solving.png", "/database-server.png"]}
          title="Technical Excellence & Impact"
          text="I specialize in solving complex business problems with scalable technical solutions. Key achievements include 80% reduction in manual processing time, 150% user engagement improvement, and enterprise solutions serving daily operations with 99.9% uptime."
          text2="My expertise covers system integration with third-party payment processors, identity verification services, performance optimization through database tuning, and implementing robust security measures across multiple platforms."
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