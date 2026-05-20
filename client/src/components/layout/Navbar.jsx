import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaDraftingCompass } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

// Import Logo
import logo from '../../assets/constructionlogo.png';

// Import the new Robust Component
import GoogleTranslate from '../translate/GoogleTranslate';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  const primaryColor = "#e4a11e";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when the mobile offcanvas drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const navLinks = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Services", path: "/services" },
    { title: "Projects", path: "/projects" },
    { title: "Quality & HSE", path: "/hse" },
    { title: "Careers", path: "/careers" },
    { title: "Contact", path: "/contact" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
        scrolled ? 'bg-black py-4 shadow-2xl' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        
        {/* LOGO */}
        <Link 
          to="/" 
          className="relative group flex items-center gap-3"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className="relative overflow-hidden rounded-sm">
             <img
               src={logo}
               alt="Graha Builders"
               className="h-10 md:h-12 w-auto object-contain"
             />
          </div>
          <div className="hidden md:flex flex-col">
             <span className="text-white font-black text-xl leading-none tracking-tighter uppercase">Graha Builders</span>
             <span className="text-[8px] text-[#e4a11e] font-bold tracking-[0.3em] uppercase">Engineering Excellence</span>
          </div>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden lg:flex items-center gap-10">
          <ul className="flex items-center gap-8">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link
                  to={link.path}
                  className={`relative text-[11px] font-black uppercase tracking-[0.2em] transition-colors duration-300 ${
                    pathname === link.path ? 'text-[#e4a11e]' : 'text-white hover:text-[#e4a11e]'
                  } group`}
                  onClick={() => {
                    if (link.path === pathname) window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                >
                  {link.title}
                  <span className={`absolute -bottom-2 left-0 h-[2px] bg-[#e4a11e] transition-all duration-300 ${
                    pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="h-8 w-[1px] bg-white/10 mx-2"></div>

          <div className="scale-90 origin-right">
             <GoogleTranslate />
          </div>

          <Link
            to="/contact"
            className="px-6 py-3 bg-[#e4a11e] text-black font-black text-[10px] uppercase tracking-widest hover:bg-white transition-all shadow-lg"
          >
            Get Quote
          </Link>
        </nav>

        {/* MOBILE TOGGLE */}
        <button 
          onClick={() => setIsOpen(true)} 
          className="lg:hidden text-white text-2xl p-2 hover:text-[#e4a11e] transition-colors"
        >
          <FaBars />
        </button>
      </div>

      {/* TECHNICAL MEASURE LINE (Bottom of Nav) */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      {scrolled && (
        <div className="absolute bottom-0 left-0 h-[2px] bg-[#e4a11e] transition-all duration-1000" style={{ width: '100%' }}></div>
      )}

      {/* MOBILE DRAWER */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Elegant semi-transparent backdrop with blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 z-[110] backdrop-blur-sm"
            />
            {/* Responsive drawer that does not fully cover the viewport on mobile */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 h-full w-[85vw] sm:w-[380px] md:w-[400px] bg-black border-l border-white/5 z-[120] flex flex-col justify-between p-8 sm:p-12 overflow-y-auto"
            >
              <div>
                <div className="flex justify-between items-center mb-10 sm:mb-16">
                   <FaDraftingCompass className="text-[#e4a11e] text-3xl" />
                   <button onClick={() => setIsOpen(false)} className="text-white text-3xl hover:text-[#e4a11e]">
                      <FaTimes />
                   </button>
                </div>

                <div className="flex flex-col gap-6 sm:gap-8">
                   {navLinks.map((link, index) => (
                     <Link
                       key={index}
                       to={link.path}
                       onClick={() => setIsOpen(false)}
                       className="text-2xl sm:text-3xl font-bold text-white uppercase tracking-wide hover:text-[#e4a11e] transition-colors"
                     >
                       {link.title}
                     </Link>
                   ))}
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-white/5">
                 <div className="mb-6">
                    <GoogleTranslate />
                 </div>
                 <Link
                   to="/contact"
                   onClick={() => setIsOpen(false)}
                   className="w-full py-4 sm:py-5 bg-[#e4a11e] text-black text-center font-bold uppercase tracking-widest block hover:bg-white hover:text-black transition-all"
                 >
                   Request a Quote
                 </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;