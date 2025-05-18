
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/556536216000', '_blank');
  };
  
  return (
    <section className="relative bg-gradient-to-b from-apple-gray to-white py-16 md:py-24 overflow-hidden">
      <div className="container px-4 md:px-6 flex flex-col md:flex-row items-center">
        <div className="flex-1 space-y-6 text-center md:text-left md:pr-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            <span className="block">Perdeu seus dados em um</span>
            <span className="text-linkti-blue">dispositivo Apple?</span>
          </h1>
          
          <h2 className="text-xl md:text-2xl font-medium text-gray-700">
            A Link TI agora é parceira oficial homologada pela Apple para recuperação de dados de Mac, iPhone, iPad e armazenamentos externos.
          </h2>
          
          <div className="bg-amber-100 border-l-4 border-amber-500 p-4 my-4 shadow-sm">
            <p className="text-amber-800 font-medium">
              <span className="uppercase font-bold">URGENTE:</span> Quanto mais tempo passa, mais difícil fica recuperar seus dados. Não tente soluções caseiras que podem piorar o problema!
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button 
              size="lg" 
              className="bg-linkti-blue hover:bg-linkti-darkblue text-white hover-scale"
              onClick={handleWhatsAppClick}
            >
              Fale Conosco no WhatsApp
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="border-linkti-blue text-linkti-blue hover:bg-linkti-blue hover:text-white transition-colors"
              onClick={() => document.getElementById('processo')?.scrollIntoView()}
            >
              Como Funciona
            </Button>
          </div>
          
          <p className="text-muted-foreground text-sm">
            Serviço internacional autorizado pela Apple | Frete grátis ida e volta
          </p>
        </div>
        
        <div className="flex-1 mt-8 md:mt-0">
          <div className="relative">
            <div className="absolute inset-0 bg-linkti-blue/10 blur-xl rounded-full"></div>
            <img 
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80" 
              alt="Recuperação de dados de dispositivos Apple" 
              className="relative rounded-2xl shadow-2xl w-full object-cover h-[300px] md:h-[400px]"
            />
            
            <div className="absolute -bottom-4 -right-4 bg-white p-3 rounded-xl shadow-xl">
              <div className="flex items-center gap-2">
                <svg className="h-6 w-6 text-linkti-blue" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                <span className="font-bold text-linkti-darkblue">Serviço Homologado Apple</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mt-8">
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-sm md:text-base">
          <div className="flex items-center gap-2">
            <svg className="h-5 w-5 text-linkti-green" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
            <span>Taxa fixa de R$300</span>
          </div>
          
          <div className="flex items-center gap-2">
            <svg className="h-5 w-5 text-linkti-green" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
            <span>Frete grátis</span>
          </div>
          
          <div className="flex items-center gap-2">
            <svg className="h-5 w-5 text-linkti-green" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
            <span>Orçamento antes da recuperação</span>
          </div>
          
          <div className="flex items-center gap-2">
            <svg className="h-5 w-5 text-linkti-green" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
            <span>100% autorizado Apple</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
