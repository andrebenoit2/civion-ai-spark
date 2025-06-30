
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Dashboard = () => {
  const demoSteps = [
    { step: "1", title: "Upload leads", desc: "Import contacts or connect your CRM" },
    { step: "2", title: "Choose goal", desc: "Book appointments, recover carts, or follow up" },
    { step: "3", title: "AI starts conversations", desc: "Personalized messages sent automatically" },
    { step: "4", title: "See replies", desc: "Monitor responses in real-time" },
    { step: "5", title: "Book jobs", desc: "Convert conversations into revenue" }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-r from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            See How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From lead to booked job in 60 seconds — watch Civion turn prospects into paying customers
          </p>
          <div className="mt-6 inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-4 py-2 rounded-full">
            Starting from $97/month
          </div>
        </div>
        
        <div className="bg-white rounded-2xl shadow-2xl p-8 lg:p-12 relative overflow-hidden mb-12">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-600 to-purple-600"></div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900">
                Your 60-second demo flow
              </h3>
              <div className="space-y-4">
                {demoSteps.map((step, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                      {step.step}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{step.title}</h4>
                      <p className="text-gray-600 text-sm">{step.desc}</p>
                    </div>
                    {index < demoSteps.length - 1 && (
                      <ArrowRight className="text-gray-300 mt-1" size={16} />
                    )}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl p-8 h-80 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white text-2xl">▶️</span>
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Interactive Demo</h4>
                  <p className="text-gray-600">Click to see Civion in action</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
