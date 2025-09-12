import { Box, Container, Tabs, Tab } from "@mui/material";
import Link from "next/link";
import { ReactNode } from "react";

interface PortfolioLayoutProps {
  children: ReactNode;
}

const portfolioTabs = [
  { label: "Overview", href: "/project-portfolio/overview" },
  { label: "Enterprise Solutions", href: "/project-portfolio/enterprise-solutions" },
  { label: "Web Platforms", href: "/project-portfolio/web-platforms" },
  { label: "Desktop Systems", href: "/project-portfolio/desktop-systems" },
];

export default function PortfolioLayout({ children }: PortfolioLayoutProps) {
  return (
    <>
      <Box sx={{ borderBottom: 1, borderColor: 'divider', backgroundColor: '#f5f5f5' }}>
        <Container maxWidth="lg">
          <Tabs 
            value={false} 
            variant="scrollable" 
            scrollButtons="auto"
            sx={{ minHeight: '48px' }}
          >
            {portfolioTabs.map((tab) => (
              <Tab
                key={tab.href}
                label={tab.label}
                component={Link}
                href={tab.href}
                sx={{ 
                  textTransform: 'none',
                  fontWeight: 500,
                  '&:hover': {
                    backgroundColor: 'rgba(0, 0, 0, 0.04)'
                  }
                }}
              />
            ))}
          </Tabs>
        </Container>
      </Box>
      {children}
    </>
  );
}
