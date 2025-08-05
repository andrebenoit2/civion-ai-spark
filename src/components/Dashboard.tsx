import React from 'react';
import { ArrowRight } from 'lucide-react';

const Dashboard = () => {
  const howItWorksSteps = [
    { 
      step: "1", 
      title: "Upload lead list or connect form", 
      desc: "Import contacts, connect your CRM, or sync web forms",
      detail: "CSV upload, Zapier integration, or direct form connection"
    },
    { 
      step: "2", 
      title: "Choose outreach goal", 
      desc: "Booking, follow-up, reminders, or cart recovery",
      detail: "Pre-built templates for common service business needs"
    },
    { 
      step: "3", 
      title: "Civion handles outreach & replies", 
      desc: "AI sends personalized messages and responds naturally",
      detail: "SMS, WhatsApp, or email - sounds human, works 24/7"
    },
    { 
      step: "4", 
      title: "You get booked calls or structured responses", 
      desc: "Appointments in your calendar, qualified leads in your inbox",
      detail: "Direct calendar integration and CRM sync"
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-r from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            How Civion Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From missed lead to booked appointment in minutes — watch Civion turn prospects into paying customers
          </p>
          <div className="mt-6 inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-4 py-2 rounded-full">
            Setup takes under 5 minutes
          </div>
        </div>
        
        <div className="bg-white rounded-2xl shadow-2xl p-8 lg:p-12 relative overflow-hidden mb-12">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-600 to-purple-600"></div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900">
                Simple 4-step process
              </h3>
              <div className="space-y-6">
                {howItWorksSteps.map((step, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                      {step.step}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-lg text-gray-900 mb-1">{step.title}</h4>
                      <p className="text-gray-600 mb-2">{step.desc}</p>
                      <p className="text-sm text-gray-500 italic">{step.detail}</p>
                    </div>
                    {index < howItWorksSteps.length - 1 && (
                      <ArrowRight className="text-gray-300 mt-2" size={20} />
                    )}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <h4 id="see-it-in-action" className="text-2xl font-bold text-gray-900 mb-4 text-center">See It In Action</h4>
              <p className="text-gray-600 mb-6 text-center">Watch a 2-minute demo of Civion converting a lead</p>
              <div className="relative rounded-xl overflow-hidden shadow-2xl">
                <iframe
                  width="100%"
                  height="315"
                  src="https://www.youtube.com/embed/3S-6eWrEzjo"
                  title="Civion Demo Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-80 lg:h-96"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
