"use client";
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  Box, 
  Container, 
  IconButton, 
  Drawer, 
  List, 
  ListItem, 
  ListItemText,
  useMediaQuery,
  useTheme
} from "@mui/material";
import { Menu as MenuIcon, Close as CloseIcon } from "@mui/icons-material";
import { useState } from "react";
import { colorCombos } from "../utils/colors";
import Link from "next/link";

export default function Navbar({ title, navLinks }: { title: string; navLinks: { label: string; href: string }[] }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box sx={{ width: 250, bgcolor: colorCombos.background.accent, height: '100%' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2 }}>
        <Typography variant="h6" sx={{ fontWeight: "bold", color: colorCombos.text.primary }}>
          {title}
        </Typography>
        <IconButton onClick={handleDrawerToggle} sx={{ color: colorCombos.text.primary }}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {navLinks.map((link) => (
          <ListItem key={link.href} component={Link} href={link.href} onClick={handleDrawerToggle}>
            <ListItemText 
              primary={link.label} 
              sx={{ 
                color: colorCombos.text.primary,
                '& .MuiListItemText-primary': {
                  fontWeight: 600,
                  color: colorCombos.text.primary
                }
              }} 
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar 
        position="sticky" 
        elevation={2}
        sx={{ 
          backgroundColor: colorCombos.background.primary,
          borderBottom: `2px solid ${colorCombos.border.light}`,
          color: colorCombos.text.primary,
          backdropFilter: 'blur(10px)',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            zIndex: -1
          }
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
            
            {/* Desktop Navigation */}
            {!isMobile && (
              <Box>
                {navLinks.map((link) => (
                  <Button
                    key={link.href}
                    component={Link}
                    href={link.href}
                    sx={{ 
                      color: colorCombos.text.primary, 
                      fontWeight: 600, 
                      textTransform: "none",
                      mx: 1,
                      px: 2,
                      py: 1,
                      borderRadius: 2,
                      "&:hover": {
                        backgroundColor: colorCombos.background.accent,
                        transform: 'translateY(-1px)',
                        boxShadow: `0 4px 8px ${colorCombos.card.shadow}`
                      },
                      transition: 'all 0.3s ease-in-out'
                    }}
                  >
                    {link.label}
                  </Button>
                ))}
              </Box>
            )}
            
            {/* Mobile Menu Button */}
            {isMobile && (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerToggle}
                sx={{ color: colorCombos.text.primary }}
              >
                <MenuIcon />
              </IconButton>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { 
            boxSizing: 'border-box', 
            width: 250,
            bgcolor: colorCombos.background.accent
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
}
