"use client";
import { Box, Button, Container, Typography, Paper } from "@mui/material";
import { colorCombos } from "../utils/colors";

export default function HeroSection({ title, subtitle, buttonText, buttonFunction, sx, textAlign = "center" }:
  { title?: string; subtitle?: string; buttonText?: string; buttonFunction?: () => void; sx?: object, textAlign?: "left" | "center" | "right" }) {

  return (
    <Box sx={{ bgcolor: colorCombos.background.accent }}>
      <Paper
        elevation={3}
        sx={{
          background: `linear-gradient(135deg, ${colorCombos.background.accent} 0%, ${colorCombos.background.secondary} 100%)`,
          py: { xs: 8, md: 12 },
          px: { xs: 2, md: 4 },
          borderRadius: 4,
          ...sx
        }}
      >
        <Container maxWidth="md" sx={{
          textAlign: { textAlign },
          // if textAlign is left, margin-left to initail, if right set margin-right to initail, if center align set margin to auto
          ml: textAlign === "left" ? 0 : textAlign === "right" ? "auto" : "auto",
          mr: textAlign === "right" ? 0 : textAlign === "left" ? "auto" : "auto"
        }}>
          <Typography variant="h2" component="h1" gutterBottom
            sx={{
              fontWeight: 700,
              color: colorCombos.text.primary,
              textShadow: `1px 1px 0 ${colorCombos.text.light}, -1px -1px 0 ${colorCombos.text.light}, 1px -1px 0 ${colorCombos.text.light}, -1px 1px 0 ${colorCombos.text.light}`, // Outline color and thickness
            }}>
            {title}
          </Typography>
          <Typography 
            variant="h5" 
            sx={{ mb: 4, color: colorCombos.text.light }}
            dangerouslySetInnerHTML={{ __html: subtitle || '' }}
          />
          {buttonText && (
            <Button
              onClick={buttonFunction}
              variant="contained"
              size="large"
              sx={{
                px: 6,
                py: 2,
                fontWeight: 600,
                bgcolor: colorCombos.button.secondary.background,
                color: colorCombos.button.secondary.text,
                "&:hover": {
                  bgcolor: colorCombos.button.secondary.hover
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
