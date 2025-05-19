
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/556536216000', '_blank');
  };
  
  return (
    <section className="relative bg-gradient-hero py-24 md:py-32 overflow-hidden">
      {/* Animated particles/elements in background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-40 h-40 rounded-full bg-linkti-blue/10 blur-3xl top-20 left-[10%] animate-pulse-subtle"></div>
        <div className="absolute w-60 h-60 rounded-full bg-linkti-blue/5 blur-3xl bottom-10 right-[5%] animate-pulse-subtle"></div>
        <div className="absolute w-20 h-20 rounded-full bg-linkti-darkblue/20 blur-2xl top-32 right-[20%]"></div>
      </div>

      <div className="container px-4 md:px-6 flex flex-col lg:flex-row items-center relative z-10">
        <div className="flex-1 space-y-6 text-center lg:text-left lg:pr-8 mb-10 lg:mb-0" data-aos="fade-right" data-aos-delay="100">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
            <span className="block mb-2">Perdeu seus dados em um</span>
            <span className="text-gradient bg-gradient-to-r from-blue-200 to-cyan-100">dispositivo Apple?</span>
          </h1>
          
          <h2 className="text-xl md:text-2xl font-medium text-blue-100 max-w-2xl mx-auto lg:mx-0">
            A Link TI agora é <span className="relative inline-block">
              <span className="relative z-10">parceira oficial homologada pela Apple</span>
              <span className="absolute bottom-0 left-0 w-full h-2 bg-linkti-blue/20"></span>
            </span> para recuperação de dados de Mac, iPhone, iPad e armazenamentos externos.
          </h2>
          
          <div className="glass-card p-5 my-6 max-w-xl mx-auto lg:mx-0" data-aos="fade-up" data-aos-delay="200">
            <p className="text-amber-200 font-medium">
              <span className="uppercase font-bold bg-amber-200 text-amber-900 px-2 py-1 rounded mr-2">URGENTE:</span> 
              Quanto mais tempo passa, mais difícil fica recuperar seus dados. Não tente soluções caseiras que podem piorar o problema!
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start" data-aos="fade-up" data-aos-delay="300">
            <Button 
              size="lg" 
              className="bg-white text-linkti-blue hover:bg-blue-50 hover:scale-105 transition-all duration-300 shadow-lg"
              onClick={handleWhatsAppClick}
            >
              Fale Conosco no WhatsApp
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white/10 transition-colors"
              onClick={() => document.getElementById('processo')?.scrollIntoView()}
            >
              Como Funciona
            </Button>
          </div>
          
          <p className="text-blue-200 text-sm" data-aos="fade-up" data-aos-delay="400">
            Serviço internacional autorizado pela Apple | Frete grátis ida e volta
          </p>
        </div>
        
        <div className="flex-1 relative" data-aos="fade-left" data-aos-delay="300">
          {/* Decorative elements */}
          <div className="absolute -top-14 -right-14 w-28 h-28 rounded-full border border-white/10 animate-pulse-subtle"></div>
          <div className="absolute -bottom-10 -left-10 w-20 h-20 rounded-full border border-white/10 animate-pulse-subtle"></div>
          
          <div className="relative z-10">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-linkti-blue/20 blur-3xl rounded-full"></div>
            
            {/* Hero image */}
            <div className="relative floating-delayed animated-border">
              <img 
                src="/lovable-uploads/767c2420-5b42-4f67-9206-043cc8208169.png" 
                alt="Recuperação de dados de dispositivos Apple" 
                className="relative rounded-xl shadow-2xl w-full object-contain max-h-[400px]"
              />
            </div>
            
            {/* Badge */}
            <div className="absolute -bottom-6 -right-6 glass-card p-4 rounded-xl shadow-xl highlight-pulse" data-aos="fade-up" data-aos-delay="500">
              <div className="flex items-center gap-2">
                <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                <span className="font-bold text-white">Serviço Homologado Apple</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mt-12 relative z-10">
        <div className="glass-card rounded-xl p-4 max-w-4xl mx-auto" data-aos="fade-up" data-aos-delay="500">
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 text-sm md:text-base text-blue-100">
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-linkti-blue" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              <span>Taxa fixa de R$300</span>
            </div>
            
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-linkti-blue" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              <span>Frete grátis</span>
            </div>
            
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-linkti-blue" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              <span>Orçamento antes da recuperação</span>
            </div>
            
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-linkti-blue" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              <span>100% autorizado Apple</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative curve */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-white" style={{ 
        clipPath: 'ellipse(75% 100% at 50% 100%)'
      }}></div>
    </section>
  );
};

export default Hero;
