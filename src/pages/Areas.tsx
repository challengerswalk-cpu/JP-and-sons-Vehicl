import React from 'react';
import { motion } from 'motion/react';
import { MapPin, ShieldCheck, Clock, Map as MapIcon, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/seo/SEO';
import { globalLocalBusinessSchema } from '../utils/seo-schemas';

export default function Areas() {
  const localAreas = [
    "High Wycombe", "Beaconsfield", "Marlow", "Maidenhead", 
    "Slough", "Reading", "Oxford", "Aylesbury", 
    "Watford", "Hemel Hempstead", "Uxbridge", "Milton Keynes", 
    "Luton", "London"
  ];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.jpsonsvehicletransport.co.uk/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Areas We Cover",
        "item": "https://www.jpsonsvehicletransport.co.uk/areas"
      }
    ]
  };

  return (
    <div className="bg-charcoal-950 font-sans text-white min-h-screen pt-24 font-light">
      <SEO 
        title="Areas We Cover | High Wycombe, Buckinghamshire & UK | JP & Sons"
        description="Local vehicle transport and recovery in High Wycombe, Marlow, Beaconsfield, Maidenhead, Slough, Reading, Oxford, London, plus nationwide coverage."
        canonicalUrl="https://www.jpsonsvehicletransport.co.uk/areas"
        schema={[globalLocalBusinessSchema, breadcrumbSchema]}
      />
      
      <section className="py-20 px-6 lg:px-12 relative overflow-hidden bg-charcoal-900 border-b border-white/10">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-jpred-600/10 to-transparent pointer-events-none"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm font-medium mb-6">
              <MapPin size={16} className="text-jpred-500" />
              Service Coverage
            </div>
            <h1 className="text-5xl lg:text-7xl font-heading font-bold mb-6 tracking-tight">Areas We Cover.</h1>
            <p className="text-xl text-gray-400 leading-relaxed font-light">
              Based in Buckinghamshire, providing rapid local response times to the Home Counties and scheduled nationwide transport across the UK.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3">
            <h2 className="text-3xl font-heading font-bold mb-6">Local Presence.<br/>Fast Response.</h2>
            <p className="text-gray-400 leading-relaxed mb-8">
              We operate a dedicated fleet across our core coverage zone. This allows us to provide exceptional response times for emergency breakdown recovery, and highly competitive pricing for local vehicle transport and vehicle purchases.
            </p>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-charcoal-900 flex items-center justify-center flex-shrink-0 border border-white/5">
                  <Clock className="text-jpred-500" size={20} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Rapid Dispatch</h4>
                  <p className="text-sm text-gray-400">Aiming for 45-60 minute recovery times in core local areas.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-charcoal-900 flex items-center justify-center flex-shrink-0 border border-white/5">
                  <ShieldCheck className="text-jpred-500" size={20} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Local Knowledge</h4>
                  <p className="text-sm text-gray-400">Deep understanding of local road networks and traffic patterns.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-2/3">
            <div className="bg-charcoal-900 rounded-3xl p-8 lg:p-12 border border-white/10 focus-ring">
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <MapIcon className="text-jpred-500" /> Primary Service Areas
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {localAreas.map(area => (
                  <div key={area} className="group flex items-center gap-3 p-3 rounded-lg hover:bg-charcoal-800 transition-colors border border-transparent hover:border-white/10">
                    <div className="w-2 h-2 rounded-full bg-gray-600 group-hover:bg-jpred-500 transition-colors"></div>
                    <span className="font-medium text-gray-300 group-hover:text-white transition-colors">{area}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 lg:px-12 bg-charcoal-950 border-t border-white/10 relative overflow-hidden">
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-jpred-600/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto relative z-10 text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">Need vehicle transport further afield?</h2>
          <p className="text-xl text-gray-400 leading-relaxed mb-10 font-light">
            While we pride ourselves on our local response, our logistics network spans the entirety of the United Kingdom. We run weekly scheduled multi-vehicle transporters to the North, Scotland, and Wales.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/nationwide" className="inline-flex h-14 items-center justify-center rounded bg-charcoal-900 border border-white/10 px-8 font-medium text-white transition-all hover:bg-charcoal-800 hover:border-white/30">
              Discover Nationwide Transport
            </Link>
            <Link to="/contact" className="inline-flex h-14 items-center justify-center rounded bg-jpred-600 px-8 font-medium text-white transition-all hover:bg-jpred-500 gap-2">
              Request a Route Quote <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
