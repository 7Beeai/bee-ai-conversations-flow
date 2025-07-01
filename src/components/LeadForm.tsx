
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const LeadForm = () => {
  const [name, setName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim() || !whatsapp.trim()) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Aqui você pode integrar com seu backend ou serviço de email
      console.log("Dados do formulário:", { name, whatsapp });
      
      // Simular envio
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Após o envio, redirecionar para WhatsApp
      const message = `Olá! Meu nome é ${name} e gostaria de uma demonstração da 7Bee.AI.`;
      const encodedMessage = encodeURIComponent(message);
      window.open(`https://wa.me/553184849770?text=${encodedMessage}`, "_blank");
      
      // Limpar formulário
      setName("");
      setWhatsapp("");
      
    } catch (error) {
      console.error("Erro ao enviar formulário:", error);
      alert("Erro ao enviar formulário. Tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="formulario-demo" className="bg-white rounded-lg shadow-lg p-6 max-w-md mx-auto">
      <h3 className="text-xl font-bold text-center mb-4 text-dark-base">
        Solicite sua demonstração
      </h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="name" className="text-sm font-medium text-dark-base">
            Nome completo
          </Label>
          <Input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Digite seu nome completo"
            className="mt-1"
            required
          />
        </div>
        
        <div>
          <Label htmlFor="whatsapp" className="text-sm font-medium text-dark-base">
            WhatsApp
          </Label>
          <Input
            id="whatsapp"
            type="tel"
            value={whatsapp}
            onChange={(e) => setWhatsapp(e.target.value)}
            placeholder="(11) 99999-9999"
            className="mt-1"
            required
          />
        </div>

        <Button 
          type="submit" 
          className="w-full" 
          disabled={isSubmitting}
        >
          {isSubmitting ? "Enviando..." : "👉 Quero uma demonstração agora"}
        </Button>
      </form>
      
      <p className="text-xs text-secondary-text text-center mt-3">
        Seus dados estão seguros conosco e não serão compartilhados.
      </p>
    </div>
  );
};

export default LeadForm;
