
import { FC } from "react";
import DOMPurify from "dompurify";
import CalendlyEmbed from "./CalendlyEmbed";

interface MessageContentProps {
  text: string;
}

const MessageContent: FC<MessageContentProps> = ({ text }) => {
  // Regex to detect Calendly URLs
  const calendlyRegex = /https:\/\/calendly\.com\/[^\s]+/g;
  
  // Check if message contains Calendly URL
  const calendlyMatches = text.match(calendlyRegex);
  
  if (calendlyMatches && calendlyMatches.length > 0) {
    // Split text by Calendly URLs and render components
    const parts = text.split(calendlyRegex);
    const result = [];
    
    for (let i = 0; i < parts.length; i++) {
      // Add text part if not empty
      if (parts[i].trim()) {
        const sanitizedText = DOMPurify.sanitize(parts[i].trim(), { 
          ALLOWED_TAGS: [], 
          ALLOWED_ATTR: [] 
        });
        result.push(
          <span key={`text-${i}`} className="whitespace-pre-line">
            {sanitizedText}
          </span>
        );
      }
      
      // Add Calendly embed if there's a corresponding match
      if (calendlyMatches[i]) {
        result.push(
          <CalendlyEmbed key={`calendly-${i}`} url={calendlyMatches[i]} />
        );
      }
    }
    
    return <div className="space-y-2">{result}</div>;
  }
  
  // Default behavior for messages without Calendly URLs
  const sanitizedText = DOMPurify.sanitize(text, { 
    ALLOWED_TAGS: [], 
    ALLOWED_ATTR: [] 
  });
  
  return <span className="whitespace-pre-line">{sanitizedText}</span>;
};

export default MessageContent;
