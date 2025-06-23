
import React from 'react';
import Hero from '@/components/Hero';
import Industries from '@/components/Industries';
import SocialProof from '@/components/SocialProof';
import Dashboard from '@/components/Dashboard';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Hero />
      <Industries />
      <Dashboard />
      <SocialProof />
      <Footer />
    </div>
  );
};

export default Index;
