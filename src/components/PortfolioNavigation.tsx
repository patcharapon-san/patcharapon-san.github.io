import { Box, Container, Breadcrumbs, Link, Typography, Chip } from "@mui/material";
import NextLink from "next/link";
import { Home, Business, Web, DesktopWindows } from "@mui/icons-material";

interface PortfolioNavigationProps {
  currentPage: "enterprise-solutions" | "web-platforms" | "desktop-systems";
}

const portfolioPages = [
  { 
    key: "enterprise-solutions", 
    label: "Enterprise Solutions", 
    href: "/project-portfolio/enterprise-solutions",
    icon: <Business sx={{ fontSize: 16 }} />
  },
  { 
    key: "web-platforms", 
    label: "Web Platforms", 
    href: "/project-portfolio/web-platforms",
    icon: <Web sx={{ fontSize: 16 }} />
  },
  { 
    key: "desktop-systems", 
    label: "Desktop Systems", 
    href: "/project-portfolio/desktop-systems",
    icon: <DesktopWindows sx={{ fontSize: 16 }} />
  },
];

export default function PortfolioNavigation({ currentPage }: PortfolioNavigationProps) {
  return (
    <Box sx={{ backgroundColor: '#f8f9fa', borderBottom: '1px solid #e9ecef', py: 2 }}>
      <Container maxWidth="lg">
        <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 2 }}>
          <Link component={NextLink} href="/" color="inherit" sx={{ display: 'flex', alignItems: 'center' }}>
            <Home sx={{ mr: 0.5, fontSize: 16 }} />
            Home
          </Link>
          <Link component={NextLink} href="/project-portfolio" color="inherit">
            Project Portfolio
          </Link>
          <Typography color="text.primary">
            {portfolioPages.find(page => page.key === currentPage)?.label}
          </Typography>
        </Breadcrumbs>
        
        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
          {portfolioPages.map((page) => (
            <Chip
              key={page.key}
              icon={page.icon}
              label={page.label}
              component={NextLink}
              href={page.href}
              clickable
              variant={page.key === currentPage ? "filled" : "outlined"}
              color={page.key === currentPage ? "primary" : "default"}
              sx={{ 
                '&:hover': { 
                  backgroundColor: page.key === currentPage ? undefined : 'action.hover' 
                }
              }}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
}
