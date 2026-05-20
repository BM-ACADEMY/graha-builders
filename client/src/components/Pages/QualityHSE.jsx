import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaClipboardCheck, FaUserCheck, FaShieldAlt, FaChartLine, FaDraftingCompass, FaHardHat } from 'react-icons/fa';
import { Helmet } from "react-helmet";

// --- DATA ---
const commitments = [
  {
    id: "HSE-01",
    title: "Strict Compliance",
    icon: <FaClipboardCheck />,
    desc: "Unwavering compliance with approved architectural drawings and technical specifications."
  },
  {
    id: "HSE-02",
    title: "Qualified Resources",
    icon: <FaUserCheck />,
    desc: "Strategic deployment of qualified manpower and certified construction materials."
  },
  {
    id: "HSE-03",
    title: "Safety First",
    icon: <FaShieldAlt />,
    desc: "Proactive safety protocols aligned with local Tamil Nadu building regulations."
  },
  {
    id: "HSE-04",
    title: "Continuous Monitoring",
    icon: <FaChartLine />,
    desc: "Real-time monitoring and systematic improvement of site activities and engineering standards."
  }
];

const QualityPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const primaryColor = "#e4a11e";

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800 selection:bg-orange-100 overflow-x-hidden">
      <Helmet>
        <title>Quality & HSE | Graha Builders - Standards of Excellence</title>
        <meta name="description" content="Graha Builders is committed to the highest standards of Quality, Health, Safety, and Environment in all our construction projects across Tamil Nadu."/>
        <link rel="canonical" href="https://grahabuilders.com/hse" />
      </Helmet>

      {/* ==========================
          SECTION 1: PREMIUM HERO
      ========================== */}
      <div className="relative w-full h-[350px] md:h-[500px] overflow-hidden flex items-center justify-center bg-black">
        <div className="absolute inset-0">
          <img
            src="https://media.licdn.com/dms/image/v2/C4D12AQGCjsrKXb3qVw/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1597749328800?e=2147483647&v=beta&t=65Xfyw3kbLbsR4d5vBItqi0Lc5xDfA8k5VAD66s2O5U"
            alt="HSE Hero"
            className="w-full h-full object-cover opacity-50 grayscale brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>
        </div>

        <div className="relative z-10 text-center px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="flex items-center justify-center gap-4 mb-6">
               <div className="w-12 h-[1px] bg-[#e4a11e]"></div>
               <span className="text-[#e4a11e] font-black tracking-[0.5em] uppercase text-xs">Compliance Standards</span>
               <div className="w-12 h-[1px] bg-[#e4a11e]"></div>
            </div>
            <h1 className="text-4xl md:text-7xl font-black text-white tracking-tighter mb-4 leading-none uppercase">
              QUALITY <br />
              <span style={{ color: primaryColor }}>& SAFETY.</span>
            </h1>
          </motion.div>
        </div>
      </div>

      {/* ==========================
          SECTION 2: POLICY STATEMENT
      ========================== */}
      <section className="py-24 md:py-40 relative">
        <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
             style={{ 
               backgroundImage: `linear-gradient(${primaryColor} 1px, transparent 1px), linear-gradient(90deg, ${primaryColor} 1px, transparent 1px)`,
               backgroundSize: '60px 60px' 
             }}>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-20 items-center max-w-6xl mx-auto">
             
             <div className="w-full lg:w-1/2">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                   <div className="flex items-center gap-4 mb-8">
                     <FaDraftingCompass className="text-2xl text-[#e4a11e]" />
                     <span className="text-gray-400 font-bold uppercase tracking-[0.3em] text-xs">Policy Index: QB-HSE-01</span>
                   </div>
                   <h2 className="text-4xl md:text-6xl font-black text-black mb-10 leading-tight tracking-tighter uppercase">
                     Our Commitment to <br />
                     <span className="italic" style={{ color: primaryColor }}>Absolute Excellence.</span>
                   </h2>
                   <div className="space-y-6 text-gray-600 text-lg md:text-xl font-light leading-relaxed">
                      <p>
                        At <span className="text-black font-black">Graha Builders</span>, quality is not just a checkbox—it is the foundation of our engineering identity. We believe that every structural project must be safe, sustainable, and built to endure.
                      </p>
                      <p>
                        We maintain high standards of quality, health, safety, and environmental responsibility by strictly following approved specifications, local regulations, and safe working practices across all operations in Tamil Nadu.
                      </p>
                   </div>
                </motion.div>
             </div>

             <div className="w-full lg:w-1/2">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="relative p-10 md:p-16 bg-black text-white rounded-sm shadow-2xl"
                >
                   <FaHardHat className="text-5xl mb-8 text-[#e4a11e]" />
                   <h3 className="text-2xl font-black uppercase tracking-widest mb-6">Zero-Accident Mindset</h3>
                   <p className="text-gray-400 text-lg leading-relaxed font-light mb-10">
                      Our safety culture is built on the principle of "Planning before Execution." Every site operation is audited to ensure the well-being of our team and the integrity of the project.
                   </p>
                   <div className="h-1 w-20 bg-[#e4a11e]"></div>
                </motion.div>
             </div>

          </div>
        </div>
      </section>

      {/* ==========================
          SECTION 3: CORE PILLARS
      ========================== */}
      <section className="py-24 md:py-40 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
             {commitments.map((item, index) => (
               <motion.div
                 key={item.id}
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: index * 0.1 }}
                 className="bg-white p-8 md:p-10 border border-gray-100 hover:border-[#e4a11e] transition-all duration-500 group shadow-lg hover:shadow-2xl"
               >
                  <span className="text-[10px] font-mono text-gray-400 mb-6 block uppercase tracking-widest">{item.id}</span>
                  <div className="text-3xl mb-8 text-[#e4a11e] group-hover:scale-110 transition-transform origin-left">
                     {item.icon}
                  </div>
                  <h4 className="text-xl font-black text-black mb-4 uppercase tracking-tight">{item.title}</h4>
                  <p className="text-sm text-gray-500 leading-relaxed font-light">{item.desc}</p>
                  
                  {/* Decorative Dot */}
                  <div className="mt-8 w-2 h-2 rounded-full bg-gray-100 group-hover:bg-[#e4a11e] transition-colors"></div>
               </motion.div>
             ))}
          </div>
        </div>
      </section>

      {/* FINAL STATEMENT */}
      <section className="py-20 bg-white border-t border-gray-100 text-center">
         <h4 className="text-2xl md:text-4xl font-black text-black uppercase tracking-tighter mb-4">Quality without Compromise. Safety without Shortcuts.</h4>
         <div className="w-16 h-1 bg-[#e4a11e] mx-auto mb-8"></div>
         <p className="text-gray-400 font-bold uppercase tracking-[0.5em] text-[10px]">The Graha Standard / HSE Compliance</p>
      </section>

    </div>
  );
};

export default QualityPage;