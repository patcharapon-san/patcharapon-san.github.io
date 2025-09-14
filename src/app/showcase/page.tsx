"use client";
import HeroSection from "@/components/HeroSection";
import { Box, Typography, Container, Paper, Chip, Stack } from "@mui/material";
import GridLegacy from "@mui/material/GridLegacy";
import Link from "next/link";
import {
    BarChart,
    Dashboard,
    Assessment,
    ThreeDRotation,
    PieChart,
    ViewInAr,
    Architecture,
    BubbleChart
} from "@mui/icons-material";
import { colorCombos } from "@/utils/colors";

// Chart & Visualization Projects
const chartProjects = [
    {
        title: "Cumulative Production Analysis",
        description: "Real-time production monitoring with cumulative analysis, trend tracking, and performance optimization insights",
        technologies: ["Azure Data Factory", "Azure Function", "Azure Storage Account","SQL Server",  "C#", ".NET8", "Telerik", "Infragistics"],
        features: ["Cumulative tracking", "Trend analysis", "Trend prediction", "Alert notifications"],
        icon: <BarChart fontSize="large" color="primary" />,
        category: "Analytics"
    },
    {
        title: "User, Event, Batch and API Monitoring Dashboard",
        description: "Comprehensive monitoring dashboard tracking user activities, system events, batch processes, and API performance",
        technologies: ["React", "Azure App Service", "Azure Application Insights", "Azure Communication Services", "SQL Server"],
        features: ["Real-time monitoring", "Event tracking", "Batch process status", "API performance metrics"],
        icon: <Dashboard fontSize="large" color="primary" />,
        category: "Dashboard"
    },
    {
        title: "Order Process Tracking (Dashboard & Report)",
        description: "End-to-end order tracking system with interactive dashboard and automated reporting for order lifecycle management",
        technologies: ["Next.js", "React", "Chart.js", "AWS Lambda", "MySQL"],
        features: ["Order lifecycle tracking", "Status dashboards", "Customize reports", "Exception handling"],
        icon: <Assessment fontSize="large" color="primary" />,
        category: "Dashboard & Reports"
    },
    {
        title: "Customer Behavior Analysis",
        description: "Comprehensive customer analytics system with formal reporting, comparative analysis, and change tracking capabilities",
        technologies: ["C#", ".NET8", "Telerik", "Crystal Report"],
        features: ["Formal report", "Comparative analysis", "Progress report", "Changing record logging"],
        icon: <PieChart fontSize="large" color="primary" />,
        category: "Analytics"
    }
];

// Backend & API Projects
const backendProjects = [
    {
        title: "AWS API Service Architecture",
        description: "Enterprise-scale serverless architecture with 30+ Lambda functions, comprehensive monitoring, and multi-tier security across AWS cloud services",
        technologies: ["AWS Lambda", "API Gateway", "Aurora & RDS", "CloudWatch", "IAM", "S3", "Secrets Manager", "VPC", "Route 53", "Systems Manager", "Python", "FastAPI"],
        features: ["Auto-scaling with CloudWatch", "Secure VPC networking", "Multi-database support", "Centralized monitoring", "99.9% uptime SLA"],
        icon: <Architecture fontSize="large" color="info" />,
        category: "AWS API Architecture"
    },
    {
        title: "Azure API Service Architecture",
        description: "Enterprise-grade API ecosystem with Microsoft Entra ID authorization, comprehensive system integration for inbound/outbound data flows across organizational systems",
        technologies: ["Azure API Management", "Azure Functions", "Azure Key Vault", "Azure Storage", "Azure Application Insights", "Azure SQL Database", "Microsoft Entra ID"],
        features: ["Microsoft Entra ID authentication", "Inbound/Outbound system integration", "API gateway management", "Cross-system data orchestration", "Comprehensive logging & monitoring"],
        icon: <Architecture fontSize="large" color="info" />,
        category: "Azure API Architecture"
    },
    {
        title: "Electronic Visa Processing API",
        description: "High-performance on-premises API system processing 10,000+ visa applications concurrently with government integration, implemented per SI project requirements",
        technologies: ["ASP.NET Web API", "Windows Server", "SQL Server", "IIS", "Windows Services", "Active Directory"],
        features: ["On-premises deployment", "Concurrent processing", "Government integration", "Secure authentication", "Real-time status tracking"],
        icon: <Assessment fontSize="large" color="info" />,
        category: "Government API"
    },
    {
        title: "Data Processing Pipeline",
        description: "Automated ETL pipeline with Azure Data Factory integrating multiple enterprise systems, achieving 96% performance improvement in report generation",
        technologies: ["Azure Data Factory", "Azure Functions", "SQL Server", "Azure Storage", "Azure Key Vault"],
        features: ["Multi-system integration", "ETL automation", "96% performance gain", "Scheduled processing", "Cross-platform data orchestration"],
        icon: <ViewInAr fontSize="large" color="info" />,
        category: "Data Pipeline"
    }
];

// 3D Rendering & Visualization Projects
const renderingProjects = [
    {
        title: "3D Product Configurator",
        description: "Interactive 3D product visualization with real-time customization and AR preview",
        technologies: ["Three.js", "React", "Next.js"],
        features: ["Real-time rendering", "Material editor", "Export options", "Convert product file to order information"],
        icon: <ThreeDRotation fontSize="large" color="secondary" />,
        category: "3D Visualization"
    }
];

// Dashboard & Report Categories
const showcaseCategories = [
    {
        title: "Business Intelligence Dashboards",
        description: "Executive dashboards, KPI tracking, and business performance monitoring",
        count: "10+ Projects",
        icon: <Dashboard fontSize="large" />,
        color: colorCombos.button.primary.background
    },
    {
        title: "Backend & API Development",
        description: "Scalable APIs, microservices, and data processing systems",
        count: "300+ APIs",
        icon: <Architecture fontSize="large" />,
        color: colorCombos.button.secondary.text
    },
    {
        title: "Data Analytics & Charts",
        description: "Interactive charts, data visualization, and statistical analysis tools",
        count: "20+ Implementations",
        icon: <BubbleChart fontSize="large" />,
        color: colorCombos.button.success.background
    },
    {
        title: "3D Visualizations",
        description: "3D rendering, product configurators, and immersive data visualization",
        count: "3D Projects",
        icon: <ThreeDRotation fontSize="large" />,
        color: colorCombos.button.warning.background
    }
];

// Key Technologies Used
const visualizationTech = [
    { name: "Crystal Reports", description: "Enterprise reporting solution", years: "5+" },
    { name: "Telerik", description: "UI components and reporting tools", years: "4+" },
    { name: "Infragistics", description: "Advanced UI controls and data visualization", years: "4+" },
    { name: "Chart.js", description: "Interactive charts and graphs", years: "2+" },
    { name: "Three.js", description: "3D web graphics and rendering", years: "2+" },
    { name: "Power BI", description: "Business intelligence dashboards", years: "1+" },
];

const ShowcaseCard = ({ project }: { project: {
    title: string;
    description: string;
    technologies: string[];
    features: string[];
    icon: React.ReactNode;
    category: string;
} }) => (
    <Paper
        sx={{
            p: 3,
            height: '100%',
            bgcolor: colorCombos.background.primary,
            border: `1px solid ${colorCombos.border.light}`,
            '&:hover': {
                bgcolor: colorCombos.background.accent,
                transform: 'translateY(-4px)',
                boxShadow: `0 8px 25px ${colorCombos.card.shadow}`,
                transition: 'all 0.3s ease-in-out'
            }
        }}
    >
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <Box sx={{ mr: 2 }}>
                {project.icon}
            </Box>
            <Box sx={{ flexGrow: 1 }}>
                <Typography variant="h6" sx={{ fontWeight: 600, color: colorCombos.text.primary, mb: 1 }}>
                    {project.title}
                </Typography>
                <Chip
                    label={project.category}
                    size="small"
                    sx={{
                        backgroundColor: colorCombos.background.accent,
                        color: colorCombos.text.primary,
                        fontSize: '0.75rem'
                    }}
                />
            </Box>
        </Box>

        <Typography variant="body2" sx={{ color: colorCombos.text.secondary_1, mb: 3, lineHeight: 1.6 }}>
            {project.description}
        </Typography>

        <Box sx={{ mb: 3 }}>
            <Typography variant="subtitle2" sx={{ fontWeight: 600, color: colorCombos.text.primary, mb: 1 }}>
                Technologies Used:
            </Typography>
            <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap', gap: 1 }}>
                {project.technologies.map((tech: string, techIndex: number) => (
                    <Chip
                        key={techIndex}
                        label={tech}
                        size="small"
                        variant="outlined"
                        sx={{
                            borderColor: colorCombos.border.light,
                            color: colorCombos.text.secondary_1,
                            fontSize: '0.7rem'
                        }}
                    />
                ))}
            </Stack>
        </Box>

        <Box>
            <Typography variant="subtitle2" sx={{ fontWeight: 600, color: colorCombos.text.primary, mb: 1 }}>
                Key Features:
            </Typography>
            <Box component="ul" sx={{ m: 0, pl: 2 }}>
                {project.features.map((feature: string, featureIndex: number) => (
                    <Typography
                        component="li"
                        key={featureIndex}
                        variant="body2"
                        sx={{ color: colorCombos.text.secondary_1, mb: 0.5 }}
                    >
                        {feature}
                    </Typography>
                ))}
            </Box>
        </Box>
    </Paper>
);

export default function Showcase() {
    return (
        <>
            <HeroSection
                title="Project Showcase"
                subtitle="Explore my expertise in data visualization, dashboards, reports, and 3D rendering across various industries and technologies."
                sx={{ backgroundImage: 'url(/work-station-3.jpg)', backgroundSize: 'cover' }}
                textAlign="center"
            />

            {/* Quick Overview */}
            <Box sx={{ py: 6, bgcolor: colorCombos.background.accent }}>
                <Container>
                    <Typography variant="h4" align="center" sx={{ fontWeight: 700, mb: 6, color: colorCombos.text.primary }}>
                        Showcase Categories
                    </Typography>
                    
                    <GridLegacy container spacing={4}>
                        {showcaseCategories.map((category, index) => (
                            <GridLegacy item xs={12} sm={6} md={3} key={index}>
                                <Paper
                                    sx={{
                                        p: 3,
                                        textAlign: 'center',
                                        height: '100%',
                                        bgcolor: colorCombos.background.primary,
                                        border: `1px solid ${colorCombos.border.light}`,
                                        '&:hover': {
                                            bgcolor: colorCombos.background.accent,
                                            transform: 'translateY(-4px)',
                                            boxShadow: `0 8px 25px ${colorCombos.card.shadow}`,
                                            transition: 'all 0.3s ease-in-out'
                                        }
                                    }}
                                >
                                    <Box sx={{ mb: 2, color: category.color }}>
                                        {category.icon}
                                    </Box>
                                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 1, color: colorCombos.text.primary }}>
                                        {category.title}
                                    </Typography>
                                    <Chip
                                        label={category.count}
                                        size="small"
                                        sx={{
                                            mb: 2,
                                            backgroundColor: category.color,
                                            color: 'white',
                                            fontWeight: 600
                                        }}
                                    />
                                    <Typography variant="body2" sx={{ color: colorCombos.text.secondary_1 }}>
                                        {category.description}
                                    </Typography>
                                </Paper>
                            </GridLegacy>
                        ))}
                    </GridLegacy>
                </Container>
            </Box>

            {/* Charts & Dashboard Projects */}
            <Box sx={{ py: 8, bgcolor: colorCombos.background.primary }}>
                <Container>
                    <Typography variant="h4" align="center" sx={{ fontWeight: 700, mb: 2, color: colorCombos.text.primary }}>
                        Charts, Dashboards & Reports
                    </Typography>
                    <Typography variant="h6" align="center" sx={{ mb: 6, color: colorCombos.text.secondary_1 }}>
                        Interactive data visualization and business intelligence solutions
                    </Typography>

                    <GridLegacy container spacing={4}>
                        {chartProjects.map((project, index) => (
                            <GridLegacy item xs={12} md={6} key={index}>
                                <ShowcaseCard project={project} />
                            </GridLegacy>
                        ))}
                    </GridLegacy>
                </Container>
            </Box>

            {/* Backend & API Projects */}
            <Box sx={{ py: 8, bgcolor: colorCombos.background.accent }}>
                <Container>
                    <Typography variant="h4" align="center" sx={{ fontWeight: 700, mb: 2, color: colorCombos.text.primary }}>
                        Backend & API Development
                    </Typography>
                    <Typography variant="h6" align="center" sx={{ mb: 6, color: colorCombos.text.secondary_1 }}>
                        Scalable backend systems, APIs, and data processing solutions
                    </Typography>

                    <GridLegacy container spacing={4}>
                        {backendProjects.map((project, index) => (
                            <GridLegacy item xs={12} md={6} lg={6} key={index}>
                                <ShowcaseCard project={project} />
                            </GridLegacy>
                        ))}
                    </GridLegacy>
                </Container>
            </Box>

            {/* 3D Rendering Projects */}
            <Box sx={{ py: 8, bgcolor: colorCombos.background.primary }}>
                <Container>
                    <Typography variant="h4" align="center" sx={{ fontWeight: 700, mb: 2, color: colorCombos.text.primary }}>
                        3D Rendering & Visualization
                    </Typography>
                    <Typography variant="h6" align="center" sx={{ mb: 6, color: colorCombos.text.secondary_1 }}>
                        Immersive 3D experiences and advanced visualization solutions
                    </Typography>

                    <GridLegacy container spacing={4} justifyContent="center">
                        {renderingProjects.map((project, index) => (
                            <GridLegacy item xs={12} md={6} lg={6} key={index}>
                                <ShowcaseCard project={project} />
                            </GridLegacy>
                        ))}
                    </GridLegacy>
                </Container>
            </Box>

            {/* Visualization Technologies */}
            <Box sx={{ py: 8, bgcolor: colorCombos.background.accent }}>
                <Container>
                    <Typography variant="h4" align="center" sx={{ fontWeight: 700, mb: 2, color: colorCombos.text.primary }}>
                        Visualization Technologies
                    </Typography>
                    <Typography variant="h6" align="center" sx={{ mb: 6, color: colorCombos.text.secondary_1 }}>
                        Specialized tools and frameworks for creating stunning visualizations
                    </Typography>

                    <GridLegacy container spacing={3}>
                        {visualizationTech.map((tech, index) => (
                            <GridLegacy item xs={12} sm={6} md={4} lg={4} key={index}>
                                <Paper
                                    sx={{
                                        p: 3,
                                        textAlign: 'center',
                                        height: '100%',
                                        bgcolor: colorCombos.background.primary,
                                        border: `1px solid ${colorCombos.border.light}`,
                                        '&:hover': {
                                            bgcolor: colorCombos.background.accent,
                                            transform: 'translateY(-2px)',
                                            boxShadow: `0 4px 15px ${colorCombos.card.shadow}`,
                                            transition: 'all 0.3s ease-in-out'
                                        }
                                    }}
                                >
                                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 1, color: colorCombos.text.primary }}>
                                        {tech.name}
                                    </Typography>
                                    <Chip
                                        label={`${tech.years} years`}
                                        size="small"
                                        sx={{
                                            mb: 2,
                                            backgroundColor: colorCombos.button.primary.background,
                                            color: colorCombos.button.primary.text,
                                            fontWeight: 600
                                        }}
                                    />
                                    <Typography variant="body2" sx={{ color: colorCombos.text.secondary_1 }}>
                                        {tech.description}
                                    </Typography>
                                </Paper>
                            </GridLegacy>
                        ))}
                    </GridLegacy>
                </Container>
            </Box>

            {/* Key Achievements in Visualization */}
            <Box sx={{ py: 8, bgcolor: colorCombos.background.primary }}>
                <Container>
                    <Typography variant="h4" align="center" sx={{ fontWeight: 700, mb: 6, color: colorCombos.text.primary }}>
                        Visualization Impact & Results
                    </Typography>

                    <GridLegacy container spacing={4} justifyContent="center">
                        <GridLegacy item xs={12} md={4} sx={{ textAlign: 'center' }}>
                            <Typography variant="h2" sx={{ fontWeight: 700, color: colorCombos.text.title, mb: 1 }}>
                                Real-time
                            </Typography>
                            <Typography variant="h6" sx={{ color: colorCombos.text.secondary_1, mb: 2 }}>
                                Data Processing
                            </Typography>
                            <Typography variant="body2" sx={{ color: colorCombos.text.secondary_1 }}>
                                Live production monitoring with trend prediction and alerts
                            </Typography>
                        </GridLegacy>
                        
                        <GridLegacy item xs={12} md={4} sx={{ textAlign: 'center' }}>
                            <Typography variant="h2" sx={{ fontWeight: 700, color: colorCombos.text.title, mb: 1 }}>
                                Multi-cloud
                            </Typography>
                            <Typography variant="h6" sx={{ color: colorCombos.text.secondary_1, mb: 2 }}>
                                Architecture
                            </Typography>
                            <Typography variant="body2" sx={{ color: colorCombos.text.secondary_1 }}>
                                Azure & AWS integration for scalable visualization solutions
                            </Typography>
                        </GridLegacy>
                        
                        <GridLegacy item xs={12} md={4} sx={{ textAlign: 'center' }}>
                            <Typography variant="h2" sx={{ fontWeight: 700, color: colorCombos.text.title, mb: 1 }}>
                                Enterprise
                            </Typography>
                            <Typography variant="h6" sx={{ color: colorCombos.text.secondary_1, mb: 2 }}>
                                Grade Solutions
                            </Typography>
                            <Typography variant="body2" sx={{ color: colorCombos.text.secondary_1 }}>
                                High-performance dashboards with advanced UI components
                            </Typography>
                        </GridLegacy>
                    </GridLegacy>
                </Container>
            </Box>

            {/* Call to Action */}
            <Box sx={{ py: 8, bgcolor: colorCombos.background.section }}>
                <Container>
                    <Typography variant="h4" align="center" sx={{ color: colorCombos.button.primary.text, fontWeight: 700, mb: 3 }}>
                        Ready to Visualize Your Data?
                    </Typography>
                    <Typography align="center" sx={{ mb: 4, color: colorCombos.text.light }}>
                        Let&apos;s transform your data into compelling visual stories and interactive experiences.
                    </Typography>
                    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
                        <Link href="/project-portfolio" style={{ textDecoration: 'none' }}>
                            <Paper
                                sx={{
                                    p: 2,
                                    textAlign: 'center',
                                    bgcolor: 'transparent',
                                    border: `2px solid ${colorCombos.button.primary.text}`,
                                    color: colorCombos.button.primary.text,
                                    cursor: 'pointer',
                                    minWidth: '200px',
                                    '&:hover': {
                                        bgcolor: colorCombos.button.primary.text,
                                        color: colorCombos.background.section,
                                        transition: 'all 0.3s ease-in-out'
                                    }
                                }}
                            >
                                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                                    View Full Portfolio
                                </Typography>
                            </Paper>
                        </Link>
                        <Link href="/about" style={{ textDecoration: 'none' }}>
                            <Paper
                                sx={{
                                    p: 2,
                                    textAlign: 'center',
                                    bgcolor: colorCombos.button.primary.text,
                                    color: colorCombos.background.section,
                                    cursor: 'pointer',
                                    minWidth: '200px',
                                    '&:hover': {
                                        bgcolor: 'transparent',
                                        border: `2px solid ${colorCombos.button.primary.text}`,
                                        color: colorCombos.button.primary.text,
                                        transition: 'all 0.3s ease-in-out'
                                    }
                                }}
                            >
                                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                                    Get In Touch
                                </Typography>
                            </Paper>
                        </Link>
                    </Stack>
                </Container>
            </Box>
        </>
    );
}
