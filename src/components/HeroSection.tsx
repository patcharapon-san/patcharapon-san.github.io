"use client";
import { Box, Button, Container, Typography, Paper } from "@mui/material";
import Image from "next/image";
import { colorCombos } from "../utils/colors";

export default function HeroSection({ 
  title, 
  subtitle, 
  buttonText, 
  buttonFunction, 
  sx, 
  textAlign = "center",
  backgroundImage,
  backgroundImageAlt = "Hero background"
}: { 
  title?: string; 
  subtitle?: string; 
  buttonText?: string; 
  buttonFunction?: () => void; 
  sx?: object; 
  textAlign?: "left" | "center" | "right";
  backgroundImage?: string;
  backgroundImageAlt?: string;
}) {

  return (
    <Box sx={{ bgcolor: colorCombos.background.accent, position: 'relative', overflow: 'hidden' }}>
      <Paper
        elevation={3}
        sx={{
          position: 'relative',
          background: backgroundImage 
            ? 'transparent' 
            : `linear-gradient(135deg, ${colorCombos.background.accent} 0%, ${colorCombos.background.secondary} 100%)`,
          py: { xs: 8, md: 12 },
          px: { xs: 2, md: 4 },
          borderRadius: 4,
          ...sx
        }}
      >
        {backgroundImage && (
          <>
            <Image
              src={backgroundImage}
              alt={backgroundImageAlt}
              fill
              priority
              quality={90}
              sizes="100vw"
              style={{
                objectFit: 'cover',
                zIndex: 0
              }}
            />
            {/* Gradient overlay for better text readability */}
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: `linear-gradient(135deg, ${colorCombos.background.accent}CC 0%, ${colorCombos.background.secondary}CC 100%)`,
                zIndex: 1
              }}
            />
          </>
        )}
        <Container maxWidth="md" sx={{
          position: 'relative',
          zIndex: 2,
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
            sx={{ mb: 4, color: colorCombos.text.extraLight }}
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
