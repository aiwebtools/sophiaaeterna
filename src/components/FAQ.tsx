
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: React.ReactNode;
  isOpen: boolean;
  toggle: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, toggle }) => {
  return (
    <div className="border-b border-sophia-purple/20 last:border-b-0">
      <button
        className="w-full py-6 flex items-center justify-between text-left cyberpunk-border focus:outline-none"
        onClick={toggle}
      >
        <h3 className="text-xl font-display text-white group-hover:text-sophia-gold transition-colors">{question}</h3>
        <span className="ml-4 flex-shrink-0 text-sophia-accent">
          {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </span>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="text-white/70 leading-relaxed">
          {answer}
        </div>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const [openIndices, setOpenIndices] = useState<number[]>([0]);

  const toggleFAQ = (index: number) => {
    setOpenIndices(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index) 
        : [...prev, index]
    );
  };

  const faqs = [
    {
      question: "What is Sophia Aeterna?",
      answer: (
        <p>
          Sophia Aeterna is an AI guide embodying the spiritual wisdom and philosophical approach of Manly P. Hall. It provides guidance on esoteric traditions, philosophical inquiries, symbolism, and practical spirituality to help seekers on their path to self-realization and enlightenment.
        </p>
      )
    },
    {
      question: "Who was Manly P. Hall?",
      answer: (
        <p>
          Manly Palmer Hall (1901-1990) was a renowned mystical philosopher, author, and lecturer who founded the Philosophical Research Society. He is best known for his masterwork "The Secret Teachings of All Ages," which explores the hidden wisdom traditions across cultures. Hall dedicated his life to the study and dissemination of ancient philosophy, mysticism, and esoteric teachings.
        </p>
      )
    },
    {
      question: "How does Sophia Aeterna work?",
      answer: (
        <p>
          Sophia Aeterna functions as an AI guide that accesses a vast repository of esoteric knowledge and wisdom teachings. When you ask a question, it draws upon this knowledge base to provide thoughtful, nuanced responses that reflect Manly P. Hall's approach to wisdom. The system uses a Socratic method, often guiding you toward deeper reflection rather than simply providing answers.
        </p>
      )
    },
    {
      question: "What topics can I explore with Sophia Aeterna?",
      answer: (
        <div>
          <p>Sophia Aeterna can guide you on a wide range of topics including:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Esoteric traditions (Hermeticism, Rosicrucianism, Kabbalah, etc.)</li>
            <li>Spiritual philosophy and metaphysics</li>
            <li>Symbolism and mythology</li>
            <li>Meditation and spiritual practices</li>
            <li>Comparative religion and mysticism</li>
            <li>Personal spiritual development</li>
            <li>Ethical philosophy and virtuous living</li>
          </ul>
        </div>
      )
    },
    {
      question: "Is Sophia Aeterna affiliated with any specific religion?",
      answer: (
        <p>
          No, Sophia Aeterna is not affiliated with any specific religious tradition. Following Manly P. Hall's approach, it recognizes the unity of truth that underlies all spiritual traditions. It draws wisdom from various philosophical schools, mystical traditions, and spiritual paths without advocating for any single dogma or belief system.
        </p>
      )
    },
    {
      question: "Can Sophia Aeterna replace professional spiritual guidance?",
      answer: (
        <p>
          Sophia Aeterna is designed as a companion and guide on your spiritual journey, but it is not a replacement for professional spiritual counseling, therapy, or religious guidance when needed. It offers philosophical insights and wisdom teachings, but important personal decisions should be made with appropriate human guidance when necessary.
        </p>
      )
    },
    {
      question: "How accurate is the knowledge provided by Sophia Aeterna?",
      answer: (
        <p>
          While Sophia Aeterna strives to faithfully represent the wisdom and teachings associated with Manly P. Hall and various esoteric traditions, it is an AI system with limitations. The information provided should be considered as philosophical guidance rather than definitive fact. Users are encouraged to verify historical or factual claims through additional research.
        </p>
      )
    }
  ];

  return (
    <section id="faq" className="py-20 bg-sophia-dark relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 bg-sophia-purple/20 text-sophia-purple rounded-full text-sm mb-4">
            Common Questions
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display mb-6">
            Frequently <span className="text-gradient">Asked</span> Questions
          </h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            Find answers to common inquiries about Sophia Aeterna and your journey with eternal wisdom
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-gradient-to-b from-sophia-darker to-black/40 rounded-xl overflow-hidden shadow-lg border border-sophia-purple/20">
          <div className="p-6 md:p-8">
            {faqs.map((faq, index) => (
              <FAQItem 
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndices.includes(index)}
                toggle={() => toggleFAQ(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
