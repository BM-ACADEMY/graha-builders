import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaCheckCircle, FaExclamationCircle, FaDraftingCompass, FaClock, FaInstagram } from 'react-icons/fa';
import axios from 'axios';
import { Helmet } from "react-helmet";

const ContactPage = () => {
  const API_URL = import.meta.env.VITE_API_URL;
  const primaryColor = "#e4a11e";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState({ loading: false, success: false, error: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    if (name === 'phone') {
      // Validate: Numbers only and max 10 length
      const numericValue = value.replace(/\D/g, '').slice(0, 10);
      setFormData(prev => ({ ...prev, [name]: numericValue }));
    } else if (name === 'email') {
      // Force lowercase for email
      setFormData(prev => ({ ...prev, [name]: value.toLowerCase() }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Final Email Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus({ loading: false, success: false, error: 'Please enter a valid email address.' });
      return;
    }

    // Phone Length Validation
    if (formData.phone.length !== 10) {
      setStatus({ loading: false, success: false, error: 'Phone number must be exactly 10 digits.' });
      return;
    }

    setStatus({ loading: true, success: false, error: '' });

    try {
      const response = await axios.post(`${API_URL}/graha-builders/send-email`, formData);
      if (response.data.success) {
        setStatus({ loading: false, success: true, error: '' });
        setFormData({ name: '', phone: '', email: '', message: '' });
        setTimeout(() => setStatus(prev => ({ ...prev, success: false })), 5000);
      }
    } catch (err) {
      console.error(err);
      setStatus({
        loading: false,
        success: false,
        error: err.response?.data?.message || "Failed to send message. Please try again."
      });
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800 selection:bg-orange-100 overflow-x-hidden">
      <Helmet>
        <title>Contact Us | Graha Builders - Civil Engineering & Construction</title>
        <meta name="description" content="Get in touch with Graha Builders for expert civil construction, interior design, and engineering consultation in Tamil Nadu."/>
        <link rel="canonical" href="https://grahabuilders.com/contact" />
      </Helmet>

      {/* ==========================
          SECTION 1: PREMIUM HERO
      ========================== */}
      <div className="relative w-full h-[350px] md:h-[500px] overflow-hidden flex items-center justify-center bg-black">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1920&auto=format&fit=crop&fm=webp"
            alt="Contact Hero"
            className="w-full h-full object-cover opacity-40 grayscale brightness-50"
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
               <span className="text-[#e4a11e] font-black tracking-[0.5em] uppercase text-xs">Technical Support</span>
               <div className="w-12 h-[1px] bg-[#e4a11e]"></div>
            </div>
            <h1 className="text-4xl md:text-7xl font-black text-white tracking-tighter mb-4 leading-none uppercase">
              GET IN <br />
              <span style={{ color: primaryColor }}>TOUCH.</span>
            </h1>
          </motion.div>
        </div>
      </div>

      {/* ==========================
          SECTION 2: CONTACT GRID
      ========================== */}
      <section className="py-24 md:py-40 relative">
        <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
             style={{ 
               backgroundImage: `linear-gradient(${primaryColor} 1px, transparent 1px), linear-gradient(90deg, ${primaryColor} 1px, transparent 1px)`,
               backgroundSize: '60px 60px' 
             }}>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-20">
            
            {/* Left: Info Column */}
            <div className="lg:col-span-1">
               <motion.div
                 initial={{ opacity: 0, x: -30 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 className="space-y-16"
               >
                  <div>
                     <h2 className="text-sm font-bold text-[#e4a11e] uppercase tracking-[0.4em] mb-6">Project Inquiry</h2>
                     <h3 className="text-4xl md:text-5xl font-black text-black leading-tight uppercase tracking-tighter mb-8">
                       Let's Build <br />
                       <span className="italic" style={{ color: primaryColor }}>Together.</span>
                     </h3>
                     <p className="text-gray-500 text-lg font-light leading-relaxed">
                        Consult with our expert engineering team for your next commercial or residential project.
                     </p>
                  </div>

                  <div className="space-y-10">
                     <div className="flex gap-6 group">
                        <div className="w-12 h-12 shrink-0 border border-gray-100 flex items-center justify-center text-[#e4a11e] group-hover:bg-[#e4a11e] group-hover:text-black transition-all">
                           <FaPhoneAlt />
                        </div>
                        <div>
                           <h4 className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1">Direct Lines</h4>
                           <p className="text-xl font-bold text-black mb-1">9360367453</p>
                           <p className="text-xl font-bold text-black mb-1">9514429232</p>
                           <p className="text-xs text-gray-400 uppercase tracking-widest">Mon - Sat / 9am - 7pm</p>
                        </div>
                     </div>

                     <div className="flex gap-6 group">
                        <div className="w-12 h-12 shrink-0 border border-gray-100 flex items-center justify-center text-[#e4a11e] group-hover:bg-[#e4a11e] group-hover:text-black transition-all">
                           <FaEnvelope />
                        </div>
                        <div>
                           <h4 className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1">Digital Inquiry</h4>
                           <p className="text-xl font-bold text-black mb-1">grahabuilders@gmail.com</p>
                           <p className="text-xs text-gray-400 uppercase tracking-widest">Direct to Management</p>
                        </div>
                     </div>

                     <div className="flex gap-6 group">
                        <div className="w-12 h-12 shrink-0 border border-gray-100 flex items-center justify-center text-[#e4a11e] group-hover:bg-[#e4a11e] group-hover:text-black transition-all">
                           <FaMapMarkerAlt />
                        </div>
                        <div>
                           <h4 className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1">HQ Address</h4>
                           <p className="text-lg font-bold text-black mb-1 leading-tight">19B/22, vanakara street, <br /> Tiruvannamalai - 606601</p>
                           <p className="text-xs text-gray-400 uppercase tracking-widest">Tamil Nadu, India</p>
                        </div>
                     </div>

                     <div className="flex gap-6 group">
                        <a 
                          href="https://www.instagram.com/graha.builders?utm_source=qr&igsh=eXh4c3NldmpqODR2" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="w-12 h-12 shrink-0 border border-gray-100 flex items-center justify-center text-[#e4a11e] group-hover:bg-[#e4a11e] group-hover:text-black transition-all"
                        >
                           <FaInstagram />
                        </a>
                        <div>
                           <h4 className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1">Instagram</h4>
                           <p className="text-xl font-bold text-black mb-1">@graha.builders</p>
                           <p className="text-xs text-gray-400 uppercase tracking-widest">Follow our Progress</p>
                        </div>
                     </div>
                  </div>
               </motion.div>
            </div>

            {/* Right: Form Column */}
            <div className="lg:col-span-2">
               <motion.div
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 className="bg-black p-8 md:p-20 shadow-2xl relative"
               >
                  <FaDraftingCompass className="absolute top-10 right-10 text-white/5 text-9xl pointer-events-none" />

                  <h3 className="text-3xl font-black text-white uppercase tracking-tighter mb-12 flex items-center gap-4">
                     <span className="w-10 h-[1px] bg-[#e4a11e]"></span>
                     Technical Request Form
                  </h3>

                  <form onSubmit={handleSubmit} className="space-y-10">
                     <div className="grid md:grid-cols-2 gap-10">
                        <div className="relative">
                           <input 
                             type="text" name="name" required value={formData.name} onChange={handleChange} 
                             className="w-full bg-transparent border-b border-white py-4 text-white focus:outline-none focus:border-[#e4a11e] transition-colors placeholder:text-white"
                             placeholder="FULL NAME *" 
                           />
                        </div>
                        <div className="relative">
                           <input 
                             type="tel" name="phone" required value={formData.phone} onChange={handleChange} 
                             maxLength="10"
                             className="w-full bg-transparent border-b border-white py-4 text-white focus:outline-none focus:border-[#e4a11e] transition-colors placeholder:text-white"
                             placeholder="CONTACT NUMBER (10 DIGITS) *" 
                           />
                        </div>
                     </div>

                     <div className="relative">
                        <input 
                          type="email" name="email" required value={formData.email} onChange={handleChange} 
                          className="w-full bg-transparent border-b border-white py-4 text-white focus:outline-none focus:border-[#e4a11e] transition-colors placeholder:text-white"
                          placeholder="EMAIL ADDRESS (LOWERCASE) *" 
                        />
                     </div>

                     <div className="relative">
                        <textarea 
                          name="message" rows="4" value={formData.message} onChange={handleChange} 
                          className="w-full bg-transparent border-b border-white py-4 text-white focus:outline-none focus:border-[#e4a11e] transition-colors placeholder:text-white resize-none"
                          placeholder="PROJECT DESCRIPTION / MESSAGE"
                        ></textarea>
                     </div>

                     <AnimatePresence mode="wait">
                       {status.error && (
                         <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-500 text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                           <FaExclamationCircle /> {status.error}
                         </motion.div>
                       )}
                       {status.success && (
                         <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-[#e4a11e] text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                           <FaCheckCircle /> Technical query submitted successfully.
                         </motion.div>
                       )}
                     </AnimatePresence>

                     <button 
                       type="submit" disabled={status.loading}
                       className="w-full py-6 bg-[#e4a11e] text-black font-black uppercase tracking-[0.3em] text-xs hover:bg-white transition-all flex items-center justify-center gap-4 group"
                     >
                        {status.loading ? "PROCESSING..." : "INITIATE CONSULTATION"}
                        <FaPaperPlane className="group-hover:translate-x-2 transition-transform" />
                     </button>
                  </form>
               </motion.div>

               {/* MAP SECTION */}
               <div className="mt-12 h-[300px] md:h-[400px] opacity-100 transition-all duration-700 shadow-2xl overflow-hidden rounded-sm border border-gray-100">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124611.8967918338!2d79.0322238491823!3d12.221295286591147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bab070f6f874983%3A0xc3b0907d7f72439d!2sTiruvannamalai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1707123456789!5m2!1sen!2sin" 
                    className="w-full h-full border-0" 
                    allowFullScreen="" 
                    loading="lazy" 
                  ></iframe>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* FINAL STATEMENT */}
      <section className="py-20 bg-slate-50 border-t border-gray-100 text-center">
         <h4 className="text-2xl md:text-4xl font-black text-black uppercase tracking-tighter mb-4">Precision Engineering. Dedicated Support.</h4>
         <div className="w-16 h-1 bg-[#e4a11e] mx-auto mb-8"></div>
         <p className="text-gray-400 font-bold uppercase tracking-[0.5em] text-[10px]">The Graha Standard / Contact Operations</p>
      </section>

    </div>
  );
};

export default ContactPage;