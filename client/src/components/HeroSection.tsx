import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { images } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section 
      id="home" 
      className="relative pt-16 h-screen flex items-center"
    >
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${images.heroBackground}')` }}
      >
        <div className="absolute inset-0 bg-primary bg-opacity-50"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-white">
        <motion.div 
          className="max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="bg-accent px-3 py-1 text-sm font-semibold rounded-full">
            Premium Living
          </span>
          <h1 className="mt-4 font-heading text-4xl md:text-6xl font-bold leading-tight">
            Sicoland Green<br />
            <span className="text-accent">Andasari</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-100 max-w-xl">
            Experience the pinnacle of modern living in our exclusive housing development. 
            Where luxury meets comfort in a tranquil environment.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Button 
              asChild
              size="lg"
              className="bg-accent hover:bg-opacity-80 text-white font-semibold border-0 hover:scale-105 transition-all"
            >
              <a href="#design">Explore Design</a>
            </Button>
            <Button 
              asChild
              size="lg"
              variant="outline" 
              className="bg-transparent border-2 border-white hover:bg-white hover:text-primary font-semibold transition-all"
            >
              <a href="#contact">Contact Us</a>
            </Button>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll Down Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <a href="#design" className="text-white">
          <ChevronDown size={36} />
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
