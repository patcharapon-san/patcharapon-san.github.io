"use client";
import HeroSection from "@/components/HeroSection";
import { Box, Typography, Container, Paper, Chip, Stack } from "@mui/material";
import GridLegacy from "@mui/material/GridLegacy";
import Link from "next/link";
import {
    Code,
    WebOutlined,
    SchoolOutlined,
    OilBarrel,
    AccountBalanceOutlined,
    Factory,
    People
} from "@mui/icons-material";
import { colorCombos } from "@/utils/colors";

// Programming Languages with years of experience
const programmingLanguages = [
    { name: "C#/.NET", years: "9+", description: "Enterprise applications, WPF, Web API", category: "expert" },
    { name: "JavaScript/TypeScript", years: "6+", description: "Modern web development, Node.js", category: "expert" },
    { name: "SQL", years: "8+", description: "Database design, optimization, stored procedures", category: "expert" },
    { name: "HTML/CSS", years: "7+", description: "Semantic markup, responsive design", category: "expert" },
    { name: "Python", years: "3+", description: "Automation, data processing, scripting", category: "proficient" },
    { name: "PowerShell", years: "4+", description: "System administration, DevOps automation", category: "proficient" },
    { name: "VB.NET", years: "2+", description: "Legacy system maintenance", category: "proficient" },
    { name: "XAML", years: "3+", description: "WPF/UWP application UI development", category: "proficient" },
];

// Frontend Technologies
const frontendTech = [
    { name: "React", years: "4+", description: "Hooks, Context, SSR, Modern patterns" },
    { name: "Next.js", years: "2+", description: "App Router, Static generation, Performance" },
    { name: "Material-UI", years: "3+", description: "Theming, Custom components, Responsive design" },
    { name: "Tailwind CSS", years: "2+", description: "Utility-first, Custom design systems" },
    { name: "ASP.NET Core MVC", years: "5+", description: "Server-side rendering, Razor views" },
    { name: "WPF", years: "2+", description: "Desktop applications, MVVM, Custom controls" },
];

// Backend & Cloud Technologies
const backendCloudTech = [
    { name: "AWS Lambda", years: "2+", description: "Serverless functions, Event-driven architecture" },
    { name: "ASP.NET Web API", years: "8+", description: "RESTful services, Authentication, Middleware" },
    { name: "Node.js", years: "3+", description: "Express, RESTful APIs, Microservices" },
    { name: "Entity Framework", years: "8+", description: "ORM, Code First, Database migrations" },
    { name: "Azure Services", years: "4+", description: "App Services, Data Factory, Azure Functions, Application Insights, Data, SQL Database, Storage" },
    { name: "Azure DevOps", years: "3+", description: "CI/CD pipelines, Repos, Boards" },
    { name: "Docker", years: "1+", description: "Containerization, Microservices deployment" },
];

// Databases
const databases = [
    { name: "SQL Server", years: "9+", description: "T-SQL, Stored procedures, Performance optimization" },
    { name: "MySQL", years: "3+", description: "Database design, Replication, High availability" },
    { name: "PostgreSQL", years: "1+", description: "Advanced queries, JSON support, Full-text search" },
    { name: "Oracle", years: "3+", description: "Enterprise databases, PL/SQL, Data warehousing" },
];

// Industry Experience
const industryExperience = [
    { name: "Oil & Gas", years: "4+", projects: "Production systems, Regulatory compliance", icon: <OilBarrel fontSize="large" color="primary" /> },
    { name: "Government", years: "1+", projects: "Electronic visa systems, Public services", icon: <AccountBalanceOutlined fontSize="large" color="primary" /> },
    { name: "Manufacturing", years: "2+", projects: "Production tracking, Inventory management", icon: <Factory fontSize="large" color="primary" /> },
    { name: "E-commerce", years: "2+", projects: "Payment processing, Order management", icon: <WebOutlined fontSize="large" color="primary" /> },
    { name: "Marketing Tech", years: "2+", projects: "Email automation, CMS, Analytics", icon: <Code fontSize="large" color="primary" /> },
    { name: "HR Technology", years: "2+", projects: "Recruitment systems, Employee management", icon: <People fontSize="large" color="primary" /> },
    { name: "Education", years: "2+", projects: "Learning management, Student information", icon: <SchoolOutlined fontSize="large" color="primary" /> },
];

// Key Achievements
const keyAchievements = [
    { title: "Performance Optimization", description: "96% reduction in report generation time", impact: "High" },
    { title: "Microservices Architecture", description: "30+ AWS Lambda functions in production", impact: "High" },
    { title: "System Reliability", description: "99.9% uptime for critical business systems", impact: "High" },
    { title: "Process Automation", description: "80% reduction in manual processing", impact: "Medium" },
    { title: "Email Marketing Platform", description: "20,000+ daily emails processed", impact: "Medium" },
    { title: "Concurrent Processing", description: "10,000+ visa applications at peak time", impact: "High" },
];

const SkillCard = ({ name, years, description, category }: { name: string; years?: string; description: string; category?: string }) => (
    <Paper sx={{
        p: 3,
        mb: 2,
        bgcolor: colorCombos.background.primary,
        border: `1px solid ${colorCombos.border.light}`,
        '&:hover': {
            bgcolor: colorCombos.background.accent,
            transform: 'translateY(-2px)',
            boxShadow: `0 4px 15px ${colorCombos.card.shadow}`,
            transition: 'all 0.3s ease-in-out'
        }
    }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
            <Typography variant="h6" sx={{ fontWeight: 600, color: colorCombos.text.primary }}>
                {name}
            </Typography>
            {years && (
                <Chip
                    label={`${years} years`}
                    size="small"
                    sx={{
                        backgroundColor: category === 'expert' ? colorCombos.button.success.background : colorCombos.button.primary.background,
                        color: colorCombos.button.primary.text,
                        fontWeight: 600
                    }}
                />
            )}
        </Box>
        <Typography variant="body2" sx={{ color: colorCombos.text.secondary_1 }}>
            {description}
        </Typography>
    </Paper>
);

export default function Skills() {
    return (
        <>
            <HeroSection
                title="Skills & Technologies"
                subtitle="10+ years of full-stack development expertise across multiple industries and modern technologies."
                sx={{ backgroundImage: 'url(/work-station-3.jpg)', backgroundSize: 'cover' }}
                textAlign="center"
            />

            {/* Quick Stats Section */}
            <Box sx={{ py: 6, bgcolor: colorCombos.background.accent }}>
                <Container>
                    <GridLegacy container spacing={4} justifyContent="center">
                        <GridLegacy item xs={6} md={3} sx={{ textAlign: 'center' }}>
                            <Typography variant="h3" sx={{ fontWeight: 700, color: colorCombos.text.title, mb: 1 }}>
                                10+
                            </Typography>
                            <Typography variant="h6" sx={{ color: colorCombos.text.secondary_1 }}>
                                Years Experience
                            </Typography>
                        </GridLegacy>
                        <GridLegacy item xs={6} md={3} sx={{ textAlign: 'center' }}>
                            <Typography variant="h3" sx={{ fontWeight: 700, color: colorCombos.text.title, mb: 1 }}>
                                7
                            </Typography>
                            <Typography variant="h6" sx={{ color: colorCombos.text.secondary_1 }}>
                                Industries
                            </Typography>
                        </GridLegacy>
                        <GridLegacy item xs={6} md={3} sx={{ textAlign: 'center' }}>
                            <Typography variant="h3" sx={{ fontWeight: 700, color: colorCombos.text.title, mb: 1 }}>
                                15+
                            </Typography>
                            <Typography variant="h6" sx={{ color: colorCombos.text.secondary_1 }}>
                                Technologies
                            </Typography>
                        </GridLegacy>
                        <GridLegacy item xs={6} md={3} sx={{ textAlign: 'center' }}>
                            <Typography variant="h3" sx={{ fontWeight: 700, color: colorCombos.text.title, mb: 1 }}>
                                30+
                            </Typography>
                            <Typography variant="h6" sx={{ color: colorCombos.text.secondary_1 }}>
                                Projects Delivered
                            </Typography>
                        </GridLegacy>
                    </GridLegacy>
                </Container>
            </Box>

            {/* Programming Languages Section */}
            <Box sx={{ py: 8, bgcolor: colorCombos.background.primary }}>
                <Container>
                    <Typography variant="h4" align="center" sx={{ fontWeight: 700, mb: 2, color: colorCombos.text.primary }}>
                        Programming Languages
                    </Typography>
                    <Typography variant="h6" align="center" sx={{ mb: 6, color: colorCombos.text.secondary_1 }}>
                        Core programming languages with years of hands-on experience
                    </Typography>

                    <GridLegacy container spacing={4}>
                        <GridLegacy item xs={12} md={6}>
                            <Paper sx={{ p: 4, bgcolor: colorCombos.background.primary, border: `1px solid ${colorCombos.border.light}` }}>
                                <Typography variant="h5" sx={{ fontWeight: 600, mb: 3, color: colorCombos.text.title }}>
                                    Extensive Experience (5+ years)
                                </Typography>
                                {programmingLanguages.filter(lang => lang.category === 'expert').map((lang, index) => (
                                    <SkillCard key={index} {...lang} />
                                ))}
                            </Paper>
                        </GridLegacy>

                        <GridLegacy item xs={12} md={6}>
                            <Paper sx={{ p: 4, bgcolor: colorCombos.background.primary, border: `1px solid ${colorCombos.border.light}` }}>
                                <Typography variant="h5" sx={{ fontWeight: 600, mb: 3, color: colorCombos.text.title }}>
                                    Working Experience (1-4 years)
                                </Typography>
                                {programmingLanguages.filter(lang => lang.category === 'proficient').map((lang, index) => (
                                    <SkillCard key={index} {...lang} />
                                ))}
                            </Paper>
                        </GridLegacy>
                    </GridLegacy>
                </Container>
            </Box>

            {/* Frontend Technologies */}
            <Box sx={{ py: 8, bgcolor: colorCombos.background.accent }}>
                <Container>
                    <Typography variant="h4" align="center" sx={{ fontWeight: 700, mb: 6, color: colorCombos.text.primary }}>
                        Frontend Technologies
                    </Typography>

                    <GridLegacy container spacing={3}>
                        {frontendTech.map((tech, index) => (
                            <GridLegacy item xs={12} md={6} key={index}>
                                <SkillCard name={tech.name} years={tech.years} description={tech.description} />
                            </GridLegacy>
                        ))}
                    </GridLegacy>
                </Container>
            </Box>

            {/* Backend & Cloud Technologies */}
            <Box sx={{ py: 8, bgcolor: colorCombos.background.primary }}>
                <Container>
                    <Typography variant="h4" align="center" sx={{ fontWeight: 700, mb: 6, color: colorCombos.text.primary }}>
                        Backend & Cloud Technologies
                    </Typography>

                    <GridLegacy container spacing={3}>
                        {backendCloudTech.map((tech, index) => (
                            <GridLegacy item xs={12} md={6} key={index}>
                                <SkillCard name={tech.name} years={tech.years} description={tech.description} />
                            </GridLegacy>
                        ))}
                    </GridLegacy>
                </Container>
            </Box>

            {/* Databases */}
            <Box sx={{ py: 8, bgcolor: colorCombos.background.accent }}>
                <Container>
                    <Typography variant="h4" align="center" sx={{ fontWeight: 700, mb: 6, color: colorCombos.text.primary }}>
                        Database Technologies
                    </Typography>

                    <GridLegacy container spacing={3}>
                        {databases.map((db, index) => (
                            <GridLegacy item xs={12} md={6} key={index}>
                                <SkillCard name={db.name} years={db.years} description={db.description} />
                            </GridLegacy>
                        ))}
                    </GridLegacy>
                </Container>
            </Box>

            {/* Industry Experience */}
            <Box sx={{ py: 8, bgcolor: colorCombos.background.primary }}>
                <Container>
                    <Typography variant="h4" align="center" sx={{ fontWeight: 700, mb: 2, color: colorCombos.text.primary }}>
                        Industry Experience
                    </Typography>
                    <Typography variant="h6" align="center" sx={{ mb: 6, color: colorCombos.text.secondary_1 }}>
                        Cross-industry expertise across 7 different sectors
                    </Typography>

                    <GridLegacy container spacing={4}>
                        {industryExperience.map((industry, index) => (
                            <GridLegacy item xs={12} md={6} lg={4} key={index}>
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
                                    <Box sx={{ mb: 2 }}>
                                        {industry.icon}
                                    </Box>
                                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 1, color: colorCombos.text.primary }}>
                                        {industry.name}
                                    </Typography>
                                    <Chip
                                        label={`${industry.years} years`}
                                        size="small"
                                        sx={{
                                            mb: 2,
                                            backgroundColor: colorCombos.background.accent,
                                            color: colorCombos.text.primary
                                        }}
                                    />
                                    <Typography variant="body2" sx={{ color: colorCombos.text.secondary_1 }}>
                                        {industry.projects}
                                    </Typography>
                                </Paper>
                            </GridLegacy>
                        ))}
                    </GridLegacy>
                </Container>
            </Box>

            {/* Key Achievements */}
            <Box sx={{ py: 8, bgcolor: colorCombos.background.accent }}>
                <Container>
                    <Typography variant="h4" align="center" sx={{ fontWeight: 700, mb: 2, color: colorCombos.text.primary }}>
                        Key Achievements & Impact
                    </Typography>
                    <Typography variant="h6" align="center" sx={{ mb: 6, color: colorCombos.text.secondary_1 }}>
                        Quantifiable results and business impact across projects
                    </Typography>

                    <GridLegacy container spacing={4}>
                        {keyAchievements.map((achievement, index) => (
                            <GridLegacy item xs={12} md={6} key={index}>
                                <Paper
                                    sx={{
                                        p: 4,
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
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                                        <Typography variant="h6" sx={{ fontWeight: 600, color: colorCombos.text.primary }}>
                                            {achievement.title}
                                        </Typography>
                                        <Chip
                                            label={achievement.impact}
                                            size="small"
                                            sx={{
                                                backgroundColor: achievement.impact === 'High' ? colorCombos.button.success.background :
                                                    achievement.impact === 'Medium' ? colorCombos.button.warning.background :
                                                        colorCombos.button.secondary.background,
                                                color: colorCombos.button.primary.text
                                            }}
                                        />
                                    </Box>
                                    <Typography variant="body1" sx={{ color: colorCombos.text.secondary_1 }}>
                                        {achievement.description}
                                    </Typography>
                                </Paper>
                            </GridLegacy>
                        ))}
                    </GridLegacy>
                </Container>
            </Box>

            {/* Call to Action */}
            <Box sx={{ py: 8, bgcolor: colorCombos.background.section }}>
                <Container>
                    <Typography variant="h4" align="center" sx={{ color: colorCombos.button.primary.text, fontWeight: 700, mb: 3 }}>
                        Let&apos;s Build Something Amazing Together
                    </Typography>
                    <Typography align="center" sx={{ mb: 4, color: colorCombos.text.light }}>
                        Ready to leverage these skills for your next project? Let&apos;s discuss how I can help bring your vision to life.
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
                                    View My Projects
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
                                    Learn More About Me
                                </Typography>
                            </Paper>
                        </Link>
                    </Stack>
                </Container>
            </Box>
        </>
    );
}
