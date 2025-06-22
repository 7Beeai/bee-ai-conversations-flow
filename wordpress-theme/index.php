
<?php get_header(); ?>

<main class="pt-4 md:pt-6 lg:pt-8">
  <!-- Hero Section -->
  <section class="hero-section section py-16 md:py-24">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        <div class="hero-text">
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-dark-base mb-6">
            Sua empresa precisa de <span class="text-[#f1c232]">inteligência</span>.<br>
            Nós entregamos <span class="text-[#f1c232]">performance</span>.
          </h1>
          <p class="text-lg md:text-xl text-secondary-text mb-8">
            Conversas humanizadas, com foco em vendas, atendimento e recuperação — adaptadas 100% à necessidade do seu negócio.
          </p>
          <button onclick="handleDemoClick()" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 font-medium w-full sm:w-auto text-sm sm:text-base px-4 py-2 sm:px-6 sm:py-3 whitespace-normal min-h-[44px] leading-normal">
            👉 Quero uma demonstração agora
          </button>
        </div>
        <div class="hero-video">
          <div class="aspect-video rounded-lg overflow-hidden bg-white shadow-lg">
            <iframe
              src="https://player.vimeo.com/video/1094542788?h=a2db4ef548&badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=1"
              class="w-full h-full"
              frameborder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              allowfullscreen>
            </iframe>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Problem Section -->
  <section class="section py-16 md:py-24 bg-white">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold tracking-tight text-dark-base mb-4">😓 Você enfrenta isso no seu dia a dia?</h2>
        <p class="text-lg md:text-xl text-secondary-text max-w-3xl mx-auto">
          Esses problemas estão prejudicando suas vendas, relacionamento com clientes e a reputação da sua marca.
        </p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div class="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
          <div class="text-4xl mb-4">🤖</div>
          <h3 class="text-xl font-semibold text-dark-base mb-4">Chatbots frios e impessoais afastando clientes</h3>
          <p class="text-secondary-text">Interações robotizadas que frustram seus clientes e prejudicam a experiência de compra.</p>
        </div>
        <div class="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
          <div class="text-4xl mb-4">⏳</div>
          <h3 class="text-xl font-semibold text-dark-base mb-4">Equipes sobrecarregadas respondendo sempre as mesmas perguntas</h3>
          <p class="text-secondary-text">Atendentes esgotados com tarefas repetitivas, quando poderiam focar em demandas estratégicas.</p>
        </div>
        <div class="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
          <div class="text-4xl mb-4">💸</div>
          <h3 class="text-xl font-semibold text-dark-base mb-4">Leads perdidos por falta de follow-up automatizado e qualificado</h3>
          <p class="text-secondary-text">Oportunidades desperdiçadas por falhas na qualificação e acompanhamento de prospects.</p>
        </div>
        <div class="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
          <div class="text-4xl mb-4">🔁</div>
          <h3 class="text-xl font-semibold text-dark-base mb-4">Alta rotatividade de vendedores e atendentes</h3>
          <p class="text-secondary-text">Dificuldade em manter equipes estáveis, impactando diretamente na experiência do cliente.</p>
        </div>
        <div class="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
          <div class="text-4xl mb-4">📉</div>
          <h3 class="text-xl font-semibold text-dark-base mb-4">Crescimento de equipe sem aumento proporcional nas vendas</h3>
          <p class="text-secondary-text">Expansão constante do time sem ganho proporcional em resultados, reduzindo suas margens.</p>
        </div>
        <div class="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
          <div class="text-4xl mb-4">🎲</div>
          <h3 class="text-xl font-semibold text-dark-base mb-4">Atendimento que muda de acordo com o humor do atendente</h3>
          <p class="text-secondary-text">Qualidade inconsistente do atendimento, criando experiências desiguais para seus clientes.</p>
        </div>
      </div>
      <div class="text-center mt-12">
        <button onclick="handleDemoClick()" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 font-medium w-full sm:w-auto text-sm sm:text-base px-4 py-2 sm:px-6 sm:py-3 whitespace-normal min-h-[44px] leading-normal">
          Veja na prática como a 7Bee.AI resolve isso
        </button>
      </div>
    </div>
  </section>

  <!-- Solution Section -->
  <section class="section py-16 md:py-24">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <div class="inline-block bg-primary/10 text-[#f1c232] px-6 py-3 rounded-full font-semibold mb-6">
          🚀 Nossa solução: IA com comportamento humano e foco em resultados
        </div>
        <h2 class="text-3xl md:text-4xl font-bold tracking-tight text-dark-base mb-4">Na 7Bee.AI, não desenvolvemos um chatbot genérico</h2>
        <p class="text-lg md:text-xl text-secondary-text max-w-3xl mx-auto">
          Criamos IAs que entendem o contexto do seu negócio, respondem como humanos e atuam para vender, encantar e resolver.
        </p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
          <div class="text-4xl mb-4">🧠</div>
          <h3 class="text-xl font-semibold text-dark-base mb-4">Conversas naturais e personalizadas</h3>
          <p class="text-secondary-text">Interações que parecem realmente humanas, adaptativas ao contexto e às necessidades do cliente.</p>
        </div>
        <div class="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
          <div class="text-4xl mb-4">🎯</div>
          <h3 class="text-xl font-semibold text-dark-base mb-4">Qualificação automática de leads e oportunidades</h3>
          <p class="text-secondary-text">Algoritmos otimizados para qualificar, engajar e converter, seguindo sua estratégia de vendas.</p>
        </div>
        <div class="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
          <div class="text-4xl mb-4">⚡</div>
          <h3 class="text-xl font-semibold text-dark-base mb-4">Escalabilidade instantânea sem perder qualidade</h3>
          <p class="text-secondary-text">Atenda centenas ou milhares de clientes simultaneamente, mantendo o padrão de excelência.</p>
        </div>
        <div class="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
          <div class="text-4xl mb-4">🔌</div>
          <h3 class="text-xl font-semibold text-dark-base mb-4">Integração fácil com WhatsApp, CRM, site e muito mais</h3>
          <p class="text-secondary-text">Se conecta com suas ferramentas existentes de forma simples e eficiente.</p>
        </div>
      </div>
      <div class="text-center mt-12">
        <button onclick="handleDemoClick()" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 font-medium w-full sm:w-auto text-sm sm:text-base px-4 py-2 sm:px-6 sm:py-3 whitespace-normal min-h-[44px] leading-normal">
          Conheça nossa tecnologia agora
        </button>
      </div>
    </div>
  </section>

  <!-- How It Works Section -->
  <section id="como-funciona" class="section py-16 md:py-24 bg-white">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold tracking-tight text-dark-base mb-4">Como funciona a demonstração</h2>
        <p class="text-lg md:text-xl text-secondary-text max-w-3xl mx-auto">
          Um processo simples para você experimentar o poder da nossa tecnologia em poucos minutos
        </p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div class="bg-neutral-bg rounded-lg p-6 relative">
          <div class="bg-[#f1c232] text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-6">01</div>
          <h3 class="text-lg font-semibold text-dark-base mb-3">Inicie a conversa</h3>
          <p class="text-secondary-text">Clique no botão e comece agora mesmo</p>
        </div>
        <div class="bg-neutral-bg rounded-lg p-6 relative">
          <div class="bg-[#f1c232] text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-6">02</div>
          <h3 class="text-lg font-semibold text-dark-base mb-3">Experimente a interação</h3>
          <p class="text-secondary-text">Converse com nossa IA e veja como ela entende contexto e responde naturalmente</p>
        </div>
        <div class="bg-neutral-bg rounded-lg p-6 relative">
          <div class="bg-[#f1c232] text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-6">03</div>
          <h3 class="text-lg font-semibold text-dark-base mb-3">Conheça os recursos</h3>
          <p class="text-secondary-text">Explore recursos avançados que se moldam ao seu negócio</p>
        </div>
        <div class="bg-neutral-bg rounded-lg p-6 relative">
          <div class="bg-[#f1c232] text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-6">04</div>
          <h3 class="text-lg font-semibold text-dark-base mb-3">Agende próximos passos</h3>
          <p class="text-secondary-text">Agende uma conversa real com nosso time, sem compromisso</p>
        </div>
      </div>
      <div class="text-center mt-12">
        <p class="text-secondary-text mb-8">
          Não perca tempo com soluções que não entendem seu negócio. 
          Experimente uma abordagem verdadeiramente inteligente.
        </p>
        <button onclick="handleDemoClick()" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 font-medium w-full sm:w-auto text-sm sm:text-base px-4 py-2 sm:px-6 sm:py-3 whitespace-normal min-h-[44px] leading-normal">
          👉 Quero uma demonstração agora
        </button>
      </div>
    </div>
  </section>

  <!-- Benefits Section -->
  <section id="beneficios" class="section py-16 md:py-24 bg-dark-base text-white">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold tracking-tight mb-4">📈 Por que empresas estão escolhendo a 7Bee.AI?</h2>
        <p class="text-lg md:text-xl max-w-3xl mx-auto opacity-80">
          Impacto mensurável em seu negócio desde o primeiro dia
        </p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div class="bg-white bg-opacity-5 border border-white border-opacity-10 rounded-lg p-6">
          <div class="text-4xl mb-4">🛍</div>
          <h3 class="text-xl font-semibold mb-4">+35% nas conversões nos 3 primeiros meses</h3>
          <p class="opacity-80">Média de 35% de aumento em conversões nos primeiros 3 meses de implementação.</p>
        </div>
        <div class="bg-white bg-opacity-5 border border-white border-opacity-10 rounded-lg p-6">
          <div class="text-4xl mb-4">💰</div>
          <h3 class="text-xl font-semibold mb-4">-60% nos custos operacionais</h3>
          <p class="opacity-80">Economia de até 60% nos custos de atendimento e vendas em comparação com equipes tradicionais.</p>
        </div>
        <div class="bg-white bg-opacity-5 border border-white border-opacity-10 rounded-lg p-6">
          <div class="text-4xl mb-4">⏱</div>
          <h3 class="text-xl font-semibold mb-4">Atendimento imediato, 24 horas por dia</h3>
          <p class="opacity-80">Disponibilidade constante sem custos adicionais de hora extra ou plantões.</p>
        </div>
        <div class="bg-white bg-opacity-5 border border-white border-opacity-10 rounded-lg p-6">
          <div class="text-4xl mb-4">⚡</div>
          <h3 class="text-xl font-semibold mb-4">Zero tempo de espera</h3>
          <p class="opacity-80">Atendimento instantâneo para cada cliente, eliminando abandono por demora.</p>
        </div>
        <div class="bg-white bg-opacity-5 border border-white border-opacity-10 rounded-lg p-6">
          <div class="text-4xl mb-4">🔄</div>
          <h3 class="text-xl font-semibold mb-4">Qualidade padronizada, sem depender de quem atende</h3>
          <p class="opacity-80">Qualidade padronizada em todas as interações, independente do volume ou horário.</p>
        </div>
        <div class="bg-white bg-opacity-5 border border-white border-opacity-10 rounded-lg p-6">
          <div class="text-4xl mb-4">📈</div>
          <h3 class="text-xl font-semibold mb-4">Escalabilidade imediata</h3>
          <p class="opacity-80">Capacidade de atender de dezenas a milhares de clientes simultaneamente.</p>
        </div>
      </div>
      <div class="text-center mt-12">
        <button onclick="handleDemoClick()" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 font-medium w-full sm:w-auto text-sm sm:text-base px-4 py-2 sm:px-6 sm:py-3 whitespace-normal min-h-[44px] leading-normal">
          👉 Quero uma demonstração agora
        </button>
      </div>
    </div>
  </section>

  <!-- FAQ Section -->
  <section id="faq" class="section py-16 md:py-24 bg-white">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold tracking-tight text-dark-base mb-4">Perguntas Frequentes</h2>
        <p class="text-lg md:text-xl text-secondary-text max-w-3xl mx-auto">
          Tire suas dúvidas sobre nossa solução de inteligência
        </p>
      </div>
      <div class="max-w-3xl mx-auto space-y-4">
        <div class="bg-white border border-gray-200 rounded-lg overflow-hidden">
          <button onclick="toggleFaq(this)" class="w-full text-left px-6 py-4 font-semibold text-dark-base hover:bg-gray-50 cursor-pointer select-none">
            Como a 7Bee.AI se diferencia de outros chatbots no mercado?
          </button>
          <div class="faq-answer hidden px-6 py-4 border-t border-gray-200">
            <p class="text-secondary-text">A 7Bee.AI não é um chatbot tradicional. Nossa tecnologia utiliza inteligência artificial avançada treinada por empresários para entender o contexto do seu negócio e se adaptar às nuances de cada conversa. Diferente dos chatbots comuns que seguem árvores de decisão rígidas, nossa solução compreende linguagem natural, mantém o contexto da conversa e se adapta em tempo real ao comportamento do cliente, resultando em interações que parecem genuinamente humanas e focadas em resultados.</p>
          </div>
        </div>
        <div class="bg-white border border-gray-200 rounded-lg overflow-hidden">
          <button onclick="toggleFaq(this)" class="w-full text-left px-6 py-4 font-semibold text-dark-base hover:bg-gray-50 cursor-pointer select-none">
            Quanto tempo leva para implementar a solução no meu negócio?
          </button>
          <div class="faq-answer hidden px-6 py-4 border-t border-gray-200">
            <p class="text-secondary-text">O processo de implementação da 7Bee.AI é rápido e eficiente. Após a contratação, conseguimos ter uma primeira versão em produção em apenas 15 dias. Isso inclui a personalização da IA para entender seu negócio, produtos, processos de venda e integração com suas plataformas existentes. Nossa equipe trabalha para que a transição seja suave e não cause interrupções nos seus processos atuais.</p>
          </div>
        </div>
        <div class="bg-white border border-gray-200 rounded-lg overflow-hidden">
          <button onclick="toggleFaq(this)" class="w-full text-left px-6 py-4 font-semibold text-dark-base hover:bg-gray-50 cursor-pointer select-none">
            É necessário ter conhecimento técnico para utilizar a plataforma?
          </button>
          <div class="faq-answer hidden px-6 py-4 border-t border-gray-200">
            <p class="text-secondary-text">Não, a 7Bee.AI foi projetada para ser user-friendly e não exige conhecimento técnico dos usuários. Fornecemos um painel de controle intuitivo onde você pode monitorar conversas, acessar relatórios e fazer ajustes simples. Nossa equipe oferece treinamento completo e suporte contínuo. Para personalizações mais avançadas, temos uma equipe técnica disponível que implementa as mudanças conforme suas necessidades de negócio.</p>
          </div>
        </div>
        <div class="bg-white border border-gray-200 rounded-lg overflow-hidden">
          <button onclick="toggleFaq(this)" class="w-full text-left px-6 py-4 font-semibold text-dark-base hover:bg-gray-50 cursor-pointer select-none">
            Como funciona o modelo de preços? Existe um contrato mínimo?
          </button>
          <div class="faq-answer hidden px-6 py-4 border-t border-gray-200">
            <p class="text-secondary-text">Nosso modelo de preços é baseado no volume de interações mensais e nas integrações necessárias para seu negócio. Trabalhamos com contratos anuais que incluem implementação, personalização, manutenção e suporte contínuo. Os planos começam a partir de R$ 1.997/mês para empresas menores e são customizados para negócios maiores. Durante a demonstração, apresentaremos uma proposta detalhada baseada nas necessidades específicas do seu negócio, mostrando o ROI projetado.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA Section -->
  <section class="section py-16 md:py-24 bg-primary/10">
    <div class="container mx-auto px-4">
      <div class="text-center">
        <h2 class="text-3xl md:text-4xl font-bold tracking-tight text-dark-base mb-6">Pronto para revolucionar seu atendimento?</h2>
        <p class="text-lg md:text-xl text-secondary-text max-w-3xl mx-auto mb-10">
          Realize uma demonstração gratuita agora mesmo e veja como a 7Bee.AI pode transformar seu negócio com conversas inteligentes e personalizadas.
        </p>
        
        <div class="w-full sm:inline-block animate-pulse-light mx-auto">
          <button onclick="handleDemoClick()" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 font-medium text-base sm:text-lg py-4 px-6 sm:py-6 sm:px-8 mx-auto w-full sm:w-auto max-w-md">
            👉 Quero uma demonstração agora
          </button>
        </div>
        
        <p class="mt-6 text-secondary-text text-sm sm:text-base">
          <span class="font-medium">Sem compromisso.</span> Conheça nossa tecnologia e decida se é o melhor para seu negócio.
        </p>
      </div>
    </div>
  </section>
</main>

<!-- Floating CTA (hidden on mobile) -->
<div id="floating-cta" class="fixed bottom-6 right-6 z-40 shadow-lg rounded-full" style="display: none;">
  <button onclick="handleDemoClick()" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-6 py-2 font-medium">
    👉 Quero uma demonstração agora
  </button>
</div>

<?php get_footer(); ?>

<script>
// Exact demo button behavior from original
function handleDemoClick() {
  // Mobile detection - exact same logic
  const isMobile = () => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth < 768;
  };

  if (isMobile()) {
    // Mobile: direciona para WhatsApp
    window.open("https://wa.me/553184849770", "_blank");
  } else {
    // Desktop/Tablet: direciona para página de chat
    window.location.href = "/chat";
  }
}

// FAQ toggle function - exact same as original
function toggleFaq(button) {
  const answer = button.nextElementSibling;
  const isActive = answer.classList.contains('block');
  
  // Close all FAQs
  document.querySelectorAll('.faq-answer').forEach(item => {
    item.classList.remove('block');
    item.classList.add('hidden');
  });
  
  // If not active, open current
  if (!isActive) {
    answer.classList.remove('hidden');
    answer.classList.add('block');
  }
}

// Floating CTA behavior - exact same as original
window.addEventListener('scroll', function() {
  const floatingCta = document.getElementById('floating-cta');
  const isMobile = window.innerWidth < 768;
  
  if (!isMobile && window.scrollY > 300) {
    floatingCta.style.display = 'block';
  } else {
    floatingCta.style.display = 'none';
  }
});

// Smooth scroll for anchor links - exact same as original
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href').substring(1);
      if (!targetId) return;
      
      const targetElement = document.getElementById(targetId);
      if (!targetElement) return;
      
      window.scrollTo({
        top: targetElement.offsetTop - 40,
        behavior: 'smooth'
      });
    });
  });
});
</script>
