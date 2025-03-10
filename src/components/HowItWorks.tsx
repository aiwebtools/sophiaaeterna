
import React from 'react';
import { MessageCircleQuestion, MessageSquare, BookOpenText, Sparkles } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: <MessageCircleQuestion className="w-12 h-12 text-sophia-gold" />,
      title: "Ask Your Question",
      description: "Begin with your inquiry about philosophy, spirituality, esoteric traditions, or personal growth."
    },
    {
      icon: <BookOpenText className="w-12 h-12 text-sophia-blue" />,
      title: "Access Ancient Wisdom",
      description: "Sophia Aeterna draws upon the vast repository of Manly P. Hall's wisdom and esoteric knowledge."
    },
    {
      icon: <MessageSquare className="w-12 h-12 text-sophia-purple" />,
      title: "Receive Guidance",
      description: "Engage in Socratic dialogue that encourages personal reflection and deeper understanding."
    },
    {
      icon: <Sparkles className="w-12 h-12 text-sophia-accent" />,
      title: "Transform & Grow",
      description: "Apply the timeless wisdom to your life, fostering spiritual growth and self-realization."
    }
  ];

  return (
    <section className="py-20 bg-sophia-dark relative">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMjUxYzUiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0aDR2MWgtNHYtMXptMC0yaDF2NGgtMXYtNHptMi0xdjFoMXYtMWgtMXptLTIgMWgxdjJoLTF2LTJ6bTIgM2gydjFoLTJ2LTF6bS0zIDJoNXYxaC01di0xem0tMy0yaDF2M2gtMXYtM3ptMyAxaDF2MWgtMXYtMXoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-70 pointer-events-none"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 bg-sophia-gold/20 text-sophia-gold rounded-full text-sm mb-4">
            Your Spiritual Journey
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display mb-6">
            How <span className="text-gradient">Sophia Aeterna</span> Works
          </h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            Embark on a journey of discovery through the eternal wisdom of the ages
          </p>
        </div>

        <div className="relative">
          {/* Connection line */}
          <div className="absolute left-1/2 top-8 bottom-8 w-0.5 bg-gradient-to-b from-sophia-gold via-sophia-blue to-sophia-purple hidden md:block"></div>
          
          <div className="space-y-12 md:space-y-0 relative">
            {steps.map((step, index) => (
              <div 
                key={index}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } items-center gap-8 md:gap-12`}
              >
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <h3 className="text-2xl font-display mb-3">{step.title}</h3>
                  <p className="text-white/70">{step.description}</p>
                </div>
                
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-24 h-24 rounded-full bg-sophia-darker border border-white/10 flex items-center justify-center relative">
                    <div className="absolute inset-1 rounded-full bg-gradient-to-br from-black/80 to-sophia-dark blur-[1px]"></div>
                    <div className="relative">{step.icon}</div>
                  </div>
                </div>
                
                <div className="w-full md:w-1/2 hidden md:block"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
