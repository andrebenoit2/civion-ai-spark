
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Industries = () => {
  const industries = [
    {
      title: "Home Services",
      subtitle: "Cleaners, plumbers, contractors",
      description: "Follow up on leads instantly and never miss a job. Turn website visitors into booked appointments automatically.",
      features: ["Lead follow-up within 5 minutes", "Appointment scheduling", "Service reminders", "Review requests"],
      icon: "🏠",
      benefit: "37% more jobs booked"
    },
    {
      title: "Retail",
      subtitle: "Storefronts, e-commerce, Shopify stores",
      description: "Recover abandoned carts and turn browsers into buyers. Keep customers coming back with personalized offers.",
      features: ["Cart abandonment recovery", "Personalized promotions", "Order notifications", "Customer win-back"],
      icon: "🛍️",
      benefit: "28% increase in sales"
    },
    {
      title: "Healthcare", 
      subtitle: "Clinics, physios, dentists",
      description: "Reduce no-shows and keep patients engaged. Send appointment reminders and follow-up care instructions automatically.",
      features: ["Appointment reminders", "Follow-up care", "Health check-ins", "HIPAA-compliant messaging"],
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
