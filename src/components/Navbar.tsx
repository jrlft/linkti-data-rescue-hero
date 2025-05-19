
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img 
            src="/lovable-uploads/658fd69d-fa93-4cb6-be34-a4473e5ff4a5.png" 
            alt="Link TI" 
            className="h-12 w-auto"
          />
          <div className="flex items-center">
            <img 
              src="/apple-logo.svg" 
              alt="Apple" 
              className="h-5 w-auto mr-2" 
            />
            <span className={`text-sm font-medium ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
              Centro de Serviço Autorizado
            </span>
          </div>
        </div>
        
        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-6">
          <button 
            onClick={() => scrollToSection('beneficios')}
            className={`text-sm font-medium hover:text-linkti-red transition-colors ${isScrolled ? 'text-gray-800' : 'text-white'}`}
          >
            Benefícios
          </button>
          <button 
            onClick={() => scrollToSection('processo')}
            className={`text-sm font-medium hover:text-linkti-red transition-colors ${isScrolled ? 'text-gray-800' : 'text-white'}`}
          >
            Como Funciona
          </button>
          <button 
            onClick={() => scrollToSection('depoimentos')}
            className={`text-sm font-medium hover:text-linkti-red transition-colors ${isScrolled ? 'text-gray-800' : 'text-white'}`}
          >
            Depoimentos
          </button>
          <Button 
            size="sm" 
            className="bg-whatsapp hover:bg-whatsapp/90 text-white"
            onClick={() => window.open('https://wa.me/556536216000', '_blank')}
          >
            WhatsApp
          </Button>
        </nav>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-2xl"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? 
            <X className={`h-6 w-6 ${isScrolled ? 'text-gray-800' : 'text-white'}`} /> : 
            <Menu className={`h-6 w-6 ${isScrolled ? 'text-gray-800' : 'text-white'}`} />
          }
        </button>
      </div>
      
      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 px-6 flex flex-col space-y-4">
          <button 
            onClick={() => scrollToSection('beneficios')}
            className="text-gray-800 hover:text-linkti-red text-sm font-medium"
          >
            Benefícios
          </button>
          <button 
            onClick={() => scrollToSection('processo')}
            className="text-gray-800 hover:text-linkti-red text-sm font-medium"
          >
            Como Funciona
          </button>
          <button 
            onClick={() => scrollToSection('depoimentos')}
            className="text-gray-800 hover:text-linkti-red text-sm font-medium"
          >
            Depoimentos
          </button>
          <Button 
            size="sm" 
            className="bg-whatsapp hover:bg-whatsapp/90 text-white w-full"
            onClick={() => window.open('https://wa.me/556536216000', '_blank')}
          >
            WhatsApp
          </Button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
