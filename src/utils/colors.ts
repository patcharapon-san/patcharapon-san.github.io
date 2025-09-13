// Color palette utility functions
export const colors = {
  // Primary Colors
  primary: {
    50: 'var(--primary-50)',
    100: 'var(--primary-100)',
    200: 'var(--primary-200)',
    300: 'var(--primary-300)',
    400: 'var(--primary-400)',
    500: 'var(--primary-500)',
    600: 'var(--primary-600)',
    700: 'var(--primary-700)',
    800: 'var(--primary-800)',
    900: 'var(--primary-900)',
  },
  
  // Secondary Colors
  secondary: {
    50: 'var(--secondary-50)',
    100: 'var(--secondary-100)',
    200: 'var(--secondary-200)',
    300: 'var(--secondary-300)',
    400: 'var(--secondary-400)',
    500: 'var(--secondary-500)',
    600: 'var(--secondary-600)',
    700: 'var(--secondary-700)',
    800: 'var(--secondary-800)',
    900: 'var(--secondary-900)',
  },
  
  // Accent Colors
  accent: {
    50: 'var(--accent-50)',
    100: 'var(--accent-100)',
    200: 'var(--accent-200)',
    300: 'var(--accent-300)',
    400: 'var(--accent-400)',
    500: 'var(--accent-500)',
    600: 'var(--accent-600)',
    700: 'var(--accent-700)',
    800: 'var(--accent-800)',
    900: 'var(--accent-900)',
  },
  
  // Neutral Colors
  neutral: {
    50: 'var(--neutral-50)',
    100: 'var(--neutral-100)',
    200: 'var(--neutral-200)',
    300: 'var(--neutral-300)',
    400: 'var(--neutral-400)',
    500: 'var(--neutral-500)',
    600: 'var(--neutral-600)',
    700: 'var(--neutral-700)',
    800: 'var(--neutral-800)',
    900: 'var(--neutral-900)',
  },
  
  // Semantic Colors
  success: {
    50: 'var(--success-50)',
    500: 'var(--success-500)',
    600: 'var(--success-600)',
    700: 'var(--success-700)',
  },
  
  warning: {
    50: 'var(--warning-50)',
    500: 'var(--warning-500)',
    600: 'var(--warning-600)',
    700: 'var(--warning-700)',
  },
  
  error: {
    50: 'var(--error-50)',
    500: 'var(--error-500)',
    600: 'var(--error-600)',
    700: 'var(--error-700)',
  },
  
  info: {
    50: 'var(--info-50)',
    500: 'var(--info-500)',
    600: 'var(--info-600)',
    700: 'var(--info-700)',
  },
  
  // Base Colors
  background: 'var(--background)',
  foreground: 'var(--foreground)',
};

// Helper function to get color with opacity
export const withOpacity = (color: string, opacity: number) => {
  return `color-mix(in srgb, ${color} ${opacity * 100}%, transparent)`;
};

// Common color combinations
export const colorCombos = {
  button: {
    primary: {
      background: colors.primary[500],
      text: colors.neutral[50],
      hover: colors.primary[600],
    },
    secondary: {
      background: colors.secondary[100],
      text: colors.secondary[700],
      hover: colors.secondary[200],
    },
    success: {
      background: colors.success[500],
      text: colors.neutral[50],
      hover: colors.success[600],
    },
    warning: {
      background: colors.warning[500],
      text: colors.neutral[50],
      hover: colors.warning[600],
    },
    error: {
      background: colors.error[500],
      text: colors.neutral[50],
      hover: colors.error[600],
    },
    info: {
      background: colors.info[500],
      text: colors.neutral[50],
      hover: colors.info[700],
    },
    github: {
      background: colors.neutral[800],
      text: colors.neutral[50],
      hover: colors.neutral[900],
    },
  },

  icon: {
    primary: colors.primary[500],
    secondary: colors.neutral[500],
    accent: colors.accent[500],
    linkedin: colors.info[500],
    email: colors.error[500],
    github: colors.neutral[800],
  },
  
  text: {
    primary: colors.foreground,
    secondary_1: colors.neutral[600],
    secondary_2: colors.neutral[50],
    muted: colors.neutral[500],
    extraLight: colors.neutral[50],
    light: colors.neutral[400],
    dark: colors.neutral[800],
    title: colors.primary[600],
    link: colors.primary[600],
  },

  // include text_outline for better readability
  text_outline: withOpacity(colors.foreground, 0.87), 
  
  background: {
    primary: colors.background,
    secondary: colors.neutral[50],
    accent: colors.primary[50],
    section: colors.primary[600],
  },
  
  border: {
    light: colors.neutral[200],
    medium: colors.neutral[300],
    dark: colors.neutral[400],
  },
  
  card: {
    background: colors.background,
    border: colors.neutral[200],
    shadow: colors.neutral[300],
  },
  
  gallery: {
    background: colors.primary[50],
    cardBackground: colors.background,
    cardBorder: colors.primary[200],
    iconColor: colors.primary[500],
  }
};

// Backward compatibility exports
export const Colors = colors;
export const ColorCombos = colorCombos;
