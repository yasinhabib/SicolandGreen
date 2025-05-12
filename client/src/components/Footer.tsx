import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Phone, Mail, Clock, MapPin, ArrowRight } from "lucide-react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const footerRef = useRef<HTMLElement>(null);
  const isInView = useInView(footerRef, { once: true, amount: 0.1 });
  
  const contactInfo = [
    {
      icon: <Phone className="mt-1 mr-3 text-accent h-5 w-5" />,
      title: "Phone",
      details: "(+62) 812-3456-7890"
    },
    {
      icon: <Mail className="mt-1 mr-3 text-accent h-5 w-5" />,
      title: "Email",
      details: "info@sicolandgreen.com"
    },
    {
      icon: <Clock className="mt-1 mr-3 text-accent h-5 w-5" />,
      title: "Office Hours",
      details: "Mon - Sat: 9AM - 6PM"
    }
  ];
  
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here in a real application
  };
  
  return (
    <motion.footer 
      id="contact" 
      ref={footerRef}
      className="bg-primary text-white"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Information */}
          <div>
            <h3 className="font-heading text-2xl font-bold mb-6">Sicoland Green Andasari</h3>
            <p className="text-gray-300 mb-6">
              Premium housing development offering modern design and exceptional living experience in a strategic location.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors">
                <FaFacebookF />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors">
                <FaInstagram />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors">
                <FaYoutube />
              </a>
            </div>
          </div>
          
          {/* Contact Information */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              {contactInfo.map((info, index) => (
                <li key={index} className="flex items-start">
                  {info.icon}
                  <div>
                    <p className="font-semibold">{info.title}</p>
                    <p className="text-gray-300">{info.details}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Location */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Location</h4>
            <div className="flex items-start">
              <MapPin className="mt-1 mr-3 text-accent h-5 w-5" />
              <div>
                <p className="text-gray-300">
                  Jl. Andasari Raya No. 123,<br />
                  Kecamatan Sicoland,<br />
                  Jakarta Selatan, 12345<br />
                  Indonesia
                </p>
              </div>
            </div>
            <a href="#" className="mt-4 inline-flex items-center text-accent hover:underline">
              Get Directions <ArrowRight className="ml-1 h-4 w-4" />
            </a>
          </div>
          
          {/* Inquiry Form */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Inquire Now</h4>
            <p className="text-gray-300 mb-4">
              Interested in Sicoland Green Andasari? Fill out this form and we'll get back to you soon.
            </p>
            <form onSubmit={handleFormSubmit}>
              <Input 
                type="text" 
                placeholder="Your Name" 
                className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/20 focus:border-accent mb-3 text-white placeholder-gray-400" 
                required
              />
              <Input 
                type="email" 
                placeholder="Your Email" 
                className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/20 focus:border-accent mb-3 text-white placeholder-gray-400" 
                required
              />
              <Button 
                type="submit" 
                className="w-full bg-accent hover:bg-opacity-80 transition-colors py-2 rounded-md font-semibold"
              >
                Send Inquiry
              </Button>
            </form>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-white/20 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Sicoland Green Andasari. All rights reserved.</p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
