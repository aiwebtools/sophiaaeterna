
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import HowItWorks from '@/components/HowItWorks';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Disclaimer from '@/components/Disclaimer';
import Footer from '@/components/Footer';
import ParticleBackground from '@/components/ParticleBackground';
import ScrollToTop from '@/components/ScrollToTop';
import DisclaimerPopup from '@/components/DisclaimerPopup';

const Index = () => {
  // State to track if the disclaimer has been accepted
  const [showDisclaimer, setShowDisclaimer] = useState(false);

  useEffect(() => {
    // Update the document title
    document.title = "Sophia Aeterna | Eternal Wisdom Guide";
    
    // Check if the user has already accepted the disclaimer
    const hasAccepted = localStorage.getItem('disclaimerAccepted') === 'true';
    
    if (!hasAccepted) {
      // If they haven't accepted yet, show the disclaimer popup
      setShowDisclaimer(true);
    }
  }, []);

  const handleDisclaimerAccept = () => {
    setShowDisclaimer(false);
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <ParticleBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <HowItWorks />
        <Testimonials />
        <FAQ />
        <Disclaimer />
      </main>
      <Footer />
      <ScrollToTop />
      
      {/* Render the disclaimer popup if needed */}
      {showDisclaimer && <DisclaimerPopup onAccept={handleDisclaimerAccept} />}
    </div>
  );
};

export default Index;
