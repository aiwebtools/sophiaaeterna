
import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import Button from './Button';
import { Menu, X, Bot } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  
  const sophiaAiUrl = "https://chatgpt.com/g/g-678afd9be6348191a641478dbee7a8a1-sophia-aeterna";
  const aiToolsUrl = "https://aiwebtools.lovable.app/?via=aiwebtools";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-2 bg-sophia-darker/80 backdrop-blur-lg shadow-lg'
          : 'py-3 md:py-4 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Logo onClick={() => window.location.href = sophiaAiUrl} />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-4 lg:space-x-6">
          <a 
            href={sophiaAiUrl}
            className="flex items-center gap-2 text-white/80 hover:text-white transition-colors duration-300 text-sm lg:text-base"
          >
            <Bot className="w-4 h-4 text-sophia-accent" />
            <span>SOPHIA AETERNA AI</span>
          </a>
          <a 
            href="#faq"
            className="text-white/80 hover:text-white transition-colors duration-300 text-sm lg:text-base"
          >
            FAQ
          </a>
          <a 
            href="#disclaimer"
            className="text-white/80 hover:text-white transition-colors duration-300 text-sm lg:text-base"
          >
            Disclaimer
          </a>
          <Button 
            variant="primary" 
            size="sm"
            href={aiToolsUrl}
          >
            More AI Tools
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white p-2 z-50 relative"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`fixed inset-x-0 bottom-0 bg-sophia-darker/98 backdrop-blur-lg z-40 transition-all duration-200 ease-out md:hidden overflow-y-auto ${
          menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
        style={{ top: '56px' }}
      >
        <nav className="flex flex-col items-center justify-center min-h-full space-y-6 py-8 px-4">
          <a 
            href={sophiaAiUrl}
            className="flex items-center gap-2 text-xl text-white font-display"
            onClick={() => setMenuOpen(false)}
          >
            <Bot className="w-5 h-5 text-sophia-accent" />
            <span>SOPHIA AETERNA AI</span>
          </a>
          <a 
            href="#faq"
            className="text-xl text-white font-display"
            onClick={() => setMenuOpen(false)}
          >
            FAQ
          </a>
          <a 
            href="#disclaimer"
            className="text-xl text-white font-display"
            onClick={() => setMenuOpen(false)}
          >
            Disclaimer
          </a>
          <Button 
            variant="primary" 
            size="lg"
            href={aiToolsUrl}
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
