
import DOMPurify from "dompurify";

// Input validation constants
export const INPUT_LIMITS = {
  MAX_MESSAGE_LENGTH: 2000,
  MIN_MESSAGE_LENGTH: 1,
  MAX_MESSAGES_PER_MINUTE: 10,
} as const;

// Rate limiting storage
const messageTimestamps: number[] = [];

export const validateMessage = (text: string): { isValid: boolean; error?: string } => {
  // Check message length
  if (!text || text.trim().length < INPUT_LIMITS.MIN_MESSAGE_LENGTH) {
    return { isValid: false, error: "Mensagem não pode estar vazia" };
  }
  
  if (text.length > INPUT_LIMITS.MAX_MESSAGE_LENGTH) {
    return { isValid: false, error: `Mensagem muito longa. Máximo ${INPUT_LIMITS.MAX_MESSAGE_LENGTH} caracteres` };
  }

  // Check for potentially malicious content
  const suspiciousPatterns = [
    /<script/i,
    /javascript:/i,
    /on\w+\s*=/i,
    /<iframe/i,
    /<object/i,
    /<embed/i,
  ];

  for (const pattern of suspiciousPatterns) {
    if (pattern.test(text)) {
      return { isValid: false, error: "Conteúdo não permitido detectado" };
    }
  }

  return { isValid: true };
};

export const sanitizeInput = (input: string): string => {
  return DOMPurify.sanitize(input.trim(), { 
    ALLOWED_TAGS: [], 
    ALLOWED_ATTR: [] 
  });
};

export const checkRateLimit = (): { allowed: boolean; error?: string } => {
  const now = Date.now();
  const oneMinuteAgo = now - 60000;

  // Remove old timestamps
  while (messageTimestamps.length > 0 && messageTimestamps[0] < oneMinuteAgo) {
    messageTimestamps.shift();
  }

  // Check if rate limit exceeded
  if (messageTimestamps.length >= INPUT_LIMITS.MAX_MESSAGES_PER_MINUTE) {
    return { 
      allowed: false, 
      error: "Muitas mensagens enviadas. Aguarde um momento antes de tentar novamente." 
    };
  }

  // Add current timestamp
  messageTimestamps.push(now);
  return { allowed: true };
};
