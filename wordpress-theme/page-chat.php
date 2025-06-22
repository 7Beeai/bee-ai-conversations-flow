
<?php
/*
Template Name: Chat Page
*/
?>

<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Chat - <?php bloginfo('name'); ?></title>
    
    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    
    <!-- DOMPurify for XSS protection -->
    <script src="https://cdn.jsdelivr.net/npm/dompurify@3.0.5/dist/purify.min.js"></script>
    
    <!-- UUID for message IDs -->
    <script src="https://cdn.jsdelivr.net/npm/uuid@9.0.1/dist/umd/uuidv4.min.js"></script>
    
    <?php wp_head(); ?>
    
    <style>
        .chat-container {
            height: calc(100vh - 12rem);
        }
        
        .chat-messages {
            height: calc(100% - 5rem);
            overflow-y: auto;
            padding: 1.5rem;
        }
        
        .chat-input-container {
            height: 5rem;
            border-top: 1px solid #e5e7eb;
            padding: 1rem;
        }
        
        .message-user {
            display: flex;
            justify-content: flex-end;
            margin-bottom: 1rem;
        }
        
        .message-bot {
            display: flex;
            justify-content: flex-start;
            margin-bottom: 1rem;
        }
        
        .message-content {
            max-width: 85%;
            padding: 0.75rem;
            border-radius: 0.5rem;
            word-wrap: break-word;
            white-space: pre-line;
        }
        
        .message-user .message-content {
            background-color: hsl(var(--primary));
            color: white;
        }
        
        .message-bot .message-content {
            background-color: #f3f4f6;
            color: #1f2937;
        }
        
        .message-timestamp {
            font-size: 0.75rem;
            opacity: 0.7;
            margin-top: 0.25rem;
            text-align: right;
        }
        
        .typing-indicator {
            display: flex;
            justify-content: flex-start;
            margin-bottom: 1rem;
        }
        
        .typing-content {
            background-color: #f3f4f6;
            border-radius: 0.5rem;
            padding: 0.75rem;
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }
        
        .typing-dots {
            display: flex;
            gap: 0.25rem;
        }
        
        .typing-dot {
            width: 0.5rem;
            height: 0.5rem;
            background-color: #9ca3af;
            border-radius: 50%;
            animation: bounce 1s infinite;
        }
        
        .typing-dot:nth-child(2) {
            animation-delay: 0.15s;
        }
        
        .typing-dot:nth-child(3) {
            animation-delay: 0.3s;
        }
        
        @keyframes bounce {
            0%, 20%, 53%, 80%, 100% {
                transform: translate3d(0,0,0);
            }
            40%, 43% {
                transform: translate3d(0, -15px, 0);
            }
            70% {
                transform: translate3d(0, -7px, 0);
            }
            90% {
                transform: translate3d(0, -2px, 0);
            }
        }
        
        @media (min-width: 768px) {
            .message-content {
                max-width: 70%;
            }
        }
    </style>
</head>

<body <?php body_class(); ?>>

<!-- Header -->
<header class="bg-white shadow-sm py-4">
    <div class="container mx-auto px-4 flex justify-between items-center">
        <a href="<?php echo home_url(); ?>" class="text-2xl font-bold">
            7Bee<span class="text-[#f1c232]">.AI</span>
        </a>
    </div>
</header>

<!-- Chat Container -->
<div class="min-h-screen bg-neutral-bg flex flex-col">
    <div class="flex-1 container mx-auto px-4 py-8 max-w-4xl">
        <div class="bg-white rounded-lg shadow-lg overflow-hidden chat-container">
            <!-- Messages Container -->
            <div id="chat-messages" class="chat-messages">
                <!-- Messages will be populated by JavaScript -->
            </div>

            <!-- Input Container -->
            <div class="chat-input-container">
                <form id="chat-form" class="flex items-center gap-2">
                    <input 
                        type="text" 
                        id="message-input"
                        placeholder="Digite sua mensagem..." 
                        class="flex-1 border border-gray-300 rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#f1c232] focus:border-transparent"
                        maxlength="1000"
                        required
                    />
                    <button 
                        type="submit"
                        id="send-button"
                        class="bg-[#f1c232] text-white px-4 py-2 rounded-r-lg hover:bg-[#d4a017] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.429a1 1 0 001.17-1.409l-7-14z"/>
                        </svg>
                    </button>
                </form>
            </div>
        </div>
    </div>
</div>

<script>
// Chat functionality - exact same as original React app
class ChatApp {
    constructor() {
        this.messages = [];
        this.isLoading = false;
        this.userId = this.generateUUID();
        this.lastMessageTime = 0;
        this.messageCount = 0;
        this.maxMessagesPerMinute = 10;
        
        this.messagesContainer = document.getElementById('chat-messages');
        this.messageInput = document.getElementById('message-input');
        this.sendButton = document.getElementById('send-button');
        this.chatForm = document.getElementById('chat-form');
        
        this.init();
    }
    
    generateUUID() {
        return uuidv4();
    }
    
    init() {
        // Add initial message
        this.addMessage({
            id: this.generateUUID(),
            text: "Olá, eu sou o Lucas Montivani, assistente IA da 7Bee! Como posso ajudar você hoje?",
            sender: "bot",
            timestamp: new Date()
        });
        
        // Event listeners
        this.chatForm.addEventListener('submit', (e) => this.sendMessage(e));
        this.messageInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                this.sendMessage(e);
            }
        });
    }
    
    addMessage(message) {
        this.messages.push(message);
        this.renderMessage(message);
        this.scrollToBottom();
    }
    
    renderMessage(message) {
        const messageDiv = document.createElement('div');
        messageDiv.className = message.sender === 'user' ? 'message-user' : 'message-bot';
        
        const content = document.createElement('div');
        content.className = 'message-content';
        
        // Sanitize message text
        const sanitizedText = DOMPurify.sanitize(message.text, { 
            ALLOWED_TAGS: [], 
            ALLOWED_ATTR: [] 
        });
        
        content.innerHTML = sanitizedText;
        
        const timestamp = document.createElement('div');
        timestamp.className = 'message-timestamp';
        timestamp.textContent = message.timestamp.toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit'
        });
        
        content.appendChild(timestamp);
        messageDiv.appendChild(content);
        this.messagesContainer.appendChild(messageDiv);
    }
    
    showTypingIndicator() {
        const typingDiv = document.createElement('div');
        typingDiv.className = 'typing-indicator';
        typingDiv.id = 'typing-indicator';
        
        const typingContent = document.createElement('div');
        typingContent.className = 'typing-content';
        
        const typingDots = document.createElement('div');
        typingDots.className = 'typing-dots';
        
        for (let i = 0; i < 3; i++) {
            const dot = document.createElement('div');
            dot.className = 'typing-dot';
            typingDots.appendChild(dot);
        }
        
        typingContent.appendChild(typingDots);
        typingDiv.appendChild(typingContent);
        this.messagesContainer.appendChild(typingDiv);
        this.scrollToBottom();
    }
    
    hideTypingIndicator() {
        const indicator = document.getElementById('typing-indicator');
        if (indicator) {
            indicator.remove();
        }
    }
    
    scrollToBottom() {
        this.messagesContainer.scrollTop = this.messagesContainer.scrollHeight;
    }
    
    validateMessage(text) {
        if (!text || text.trim().length === 0) {
            return { isValid: false, error: 'Mensagem não pode estar vazia' };
        }
        
        if (text.length > 1000) {
            return { isValid: false, error: 'Mensagem muito longa (máximo 1000 caracteres)' };
        }
        
        return { isValid: true };
    }
    
    checkRateLimit() {
        const now = Date.now();
        const oneMinute = 60 * 1000;
        
        if (now - this.lastMessageTime < oneMinute) {
            this.messageCount++;
        } else {
            this.messageCount = 1;
            this.lastMessageTime = now;
        }
        
        if (this.messageCount > this.maxMessagesPerMinute) {
            return { 
                allowed: false, 
                error: 'Muitas mensagens enviadas. Aguarde um momento.' 
            };
        }
        
        return { allowed: true };
    }
    
    async sendMessage(e) {
        e.preventDefault();
        
        const text = this.messageInput.value.trim();
        if (!text) return;
        
        // Validate message
        const validation = this.validateMessage(text);
        if (!validation.isValid) {
            alert(validation.error);
            return;
        }
        
        // Check rate limiting
        const rateLimitCheck = this.checkRateLimit();
        if (!rateLimitCheck.allowed) {
            alert(rateLimitCheck.error);
            return;
        }
        
        // Add user message
        const userMessage = {
            id: this.generateUUID(),
            text: text,
            sender: 'user',
            timestamp: new Date()
        };
        
        this.addMessage(userMessage);
        this.messageInput.value = '';
        this.setLoading(true);
        this.showTypingIndicator();
        
        try {
            // Simulate API call
            const response = await this.sendChatMessage(text);
            
            this.hideTypingIndicator();
            
            // Add bot response
            const botMessage = {
                id: this.generateUUID(),
                text: response,
                sender: 'bot',
                timestamp: new Date()
            };
            
            this.addMessage(botMessage);
            
        } catch (error) {
            console.error('Error sending message:', error);
            this.hideTypingIndicator();
            
            // Add fallback message
            const errorMessage = {
                id: this.generateUUID(),
                text: "Desculpe, estamos enfrentando problemas técnicos. Por favor, tente novamente em alguns instantes.",
                sender: 'bot',
                timestamp: new Date()
            };
            
            this.addMessage(errorMessage);
        } finally {
            this.setLoading(false);
        }
    }
    
    setLoading(loading) {
        this.isLoading = loading;
        this.sendButton.disabled = loading;
        this.messageInput.disabled = loading;
    }
    
    async sendChatMessage(message) {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 2000));
        
        // Simulate intelligent responses
        const responses = [
            "Entendo sua necessidade. A 7Bee.AI pode definitivamente ajudar com isso. Nossa IA é treinada especificamente para o seu tipo de negócio.",
            "Excelente pergunta! Nossa solução se adapta ao contexto da sua empresa. Gostaria de saber mais sobre algum aspecto específico?",
            "Isso é exatamente o que nossa tecnologia resolve. Podemos agendar uma demonstração personalizada para o seu caso?",
            "Perfeito! Nossa IA humanizada pode automatizar exatamente esse processo. Qual é o volume de atendimentos que vocês têm por dia?",
            "Compreendo sua preocupação. A 7Bee.AI se diferencia porque mantém conversas naturais e contextualizadas. Quer ver um exemplo prático?",
            "Ótima colocação! Nossa solução já ajudou empresas similares a aumentar conversões em 35%. Gostaria de conhecer casos de sucesso?",
            "Essa é uma dúvida comum. Nossa implementação é rápida - em 15 dias você já tem a IA funcionando. Quer saber mais sobre o processo?",
            "Entendo perfeitamente. A 7Bee.AI integra com WhatsApp, site, CRM e outras ferramentas. Qual plataforma é mais importante para vocês?",
            "Excelente pergunta sobre ROI. Nossos clientes veem retorno em média em 60 dias. Posso mostrar uma projeção para o seu negócio?",
            "Perfeito! Vou conectar você com nosso especialista. Qual o melhor horário para uma conversa de 15 minutos esta semana?"
        ];
        
        return responses[Math.floor(Math.random() * responses.length)];
    }
}

// Initialize chat when page loads
document.addEventListener('DOMContentLoaded', function() {
    new ChatApp();
});
</script>

<?php wp_footer(); ?>
</body>
</html>
