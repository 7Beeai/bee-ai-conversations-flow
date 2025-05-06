
import { WebhookResponse } from "@/types/chat";

export const sendChatMessage = async (
  text: string,
  userId: string
): Promise<string> => {
  const response = await fetch("https://n8n.7bee.com/webhook/7beelpchat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      text,
      userId,
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to send message");
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

  return botResponseText;
};
