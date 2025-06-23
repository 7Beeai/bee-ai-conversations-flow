import { FC, useEffect } from "react";

interface CalendlyEmbedProps {
  url: string;
}

const CalendlyEmbed: FC<CalendlyEmbedProps> = ({ url }) => {
  useEffect(() => {
    if (!document.querySelector('script[src*="calendly.com/assets/external/widget.js"]')) {
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      document.head.appendChild(script);
    }
  }, []);

  const getCalendlyEmbedUrl = (calendlyUrl: string) => {
    try {
      const urlObj = new URL(calendlyUrl);
      const baseUrl = `${urlObj.protocol}//${urlObj.host}${urlObj.pathname}`;
      const params = new URLSearchParams();

      // Reconstrói cada parâmetro decodificando + e %20 apropriadamente
      urlObj.searchParams.forEach((value, key) => {
        let decoded = decodeURIComponent(value.replace(/\+/g, ' '));
        params.set(key, decoded);
      });

      // Parâmetros do widget
      params.set('embed_domain', window.location.hostname);
      params.set('embed_type', 'Inline');

      // Construção manual da query para garantir encoding com %20
      const manualQuery = Array.from(params.entries())
        .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`)
        .join('&');

      return `${baseUrl}?${manualQuery}`;
    } catch (err) {
      console.error("Erro ao gerar URL Calendly:", err);
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

