import { Box, Typography, Link as MuiLink, Container } from "@mui/material";
import { colorCombos } from "../utils/colors";

export default function Footer({title}: { title?: string }) {
  return (
    <Box sx={{ bgcolor: colorCombos.background.accent, py: 4 }}>
      <Container>
        <Typography align="center" variant="body2" sx={{ color: colorCombos.text.secondary }}>
          &copy; {new Date().getFullYear()} {title}. Built with{" "}
          <MuiLink 
            href="https://nextjs.org/" 
            target="_blank" 
            rel="noopener"
            sx={{ color: colorCombos.text.link, "&:hover": { color: colorCombos.text.title } }}
          >
            Next.js..
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
  );
}
