
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Process = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/556536216000', '_blank');
  };
  
  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50" id="processo">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Processo <span className="text-linkti-red">Simples e Transparente</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Recuperar seus dados valiosos nunca foi tão fácil. Nosso processo é 
            simples, seguro e totalmente homologado pela Apple.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="relative" data-aos="fade-up" data-aos-delay="100">
            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-8 shadow-md h-full border border-red-100 relative z-10 hover:shadow-lg transition-all">
              <div className="bg-red-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mb-4">
                1
              </div>
              <h3 className="text-xl font-bold mb-3 text-red-800">Entre em Contato</h3>
              <p className="text-gray-700">
                Inicie o processo entrando em contato com a Link TI via WhatsApp. 
                Nossa equipe fará uma avaliação inicial do seu caso e dará todas as orientações.
              </p>
            </div>
            <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-8 bg-red-600 transform rotate-45 z-0"></div>
          </div>

          <div className="relative" data-aos="fade-up" data-aos-delay="200">
            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-8 shadow-md h-full border border-red-100 relative z-10 hover:shadow-lg transition-all">
              <div className="bg-red-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mb-4">
                2
              </div>
              <h3 className="text-xl font-bold mb-3 text-red-800">Envio Gratuito</h3>
              <p className="text-gray-700">
                Após pagamento da taxa de gestão de R$300, enviaremos uma embalagem 
                especial e segura para seu dispositivo, com frete totalmente grátis.
              </p>
            </div>
            <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-8 bg-red-600 transform rotate-45 z-0"></div>
          </div>

          <div className="relative" data-aos="fade-up" data-aos-delay="300">
            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-8 shadow-md h-full border border-red-100 relative z-10 hover:shadow-lg transition-all">
              <div className="bg-red-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mb-4">
                3
              </div>
              <h3 className="text-xl font-bold mb-3 text-red-800">Avaliação Técnica</h3>
              <p className="text-gray-700">
                Nosso parceiro homologado Apple realizará uma análise preliminar e 
                enviará um orçamento detalhado para aprovação antes de qualquer intervenção.
              </p>
            </div>
          </div>

          <div className="relative md:col-start-1" data-aos="fade-up" data-aos-delay="400">
            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-8 shadow-md h-full border border-red-100 relative z-10 hover:shadow-lg transition-all">
              <div className="bg-red-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mb-4">
                4
              </div>
              <h3 className="text-xl font-bold mb-3 text-red-800">Aprovação e Recuperação</h3>
              <p className="text-gray-700">
                Após sua aprovação do orçamento, iniciamos o processo de recuperação 
                dos dados em laboratório especializado com certificação Apple.
              </p>
            </div>
            <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-8 bg-red-600 transform rotate-45 z-0"></div>
          </div>

          <div className="relative" data-aos="fade-up" data-aos-delay="500">
            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-8 shadow-md h-full border border-red-100 relative z-10 hover:shadow-lg transition-all">
              <div className="bg-red-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mb-4">
                5
              </div>
              <h3 className="text-xl font-bold mb-3 text-red-800">Entrega dos Dados</h3>
              <p className="text-gray-700">
                Seus dados recuperados são entregues em um dispositivo de armazenamento 
                seguro, com criptografia e protocolos de segurança avançados.
              </p>
            </div>
            <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-8 bg-red-600 transform rotate-45 z-0"></div>
          </div>

          <div className="relative" data-aos="fade-up" data-aos-delay="600">
            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-8 shadow-md h-full border border-red-100 relative z-10 hover:shadow-lg transition-all">
              <div className="bg-red-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mb-4">
                6
              </div>
              <h3 className="text-xl font-bold mb-3 text-red-800">Devolução do Dispositivo</h3>
              <p className="text-gray-700">
                Seu dispositivo original é devolvido com frete grátis, mantendo 
                a garantia Apple intacta por ser um serviço oficialmente homologado.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-xl shadow-lg border border-gray-200 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="700">
          <h3 className="text-2xl font-bold mb-4 text-center text-red-800">O que pode ser recuperado?</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div className="flex items-start">
              <svg className="h-5 w-5 text-red-600 mt-1 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              <span>Fotos e vídeos pessoais</span>
            </div>
            
            <div className="flex items-start">
              <svg className="h-5 w-5 text-red-600 mt-1 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              <span>Documentos importantes</span>
            </div>
            
            <div className="flex items-start">
              <svg className="h-5 w-5 text-red-600 mt-1 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              <span>Mensagens e contatos</span>
            </div>
            
            <div className="flex items-start">
              <svg className="h-5 w-5 text-red-600 mt-1 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              <span>Arquivos de trabalho</span>
            </div>
            
            <div className="flex items-start">
              <svg className="h-5 w-5 text-red-600 mt-1 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              <span>Dados de aplicativos</span>
            </div>
            
            <div className="flex items-start">
              <svg className="h-5 w-5 text-red-600 mt-1 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              <span>E-mails e agendas</span>
            </div>
          </div>
          
          <div className="flex justify-center">
            <Button 
              size="lg" 
              className="bg-whatsapp hover:bg-whatsapp/90 text-white hover-scale font-medium"
              onClick={handleWhatsAppClick}
            >
              Iniciar Recuperação Agora
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Bottom wave and info section */}
      <div className="relative mt-16">
        <div className="bg-red-800 py-6 relative">
          <div className="absolute top-0 left-0 right-0 h-16 bg-gray-50" style={{ 
            clipPath: 'ellipse(75% 100% at 50% 0%)'
          }}></div>
          <div className="container px-4 md:px-6 relative z-10 mt-8">
            <div className="flex flex-wrap justify-center gap-4 text-white text-center text-lg font-medium">
              <span>Resposta imediata</span>
              <span className="hidden md:inline">|</span>
              <span>Atendimento personalizado</span>
              <span className="hidden md:inline">|</span>
              <span>Solução definitiva</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
