
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FaqSection = () => {
  return (
    <section className="section bg-white" id="faq">
      <div className="container">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="mb-3 sm:mb-4 text-2xl sm:text-3xl md:text-4xl px-4 sm:px-0">Perguntas Frequentes</h2>
          <p className="text-secondary-text text-base sm:text-lg md:text-xl max-w-3xl mx-auto px-4 sm:px-0">
            Tire suas dúvidas sobre nossa solução de inteligência
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto px-4 sm:px-0">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-base sm:text-lg font-medium text-left">
                Como a 7Bee.AI se diferencia de outros chatbots no mercado?
              </AccordionTrigger>
              <AccordionContent className="text-secondary-text text-sm sm:text-base">
                A 7Bee.AI não é um chatbot tradicional. Nossa tecnologia utiliza inteligência artificial avançada treinada por empresários para entender o contexto do seu negócio e se adaptar às nuances de cada conversa. Diferente dos chatbots comuns que seguem árvores de decisão rígidas, nossa solução compreende linguagem natural, mantém o contexto da conversa e se adapta em tempo real ao comportamento do cliente, resultando em interações que parecem genuinamente humanas e focadas em resultados.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-base sm:text-lg font-medium text-left">
                Quanto tempo leva para implementar a solução no meu negócio?
              </AccordionTrigger>
              <AccordionContent className="text-secondary-text text-sm sm:text-base">
                O processo de implementação da 7Bee.AI é rápido e eficiente. Após a contratação, conseguimos ter uma primeira versão em produção em apenas 15 dias. Isso inclui a personalização da IA para entender seu negócio, produtos, processos de venda e integração com suas plataformas existentes. Nossa equipe trabalha para que a transição seja suave e não cause interrupções nos seus processos atuais.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-base sm:text-lg font-medium text-left">
                É necessário ter conhecimento técnico para utilizar a plataforma?
              </AccordionTrigger>
              <AccordionContent className="text-secondary-text text-sm sm:text-base">
                Não, a 7Bee.AI foi projetada para ser user-friendly e não exige conhecimento técnico dos usuários. Fornecemos um painel de controle intuitivo onde você pode monitorar conversas, acessar relatórios e fazer ajustes simples. Nossa equipe oferece treinamento completo e suporte contínuo. Para personalizações mais avançadas, temos uma equipe técnica disponível que implementa as mudanças conforme suas necessidades de negócio.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-base sm:text-lg font-medium text-left">
                Como funciona o modelo de preços? Existe um contrato mínimo?
              </AccordionTrigger>
              <AccordionContent className="text-secondary-text text-sm sm:text-base">
                Nosso modelo de preços é baseado no volume de interações mensais e nas integrações necessárias para seu negócio. Trabalhamos com contratos anuais que incluem implementação, personalização, manutenção e suporte contínuo. Os planos começam a partir de R$ 1.997/mês para empresas menores e são customizados para negócios maiores. Durante a demonstração, apresentaremos uma proposta detalhada baseada nas necessidades específicas do seu negócio, mostrando o ROI projetado.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
