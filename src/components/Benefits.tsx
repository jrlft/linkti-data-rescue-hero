
import React from 'react';
import { Database, ArrowRight, SmartphoneIcon, HardDrive, Computer, ArchiveRestore } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Benefits = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/556536216000', '_blank');
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden" id="beneficios">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute w-96 h-96 rounded-full bg-linkti-blue/5 blur-3xl -top-48 -left-48"></div>
        <div className="absolute w-80 h-80 rounded-full bg-linkti-blue/5 blur-3xl bottom-20 right-10"></div>
        <div className="absolute w-64 h-64 rounded-full border border-linkti-blue/10 top-40 right-20 opacity-50"></div>
      </div>
      
      <div className="container px-4 md:px-6 relative">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Por que escolher nosso serviço <span className="text-gradient">homologado pela Apple?</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Uma parceria exclusiva para recuperar o que é mais valioso para você: 
            seus dados, memórias e informações críticas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Benefit cards with animations */}
          <div className="rounded-xl p-6 hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-blue-50 border border-blue-100" data-aos="fade-up" data-aos-delay="100">
            <div className="h-14 w-14 rounded-xl bg-linkti-blue/10 flex items-center justify-center mb-6">
              <Database className="h-7 w-7 text-linkti-blue" />
            </div>
            <h3 className="text-xl font-bold mb-3">Certificação Oficial Apple</h3>
            <p className="text-gray-600 mb-4">
              Somos parceiros de uma empresa com certificação oficial Apple para recuperação de dados, garantindo o mais alto padrão de qualidade e segurança.
            </p>
            <div className="flex items-center text-sm text-linkti-blue font-medium mt-auto">
              <span className="mr-1">Autorização exclusiva</span>
              <div className="ml-2 w-12 h-0.5 bg-linkti-blue/30"></div>
            </div>
          </div>

          <div className="rounded-xl p-6 hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-blue-50 border border-blue-100" data-aos="fade-up" data-aos-delay="200">
            <div className="h-14 w-14 rounded-xl bg-linkti-blue/10 flex items-center justify-center mb-6">
              <SmartphoneIcon className="h-7 w-7 text-linkti-blue" />
            </div>
            <h3 className="text-xl font-bold mb-3">Compatibilidade Total</h3>
            <p className="text-gray-600 mb-4">
              Recuperamos dados de todos os dispositivos Apple: Mac, MacBook, iMac, iPhone, iPad, além de dispositivos de armazenamento externos.
            </p>
            <div className="flex items-center text-sm text-linkti-blue font-medium mt-auto">
              <span className="mr-1">Solução completa</span>
              <div className="ml-2 w-12 h-0.5 bg-linkti-blue/30"></div>
            </div>
          </div>

          <div className="rounded-xl p-6 hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-blue-50 border border-blue-100" data-aos="fade-up" data-aos-delay="300">
            <div className="h-14 w-14 rounded-xl bg-linkti-blue/10 flex items-center justify-center mb-6">
              <HardDrive className="h-7 w-7 text-linkti-blue" />
            </div>
            <h3 className="text-xl font-bold mb-3">Infraestrutura de Ponta</h3>
            <p className="text-gray-600 mb-4">
              Laboratório com sala limpa Classe 100, equipamentos avançados e técnicos especializados em dispositivos Apple.
            </p>
            <div className="flex items-center text-sm text-linkti-blue font-medium mt-auto">
              <span className="mr-1">Tecnologia de última geração</span>
              <div className="ml-2 w-12 h-0.5 bg-linkti-blue/30"></div>
            </div>
          </div>

          <div className="rounded-xl p-6 hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-blue-50 border border-blue-100" data-aos="fade-up" data-aos-delay="400">
            <div className="h-14 w-14 rounded-xl bg-linkti-blue/10 flex items-center justify-center mb-6">
              <Computer className="h-7 w-7 text-linkti-blue" />
            </div>
            <h3 className="text-xl font-bold mb-3">Sem Riscos de Garantia</h3>
            <p className="text-gray-600 mb-4">
              Por ser um serviço homologado pela Apple, seu dispositivo mantém a garantia original, diferente de serviços não autorizados.
            </p>
            <div className="flex items-center text-sm text-linkti-blue font-medium mt-auto">
              <span className="mr-1">Segurança garantida</span>
              <div className="ml-2 w-12 h-0.5 bg-linkti-blue/30"></div>
            </div>
          </div>

          <div className="rounded-xl p-6 hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-blue-50 border border-blue-100" data-aos="fade-up" data-aos-delay="500">
            <div className="h-14 w-14 rounded-xl bg-linkti-blue/10 flex items-center justify-center mb-6">
              <ArchiveRestore className="h-7 w-7 text-linkti-blue" />
            </div>
            <h3 className="text-xl font-bold mb-3">Taxa Única de Gestão</h3>
            <p className="text-gray-600 mb-4">
              R$300,00 fixos da Link TI para gerenciar todo o processo. O valor da recuperação só é pago após aprovação do orçamento.
            </p>
            <div className="flex items-center text-sm text-linkti-blue font-medium mt-auto">
              <span className="mr-1">Transparência total</span>
              <div className="ml-2 w-12 h-0.5 bg-linkti-blue/30"></div>
            </div>
          </div>

          <div className="rounded-xl p-6 hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-blue-50 border border-blue-100" data-aos="fade-up" data-aos-delay="600">
            <div className="h-14 w-14 rounded-xl bg-linkti-blue/10 flex items-center justify-center mb-6">
              <HardDrive className="h-7 w-7 text-linkti-blue" />
            </div>
            <h3 className="text-xl font-bold mb-3">Frete Grátis Ida e Volta</h3>
            <p className="text-gray-600 mb-4">
              Não se preocupe com o envio! Oferecemos frete grátis para todo o Brasil, tanto para enviar seu dispositivo quanto para devolvê-lo.
            </p>
            <div className="flex items-center text-sm text-linkti-blue font-medium mt-auto">
              <span className="mr-1">Comodidade absoluta</span>
              <div className="ml-2 w-12 h-0.5 bg-linkti-blue/30"></div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl border-l-4 border-amber-400 p-6 max-w-2xl mx-auto mb-10 text-left" data-aos="fade-up" data-aos-delay="200">
            <p className="text-amber-800">
              <span className="font-bold">ATENÇÃO:</span> A cada minuto que passa, 
              aumenta o risco de perda permanente dos seus dados. Não deixe para depois 
              o que pode ser resolvido agora com nossa solução certificada pela Apple.
            </p>
          </div>
          
          <Button 
            size="lg" 
            className="bg-linkti-blue hover:bg-linkti-darkblue text-white hover:scale-105 transition-all duration-300 shadow-lg"
            onClick={handleWhatsAppClick}
            data-aos="zoom-in" data-aos-delay="300"
          >
            Recupere Seus Dados Agora
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
