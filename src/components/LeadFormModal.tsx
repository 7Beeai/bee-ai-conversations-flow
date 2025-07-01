
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

type LeadFormModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const LeadFormModal = ({ isOpen, onClose }: LeadFormModalProps) => {
  const [name, setName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim() || !whatsapp.trim()) {
      toast({
        title: "Erro",
        description: "Por favor, preencha todos os campos",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Enviar dados para o webhook do n8n
      console.log("Enviando dados para n8n:", { name, whatsapp });
      
      const response = await fetch("https://n8n.7bee.com/webhook/formulariolp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name.trim(),
          whatsapp: whatsapp.trim(),
          timestamp: new Date().toISOString(),
          source: "landing_page_form"
        }),
      });

      if (response.ok) {
        console.log("Dados enviados com sucesso para n8n");
        
        toast({
          title: "Sucesso!",
          description: "Seus dados foram enviados com sucesso!",
        });

        // Criar mensagem personalizada para WhatsApp
        const message = `Olá! Meu nome é ${name} e gostaria de agendar uma demonstração da 7Bee.AI. Meu WhatsApp é ${whatsapp}.`;
        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/553184849770?text=${encodedMessage}`;

        // Abrir WhatsApp em nova aba
        window.open(whatsappUrl, "_blank");

        // Resetar formulário e fechar modal
        setName("");
        setWhatsapp("");
        onClose();
      } else {
        throw new Error("Falha ao enviar dados");
      }
    } catch (error) {
      console.error("Erro ao enviar dados para n8n:", error);
      
      toast({
        title: "Erro",
        description: "Houve um problema ao enviar seus dados. Tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-xl font-bold">
            🚀 Solicitar Demonstração
          </DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Nome completo</Label>
            <Input
              id="name"
              type="text"
              placeholder="Digite seu nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="whatsapp">WhatsApp</Label>
            <Input
              id="whatsapp"
              type="tel"
              placeholder="(xx) xxxxx-xxxx"
              value={whatsapp}
              onChange={(e) => setWhatsapp(e.target.value)}
              required
            />
          </div>
          
          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1"
            >
              Cancelar
            </Button>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="flex-1"
            >
              {isSubmitting ? "Enviando..." : "Solicitar Demonstração"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default LeadFormModal;
