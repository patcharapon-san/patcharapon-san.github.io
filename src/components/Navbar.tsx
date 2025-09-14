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
                      "&:hover": {
                        backgroundColor: colorCombos.background.secondary
                      }
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
