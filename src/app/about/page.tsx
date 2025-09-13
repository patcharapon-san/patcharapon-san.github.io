import ContentFullWidth from "@/components/ContentFullWidth";
import LargeImage from "@/components/LargeImage";
import { Box, Typography, Container, IconButton, Link } from "@mui/material";
import { AccountBalance, Factory, School, ShoppingCart, LinkedIn, Email, GitHub } from "@mui/icons-material";
import { colorCombos } from "@/utils/colors";

export default function About() {
    return (
        <>
            <Box >
                <ContentFullWidth
                    image={["https://picsum.photos/600/400?random=70"]}
                    title="About Me - Patcharapon Sangsatra"
                    text="I'm a passionate software developer with a journey that spans over 10 years across diverse industries and technologies. What drives me is the challenge of solving complex business problems through elegant technical solutions."
                    text2="My diverse experience across 7 different industries has given me unique perspectives on how technology needs vary across sectors: Oil & Gas, Government, Manufacturing, E-commerce, Marketing, HR Technology, and Education."
                    imagePosition="above"
                />

                <LargeImage src="https://picsum.photos/1150/400?random=71" alt="Technology Innovation" maxWidth={1150} />

                <ContentFullWidth
                    image={["https://picsum.photos/600/400?random=72", "https://picsum.photos/600/400?random=74", "https://picsum.photos/600/400?random=75"]}
                    title="My Development Journey"
                    text="Starting as a Front-End/Back-End Developer, I quickly discovered my passion for creating systems that make people's work easier and more efficient. I evolved into Solutions Architect, designing comprehensive technology ecosystems.
                    Over the years, I've embraced new technologies and methodologies, from traditional desktop / website applications to modern cloud-native architectures."
                    text2="My expertise now spans full-stack development, serverless computing, and system integration."
                    imagePosition="below"
                />

                <Box sx={{ py: 6, bgcolor: colorCombos.background.secondary }}>
                    <Container maxWidth="lg">
                        <Box sx={{ p: 4, bgcolor: colorCombos.background.primary, borderRadius: 2, boxShadow: 1, textAlign: 'center' }}>
                            <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, color: colorCombos.text.title }}>
                                &ldquo;Code is poetry written for machines, but it should always serve humanity.&rdquo;
                            </Typography>
                            <Typography variant="body1" color={colorCombos.text.secondary} sx={{ mt: 2 }}>
                                Looking forward to working on projects that scale globally while maintaining personal user experiences,
                                and make a positive impact on how people work and interact with technology.
                            </Typography>
                        </Box>
                    </Container>
                </Box>

                <ContentFullWidth
                    image={["https://picsum.photos/600/400?random=73"]}
                    title="Work Philosophy & Approach"
                    text="As both enterprise team member and independent contractor, I've learned to be self-motivated, client-focused with strong communication skills, and adaptable to different team dynamics. I believe in quality over quantity and building robust, maintainable solutions."
                    text2="Whether it's helping manufacturing teams track production efficiently, enabling students to learn complex engineering concepts through interactive tools, or streamlining government processes, I'm driven by the impact my work has on real people's daily lives."
                    imagePosition="None"
                />

                <Box sx={{ py: 6, bgcolor: colorCombos.background.secondary }}>
                    <Container maxWidth="lg">
                        <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 600, mb: 4, color: colorCombos.text.primary }}>
                            Industries & Expertise
                        </Typography>
                        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 4, mb: 4 }}>
                            <Box sx={{ p: 3, bgcolor: colorCombos.background.primary, borderRadius: 2, boxShadow: 1 }}>
                                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, color: colorCombos.text.title }}>
                                    <Factory fontSize="large" sx={{ color: colorCombos.icon.primary }} /> Manufacturing & Industrial
                                </Typography>
                                <Typography variant="body2" color={colorCombos.text.secondary}>
                                    • Production tracking and equipment management<br />
                                    • Real-time monitoring and automated workflows<br />
                                    • Legacy system modernization and optimization
                                </Typography>
                            </Box>

                            <Box sx={{ p: 3, bgcolor: colorCombos.background.primary, borderRadius: 2, boxShadow: 1 }}>
                                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, color: colorCombos.text.title }}>
                                    <AccountBalance fontSize="large" sx={{ color: colorCombos.icon.primary }} /> Government & Compliance
                                </Typography>
                                <Typography variant="body2" color={colorCombos.text.secondary}>
                                    • Secure, compliant system development<br />
                                    • Visa processing and government workflows<br />
                                    • Enterprise-grade security implementation<br />
                                    • Role-based access and audit systems
                                </Typography>
                            </Box>

                            <Box sx={{ p: 3, bgcolor: colorCombos.background.primary, borderRadius: 2, boxShadow: 1 }}>
                                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, color: colorCombos.text.title }}>
                                    <ShoppingCart fontSize="large" sx={{ color: colorCombos.icon.primary }} /> E-commerce & Retail
                                </Typography>
                                <Typography variant="body2" color={colorCombos.text.secondary}>
                                    • E-commerce ecosystem development<br />
                                    • Warehouse management and logistics<br />
                                    • Real-time inventory and order processing
                                </Typography>
                            </Box>

                            <Box sx={{ p: 3, bgcolor: colorCombos.background.primary, borderRadius: 2, boxShadow: 1 }}>
                                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, color: colorCombos.text.title }}>
                                    <School fontSize="large" sx={{ color: colorCombos.icon.primary }} /> Education & Training
                                </Typography>
                                <Typography variant="body2" color={colorCombos.text.secondary}>
                                    • Interactive learning applications<br />
                                    • 3D visualization for complex concepts<br />
                                    • Educational tool development for engineering<br />
                                    • Simplified technical concept delivery
                                </Typography>
                            </Box>
                        </Box>                        
                        <Box sx={{ p: 4, bgcolor: colorCombos.background.primary, borderRadius: 2, boxShadow: 1, textAlign: 'center' }}>
                            <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, color: colorCombos.text.title, mb: 3 }}>
                                Let&apos;s Connect
                            </Typography>
                            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3 }}>
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
                            <Typography variant="body2" color={colorCombos.text.secondary} sx={{ mt: 2 }}>
                                Feel free to reach out for collaborations, opportunities, or just to say hello!
                            </Typography>
                        </Box>
                    </Container>
                </Box>
            </Box>
        </>
    );
}
