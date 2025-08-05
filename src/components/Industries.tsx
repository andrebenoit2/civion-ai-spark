
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Industries = () => {
  const industries = [
    {
      title: "Home Services",
      subtitle: "Cleaners, HVAC, plumbing",
      description: "Follow up on quotes and web leads in seconds. Book more jobs, no chasing required.",
      features: ["Instant quote follow-ups", "Lead nurturing automation", "Appointment booking", "Service reminders"],
      icon: "🏠",
      benefit: "37% more jobs booked"
    },
    {
      title: "Retail & eCommerce",
      subtitle: "Storefronts, Shopify stores",
      description: "Turn browsers into buyers. Engage abandoned carts and reorders with AI that feels human.",
      features: ["Abandoned cart recovery", "Reorder campaigns", "Personalized offers", "Customer win-back"],
      icon: "🛍️",
      benefit: "28% increase in sales"
    },
    {
      title: "Healthcare & Clinics", 
      subtitle: "Clinics, physios, dentists",
      description: "Cut no-shows and free up your front desk. Automate patient reminders and check-ins.",
      features: ["Appointment reminders", "Check-in automation", "Follow-up care", "HIPAA-compliant messaging"],
      icon: "🏥",
      benefit: "65% fewer no-shows"
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Built for Service Businesses
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Whether you're booking appointments, closing sales, or caring for patients — Civion works for your business
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <Card 
              key={index}
              className="hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-0 shadow-lg bg-white"
            >
              <CardHeader className="text-center pb-4">
                <div className="text-5xl mb-4">{industry.icon}</div>
                <CardTitle className="text-2xl font-bold text-gray-900">
                  {industry.title}
                </CardTitle>
                <p className="text-sm text-gray-500 font-medium">{industry.subtitle}</p>
                <div className="mt-2 inline-block bg-green-100 text-green-800 text-sm font-semibold px-3 py-1 rounded-full">
                  {industry.benefit}
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  {industry.description}
                </p>
                <div className="space-y-2">
                  {industry.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
