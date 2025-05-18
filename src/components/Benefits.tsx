
import React from 'react';
import { Database, ArrowRight, SmartphoneIcon, HardDrive, Computer, ArchiveRestore } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Benefits = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/556536216000', '_blank');
  };

  return (
    <section className="py-16 bg-white" id="beneficios">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Por que escolher nosso serviço <span className="text-linkti-blue">homologado pela Apple?</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Uma parceria exclusiva para recuperar o que é mais valioso para você: 
            seus dados, memórias e informações críticas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Benefit 1 */}
          <div className="bg-apple-gray rounded-xl p-6 hover:shadow-lg transition-shadow border border-gray-100">
            <div className="h-12 w-12 rounded-full bg-linkti-blue/10 flex items-center justify-center mb-4">
              <Database className="h-6 w-6 text-linkti-blue" />
            </div>
            <h3 className="text-xl font-bold mb-2">Certificação Oficial Apple</h3>
            <p className="text-gray-600 mb-4">
              Somos parceiros de uma empresa com certificação oficial Apple para recuperação de dados, garantindo o mais alto padrão de qualidade e segurança.
            </p>
            <p className="text-sm text-linkti-blue font-medium">
              Autorização exclusiva
            </p>
          </div>

          {/* Benefit 2 */}
          <div className="bg-apple-gray rounded-xl p-6 hover:shadow-lg transition-shadow border border-gray-100">
            <div className="h-12 w-12 rounded-full bg-linkti-blue/10 flex items-center justify-center mb-4">
              <SmartphoneIcon className="h-6 w-6 text-linkti-blue" />
            </div>
            <h3 className="text-xl font-bold mb-2">Compatibilidade Total</h3>
            <p className="text-gray-600 mb-4">
              Recuperamos dados de todos os dispositivos Apple: Mac, MacBook, iMac, iPhone, iPad, além de dispositivos de armazenamento externos.
            </p>
            <p className="text-sm text-linkti-blue font-medium">
              Solução completa
            </p>
          </div>

          {/* Benefit 3 */}
          <div className="bg-apple-gray rounded-xl p-6 hover:shadow-lg transition-shadow border border-gray-100">
            <div className="h-12 w-12 rounded-full bg-linkti-blue/10 flex items-center justify-center mb-4">
              <HardDrive className="h-6 w-6 text-linkti-blue" />
            </div>
            <h3 className="text-xl font-bold mb-2">Infraestrutura de Ponta</h3>
            <p className="text-gray-600 mb-4">
              Laboratório com sala limpa Classe 100, equipamentos avançados e técnicos especializados em dispositivos Apple.
            </p>
            <p className="text-sm text-linkti-blue font-medium">
              Tecnologia de última geração
            </p>
          </div>

          {/* Benefit 4 */}
          <div className="bg-apple-gray rounded-xl p-6 hover:shadow-lg transition-shadow border border-gray-100">
            <div className="h-12 w-12 rounded-full bg-linkti-blue/10 flex items-center justify-center mb-4">
              <Computer className="h-6 w-6 text-linkti-blue" />
            </div>
            <h3 className="text-xl font-bold mb-2">Sem Riscos de Garantia</h3>
            <p className="text-gray-600 mb-4">
              Por ser um serviço homologado pela Apple, seu dispositivo mantém a garantia original, diferente de serviços não autorizados.
            </p>
            <p className="text-sm text-linkti-blue font-medium">
              Segurança garantida
            </p>
          </div>

          {/* Benefit 5 */}
          <div className="bg-apple-gray rounded-xl p-6 hover:shadow-lg transition-shadow border border-gray-100">
            <div className="h-12 w-12 rounded-full bg-linkti-blue/10 flex items-center justify-center mb-4">
              <ArchiveRestore className="h-6 w-6 text-linkti-blue" />
            </div>
            <h3 className="text-xl font-bold mb-2">Taxa Única de Gestão</h3>
            <p className="text-gray-600 mb-4">
              R$300,00 fixos da Link TI para gerenciar todo o processo. O valor da recuperação só é pago após aprovação do orçamento.
            </p>
            <p className="text-sm text-linkti-blue font-medium">
              Transparência total
            </p>
          </div>

          {/* Benefit 6 */}
          <div className="bg-apple-gray rounded-xl p-6 hover:shadow-lg transition-shadow border border-gray-100">
            <div className="h-12 w-12 rounded-full bg-linkti-blue/10 flex items-center justify-center mb-4">
              <HardDrive className="h-6 w-6 text-linkti-blue" />
            </div>
            <h3 className="text-xl font-bold mb-2">Frete Grátis Ida e Volta</h3>
            <p className="text-gray-600 mb-4">
              Não se preocupe com o envio! Oferecemos frete grátis para todo o Brasil, tanto para enviar seu dispositivo quanto para devolvê-lo.
            </p>
            <p className="text-sm text-linkti-blue font-medium">
              Comodidade absoluta
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="bg-amber-50 border-l-4 border-amber-400 p-4 max-w-2xl mx-auto mb-8 text-left">
            <p className="text-amber-800">
              <span className="font-bold">ATENÇÃO:</span> A cada minuto que passa, 
              aumenta o risco de perda permanente dos seus dados. Não deixe para depois 
              o que pode ser resolvido agora com nossa solução certificada pela Apple.
            </p>
          </div>
          
          <Button 
            size="lg" 
            className="bg-linkti-blue hover:bg-linkti-darkblue text-white hover-scale"
            onClick={handleWhatsAppClick}
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
