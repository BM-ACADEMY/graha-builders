import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaBriefcase, FaDraftingCompass, FaRulerHorizontal, FaChevronRight } from 'react-icons/fa';
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

const CareersPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const primaryColor = "#e4a11e";

  return (
    <div className="font-sans text-slate-800 bg-white relative selection:bg-orange-100 overflow-x-hidden">
      <Helmet>
        <title>Careers at Graha Builders | Join Our Engineering Team</title>
        <meta name="description" content="Build your career with Graha Builders. Explore job vacancies and exciting career opportunities in civil construction, MEP, and project management in Tamil Nadu."/>
        <link rel="canonical" href="https://grahabuilders.com/careers" />
      </Helmet>

      {/* ==========================
          SECTION 1: HERO BANNER
      ========================== */}
      <div className="relative w-full h-[350px] md:h-[500px] overflow-hidden flex items-center justify-center bg-black">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1920&auto=format&fit=crop&fm=webp"
            alt="Careers Hero Background"
            className="w-full h-full object-cover opacity-40 grayscale brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black"></div>
        </div>

        <div className="relative z-10 text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="flex items-center justify-center gap-4 mb-6">
               <div className="w-12 h-[1px] bg-[#e4a11e]"></div>
               <span className="text-[#e4a11e] font-black tracking-[0.5em] uppercase text-[10px] md:text-xs">Build Your Future</span>
               <div className="w-12 h-[1px] bg-[#e4a11e]"></div>
            </div>
            <h1 className="text-4xl md:text-7xl font-black text-white tracking-tighter mb-4 leading-[0.9] uppercase">
              CAREERS. <br />
              <span style={{ color: primaryColor }}>JOIN US.</span>
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
          SECTION 2: OPPORTUNITY OVERVIEW
      ========================== */}
      <section className="py-20 md:py-32 relative">
        <BlueprintBackground />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            
            {/* Image Side */}
            <div className="w-full lg:w-1/2 relative">
               <motion.div
                 initial={{ opacity: 0, scale: 0.95 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 viewport={{ once: true }}
                 className="relative z-10 rounded-sm overflow-hidden shadow-2xl border-4 border-white"
               >
                 <img
                   src="https://static.vecteezy.com/system/resources/thumbnails/073/219/325/small/magnifying-glass-focusing-on-the-word-vacancy-displayed-on-a-yellow-background-symbolizing-the-search-for-job-opportunities-and-new-employment-creating-a-sense-of-hope-and-anticipation-for-potential-c-photo.jpg"
                   alt="Join Our Team"
                   className="w-full h-[350px] md:h-[500px] object-cover"
                 />
               </motion.div>
            </div>

            {/* Content Side */}
            <div className="w-full lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <FaBriefcase className="text-2xl" style={{ color: primaryColor }} />
                  <h2 className="text-sm font-black uppercase tracking-[0.3em] text-gray-400">Opportunities</h2>
                </div>
                
                <h3 className="text-4xl md:text-5xl font-black text-black mb-8 leading-tight uppercase">
                  Shape the Future with <span style={{ color: primaryColor }}>Graha Builders</span>
                </h3>

                <div className="space-y-6 text-gray-600 text-base md:text-lg font-light leading-relaxed mb-10">
                  <p>
                    Are you looking for an exciting opportunity to grow professionally in the construction industry? At Graha Builders, we are constantly looking for talented and ambitious individuals to join our engineering and building teams.
                  </p>
                  
                  {/* Premium Styled Box Translating the Tanglish Requirement */}
                  <div className="p-6 md:p-8 bg-slate-50 border-l-4 border-[#e4a11e] rounded-sm">
                    <p className="font-bold text-black mb-2 text-lg">Looking for a Job Vacancy?</p>
                    <p className="text-gray-700 font-normal leading-relaxed">
                      If you are looking for any job vacancy or open position, please reach out to us using the contact details provided below. <strong>Please share your resume to this contact</strong> to get evaluated by our hiring team.
                    </p>
                  </div>

                  <p>
                    We welcome applications for roles including <strong>Civil Engineers, MEP Specialists, Site Supervisors, Draughtsmen, and Administrative professionals</strong>.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================
          SECTION 3: DIRECT CONTACT CARDS
      ========================== */}
      <section className="py-20 bg-black relative overflow-hidden text-white">
        {/* Massive Background Logo Watermark */}
        <div className="absolute inset-0 opacity-[0.03] select-none pointer-events-none flex items-center justify-center">
           <h2 className="text-[25vw] font-black uppercase tracking-tighter">GB-HR</h2>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mb-16 text-center mx-auto">
             <h2 className="text-sm font-bold text-[#e4a11e] uppercase tracking-[0.4em] mb-4">Direct Communication</h2>
             <h3 className="text-3xl md:text-5xl font-black mb-6 leading-tight uppercase tracking-tighter">
               GET IN TOUCH WITH OUR <br /> 
               <span style={{ color: primaryColor }}>HR & RECRUITMENT TEAM</span>
             </h3>
             <p className="text-gray-400 text-sm md:text-base font-light">
               Use the contact numbers or email address below to submit your details or inquire about active openings.
             </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Direct Phone Numbers */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="group p-8 border border-white/10 bg-white/5 hover:bg-[#e4a11e] hover:text-black transition-all duration-500 rounded-sm flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-mono opacity-50 mb-6 block">GB-SPEC/HR-PHONE</span>
                <div className="text-3xl mb-6 text-[#e4a11e] group-hover:text-black transition-colors">
                  <FaPhoneAlt />
                </div>
                <h4 className="text-xl font-black mb-4 uppercase">Direct Lines</h4>
                <p className="text-sm opacity-60 leading-relaxed mb-6">Call our recruitment department directly for instant job vacancy updates.</p>
              </div>
              <div className="flex flex-col gap-2 pt-4 border-t border-white/10 group-hover:border-black/10">
                <a href="tel:+919360367453" className="text-lg font-bold hover:underline">+91 93603 67453</a>
                <a href="tel:+919514429232" className="text-lg font-bold hover:underline">+91 95144 29232</a>
              </div>
            </motion.div>

            {/* Direct Email */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group p-8 border border-white/10 bg-white/5 hover:bg-[#e4a11e] hover:text-black transition-all duration-500 rounded-sm flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-mono opacity-50 mb-6 block">GB-SPEC/HR-EMAIL</span>
                <div className="text-3xl mb-6 text-[#e4a11e] group-hover:text-black transition-colors">
                  <FaEnvelope />
                </div>
                <h4 className="text-xl font-black mb-4 uppercase">Digital Submission</h4>
                <p className="text-sm opacity-65 leading-relaxed mb-6">
                  <strong>Please share your resume to this email contact.</strong> Feel free to attach your CV along with your portfolio or field of expertise.
                </p>
              </div>
              <div className="pt-4 border-t border-white/10 flex flex-col gap-1">
                <a href="mailto:grahabuilders@gmail.com" className="text-lg font-black tracking-wide hover:underline break-all">grahabuilders@gmail.com</a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ==========================
          SECTION 4: CALL TO ACTION
      ========================== */}
      <section className="py-20 bg-slate-50 border-t border-gray-100 text-center">
         <h4 className="text-2xl md:text-3xl font-black text-black uppercase tracking-tighter mb-4">Ready to build your career with us?</h4>
         <p className="text-gray-500 font-light mb-8 max-w-lg mx-auto text-sm md:text-base">
            Reach out through our consultation portal, or check out our office mapping directions.
         </p>
         <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
           <Link
             to="/contact"
             className="px-8 py-4 bg-[#e4a11e] text-black font-black uppercase tracking-widest text-xs hover:bg-black hover:text-white transition-all shadow-md"
           >
             Contact Portal
           </Link>
           <Link
             to="/about"
             className="px-8 py-4 bg-transparent border border-black/20 text-black font-black uppercase tracking-widest text-xs hover:bg-black hover:text-white hover:border-black transition-all"
           >
             Learn About Us <FaChevronRight className="inline ml-1" />
           </Link>
         </div>
      </section>
    </div>
  );
};

export default CareersPage;
