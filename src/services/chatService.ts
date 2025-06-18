
import { WebhookResponse } from "@/types/chat";
import { sanitizeInput, checkRateLimit } from "@/utils/security";

// Request timeout configuration
const REQUEST_TIMEOUT = 30000; // 30 seconds

export const sendChatMessage = async (
  text: string,
  userId: string
): Promise<string> => {
  // Check rate limiting
  const rateLimitCheck = checkRateLimit();
  if (!rateLimitCheck.allowed) {
    throw new Error(rateLimitCheck.error || "Rate limit exceeded");
  }

  // Sanitize input before sending
  const sanitizedText = sanitizeInput(text);
  const sanitizedUserId = sanitizeInput(userId);

  // Create abort controller for timeout
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), REQUEST_TIMEOUT);

  try {
    const response = await fetch("https://n8n.7bee.com/webhook/7beelpchat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Add basic security headers
        "X-Requested-With": "XMLHttpRequest",
      },
      body: JSON.stringify({
        text: sanitizedText,
        userId: sanitizedUserId,
      }),
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      // Don't expose detailed error information
      throw new Error("Falha na comunicação com o servidor");
    }

    // Parse the response
    const data = await response.json();

    // Handle both array and direct object response formats
    let botResponseText = "";

    if (Array.isArray(data) && data.length > 0) {
      // If response is an array, take the first item
      const responseData = data[0];
      botResponseText =
        responseData.output ||
        "Desculpe, não consegui processar sua solicitação. Por favor, tente novamente.";
    } else if (data && typeof data === "object") {
      // If response is a direct object
      botResponseText =
        data.output ||
        "Desculpe, não consegui processar sua solicitação. Por favor, tente novamente.";
    } else {
      // Fallback for unexpected response format
      botResponseText =
        "Desculpe, não consegui processar sua solicitação. Por favor, tente novamente.";
    }

    // Sanitize the response before returning
    return sanitizeInput(botResponseText);

  } catch (error) {
    clearTimeout(timeoutId);
    
    if (error instanceof Error && error.name === 'AbortError') {
      throw new Error("Tempo limite da requisição excedido");
    }
    
    // Log error for monitoring (in production, use proper logging service)
    console.error("Chat service error:", error);
    
    // Return generic error message to prevent information disclosure
    throw new Error("Erro interno do servidor. Tente novamente em alguns instantes.");
  }
};
