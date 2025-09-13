import { Box, Typography, Paper, Stack, Container } from "@mui/material";
import GridLegacy from "@mui/material/GridLegacy";
import { colorCombos } from "../utils/colors";

export default function Gallery3xN({ title, items }: { title?: string; items?: { icon: React.ReactNode; title: string; desc: string }[] }) {
  return (
    <Box sx={{ py: 8, bgcolor: colorCombos.gallery.background }}>
      <Container>
        <Typography variant="h4" align="center" sx={{ fontWeight: 700, mb: 6, color: colorCombos.text.primary }}>
          {title}
        </Typography>
        <GridLegacy container spacing={4}>
          {items?.map((svc, i) => (
            <GridLegacy item xs={12} md={4} key={i} sx={{ display: 'flex', flexDirection: 'column' }}>
              <Paper 
                elevation={3} 
                sx={{ 
                  p: 4, 
                  textAlign: "center", 
                  height: '100%', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  justifyContent: 'center',
                  bgcolor: colorCombos.background.primary,
                  borderRadius: 2,
                  border: `1px solid ${colorCombos.border.light}`,
                  "&:hover": {
                    bgcolor: colorCombos.gallery.background,
                    boxShadow: `0 8px 25px ${colorCombos.card.shadow}`,
                    transform: "translateY(-4px)",
                    transition: "all 0.3s ease-in-out"
                  }
                }}
              >
                <Stack alignItems="center" spacing={2} sx={{ flexGrow: 1 }}>
                  <Box sx={{ color: colorCombos.gallery.iconColor }}>
                    {svc.icon}
                  </Box>
                  <Typography variant="h6" sx={{ fontWeight: 600, color: colorCombos.text.primary }}>
                    {svc.title}
                  </Typography>
                  <Typography sx={{ color: colorCombos.text.secondary }}>
                    {svc.desc}
                  </Typography>
                </Stack>
              </Paper>
            </GridLegacy>
          ))}
        </GridLegacy>
      </Container>
    </Box>
  );
}
