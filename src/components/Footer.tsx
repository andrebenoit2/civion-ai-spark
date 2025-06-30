
import React from 'react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to Grow Your Business Automatically?
          </h2>
          <p className="text-xl text-gray-300 mb-4 max-w-3xl mx-auto">
            Join hundreds of service businesses already booking more jobs with AI-powered outreach.
          </p>
          <div className="text-lg text-blue-300 mb-8">
            Starting from $97/month • Setup in under 5 minutes • Cancel anytime
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Start Free Trial
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-gray-300 text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg font-semibold transition-all duration-300"
            >
              See It In Action
            </Button>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Civion
              </h3>
              <p className="text-gray-400 text-sm">AI-Powered Outreach for Service Businesses</p>
            </div>
            <div className="text-gray-400 text-sm">
              © 2024 Civion. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
