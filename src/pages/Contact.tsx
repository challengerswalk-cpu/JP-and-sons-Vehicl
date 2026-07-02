import React from 'react';
import { Phone, Mail, MapPin, MessageSquare, Send } from 'lucide-react';

export default function Contact() {
  return (
    <div className="bg-charcoal-950 font-sans text-white min-h-screen pt-24 font-light overflow-x-hidden">
      
      <section className="py-20 px-6 lg:px-12 relative overflow-hidden bg-charcoal-900 border-b border-white/10">
        <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-jpred-600/10 to-transparent pointer-events-none"></div>
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <h1 className="text-5xl lg:text-7xl font-heading font-bold mb-6 tracking-tight">Contact Us.</h1>
          <p className="text-xl text-gray-400 leading-relaxed font-light max-w-2xl mx-auto">
            Get an instant quote or immediate emergency assistance. Our team is ready to respond.
          </p>
        </div>
      </section>

      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
          
          {/* Contact Details */}
          <div className="lg:w-1/3">
            <h2 className="text-2xl font-bold mb-8">Direct Lines</h2>
            
            <div className="space-y-6 mb-12">
              <a href="tel:08001234567" className="group flex items-start gap-4 p-6 rounded-2xl bg-charcoal-900 border border-white/10 hover:border-jpred-500/50 transition-colors">
                <div className="w-12 h-12 rounded-full bg-charcoal-800 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Phone className="text-jpred-500" size={20} />
                </div>
                <div>
                  <h3 className="font-bold mb-1 text-lg group-hover:text-jpred-500 transition-colors">0800 123 4567</h3>
                  <p className="text-sm text-gray-400">24/7 Emergency & General Enquiries</p>
                </div>
              </a>

              <a href="https://wa.me/447000000000" target="_blank" rel="noreferrer" className="group flex items-start gap-4 p-6 rounded-2xl bg-charcoal-900 border border-white/10 hover:border-[#25D366]/50 transition-colors">
                <div className="w-12 h-12 rounded-full bg-charcoal-800 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <MessageSquare className="text-[#25D366]" size={20} />
                </div>
                <div>
                  <h3 className="font-bold mb-1 text-lg group-hover:text-[#25D366] transition-colors">WhatsApp Us</h3>
                  <p className="text-sm text-gray-400">Send images and details for fast quotes</p>
                </div>
              </a>

              <a href="mailto:info@jpsonsvehicletransport.co.uk" className="group flex items-start gap-4 p-6 rounded-2xl bg-charcoal-900 border border-white/10 hover:border-white/20 transition-colors">
                <div className="w-12 h-12 rounded-full bg-charcoal-800 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Mail className="text-gray-300" size={20} />
                </div>
                <div>
                  <h3 className="font-bold mb-1 text-base group-hover:text-white transition-colors">info@jpsonsvehicletransport.co.uk</h3>
                  <p className="text-sm text-gray-400">For business and account enquiries</p>
                </div>
              </a>
            </div>

            <h2 className="text-2xl font-bold mb-6">Operations Base</h2>
            <div className="flex gap-4 text-gray-400">
               <MapPin className="text-jpred-500 flex-shrink-0" size={24} />
               <p className="leading-relaxed">
                 JP & Sons Vehicle Transport<br/>
                 High Wycombe<br/>
                 Buckinghamshire<br/>
                 United Kingdom
               </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:w-2/3">
            <div className="bg-charcoal-900 rounded-3xl p-8 lg:p-12 border border-white/10">
              <h2 className="text-2xl font-bold mb-2">Request a Quote</h2>
              <p className="text-gray-400 mb-8">Fill out the details below and we'll get back to you within 30 minutes during working hours.</p>
              
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm text-gray-400 font-medium">Full Name</label>
                    <input type="text" className="w-full bg-charcoal-950 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-jpred-500 transition-colors" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-gray-400 font-medium">Phone Number</label>
                    <input type="tel" className="w-full bg-charcoal-950 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-jpred-500 transition-colors" placeholder="07123 456789" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm text-gray-400 font-medium">Service Required</label>
                  <select className="w-full bg-charcoal-950 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-jpred-500 transition-colors appearance-none">
                    <option value="transport">Vehicle Transport</option>
                    <option value="recovery">Breakdown Recovery</option>
                    <option value="sell">I want to sell my car</option>
                    <option value="other">Other Enquiry</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm text-gray-400 font-medium">Collection Postcode</label>
                    <input type="text" className="w-full bg-charcoal-950 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-jpred-500 transition-colors" placeholder="e.g. HP11 1AA" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-gray-400 font-medium">Delivery Postcode (if applicable)</label>
                    <input type="text" className="w-full bg-charcoal-950 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-jpred-500 transition-colors" placeholder="e.g. M1 1AA" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm text-gray-400 font-medium">Vehicle Registration / Details</label>
                  <textarea rows={4} className="w-full bg-charcoal-950 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-jpred-500 transition-colors" placeholder="Please provide vehicle make, model, and any specific requirements or issues (e.g. non-runner)."></textarea>
                </div>

                <button type="submit" className="w-full h-14 bg-jpred-600 hover:bg-jpred-500 text-white rounded-lg font-medium transition-colors flex items-center justify-center gap-2">
                  Send Request <Send size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
