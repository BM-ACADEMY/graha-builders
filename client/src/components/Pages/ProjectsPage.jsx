import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBuilding, FaHome, FaCity, FaFilePdf, FaDraftingCompass, FaArrowRight, FaPlay, FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
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
import img17 from '../../assets/WhatsApp Image 2026-05-12 at 6.48.51 PM.jpeg';
import img18 from '../../assets/WhatsApp Image 2026-05-12 at 6.48.52 PM.jpeg';
import img19 from '../../assets/WhatsApp Image 2026-05-12 at 6.49.07 PM.jpeg';
import img20 from '../../assets/WhatsApp Image 2026-05-12 at 6.49.52 PM.jpeg';
import img21 from '../../assets/WhatsApp Image 2026-05-12 at 6.50.02 PM.jpeg';
import img22 from '../../assets/WhatsApp Image 2026-05-12 at 7.07.13 PM.jpeg';

import video1 from '../../assets/WhatsApp Video 2026-05-12 at 6.48.54 PM (1).mp4';
import video2 from '../../assets/WhatsApp Video 2026-05-12 at 6.48.54 PM.mp4';

const ProjectsPage = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const primaryColor = "#e4a11e";

  const mainProjects = [
    {
      id: 1,
      title: "Ashok House Elevation",
      category: "Residential Construction",
      location: "Tiruvannamalai",
      image: img3,
      pdf: "/src/assets/AshokHouse_Elevation01.pdf",
      icon: <FaHome />
    },
    {
      id: 2,
      title: "Vimal Nishitha Project",
      category: "Apartment Building",
      location: "Chennai",
      image: img5,
      pdf: "/src/assets/VimalNishitha_Elevation01.pdf",
      icon: <FaCity />
    },
    {
      id: 3,
      title: "ELEVATION TN Development",
      category: "Commercial Complex",
      location: "Tamil Nadu",
      image: img9,
      pdf: "/src/assets/ELEVATION TN.pdf",
      icon: <FaBuilding />
    }
  ];

  const galleryImages = [
    img1, img2, img4, img6, img7, img8, img10, img11, img12, img13, img14, img15, img16, img17, img18, img19, img20, img21, img22
  ];

  // Combine for Lightbox
  const allImages = [...mainProjects.map(p => p.image), ...galleryImages];

  const videos = [
    { id: 1, src: video1, title: "On-Site Operations 01" },
    { id: 2, src: video2, title: "On-Site Operations 02" }
  ];

  const openLightbox = (img) => {
    const index = allImages.indexOf(img);
    setLightboxIndex(index);
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev + 1) % allImages.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800 selection:bg-orange-100 overflow-x-hidden">
      <Helmet>
        <title>Portfolio | Graha Builders - Construction & Site Operations</title>
        <meta name="description" content="View our complete project portfolio, site videos, and architectural elevations across Tamil Nadu."/>
        <link rel="canonical" href="https://grahabuilders.com/projects" />
      </Helmet>

      {/* Hero */}
      <div className="relative w-full h-[300px] md:h-[450px] overflow-hidden flex items-center justify-center bg-black">
        <div className="absolute inset-0">
          <img
            src={img21}
            alt="Projects Hero"
            className="w-full h-full object-cover opacity-50 grayscale brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black"></div>
        </div>

        <div className="relative z-10 text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="flex items-center justify-center gap-4 mb-6">
               <div className="w-12 h-[1px] bg-[#e4a11e]"></div>
               <span className="text-[#e4a11e] font-black tracking-[0.5em] uppercase text-xs">Portfolio & Operations</span>
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
          SECTION 2: FEATURED PROJECTS
      ========================== */}
      <section className="py-24 md:py-40">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-20 md:mb-32">
             <h2 className="text-sm font-bold text-[#e4a11e] uppercase tracking-[0.4em] mb-6">Project Documentation</h2>
             <h3 className="text-4xl md:text-6xl font-black text-black leading-tight uppercase tracking-tighter">
               Signature <br />
               <span className="italic" style={{ color: primaryColor }}>Developments.</span>
             </h3>
          </div>

          <div className="space-y-24 md:space-y-40">
             {mainProjects.map((project, index) => (
               <motion.div
                 key={project.id}
                 initial={{ opacity: 0, y: 50 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-20`}
               >
                  <div 
                    className="w-full lg:w-3/5 relative group cursor-pointer"
                    onClick={() => openLightbox(project.image)}
                  >
                     <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
                        <img 
                          src={project.image} 
                          alt={project.title} 
                          className="w-full h-[400px] md:h-[550px] object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                     </div>
                     <div className="absolute -top-6 -left-6 w-full h-full border-2 border-gray-100 rounded-3xl -z-10 group-hover:border-[#e4a11e]/20 transition-colors"></div>
                  </div>

                  <div className="w-full lg:w-2/5">
                     <div className="flex items-center gap-4 mb-6">
                        <div className="text-3xl text-[#e4a11e]">{project.icon}</div>
                        <span className="text-xs font-black uppercase tracking-[0.3em] text-gray-400">{project.category}</span>
                     </div>
                     <h4 className="text-3xl md:text-5xl font-black text-black mb-6 uppercase tracking-tighter leading-tight">
                        {project.title}
                     </h4>
                     <p className="text-gray-500 text-lg md:text-xl font-light mb-10 leading-relaxed">
                        Precision engineering and architectural excellence delivered in {project.location}.
                     </p>
                     
                     <div className="flex flex-col sm:flex-row gap-4">
                        <a href={project.pdf} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-black text-white font-black uppercase tracking-widest text-[10px] hover:bg-[#e4a11e] hover:text-black transition-all">
                           Technical Specs <FaFilePdf />
                        </a>
                     </div>
                  </div>
               </motion.div>
             ))}
          </div>
        </div>
      </section>

      {/* ==========================
          SECTION 3: SITE VIDEOS
      ========================== */}
      <section className="py-24 md:py-40 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
             <h2 className="text-sm font-bold text-[#e4a11e] uppercase tracking-[0.4em] mb-6">Live Operations</h2>
             <h3 className="text-4xl md:text-6xl font-black text-black leading-tight uppercase tracking-tighter">
               Site <span className="italic" style={{ color: primaryColor }}>Footage.</span>
             </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
             {videos.map((video) => (
               <motion.div
                 key={video.id}
                 initial={{ opacity: 0, scale: 0.95 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 viewport={{ once: true }}
                 className="relative group aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl cursor-pointer"
                 onClick={() => setSelectedVideo(video.src)}
               >
                  <video 
                    src={video.src} 
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity"
                    muted
                    loop
                    playsInline
                    onMouseOver={(e) => e.target.play()}
                    onMouseOut={(e) => { e.target.pause(); e.target.currentTime = 0; }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                     <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white text-2xl group-hover:bg-[#e4a11e] group-hover:text-black transition-all">
                        <FaPlay />
                     </div>
                  </div>
                  <div className="absolute bottom-6 left-6">
                     <span className="text-[10px] font-black text-[#e4a11e] uppercase tracking-widest">Video Archive / {video.title}</span>
                  </div>
               </motion.div>
             ))}
          </div>
        </div>
      </section>

      {/* ==========================
          SECTION 4: COMPLETE GALLERY
      ========================== */}
      <section className="py-24 md:py-40 bg-black text-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
             <div>
                <h2 className="text-sm font-bold text-[#e4a11e] uppercase tracking-[0.4em] mb-6">Comprehensive Archive</h2>
                <h3 className="text-4xl md:text-7xl font-black mb-0 uppercase tracking-tighter">
                  Every <span className="italic text-[#e4a11e]">Detail.</span>
                </h3>
             </div>
             <p className="text-gray-500 max-w-sm text-right">A full visual documentation of our projects across various stages of completion.</p>
          </div>

          <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
             {galleryImages.map((img, index) => (
               <motion.div
                 key={index}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: (index % 10) * 0.05 }}
                 className="relative group rounded-xl overflow-hidden bg-white/5 border border-white/5 cursor-pointer"
                 onClick={() => openLightbox(img)}
               >
                  <img 
                    src={img} 
                    alt={`Gallery ${index}`} 
                    className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors"></div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                     <FaDraftingCompass className="text-[#e4a11e]" />
                  </div>
               </motion.div>
             ))}
          </div>
        </div>
      </section>

      {/* --- LIGHTBOX MODAL --- */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-white flex flex-col"
            onClick={() => setLightboxIndex(null)}
          >
            {/* Header */}
            <div className="flex justify-between items-center p-6 md:p-10 z-10">
               <h4 className="text-xs font-black uppercase tracking-[0.4em] text-gray-400">
                  Project View / {mainProjects[lightboxIndex]?.title || "Detail Archive"}
               </h4>
               <div className="flex items-center gap-8">
                  <span className="text-xs font-mono text-gray-300">
                     {lightboxIndex + 1} of {allImages.length}
                  </span>
                  <button onClick={() => setLightboxIndex(null)} className="text-2xl text-black hover:text-[#e4a11e] transition-colors">
                     <FaTimes />
                  </button>
               </div>
            </div>

            {/* Main Content */}
            <div className="flex-grow flex items-center justify-center p-4 relative">
               {/* Controls */}
               <button 
                 onClick={prevImage}
                 className="absolute left-4 md:left-10 z-20 w-14 h-14 rounded-full border border-gray-100 flex items-center justify-center text-gray-300 hover:text-black hover:border-black transition-all"
               >
                  <FaChevronLeft />
               </button>
               <button 
                 onClick={nextImage}
                 className="absolute right-4 md:right-10 z-20 w-14 h-14 rounded-full border border-gray-100 flex items-center justify-center text-gray-300 hover:text-black hover:border-black transition-all"
               >
                  <FaChevronRight />
               </button>

               {/* Image */}
               <motion.div
                 key={lightboxIndex}
                 initial={{ opacity: 0, scale: 0.9 }}
                 animate={{ opacity: 1, scale: 1 }}
                 exit={{ opacity: 0, scale: 0.9 }}
                 transition={{ duration: 0.4 }}
                 className="max-w-6xl max-h-[70vh] shadow-2xl rounded-2xl overflow-hidden"
               >
                  <img 
                    src={allImages[lightboxIndex]} 
                    className="w-full h-full object-contain bg-white"
                    alt="Enlarged Project"
                    onClick={(e) => e.stopPropagation()}
                  />
               </motion.div>
            </div>

            {/* Footer Metadata */}
            <div className="p-10 text-center border-t border-gray-50">
               <p className="text-[10px] font-black uppercase tracking-[0.5em] text-gray-300">The Graha Standard / Architectural Documentation</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Video Modal Overlay */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-20"
            onClick={() => setSelectedVideo(null)}
          >
            <button className="absolute top-10 right-10 text-white text-3xl hover:text-[#e4a11e]">
               <FaTimes />
            </button>
            <video 
              src={selectedVideo} 
              className="max-w-full max-h-full shadow-2xl rounded-lg"
              controls
              autoPlay
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <section className="py-20 bg-slate-50 border-t border-gray-100 text-center">
         <h4 className="text-2xl md:text-4xl font-black text-black uppercase tracking-tighter mb-4">Building the Future, Preserving the Past.</h4>
         <div className="w-16 h-1 bg-[#e4a11e] mx-auto mb-8"></div>
         <p className="text-gray-400 font-bold uppercase tracking-[0.5em] text-[10px]">The Graha Standard / Complete Archive</p>
      </section>
    </div>
  );
};

export default ProjectsPage;
