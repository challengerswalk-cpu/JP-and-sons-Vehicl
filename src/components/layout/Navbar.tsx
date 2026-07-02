import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Areas We Cover', path: '/areas' },
    { name: 'Nationwide Transport', path: '/nationwide' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 px-6 lg:px-10 transition-all duration-500 will-change-[background-color,padding] ${
        isScrolled ? 'py-4 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/5' : 'py-8 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex flex-col group">
          <h1 className="text-2xl font-bold tracking-tighter leading-none text-white">JP <span className="text-jpred-500">&</span> SONS</h1>
          <p className="text-[10px] tracking-[0.3em] uppercase opacity-60 mt-1">Vehicle Solutions UK</p>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-xs uppercase tracking-widest font-semibold transition-colors hover:text-jpred-500 ${
                location.pathname === link.path ? 'text-jpred-500' : 'text-gray-300'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="h-4 w-px bg-white/20"></div>
          <div className="flex gap-4 items-center">
            <a href="tel:08001234567" className="bg-white text-black px-4 py-2 rounded-sm text-[11px] font-bold uppercase tracking-wider transition-colors hover:bg-gray-200">
              Call Now
            </a>
            <a href="https://wa.me/447000000000" target="_blank" rel="noreferrer" className="bg-[#25D366]/20 border border-[#25D366]/40 text-[#25D366] px-4 py-2 rounded-sm text-[11px] font-bold uppercase tracking-wider transition-colors hover:bg-[#25D366]/30">
              WhatsApp
            </a>
          </div>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-charcoal-900 border-b border-white/5 p-6 lg:hidden flex flex-col gap-6 shadow-2xl"
          >
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-lg font-medium tracking-wide ${
                    location.pathname === link.path ? 'text-white' : 'text-gray-400'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
            <div className="flex flex-col gap-4 pt-6 border-t border-white/10">
              <a href="tel:08001234567" className="flex items-center gap-3 text-lg font-medium text-white">
                <span className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                  <Phone size={18} />
                </span>
                0800 123 4567
              </a>
              <Link
                to="/contact"
                className="inline-flex h-12 w-full items-center justify-center rounded bg-jpred-600 px-6 font-medium text-white transition-all hover:bg-jpred-500"
              >
                Get an Instant Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
