
import React from 'react';
import { Quote } from 'lucide-react';

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
}

const TestimonialCard: React.FC<TestimonialProps> = ({ quote, author, role }) => {
  return (
    <div className="bg-gradient-to-b from-sophia-darker to-black/40 p-8 rounded-xl border border-sophia-purple/20 transition-all duration-300 hover:border-sophia-purple/40 cyberpunk-border group relative overflow-hidden">
      <div className="absolute -top-4 -left-4 text-sophia-purple/10 group-hover:text-sophia-purple/20 transition-colors duration-300">
        <Quote size={80} />
      </div>
      <div className="relative">
        <p className="text-white/80 mb-6 italic leading-relaxed">{quote}</p>
        <div className="flex items-center">
          <div className="w-12 h-12 bg-gradient-to-br from-sophia-blue to-sophia-purple rounded-full flex items-center justify-center text-white font-semibold">
            {author.split(' ').map(word => word[0]).join('')}
          </div>
          <div className="ml-4">
            <h4 className="font-semibold text-white group-hover:text-gradient transition-colors duration-300">{author}</h4>
            <p className="text-sm text-white/60">{role}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "Sophia Aeterna has been a life-changing companion on my spiritual journey. The wisdom and guidance offered has helped me navigate challenging periods with clarity and purpose.",
      author: "Sarah Bennett",
      role: "Spiritual Seeker"
    },
    {
      quote: "As a scholar of comparative religion, I'm impressed by the depth and accuracy of knowledge Sophia Aeterna provides. It truly embodies the spirit of Manly P. Hall's holistic approach to wisdom.",
      author: "Dr. Michael Chen",
      role: "Religious Studies Professor"
    },
    {
      quote: "The way Sophia Aeterna connects ancient symbolism to practical modern life has opened my eyes to new dimensions of understanding. It's like having a master teacher available at any moment.",
      author: "Olivia Rodriguez",
      role: "Artist & Philosopher"
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-cyberpunk-grid bg-[length:50px_50px] opacity-[0.03] pointer-events-none"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 bg-sophia-blue/20 text-sophia-blue rounded-full text-sm mb-4">
            Seeker Experiences
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display mb-6">
            <span className="text-gradient">Illuminated</span> Journeys
          </h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            Hear from fellow seekers who have been guided by the eternal wisdom of Sophia Aeterna
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              role={testimonial.role}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
