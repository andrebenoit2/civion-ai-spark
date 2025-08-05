import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative px-6 py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 opacity-5"></div>
      
      <div className="relative max-w-7xl mx-auto text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            AI-powered outreach for
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> service businesses</span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            Convert missed leads into booked jobs, repeat buyers, or confirmed appointments — 
            <strong className="text-gray-900"> automatically.</strong>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              asChild
            >
              <a href="#see-it-in-action">
                See How It Works
              </a>
            </Button>
          </div>
          
          <div className="flex items-center justify-center text-sm text-gray-500 mb-8">
            <span>✨ Trusted by 500+ service businesses</span>
            <span className="mx-4">•</span>
            <span>🚀 37% more jobs booked</span>
            <span className="mx-4">•</span>
            <span>⚡ Setup in under 5 minutes</span>
          </div>
        </div>
        
        <div className="animate-fade-in">
          <ArrowDown className="mx-auto text-gray-400 animate-bounce" size={24} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
