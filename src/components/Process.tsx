
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Process = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/556536216000', '_blank');
  };
  
  return (
    <section className="py-16 bg-gradient-to-b from-white to-apple-gray" id="processo">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Processo <span className="text-linkti-blue">Simples e Transparente</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Recuperar seus dados valiosos nunca foi tão fácil. Nosso processo é 
            simples, seguro e totalmente homologado pela Apple.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="relative">
            <div className="bg-white rounded-xl p-8 shadow-md h-full border border-gray-100 relative z-10">
              <div className="bg-linkti-blue text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mb-4">
                1
              </div>
              <h3 className="text-xl font-bold mb-3">Entre em Contato</h3>
              <p className="text-gray-600">
                Inicie o processo entrando em contato com a Link TI via WhatsApp. 
                Nossa equipe fará uma avaliação inicial do seu caso e dará todas as orientações.
              </p>
            </div>
            <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-8 bg-linkti-blue transform rotate-45 z-0"></div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-xl p-8 shadow-md h-full border border-gray-100 relative z-10">
              <div className="bg-linkti-blue text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mb-4">
                2
              </div>
              <h3 className="text-xl font-bold mb-3">Envio Gratuito</h3>
              <p className="text-gray-600">
                Após pagamento da taxa de gestão de R$300, enviaremos uma embalagem 
                especial e segura para seu dispositivo, com frete totalmente grátis.
              </p>
            </div>
            <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-8 bg-linkti-blue transform rotate-45 z-0"></div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-xl p-8 shadow-md h-full border border-gray-100 relative z-10">
              <div className="bg-linkti-blue text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mb-4">
                3
              </div>
              <h3 className="text-xl font-bold mb-3">Avaliação Técnica</h3>
              <p className="text-gray-600">
                Nosso parceiro homologado Apple realizará uma análise preliminar e 
                enviará um orçamento detalhado para aprovação antes de qualquer intervenção.
              </p>
            </div>
          </div>

          <div className="relative md:col-start-1">
            <div className="bg-white rounded-xl p-8 shadow-md h-full border border-gray-100 relative z-10">
              <div className="bg-linkti-blue text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mb-4">
                4
              </div>
              <h3 className="text-xl font-bold mb-3">Aprovação e Recuperação</h3>
              <p className="text-gray-600">
                Após sua aprovação do orçamento, iniciamos o processo de recuperação 
                dos dados em laboratório especializado com certificação Apple.
              </p>
            </div>
            <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-8 bg-linkti-blue transform rotate-45 z-0"></div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-xl p-8 shadow-md h-full border border-gray-100 relative z-10">
              <div className="bg-linkti-blue text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mb-4">
                5
              </div>
              <h3 className="text-xl font-bold mb-3">Entrega dos Dados</h3>
              <p className="text-gray-600">
                Seus dados recuperados são entregues em um dispositivo de armazenamento 
                seguro, com criptografia e protocolos de segurança avançados.
              </p>
            </div>
            <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-8 bg-linkti-blue transform rotate-45 z-0"></div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-xl p-8 shadow-md h-full border border-gray-100 relative z-10">
              <div className="bg-linkti-blue text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mb-4">
                6
              </div>
              <h3 className="text-xl font-bold mb-3">Devolução do Dispositivo</h3>
              <p className="text-gray-600">
                Seu dispositivo original é devolvido com frete grátis, mantendo 
                a garantia Apple intacta por ser um serviço oficialmente homologado.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-4 text-center">O que pode ser recuperado?</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div className="flex items-start">
              <svg className="h-5 w-5 text-linkti-green mt-1 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              <span>Fotos e vídeos pessoais</span>
            </div>
            
            <div className="flex items-start">
              <svg className="h-5 w-5 text-linkti-green mt-1 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              <span>Documentos importantes</span>
            </div>
            
            <div className="flex items-start">
              <svg className="h-5 w-5 text-linkti-green mt-1 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              <span>Mensagens e contatos</span>
            </div>
            
            <div className="flex items-start">
              <svg className="h-5 w-5 text-linkti-green mt-1 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              <span>Arquivos de trabalho</span>
            </div>
            
            <div className="flex items-start">
              <svg className="h-5 w-5 text-linkti-green mt-1 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              <span>Dados de aplicativos</span>
            </div>
            
            <div className="flex items-start">
              <svg className="h-5 w-5 text-linkti-green mt-1 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              <span>E-mails e agendas</span>
            </div>
          </div>
          
          <div className="flex justify-center">
            <Button 
              size="lg" 
              className="bg-linkti-blue hover:bg-linkti-darkblue text-white hover-scale"
              onClick={handleWhatsAppClick}
            >
              Iniciar Recuperação Agora
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
