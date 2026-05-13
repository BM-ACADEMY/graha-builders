import React from 'react';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaArrowRight, FaCheckCircle, FaHardHat, FaDraftingCompass } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const HomeHSE = () => {
  const primaryColor = "#e4a11e";

  return (
    <section className="py-24 md:py-40 bg-white relative overflow-hidden">
      
      {/* Background Blueprint Grid */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
           style={{ 
             backgroundImage: `linear-gradient(${primaryColor} 1px, transparent 1px), linear-gradient(90deg, ${primaryColor} 1px, transparent 1px)`,
             backgroundSize: '80px 80px' 
           }}>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-20">

          {/* LEFT CONTENT: TECHNICAL SPECS */}
          <div className="w-full lg:w-1/2">
             <motion.div
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
             >
                <div className="flex items-center gap-4 mb-8">
                  <FaHardHat className="text-2xl text-gray-300" />
                  <span className="text-gray-400 font-bold uppercase tracking-[0.4em] text-xs">Standard Compliance</span>
                </div>

                <h2 className="text-4xl md:text-6xl font-black text-black mb-10 leading-tight tracking-tighter uppercase">
                  Built on <span style={{ color: primaryColor }}>Safety</span>,<br />
                  Driven by <span className="italic">Quality.</span>
                </h2>

                <p className="text-gray-600 text-lg md:text-xl font-light leading-relaxed mb-12 max-w-xl">
                  At Graha Builders, we maintain uncompromising standards of quality, health, and environmental responsibility by strictly following approved specifications across all operations in Tamil Nadu.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                   {[
                     { icon: <FaCheckCircle />, title: "Approved Materials" },
                     { icon: <FaShieldAlt />, title: "Safe Work Practices" }
                   ].map((item, i) => (
                     <div key={i} className="flex items-center gap-4 p-4 border border-gray-100 bg-slate-50 rounded-sm group hover:border-[#e4a11e] transition-colors">
                        <div className="text-xl text-[#e4a11e] group-hover:scale-110 transition-transform">
                           {item.icon}
                        </div>
                        <span className="text-black font-black uppercase text-xs tracking-widest">{item.title}</span>
                     </div>
                   ))}
                </div>

                <Link
                  to="/hse"
                  className="group relative inline-flex items-center gap-8 py-5 pr-10 border-t border-b border-black/5 hover:border-[#e4a11e] transition-all duration-500"
                >
                  <span className="text-black font-black uppercase tracking-[0.3em] text-xs md:text-sm">Read Our Quality Policy</span>
                  <div className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-[#e4a11e] group-hover:border-[#e4a11e] transition-all">
                    <FaArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:text-black text-gray-400" />
                  </div>
                </Link>
             </motion.div>
          </div>

          {/* RIGHT CARD: INDUSTRIAL VISUAL */}
          <div className="w-full lg:w-1/2 relative">
             <motion.div
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               className="relative z-10"
             >
                {/* Large Background Letter 'S' for Safety */}
                <span className="absolute -top-20 -right-10 text-[250px] font-black opacity-[0.03] select-none leading-none">
                  S
                </span>

                <div className="relative z-10 bg-black p-4 rounded-sm shadow-2xl">
                   <img
                     src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2072&auto=format&fit=crop"
                     alt="Safety Operations"
                     className="w-full h-[400px] md:h-[550px] object-cover grayscale brightness-75 hover:grayscale-0 transition-all duration-700"
                   />
                   
                   {/* Technical Overlay */}
                   <div className="absolute top-10 left-10 p-6 bg-[#e4a11e] text-black shadow-2xl">
                      <FaShieldAlt className="text-3xl mb-4" />
                      <p className="text-[10px] font-black uppercase tracking-widest leading-none">Status: Compliant</p>
                      <p className="text-xl font-mono font-bold mt-1">CODE-HSE-2024</p>
                   </div>

                   {/* Decorative Measure Line */}
                   <div className="absolute -bottom-6 left-10 right-10 h-10 border-x border-b border-white/20 flex items-center justify-center">
                      <span className="text-[8px] text-white/40 font-mono tracking-[0.5em] uppercase">Safety Zone Perimeter // 100% SECURE</span>
                   </div>
                </div>
             </motion.div>
          </div>

        </div>
      </div>

      {/* Background Vertical Text */}
      <div className="absolute left-10 bottom-0 opacity-[0.02] select-none pointer-events-none">
         <h2 className="text-[12vw] font-black text-black uppercase vertical-rl rotate-180 tracking-tighter">
           COMPLIANCE
         </h2>
      </div>

    </section>
  );
};

export default HomeHSE;
