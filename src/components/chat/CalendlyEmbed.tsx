
import { FC, useEffect } from "react";

interface CalendlyEmbedProps {
  url: string;
}

const CalendlyEmbed: FC<CalendlyEmbedProps> = ({ url }) => {
  useEffect(() => {
    // Load Calendly widget script if not already loaded
    if (!document.querySelector('script[src*="calendly.com/assets/external/widget.js"]')) {
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      document.head.appendChild(script);
    }
  }, []);

  // Extract Calendly username/event from URL and fix encoding
  const getCalendlyEmbedUrl = (calendlyUrl: string) => {
    try {
      console.log("URL original:", calendlyUrl);
      
      const urlObj = new URL(calendlyUrl);
      console.log("Parâmetros originais:", Array.from(urlObj.searchParams.entries()));
      
      // Create completely new URL with manually decoded parameters
      const baseUrl = `${urlObj.protocol}//${urlObj.host}${urlObj.pathname}`;
      const newUrl = new URL(baseUrl);
      
      urlObj.searchParams.forEach((value, key) => {
        // Multiple decode attempts to handle different encoding scenarios
        let decodedValue = value;
        
        // First, try standard decodeURIComponent
        try {
          decodedValue = decodeURIComponent(value);
        } catch (e) {
          console.warn("Erro no primeiro decode:", e);
        }
        
        // Then, manually replace + with spaces (common URL encoding)
        decodedValue = decodedValue.replace(/\+/g, ' ');
        
        // Try another decode in case there are still encoded chars
        try {
          decodedValue = decodeURIComponent(decodedValue);
        } catch (e) {
          // Ignore if already decoded
        }
        
        console.log(`Parâmetro ${key}: "${value}" -> "${decodedValue}"`);
        newUrl.searchParams.set(key, decodedValue);
      });
      
      // Add embed-specific parameters
      newUrl.searchParams.set('embed_domain', window.location.hostname);
      newUrl.searchParams.set('embed_type', 'Inline');
      
      const finalUrl = newUrl.toString();
      console.log("URL final para embed:", finalUrl);
      console.log("Parâmetros finais:", Array.from(newUrl.searchParams.entries()));
      
      return finalUrl;
    } catch (error) {
      console.error("Erro ao processar URL do Calendly:", error);
      return '';
    }
  };

  const embedUrl = getCalendlyEmbedUrl(url);

  if (!embedUrl) {
    return (
      <a 
        href={url} 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-primary hover:underline"
      >
        {url}
      </a>
    );
  }

  return (
    <div className="my-4">
      <div className="bg-gray-50 rounded-lg p-4 border">
        <div className="flex items-center justify-between mb-3">
          <h4 className="font-semibold text-gray-800">Agendar Reunião</h4>
          <a 
            href={url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm text-primary hover:underline"
          >
            Abrir em nova aba
          </a>
        </div>
        
        <div 
          className="calendly-inline-widget" 
          data-url={embedUrl}
          style={{ minWidth: '320px', height: '600px' }}
        />
      </div>
    </div>
  );
};

export default CalendlyEmbed;
