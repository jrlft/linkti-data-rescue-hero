
import React from 'react';
import { Button } from '@/components/ui/button';
import { Mail, Phone, Instagram, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-100 py-12">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="mb-4">
              <h3 className="text-xl font-bold text-white mb-2">Link TI</h3>
              <p className="text-sm text-gray-400">Assessoria e Suporte em Tecnologia</p>
            </div>
            <p className="text-gray-300 mb-4 text-justify">
              Sua parceira homologada pela Apple para recuperação de dados.
              Soluções profissionais com garantia e segurança.
            </p>
            <div className="space-y-2">
              <div className="flex items-center">
                <svg className="h-5 w-5 text-red-500 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                <span className="text-gray-300">Centro autorizado Apple</span>
              </div>
              <div className="flex items-center">
                <svg className="h-5 w-5 text-red-500 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                <span className="text-gray-300">Recuperação de dados profissional</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Contato</h3>
            <div className="space-y-3">
              <a 
                href="https://wa.me/556536216000" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center text-gray-300 hover:text-white transition-colors"
              >
                <Phone className="h-5 w-5 mr-2 text-gray-400" />
                WhatsApp: +55 65 3621-6000
              </a>
              
              <a 
                href="mailto:atendimento@linkti.info" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center text-gray-300 hover:text-white transition-colors"
              >
                <Mail className="h-5 w-5 mr-2 text-gray-400" />
                E-mail: atendimento@linkti.info
              </a>
              
              <a 
                href="https://www.instagram.com/linkti.info/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center text-gray-300 hover:text-white transition-colors"
              >
                <Instagram className="h-5 w-5 mr-2 text-gray-400" />
                Instagram: @linkti.info
              </a>
              
              <a 
                href="https://www.linkti.info" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center text-gray-300 hover:text-white transition-colors"
              >
                <Globe className="h-5 w-5 mr-2 text-gray-400" />
                Site: www.linkti.info
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Recuperação de Dados</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center">
                <span className="text-red-500 mr-2">•</span>
                Mac & MacBook
              </li>
              <li className="flex items-center">
                <span className="text-red-500 mr-2">•</span>
                iPhone & iPad
              </li>
              <li className="flex items-center">
                <span className="text-red-500 mr-2">•</span>
                HD & SSD
              </li>
              <li className="flex items-center">
                <span className="text-red-500 mr-2">•</span>
                Pen Drives & Cartões SD
              </li>
              <li className="flex items-center">
                <span className="text-red-500 mr-2">•</span>
                RAID & Servidores Apple
              </li>
              <li className="flex items-center">
                <span className="text-red-500 mr-2">•</span>
                Time Capsule
              </li>
            </ul>
            
            <Button 
              className="mt-6 bg-whatsapp hover:bg-whatsapp/90 text-white font-medium"
              onClick={() => window.open('https://wa.me/556536216000', '_blank')}
            >
              Solicitar Recuperação
            </Button>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Link TI. Todos os direitos reservados.
            </p>
            
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-white text-sm">Termos de Serviço</a>
              <a href="#" className="text-gray-500 hover:text-white text-sm">Política de Privacidade</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
