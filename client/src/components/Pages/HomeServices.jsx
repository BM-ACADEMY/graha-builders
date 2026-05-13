import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaHome, FaBuilding, FaArrowRight, FaDraftingCompass, FaRulerCombined } from 'react-icons/fa';
import { Link } from 'react-router-dom';

// Import Assets
import craneBg from '../../assets/crane-bg.png';
import craneHook from '../../assets/crane-hook.png';

const HomeServices = () => {
  // 🎨 BRAND COLORS
  const primaryColor = "#e4a11e"; // Golden Yellow

  const services = [
    {
      id: "SPEC-01",
      title: "Residential Buildings",
      desc: "We turn the vision of a \"dream home\" into a structural reality. Our residential construction services focus on creating bespoke single-family homes that reflect the unique lifestyle and personality of the owner.",
      icon: <FaHome />,
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop",
      dim: "450m² Avg",
      tag: "RES-DIV"
    },
    {
      id: "SPEC-02",
      title: "Commercial Buildings",
      desc: "Architecture that means business. We design and construct commercial spaces—including offices, retail outlets, and warehouses—that optimize workflow and professional aesthetics.",
      icon: <FaBuilding />,
      image: "https://images.unsplash.com/photo-1541976590-713941681591?q=80&w=2070&auto=format&fit=crop",
      dim: "1250m² Avg",
      tag: "COM-DIV"
    }
  ];

  // Parallax for Background Crane
  const { scrollY } = useScroll();
  const yCrane = useTransform(scrollY, [1000, 3000], [0, -200]);
  const yHook = useTransform(scrollY, [1000, 3000], [0, 100]);

  return (
    <section className="relative py-24 md:py-40 bg-black overflow-hidden selection:bg-[#e4a11e] selection:text-black">
      
      {/* 1. TECHNICAL BLUEPRINT GRID */}
      <div className="absolute inset-0 z-0 opacity-[0.07]"
           style={{ 
             backgroundImage: `linear-gradient(${primaryColor} 1px, transparent 1px), linear-gradient(90deg, ${primaryColor} 1px, transparent 1px)`,
             backgroundSize: '60px 60px' 
           }}>
      </div>

      {/* 2. INDUSTRIAL BACKGROUND ELEMENTS (CRANE) */}
      <motion.div 
        style={{ y: yCrane }}
        className="absolute -right-20 top-0 h-full w-full lg:w-[45%] opacity-20 pointer-events-none z-0"
      >
        <img src={craneBg} alt="Crane" className="h-full w-full object-contain object-right" />
      </motion.div>

      {/* 3. FLOATING CRANE HOOK */}
      <motion.div 
        style={{ y: yHook }}
        animate={{ x: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[10%] top-20 w-32 md:w-48 opacity-10 pointer-events-none z-0"
      >
        <img src={craneHook} alt="Crane Hook" className="w-full h-auto" />
      </motion.div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* SECTION HEADER: Technical Style */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 md:mb-32 gap-10">
          <div className="max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-8"
            >
              <FaDraftingCompass className="text-2xl" style={{ color: primaryColor }} />
              <span className="text-gray-400 font-bold uppercase tracking-[0.4em] text-xs md:text-sm border-b border-gray-800 pb-2">
                Project Classification / 2024
              </span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-black text-white leading-tight tracking-tight"
            >
              ENGINEERING <br />
              <span className="italic" style={{ color: primaryColor }}>SOLUTIONS.</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="hidden lg:block p-8 border border-white/10 rounded-2xl backdrop-blur-md bg-white/5"
          >
             <div className="flex items-center gap-4 text-white">
                <FaRulerCombined className="text-3xl" style={{ color: primaryColor }} />
                <div>
                   <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Standard Scale</p>
                   <p className="text-xl font-mono font-bold tracking-tighter">1 : 500 METRIC</p>
                </div>
             </div>
          </motion.div>
        </div>

        {/* SERVICES: Technical Specification Cards */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="group relative"
            >
              {/* Card Container */}
              <div className="bg-[#0a0a0a] border border-white/10 rounded-sm overflow-hidden hover:border-[#e4a11e]/50 transition-all duration-500 flex flex-col h-full shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)]">
                
                {/* Header: SPEC ID */}
                <div className="flex justify-between items-center px-6 py-4 border-b border-white/5 bg-white/5">
                   <span className="text-[10px] font-mono text-gray-500 tracking-widest">{service.id}</span>
                   <span className="text-[10px] font-bold px-2 py-1 rounded bg-white/5 text-gray-400">{service.tag}</span>
                </div>

                <div className="flex flex-col md:flex-row flex-grow">
                  
                  {/* Image: Technical View */}
                  <div className="w-full md:w-1/2 h-64 md:h-auto overflow-hidden relative border-r border-white/5">
                     <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-105 transition-all duration-1000"
                     />
                     {/* Measuring Line Overlay */}
                     <div className="absolute bottom-4 left-4 right-4 h-6 border-x border-b border-white/30 flex items-center justify-center">
                        <span className="text-[8px] text-white/50 font-mono tracking-widest uppercase">Dimension: {service.dim}</span>
                     </div>
                  </div>

                  {/* Content: Spec Sheet Style */}
                  <div className="w-full md:w-1/2 p-8 md:p-10 flex flex-col justify-between bg-gradient-to-br from-transparent to-white/5">
                    <div>
                      <div className="text-2xl mb-4 transform group-hover:scale-110 transition-transform duration-500" style={{ color: primaryColor }}>
                        {service.icon}
                      </div>
                      <h3 className="text-xl md:text-2xl font-black text-white mb-4 tracking-tight uppercase">
                        {service.title}
                      </h3>
                      <p className="text-gray-400 text-xs md:text-sm leading-relaxed font-light mb-6">
                        {service.desc}
                      </p>
                    </div>

                    <Link 
                      to="/services"
                      className="inline-flex items-center gap-3 text-white font-bold uppercase tracking-[0.2em] text-[10px] group/btn"
                    >
                      <span className="pb-1 border-b border-white/20 group-hover/btn:border-[#e4a11e] transition-colors">
                        View Full Specs
                      </span>
                      <FaArrowRight className="group-hover/btn:translate-x-2 transition-transform" style={{ color: primaryColor }} />
                    </Link>
                  </div>

                </div>

                {/* Footer Decorator */}
                <div className="h-1 w-0 group-hover:w-full transition-all duration-700" style={{ backgroundColor: primaryColor }}></div>
              </div>

              {/* Corner Decorative Element */}
              <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 opacity-0 group-hover:opacity-100 transition-opacity" style={{ borderColor: primaryColor }}></div>
              <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 opacity-0 group-hover:opacity-100 transition-opacity" style={{ borderColor: primaryColor }}></div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Massive Vertical Background Text */}
      <div className="absolute right-10 bottom-0 opacity-[0.02] select-none pointer-events-none">
         <h2 className="text-[10vw] font-black text-white uppercase vertical-rl tracking-tighter">
           BLUEPRINT
         </h2>
      </div>

    </section>
  );
};

export default HomeServices;
