import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowRight, FaChevronLeft, FaChevronRight, FaFilePdf, FaDraftingCompass } from 'react-icons/fa';
import { Link } from 'react-router-dom';

// Import Assets
import img1 from '../../assets/WhatsApp Image 2026-05-12 at 6.48.15 PM.jpeg';
import img2 from '../../assets/WhatsApp Image 2026-05-12 at 6.48.16 PM.jpeg';
import img3 from '../../assets/WhatsApp Image 2026-05-12 at 6.48.18 PM.jpeg';

const HomeProjects = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // 🎨 BRAND COLORS
  const primaryColor = "#e4a11e";

  const projects = [
    {
      id: 1,
      title: "Ashok House Elevation",
      category: "RESIDENTIAL",
      location: "Tiruvannamalai",
      desc: "Modern residential elevation design with premium finishes.",
      image: img1,
      pdf: "/src/assets/AshokHouse_Elevation01.pdf"
    },
    {
      id: 2,
      title: "Vimal Nishitha Project",
      category: "BUILDING",
      location: "Chennai",
      desc: "A contemporary multi-family residential building.",
      image: img2,
      pdf: "/src/assets/VimalNishitha_Elevation01.pdf"
    },
    {
      id: 3,
      title: "ELEVATION TN Development",
      category: "COMMERCIAL",
      location: "Tamil Nadu",
      desc: "Large scale commercial development with technical excellence.",
      image: img3,
      pdf: "/src/assets/ELEVATION TN.pdf"
    }
  ];

  const nextSlide = () => setActiveIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setActiveIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));

  return (
    <section className="py-24 md:py-40 bg-black relative overflow-hidden">
      
      {/* Background Decorator */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, gray 1px, transparent 0)', backgroundSize: '50px 50px' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8">
           <div className="max-w-3xl">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 mb-6"
              >
                <div className="w-12 h-[2px]" style={{ backgroundColor: primaryColor }}></div>
                <span className="text-gray-400 font-bold uppercase tracking-[0.4em] text-xs">Portfolio / Recent Works</span>
              </motion.div>
              <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-7xl font-black text-white leading-none uppercase tracking-tighter"
              >
                CRAFTING <br />
                <span style={{ color: primaryColor }}>LANDMARKS.</span>
              </motion.h2>
           </div>

           <div className="flex gap-4">
              <button onClick={prevSlide} className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-[#e4a11e] hover:border-[#e4a11e] hover:text-black transition-all">
                 <FaChevronLeft />
              </button>
              <button onClick={nextSlide} className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-[#e4a11e] hover:border-[#e4a11e] hover:text-black transition-all">
                 <FaChevronRight />
              </button>
           </div>
        </div>

        {/* Project Display */}
        <div className="relative h-[500px] md:h-[700px] group">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl"
            >
              {/* Background Image */}
              <img 
                src={projects[activeIndex].image} 
                alt={projects[activeIndex].title} 
                className="w-full h-full object-cover grayscale brightness-50"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>

              {/* Content Card */}
              <div className="absolute bottom-10 left-6 right-6 md:left-12 md:bottom-16 max-w-4xl">
                 <motion.div
                   initial={{ y: 30, opacity: 0 }}
                   animate={{ y: 0, opacity: 1 }}
                   transition={{ delay: 0.3 }}
                 >
                    <span className="inline-block px-4 py-2 bg-[#e4a11e] text-black text-[10px] font-black uppercase tracking-widest mb-6">
                      {projects[activeIndex].category} / {projects[activeIndex].location}
                    </span>
                    <h3 className="text-4xl md:text-7xl font-black text-white mb-6 uppercase tracking-tighter leading-tight">
                      {projects[activeIndex].title}
                    </h3>
                    <p className="text-gray-300 text-lg md:text-xl font-light max-w-2xl mb-10 leading-relaxed">
                      {projects[activeIndex].desc}
                    </p>

                    <div className="flex flex-wrap gap-6">
                       <Link to="/projects" className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-black uppercase tracking-widest text-xs hover:bg-[#e4a11e] transition-colors">
                          View Project <FaArrowRight />
                       </Link>
                       <a href={projects[activeIndex].pdf} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-8 py-4 border border-white/20 text-white font-black uppercase tracking-widest text-xs hover:bg-white/10 transition-colors">
                          View Specs (PDF) <FaFilePdf style={{ color: primaryColor }} />
                       </a>
                    </div>
                 </motion.div>
              </div>

              {/* Technical Indicator */}
              <div className="absolute top-10 right-10 hidden md:flex items-center gap-4 text-white/20">
                 <FaDraftingCompass className="text-4xl" />
                 <div className="h-[1px] w-24 bg-white/10"></div>
                 <span className="font-mono text-sm uppercase tracking-widest">ID-00{projects[activeIndex].id}</span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>

      {/* Background Vertical Text */}
      <div className="absolute left-10 bottom-0 opacity-[0.03] select-none pointer-events-none">
         <h2 className="text-[15vw] font-black text-white uppercase vertical-rl rotate-180 tracking-tighter">
           PORTFOLIO
         </h2>
      </div>

    </section>
  );
};

export default HomeProjects;
