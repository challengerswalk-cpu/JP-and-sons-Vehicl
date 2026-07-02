import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, ShieldCheck, Clock, Banknote, CarFront } from 'lucide-react';

export default function Services() {
  return (
    <div className="bg-charcoal-950 font-sans text-white min-h-screen pt-24 font-light">
      {/* Hero */}
      <section className="py-20 px-6 lg:px-12 relative overflow-hidden bg-charcoal-900 border-b border-white/10">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-jpred-600/10 to-transparent pointer-events-none"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl lg:text-7xl font-heading font-bold mb-6 tracking-tight">Our Services.</h1>
            <p className="text-xl text-gray-400 leading-relaxed font-light">
              We provide three core services, each delivered with the same uncompromising standard of care, professionalism, and reliability.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Transport Section (Layout A: Content Left, Floating Image Right) */}
      <section className="py-32 px-6 lg:px-12 relative overflow-hidden" id="vehicle-transport">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-2xl bg-charcoal-900 border border-white/10 flex items-center justify-center">
                  <CarFront size={32} className="text-jpred-500" />
                </div>
                <div>
                  <h2 className="text-sm font-bold tracking-widest text-gray-500 uppercase">Service 01</h2>
                  <h3 className="text-3xl font-heading font-bold">Vehicle Transport</h3>
                </div>
              </div>
              
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                Whether you've purchased a classic car at auction, need a fleet moved between dealerships, or require discrete enclosed transport for a high-value vehicle, our logistics team executes flawlessly.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                <FeatureCard title="Enclosed Transport" desc="Maximum protection from weather and debris for high-value vehicles." />
                <FeatureCard title="Open Transport" desc="Cost-effective, highly efficient multi-vehicle movement." />
                <FeatureCard title="Dealer Transfers" desc="B2B logistics for dealerships and corporate fleets." />
                <FeatureCard title="Auction Collections" desc="Direct collection from Copart, BCA, and independent houses." />
              </div>

              <Link to="/contact" className="inline-flex h-12 items-center justify-center rounded border border-white/20 bg-transparent px-8 font-medium text-white transition-all hover:bg-white/5 hover:border-white/40">
                Request Transport Quote
              </Link>
            </div>

            <div className="lg:w-1/2 w-full h-[600px] relative">
              <div className="absolute inset-0 bg-charcoal-900 rounded-3xl translate-x-4 translate-y-4 border border-white/10"></div>
              <div className="absolute inset-0 w-full h-full bg-charcoal-800 rounded-3xl border border-white/5 flex items-center justify-center">
                 <span className="text-gray-600 font-medium">Image Placeholder</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Breakdown Recovery (Layout B: Cinematic Full Width) */}
      <section className="relative py-32 px-6 lg:px-12 flex items-center min-h-[80vh]" id="breakdown-recovery">
        <div className="absolute inset-0 bg-charcoal-800 flex items-center justify-center">
          <span className="text-charcoal-500 font-bold tracking-widest uppercase">Background Image</span>
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950 via-charcoal-950/90 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-2xl bg-jpred-600 flex items-center justify-center shadow-[0_0_30px_rgba(204,0,0,0.4)]">
                <Clock size={32} className="text-white" />
              </div>
              <div>
                <h2 className="text-sm font-bold tracking-widest text-jpred-500 uppercase">Service 02</h2>
                <h3 className="text-4xl font-heading font-bold">24/7 Breakdown Recovery</h3>
              </div>
            </div>

            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              When the worst happens, you need a team that acts fast. We provide rapid-response emergency recovery across the Home Counties and scheduled recoveries nationwide.
            </p>

            <ul className="space-y-4 mb-10">
              {['Rapid dispatch 24 hours a day, 365 days a year', 'Accident recovery and salvage', 'Jump starts and minor roadside assistance', 'Safe passenger transport to your destination'].map((item, i) => (
                <li key={i} className="flex items-start gap-4 text-gray-300">
                  <ShieldCheck size={24} className="text-jpred-500 flex-shrink-0 mt-1" />
                  <span className="text-lg">{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex gap-4">
              <a href="tel:08001234567" className="inline-flex h-14 items-center justify-center rounded bg-white text-black px-8 font-medium transition-all hover:bg-gray-200">
                Call for Immediate Rescue
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* We Buy Cars (Layout C: Grid Masonry style) */}
      <section className="py-32 px-6 lg:px-12" id="we-buy-cars">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 max-w-3xl mx-auto">
             <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-charcoal-900 border border-white/10 mb-6 mx-auto">
                <Banknote size={32} className="text-jpred-500" />
              </div>
              <h2 className="text-sm font-bold tracking-widest text-gray-500 uppercase mb-2">Service 03</h2>
              <h3 className="text-4xl lg:text-5xl font-heading font-bold mb-6">We Buy Cars. Simple.</h3>
              <p className="text-lg text-gray-400">
                Skip the algorithms and the automated haggling. We are real buyers offering fair market prices for vehicles of all types, conditions, and ages.
              </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="col-span-1 md:col-span-2 bg-charcoal-900 rounded-3xl p-10 border border-white/10 relative overflow-hidden group">
              <div className="relative z-10 max-w-md">
                <h4 className="text-2xl font-bold mb-4">The Fair Price Guarantee</h4>
                <p className="text-gray-400 mb-8">Unlike massive corporate car buying factories, we run a tight ship. Lower overheads mean we can often offer hundreds of pounds more for your vehicle than the leading automated competitors.</p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3"><CheckCircle2 size={18} className="text-jpred-500"/> Instant Bank Transfer</div>
                  <div className="flex items-center gap-3"><CheckCircle2 size={18} className="text-jpred-500"/> Finance Settled</div>
                  <div className="flex items-center gap-3"><CheckCircle2 size={18} className="text-jpred-500"/> Free Collection</div>
                </div>
              </div>
              <div className="absolute right-0 bottom-0 w-1/2 h-[120%] opacity-20 transition-transform duration-700 group-hover:scale-105 group-hover:opacity-40 bg-charcoal-700 rounded-tl-[100px] flex items-center justify-center">
                <span className="text-gray-400 font-medium text-xs">Handshake Image</span>
              </div>
            </div>

            <div className="col-span-1 flex flex-col gap-6">
              <div className="bg-charcoal-800 rounded-3xl p-8 border border-white/10 flex-grow flex flex-col justify-center">
                 <h4 className="text-xl font-bold mb-2">Non-Runners?</h4>
                 <p className="text-gray-400 text-sm mb-4">Because we own our own recovery fleet, buying non-running or damaged vehicles is no problem. We collect for free.</p>
              </div>
              <div className="bg-jpred-700 rounded-3xl p-8 flex flex-col justify-between group">
                <h4 className="text-2xl font-bold text-white mb-8">Get Your Free Valuation</h4>
                <Link to="/contact" className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center transition-transform group-hover:translate-x-2">
                  <ArrowRight size={24} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ title, desc }: { title: string, desc: string }) {
  return (
    <div className="p-6 rounded-2xl bg-charcoal-900 border border-white/10 border-l-2 border-l-jpred-600/50 hover:border-l-jpred-500 transition-colors">
      <h4 className="text-lg font-bold mb-2">{title}</h4>
      <p className="text-sm text-gray-400 leading-relaxed">{desc}</p>
    </div>
  );
}
