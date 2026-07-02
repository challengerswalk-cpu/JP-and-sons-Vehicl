import React from 'react';
import { motion } from 'motion/react';
import { Map, Zap, CheckCircle2, Truck, Calendar, ShieldCheck, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/seo/SEO';
import { globalLocalBusinessSchema } from '../utils/seo-schemas';

export default function Nationwide() {
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
        "name": "Nationwide Transport",
        "item": "https://www.jpsonsvehicletransport.co.uk/nationwide"
      }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Nationwide Vehicle Transport",
    "provider": {
      "@type": "LocalBusiness",
      "name": "JP & Sons Vehicle Transport"
    },
    "areaServed": { "@type": "Country", "name": "United Kingdom" }
  };

  return (
    <div className="bg-charcoal-950 font-sans text-white min-h-screen pt-24 font-light">
      <SEO 
        title="Nationwide Vehicle Transport | UK Car Delivery | JP & Sons"
        description="Professional nationwide vehicle transport, car collection service, and long distance door-to-door vehicle delivery across the UK."
        canonicalUrl="https://www.jpsonsvehicletransport.co.uk/nationwide"
        schema={[globalLocalBusinessSchema, breadcrumbSchema, serviceSchema]}
      />
      
      {/* Hero */}
      <section className="py-20 px-6 lg:px-12 relative overflow-hidden bg-charcoal-900 border-b border-white/10">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-jpred-600/10 to-transparent pointer-events-none"></div>
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-center gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="md:w-3/5"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm font-medium mb-6">
              <Map size={16} className="text-jpred-500" />
              UK Logistics
            </div>
            <h1 className="text-5xl lg:text-7xl font-heading font-bold mb-6 tracking-tight">Nationwide<br/>Vehicle Transport.</h1>
            <p className="text-xl text-gray-400 leading-relaxed font-light mb-8">
              Professional car transport across the UK. Secure, scheduled, and fully insured vehicle collection and delivery services spanning England, Scotland, and Wales.
            </p>
            <Link to="/contact" className="inline-flex h-14 items-center justify-center rounded bg-white text-black px-8 font-medium transition-all hover:bg-gray-200">
              Get an Instant Quote
            </Link>
          </motion.div>
          <div className="md:w-2/5 aspect-square relative rounded-full overflow-hidden border-8 border-charcoal-800 shadow-2xl bg-charcoal-700 flex items-center justify-center">
              <span className="text-gray-400 font-medium text-sm">Car Delivery Image</span>
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Grid Features */}
      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-8 rounded-2xl bg-charcoal-900 border border-white/10">
              <Truck size={32} className="text-jpred-500 mb-6" />
              <h3 className="text-xl font-bold mb-3">Multi-Vehicle</h3>
              <p className="text-gray-400 text-sm">Efficient logistics for dealership networks requiring regular nationwide bulk deliveries.</p>
            </div>
            <div className="p-8 rounded-2xl bg-charcoal-900 border border-white/10">
              <ShieldCheck size={32} className="text-jpred-500 mb-6" />
              <h3 className="text-xl font-bold mb-3">Fully Insured</h3>
              <p className="text-gray-400 text-sm">Comprehensive goods in transit insurance covering your vehicle for the entire journey.</p>
            </div>
            <div className="p-8 rounded-2xl bg-charcoal-900 border border-white/10">
              <Calendar size={32} className="text-jpred-500 mb-6" />
              <h3 className="text-xl font-bold mb-3">Scheduled Runs</h3>
              <p className="text-gray-400 text-sm">Weekly runs to major UK hubs, reducing costs through shared long-distance transport.</p>
            </div>
            <div className="p-8 rounded-2xl bg-charcoal-900 border border-white/10">
              <Zap size={32} className="text-jpred-500 mb-6" />
              <h3 className="text-xl font-bold mb-3">Fast Turnaround</h3>
              <p className="text-gray-400 text-sm">Direct, dedicated load options available when time is the most critical factor.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Vehicles */}
      <section className="py-24 px-6 lg:px-12 bg-charcoal-950 border-y border-white/10">
         <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
               <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-6">Expertise across all vehicle categories.</h2>
               <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                  Our fleet is equipped to handle long-distance car transport for almost any vehicle profile. We utilize the correct loading angles, strapping techniques, and weight distributions.
               </p>
               <div className="space-y-4">
                  {['Dealership Trade Vehicles & Fleet Management', 'Classic Cars, Restorations & High-Value Exotics', 'Auction Collections (Copart, BCA, Aston Barclay)', 'Light Commercial Vehicles & Vans', 'Non-runners and Project Vehicles'].map((item, i) => (
                    <div key={i} className="flex gap-3">
                      <CheckCircle2 className="text-jpred-500 flex-shrink-0" size={24} />
                      <span className="text-lg text-gray-300">{item}</span>
                    </div>
                  ))}
               </div>
               <div className="mt-10">
                 <Link to="/contact" className="text-jpred-500 font-medium hover:text-white transition-colors">Discuss your specific requirements &rarr;</Link>
               </div>
            </div>
            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
              <div className="rounded-2xl w-full h-[250px] bg-charcoal-700 flex items-center justify-center opacity-80 border border-white/5">
                 <span className="text-gray-400 font-medium text-xs text-center px-4">Classic Car Image</span>
              </div>
              <div className="rounded-2xl w-full h-[250px] bg-charcoal-800 mt-12 shadow-2xl flex items-center justify-center border border-white/5">
                 <span className="text-gray-400 font-medium text-xs text-center px-4">Dealership Image</span>
              </div>
            </div>
         </div>
      </section>

      {/* Structured SEO specific content */}
      <section className="py-24 px-6 lg:px-12 bg-charcoal-900">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-invert max-w-none">
            <h2 className="text-3xl font-heading font-bold mb-8">The Professional Vehicle Collection Service</h2>
            <p className="text-gray-400 mb-6 text-lg">
              Organizing car transport in the UK shouldn't involve endless calls and unpredictable contractors. Whether scheduling a single car delivery service from a private seller or coordinating nationwide vehicle transport for a logistics hub, we offer a transparent, streamlined operation.
            </p>
            <p className="text-gray-400 mb-12 text-lg">
              Our door-to-door vehicle collection service handles all documentation. We provide condition reports upon collection, communicating with all parties involved, ensuring that the person receiving the vehicle experiences a seamless handover.
            </p>
            
            <h3 className="text-2xl font-bold mb-6 pt-8 border-t border-white/10">Nationwide Transport FAQs</h3>
            <div className="space-y-4">
              <details className="group border border-white/10 rounded-xl p-6 bg-charcoal-950 open:bg-charcoal-800 transition-colors">
                <summary className="font-bold flex items-center justify-between cursor-pointer list-none">
                  How much does long-distance car transport cost?
                  <Plus className="group-open:rotate-45 transition-transform text-jpred-500" />
                </summary>
                <p className="mt-4 text-gray-400">Pricing depends on mileage, the size/weight of the vehicle, and timeline flexibility. We provide absolute quoted prices with no hidden fees. Co-loading on scheduled runs often reduces the cost significantly.</p>
              </details>
              
              <details className="group border border-white/10 rounded-xl p-6 bg-charcoal-950 open:bg-charcoal-800 transition-colors">
                <summary className="font-bold flex items-center justify-between cursor-pointer list-none">
                  How long does a nationwide delivery take?
                  <Plus className="group-open:rotate-45 transition-transform text-jpred-500" />
                </summary>
                <p className="mt-4 text-gray-400">Dedicated transport can be arranged for same-day or next-day delivery. Scheduled shared transport runs typically operate on a 3-7 day turnaround timeframe across the United Kingdom.</p>
              </details>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
