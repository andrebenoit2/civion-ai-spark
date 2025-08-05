
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const SocialProof = () => {
  const useCases = [
    {
      business: "Premium House Cleaning",
      industry: "Home Services",
      challenge: "Lost 40% of leads because they couldn't respond fast enough",
      solution: "Civion now follows up within 5 minutes and books appointments automatically",
      result: "37% more jobs booked",
      quote: "Civion doubled our booking rate. We went from missing half our leads to converting most of them into paying customers.",
      owner: "Sarah Martinez",
      title: "Owner"
    },
    {
      business: "Bella's Boutique",
      industry: "Retail", 
      challenge: "High cart abandonment rate on their Shopify store",
      solution: "Automated SMS recovery campaigns with personalized discount offers",
      result: "28% increase in recovered sales",
      quote: "The abandoned cart recovery alone pays for Civion. It's like having a sales assistant working 24/7.",
      owner: "Mike Thompson",
      title: "Store Manager"
    },
    {
      business: "Wellness Family Clinic",
      industry: "Healthcare",
      challenge: "30% no-show rate was costing them $15K monthly in lost revenue",
      solution: "Automated appointment reminders and follow-up care messages",
      result: "65% reduction in no-shows",
      quote: "Our patients love the reminders, and we've virtually eliminated no-shows. It's been transformational for our practice.",
      owner: "Dr. Jennifer Lee",
      title: "Practice Owner"
    }
  ];

  const metrics = [
    { value: "37%", label: "More Jobs Booked" },
    { value: "65%", label: "Fewer No-Shows" },
    { value: "5 min", label: "Average Response Time" },
    { value: "500+", label: "Service Businesses" }
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Real Results from Real Businesses
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how service businesses like yours are using Civion to grow automatically
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-blue-600 mb-2">
                {metric.value}
              </div>
              <div className="text-gray-600 font-medium">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-bold text-lg text-gray-900">{useCase.business}</h3>
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">{useCase.industry}</span>
                  </div>
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="font-semibold text-red-600">Challenge: </span>
                      <span className="text-gray-700">{useCase.challenge}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-blue-600">Civion Solution: </span>
                      <span className="text-gray-700">{useCase.solution}</span>
                    </div>
                    <div className="bg-green-50 p-3 rounded-lg">
                      <span className="font-bold text-green-800">Result: {useCase.result}</span>
                    </div>
                  </div>
                </div>
                <div className="border-t pt-6">
                  <div className="text-yellow-400 text-lg mb-3">★★★★★</div>
                  <p className="text-gray-700 italic leading-relaxed mb-4">
                    "{useCase.quote}"
                  </p>
                  <div>
                    <div className="font-semibold text-gray-900">{useCase.owner}</div>
                    <div className="text-sm text-gray-600">{useCase.title}, {useCase.business}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
