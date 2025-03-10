
import React, { useEffect, useRef } from 'react';
import Button from './Button';
import { ChevronDown, Bot, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  const orbitRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!orbitRef.current) return;
      
      const { clientX, clientY } = e;
      const rect = orbitRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      // Calculate the difference from the center (normalized to -1 to 1)
      const dx = (clientX - centerX) / (window.innerWidth / 2) * 10;
      const dy = (clientY - centerY) / (window.innerHeight / 2) * 10;
      
      // Apply a subtle transform to follow the mouse
      orbitRef.current.style.transform = `translate(${dx}px, ${dy}px)`;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-10 px-4 overflow-hidden">
      {/* 3D Orbit Element */}
      <div 
        ref={orbitRef}
        className="absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] will-change-transform"
      >
        {/* Orbital rings */}
        <div className="absolute inset-0 border border-sophia-purple/20 rounded-full animate-spin-slow"></div>
        <div className="absolute inset-4 border border-sophia-blue/20 rounded-full animate-spin-slow" style={{animationDirection: 'reverse'}}></div>
        <div className="absolute inset-10 border border-sophia-gold/20 rounded-full animate-spin-slow" style={{animationDuration: '25s'}}></div>
        
        {/* Orbital glowing dots */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-sophia-purple rounded-full shadow-[0_0_10px_4px_rgba(110,34,197,0.5)] animate-pulse-glow"></div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-sophia-blue rounded-full shadow-[0_0_10px_4px_rgba(34,81,197,0.5)] animate-pulse-glow"></div>
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-sophia-cyan rounded-full shadow-[0_0_10px_4px_rgba(34,165,197,0.5)] animate-pulse-glow"></div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-sophia-gold rounded-full shadow-[0_0_10px_4px_rgba(197,169,34,0.5)] animate-pulse-glow"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* AI Tool Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-sophia-purple/20 rounded-full mb-6 border border-sophia-purple/30">
          <Bot className="w-4 h-4 text-sophia-accent" />
          <span className="text-sm font-medium text-white">AI Wisdom Assistant</span>
          <Sparkles className="w-3 h-3 text-sophia-gold" />
        </div>
        
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-wide fade-in">
          <span className="block bg-gradient-to-r from-sophia-cyan via-sophia-blue to-sophia-purple bg-clip-text text-transparent">Sophia Aeterna</span>
          <span className="text-xl md:text-2xl font-light text-white/80 mt-2 block fade-in animate-delay-100">
            Illuminating the Path to Eternal Wisdom
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mt-6 mb-8 fade-in animate-delay-200">
          An advanced AI guide infused with the spirit and wisdom of Manly P. Hall, offering timeless esoteric knowledge and spiritual illumination through interactive conversations.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 fade-in animate-delay-300">
          <Button 
            variant="primary" 
            size="lg"
            href="https://chatgpt.com/g/g-678afd9be6348191a641478dbee7a8a1-sophia-aeterna"
          >
            Begin Your Journey
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            href="#about"
          >
            Discover More
          </Button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center cursor-pointer fade-in animate-delay-500">
        <span className="text-white/60 text-sm mb-2">Explore</span>
        <ChevronDown className="w-6 h-6 text-sophia-accent animate-bounce" />
      </div>
    </section>
  );
};

export default Hero;
