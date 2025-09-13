"use client";
import { Box, Button, Container, Typography, Paper } from "@mui/material";
import { colorCombos } from "../utils/colors";

export default function HeroSection({ title, subtitle, buttonText, buttonFunction }: { title?: string; subtitle?: string; buttonText?: string; buttonFunction?: () => void }) {
  return (
    <Box sx={{ bgcolor: colorCombos.background.accent }}>
      <Paper
        elevation={3}
        sx={{
          background: `linear-gradient(135deg, ${colorCombos.background.accent} 0%, ${colorCombos.background.secondary} 100%)`,
          py: { xs: 8, md: 12 },
          borderRadius: 4,
        }}
      >
        <Container maxWidth="md" sx={{ textAlign: "center" }}>
          <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 700, color: colorCombos.text.title }}>
            {title}
          </Typography>
          <Typography variant="h5" paragraph sx={{ mb: 4, color: colorCombos.text.secondary }}>
            {subtitle}
          </Typography>
          {buttonText && (
            <Button
              onClick={buttonFunction}
              variant="contained"
              size="large"
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
              {buttonText}
            </Button>
          )}
        </Container>
      </Paper>
    </Box>
  );
}
