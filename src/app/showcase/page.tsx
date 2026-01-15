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
import { getYearsOfExperience } from "@/utils/experience";
import { demos } from "@/data/demos";
import {
    chartProjectsData,
    backendProjectsData,
    renderingProjectsData,
    showcaseCategoriesData,
    visualizationTechData,
    type ShowcaseIconKey,
} from "@/data/showcase";

// Icon mapping for data-driven icons
const iconMap: Record<ShowcaseIconKey, React.ReactNode> = {
    BarChart: <BarChart fontSize="large" color="primary" />,
    Dashboard: <Dashboard fontSize="large" color="primary" />,
    Assessment: <Assessment fontSize="large" color="primary" />,
    ThreeDRotation: <ThreeDRotation fontSize="large" color="secondary" />,
    PieChart: <PieChart fontSize="large" color="primary" />,
    ViewInAr: <ViewInAr fontSize="large" color="info" />,
    Architecture: <Architecture fontSize="large" color="info" />,
    BubbleChart: <BubbleChart fontSize="large" />,
};

const ShowcaseCard = ({ project }: {
    project: {
        title: string;
        description: string;
        technologies: string[];
        features: string[];
        icon: React.ReactNode;
        category: string;
    }
}) => (
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

const showcaseDemos =
    (
        <>
            {/* Live Demos (merged from /demos) */}
            <Box id="live-demos" sx={{ py: 8, mt: 5, bgcolor: colorCombos.background.primary }}>
                <Container>
                    <Typography variant="h4" align="center" sx={{ fontWeight: 700, mb: 2, color: colorCombos.text.primary }}>
                        Live Demos
                    </Typography>
                    <Typography variant="h6" align="center" sx={{ mb: 6, color: colorCombos.text.secondary_1 }}>
                        Small, focused proofs of concept you can try in your browser
                    </Typography>

                    <GridLegacy container spacing={4}>
                        {demos.map((demo) => (
                            <GridLegacy key={demo.slug} item xs={12} md={6}>
                                <Link href={`/demos/${demo.slug}`} style={{ textDecoration: 'none' }}>
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
                                        <Typography variant="h5" sx={{ fontWeight: 600, color: colorCombos.text.title, mb: 1 }}>
                                            {demo.title}
                                        </Typography>
                                        <Stack direction="row" spacing={1} sx={{ mb: 2, flexWrap: 'wrap', gap: 1 }}>
                                            {demo.technologies.map((t) => (
                                                <Chip key={t} label={t} size="small" variant="outlined" sx={{ borderColor: colorCombos.border.light, color: colorCombos.text.secondary_1 }} />
                                            ))}
                                            {demo.status && (
                                                <Chip label={demo.status.toUpperCase()} size="small" sx={{ background: colorCombos.button.warning.background, color: colorCombos.button.primary.text }} />
                                            )}
                                        </Stack>
                                        <Typography variant="body2" sx={{ color: colorCombos.text.secondary_1 }}>
                                            {demo.summary}
                                        </Typography>
                                    </Paper>
                                </Link>
                            </GridLegacy>
                        ))}
                    </GridLegacy>
                </Container>
            </Box>
        </>
    );

export default function Showcase() {

    return (
        <>
            <HeroSection
                title="Project Showcase"
                subtitle="Explore my expertise in data visualization, dashboards, reports, and 3D rendering across various industries and technologies."
                textAlign="center"
                backgroundImage="/work-station-3.jpg"
                backgroundImageAlt="Work Station"
            />

            {/* Quick Overview */}
            <Box sx={{ py: 6, bgcolor: colorCombos.background.accent }}>
                <Container>
                    <Typography variant="h4" align="center" sx={{ fontWeight: 700, mb: 6, color: colorCombos.text.primary }}>
                        Showcase Categories
                    </Typography>
                    <GridLegacy container spacing={4}>
                        {showcaseCategoriesData.map((category, index) => (
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
                                        {iconMap[category.iconKey]}
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
                    {showcaseDemos}
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
                        {chartProjectsData.map((project, index) => (
                            <GridLegacy item xs={12} md={6} key={index}>
                                <ShowcaseCard project={{ ...project, icon: iconMap[project.iconKey] }} />
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
                        {backendProjectsData.map((project, index) => (
                            <GridLegacy item xs={12} md={6} lg={6} key={index}>
                                <ShowcaseCard project={{ ...project, icon: iconMap[project.iconKey] }} />
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
                        {renderingProjectsData.map((project, index) => (
                            <GridLegacy item xs={12} md={6} lg={6} key={index}>
                                <ShowcaseCard project={{ ...project, icon: iconMap[project.iconKey] }} />
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
                        {visualizationTechData.map((tech, index) => {
                            const years = typeof tech.startYear === 'number' ? `${getYearsOfExperience(tech.startYear)}+` : (tech.yearsLabel ?? "");
                            return (
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
                                            label={`${years} years`}
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
                            );
                        })}
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
