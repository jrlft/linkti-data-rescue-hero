
import React from 'react';
import { Button } from '@/components/ui/button';

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
            <p className="text-gray-300 mb-4">
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
                <svg className="h-5 w-5 mr-2 text-whatsapp" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp: +55 65 3621-6000
              </a>
              
              <a 
                href="https://www.instagram.com/linkti.info/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center text-gray-300 hover:text-white transition-colors"
              >
                <svg className="h-5 w-5 mr-2 text-gray-400" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                Instagram: @linkti.info
              </a>
              
              <a 
                href="https://www.facebook.com/linkti" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center text-gray-300 hover:text-white transition-colors"
              >
                <svg className="h-5 w-5 mr-2 text-gray-400" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                Facebook: @linkti
              </a>
              
              <a 
                href="https://www.linkti.info" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center text-gray-300 hover:text-white transition-colors"
              >
                <svg className="h-5 w-5 mr-2 text-gray-400" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M21.41 8.64v-.05a.82.82 0 0 0-.86-.19.8.8 0 0 0-.56.7l-.18.18-.05.05a10 10 0 0 1-1.7 1.69 9.85 9.85 0 0 1-5.14 2.14l-.84.07H12L11 13l-.09-.01c-.31-.04-.62-.1-.92-.17-2.02-.47-3.87-1.7-5.17-3.29L4.65 9.3l-.16-.24c-.11-.16-.23-.31-.34-.48a5.85 5.85 0 0 1-.29-.46.8.8 0 0 0-1.1-.23.77.77 0 0 0-.23 1.1v.05a10.89 10.89 0 0 0 2.56 3.2c1.46 1.34 3.4 2.4 5.6 2.72.58.08 1.17.13 1.76.13a11.56 11.56 0 0 0 4.76-1.04c2.94-1.33 5.06-3.77 5.93-6.67a.82.82 0 0 0-.57-1 .81.81 0 0 0-.16-.04zm-9.26 4.55c.45.04.91.04 1.36 0 .12-.01.24-.03.36-.04-.12.01-.24.03-.36.04-.45.04-.91.04-1.36 0z"/>
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8 0-4.42 3.58-8 8-8 4.42 0 8 3.58 8 8 0 4.42-3.58 8-8 8z"/>
                </svg>
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
