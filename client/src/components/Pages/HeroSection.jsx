import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import heroBg from '../../assets/hero-bg.png';

const Hero = () => {
  // 🎨 BRAND COLORS
  const primaryColor = "#e4a11e"; // Golden Yellow
  
  return (
    <section className="relative w-full min-h-screen flex items-center overflow-hidden bg-black">

      {/* --- BACKGROUND IMAGE WITH PARALLAX EFFECT --- */}
      <div className="absolute inset-0 z-0">
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "easeOut" }}
          src={heroBg}
          alt="Premium Construction"
          className="w-full h-full object-cover brightness-[0.4]"
        />
        {/* Gradient Overlay for Depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
      </div>

      {/* --- CONTENT AREA --- */}
      <div className="relative z-10 container mx-auto px-6 md:px-12">
        <div className="max-w-4xl">
          
          {/* Animated Line Decorator */}
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 mb-6"
            style={{ backgroundColor: primaryColor }}
          ></motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Professional Tagline */}
            <span className="block text-gray-400 font-medium tracking-[0.3em] uppercase mb-4 text-xs md:text-sm">
              Engineering Excellence Since 2020
            </span>

            {/* Premium Headline */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white leading-tight mb-6 tracking-tight">
              Crafting <span style={{ color: primaryColor }}>Iconic</span> <br />
              Landmarks
            </h1>

            {/* Refined Subtext */}
            <p className="text-lg md:text-2xl text-gray-300 mb-10 leading-relaxed max-w-2xl font-light">
              Graha Builders delivers world-class construction solutions in Tamil Nadu. 
              From massive infrastructure to intricate fit-outs, we build with 
              uncompromising precision and safety.
            </p>

            {/* Interactive Call-to-Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-5">
              
              {/* Primary Button */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/contact"
                  style={{ backgroundColor: primaryColor }}
                  className="px-10 py-5 text-black font-black rounded-sm shadow-2xl transition-all text-center uppercase tracking-widest flex items-center justify-center group"
                >
                  Start Your Project
                  <svg 
                    className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" 
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </motion.div>

              {/* Secondary Outline Button */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/projects"
                  className="px-10 py-5 border-2 border-white/30 hover:border-white text-white font-bold rounded-sm backdrop-blur-sm transition-all text-center uppercase tracking-widest flex items-center justify-center"
                >
                  View Portfolio
                </Link>
              </motion.div>

            </div>
          </motion.div>
        </div>
      </div>

      {/* --- DECORATIVE FLOATING ELEMENTS --- */}
      <div className="absolute bottom-10 right-10 hidden lg:block">
         <div className="flex items-center gap-6 text-white/40 text-xs tracking-widest uppercase vertical-rl rotate-180">
            <span className="hover:text-white cursor-pointer transition-colors">Instagram</span>
            <div className="w-[1px] h-12 bg-white/20"></div>
            <span className="hover:text-white cursor-pointer transition-colors">LinkedIn</span>
            <div className="w-[1px] h-12 bg-white/20"></div>
            <span className="hover:text-white cursor-pointer transition-colors">Facebook</span>
         </div>
      </div>

      {/* --- BOTTOM GRADIENT FADE --- */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-0"></div>

    </section>
  );
};

export default Hero;
