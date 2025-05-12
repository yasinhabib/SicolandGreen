import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll events to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "House Design", href: "#design" },
    { name: "Video Tour", href: "#video" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <nav className={cn(
      "fixed w-full z-50 transition-all duration-300",
      scrolled ? "bg-white/90 backdrop-blur-sm shadow-md" : "bg-transparent"
    )}>
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-primary font-heading font-bold text-2xl">
          Sicoland Green
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className="text-primary hover:text-accent transition-colors"
            >
              {link.name}
            </a>
          ))}
          <Button className="bg-primary hover:bg-secondary text-white">
            Inquire Now
          </Button>
        </div>
        
        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-primary"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white w-full absolute border-b border-gray-200"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-primary hover:text-accent transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <Button className="bg-primary hover:bg-secondary text-white w-full">
                Inquire Now
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
