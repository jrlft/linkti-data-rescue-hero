
import React from 'react';
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from '@/components/ui/accordion';

const FAQ = () => {
  const questions = [
    {
      question: "Como funciona o processo de recuperação de dados?",
      answer: "O processo começa com um diagnóstico inicial do seu dispositivo na Link TI. Após a avaliação, enviamos o dispositivo para o laboratório internacional homologado pela Apple, onde é realizada a recuperação utilizando tecnologia avançada. Você recebe um orçamento antes da execução do serviço e, após aprovação, seus dados são recuperados e devolvidos com segurança."
    },
    {
      question: "Quanto tempo leva para recuperar meus dados?",
      answer: "O tempo de recuperação varia conforme a complexidade do problema e o tipo de dispositivo. Em média, o processo completo leva de 7 a 15 dias úteis, incluindo o tempo de envio internacional. Em casos de urgência, podemos oferecer opções de prioridade."
    },
    {
      question: "Quais tipos de dispositivos podem ser recuperados?",
      answer: "Nosso serviço atende a toda linha de produtos Apple: iPhones, iPads, MacBooks, iMacs, Mac mini, além de dispositivos de armazenamento externo como HDs, SSDs e pendrives. A tecnologia utilizada é específica para cada tipo de dispositivo, garantindo a melhor taxa de sucesso."
    },
    {
      question: "E se não for possível recuperar meus dados?",
      answer: "Se após a análise técnica for constatado que não é possível recuperar seus dados, você será informado e não haverá cobrança pelo serviço de recuperação. A taxa de gerenciamento da Link TI é cobrada independentemente do resultado, pois cobre todo o processo de diagnóstico, envio e suporte."
    },
    {
      question: "Como é garantida a segurança dos meus dados?",
      answer: "Todo o processo segue rigorosos protocolos de segurança e confidencialidade. O laboratório internacional é certificado com padrões de segurança ISO, e todos os profissionais envolvidos assinam termos de confidencialidade. Seus dados são tratados com o máximo sigilo e devolvidos em mídia segura ou reintegrados ao dispositivo original quando possível."
    },
    {
      question: "O serviço é realmente homologado pela Apple?",
      answer: "Sim, trabalhamos com um parceiro internacional que possui homologação oficial da Apple para serviços de recuperação de dados. Isso garante que a garantia do seu dispositivo seja mantida e que sejam utilizadas apenas técnicas aprovadas pela Apple."
    },
    {
      question: "Como funciona o \"Sem dados, sem cobrança\"?",
      answer: "Se não conseguirmos recuperar seus dados durante o processo, você não paga pelo serviço de recuperação. A única cobrança será a taxa fixa de gerenciamento da Link TI de R$ 300,00, que cobre o processo logístico e administrativo."
    },
    {
      question: "É seguro enviar meu dispositivo para recuperação?",
      answer: "Todo o processo é rastreável e seguro. Seus dados são tratados com total confidencialidade, seguindo padrões internacionais de segurança. Utilizamos embalagens especiais para garantir que seu dispositivo chegue com segurança ao nosso laboratório."
    },
    {
      question: "Qual a taxa de sucesso na recuperação de dados?",
      answer: "Nossa tecnologia homologada tem uma taxa de sucesso de até 98%, variando conforme o tipo de dano e dispositivo. Durante o diagnóstico inicial, informaremos as chances reais de recuperação no seu caso específico, de forma transparente."
    },
    {
      question: "E se meu dispositivo Apple estiver em garantia?",
      answer: "Todas as recuperações de dados são realizadas de acordo com os padrões estabelecidos pelos principais fabricantes de discos rígidos, smartphones e dispositivos de armazenamento. Todos os principais fabricantes autorizam a abertura de mecanismos selados de dispositivos; nosso processo de recuperação de dados não anula sua garantia original e permite que você receba uma substituição de dispositivo em garantia do fabricante."
    },
    {
      question: "Vocês têm opção de recuperação de dados remotamente?",
      answer: "Em certas situações, oferecemos serviço de recuperação de dados remotos incomparável para situações de perda de dados que não envolvem danos mecânicos ou físicos. Pode ser uma opção de recuperação para sistemas RAID, NAS e SAN, hardware grande demais para envio (ou seja, servidores grandes) e para dados altamente sensíveis que precisam permanecer no local."
    }
  ];

  return (
    <section className="py-24 bg-gray-50" id="duvidas">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Dúvidas <span className="text-gradient">Frequentes</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Encontre respostas para as perguntas mais comuns sobre nosso serviço de recuperação de dados homologado pela Apple.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="200">
          <Accordion type="single" collapsible className="space-y-4">
            {questions.map((q, i) => (
              <AccordionItem 
                key={i} 
                value={`item-${i}`} 
                className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100"
              >
                <AccordionTrigger className="px-6 py-4 font-medium text-left hover:no-underline">
                  {q.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-1 text-gray-600">
                  {q.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
