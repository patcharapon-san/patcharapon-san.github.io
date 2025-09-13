import { Box, Typography, Link as MuiLink, Container, Link, IconButton } from "@mui/material";
import { colorCombos } from "../utils/colors";
import { Email, GitHub, LinkedIn } from "@mui/icons-material";

export default function Footer({ title }: { title?: string }) {
  return (
    <>

      <Box sx={{ p: 4, bgcolor: colorCombos.background.primary, borderRadius: 2, boxShadow: 1, textAlign: 'center' }}>
        <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, color: colorCombos.text.primary, mb: 3 }}>
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
        <Typography variant="body2" color={colorCombos.text.secondary_1} sx={{ mt: 2 }}>
          Feel free to reach out for collaborations, opportunities, or just to say hello!
        </Typography>
      </Box>
      <Box sx={{ bgcolor: colorCombos.background.accent, py: 4 }}>
        <Container>
          <Typography align="center" variant="body2" sx={{ color: colorCombos.text.secondary_1 }}>
            &copy; {new Date().getFullYear()} {title}. Built with{" "}
            <MuiLink
              href="https://nextjs.org/"
              target="_blank"
              rel="noopener"
              sx={{ color: colorCombos.text.link, "&:hover": { color: colorCombos.text.title } }}
            >
              Next.js.
            </MuiLink>{" "}
            &{" "}
            <MuiLink
              href="https://mui.com/"
              target="_blank"
              rel="noopener"
              sx={{ color: colorCombos.text.link, "&:hover": { color: colorCombos.text.title } }}
            >
              MUI
            </MuiLink>
            .
          </Typography>
        </Container>
      </Box>
    </>
  );
}
