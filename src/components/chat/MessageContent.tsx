
import { FC } from "react";
import DOMPurify from "dompurify";
import CalendlyEmbed from "./CalendlyEmbed";

interface MessageContentProps {
  text: string;
}

const MessageContent: FC<MessageContentProps> = ({ text }) => {
  // Log para debug - ver exatamente o que está chegando
  console.log("=== MessageContent Debug ===");
  console.log("Texto recebido:", text);
  console.log("Comprimento:", text.length);
  console.log("Primeiros 100 chars:", text.substring(0, 100));
  
  // Regex mais específico para URLs do Calendly que captura até quebra de linha ou espaço
  const calendlyRegex = /(https:\/\/calendly\.com\/[^\s\n]+)/g;
  
  // Check if message contains Calendly URL
  const calendlyMatches = text.match(calendlyRegex);
  
  console.log("Matches encontrados:", calendlyMatches);
  
  if (calendlyMatches && calendlyMatches.length > 0) {
    console.log("Processando URLs do Calendly:", calendlyMatches);
    
    // Split text by Calendly URLs and render components
    let remainingText = text;
    const result = [];
    let key = 0;
    
    calendlyMatches.forEach((url) => {
      console.log("Processando URL:", url);
      const parts = remainingText.split(url);
      
      // Add text before URL if not empty
      if (parts[0].trim()) {
        const sanitizedText = DOMPurify.sanitize(parts[0].trim(), { 
          ALLOWED_TAGS: [], 
          ALLOWED_ATTR: [] 
        });
        result.push(
          <span key={`text-${key}`} className="whitespace-pre-line">
            {sanitizedText}
          </span>
        );
        key++;
      }
      
      // Add Calendly embed
      result.push(
        <CalendlyEmbed key={`calendly-${key}`} url={url} />
      );
      key++;
      
      // Update remaining text to process next parts
      remainingText = parts.slice(1).join(url);
    });
    
    // Add any remaining text after the last URL
    if (remainingText.trim()) {
      const sanitizedText = DOMPurify.sanitize(remainingText.trim(), { 
        ALLOWED_TAGS: [], 
        ALLOWED_ATTR: [] 
      });
      result.push(
        <span key={`text-${key}`} className="whitespace-pre-line">
          {sanitizedText}
        </span>
      );
    }
    
    return <div className="space-y-2">{result}</div>;
  }
  
  // Default behavior for messages without Calendly URLs
  const sanitizedText = DOMPurify.sanitize(text, { 
    ALLOWED_TAGS: [], 
    ALLOWED_ATTR: [] 
  });
  
  console.log("Nenhum link Calendly encontrado, exibindo texto normal");
  
  return <span className="whitespace-pre-line">{sanitizedText}</span>;
};

export default MessageContent;
