
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const CallToAction = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/556536216000', '_blank');
  };
  
  return (
    <section className="py-24 bg-gradient-modern relative overflow-hidden">
      {/* Background particles/elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute w-64 h-64 rounded-full bg-white/5 blur-xl top-20 right-20"></div>
        <div className="absolute w-40 h-40 rounded-full bg-white/5 blur-xl bottom-10 left-10"></div>
        <div className="absolute w-20 h-20 rounded-full bg-linkti-blue/30 blur-lg top-40 left-1/3"></div>
      </div>
      
      <div className="container px-4 md:px-6 relative">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6" data-aos="fade-up">
            Seus dados são valiosos demais para serem perdidos
          </h2>
          
          <p className="text-lg text-white/90 mb-10" data-aos="fade-up" data-aos-delay="100">
            Não deixe memórias, arquivos importantes e informações críticas 
            desaparecerem. Com nossa solução homologada pela Apple, você tem 
            a melhor chance de recuperar o que é importante.
          </p>
          
          <div className="glass-card rounded-xl p-8 mb-10" data-aos="fade-up" data-aos-delay="200">
            <h3 className="text-xl font-bold text-white mb-6">
              Por que agir agora?
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
              <div className="flex items-start" data-aos="fade-up" data-aos-delay="300">
                <div className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                  <svg className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-white mb-1">Tempo é crucial</h4>
                  <p className="text-white/80 text-sm">Quanto mais tempo passa, menor a chance de recuperação completa dos seus dados</p>
                </div>
              </div>
              
              <div className="flex items-start" data-aos="fade-up" data-aos-delay="400">
                <div className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                  <svg className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-white mb-1">Evite riscos</h4>
                  <p className="text-white/80 text-sm">Soluções caseiras podem piorar o problema e tornar a recuperação impossível</p>
                </div>
              </div>
              
              <div className="flex items-start" data-aos="fade-up" data-aos-delay="500">
                <div className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                  <svg className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-white mb-1">Exclusividade</h4>
                  <p className="text-white/80 text-sm">Somos o único parceiro homologado da Apple na região para recuperação de dados</p>
                </div>
              </div>
              
              <div className="flex items-start" data-aos="fade-up" data-aos-delay="600">
                <div className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                  <svg className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-white mb-1">Transparência</h4>
                  <p className="text-white/80 text-sm">Taxa fixa de R$300 e você só paga a recuperação se aprovar o orçamento</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6" data-aos="fade-up" data-aos-delay="700">
            <Button 
              size="lg" 
              className="bg-white text-linkti-blue hover:bg-white/90 hover:text-linkti-darkblue hover:scale-105 transition-all duration-300 shadow-lg"
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
      
      {/* Decorative bottom wave */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
          <path fill="#ffffff" fillOpacity="1" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,218.7C672,235,768,245,864,224C960,203,1056,149,1152,138.7C1248,128,1344,160,1392,176L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default CallToAction;
