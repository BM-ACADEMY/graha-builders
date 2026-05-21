import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBuilding, FaHome, FaCity, FaFilePdf, FaDraftingCompass, FaArrowRight, FaPlay, FaTimes, FaChevronLeft, FaChevronRight, FaMapMarkerAlt, FaExpand, FaFilm, FaFilter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";

// --- ASSET IMPORTS ---
import img1 from '../../assets/WhatsApp Image 2026-05-12 at 6.48.14 PM.jpeg';
import img2 from '../../assets/WhatsApp Image 2026-05-12 at 6.48.15 PM (1).jpeg';
import img3 from '../../assets/WhatsApp Image 2026-05-12 at 6.48.15 PM.jpeg';
import img4 from '../../assets/WhatsApp Image 2026-05-12 at 6.48.16 PM (1).jpeg';
import img5 from '../../assets/WhatsApp Image 2026-05-12 at 6.48.16 PM.jpeg';
import img6 from '../../assets/WhatsApp Image 2026-05-12 at 6.48.17 PM (1).jpeg';
import img7 from '../../assets/WhatsApp Image 2026-05-12 at 6.48.17 PM.jpeg';
import img8 from '../../assets/WhatsApp Image 2026-05-12 at 6.48.18 PM (1).jpeg';
import img9 from '../../assets/WhatsApp Image 2026-05-12 at 6.48.18 PM.jpeg';
import img10 from '../../assets/WhatsApp Image 2026-05-12 at 6.48.19 PM (1).jpeg';
import img11 from '../../assets/WhatsApp Image 2026-05-12 at 6.48.19 PM.jpeg';
import img12 from '../../assets/WhatsApp Image 2026-05-12 at 6.48.20 PM (1).jpeg';
import img13 from '../../assets/WhatsApp Image 2026-05-12 at 6.48.20 PM.jpeg';
import img14 from '../../assets/WhatsApp Image 2026-05-12 at 6.48.21 PM (1).jpeg';
import img15 from '../../assets/WhatsApp Image 2026-05-12 at 6.48.21 PM (2).jpeg';
import img16 from '../../assets/WhatsApp Image 2026-05-12 at 6.48.21 PM.jpeg';
import img17 from '../../assets/site/WhatsApp Image 2026-05-12 at 6.48.51 PM.jpeg';
import img18 from '../../assets/site/WhatsApp Image 2026-05-12 at 6.48.52 PM.jpeg';
import img19 from '../../assets/site/WhatsApp Image 2026-05-12 at 6.49.07 PM.jpeg';
import img20 from '../../assets/site/WhatsApp Image 2026-05-12 at 6.49.52 PM.jpeg';
import img21 from '../../assets/site/WhatsApp Image 2026-05-12 at 6.50.02 PM.jpeg';
import img22 from '../../assets/site/WhatsApp Image 2026-05-12 at 7.07.13 PM.jpeg';

import siteImg1 from '../../assets/site/3cent-house-design-03.jpg';
import siteImg2 from '../../assets/site/9205b11c-90cc-4350-91ba-2dad2da4546b.jpg';
import siteImg3 from '../../assets/site/DSC00003.avif';
import siteImg4 from '../../assets/site/c9888514b43b799e592ceab19175e3a5.jpg';
import siteImg5 from '../../assets/site/high-ceiling-house-33-1024x681.jpg';
import siteImg6 from '../../assets/site/simple-flat-roof-village-house-design_0_1200.jpg.webp';

import video1 from '../../assets/WhatsApp Video 2026-05-12 at 6.48.54 PM (1).mp4';
import video2 from '../../assets/WhatsApp Video 2026-05-12 at 6.48.54 PM.mp4';

// --- VECTOR BACKGROUND COMPONENT ---
const BlueprintBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
    <motion.div
      animate={{ backgroundPosition: ["0px 0px", "40px 40px"] }}
      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      className="absolute inset-0 opacity-[0.02]"
      style={{
        backgroundImage: `linear-gradient(#e4a11e 1px, transparent 1px), linear-gradient(90deg, #e4a11e 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }}
    />
    <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white"></div>
  </div>
);

const ProjectsPage = () => {
  const [selectedTab, setSelectedTab] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const primaryColor = "#e4a11e";

  // --- MINIMALIST PROJECT ASSETS ---
  const projectsData = [
    { id: "PRJ-01", category: "interior", type: "image", src: img3, pdf: "/src/assets/AshokHouse_Elevation01.pdf" },
    { id: "PRJ-02", category: "interior", type: "image", src: img5, pdf: "/src/assets/VimalNishitha_Elevation01.pdf" },
    { id: "PRJ-03", category: "interior", type: "image", src: img9, pdf: "/src/assets/ELEVATION TN.pdf" },
    { id: "PRJ-04", category: "interior", type: "image", src: img1 },
    { id: "PRJ-05", category: "interior", type: "image", src: img2 },
    { id: "PRJ-06", category: "interior", type: "image", src: img4 },
    { id: "PRJ-07", category: "interior", type: "image", src: img6 },
    { id: "PRJ-08", category: "interior", type: "image", src: img7 },
    { id: "PRJ-09", category: "interior", type: "image", src: img8 },
    { id: "PRJ-10", category: "interior", type: "image", src: img10 },
    { id: "PRJ-11", category: "interior", type: "image", src: img11 },
    { id: "PRJ-12", category: "interior", type: "image", src: img12 },
    { id: "PRJ-13", category: "interior", type: "image", src: img13 },
    { id: "PRJ-14", category: "interior", type: "image", src: img14 },
    { id: "PRJ-15", category: "interior", type: "image", src: img15 },
    { id: "PRJ-16", category: "interior", type: "image", src: img16 },
    { id: "PRJ-17", category: "exterior", type: "image", src: img17 },
    { id: "PRJ-18", category: "exterior", type: "image", src: img19 },
    { id: "PRJ-19", category: "exterior", type: "image", src: img20 },
    { id: "PRJ-20", category: "exterior", type: "image", src: img21 },
    { id: "PRJ-21", category: "exterior", type: "image", src: img22 },
    { id: "PRJ-22", category: "video", type: "video", src: video1 },
    { id: "PRJ-23", category: "video", type: "video", src: video2 },
    { id: "PRJ-24", category: "exterior", type: "image", src: siteImg1 },
    { id: "PRJ-25", category: "exterior", type: "image", src: siteImg2 },
    { id: "PRJ-26", category: "exterior", type: "image", src: siteImg3 },
    { id: "PRJ-27", category: "exterior", type: "image", src: siteImg4 },
    { id: "PRJ-28", category: "exterior", type: "image", src: siteImg5 },
    { id: "PRJ-29", category: "exterior", type: "image", src: siteImg6 }
  ];

  // --- FILTER SYSTEM ---
  const filteredProjects = projectsData.filter(project => {
    if (selectedTab === 'all') return true;
    return project.category === selectedTab;
  });

  const openLightbox = (projectItem) => {
    const index = filteredProjects.findIndex(p => p.id === projectItem.id);
    setLightboxIndex(index);
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev + 1) % filteredProjects.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length);
  };

  // Clean Responsive Grid Styling
  const getGridClasses = () => {
    return "col-span-1 h-[300px] md:h-[400px]";
  };

  const tabs = [
    { id: 'all', name: 'All' },
    { id: 'interior', name: 'Interior' },
    { id: 'exterior', name: 'Exterior' },
    { id: 'video', name: 'Video Logs' }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800 selection:bg-orange-100 overflow-x-hidden">
      <Helmet>
        <title>Projects Archive | Graha Builders - Signature Structures</title>
        <meta name="description" content="Explore our rich interactive portfolio of modern homes, commercial hubs, traditional structures, and stunning interiors in Tamil Nadu."/>
        <link rel="canonical" href="https://grahabuilders.com/projects" />
      </Helmet>

      {/* ==========================
          SECTION 1: HERO ARCHIVE
      ========================== */}
      <div className="relative w-full h-[350px] md:h-[500px] overflow-hidden flex items-center justify-center bg-black">
        <div className="absolute inset-0">
          <img
            src={img21}
            alt="Projects Hero"
            className="w-full h-full object-cover opacity-40 grayscale brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black"></div>
        </div>

        <div className="relative z-10 text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="flex items-center justify-center gap-4 mb-6">
               <div className="w-12 h-[1px] bg-[#e4a11e]"></div>
               <span className="text-[#e4a11e] font-black tracking-[0.5em] uppercase text-xs">ARCHITECTURAL PORTFOLIO</span>
               <div className="w-12 h-[1px] bg-[#e4a11e]"></div>
            </div>
            <h1 className="text-4xl md:text-7xl font-black text-white tracking-tighter mb-4 leading-none uppercase">
              WORK <br />
              <span style={{ color: primaryColor }}>ARCHIVE.</span>
            </h1>
          </motion.div>
        </div>
      </div>

      {/* ==========================
          SECTION 2: DYNAMIC GRID GALLERY
      ========================== */}
      <section className="py-20 md:py-32 relative">
        <BlueprintBackground />

        <div className="container mx-auto px-6 relative z-10">
          
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-8">
            <div className="max-w-3xl">
               <h2 className="text-sm font-bold text-[#e4a11e] uppercase tracking-[0.4em] mb-4">Interactive Portfolio</h2>
               <h3 className="text-3xl md:text-5xl font-black text-black leading-tight uppercase tracking-tighter">
                 Every Detail <br />
                 <span className="italic" style={{ color: primaryColor }}>Casted To Perfection.</span>
               </h3>
            </div>

            {/* Filter Buttons */}
            <div className="flex items-center gap-2 flex-wrap">
              <div className="flex items-center gap-2 text-slate-400 font-bold uppercase tracking-widest text-[10px] mr-2">
                <FaFilter className="text-slate-300 text-sm" /> FILTERS:
              </div>
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setSelectedTab(tab.id)}
                  className={`px-6 py-2.5 rounded-full font-bold uppercase tracking-wider text-[11px] transition-all duration-300 border ${
                    selectedTab === tab.id
                      ? 'bg-[#e4a11e] border-[#e4a11e] text-white shadow-md'
                      : 'bg-white border-gray-200 text-slate-500 hover:border-gray-300 hover:text-slate-800'
                  }`}
                >
                  {tab.name}
                </button>
              ))}
            </div>
          </div>

          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 auto-rows-max"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                  className={`group relative overflow-hidden bg-black rounded-xl cursor-pointer ${getGridClasses(index)} shadow-xl hover:shadow-2xl border border-gray-100`}
                  onClick={() => openLightbox(project)}
                >
                  {/* Background Media */}
                  <div className="absolute inset-0 z-0">
                    {project.type === 'video' ? (
                      <div className="w-full h-full relative">
                        <video 
                          src={project.src}
                          className="w-full h-full object-cover opacity-85 group-hover:scale-105 transition-transform duration-700"
                          muted
                          loop
                          playsInline
                        />
                        {/* Static Overlay Play Icon */}
                        <div className="absolute inset-0 flex items-center justify-center z-10">
                          <div className="w-16 h-16 rounded-full bg-black/40 backdrop-blur-md border border-white/20 flex items-center justify-center text-white text-lg group-hover:bg-[#e4a11e] group-hover:text-black transition-all transform group-hover:scale-110">
                            <FaPlay className="ml-1" />
                          </div>
                        </div>
                      </div>
                    ) : (
                      <img 
                        src={project.src}
                        alt={project.title}
                        loading="lazy"
                        className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                      />
                    )}
                    {/* Shadow Gradient Bottom */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent group-hover:from-black/100 transition-all duration-500"></div>
                  </div>

                  {/* Top Metadata Tags */}
                  <div className="absolute top-6 left-6 right-6 flex justify-between items-center z-10">
                    <span className="text-[9px] font-mono text-[#e4a11e] tracking-widest bg-black/60 px-3 py-1.5 rounded-full border border-[#e4a11e]/20 backdrop-blur-sm uppercase">
                      {project.id}
                    </span>
                    <span className="text-[9px] font-mono text-white/80 tracking-widest bg-black/40 px-3 py-1.5 rounded-full backdrop-blur-sm uppercase flex items-center gap-1.5">
                      {project.type === 'video' ? <FaFilm className="text-yellow-500" /> : <FaExpand className="text-white/60" />}
                      {project.category}
                    </span>
                  </div>

                  {/* Hover Floating Technical Crosshairs */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-[0.05] transition-opacity duration-700 pointer-events-none scale-150 z-10">
                     <FaDraftingCompass className="text-white text-9xl" />
                  </div>

                  {/* Left Active Line Marker */}
                  <div className="absolute left-0 bottom-0 top-0 w-[3px] bg-[#e4a11e] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>



          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-20 bg-slate-50 border border-gray-100 rounded-xl">
               <FaDraftingCompass className="text-6xl text-gray-300 mx-auto mb-6 spin-slow" />
               <p className="text-gray-400 font-bold uppercase tracking-widest text-xs">No matching projects found in this archive segment.</p>
            </div>
          )}

        </div>
      </section>

      {/* ==========================
          SECTION 3: HIGHLIGHT BANNER
      ========================== */}
      <section className="py-24 bg-black text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, gray 1px, transparent 0)', backgroundSize: '40px 40px' }}>
        </div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-black mb-8 uppercase tracking-tighter">
              Looking for a custom <span style={{ color: primaryColor }}>Architectural Plan?</span>
            </h2>
            <p className="text-gray-400 mb-12 max-w-2xl mx-auto text-lg font-light leading-relaxed">
              We design premium elevations, structural engineering drawings, and complete architectural documents customized exactly to your land boundaries.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-6 px-12 py-5 bg-[#e4a11e] text-black font-black uppercase tracking-[0.3em] text-sm hover:bg-white transition-all transform hover:-translate-y-1"
            >
              Consult with Our Team
              <FaArrowRight />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* --- PREMIUM LIGHTBOX MODAL --- */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex flex-col justify-between"
            style={{ backgroundColor: '#000000' }}
            onClick={() => setLightboxIndex(null)}
          >
             {/* Header */}
             <div className="flex justify-between items-center p-6 md:p-8 z-10 bg-black/40 backdrop-blur-md border-b border-white/5">
                <div>
                  <span className="text-[10px] font-mono text-[#e4a11e] uppercase tracking-widest bg-black/60 px-3 py-1.5 rounded-full border border-yellow-500/20">
                    {filteredProjects[lightboxIndex]?.id}
                  </span>
                  <h4 className="text-sm font-black uppercase tracking-[0.2em] text-white mt-1.5">
                     {filteredProjects[lightboxIndex]?.category} segment
                  </h4>
                </div>
                <div className="flex items-center gap-8">
                   <span className="text-xs font-mono text-gray-500">
                      {lightboxIndex + 1} of {filteredProjects.length}
                   </span>
                   <button onClick={() => setLightboxIndex(null)} className="text-2xl text-white hover:text-[#e4a11e] transition-colors">
                      <FaTimes />
                   </button>
                </div>
             </div>

             {/* Main Content Area */}
             <div className="flex-grow flex items-center justify-center p-4 relative">
                {/* Controls */}
                <button 
                  onClick={prevImage}
                  className="absolute left-4 md:left-10 z-20 w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-white transition-all bg-black/40 hover:bg-black/80"
                >
                   <FaChevronLeft />
                </button>
                <button 
                  onClick={nextImage}
                  className="absolute right-4 md:right-10 z-20 w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-white transition-all bg-black/40 hover:bg-black/80"
                >
                   <FaChevronRight />
                </button>

                {/* Enlarged Media Container */}
                <motion.div
                  key={lightboxIndex}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="max-w-5xl max-h-[65vh] w-full flex items-center justify-center p-2"
                  onClick={(e) => e.stopPropagation()}
                >
                   {filteredProjects[lightboxIndex]?.type === 'video' ? (
                     <video
                       src={filteredProjects[lightboxIndex]?.src}
                       className="max-h-[60vh] rounded-lg shadow-2xl border border-white/10"
                       controls
                       autoPlay
                       playsInline
                     />
                   ) : (
                     <img 
                       src={filteredProjects[lightboxIndex]?.src} 
                       className="max-h-[60vh] max-w-full object-contain rounded-lg shadow-2xl border border-white/10 bg-black/50"
                       alt="Enlarged Project"
                     />
                   )}
                </motion.div>
             </div>

             {/* Footer Metadata */}
             {filteredProjects[lightboxIndex]?.pdf && (
               <div className="p-8 text-center bg-black/40 border-t border-white/5 backdrop-blur-md">
                  <a
                    href={filteredProjects[lightboxIndex]?.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#e4a11e] text-black font-black uppercase tracking-widest text-[10px] hover:bg-white transition-colors rounded-sm"
                  >
                    <FaFilePdf /> Download Technical Specifications Sheet
                  </a>
               </div>
             )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* bottom technical tagline */}
      <section className="py-16 bg-slate-50 border-t border-gray-100 text-center">
         <h4 className="text-xl md:text-3xl font-black text-black uppercase tracking-tighter mb-3">Engineering Landmarks Since 2020.</h4>
         <div className="w-12 h-1 bg-[#e4a11e] mx-auto mb-6"></div>
         <p className="text-gray-400 font-bold uppercase tracking-[0.5em] text-[9px]">The Graha Standard / Registered Construction Trademark</p>
      </section>
    </div>
  );
};

export default ProjectsPage;
