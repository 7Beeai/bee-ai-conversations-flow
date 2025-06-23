
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

  // Extract Calendly username/event from URL
  const getCalendlyPath = (calendlyUrl: string) => {
    try {
      const url = new URL(calendlyUrl);
      return url.pathname;
    } catch {
      return '';
    }
  };

  const calendlyPath = getCalendlyPath(url);

  if (!calendlyPath) {
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
          data-url={`https://calendly.com${calendlyPath}?embed_domain=${window.location.hostname}&embed_type=Inline`}
          style={{ minWidth: '320px', height: '600px' }}
        />
      </div>
    </div>
  );
};

export default CalendlyEmbed;
