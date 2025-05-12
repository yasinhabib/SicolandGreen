import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, Mail, Clock, MapPin, ArrowRight } from "lucide-react";
import WhatsappIcon from "./WhatsappIcon";

const Footer = () => {
  const footerRef = useRef<HTMLElement>(null);
  const isInView = useInView(footerRef, { once: true, amount: 0.1 });
  
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here in a real application
  };
  
  return (
    <motion.footer 
      id="contact" 
      ref={footerRef}
      className="bg-[#262E4C] text-white"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4 py-4 min-h-dvh md:h-full grid grid-rows-[1fr_60px]">
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Company Information */}
            <div>
              <h3 className="font-heading text-2xl font-bold mb-6">Sicoland Green Andansari</h3>
              <p className="text-gray-300 mb-4">
                Premium housing development offering modern design and exceptional living experience in a strategic location.
              </p>
            </div>
            
            {/* Location */}
            <div>
              <h4 className="text-xl font-semibold mb-6">Lokasi</h4>
              <div className="flex items-start">
                <MapPin className="mt-1 mr-3 text-accent h-5 w-5" />
                <div>
                  <p className="text-gray-300">
                    Jl. Durung 1, Andansari<br />
                    Sumatera Utara - Indonesia
                  </p>
                </div>
              </div>
            </div>
            
            {/* Inquiry Form */}
            <div>
              <Button 
                type="submit" 
                className="w-full bg-accent hover:bg-opacity-80 transition-colors py-2 rounded-md font-semibold border text-lg relative cursor-pointer"
                onClick={() => {
                  if(window)
                    window.open("https://wa.me/628991397383?text=Saya tertarik, boleh saya minta detail informasi perumahannya?", '_blank')?.focus();
                }}
              >
                <WhatsappIcon />
                Tanya Kami
                <div className="absolute top-0 right-0 h-full flex items-center justify-center pr-2" >
                  <ArrowRight/>
                </div>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="pt-4 border-t border-white/20 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Sicoland Green Andansari. All rights reserved.</p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
