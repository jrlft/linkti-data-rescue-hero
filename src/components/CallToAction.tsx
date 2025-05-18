
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const CallToAction = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/556536216000', '_blank');
  };
  
  return (
    <section className="py-20 bg-linkti-blue">
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Seus dados são valiosos demais para serem perdidos
          </h2>
          
          <p className="text-lg text-white/90 mb-8">
            Não deixe memórias, arquivos importantes e informações críticas 
            desaparecerem. Com nossa solução homologada pela Apple, você tem 
            a melhor chance de recuperar o que é importante.
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl mb-8 border border-white/20">
            <h3 className="text-xl font-bold text-white mb-4">
              Por que agir agora?
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
              <div className="flex items-start">
                <svg className="h-5 w-5 text-white/90 mt-1 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                <span className="text-white/90">Quanto mais tempo passa, menor a chance de recuperação</span>
              </div>
              
              <div className="flex items-start">
                <svg className="h-5 w-5 text-white/90 mt-1 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                <span className="text-white/90">Soluções caseiras podem piorar a situação</span>
              </div>
              
              <div className="flex items-start">
                <svg className="h-5 w-5 text-white/90 mt-1 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                <span className="text-white/90">Somos o único parceiro homologado na região</span>
              </div>
              
              <div className="flex items-start">
                <svg className="h-5 w-5 text-white/90 mt-1 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                <span className="text-white/90">Taxa fixa de R$300 sem surpresas</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <Button 
              size="lg" 
              className="bg-white text-linkti-blue hover:bg-white/90 hover:text-linkti-darkblue hover-scale"
              onClick={handleWhatsAppClick}
            >
              Fale Conosco no WhatsApp
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            
            <p className="text-sm text-white/70">
              Resposta imediata | Atendimento personalizado | Solução definitiva
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
