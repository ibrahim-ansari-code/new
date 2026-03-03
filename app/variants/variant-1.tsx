"use client";

import { useState, useEffect, useCallback } from 'react';
import { Bebas_Neue, JetBrains_Mono } from 'next/font/google';
import Script from 'next/script';

const bebasNeue = Bebas_Neue({ subsets: ['latin'], weight: '400' });
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'] });

export default function TablingosLanding() {
  const [showCalendly, setShowCalendly] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll for sticky CTA
  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 800);
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [handleScroll]);

  const openCalendly = () => {
    setShowCalendly(true);
  };

  return (
    <>
      <Script src="https://assets.calendly.com/assets/external/widget.js" />
      
      <div className="min-h-screen bg-[#0a0a0a] text-white relative overflow-hidden">
        {/* Grain overlay */}
        <div className="fixed inset-0 opacity-[0.03] pointer-events-none" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }} />

        {/* Navigation */}
        <nav className="relative z-50 px-4 md:px-8 py-6">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className={`${bebasNeue.className} text-2xl md:text-3xl tracking-wider text-[#00ff88]`}>
              TABLINGOS
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative px-4 md:px-8 pt-12 md:pt-20 pb-20 md:pb-32">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="space-y-8">
                <h1 className={`${bebasNeue.className} text-5xl md:text-7xl lg:text-8xl leading-[0.9] tracking-tight`}>
                  TRANSFORM DATA
                  <span className="block text-[#00ff88]">CHAOS INTO</span>
                  <span className="block">SEAMLESS</span>
                  <span className="block text-[#ff3333]">WORKFLOWS</span>
                </h1>
                
                <p className={`${jetbrainsMono.className} text-lg md:text-xl text-[#888888] leading-relaxed max-w-2xl`}>
                  Cut out months of importer development with our no-code data transformation platform. From billing data to EEG signals—validate, transform, and onboard any data type effortlessly.
                </p>

                <div className="pt-4">
                  <button
                    onClick={openCalendly}
                    className="group relative bg-[#ff3333] hover:bg-[#ff4444] text-white px-8 md:px-12 py-4 md:py-5 text-lg md:text-xl font-bold tracking-wider transition-all duration-300 transform hover:scale-105 animate-pulse hover:animate-none"
                    style={{
                      clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 100%, 20px 100%)'
                    }}
                  >
                    <span className={bebasNeue.className}>CALL</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                  </button>
                </div>
              </div>

              {/* Floating Code Preview */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#ff3333]/20 via-transparent to-[#00ff88]/20 blur-3xl" />
                
                <div className="relative bg-[#1a1a1a] border border-[#333] rounded-lg overflow-hidden transform rotate-3 hover:rotate-0 transition-transform duration-500">
                  <div className="bg-[#111] px-4 py-2 border-b border-[#333] flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#ff3333]" />
                    <div className="w-3 h-3 rounded-full bg-[#ffaa00]" />
                    <div className="w-3 h-3 rounded-full bg-[#00ff88]" />
                    <span className={`${jetbrainsMono.className} text-sm text-[#888] ml-2`}>data_transform.py</span>
                  </div>
                  
                  <div className={`${jetbrainsMono.className} p-6 text-sm leading-relaxed`}>
                    <div className="space-y-2">
                      <div><span className="text-[#ff3333]">def</span> <span className="text-[#00ff88]">transform_data</span><span className="text-white">(raw_input):</span></div>
                      <div className="pl-4 text-[#888]"># Validate structure</div>
                      <div className="pl-4"><span className="text-[#ff3333]">if</span> <span className="text-white">validate_schema(raw_input):</span></div>
                      <div className="pl-8"><span className="text-[#ff3333]">return</span> <span className="text-[#00ff88]">clean_transform</span><span className="text-white">(raw_input)</span></div>
                      <div className="pl-4"><span className="text-[#ff3333]">else</span><span className="text-white">:</span></div>
                      <div className="pl-8"><span className="text-[#ff3333]">raise</span> <span className="text-[#ffaa00]">ValidationError</span></div>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-8 -right-8 bg-[#1a1a1a] border border-[#333] rounded-lg p-4 transform -rotate-6 hover:rotate-0 transition-transform duration-500">
                  <div className={`${jetbrainsMono.className} text-xs space-y-1`}>
                    <div className="text-[#00ff88]">✓ 1.2M records processed</div>
                    <div className="text-[#00ff88]">✓ 0 validation errors</div>
                    <div className="text-[#888]">⚡ 2.3s execution time</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="relative px-4 md:px-8 py-20 md:py-32">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 md:gap-12">
              <div className="bg-[#1a1a1a] border border-[#333] p-8 relative group hover:border-[#ff3333] transition-colors duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-[#ff3333]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative">
                  <div className={`${bebasNeue.className} text-2xl md:text-3xl text-[#00ff88] mb-4`}>NO-CODE TRANSFORMATION</div>
                  <p className={`${jetbrainsMono.className} text-[#888] leading-relaxed`}>
                    Eliminate months of custom development. Define data structure and validation rules through our intuitive interface.
                  </p>
                </div>
              </div>

              <div className="bg-[#1a1a1a] border border-[#333] p-8 relative group hover:border-[#ff3333] transition-colors duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-[#ff3333]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative">
                  <div className={`${bebasNeue.className} text-2xl md:text-3xl text-[#00ff88] mb-4`}>AUTOMATED ETL PIPELINES</div>
                  <p className={`${jetbrainsMono.className} text-[#888] leading-relaxed`}>
                    Handle everything from billing data to sensor signals. Our pipelines adapt to any data type automatically.
                  </p>
                </div>
              </div>

              <div className="bg-[#1a1a1a] border border-[#333] p-8 relative group hover:border-[#ff3333] transition-colors duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-[#ff3333]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative">
                  <div className={`${bebasNeue.className} text-2xl md:text-3xl text-[#00ff88] mb-4`}>INTELLIGENT VALIDATION</div>
                  <p className={`${jetbrainsMono.className} text-[#888] leading-relaxed`}>
                    Catch data issues before they become problems. Smart validation rules ensure clean, reliable data flows.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Data Flow Visualization */}
        <section className="relative px-4 md:px-8 py-20 md:py-32">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className={`${bebasNeue.className} text-4xl md:text-6xl mb-16`}>
              LET YOUR DATA <span className="text-[#ff3333]">WORK FOR YOU</span>,
              <br />NOT AGAINST YOU
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="bg-[#1a1a1a] border border-[#333] p-6 rounded-lg">
                <div className={`${bebasNeue.className} text-xl text-[#ff3333] mb-2`}>RAW DATA</div>
                <div className={`${jetbrainsMono.className} text-sm text-[#888] space-y-1`}>
                  <div>messy_file.csv</div>
                  <div>incomplete_records</div>
                  <div>mixed_formats</div>
                  <div>validation_errors</div>
                </div>
              </div>

              <div className="flex justify-center">
                <div className="text-[#00ff88] text-4xl animate-pulse">→</div>
              </div>

              <div className="bg-[#1a1a1a] border border-[#00ff88] p-6 rounded-lg">
                <div className={`${bebasNeue.className} text-xl text-[#00ff88] mb-2`}>CLEAN OUTPUT</div>
                <div className={`${jetbrainsMono.className} text-sm text-[#888] space-y-1`}>
                  <div>structured_data.json</div>
                  <div>validated_records ✓</div>
                  <div>consistent_format ✓</div>
                  <div>ready_for_analysis ✓</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="relative px-4 md:px-8 py-12 border-t border-[#333]">
          <div className="max-w-7xl mx-auto text-center">
            <div className={`${bebasNeue.className} text-3xl md:text-4xl text-[#00ff88] mb-4`}>
              TABLINGOS
            </div>
            <p className={`${jetbrainsMono.className} text-[#888] text-sm`}>
              Transform Data Chaos Into Seamless Workflows
            </p>
          </div>
        </footer>

        {/* Sticky Floating CTA */}
        {scrolled && (
          <div className="fixed bottom-8 right-8 z-50">
            <button
              onClick={openCalendly}
              className="bg-[#ff3333] hover:bg-[#ff4444] text-white p-4 rounded-full shadow-2xl transform hover:scale-110 transition-all duration-300 animate-pulse hover:animate-none"
            >
              <span className={`${bebasNeue.className} text-lg px-2`}>CALL</span>
            </button>
          </div>
        )}

        {/* Calendly Modal */}
        {showCalendly && (
          <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg w-full max-w-4xl h-[80vh] relative">
              <button
                onClick={() => setShowCalendly(false)}
                className="absolute top-4 right-4 z-10 bg-[#ff3333] text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-[#ff4444] transition-colors"
              >
                ×
              </button>
              <div 
                className="calendly-inline-widget" 
                data-url="https://calendly.com/ibrahim-ansari4161/new-meeting"
                style={{ minWidth: '320px', height: '100%' }}
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
}