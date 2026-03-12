import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
 const [isScrolled, setIsScrolled] = useState(false);
 const [activeSection, setActiveSection] = useState('home');
 const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
 const location = useLocation();

  useEffect(() => {
   // Only track scroll sections on home page
   if (location.pathname !== '/') return;

   const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);

     // Update active section based on scroll position
 const sections = ['home', 'about', 'services'];
    const scrollPosition= window.scrollY +100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
 return () => window.removeEventListener('scroll', handleScroll);
  }, []);

const navLinks = [
  { id: 'home', label: 'Home', path: '/' },
  { id: 'about', label: 'About', path: '/about' },
  { id: 'products', label: 'Products', path: '/products' },
  { id: 'services', label: 'Services', path: '/', section: 'services' }
 ];

 return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
   className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-gray-950/90 backdrop-blur-md shadow-lg shadow-purple-500/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/">
           <motion.div
             whileHover={{ scale: 1.05 }}
          className="text-2xl font-black uppercase tracking-[0.2em] text-white cursor-pointer"
           >
             Kixy
           </motion.div>
         </Link>

          {/* Navigation Links */}
         <div className="hidden md:flex items-center gap-8">
           {navLinks.map((item) => (
             <Link 
               key={item.id} 
               to={item.path}
               onClick={(e) => {
                 if (item.section) {
                   e.preventDefault();
                   const element = document.getElementById(item.section);
                   if (element) {
                     window.scrollTo({
                       top: element.offsetTop - 80,
                       behavior: 'smooth'
                     });
                   }
                 }
               }}
             >
               <motion.button
                 whileHover={{ scale: 1.05 }}
                 whileTap={{ scale: 0.95 }}
              className={`relative text-sm font-semibold uppercase tracking-[0.15em] transition-colors duration-300 ${
                  location.pathname === item.path || 
                  (location.pathname === '/' && item.path === '/')
                    ? 'text-white'
                    : 'text-white/60 hover:text-white'
                }`}
               >
                 {item.label}
                 {(location.pathname === item.path) || 
                (location.pathname === '/' && item.path === '/') ? (
                   <motion.div
                     layoutId="navbarIndicator"
                  className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
                     transition={{ type: "spring", stiffness: 500, damping: 30 }}
                   />
                 ) : null}
               </motion.button>
             </Link>
           ))}
         </div>

          {/* CTA Button */}
         

          {/* Mobile Menu Button */}
         <motion.button
           whileTap={{ scale: 0.9 }}
         onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
       className="md:hidden text-white p-2 relative z-50"
         >
           <AnimatePresence>
             {isMobileMenuOpen ? (
               <motion.svg
                 initial={{ rotate: -90, opacity: 0 }}
                 animate={{ rotate: 0, opacity: 1 }}
                 exit={{ rotate: 90, opacity: 0 }}
                 transition={{ duration: 0.2 }}
             className="w-6 h-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
               >
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
               </motion.svg>
             ) : (
               <motion.svg
                 initial={{ rotate: 90, opacity: 0 }}
                 animate={{ rotate: 0, opacity: 1 }}
                 exit={{ rotate: -90, opacity: 0 }}
                 transition={{ duration: 0.2 }}
             className="w-6 h-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
               >
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
               </motion.svg>
             )}
           </AnimatePresence>
         </motion.button>
        </div>
     </div>

     {/* Mobile Menu */}
     <AnimatePresence>
       {isMobileMenuOpen && (
         <motion.div
           initial={{ opacity: 0, height: 0 }}
           animate={{ opacity: 1, height: 'auto' }}
           exit={{ opacity: 0, height: 0 }}
           transition={{ duration: 0.3 }}
       className="md:hidden bg-gray-950/95 backdrop-blur-md border-t border-white/10"
         >
           <div className="px-6 py-4 space-y-4">
             {navLinks.map((item) => (
               <Link 
                 key={item.id} 
                 to={item.path}
                 onClick={(e) => {
                   if (item.section) {
                     e.preventDefault();
                     const element = document.getElementById(item.section);
                     if (element) {
                       window.scrollTo({
                         top: element.offsetTop - 80,
                         behavior: 'smooth'
                       });
                       setIsMobileMenuOpen(false);
                     }
                   }
                 }}
               >
                 <motion.button
                   whileTap={{ scale: 0.95 }}
               className={`block w-full text-left text-base font-semibold uppercase tracking-[0.15em] py-2 ${
                    location.pathname === item.path || 
                    (location.pathname === '/' && item.path === '/')
                      ? 'text-white'
                      : 'text-white/60 hover:text-white'
                  }`}
                 >
                   {item.label}
                   {location.pathname === item.path || 
                  (location.pathname === '/' && item.path === '/') ? (
                     <motion.div
                       initial={{ scaleX: 0 }}
                       animate={{ scaleX: 1 }}
                   className="h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mt-1"
                     />
                   ) : null}
                 </motion.button>
               </Link>
             ))}
            
           </div>
         </motion.div>
       )}
     </AnimatePresence>
   </motion.nav>
  );
}
