
import React from 'react';
import { BookOpenText } from 'lucide-react';

interface LogoProps {
  onClick?: () => void;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ onClick, className = '' }) => {
  return (
    <div 
      className={`inline-flex items-center gap-2 cursor-pointer ${className}`} 
      onClick={onClick}
    >
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-sophia-purple to-sophia-blue rounded-full blur-md opacity-70"></div>
        <div className="relative bg-gradient-to-r from-sophia-purple to-sophia-blue p-2 rounded-full">
          <BookOpenText className="h-6 w-6 text-white" />
        </div>
      </div>
      <div className="flex flex-col">
        <h1 className="text-xl md:text-2xl font-display tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-sophia-gold via-sophia-amber to-sophia-gold">
          Sophia Aeterna
        </h1>
        <span className="text-[9px] md:text-xs text-white/70">
          Presented by <span className="hover:text-sophia-accent transition-colors duration-300">AiWebTools.Ai</span>
        </span>
      </div>
    </div>
  );
};

export default Logo;
