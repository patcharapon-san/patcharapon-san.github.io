import { Box, Typography, Button, Container } from "@mui/material";
import { colorCombos } from "../utils/colors";

export default function HeroSection() {
  return (
    <Box
      id="home"
      sx={{
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: `linear-gradient(135deg, ${colorCombos.background.accent} 0%, ${colorCombos.background.secondary} 100%)`,
        py: 8,
      }}
    >
      <Container maxWidth="md" sx={{ textAlign: "center" }}>
        <Typography variant="h2" component="h1" sx={{ fontWeight: 700, color: colorCombos.text.title, mb: 2 }}>
          Build Stunning Websites for Your Agency
        </Typography>
        <Typography variant="h5" sx={{ mb: 4, color: colorCombos.text.secondary_1 }}>
          We help startups and businesses grow with modern web design and development.
        </Typography>
        <Button
          variant="contained"
          size="large"
          href="#contact"
          sx={{ 
            px: 6, 
            py: 2, 
            fontWeight: 600,
            bgcolor: colorCombos.button.primary.background,
            color: colorCombos.button.primary.text,
            "&:hover": {
              bgcolor: colorCombos.button.primary.hover
            }
          }}
        >
          Contact Us
        </Button>
      </Container>
    </Box>
  );
}
