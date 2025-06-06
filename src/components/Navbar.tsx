
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
        isScrolled ? 'bg-gray-100/90 backdrop-blur-sm py-2' : 'bg-gray-100/90 backdrop-blur-sm py-4'
      }`}
    >
      <div className="container px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center">
          <img 
            src="/lovable-uploads/eaf2f506-c58d-433b-8e56-42d9c4972e61.png" 
            alt="Link TI" 
            className="h-12 w-auto"
          />
        </div>
        
        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8 ml-12">
          <button 
            onClick={() => scrollToSection('beneficios')}
            className={`text-sm font-medium hover:text-red-800 transition-colors ${isScrolled ? 'text-gray-800' : 'text-gray-800'}`}
          >
            Benefícios
          </button>
          <button 
            onClick={() => scrollToSection('processo')}
            className={`text-sm font-medium hover:text-red-800 transition-colors ${isScrolled ? 'text-gray-800' : 'text-gray-800'}`}
          >
            Como Funciona
          </button>
          <button 
            onClick={() => scrollToSection('duvidas')}
            className={`text-sm font-medium hover:text-red-800 transition-colors ${isScrolled ? 'text-gray-800' : 'text-gray-800'}`}
          >
            Dúvidas Frequentes
          </button>
          <Button 
            size="sm" 
            className="bg-whatsapp hover:bg-whatsapp/90 text-white font-medium"
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
            <X className={`h-6 w-6 ${isScrolled ? 'text-gray-800' : 'text-gray-800'}`} /> : 
            <Menu className={`h-6 w-6 ${isScrolled ? 'text-gray-800' : 'text-gray-800'}`} />
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
            onClick={() => scrollToSection('duvidas')}
            className="text-gray-800 hover:text-linkti-red text-sm font-medium"
          >
            Dúvidas Frequentes
          </button>
          <Button 
            size="sm" 
            className="bg-whatsapp hover:bg-whatsapp/90 text-white w-full font-medium"
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
