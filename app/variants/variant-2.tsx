"use client";

import { useState } from 'react';
import { Oswald, Inter } from 'next/font/google';
import Script from 'next/script';

const oswald = Oswald({ subsets: ['latin'] });
const inter = Inter({ subsets: ['latin'] });

export default function TablingosLanding() {
  const [showCalendly, setShowCalendly] = useState(false);

  return (
    <div className={`min-h-screen bg-white ${inter.className}`}>
      <Script src="https://assets.calendly.com/assets/external/widget.js" />
      
      {/* Navigation */}
      <nav className="relative z-50 px-4 md:px-8 py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className={`text-2xl font-bold text-black ${oswald.className}`}>
            TABLINGOS
          </div>
          <button
            type="button"
            onClick={() => setShowCalendly(true)}
            className="bg-[#ff2244] text-white px-6 py-3 font-semibold hover:bg-[#e01e3c] transition-colors"
          >
            call
          </button>
        </div>
      </nav>

      {/* Hero Section with Diagonal */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#f8f8f8] via-white to-[#f8f8f8]" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#0066ff] opacity-5 transform skew-x-12 translate-x-1/4" />
        
        <div className="relative max-w-7xl mx-auto px-4 md:px-8 py-20 md:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className={`text-4xl md:text-6xl lg:text-7xl font-bold text-black leading-tight ${oswald.className}`}>
                TRANSFORM<br />
                <span className="text-[#0066ff]">DATA CHAOS</span><br />
                INTO SEAMLESS<br />
                WORKFLOWS
              </h1>
              
              <p className="text-lg md:text-xl text-gray-700 max-w-xl leading-relaxed">
                Cut out months of importer development with our no-code data transformation platform. From billing data to EEG signals—validate, transform, and onboard any data type effortlessly.
              </p>
              
              <button
                type="button"
                onClick={() => setShowCalendly(true)}
                className="bg-[#ff2244] text-white px-8 py-4 text-lg font-bold hover:bg-[#e01e3c] transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                call
              </button>
            </div>
            
            <div className="relative">
              <div className="bg-white p-6 shadow-2xl border border-gray-100 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-[#ff2244] rounded-full" />
                    <div className="w-3 h-3 bg-[#0066ff] rounded-full" />
                    <div className="w-3 h-3 bg-gray-300 rounded-full" />
                  </div>
                  <div className="space-y-2">
                    <div className="h-4 bg-gray-200 rounded w-3/4" />
                    <div className="h-4 bg-[#0066ff] rounded w-1/2" />
                    <div className="h-4 bg-gray-200 rounded w-5/6" />
                  </div>
                  <div className="flex items-center justify-center py-8">
                    <div className="text-6xl text-[#0066ff] font-bold">→</div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-4 bg-[#ff2244] rounded w-4/5" />
                    <div className="h-4 bg-green-400 rounded w-3/5" />
                    <div className="h-4 bg-[#ff2244] rounded w-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section with Diagonal Break */}
      <section className="relative bg-[#f8f8f8] overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-24 bg-white transform -skew-y-1 origin-top-left" />
        
        <div className="relative max-w-7xl mx-auto px-4 md:px-8 py-20">
          <div className="text-center mb-16">
            <h2 className={`text-3xl md:text-5xl font-bold text-black mb-6 ${oswald.className}`}>
              LET YOUR DATA WORK FOR YOU,<br />
              <span className="text-[#0066ff]">NOT AGAINST YOU</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 shadow-lg border-l-4 border-[#ff2244] hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-[#ff2244] rounded-lg mb-6 flex items-center justify-center">
                <div className="text-white font-bold text-xl">⚡</div>
              </div>
              <h3 className={`text-xl font-bold text-black mb-4 ${oswald.className}`}>
                NO-CODE TRANSFORMATION
              </h3>
              <p className="text-gray-700">
                Eliminate custom development with our intuitive no-code/low-code data transformation platform.
              </p>
              <button
                type="button"
                onClick={() => setShowCalendly(true)}
                className="mt-6 bg-[#ff2244] text-white px-6 py-2 font-semibold hover:bg-[#e01e3c] transition-colors"
              >
                call
              </button>
            </div>
            
            <div className="bg-white p-8 shadow-lg border-l-4 border-[#0066ff] hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-[#0066ff] rounded-lg mb-6 flex items-center justify-center">
                <div className="text-white font-bold text-xl">🔄</div>
              </div>
              <h3 className={`text-xl font-bold text-black mb-4 ${oswald.className}`}>
                AUTOMATED ETL PIPELINES
              </h3>
              <p className="text-gray-700">
                Handle everything from billing data to sensor data with fully automated ETL pipelines.
              </p>
              <button
                type="button"
                onClick={() => setShowCalendly(true)}
                className="mt-6 bg-[#ff2244] text-white px-6 py-2 font-semibold hover:bg-[#e01e3c] transition-colors"
              >
                call
              </button>
            </div>
            
            <div className="bg-white p-8 shadow-lg border-l-4 border-green-500 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-green-500 rounded-lg mb-6 flex items-center justify-center">
                <div className="text-white font-bold text-xl">✓</div>
              </div>
              <h3 className={`text-xl font-bold text-black mb-4 ${oswald.className}`}>
                INTUITIVE VALIDATION
              </h3>
              <p className="text-gray-700">
                Define data structure and validation rules through an intuitive UI that anyone can use.
              </p>
              <button
                type="button"
                onClick={() => setShowCalendly(true)}
                className="mt-6 bg-[#ff2244] text-white px-6 py-2 font-semibold hover:bg-[#e01e3c] transition-colors"
              >
                call
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Data Flow Visualization */}
      <section className="relative bg-white py-20 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-24 bg-[#f8f8f8] transform skew-y-1 origin-top-left" />
        
        <div className="relative max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-3xl md:text-5xl font-bold text-black mb-6 ${oswald.className}`}>
              FROM CHAOS TO <span className="text-[#0066ff]">CLARITY</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="text-center">
              <div className="bg-[#ff2244] text-white p-8 rounded-lg mb-4 transform -rotate-3">
                <div className={`text-2xl font-bold mb-4 ${oswald.className}`}>MESSY DATA</div>
                <div className="space-y-2">
                  <div className="h-2 bg-red-300 rounded w-3/4 mx-auto" />
                  <div className="h-2 bg-red-300 rounded w-1/2 mx-auto" />
                  <div className="h-2 bg-red-300 rounded w-5/6 mx-auto" />
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="text-6xl text-[#0066ff] font-bold mb-4">→</div>
              <div className={`text-xl font-bold text-black ${oswald.className}`}>
                TABLINGOS MAGIC
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-green-500 text-white p-8 rounded-lg mb-4 transform rotate-3">
                <div className={`text-2xl font-bold mb-4 ${oswald.className}`}>CLEAN DATA</div>
                <div className="space-y-2">
                  <div className="h-2 bg-green-300 rounded w-full mx-auto" />
                  <div className="h-2 bg-green-300 rounded w-full mx-auto" />
                  <div className="h-2 bg-green-300 rounded w-full mx-auto" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center space-y-8">
            <div className={`text-3xl md:text-4xl font-bold ${oswald.className}`}>
              READY TO TRANSFORM YOUR DATA?
            </div>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Stop fighting with data imports. Start building what matters.
            </p>
            <button
              type="button"
              onClick={() => setShowCalendly(true)}
              className="bg-[#ff2244] text-white px-12 py-4 text-xl font-bold hover:bg-[#e01e3c] transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              call
            </button>
          </div>
          
          <div className="mt-16 pt-8 border-t border-gray-800 text-center">
            <div className={`text-2xl font-bold mb-4 ${oswald.className}`}>
              TABLINGOS
            </div>
            <p className="text-gray-400">
              © 2024 Tablingos. Streamlined data onboarding platform.
            </p>
          </div>
        </div>
      </footer>

      {/* Calendly Modal */}
      {showCalendly && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg w-full max-w-4xl h-[80vh] relative">
            <button
              onClick={() => setShowCalendly(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl font-bold z-10"
            >
              ×
            </button>
            <div 
              className="calendly-inline-widget w-full h-full rounded-lg"
              data-url="https://calendly.com/ibrahim-ansari4161/new-meeting"
            />
          </div>
        </div>
      )}
    </div>
  );
}
