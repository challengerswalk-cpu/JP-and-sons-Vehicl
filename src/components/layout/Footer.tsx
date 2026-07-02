import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal-950 pt-24 pb-12 px-6 lg:px-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-20">
          <div className="lg:col-span-2">
            <Link to="/" className="flex flex-col group mb-6">
              <h1 className="text-2xl font-bold tracking-tighter leading-none text-white">JP <span className="text-jpred-500">&</span> SONS</h1>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-sm">
              Complete vehicle solutions. We provide premium vehicle transport, fast breakdown recovery, and hassle-free car buying services across the UK.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-jpred-500 hover:border-jpred-500 transition-colors">
                <Facebook size={14} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-jpred-500 hover:border-jpred-500 transition-colors">
                <Instagram size={14} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-jpred-500 hover:border-jpred-500 transition-colors">
                <Twitter size={14} />
              </a>
            </div>
            
            <div className="mt-12 flex gap-2 items-center">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-gray-300">Active Now: 0800 123 4567</span>
            </div>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-widest text-gray-500 mb-6 font-semibold">Services</h4>
            <ul className="flex flex-col gap-4">
              <li><Link to="/services" className="text-xs font-medium text-gray-300 hover:text-jpred-500 transition-colors">Vehicle Transport</Link></li>
              <li><Link to="/services" className="text-xs font-medium text-gray-300 hover:text-jpred-500 transition-colors">Breakdown Recovery</Link></li>
              <li><Link to="/services" className="text-xs font-medium text-gray-300 hover:text-jpred-500 transition-colors">We Buy Cars</Link></li>
              <li><Link to="/nationwide-transport" className="text-xs font-medium text-gray-300 hover:text-jpred-500 transition-colors">Nationwide Delivery</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[10px] uppercase tracking-widest text-gray-500 mb-6 font-semibold">Company</h4>
            <ul className="flex flex-col gap-4">
              <li><Link to="/" className="text-xs font-medium text-gray-300 hover:text-jpred-500 transition-colors">About Us</Link></li>
              <li><Link to="/areas-we-cover" className="text-xs font-medium text-gray-300 hover:text-jpred-500 transition-colors">Areas We Cover</Link></li>
              <li><Link to="/contact" className="text-xs font-medium text-gray-300 hover:text-jpred-500 transition-colors">Contact</Link></li>
              <li><Link to="#" className="text-xs font-medium text-gray-300 hover:text-jpred-500 transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-widest text-gray-500 mb-6 font-semibold">Contact Us</h4>
            <ul className="flex flex-col gap-4">
              <li className="text-gray-300 text-xs font-medium">
                0800 123 4567<br />
                <span className="text-[10px] tracking-widest uppercase text-gray-500 mt-1 block">24/7 Emergency</span>
              </li>
              <li className="text-gray-300 text-xs font-medium mt-2">
                info@jpsonsvehicletransport.co.uk
              </li>
              <li className="text-gray-300 text-xs font-medium mt-2 leading-relaxed">
                High Wycombe,<br />
                Buckinghamshire, UK
              </li>
            </ul>
            <Link to="/contact" className="inline-flex items-center gap-2 text-jpred-500 hover:text-jpred-400 text-xs tracking-widest uppercase font-bold mt-6 group">
              Get in touch
              <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-[10px] text-gray-600 uppercase tracking-widest">
            &copy; {currentYear} JP & SONS VEHICLE SOLUTIONS. ALL RIGHTS RESERVED.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 text-[10px] text-gray-500 uppercase tracking-widest font-semibold">
            <span>High Wycombe</span><span>&bull;</span>
            <span>Beaconsfield</span><span>&bull;</span>
            <span>Marlow</span><span>&bull;</span>
            <span>Maidenhead</span><span>&bull;</span>
            <span>London</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
