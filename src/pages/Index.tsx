
import { useEffect } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import BenefitsSection from "@/components/BenefitsSection";
import FaqSection from "@/components/FaqSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import ChatModal from "@/components/ChatModal";
import FloatingCta from "@/components/FloatingCta";
import LeadFormModal from "@/components/LeadFormModal";
import { LeadModalProvider, useLeadModal } from "@/contexts/LeadModalContext";

const IndexContent = () => {
  const { isOpen, closeModal } = useLeadModal();

  useEffect(() => {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href')?.substring(1);
        if (!targetId) return;
        
        const targetElement = document.getElementById(targetId);
        if (!targetElement) return;
        
        window.scrollTo({
          top: targetElement.offsetTop - 40,
          behavior: 'smooth'
        });
      });
    });
  }, []);

  return (
    <div className="min-h-screen bg-neutral-bg">
      <Header />
      <main className="pt-4 md:pt-6 lg:pt-8">
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <HowItWorksSection />
        <BenefitsSection />
        <FaqSection />
        <CtaSection />
      </main>
      <Footer />
      <ChatModal />
      <FloatingCta />
      <LeadFormModal isOpen={isOpen} onClose={closeModal} />
    </div>
  );
};

const Index = () => {
  return (
    <LeadModalProvider>
      <IndexContent />
    </LeadModalProvider>
  );
};

export default Index;
