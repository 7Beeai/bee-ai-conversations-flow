
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
      console.log("Dados do formulário:", { name, whatsapp });
      
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const message = `Olá! Meu nome é ${name} e gostaria de uma demonstração da 7Bee.AI.`;
      const encodedMessage = encodeURIComponent(message);
      window.open(`https://wa.me/553184849770?text=${encodedMessage}`, "_blank");
      
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
    <div id="formulario-demo" className="bg-white rounded-lg shadow-lg p-4 sm:p-6 w-full">
      <h3 className="text-lg sm:text-xl font-bold text-center mb-4 text-dark-base">
        Solicite sua demonstração
      </h3>
      <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          <div>
            <Label htmlFor="name" className="text-sm font-medium text-dark-base">
              Nome completo
            </Label>
            <Input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Seu nome"
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
        </div>

        <Button 
          type="submit" 
          className="w-full text-sm sm:text-base py-2 sm:py-3" 
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
