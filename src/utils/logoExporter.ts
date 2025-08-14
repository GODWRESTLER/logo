// Logo Export Utility
// This utility helps convert SVG logos to different formats for marketing use

export const logoFormats = {
  // Primary logo with gradient background
  primary: '/logo-formats/logo.svg',
  
  // Horizontal layout with company name
  horizontal: '/logo-formats/logo-horizontal.svg',
  
  // White background versions
  white: '/logo-formats/logo-white.svg',
  horizontalWhite: '/logo-formats/logo-horizontal-white.svg',
  
  // Favicon and small sizes
  favicon: '/logo-formats/favicon.svg',
  
  // Logo mark only (no text)
  logoMark: '/logo-formats/logo-mark-only.svg'
};

export const logoSpecs = {
  // Recommended sizes for different use cases
  socialMedia: {
    facebook: { width: 1200, height: 630, format: 'PNG' },
    twitter: { width: 1200, height: 675, format: 'PNG' },
    linkedin: { width: 1200, height: 627, format: 'PNG' },
    instagram: { width: 1080, height: 1080, format: 'PNG' }
  },
  
  print: {
    businessCard: { width: 300, height: 300, format: 'PNG', dpi: 300 },
    letterhead: { width: 200, height: 200, format: 'PNG', dpi: 300 },
    brochure: { width: 500, height: 500, format: 'PNG', dpi: 300 }
  },
  
  web: {
    favicon: { width: 32, height: 32, format: 'ICO' },
    appleTouchIcon: { width: 180, height: 180, format: 'PNG' },
    navbar: { width: 40, height: 40, format: 'SVG' },
    footer: { width: 120, height: 120, format: 'SVG' }
  }
};

// Color palette for brand consistency
export const brandColors = {
  primary: '#3B82F6',
  primaryDark: '#2563EB',
  accent: '#93C5FD',
  white: '#FFFFFF',
  dark: '#1E293B',
  slate: '#64748B'
};

// Usage guidelines
export const logoGuidelines = {
  clearSpace: 'Minimum clear space should be equal to the height of the "A" letter',
  minSize: 'Minimum size: 24px for digital, 0.5 inches for print',
  backgrounds: {
    light: 'Use primary logo on light backgrounds',
    dark: 'Use white version on dark backgrounds',
    colorful: 'Use white version with drop shadow on colorful backgrounds'
  },
  doNots: [
    'Do not stretch or distort the logo',
    'Do not change the colors',
    'Do not add effects or shadows to the logo itself',
    'Do not place on busy backgrounds without proper contrast'
  ]
};