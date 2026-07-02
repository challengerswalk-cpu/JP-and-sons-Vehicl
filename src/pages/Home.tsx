import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, ShieldCheck, MapPin, Zap, Clock, 
  Map, Phone, Star, ChevronDown, CheckCircle2, MessageSquare
} from 'lucide-react';
import SEO from '../components/seo/SEO';
import { globalLocalBusinessSchema, globalWebsiteSchema, globalOrganizationSchema } from '../utils/seo-schemas';

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [{
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.jpsonsvehicletransport.co.uk/"
    }]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Are my vehicles insured during transport?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, absolutely. We carry comprehensive motor trade and goods in transit insurance. Your vehicle is fully covered from the moment we take the keys until delivery is signed for."
        }
      },
      {
        "@type": "Question",
        "name": "How fast can you respond to a breakdown?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "In our core coverage areas (Buckinghamshire, Berkshire, London borders), we aim to be with you within 45-60 minutes depending on traffic. Nationwide recoveries are scheduled based on availability."
        }
      },
      {
        "@type": "Question",
        "name": "Do you transport non-running vehicles?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, our recovery trucks and transport trailers are equipped with winches to safely load and unload non-running vehicles."
        }
      },
      {
        "@type": "Question",
        "name": "How do you value cars you buy?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We use real-time market data alongside a physical appraisal. Because we are an independent business, we don't have massive overheads, allowing us to often beat automated valuation sites."
        }
      },
      {
        "@type": "Question",
        "name": "Do you do long-distance transport?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we offer nationwide transport services covering England, Scotland, and Wales."
        }
      }
    ]
  };

  return (
    <div className="bg-charcoal-950 font-sans text-white">
      <SEO 
        title="Vehicle Transport & Breakdown Recovery High Wycombe | JP & Sons"
        description="Fast, reliable vehicle transport, 24/7 breakdown recovery, and hassle-free car buying in High Wycombe, Buckinghamshire and nationwide. Contact JP & Sons today."
        canonicalUrl="https://www.jpsonsvehicletransport.co.uk/"
        schema={[globalLocalBusinessSchema, globalWebsiteSchema, globalOrganizationSchema, breadcrumbSchema, faqSchema]}
      />
      {/* SECTION 1: Cinematic Hero Experience */}
      <section ref={heroRef} className="relative min-h-[100svh] flex items-center overflow-hidden pt-32 pb-16">
        <motion.div 
          style={{ y: heroY, opacity: heroOpacity }}
          className="absolute inset-0 z-0"
        >
          {/* Subtle dark overlay so text is easy to read */}
          <div className="absolute inset-0 bg-charcoal-950/50 z-10"></div>
          <img 
            src="https://res.cloudinary.com/dhme9ymyd/image/upload/v1783011868/JP_Hero_IMage_qf0bvf.webp" 
            alt="Flatbed tow truck recovering a classic sports car on a scenic road"
            title="Professional Vehicle Transport and Breakdown Recovery"
            className="w-full h-full object-cover"
            loading="eager"
            width="1920"
            height="1080"
          />
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-7xl font-heading font-bold tracking-tight text-white mb-6 text-balance">
              Need Help With Your Vehicle?
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-10 font-light leading-relaxed">
              Expert vehicle transport, rapid breakdown recovery, and fair car buying across the UK. Reliable service when you need it most.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 mb-12">
              <a 
                href="tel:08001234567" 
                className="w-full sm:w-auto inline-flex h-14 items-center justify-center gap-2 rounded bg-white px-8 font-medium text-charcoal-950 transition-all hover:bg-gray-200 hover:scale-105 active:scale-95"
              >
                <Phone size={20} />
                Call Now
              </a>
              <Link 
                to="/contact" 
                className="w-full sm:w-auto inline-flex h-14 items-center justify-center gap-2 rounded bg-jpred-600 px-8 font-medium text-white transition-all hover:bg-jpred-500 hover:scale-105 active:scale-95"
              >
                <MessageSquare size={20} />
                Get a Free Quote
              </Link>
            </div>
            
            <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-4 sm:gap-x-8 sm:gap-y-4 text-sm font-medium text-gray-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-jpred-500" />
                <span>Fully Insured</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-jpred-500" />
                <span>Fast Response</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-jpred-500" />
                <span>Nationwide Coverage</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-jpred-500" />
                <span>Based in High Wycombe</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: Three Service Gateway */}
      <section className="bg-charcoal-950 relative z-20 flex flex-col md:flex-row w-full h-auto min-h-[600px]">
        <ServicePanel 
          number="01"
          title="VEHICLE<br/>TRANSPORT"
          subtitle="Nationwide enclosed and open transport"
          image="https://res.cloudinary.com/dhme9ymyd/image/upload/v1776843308/ChatGPT_Image_Apr_22_2026_08_32_15_AM_cauvlj.webp"
          link="/services"
          action="View Service"
        />
        <ServicePanel 
          number="02"
          title="BREAKDOWN<br/>RECOVERY"
          subtitle="24/7 rapid response assistance"
          image="https://res.cloudinary.com/dhme9ymyd/image/upload/v1776843541/ChatGPT_Image_Apr_22_2026_08_37_07_AM_t0tryc.webp"
          link="/services"
          action="Get Rescue"
        />
        <ServicePanel 
          number="03"
          title="WE BUY<br/>CARS"
          subtitle="Fast, fair, hassle-free valuation"
          image="https://res.cloudinary.com/dhme9ymyd/image/upload/v1776846100/ChatGPT_Image_Apr_22_2026_09_15_40_AM_dhr1qj.webp"
          link="/services"
          action="Sell Today"
        />
      </section>

      {/* SECTION 3: About JP & Sons */}
      <section className="py-24 px-6 lg:px-12 bg-charcoal-900 border-y border-white/10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-jpred-600/5 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-sm font-bold tracking-widest text-jpred-500 uppercase mb-4">About JP & Sons</h2>
            <h3 className="text-4xl lg:text-5xl font-heading font-bold mb-6 text-balance">
              More than a transport company. A partner to trust.
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              When dealing with vehicles, you need reliability above all else. At JP & Sons, we treat every vehicle—from family hatchbacks to classic exotics—with exactly the same level of uncompromising care.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              We are a privately owned, UK-based team of professionals committed to elevating the standard of vehicle transport, recovery, and trading. We don't just move cars; we deliver peace of mind.
            </p>
            <div className="flex items-center gap-4">
              <div className="flex -space-x-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-12 h-12 rounded-full border-2 border-charcoal-900 bg-charcoal-800 flex items-center justify-center overflow-hidden">
                    <span className="text-[10px] text-gray-500 font-bold">{i}</span>
                  </div>
                ))}
              </div>
              <div className="text-sm text-gray-400 font-medium">
                Our expert handling team
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 w-full">
            <div className="relative aspect-[4/5] rounded-xl overflow-hidden shadow-2xl bg-charcoal-800 border border-white/5 flex items-center justify-center">
              <img 
                src="https://res.cloudinary.com/dhme9ymyd/image/upload/v1783019689/2_Image_xwplfk.webp" 
                alt="Professional driver checking vehicle condition before loading onto transport truck"
                title="Secure Vehicle Loading by Professional Driver"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
                width="800"
                height="1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-8 left-8 z-10">
                <p className="text-white font-heading font-bold text-2xl">Professional.</p>
                <p className="text-gray-300">Fully insured & vetted operators</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4, 5, 6: Service Deep Dives */}
      <ServiceDeepDive 
        label="Transport"
        title="Flawless movement from A to B."
        description="Whether you've purchased a vehicle online, need a classic car relocated, or require commercial fleet movements, our pristine transport fleet ensures secure, timely delivery across the United Kingdom."
        features={["Fully insured loading", "Enclosed options available", "Real-time updates"]}
        image="https://res.cloudinary.com/dhme9ymyd/image/upload/v1783020033/4_Image_dsdozz.webp"
        align="right"
      />
      <ServiceDeepDive 
        label="Recovery"
        title="Immediate response when you need it most."
        description="A breakdown is stressful enough. Our recovery team aims to remove that stress immediately. We offer rapid-response 24/7 recovery services, ensuring you and your vehicle are brought to safety."
        features={["24/7 Availability", "Rapid dispatch", "Safe passenger transport"]}
        image="https://res.cloudinary.com/dhme9ymyd/image/upload/v1783020032/5_Image_lg7gdz.webp"
        align="left"
      />
      <ServiceDeepDive 
        label="Purchasing"
        title="A radically simple way to sell your car."
        description="Forget negotiating with strangers or hidden fees from automated buying sites. We offer honest, fair market valuations and fast payment. We'll even collect the vehicle directly from your driveway."
        features={["Instant valuation", "Same-day payments", "Free home collection"]}
        image="https://res.cloudinary.com/dhme9ymyd/image/upload/v1783020018/3_Image_athld4.webp"
        align="right"
      />

      {/* SECTION 7: How We Help */}
      <section className="py-24 px-6 lg:px-12 bg-charcoal-950 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-4">How It Works</h2>
            <p className="text-gray-400">A seamless process designed around your convenience.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-[45px] left-[15%] right-[15%] h-px bg-white/10 z-0"></div>
            
            <ProcessStep 
              number="01"
              title="Contact Us"
              description="Call or message us with your vehicle details, locations, or requirements."
            />
            <ProcessStep 
              number="02"
              title="Receive Quote"
              description="We provide a transparent, competitive price with no hidden fees."
            />
            <ProcessStep 
              number="03"
              title="We Handle It"
              description="Our professional team takes over, ensuring a smooth and secure service."
            />
          </div>
        </div>
      </section>

      {/* SECTION 8: Coverage Map */}
      <section className="py-24 px-6 lg:px-12 bg-charcoal-900 border-t border-white/10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 relative z-10">
            <h2 className="text-3xl lg:text-5xl font-heading font-bold mb-6 text-balance">
              Local presence. Nationwide capability.
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Based strategically to serve the Home Counties quickly, we provide rapid response to Buckinghamshire, Berkshire, and London, whilst operating scheduled transport schedules across the entirety of the UK.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              {['High Wycombe', 'Marlow', 'Maidenhead', 'Slough', 'Oxford', 'Reading', 'London'].map(area => (
                <span key={area} className="px-4 py-2 rounded-full border border-white/10 bg-charcoal-800/80 text-sm text-gray-300 backdrop-blur-sm">
                  {area}
                </span>
              ))}
              <span className="px-4 py-2 rounded-full bg-jpred-600/20 text-jpred-500 text-sm font-medium">
                + Nationwide
              </span>
            </div>
            <Link to="/areas-we-cover" className="inline-flex items-center gap-2 text-white font-medium hover:text-jpred-500 transition-colors group">
              View all coverage areas
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          <div className="lg:w-1/2 relative h-[500px] w-full bg-charcoal-950 rounded-2xl border border-white/10 overflow-hidden flex items-center justify-center group pointer-events-none">
             <img 
               src="https://res.cloudinary.com/dhme9ymyd/image/upload/v1783020577/6_image_emgcrp.webp" 
               alt="UK Map highlighting our nationwide vehicle transport coverage" 
               title="Nationwide Vehicle Transport Coverage Map"
               className="w-full h-full object-cover rounded-2xl"
               loading="lazy"
               width="800"
               height="500"
             />
          </div>
        </div>
      </section>

      {/* SECTION 9: Why Customers Choose Us */}
      <section className="py-24 px-6 lg:px-12 bg-charcoal-950">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-12 text-center">Uncompromising Standards</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <TrustBlock icon={<ShieldCheck size={28} className="text-jpred-500" />} title="Fully Insured" desc="Comprehensive coverage for high-value vehicles." />
            <TrustBlock icon={<Clock size={28} className="text-jpred-500" />} title="Fast Response" desc="24/7 availability for emergency breakdown." />
            <TrustBlock icon={<MapPin size={28} className="text-jpred-500" />} title="Nationwide" desc="Logistical coverage anywhere in the UK." />
            <TrustBlock icon={<Zap size={28} className="text-jpred-500" />} title="Fair Pricing" desc="Transparent quotes with zero hidden fees." />
          </div>
        </div>
      </section>

      {/* SECTION 10: Reviews */}
      <section className="py-24 px-6 lg:px-12 bg-charcoal-900 border-y border-white/10">
         <div className="max-w-7xl mx-auto">
            <div className="mb-12 flex flex-col sm:flex-row justify-between items-end gap-6">
              <div>
                <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-4">Trusted by Drivers</h2>
                <div className="flex items-center gap-2">
                  <div className="flex text-yellow-500">
                    {[1,2,3,4,5].map(i => <Star key={i} size={18} fill="currentColor" />)}
                  </div>
                  <span className="text-white font-medium">5.0</span>
                  <span className="text-gray-400 text-sm">Customer Rating</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <ReviewCard 
                text="Broke down on the M4. JP & Sons arrived within 30 minutes. Extremely professional driver, safely got my car and myself back home. Highly recommended."
                author="David Harrison"
                service="Breakdown Recovery"
              />
              <ReviewCard 
                text="Used them to transport a classic Porsche I bought at auction. They treated the car with immense respect. Flawless communication throughout the journey."
                author="Sarah Jenkins"
                service="Vehicle Transport"
              />
              <ReviewCard 
                text="Sold my van to them. Got a better price than the big automated websites, and they came to collect it the same day with immediate payment. Zero hassle."
                author="Michael T."
                service="We Buy Cars"
              />
            </div>
         </div>
      </section>

      {/* SECTION 11: FAQ */}
      <section className="py-24 px-6 lg:px-12 bg-charcoal-950">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <FaqItem question="Are my vehicles insured during transport?" answer="Yes, absolutely. We carry comprehensive motor trade and goods in transit insurance. Your vehicle is fully covered from the moment we take the keys until delivery is signed for." />
            <FaqItem question="How fast can you respond to a breakdown?" answer="In our core coverage areas (Buckinghamshire, Berkshire, London borders), we aim to be with you within 45-60 minutes depending on traffic. Nationwide recoveries are scheduled based on availability." />
            <FaqItem question="Do you transport non-running vehicles?" answer="Yes, our recovery trucks and transport trailers are equipped with winches to safely load and unload non-running vehicles." />
            <FaqItem question="How do you value cars you buy?" answer="We use real-time market data alongside a physical appraisal. Because we are an independent business, we don't have massive overheads, allowing us to often beat automated valuation sites." />
            <FaqItem question="Do you do long-distance transport?" answer="Yes, we offer nationwide transport services covering England, Scotland, and Wales." />
          </div>
        </div>
      </section>

      {/* SECTION 12: CTA */}
      <section className="py-32 px-6 lg:px-12 bg-charcoal-950 relative overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 opacity-40 bg-charcoal-800 flex items-center justify-center">
          <span className="text-charcoal-500 font-bold tracking-widest uppercase">Background Image</span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/80 to-charcoal-950/20"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6 text-white text-balance">
            Ready to move your vehicle?
          </h2>
          <p className="text-xl text-gray-300 mb-10 font-light">
            Contact our team today for an immediate, no-obligation quote.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              to="/contact" 
              className="w-full sm:w-auto inline-flex h-14 items-center justify-center rounded bg-jpred-600 px-8 font-medium text-white transition-all hover:bg-jpred-500 hover:scale-105"
            >
              Get Started Now
            </Link>
            <a 
              href="https://wa.me/447000000000" 
              target="_blank" rel="noreferrer"
              className="w-full sm:w-auto inline-flex h-14 items-center justify-center rounded bg-[#25D366] text-white px-8 font-medium transition-all hover:bg-[#20bd5a] hover:scale-105"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

// Subcomponents

function ServicePanel({ number, title, subtitle, image, link, action }: any) {
  return (
    <Link to={link} className="flex-1 border-b md:border-b-0 md:border-r border-white/10 relative group transition-all duration-700 cursor-pointer overflow-hidden min-h-[400px]">
      <div className="absolute inset-0 z-0 overflow-hidden">
        {image ? (
          <img 
            src={image} 
            alt={title} 
            title={title}
            loading="lazy"
            width="600"
            height="400"
            className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" 
          />
        ) : (
          <div className="w-full h-full bg-charcoal-900"></div>
        )}
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/50 to-transparent z-10 opacity-70 group-hover:opacity-40 transition-opacity duration-700"></div>
      
      <div className="absolute top-10 left-10 text-[60px] font-black opacity-10 leading-none z-20 text-white font-heading">{number}</div>
      <div className="absolute inset-0 flex flex-col justify-end p-10 z-20">
        <div className="w-10 h-1 bg-jpred-500 mb-6 group-hover:w-16 transition-all duration-500"></div>
        <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-tighter mb-4 uppercase" dangerouslySetInnerHTML={{ __html: title }}></h2>
        <p className="text-sm text-gray-400 mb-8 max-w-[240px] leading-relaxed group-hover:text-gray-200 transition-colors">{subtitle}</p>
        <div className="flex items-center gap-3 text-[10px] font-bold tracking-widest uppercase text-jpred-500">
          <span>{action}</span>
          <div className="h-px w-8 bg-jpred-500 group-hover:w-12 transition-all duration-300"></div>
        </div>
      </div>
    </Link>
  );
}

function ServiceDeepDive({ label, title, description, features, image, align }: any) {
  const isLeft = align === 'left';
  return (
    <section className="py-24 px-6 lg:px-12 bg-charcoal-950 border-t border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        {isLeft && (
          <div className="lg:w-1/2 lg:order-1 order-2">
            <DeepDiveImage src={image} alt={title} />
          </div>
        )}
        <div className={`lg:w-1/2 ${isLeft ? 'lg:order-2 order-1' : ''}`}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-jpred-500"></span>
            {label}
          </div>
          <h2 className="text-3xl lg:text-5xl font-heading font-bold mb-6 text-balance">{title}</h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-8">{description}</p>
          <ul className="space-y-4 mb-8">
            {features.map((feat: string, i: number) => (
              <li key={i} className="flex items-center gap-3 text-white font-medium">
                <CheckCircle2 size={20} className="text-jpred-500" />
                {feat}
              </li>
            ))}
          </ul>
          <Link to="/services" className="inline-flex h-12 items-center justify-center rounded bg-white px-6 font-medium text-charcoal-950 transition-all hover:bg-gray-200">
            Learn More
          </Link>
        </div>
        {!isLeft && (
          <div className="lg:w-1/2">
            <DeepDiveImage src={image} alt={title} />
          </div>
        )}
      </div>
    </section>
  );
}

function DeepDiveImage({ src, alt }: { src: string, alt: string }) {
  return (
    <div className="relative aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden group bg-charcoal-900 flex items-center justify-center border border-white/5">
      <div className="absolute inset-0 bg-charcoal-800 animate-pulse -z-10"></div>
      {src ? (
        <img 
          src={src} 
          alt={alt} 
          title={alt}
          loading="lazy"
          width="800"
          height="600"
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
        />
      ) : (
        <span className="text-gray-600 font-medium text-sm">Image Placeholder</span>
      )}
      <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl pointer-events-none"></div>
    </div>
  );
}

function ProcessStep({ number, title, description }: any) {
  return (
    <div className="relative z-10 flex flex-col items-center text-center">
      <div className="w-24 h-24 rounded-full bg-charcoal-900 border border-white/10 flex items-center justify-center text-3xl font-heading font-bold text-white mb-6 font-mono relative shadow-xl">
        {number}
        {/* Connection dot */}
        <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-4 h-4 bg-charcoal-800 rounded-full border border-white/10 hidden md:block"></div>
        <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-4 bg-charcoal-800 rounded-full border border-white/10 hidden md:block"></div>
      </div>
      <h3 className="text-xl font-heading font-bold mb-3">{title}</h3>
      <p className="text-gray-400 leading-relaxed max-w-[250px]">{description}</p>
    </div>
  );
}

function TrustBlock({ icon, title, desc }: any) {
  return (
    <div className="p-8 rounded-xl bg-charcoal-900 border border-white/10 hover:border-white/20 transition-colors">
      <div className="w-14 h-14 bg-charcoal-800 rounded-lg flex items-center justify-center mb-6">
        {icon}
      </div>
      <h4 className="text-xl font-heading font-bold mb-3">{title}</h4>
      <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}

function ReviewCard({ text, author, service }: any) {
  return (
    <div className="p-8 rounded-xl bg-charcoal-950 border border-white/10 flex flex-col h-full">
      <div className="flex text-jpred-500 mb-6">
        {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="currentColor" />)}
      </div>
      <p className="text-gray-300 italic mb-8 flex-grow leading-relaxed flex items-center">
        "{text}"
      </p>
      <div>
        <p className="font-bold text-white tracking-wide">{author}</p>
        <p className="text-sm text-gray-500">{service}</p>
      </div>
    </div>
  );
}

function FaqItem({ question, answer }: { question: string, answer: string }) {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border-b border-white/10">
      <button 
        className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium text-white group-hover:text-gray-300 transition-colors pr-8">
          {question}
        </span>
        <ChevronDown size={20} className={`text-gray-500 transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'}`}
      >
        <p className="text-gray-400 leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  );
}
