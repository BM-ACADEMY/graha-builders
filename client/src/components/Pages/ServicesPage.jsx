import React, { useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaHome, FaBuilding, FaPaintRoller, FaTools, FaCity, FaGopuram, FaTint, FaArrowRight, FaDraftingCompass, FaRulerHorizontal } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";

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

const ServicesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { scrollY } = useScroll();
  const yHero = useTransform(scrollY, [0, 500], [0, 150]);
  const opacityHero = useTransform(scrollY, [0, 300], [1, 0]);

  // 🎨 BRAND COLORS
  const primaryColor = "#e4a11e";

  const services = [
    {
      id: "SRV-01",
      title: "Residential Buildings",
      desc: "We turn the vision of a \"dream home\" into a structural reality. Our services focus on creating bespoke single-family homes that reflect unique lifestyles with high-quality craftsmanship.",
      icon: <FaHome />,
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=800&auto=format&fit=crop&fm=webp"
    },
    {
      id: "SRV-02",
      title: "Commercial Buildings",
      desc: "Architecture that means business. We design and construct commercial spaces—including offices, retail outlets, and warehouses—that optimize workflow and professional aesthetics.",
      icon: <FaBuilding />,
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop&fm=webp"
    },
    {
      id: "SRV-03",
      title: "Modern Interior Works",
      desc: "Beauty meets functionality. Our interior team specializes in contemporary design, focusing on clean lines, smart lighting, ergonomic layouts, and high-end finishes.",
      icon: <FaPaintRoller />,
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop"
    },
    {
      id: "SRV-04",
      title: "Renovation & Rehabilitation",
      desc: "Giving new life to existing structures. We bridge the gap between old and new, focusing on structural reinforcement, spatial reconfiguration, and aesthetic upgrades.",
      icon: <FaTools />,
      image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?q=80&w=800&auto=format&fit=crop&fm=webp"
    },
    {
      id: "SRV-05",
      title: "Apartment Buildings",
      desc: "High-density living solutions. We manage complex multi-family residential projects, balancing maximized floor-area ratios with modern amenities and communal spaces.",
      icon: <FaCity />,
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1935&auto=format&fit=crop"
    },
    {
      id: "SRV-06",
      title: "Traditional Buildings",
      desc: "Preserving the soul of architecture. We respect classical techniques and local heritage, utilizing authentic materials and time-honored craftsmanship.",
      icon: <FaGopuram />,
      image: "https://assets.architecturaldigest.in/photos/69d0e1ac1ae17dc7162356ba/16:9/w_1616,h_909,c_limit/Untitled%20design%20(20).png"
    },
    {
      id: "SRV-07",
      title: "Waterproofing",
      desc: "Ultimate protection for your investment. We provide advanced waterproofing solutions for roofs, basements, and facades using high-grade membranes and sealants.",
      icon: <FaTint />,
      image: "https://paintmywalls.in/wp-content/uploads/2024/02/Reparing-Cracks-and-Damages-1024x683.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800 selection:bg-orange-100 overflow-x-hidden">
      <Helmet>
        <title>Our Services | Graha Builders - Construction Excellence</title>
        <meta name="description" content="Explore the wide range of construction services offered by Graha Builders, including Residential, Commercial, Interior, Renovation, and more in Tamil Nadu."/>
        <link rel="canonical" href="https://grahabuilders.com/services" />
      </Helmet>

      {/* ==========================
          SECTION 1: HERO BANNER
      ========================== */}
      <div className="relative w-full h-[350px] md:h-[500px] overflow-hidden flex items-center justify-center bg-black">
        <motion.div
          style={{ y: yHero, opacity: opacityHero }}
          className="absolute inset-0 z-0"
        >
          <img
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1920&auto=format&fit=crop&fm=webp"
            alt="Services Hero"
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
               <span className="text-[#e4a11e] font-black tracking-[0.5em] uppercase text-xs md:text-sm">Expert Solutions</span>
               <div className="w-12 h-[1px] bg-[#e4a11e]"></div>
            </div>
            <h1 className="text-4xl md:text-7xl font-black text-white tracking-tighter mb-4 leading-none uppercase">
              OUR <br />
              <span style={{ color: primaryColor }}>SERVICES.</span>
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
          SECTION 2: SERVICES GRID
      ========================== */}
      <section className="py-24 md:py-40 relative">
        <BlueprintBackground />
        
        <div className="container mx-auto px-6 relative z-10">
          
          {/* Header */}
          <div className="max-w-3xl mb-20 md:mb-32">
             <h2 className="text-sm font-bold text-[#e4a11e] uppercase tracking-[0.4em] mb-6">Service Catalog / 2024</h2>
             <h3 className="text-4xl md:text-6xl font-black text-black leading-tight uppercase tracking-tighter">
               Comprehensive <br />
               <span className="italic" style={{ color: primaryColor }}>Construction Wings.</span>
             </h3>
          </div>

          {/* GRID */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group relative bg-white border border-gray-100 rounded-sm overflow-hidden hover:border-[#e4a11e]/50 transition-all duration-500 shadow-xl hover:shadow-2xl"
              >
                {/* Technical Top Bar */}
                <div className="px-6 py-3 bg-slate-50 border-b border-gray-100 flex justify-between items-center group-hover:bg-[#e4a11e]/10 transition-colors">
                   <span className="text-[10px] font-mono text-gray-400">{service.id}</span>
                   <div className="w-10 h-[1px] bg-gray-200"></div>
                </div>

                {/* Card Image Area */}
                <div className="h-56 overflow-hidden relative">
                   <img 
                    src={service.image} 
                    alt={service.title} 
                    loading="lazy"
                    className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-110 transition-all duration-700"
                   />
                   <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                   
                   {/* Icon Floating */}
                   <div className="absolute bottom-6 right-6 w-14 h-14 bg-white shadow-2xl flex items-center justify-center text-2xl rounded-sm text-black group-hover:bg-[#e4a11e] group-hover:text-black transition-all transform group-hover:-translate-y-2">
                      {service.icon}
                   </div>
                </div>

                {/* Content Area */}
                <div className="p-8 md:p-10">
                  <h4 className="text-2xl font-black text-black mb-4 uppercase tracking-tight group-hover:text-[#e4a11e] transition-colors">
                    {service.title}
                  </h4>
                  <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-8 font-light">
                    {service.desc}
                  </p>
                </div>

                {/* Bottom Border Decorator */}
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#e4a11e] group-hover:w-full transition-all duration-700"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================
          SECTION 3: CONTACT CTA
      ========================== */}
      <section className="py-24 bg-black text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, gray 1px, transparent 0)', backgroundSize: '40px 40px' }}>
        </div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-black mb-8 uppercase tracking-tighter">
              Ready to <span style={{ color: primaryColor }}>Build Your Legacy?</span>
            </h2>
            <p className="text-gray-400 mb-12 max-w-2xl mx-auto text-lg font-light leading-relaxed">
              Whether it's a traditional home or a modern commercial hub, our team is ready to deliver excellence from plan to finish.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-6 px-12 py-5 bg-[#e4a11e] text-black font-black uppercase tracking-[0.3em] text-sm hover:bg-white transition-all transform hover:-translate-y-1"
            >
              Get a Free Consultation
              <FaArrowRight />
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default ServicesPage;
