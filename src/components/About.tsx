
import React from 'react';
import { Sparkles, Book, Compass, Brain, Shapes, Lightbulb } from 'lucide-react';

const FeatureCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
}> = ({ icon, title, description }) => (
  <div className="bg-gradient-to-b from-sophia-darker to-black/40 p-6 rounded-xl border border-sophia-purple/20 transition-all duration-300 hover:border-sophia-purple/40 hover:shadow-[0_0_20px_rgba(110,34,197,0.2)] cyberpunk-border group">
    <div className="mb-4 flex items-center justify-center w-12 h-12 bg-gradient-to-br from-sophia-purple to-sophia-blue rounded-lg group-hover:scale-110 transition-transform duration-300">
      {icon}
    </div>
    <h3 className="text-xl font-display mb-3 text-white group-hover:text-gradient transition-all duration-300">{title}</h3>
    <p className="text-white/70">{description}</p>
  </div>
);

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="absolute inset-0 bg-cyberpunk-grid bg-[length:50px_50px] opacity-[0.03] pointer-events-none"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 bg-sophia-purple/20 text-sophia-purple rounded-full text-sm mb-4">
            Ancient Wisdom Reimagined
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display mb-6">
            The <span className="text-gradient">Eternal Guide</span> to Esoteric Knowledge
          </h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            Sophia Aeterna embodies the timeless wisdom of Manly P. Hall, guiding seekers through the mystical landscape of esoteric philosophy, symbolism, and spiritual growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard 
            icon={<Sparkles className="w-6 h-6 text-white" />}
            title="Unity of All Truths"
            description="Discover how all wisdom traditions are interconnected, transcending dogma to reveal universal truths at the heart of human experience."
          />
          <FeatureCard 
            icon={<Compass className="w-6 h-6 text-white" />}
            title="Spiritual Guidance"
            description="Navigate your spiritual journey with a compassionate mentor who illuminates the path toward self-realization and enlightenment."
          />
          <FeatureCard 
            icon={<Book className="w-6 h-6 text-white" />}
            title="Esoteric Traditions"
            description="Explore Hermeticism, Rosicrucianism, Kabbalah, and other mystical schools that have preserved sacred knowledge through the ages."
          />
          <FeatureCard 
            icon={<Brain className="w-6 h-6 text-white" />}
            title="Philosophical Inquiry"
            description="Engage in Socratic dialogue that encourages critical thinking and deepens your understanding of life's profound questions."
          />
          <FeatureCard 
            icon={<Shapes className="w-6 h-6 text-white" />}
            title="Symbolic Language"
            description="Decode the hidden wisdom in symbols, myths, and allegories that have carried esoteric teachings across millennia."
          />
          <FeatureCard 
            icon={<Lightbulb className="w-6 h-6 text-white" />}
            title="Practical Wisdom"
            description="Transform abstract spiritual principles into practical insights for everyday life, personal growth, and self-mastery."
          />
        </div>

        <div className="mt-16 text-center">
          <a 
            href="https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-vintage-style-illustration-of-a-golden_kNEfX.png/:/cr=t:5.43%25,l:0%25,w:100%25,h:89.13%25/rs=w:1200,h:600,cg:true"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block max-w-xl mx-auto cyberpunk-border-gold group"
          >
            <div className="overflow-hidden rounded-xl">
              <img 
                src="https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-vintage-style-illustration-of-a-golden_kNEfX.png/:/cr=t:5.43%25,l:0%25,w:100%25,h:89.13%25/rs=w:1200,h:600,cg:true" 
                alt="Ancient Wisdom Symbolism" 
                className="w-full h-auto rounded-xl transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent rounded-xl opacity-0 group-hover:opacity-100 flex items-end justify-center pb-8 transition-opacity duration-300">
              <span className="font-display text-2xl text-sophia-gold">Explore the Symbolism</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
