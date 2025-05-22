
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Sobre a Link TI</h3>
            <p className="text-gray-400 mb-4 text-sm">
              Empresa especializada em soluções tecnológicas, agora parceira oficial da Apple para recuperação de dados de dispositivos danificados ou com falhas.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button 
                  onClick={() => document.getElementById('beneficios')?.scrollIntoView({ behavior: 'smooth' })} 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Benefícios
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('processo')?.scrollIntoView({ behavior: 'smooth' })} 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Como Funciona
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('duvidas')?.scrollIntoView({ behavior: 'smooth' })} 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Dúvidas Frequentes
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <svg className="h-5 w-5 text-gray-400 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-gray-400">(65) 3621-6000</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-gray-400 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:atendimento@linkti.info" className="text-gray-400 hover:text-white transition-colors break-all">atendimento@linkti.info</a>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-gray-400 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-gray-400">Cuiabá, MT</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
                <div className="flex flex-col space-y-1">
                  <a href="https://www.instagram.com/linkti.info" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">Instagram</a>
                  <a href="https://www.facebook.com/linkti" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">Facebook</a>
                </div>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Fale Conosco</h3>
            <p className="text-gray-400 mb-4 text-sm">
              Tem uma dúvida sobre recuperação de dados? Nossa equipe está pronta para te ajudar!
            </p>
            <button 
              onClick={() => window.open('https://wa.me/556536216000', '_blank')}
              className="bg-whatsapp text-white px-4 py-2 rounded flex items-center gap-2 hover:bg-whatsapp/90 transition-colors"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M2.004 22l1.352-4.968A9.954 9.954 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.954 9.954 0 01-5.03-1.355L2.004 22zM8.391 7.308a.961.961 0 00-.371.1 1.293 1.293 0 00-.294.228c-.12.113-.188.211-.261.306A2.729 2.729 0 006.9 9.62c.002.49.13.967.33 1.413.409.902 1.082 1.857 1.971 2.742.214.213.423.427.648.626a9.448 9.448 0 003.84 2.046l.569.087c.185.01.37-.004.556-.013a1.99 1.99 0 00.833-.231c.166-.088.244-.132.383-.22 0 0 .043-.028.125-.09.135-.1.218-.171.33-.288.083-.086.155-.187.21-.302.078-.163.156-.474.188-.733.024-.198.017-.306.014-.373-.004-.107-.093-.218-.19-.265l-.582-.261s-.87-.379-1.401-.621a.498.498 0 00-.177-.041.482.482 0 00-.378.127v-.002c-.005 0-.072.057-.795.933a.35.35 0 01-.368.13 1.416 1.416 0 01-.191-.066c-.124-.052-.167-.072-.252-.109l-.005-.002a6.01 6.01 0 01-1.57-1c-.126-.11-.243-.23-.363-.346a6.296 6.296 0 01-1.02-1.268l-.059-.095a.923.923 0 01-.102-.205c-.038-.147.061-.265.061-.265s.243-.266.356-.41a4.38 4.38 0 00.263-.373c.118-.19.155-.385.093-.536-.28-.684-.57-1.365-.868-2.041-.059-.134-.234-.23-.393-.249-.054-.006-.108-.012-.162-.016a3.385 3.385 0 00-.403.004z" />
              </svg>
              WhatsApp
            </button>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6 mt-6 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Link TI. Todos os direitos reservados.</p>
          <p className="mt-2">
            <a href="#" className="text-gray-500 hover:text-gray-400 transition-colors">Política de Privacidade</a>
            <span className="mx-2">•</span>
            <a href="#" className="text-gray-500 hover:text-gray-400 transition-colors">Termos de Serviço</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
