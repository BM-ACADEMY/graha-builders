import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaSignature, FaCompass, FaDraftingCompass } from 'react-icons/fa';

const HomeAbout = () => {
  // 🎨 BRAND COLORS
  const primaryColor = "#e4a11e"; // Golden Yellow

  return (
    <section className="py-24 md:py-40 bg-[#f9f9f9] relative overflow-hidden">
      
      {/* Background Technical Markers */}
      <div className="absolute top-10 left-10 opacity-[0.1] hidden lg:block">
         <FaDraftingCompass className="text-8xl" style={{ color: primaryColor }} />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-20">

          {/* 1. THE SIGNATURE IMAGE SECTION */}
          <div className="w-full lg:w-[45%] relative">
             <motion.div
               initial={{ opacity: 0, scale: 0.8 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 1 }}
               className="relative"
             >
                {/* Large Background Letter 'G' for Graha */}
                <span className="absolute -top-20 -left-10 text-[250px] font-black opacity-[0.03] select-none leading-none">
                  G
                </span>

                {/* Main Image with Industrial Frame */}
                <div className="relative z-10 p-4 border border-gray-200 bg-white shadow-2xl rounded-sm">
                   <img
                     src="https://images.unsplash.com/photo-1541976590-713941681591?q=80&w=2070&auto=format&fit=crop"
                     alt="Graha Builders Legacy"
                     className="w-full h-[450px] md:h-[600px] object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-700"
                   />
                   
                   {/* Floating Ruler Element */}
                   <div className="absolute -bottom-6 -right-10 w-48 h-12 bg-black flex items-center px-6 gap-3 shadow-2xl hidden md:flex">
                      <div className="w-1 h-6 bg-[#e4a11e]"></div>
                      <span className="text-white text-[10px] font-bold uppercase tracking-[0.2em]">Scale 1:250</span>
                   </div>
                </div>

                {/* Vertical Text Label */}
                <div className="absolute -left-12 top-1/2 -translate-y-1/2 -rotate-90 hidden xl:block">
                   <span className="text-xs font-bold text-gray-400 uppercase tracking-[0.5em] whitespace-nowrap">
                     Established in 2020 / Tamil Nadu
                   </span>
                </div>
             </motion.div>
          </div>

          {/* 2. THE CONTENT SECTION */}
          <div className="w-full lg:w-[55%]">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-10">
                 <FaCompass className="text-2xl" style={{ color: primaryColor }} />
                 <span className="h-[1px] w-12 bg-gray-300"></span>
                 <span className="text-gray-400 font-bold uppercase tracking-[0.3em] text-xs">Legacy & Vision</span>
              </div>

              <h2 className="text-4xl md:text-6xl font-black text-black mb-10 leading-tight tracking-tighter">
                Crafting Modern <br />
                <span className="relative">
                  Landmarks
                  <svg className="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 25 0, 50 5 T 100 5" fill="none" stroke={primaryColor} strokeWidth="2" />
                  </svg>
                </span>
              </h2>

              <div className="space-y-8 text-gray-600 text-lg md:text-xl font-light leading-relaxed mb-12 max-w-2xl">
                <p className="relative pl-8 border-l-2 border-gray-100">
                  <span className="absolute -left-[2px] top-0 h-10 w-[2px]" style={{ backgroundColor: primaryColor }}></span>
                  Graha Builders is a premier construction firm in Tiruvannamalai, dedicated to transforming the landscape of Tamil Nadu with structures that balance aesthetic beauty and structural integrity.
                </p>
                <p>
                  Since our inception in 2020, we have successfully delivered over 50+ residential and commercial projects, bridging the gap between traditional craftsmanship and modern technology.
                </p>
              </div>

              {/* Founder's Signature Style (Thematic) */}
              <div className="flex items-center gap-6 mb-12">
                 <div className="w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center border border-gray-100">
                    <FaSignature className="text-2xl text-gray-300" />
                 </div>
                 <div>
                    <p className="text-black font-black uppercase text-sm tracking-widest">Excellence in Every Brick</p>
                    <p className="text-gray-400 text-xs font-bold uppercase">The Graha Promise</p>
                 </div>
              </div>

              {/* Industrial CTA Button */}
              <Link
                to="/about"
                className="group relative inline-flex items-center gap-8 py-5 pr-10 border-t border-b border-black/5 hover:border-[#e4a11e] transition-all duration-500"
              >
                <span className="text-black font-black uppercase tracking-[0.3em] text-xs md:text-sm">Explore Our Full Story</span>
                <div className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-[#e4a11e] group-hover:border-[#e4a11e] transition-all">
                  <svg 
                    className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:text-black text-gray-400" 
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </Link>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Background Floating Text */}
      <div className="absolute -right-20 top-1/4 opacity-[0.02] -rotate-90 select-none pointer-events-none">
         <span className="text-[12vw] font-black text-black">TRADITION</span>
      </div>

    </section>
  );
};

export default HomeAbout;
