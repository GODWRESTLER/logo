// Analytics and tracking utilities

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

// Track form submissions
export const trackFormSubmission = (formType: string, formData: any) => {
  // Google Analytics Event
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'form_submit', {
      event_category: 'Lead Generation',
      event_label: formType,
      value: formData.loanAmount || 'unknown'
    });
  }
};

// Track conversion for Google Ads
export const trackConversion = (conversionLabel: string, value: number = 1.0) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'conversion', {
      send_to: `AW-CONVERSION_ID/${conversionLabel}`,
      value: value,
      currency: 'USD'
    });
  }
};

// Track page views with UTM parameters
export const trackPageView = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'GA_MEASUREMENT_ID', {
      page_location: url,
      page_title: document.title
    });
  }
};

// Extract UTM parameters from URL
export const getUTMParameters = () => {
  if (typeof window === 'undefined') return {};
  
  const urlParams = new URLSearchParams(window.location.search);
  return {
    utm_source: urlParams.get('utm_source'),
    utm_medium: urlParams.get('utm_medium'),
    utm_campaign: urlParams.get('utm_campaign'),
    utm_term: urlParams.get('utm_term'),
    utm_content: urlParams.get('utm_content')
  };
};

// Store UTM parameters in session storage
export const storeUTMParameters = () => {
  if (typeof window === 'undefined') return;
  
  const utmParams = getUTMParameters();
  if (Object.values(utmParams).some(param => param !== null)) {
    sessionStorage.setItem('utm_parameters', JSON.stringify(utmParams));
  }
};

// Get stored UTM parameters
export const getStoredUTMParameters = () => {
  if (typeof window === 'undefined') return {};
  
  const stored = sessionStorage.getItem('utm_parameters');
  return stored ? JSON.parse(stored) : {};
};