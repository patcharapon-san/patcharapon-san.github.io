import { Box, Typography, Paper, Avatar, Container } from "@mui/material";
import GridLegacy from "@mui/material/GridLegacy";
import { colorCombos } from "../utils/colors";

export default function Gallery2xN({ title, items }: { title?: string; items?: { icon?: React.ReactNode; image?: string; name: string; text: string }[] }) {
  return (
    <Box sx={{ py: 8, bgcolor: colorCombos.gallery.background }}>
      <Container>
        <Typography variant="h4" align="center" sx={{ fontWeight: 700, mb: 6, color: colorCombos.text.primary }}>
          {title}
        </Typography>
        <GridLegacy container spacing={4} justifyContent="center">
          {items?.map((t, i) => (
            <GridLegacy item xs={12} md={6} key={i}>
              <Paper
                elevation={2}
                sx={{
                  p: 4,
                  height: '100%',
                  bgcolor: colorCombos.background.primary,
                  borderRadius: 2,
                  border: `1px solid ${colorCombos.border.light}`,
                  "&:hover": {
                    boxShadow: `0 8px 25px ${colorCombos.card.shadow}`,
                    transform: "translateY(-2px)",
                    transition: "all 0.3s ease-in-out"
                  }
                }}
              >
                <Box display="flex" alignItems="center" mb={2}>
                  {t.image && (
                    <Avatar
                      src={t.image}
                      alt={t.name}
                      sx={{
                        width: 56,
                        height: 56,
                        mr: 2,
                        border: `2px solid ${colorCombos.gallery.cardBorder}`
                      }}
                    />
                  )}
                  {t.icon && (
                    <Box sx={{ mr: 2, color: colorCombos.gallery.iconColor }}>
                      {t.icon}
                    </Box>
                  )}
                  <Typography variant="h6" sx={{ fontWeight: 600, color: colorCombos.text.primary }}>
                    {t.name}
                  </Typography>
                </Box>
                <Typography sx={{ color: colorCombos.text.secondary_1, fontStyle: "italic" }}>
                  {t.text}
                </Typography>
              </Paper>
            </GridLegacy>
          ))}
        </GridLegacy>
      </Container>
    </Box>
  );
}
