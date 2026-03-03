"use client";

import { useState } from 'react';
import { Manrope, IBM_Plex_Sans } from 'next/font/google';
import Script from 'next/script';

const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope' });
const ibmPlex = IBM_Plex_Sans({ weight: ['400', '500', '600'], subsets: ['latin'], variable: '--font-ibm' });

export default function TablingosLanding() {
  const [showCalendly, setShowCalendly] = useState(false);

  const openCalendly = () => {
    setShowCalendly(true);
  };

  return (
    <div className={`${manrope.variable} ${ibmPlex.variable} min-h-screen bg-gray-50 text-gray-900 font-sans`}>
      <Script src="https://assets.calendly.com/assets/external/widget.js" />
      
      {/* Navigation */}
      <nav className="relative z-50 px-4 sm:px-6 lg:px-8 py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="text-2xl font-bold font-display text-gray-900">
            Tablingos
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display text-gray-900 leading-tight">
                  Transform Data Chaos Into Seamless Workflows
                </h1>
                <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                  Cut out months of importer development with our no-code data transformation platform. From billing data to EEG signals—validate, transform, and onboard any data type effortlessly.
                </p>
              </div>
            </div>
            
            {/* Data Preview Card */}
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6 transform rotate-1 hover:rotate-0 transition-transform duration-300">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-gray-900">Raw CSV Input</h3>
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 font-mono text-sm text-gray-700">
                    <div>user_id,email,signup_date</div>
                    <div>001,john@email,2024-01-15</div>
                    <div>002,jane@invalid,bad_date</div>
                    <div className="text-red-500">003,,null</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-xl border border-gray-200 p-6 transform -rotate-1 hover:rotate-0 transition-transform duration-300">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-gray-900">Validated Output</h3>
                    <div className="w-3 h-3 bg-emerald-400 rounded-full"></div>
                  </div>
                  <div className="bg-emerald-50 rounded-lg p-4 font-mono text-sm text-gray-700">
                    <div>{"{"}"id": "001", "email": "john@email.com"{"}"},</div>
                    <div>{"{"}"id": "002", "status": "validation_error"{"}"},</div>
                    <div className="text-emerald-600">{"{"}"id": "003", "action": "auto_filled"{"}"}}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section with Inline CTAs */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
              <div className="space-y-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">No-Code Transformation</h3>
                  <p className="text-gray-600 leading-relaxed">Eliminate custom development with our intuitive drag-and-drop interface. Define data structures and validation rules without writing a single line of code.</p>
                </div>
                <button 
                  onClick={openCalendly}
                  type="button"
                  className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-xl transition-colors duration-200 shadow-lg hover:shadow-xl"
                >
                  call
                </button>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
              <div className="space-y-6">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Automated ETL Pipelines</h3>
                  <p className="text-gray-600 leading-relaxed">Handle everything from billing data to sensor readings. Our smart pipelines automatically extract, transform, and load any data type with zero maintenance.</p>
                </div>
                <button 
                  onClick={openCalendly}
                  type="button"
                  className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-xl transition-colors duration-200 shadow-lg hover:shadow-xl"
                >
                  call
                </button>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
              <div className="space-y-6">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Intuitive Validation</h3>
                  <p className="text-gray-600 leading-relaxed">Set up complex validation rules through our visual interface. Catch errors before they enter your system and maintain data quality effortlessly.</p>
                </div>
                <button 
                  onClick={openCalendly}
                  type="button"
                  className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-xl transition-colors duration-200 shadow-lg hover:shadow-xl"
                >
                  call
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data Transformation Story */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-gray-900 mb-6">
              See Your Data Transform
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Watch how messy, inconsistent data becomes clean, structured, and ready for your applications
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            {/* Before */}
            <div className="bg-red-50 rounded-2xl p-8 border-2 border-red-200">
              <h3 className="text-lg font-semibold text-red-800 mb-4 flex items-center">
                <span className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">1</span>
                Raw Input Data
              </h3>
              <div className="bg-white rounded-lg p-4 font-mono text-sm">
                <div className="text-red-600">❌ Mixed formats</div>
                <div className="text-red-600">❌ Missing values</div>
                <div className="text-red-600">❌ Invalid entries</div>
                <div className="text-red-600">❌ Inconsistent structure</div>
              </div>
            </div>
            
            {/* Arrow */}
            <div className="flex justify-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </div>
            
            {/* After */}
            <div className="bg-emerald-50 rounded-2xl p-8 border-2 border-emerald-200">
              <h3 className="text-lg font-semibold text-emerald-800 mb-4 flex items-center">
                <span className="w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">2</span>
                Clean Output
              </h3>
              <div className="bg-white rounded-lg p-4 font-mono text-sm">
                <div className="text-emerald-600">✅ Standardized format</div>
                <div className="text-emerald-600">✅ Validated entries</div>
                <div className="text-emerald-600">✅ Complete records</div>
                <div className="text-emerald-600">✅ Ready for production</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer with Prominent CTA */}
      <footer className="bg-gray-900 text-white px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto text-center">
          <div className="space-y-8">
            <h2 className="text-3xl sm:text-4xl font-bold font-display">
              Ready to Transform Your Data Workflows?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Let your data work for you, not against you. Schedule a demo and see how Tablingos eliminates data struggles.
            </p>
            <button 
              onClick={openCalendly}
              type="button"
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-4 px-12 rounded-2xl text-lg transition-all duration-200 shadow-2xl hover:shadow-red-500/25 hover:scale-105"
            >
              call
            </button>
          </div>
          
          <div className="mt-16 pt-8 border-t border-gray-800">
            <div className="text-center">
              <div className="text-2xl font-bold font-display mb-4">Tablingos</div>
              <p className="text-gray-400">© 2024 Tablingos. Streamlined data onboarding platform.</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Calendly Widget */}
      {showCalendly && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl w-full max-w-4xl h-full max-h-[90vh] relative">
            <button 
              onClick={() => setShowCalendly(false)}
              className="absolute top-4 right-4 z-10 bg-gray-100 hover:bg-gray-200 rounded-full p-2 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div 
              className="calendly-inline-widget w-full h-full rounded-2xl" 
              data-url="https://calendly.com/ibrahim-ansari4161/new-meeting"
            ></div>
          </div>
        </div>
      )}
    </div>
  );
}