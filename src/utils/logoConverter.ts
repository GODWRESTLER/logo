// Logo Conversion Utility for JPEG and other formats
// This utility provides instructions and code for converting SVG logos to JPEG and other formats

export interface LogoConversionSpecs {
  format: 'JPEG' | 'PNG' | 'WebP' | 'ICO';
  width: number;
  height: number;
  quality?: number;
  backgroundColor?: string;
  dpi?: number;
}

// Predefined JPEG specifications for common use cases
export const jpegSpecs: Record<string, LogoConversionSpecs> = {
  // Print materials (high DPI)
  businessCard: {
    format: 'JPEG',
    width: 300,
    height: 300,
    quality: 95,
    backgroundColor: '#FFFFFF',
    dpi: 300
  },
  letterhead: {
    format: 'JPEG',
    width: 400,
    height: 400,
    quality: 95,
    backgroundColor: '#FFFFFF',
    dpi: 300
  },
  brochure: {
    format: 'JPEG',
    width: 800,
    height: 800,
    quality: 95,
    backgroundColor: '#FFFFFF',
    dpi: 300
  },
  
  // Digital use (72 DPI)
  website: {
    format: 'JPEG',
    width: 200,
    height: 200,
    quality: 85,
    backgroundColor: '#FFFFFF',
    dpi: 72
  },
  socialMedia: {
    format: 'JPEG',
    width: 400,
    height: 400,
    quality: 85,
    backgroundColor: '#FFFFFF',
    dpi: 72
  },
  
  // Horizontal versions
  emailSignature: {
    format: 'JPEG',
    width: 300,
    height: 48,
    quality: 85,
    backgroundColor: '#FFFFFF',
    dpi: 72
  },
  websiteHeader: {
    format: 'JPEG',
    width: 400,
    height: 64,
    quality: 85,
    backgroundColor: '#FFFFFF',
    dpi: 72
  }
};

// Instructions for manual conversion
export const conversionInstructions = {
  online: {
    recommended: [
      'CloudConvert.com - Professional quality, batch conversion',
      'Convertio.co - Easy to use, good quality',
      'SVG-to-JPEG.com - Specialized for SVG conversion'
    ],
    steps: [
      '1. Upload your SVG file',
      '2. Select JPEG as output format',
      '3. Set quality to 90-95% for print, 80-85% for web',
      '4. Set background color to white for transparency',
      '5. Download converted file'
    ]
  },
  
  photoshop: {
    steps: [
      '1. Open SVG in Photoshop',
      '2. Set resolution: 300 DPI for print, 72 DPI for web',
      '3. Set background color to white',
      '4. File > Export > Export As',
      '5. Choose JPEG, set quality 8-10 for print, 6-8 for web',
      '6. Save with descriptive filename'
    ]
  },
  
  figma: {
    steps: [
      '1. Import SVG to Figma',
      '2. Select the logo frame',
      '3. Export settings: JPEG, 2x or 3x for high resolution',
      '4. Download and rename appropriately'
    ]
  }
};

// Recommended file naming convention
export const fileNaming = {
  pattern: 'anchor-commercial-capital-logo-[version]-[size]-[format].[ext]',
  examples: [
    'anchor-commercial-capital-logo-primary-400x400-jpeg.jpg',
    'anchor-commercial-capital-logo-horizontal-300x48-jpeg.jpg',
    'anchor-commercial-capital-logo-bw-200x200-jpeg.jpg',
    'anchor-commercial-capital-logo-grayscale-400x400-jpeg.jpg'
  ]
};

// Quality guidelines
export const qualityGuidelines = {
  print: {
    dpi: 300,
    jpegQuality: '90-95%',
    note: 'High quality for professional printing'
  },
  web: {
    dpi: 72,
    jpegQuality: '80-85%',
    note: 'Balanced quality and file size for web use'
  },
  social: {
    dpi: 72,
    jpegQuality: '85-90%',
    note: 'Higher quality for social media compression'
  }
};

// Browser-based conversion function (for reference)
export const convertSVGToJPEG = (svgElement: SVGElement, specs: LogoConversionSpecs): Promise<string> => {
  return new Promise((resolve, reject) => {
    try {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      
      if (!ctx) {
        reject('Canvas context not available');
        return;
      }
      
      canvas.width = specs.width;
      canvas.height = specs.height;
      
      // Set background color
      if (specs.backgroundColor) {
        ctx.fillStyle = specs.backgroundColor;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }
      
      const svgData = new XMLSerializer().serializeToString(svgElement);
      const svgBlob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
      const url = URL.createObjectURL(svgBlob);
      
      const img = new Image();
      img.onload = () => {
        ctx.drawImage(img, 0, 0, specs.width, specs.height);
        const jpegDataUrl = canvas.toDataURL('image/jpeg', (specs.quality || 85) / 100);
        URL.revokeObjectURL(url);
        resolve(jpegDataUrl);
      };
      
      img.onerror = () => {
        URL.revokeObjectURL(url);
        reject('Failed to load SVG image');
      };
      
      img.src = url;
    } catch (error) {
      reject(error);
    }
  });
};