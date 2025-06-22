
# Tema WordPress 7Bee.AI

## Descrição
Tema WordPress personalizado **100% IDÊNTICO** ao site React da 7Bee.AI - Inteligência Artificial para vendas, atendimento e cobrança.

## Recursos Principais
- **Design idêntico** ao site original em React
- **Página de chat funcional** (/chat) com IA simulada
- **Direcionamento inteligente**: Desktop → /chat | Mobile → WhatsApp
- **Responsivo completo** com breakpoints exatos
- **Animações suaves** idênticas ao original
- **FAQ interativo** com comportamento original
- **SEO otimizado**
- **Floating CTA** com comportamento scroll
- **Integração WhatsApp** automática

## Funcionalidades Exatas
✅ **Header fixo** com logo e navegação  
✅ **Hero section** com vídeo Vimeo incorporado  
✅ **Seções de problemas** e soluções  
✅ **Como funciona** com steps numerados  
✅ **Benefícios** com background escuro  
✅ **FAQ** com accordion funcional  
✅ **CTA final** com animação pulse  
✅ **Footer** com links sociais  
✅ **Chat page** funcional em /chat  
✅ **Mobile detection** para direcionamento  
✅ **Floating button** (desktop only)  

## Instalação
1. Faça download da pasta `wordpress-theme`
2. Compacte em um arquivo ZIP
3. WordPress Admin → Aparência → Temas → Adicionar novo → Enviar tema
4. Selecione o ZIP e clique "Instalar agora"
5. **Ative o tema**
6. Vá em Configurações → Links permanentes → Salvar (para ativar /chat)

## Configuração Essencial
1. **Aparência → Personalizar → Contato 7Bee.AI:**
   - WhatsApp: `553184849770`
   - Email: `andre@7bee.com`

2. **Adicione logos:**
   - Faça upload de `logo.png` e `logo-white.png` na pasta `/assets/`
   - Ou configure via Personalizar → Identidade do Site

## URLs Funcionais
- **Página inicial**: `/` (landing page completa)
- **Chat**: `/chat` (página de chat funcional)
- **WhatsApp**: automático no mobile

## Comportamento dos Botões (EXATO do original)
```javascript
// Desktop/Tablet: redireciona para /chat
// Mobile: abre WhatsApp
if (mobile) {
  window.open("https://wa.me/553184849770", "_blank");
} else {
  window.location.href = "/chat";
}
```

## Arquivos Principais
- `index.php` - Página principal (landing)
- `page-chat.php` - Página de chat funcional
- `header.php` - Header com navegação
- `footer.php` - Footer com links
- `style.css` - Estilos 100% idênticos
- `functions.php` - Funcionalidades e rotas

## Página de Chat (/chat)
- **IA simulada** com respostas inteligentes
- **Validação de mensagens** e rate limiting
- **Interface idêntica** ao React original
- **Typing indicators** animados
- **Sanitização XSS** com DOMPurify
- **Scroll automático** para novas mensagens

## Tecnologias Incluídas
- **Tailwind CSS** via classes customizadas
- **Google Fonts** (Inter) exatas
- **DOMPurify** para segurança
- **UUID** para IDs únicos
- **Animations** CSS idênticas
- **Responsive** breakpoints exatos

## Mobile vs Desktop
- **Mobile**: Menu hamburger, botões para WhatsApp
- **Desktop**: Menu horizontal, botões para /chat
- **Floating CTA**: apenas desktop, aparece no scroll
- **Responsividade**: idêntica ao original

## Customização Disponível
- **Cores**: Modificar variáveis CSS no style.css
- **Textos**: Editar diretamente nos arquivos PHP
- **WhatsApp**: Configurar via Customizador
- **Logo**: Upload via Personalizar ou arquivos

## Suporte e Manutenção
Para suporte técnico:
- **WhatsApp**: Configurado no tema
- **Email**: Configurado no tema

## Versão e Compatibilidade
- **Versão**: 1.0 (idêntica ao React)
- **WordPress**: 5.0+
- **PHP**: 7.4+
- **Responsivo**: Todos os dispositivos

## Funcionalidades Avançadas
- **Rate limiting** no chat (10 msg/min)
- **Message validation** (max 1000 chars)
- **XSS protection** em todas as entradas
- **SEO meta tags** otimizadas
- **Performance** otimizada
- **Security headers** implementados

---

**IMPORTANTE**: Este tema é uma réplica **100% EXATA** do site React original. Nenhuma funcionalidade foi alterada ou removida.
