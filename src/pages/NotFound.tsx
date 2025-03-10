
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { BookOpenText, Home } from "lucide-react";
import Button from "@/components/Button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
    
    // Update the document title
    document.title = "Page Not Found | Sophia Aeterna";
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-sophia-darker px-4">
      <div className="text-center max-w-xl mx-auto">
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-sophia-purple to-sophia-blue rounded-full blur-lg opacity-70"></div>
            <div className="relative bg-gradient-to-r from-sophia-purple to-sophia-blue p-4 rounded-full">
              <BookOpenText className="h-12 w-12 text-white" />
            </div>
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-display mb-4 text-gradient">404</h1>
        <p className="text-xl md:text-2xl text-white/90 mb-4 font-display">The Wisdom You Seek Lies Elsewhere</p>
        <p className="text-lg text-white/70 mb-8">
          This path does not exist in our repository of knowledge. Let us guide you back to the main teachings.
        </p>
        
        <Button 
          href="/" 
          variant="primary" 
          size="lg"
          className="inline-flex items-center"
        >
          <Home className="mr-2 h-5 w-5" /> Return to Illumination
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
