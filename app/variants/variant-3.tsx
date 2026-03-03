"use client";

import { useState } from 'react';
import { Playfair_Display, Source_Sans_3 } from 'next/font/google';
import Script from 'next/script';

const playfair = Playfair_Display({ subsets: ['latin'] });
const sourceSans = Source_Sans_3({ subsets: ['latin'] });

export default function TablingosLanding() {
  const [showCalendly, setShowCalendly] = useState(false);

  return (
    <div className={`min-h-screen bg-gray-50 ${sourceSans.className}`}>
      <Script src="https://assets.calendly.com/assets/external/widget.js" />
      
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className={`text-2xl font-bold text-gray-900 ${playfair.className}`}>
            Tablingos
          </div>
          <button
            type="button"
            onClick={() => setShowCalendly(true)}
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
          >
            call
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-white py-20 lg:py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className={`text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight ${playfair.className}`}>
            Transform Data Chaos<br />Into Seamless Workflows
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Cut out months of importer development with our no-code data transformation platform. From billing data to EEG signals—validate, transform, and onboard any data type effortlessly.
          </p>
          <div className="mb-16">
            <button
              type="button"
              onClick={() => setShowCalendly(true)}
              className="bg-red-600 hover:bg-red-700 text-white px-12 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg hover:shadow-xl"
            >
              call
            </button>
            <p className="text-sm text-gray-500 mt-3">Schedule your demo • Limited availability</p>
          </div>
        </div>
      </section>

      {/* Data Preview Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className={`text-3xl md:text-4xl font-bold text-gray-900 mb-6 ${playfair.className}`}>
              Perfect Data Structure, Every Time
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              See how our platform transforms messy data into clean, validated structures ready for your workflows.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 md:p-12">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="pb-4 text-sm font-semibold text-gray-900 uppercase tracking-wider">Field Name</th>
                    <th className="pb-4 text-sm font-semibold text-gray-900 uppercase tracking-wider">Type</th>
                    <th className="pb-4 text-sm font-semibold text-gray-900 uppercase tracking-wider">Validation</th>
                    <th className="pb-4 text-sm font-semibold text-gray-900 uppercase tracking-wider">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="py-4 font-medium text-gray-900">customer_email</td>
                    <td className="py-4 text-gray-600">String</td>
                    <td className="py-4 text-gray-600">Email format</td>
                    <td className="py-4"><span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">Valid</span></td>
                  </tr>
                  <tr>
                    <td className="py-4 font-medium text-gray-900">billing_amount</td>
                    <td className="py-4 text-gray-600">Decimal</td>
                    <td className="py-4 text-gray-600">Min: 0.01</td>
                    <td className="py-4"><span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">Valid</span></td>
                  </tr>
                  <tr>
                    <td className="py-4 font-medium text-gray-900">transaction_date</td>
                    <td className="py-4 text-gray-600">DateTime</td>
                    <td className="py-4 text-gray-600">ISO 8601</td>
                    <td className="py-4"><span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">Valid</span></td>
                  </tr>
                  <tr>
                    <td className="py-4 font-medium text-gray-900">sensor_reading</td>
                    <td className="py-4 text-gray-600">Float</td>
                    <td className="py-4 text-gray-600">Range: -100 to 100</td>
                    <td className="py-4"><span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">Valid</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className={`text-3xl md:text-4xl font-bold text-gray-900 mb-6 ${playfair.className}`}>
              Let Your Data Work For You, Not Against You
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <div className="w-8 h-8 bg-red-600 rounded-lg"></div>
              </div>
              <h3 className={`text-xl font-bold text-gray-900 mb-4 ${playfair.className}`}>
                No-Code Transformation
              </h3>
              <p className="text-gray-600 leading-relaxed">
                No-code/low-code data transformation eliminates custom development. Define your data structure through our intuitive interface.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <div className="w-8 h-8 bg-red-600 rounded-lg"></div>
              </div>
              <h3 className={`text-xl font-bold text-gray-900 mb-4 ${playfair.className}`}>
                Automated ETL Pipelines
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Automated ETL pipelines handle everything from billing to sensor data. Set it once, let it run forever.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <div className="w-8 h-8 bg-red-600 rounded-lg"></div>
              </div>
              <h3 className={`text-xl font-bold text-gray-900 mb-4 ${playfair.className}`}>
                Intuitive Validation Rules
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Intuitive UI lets you define data structure and validation rules. Catch errors before they become problems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Calendly Modal/Section */}
      {showCalendly && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl w-full max-w-4xl h-[600px] relative">
            <button
              onClick={() => setShowCalendly(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl font-bold z-10"
            >
              ×
            </button>
            <div 
              className="calendly-inline-widget w-full h-full rounded-2xl"
              data-url="https://calendly.com/ibrahim-ansari4161/new-meeting"
            ></div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className={`text-3xl font-bold mb-4 ${playfair.className}`}>
            Tablingos
          </div>
          <p className="text-gray-400 mb-8">
            Streamlined data onboarding platform that eliminates data struggles through seamless collection, validation, and transformation.
          </p>
          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-500 text-sm">
              © 2024 Tablingos. Transform data chaos into seamless workflows.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
