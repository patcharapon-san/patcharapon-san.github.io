"use client";
import { AppBar, Toolbar, Typography, Button, Box, Container } from "@mui/material";
import { colorCombos } from "../utils/colors";
import Link from "next/link";

export default function Navbar({ title, navLinks }: { title: string; navLinks: { label: string; href: string }[] }) {
  return (
    <AppBar 
      position="sticky" 
      elevation={0}
      sx={{ 
        backgroundColor: colorCombos.background.accent,
        borderBottom: `1px solid ${colorCombos.border.light}`,
        color: colorCombos.text.primary
      }}
    >
      <Container>
        <Toolbar disableGutters>
          <Typography 
            variant="h6" 
            sx={{ 
              flexGrow: 1, 
              fontWeight: "bold", 
              color: colorCombos.text.primary
            }}
          >
            {title}
          </Typography>
          <Box>
            {navLinks.map((link) => (
              <Button
                key={link.href}
                component={Link}
                href={link.href}
                sx={{ 
                  color: colorCombos.text.title, 
                  fontWeight: 600, 
                  textTransform: "none",
                  "&:hover": {
                    backgroundColor: colorCombos.background.secondary
                  }
                }}
              >
                {link.label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
