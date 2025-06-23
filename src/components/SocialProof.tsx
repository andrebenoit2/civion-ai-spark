
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const SocialProof = () => {
  const testimonials = [
    {
      quote: "Civion helped us achieve a 90% response rate in under 1 hour during our campaign launch. The AI personalization is incredible.",
      author: "Sarah Johnson",
      title: "Campaign Manager",
      company: "Political Action Group"
    },
    {
      quote: "We reduced no-shows by 70% and increased customer satisfaction scores. Civion pays for itself within the first month.",
      author: "Mike Chen", 
      title: "Operations Director",
      company: "Premier Home Services"
    },
    {
      quote: "The HIPAA-compliant messaging has transformed our patient communication. Setup took less than 30 minutes.",
      author: "Dr. Emily Rodriguez",
      title: "Practice Manager",
      company: "Wellness Medical Group"
    }
  ];

  const metrics = [
    { value: "90%", label: "Response Rate" },
    { value: "70%", label: "Reduction in No-Shows" },
    { value: "5 min", label: "Average Setup Time" },
    { value: "500+", label: "Happy Customers" }
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join hundreds of businesses already seeing remarkable results with Civion
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
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="text-yellow-400 text-2xl mb-4">★★★★★</div>
                  <p className="text-gray-700 italic leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                </div>
                <div className="border-t pt-4">
                  <div className="font-semibold text-gray-900">{testimonial.author}</div>
                  <div className="text-sm text-gray-600">{testimonial.title}</div>
                  <div className="text-sm text-blue-600">{testimonial.company}</div>
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
