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
import { getYearsOfExperience, fmtYears } from "@/utils/experience";
import {
    programmingLanguagesData,
    frontendTechData,
    backendCloudTechData,
    databasesData,
    industryExperienceData,
    keyAchievementsData,
    type IndustryIconKey
} from "@/data/skills";

// Data-driven helpers
const iconMap: Record<IndustryIconKey, React.ReactNode> = {
    OilBarrel: <OilBarrel fontSize="large" color="primary" />,
    AccountBalanceOutlined: <AccountBalanceOutlined fontSize="large" color="primary" />,
    Factory: <Factory fontSize="large" color="primary" />,
    WebOutlined: <WebOutlined fontSize="large" color="primary" />,
    Code: <Code fontSize="large" color="primary" />,
    People: <People fontSize="large" color="primary" />,
    SchoolOutlined: <SchoolOutlined fontSize="large" color="primary" />,
};

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
    const totalYears = getYearsOfExperience(2016);
    return (
        <>
            <HeroSection
                title="Skills & Technologies"
                subtitle={`${totalYears}+ years of full-stack development expertise across multiple industries and modern technologies.`}
                sx={{ backgroundImage: 'url(/work-station-3.jpg)', backgroundSize: 'cover' }}
                textAlign="center"
            />

            {/* Quick Stats Section */}
            <Box sx={{ py: 6, bgcolor: colorCombos.background.accent }}>
                <Container>
                    <GridLegacy container spacing={4} justifyContent="center">
                        <GridLegacy item xs={6} md={3} sx={{ textAlign: 'center' }}>
                            <Typography variant="h3" sx={{ fontWeight: 700, color: colorCombos.text.title, mb: 1 }}>
                                {`${totalYears}+`}
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
                                20+
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
                                {programmingLanguagesData
                                    .filter(lang => lang.category === 'expert')
                                    .map((lang, index) => (
                                        <SkillCard
                                            key={index}
                                            name={lang.name}
                                            years={fmtYears(lang.yearsLabel, lang.startYear)}
                                            description={lang.description}
                                            category={lang.category}
                                        />
                                    ))}
                            </Paper>
                        </GridLegacy>

                        <GridLegacy item xs={12} md={6}>
                            <Paper sx={{ p: 4, bgcolor: colorCombos.background.primary, border: `1px solid ${colorCombos.border.light}` }}>
                                <Typography variant="h5" sx={{ fontWeight: 600, mb: 3, color: colorCombos.text.title }}>
                                    Working Experience (1-5 years)
                                </Typography>
                                {programmingLanguagesData
                                    .filter(lang => lang.category === 'proficient')
                                    .map((lang, index) => (
                                        <SkillCard
                                            key={index}
                                            name={lang.name}
                                            years={fmtYears(lang.yearsLabel, lang.startYear)}
                                            description={lang.description}
                                            category={lang.category}
                                        />
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
                        {frontendTechData.map((tech, index) => (
                            <GridLegacy item xs={12} md={6} key={index}>
                                <SkillCard name={tech.name} years={fmtYears(tech.yearsLabel, tech.startYear)} description={tech.description} />
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
                        {backendCloudTechData.map((tech, index) => (
                            <GridLegacy item xs={12} md={6} key={index}>
                                <SkillCard name={tech.name} years={fmtYears(tech.yearsLabel, tech.startYear)} description={tech.description} />
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
                        {databasesData.map((db, index) => (
                            <GridLegacy item xs={12} md={6} key={index}>
                                <SkillCard name={db.name} years={fmtYears(db.yearsLabel, db.startYear)} description={db.description} />
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
                        {industryExperienceData.map((industry, index) => (
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
                                        {iconMap[industry.iconKey as IndustryIconKey]}
                                    </Box>
                                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 1, color: colorCombos.text.primary }}>
                                        {industry.name}
                                    </Typography>
                                    <Chip
                                        label={`${fmtYears(industry.yearsLabel, industry.startYear)} years`}
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
                        {keyAchievementsData.map((achievement, index) => (
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
