
import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import Button from './Button';
import { Menu, X, Bot } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  
  // Define the Sophia AI URL as a constant to ensure consistency
  const sophiaAiUrl = "https://chatgpt.com/g/g-678afd9be6348191a641478dbee7a8a1-sophia-aeterna";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-2 bg-sophia-darker/80 backdrop-blur-lg shadow-lg'
          : 'py-4 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Logo onClick={() => window.location.href = sophiaAiUrl} />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <a 
            href={sophiaAiUrl}
            className="flex items-center gap-2 text-white/80 hover:text-white transition-colors duration-300"
          >
            <Bot className="w-4 h-4 text-sophia-accent" />
            <span>SOPHIA AETERNA AI</span>
          </a>
          <a 
            href="#faq"
            className="text-white/80 hover:text-white transition-colors duration-300"
          >
            FAQ
          </a>
          <a 
            href="#disclaimer"
            className="text-white/80 hover:text-white transition-colors duration-300"
          >
            Disclaimer
          </a>
          <Button 
            variant="primary" 
            size="sm"
            href="https://www.aiwebtools.ai"
          >
            More AI Tools
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white p-2"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`fixed inset-0 bg-sophia-darker/95 backdrop-blur-md z-40 transition-transform duration-300 ease-in-out md:hidden ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ top: '60px' }}
      >
        <nav className="flex flex-col items-center justify-center h-full space-y-8 py-8">
          <a 
            href={sophiaAiUrl}
            className="flex items-center gap-2 text-2xl text-white font-display"
            onClick={() => setMenuOpen(false)}
          >
            <Bot className="w-5 h-5 text-sophia-accent" />
            <span>SOPHIA AETERNA AI</span>
          </a>
          <a 
            href="#faq"
            className="text-2xl text-white font-display"
            onClick={() => setMenuOpen(false)}
          >
            FAQ
          </a>
          <a 
            href="#disclaimer"
            className="text-2xl text-white font-display"
            onClick={() => setMenuOpen(false)}
          >
            Disclaimer
          </a>
          <Button 
            variant="primary" 
            size="lg"
            href="https://www.aiwebtools.ai"
            onClick={() => setMenuOpen(false)}
          >
            More AI Tools
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
