import React from 'react';
import { Link } from 'react-router-dom';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaInstagram, FaDraftingCompass, FaArrowUp } from 'react-icons/fa';

// Import Logo
import logo from '../../assets/constructionlogo.png';

const Footer = () => {
  const primaryColor = "#e4a11e";

  return (
    <footer className="bg-[#0a0a0a] text-gray-400 pt-24 pb-12 relative overflow-hidden font-sans border-t border-white/5">

      {/* Blueprint Grid Background */}
      <div className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(${primaryColor} 1px, transparent 1px), linear-gradient(90deg, ${primaryColor} 1px, transparent 1px)`,
          backgroundSize: '100px 100px'
        }}>
      </div>

      <div className="container mx-auto px-6 relative z-10">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">

          {/* Column 1: Brand Identity */}
          <div className="flex flex-col items-start">
            <Link to="/" className="inline-block mb-10 group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <div className="mb-4">
                <img src={logo} alt="Graha Builders" className="h-12 w-auto object-contain" />
              </div>
              <h2 className="text-white font-black text-2xl tracking-tighter uppercase group-hover:text-[#e4a11e] transition-colors">Graha Builders</h2>
              <p className="text-[10px] font-bold tracking-[0.4em] uppercase text-gray-600">Engineering Excellence</p>
            </Link>
            <p className="text-sm leading-relaxed mb-8 font-light">
              Pioneering sustainable construction and innovative structural solutions across Tamil Nadu. Built on a foundation of integrity and precision.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/graha.builders?utm_source=qr&igsh=eXh4c3NldmpqODR2"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#e4a11e] hover:text-black transition-all"
              >
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Index */}
          <div>
            <h4 className="text-white font-black mb-10 uppercase tracking-widest text-xs flex items-center gap-3">
              <span className="w-8 h-[1px] bg-[#e4a11e]"></span>
              Navigation Index
            </h4>
            <ul className="space-y-4">
              {['Home', 'About', 'Services', 'Projects', 'HSE', 'Careers', 'Contact'].map((item) => (
                <li key={item}>
                  <Link to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className="text-sm uppercase tracking-widest hover:text-[#e4a11e] transition-all flex items-center gap-2 group">
                    <span className="w-0 group-hover:w-3 h-[1px] bg-[#e4a11e] transition-all"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Site Operations */}
          <div>
            <h4 className="text-white font-black mb-10 uppercase tracking-widest text-xs flex items-center gap-3">
              <span className="w-8 h-[1px] bg-[#e4a11e]"></span>
              Site Operations
            </h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <FaMapMarkerAlt className="text-[#e4a11e] mt-1 text-lg" />
                <div>
                  <p className="text-xs font-black text-white uppercase mb-1">Regional Office</p>
                  <p className="text-sm font-light">19B/22, vanakara street, <br /> Tiruvannamalai - 606601</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <FaPhoneAlt className="text-[#e4a11e] mt-1 text-lg" />
                <div>
                  <p className="text-xs font-black text-white uppercase mb-1">Direct Lines</p>
                  <div className="flex flex-col gap-1">
                    <a href="tel:+919360367453" className="text-sm font-light hover:text-[#e4a11e]">9360367453</a>
                    <a href="tel:+919514429232" className="text-sm font-light hover:text-[#e4a11e]">9514429232</a>
                  </div>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <FaEnvelope className="text-[#e4a11e] mt-1 text-lg" />
                <div>
                  <p className="text-xs font-black text-white uppercase mb-1">Digital Inquiries</p>
                  <a href="mailto:grahabuilders@gmail.com" className="text-sm font-light hover:text-[#e4a11e]">grahabuilders@gmail.com</a>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 4: Project Inquiry */}
          <div>
            <h4 className="text-white font-black mb-10 uppercase tracking-widest text-xs flex items-center gap-3">
              <span className="w-8 h-[1px] bg-[#e4a11e]"></span>
              Project Inquiry
            </h4>
            <p className="text-sm mb-8 font-light leading-relaxed">
              Ready to start your next landmark project? Reach out to our technical team for a comprehensive consultation.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-black uppercase tracking-widest text-[10px] hover:bg-[#e4a11e] transition-all">
              Start Building <FaDraftingCompass />
            </Link>
          </div>

        </div>

        {/* BOTTOM BAR: Technical Metadata */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-6 text-[10px] font-mono tracking-widest uppercase">
            <span className="text-white/20">Build version: 2.0.4</span>
            <span className="text-white/20">Status: Operational</span>
          </div>

          <p className="text-[11px] font-bold tracking-widest uppercase text-gray-600">
            &copy; {new Date().getFullYear()} <span className="text-white">Graha Builders</span>.
            <span className="ml-2">Designed & Developed by </span>
            <a href="https://bmtechx.in/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#e4a11e] transition-colors">Bmtechx.in</a>
          </p>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-[#e4a11e] hover:text-black transition-all"
          >
            <FaArrowUp />
          </button>
        </div>

      </div>

      {/* Massive Background Logo Watermark */}
      <div className="absolute -bottom-20 -right-20 opacity-[0.02] select-none pointer-events-none scale-150">
        <img src={logo} alt="" className="h-[400px] w-auto grayscale" />
      </div>

    </footer>
  );
};

export default Footer;