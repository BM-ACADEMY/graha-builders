import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { FaAward, FaUserClock, FaHandHoldingHeart, FaCheckCircle, FaProjectDiagram, FaBalanceScale, FaLightbulb, FaDraftingCompass, FaRulerHorizontal } from 'react-icons/fa';
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';

// --- VECTOR BACKGROUND COMPONENT ---
const BlueprintBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
    <motion.div
      animate={{ backgroundPosition: ["0px 0px", "40px 40px"] }}
      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      className="absolute inset-0 opacity-[0.03]"
      style={{
        backgroundImage: `linear-gradient(#e4a11e 1px, transparent 1px), linear-gradient(90deg, #e4a11e 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }}
    />
    <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white"></div>
  </div>
);

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { scrollY } = useScroll();
  const yHero = useTransform(scrollY, [0, 500], [0, 150]);
  const opacityHero = useTransform(scrollY, [0, 300], [1, 0]);

  // 🎨 BRAND COLORS
  const primaryColor = "#e4a11e";

  return (
    <div className="font-sans text-slate-800 bg-white relative selection:bg-orange-100 overflow-x-hidden">
      <Helmet>
        <title>About Graha Builders | Excellence in Construction Tamil Nadu</title>
        <meta name="description" content="Discover Graha Builders, a leading construction firm in Tiruvannamalai and Chennai. We combine modern engineering with traditional craftsmanship."/>
        <link rel="canonical" href="https://grahabuilders.com/about" />
      </Helmet>

      {/* ==========================
          SECTION 1: PREMIUM HERO
      ========================== */}
      <div className="relative w-full h-[350px] md:h-[550px] overflow-hidden flex items-center justify-center bg-black">
        <motion.div
          style={{ y: yHero, opacity: opacityHero }}
          className="absolute inset-0 z-0"
        >
          <img
            src="https://images.unsplash.com/photo-1541976590-713941681591?q=80&w=2070&auto=format&fit=crop"
            alt="Hero Background"
            className="w-full h-full object-cover opacity-50 grayscale brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black"></div>
        </motion.div>

        <div className="relative z-10 text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="flex items-center justify-center gap-4 mb-6">
               <div className="w-12 h-[1px] bg-[#e4a11e]"></div>
               <span className="text-[#e4a11e] font-black tracking-[0.5em] uppercase text-[10px] md:text-xs">The Graha Legacy</span>
               <div className="w-12 h-[1px] bg-[#e4a11e]"></div>
            </div>
            <h1 className="text-4xl md:text-7xl font-black text-white tracking-tighter mb-4 leading-[0.9] uppercase">
              OUR <br />
              <span style={{ color: primaryColor }}>IDENTITY.</span>
            </h1>
          </motion.div>
        </div>
        
        {/* Scroll Indicator Icon */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30 text-xl"
        >
           <FaRulerHorizontal />
        </motion.div>
      </div>

      {/* ==========================
          SECTION 2: CORE OVERVIEW
      ========================== */}
      <section className="py-24 md:py-40 relative">
        <BlueprintBackground />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            
            {/* Image Cluster */}
            <div className="w-full lg:w-1/2 relative">
               <motion.div
                 initial={{ opacity: 0, scale: 0.9 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 viewport={{ once: true }}
                 className="relative z-10 rounded-sm overflow-hidden shadow-2xl border-4 border-white"
               >
                 <img
                   src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2072&auto=format&fit=crop"
                   alt="Construction Work"
                   className="w-full h-[400px] md:h-[600px] object-cover"
                 />
               </motion.div>
               {/* Decorative Technical Label */}
               <div className="absolute -bottom-6 -left-6 bg-black p-6 z-20 shadow-2xl border-l-4 border-[#e4a11e]">
                  <p className="text-white font-mono text-xs uppercase tracking-widest">Est. 2020 / Project Index: TN-GB</p>
               </div>
            </div>

            {/* Content Side */}
            <div className="w-full lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-4 mb-8">
                  <FaDraftingCompass className="text-2xl" style={{ color: primaryColor }} />
                  <h2 className="text-sm font-black uppercase tracking-[0.3em] text-gray-400">Company Profile</h2>
                </div>
                
                <h3 className="text-4xl md:text-6xl font-black text-black mb-10 leading-tight">
                  Crafting Modern Landmarks with <span className="italic" style={{ color: primaryColor }}>Traditional Roots</span>
                </h3>

                <div className="space-y-8 text-gray-600 text-lg md:text-xl font-light leading-relaxed mb-12">
                  <p>
                    Since our inception in 2020, <span className="text-black font-bold">Graha Builders</span> has established itself as a premier construction firm in Tiruvannamalai, dedicated to transforming the landscape of Tamil Nadu.
                  </p>
                  <p className="p-8 bg-slate-50 border-l-2 border-gray-200 font-normal italic">
                    "We turn the vision of a 'dream home' into a structural reality, balancing aesthetic beauty with structural integrity across every square foot we build."
                  </p>
                  <p>
                    With over <span className="font-bold text-black underline decoration-[#e4a11e] decoration-2">50+ successful projects</span>, our growth is a testament to our commitment to quality, transparency, and the art of modern living.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================
          SECTION 3: TECHNICAL ASSESSMENT (WHY CHOOSE US)
      ========================== */}
      <section className="py-24 md:py-40 bg-black relative overflow-hidden text-white">
        {/* Faint Background Text */}
        <div className="absolute inset-0 opacity-5 select-none pointer-events-none flex items-center justify-center">
           <h2 className="text-[25vw] font-black uppercase tracking-tighter">GB-2024</h2>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mb-20 md:mb-32">
             <h2 className="text-sm font-bold text-[#e4a11e] uppercase tracking-[0.4em] mb-6">Structural Advantages</h2>
             <h3 className="text-4xl md:text-6xl font-black mb-8 leading-tight uppercase tracking-tighter">
               Why we are the <br /> 
               <span className="italic" style={{ color: primaryColor }}>Superior Choice.</span>
             </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                id: "TRACK",
                title: "Proven Track Record",
                desc: "50+ completed projects across Tamil Nadu, from bustling cities to temple towns.",
                icon: <FaProjectDiagram />
              },
              {
                id: "STYLE",
                title: "Architectural Versatility",
                desc: "Specializing in both Modern Indian and Traditional South Indian architectural styles.",
                icon: <FaBalanceScale />
              },
              {
                id: "TECH",
                title: "Technical Excellence",
                desc: "High-fidelity 3D visualization and advanced structural engineering principles.",
                icon: <FaAward />
              },
              {
                id: "INTEG",
                title: "Integrity & Innovation",
                desc: "Bridging traditional craftsmanship with sustainable modern construction technology.",
                icon: <FaLightbulb />
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-8 border border-white/10 bg-white/5 hover:bg-[#e4a11e] hover:text-black transition-all duration-500 rounded-sm"
              >
                <span className="text-[10px] font-mono opacity-50 mb-6 block group-hover:text-black/50">GB-SPEC/{item.id}</span>
                <div className="text-3xl mb-6 text-[#e4a11e] group-hover:text-black transition-colors">
                  {item.icon}
                </div>
                <h4 className="text-xl font-black mb-4 uppercase tracking-tight">{item.title}</h4>
                <p className="text-sm opacity-60 leading-relaxed group-hover:text-black group-hover:opacity-100">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================
          SECTION 4: VISION & MISSION
      ========================== */}
      <section className="py-24 md:py-40 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-start max-w-6xl mx-auto">
             
             {/* Our Vision */}
             <motion.div
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="relative p-10 md:p-16 border-l-8 border-[#e4a11e] bg-slate-50"
             >
                <div className="absolute top-8 right-10 text-6xl text-gray-200 opacity-50">
                   <FaCheckCircle />
                </div>
                <h3 className="text-2xl font-black uppercase tracking-widest mb-10 text-black">Our Vision</h3>
                <p className="text-2xl md:text-3xl font-light text-gray-600 leading-snug">
                   To be the most trusted name in construction across <span className="text-black font-black">Tamil Nadu</span> by consistently delivering spaces that inspire, comfort, and stand the test of time.
                </p>
             </motion.div>

             {/* Our Mission */}
             <motion.div
               initial={{ opacity: 0, x: 30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="p-10 md:p-16"
             >
                <h3 className="text-2xl font-black uppercase tracking-widest mb-10 text-black">Our Mission</h3>
                <p className="text-lg md:text-xl text-gray-500 leading-relaxed font-light mb-10">
                   To provide our clients with a <span className="text-black font-bold">seamless construction experience</span>—from the first 2D floor plan to the final interior finish—ensuring every detail reflects personality and aspirations.
                </p>
                <Link to="/contact" className="inline-flex items-center gap-4 text-black font-black uppercase tracking-[0.3em] text-xs group">
                   Let's Build Together 
                   <div className="w-10 h-10 rounded-full bg-[#e4a11e] flex items-center justify-center group-hover:scale-110 transition-transform">
                      <FaRulerHorizontal className="text-black" />
                   </div>
                </Link>
             </motion.div>

          </div>
        </div>
      </section>

      {/* FINAL STATEMENT */}
      <section className="py-20 bg-slate-50 border-t border-gray-100 text-center">
         <h4 className="text-2xl md:text-4xl font-black text-black uppercase tracking-tighter mb-4">Building the Future, Preserving the Past.</h4>
         <div className="w-16 h-1 bg-[#e4a11e] mx-auto mb-8"></div>
         <p className="text-gray-400 font-bold uppercase tracking-[0.5em] text-[10px]">The Graha Standard / Since 2020</p>
      </section>

    </div>
  );
};

export default AboutPage;
