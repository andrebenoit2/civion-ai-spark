
import React from 'react';

const Dashboard = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-r from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Powerful Dashboard, Simple Setup
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Monitor campaigns, track responses, and optimize performance with our intuitive interface
          </p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-2xl p-8 lg:p-12 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-600 to-purple-600"></div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900">
                Everything you need in one place
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <strong className="text-gray-900">AI Campaign Builder</strong>
                    <p className="text-gray-600">Create personalized campaigns with our drag-and-drop interface</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <strong className="text-gray-900">Real-time Analytics</strong>
                    <p className="text-gray-600">Track open rates, responses, and conversions as they happen</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <strong className="text-gray-900">Smart Scheduling</strong>
                    <p className="text-gray-600">AI optimizes send times for maximum engagement</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl p-6 h-80 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white text-2xl">📊</span>
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Dashboard Preview</h4>
                  <p className="text-gray-600">Interactive demo coming soon</p>
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
