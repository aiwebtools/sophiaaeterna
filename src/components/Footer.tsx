
import React from 'react';
import Logo from './Logo';
import Button from './Button';
import { Phone, Mail, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-sophia-darker pt-16 border-t border-sophia-purple/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Column 1 - Logo and Description */}
          <div>
            <Logo onClick={() => window.location.href = 'https://chatgpt.com/g/g-678afd9be6348191a641478dbee7a8a1-sophia-aeterna'} />
            <p className="mt-4 text-white/70 text-sm">
              Illuminating the path to wisdom with the spirit and teachings of Manly P. Hall, guiding seekers through the mysteries of esoteric knowledge.
            </p>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="text-lg font-display text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://chatgpt.com/g/g-678afd9be6348191a641478dbee7a8a1-sophia-aeterna"
                  className="text-white/70 hover:text-sophia-gold transition-colors duration-300 flex items-center"
                >
                  <span className="mr-2">•</span> Sophia Aeterna
                </a>
              </li>
              <li>
                <a 
                  href="#faq"
                  className="text-white/70 hover:text-sophia-gold transition-colors duration-300 flex items-center"
                >
                  <span className="mr-2">•</span> FAQ
                </a>
              </li>
              <li>
                <a 
                  href="#disclaimer"
                  className="text-white/70 hover:text-sophia-gold transition-colors duration-300 flex items-center"
                >
                  <span className="mr-2">•</span> Disclaimer
                </a>
              </li>
              <li>
                <a 
                  href="https://www.aiwebtools.ai"
                  className="text-white/70 hover:text-sophia-gold transition-colors duration-300 flex items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="mr-2">•</span> More AI Tools
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 - Legal */}
          <div>
            <h3 className="text-lg font-display text-white mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://openai.com/policies/privacy-policy/"
                  className="text-white/70 hover:text-sophia-gold transition-colors duration-300 flex items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="mr-2">•</span> Privacy Policy
                </a>
              </li>
              <li>
                <a 
                  href="https://aiwebtools.lovable.app/terms-of-services"
                  className="text-white/70 hover:text-sophia-gold transition-colors duration-300 flex items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="mr-2">•</span> Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div>
            <h3 className="text-lg font-display text-white mb-4">Contact</h3>
            <ul className="space-y-4">
              <li>
                <a 
                  href="tel:+14758008096"
                  className="text-white/70 hover:text-sophia-gold transition-colors duration-300 flex items-center"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  (475) 800-8096
                </a>
              </li>
              <li>
                <a 
                  href="mailto:Contact@ai-webtools.com"
                  className="text-white/70 hover:text-sophia-gold transition-colors duration-300 flex items-center"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Contact@ai-webtools.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* More AI Tools Button (Oval Shaped) */}
        <div className="absolute -top-6 right-6 md:right-12">
          <Button 
            href="https://www.aiwebtools.ai"
            className="rounded-full shadow-lg px-6"
            variant="primary"
          >
            More AI Tools <ExternalLink className="w-4 h-4 ml-2" />
          </Button>
        </div>

        {/* Copyright */}
        <div className="border-t border-sophia-purple/20 py-6 mt-8 text-center text-white/60 text-sm">
          <a 
            href="https://www.aiwebtools.ai"
            className="hover:text-sophia-gold transition-colors duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            © 2025 AI WEB TOOLS LLC. All rights reserved.
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
