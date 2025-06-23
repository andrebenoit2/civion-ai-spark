
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Industries = () => {
  const industries = [
    {
      title: "Home Services",
      description: "Automate appointment reminders, follow-ups, and service confirmations. Reduce no-shows by 70% with intelligent scheduling.",
      features: ["Appointment Reminders", "Service Follow-ups", "Review Requests", "Emergency Notifications"],
      icon: "🏠"
    },
    {
      title: "Retail",
      description: "Recover abandoned carts, send personalized promotions, and nurture customer relationships at scale.",
      features: ["Cart Recovery", "Personalized Offers", "Order Updates", "Customer Surveys"],
      icon: "🛍️"
    },
    {
      title: "Healthcare", 
      description: "Send HIPAA-compliant patient reminders, test results, and follow-up care instructions automatically.",
      features: ["Appointment Reminders", "Test Result Notifications", "Medication Reminders", "Follow-up Care"],
      icon: "🏥"
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Built for Every Industry
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Civion adapts to your business needs with industry-specific AI models and compliance features
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
