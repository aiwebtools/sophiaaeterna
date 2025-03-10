
import React, { useState, useEffect } from 'react';
import { Shield } from 'lucide-react';
import Button from './Button';
import { useToast } from '@/hooks/use-toast';

interface DisclaimerPopupProps {
  onAccept: () => void;
}

const DisclaimerPopup: React.FC<DisclaimerPopupProps> = ({ onAccept }) => {
  const { toast } = useToast();
  
  const handleAccept = () => {
    // Set a cookie or localStorage item to remember that the user has accepted
    localStorage.setItem('disclaimerAccepted', 'true');
    onAccept();
    toast({
      title: "Welcome to Sophia Aeterna",
      description: "Thank you for accepting our terms.",
      duration: 3000,
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
      <div className="w-full max-w-md p-6 mx-4 glass-panel border border-sophia-purple/30 rounded-xl shadow-xl animate-fade-in">
        <div className="mb-4 flex items-center">
          <div className="mr-3 w-10 h-10 bg-sophia-purple/20 rounded-full flex items-center justify-center">
            <Shield className="w-5 h-5 text-sophia-purple" />
          </div>
          <h2 className="text-xl font-display text-white">Terms of Use</h2>
        </div>
        
        <div className="space-y-4 text-white/80 text-sm mb-6 max-h-60 overflow-y-auto pr-2">
          <p>
            By accessing and using Sophia Aeterna, you acknowledge and agree to the following:
          </p>
          
          <p>
            Sophia Aeterna provides spiritual and philosophical content inspired by the work of Manly P. Hall. This content is for informational and educational purposes only and does not constitute professional advice of any kind.
          </p>
          
          <p>
            The information provided is not a substitute for professional medical, legal, financial, or psychological advice. We assume no responsibility for actions taken based on the content provided.
          </p>
          
          <p>
            By clicking "I AGREE" below, you confirm that you have read, understood, and agree to our full disclaimer, terms of service, and privacy policy.
          </p>
        </div>
        
        <div className="flex justify-center">
          <Button 
            variant="primary" 
            size="md" 
            className="min-w-[150px] cyberpunk-glow"
            onClick={handleAccept}
          >
            I AGREE
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DisclaimerPopup;
