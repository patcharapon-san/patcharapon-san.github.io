import ContentFullWidth from "@/components/ContentFullWidth";
import LargeImage from "@/components/LargeImage";
import { Box, Typography, Container } from "@mui/material";
import { AccountBalanceOutlined, Factory, SchoolOutlined, ShoppingCartOutlined } from "@mui/icons-material";
import { colorCombos } from "@/utils/colors";
import HeroSection from "@/components/HeroSection";

export default function About() {
    return (
        <>
            <HeroSection
                title="About Me"
                sx={{ backgroundImage: 'url(/work-station-4.jpg)', backgroundSize: 'cover' }}
                textAlign="center"
            />

            <ContentFullWidth
                title="My Development Journey"
                text="I'm a passionate <strong>software developer</strong> with a journey that spans over <strong>10 years</strong> across diverse industries and technologies. What drives me is the challenge of solving <strong>complex business problems</strong> through <strong>elegant technical solutions</strong>. My diverse experience across <strong>7 different industries</strong> has given me unique perspectives on how technology needs vary across sectors: <strong>Oil & Gas</strong>, <strong>Government</strong>, <strong>Manufacturing</strong>, <strong>E-commerce</strong>, <strong>Marketing</strong>, <strong>HR Technology</strong>, and <strong>Education</strong>."
                text2="Starting as a <strong>Front-End/Back-End Developer</strong>, I quickly discovered my passion for creating systems that make people's work easier and more efficient. I evolved into <strong>Solutions Architect</strong>, designing <strong>comprehensive technology ecosystems</strong>. Over the years, I've embraced new technologies and methodologies, from traditional <strong>desktop / website applications</strong> to modern <strong>cloud-native architectures</strong>. My expertise now spans <strong>full-stack development</strong>, <strong>serverless computing</strong>, and <strong>system integration</strong>."
                imagePosition="None"
            />

            <LargeImage src="/overall.png" alt="Technology Innovation" maxWidth={1150} maxHeight={600} />

            <ContentFullWidth
                title="Work Philosophy & Approach"
                text="As both <strong>enterprise team member</strong> and <strong>independent contractor</strong>, I've learned to be self-motivated, client-focused with strong communication skills, and adaptable to different team dynamics. I believe in <strong>quality over quantity</strong> and building robust, maintainable solutions."
                text2="Whether it's helping manufacturing teams track production efficiently, enabling students to learn complex engineering concepts through interactive tools, or streamlining government processes, I'm driven by the <strong>impact my work has on real people's daily lives</strong>."
                imagePosition="None"
            />

            <Box sx={{ py: 6, bgcolor: colorCombos.background.secondary }}>
                <Container maxWidth="lg">
                    <Box sx={{ p: 4, bgcolor: colorCombos.background.primary, borderRadius: 2, boxShadow: 1, textAlign: 'center' }}>
                        <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, color: colorCombos.text.title }}>
                            &ldquo;Code is poetry written for machines, but it should always serve humanity.&rdquo;
                        </Typography>
                        <Typography variant="body1" color={colorCombos.text.secondary_1} sx={{ mt: 2 }}>
                            Looking forward to working on projects that scale globally while maintaining personal user experiences,
                            and make a positive impact on how people work and interact with technology.
                        </Typography>
                    </Box>
                </Container>
            </Box>

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
                            <Typography variant="body2" color={colorCombos.text.secondary_1}>
                                • <strong>Production tracking</strong> and equipment management<br />
                                • Real-time monitoring and <strong>automated workflows</strong><br />
                                • <strong>Legacy system modernization</strong> and optimization
                            </Typography>
                        </Box>

                        <Box sx={{ p: 3, bgcolor: colorCombos.background.primary, borderRadius: 2, boxShadow: 1 }}>
                            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, color: colorCombos.text.title }}>
                                <AccountBalanceOutlined fontSize="large" sx={{ color: colorCombos.icon.primary }} /> Government & Compliance
                            </Typography>
                            <Typography variant="body2" color={colorCombos.text.secondary_1}>
                                • <strong>Secure, compliant system development</strong><br />
                                • <strong>Visa processing</strong> and government workflows<br />
                                • Enterprise-grade security implementation<br />
                                • Role-based access and <strong>audit systems</strong>
                            </Typography>
                        </Box>

                        <Box sx={{ p: 3, bgcolor: colorCombos.background.primary, borderRadius: 2, boxShadow: 1 }}>
                            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, color: colorCombos.text.title }}>
                                <ShoppingCartOutlined fontSize="large" sx={{ color: colorCombos.icon.primary }} /> E-commerce & Retail
                            </Typography>
                            <Typography variant="body2" color={colorCombos.text.secondary_1}>
                                • <strong>E-commerce ecosystem development</strong><br />
                                • Warehouse management and logistics<br />
                                • <strong>Real-time inventory</strong> and order processing
                            </Typography>
                        </Box>

                        <Box sx={{ p: 3, bgcolor: colorCombos.background.primary, borderRadius: 2, boxShadow: 1 }}>
                            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, color: colorCombos.text.title }}>
                                <SchoolOutlined fontSize="large" sx={{ color: colorCombos.icon.primary }} /> Education & Training
                            </Typography>
                            <Typography variant="body2" color={colorCombos.text.secondary_1}>
                                • <strong>Interactive learning applications</strong><br />
                                • <strong>3D visualization</strong> for complex concepts<br />
                                • Educational tool development for engineering<br />
                                • Simplified technical concept delivery
                            </Typography>
                        </Box>
                    </Box>
                </Container>
            </Box>
        </>
    );
}
