import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { images } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

interface DesignCardProps {
  image: string;
  title: string;
  description: string;
  index: number;
}

const DesignCard = ({ image, title, description, index }: DesignCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.2 });
  
  return (
    <motion.div 
      ref={cardRef}
      className="overflow-hidden rounded-xl shadow-lg group"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="relative h-64">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="p-6 bg-white">
        <h3 className="text-xl font-heading font-semibold text-primary">{title}</h3>
        <p className="mt-2 text-gray-600">{description}</p>
      </div>
    </motion.div>
  );
};

const HouseDesignSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  
  const designCards = [
    {
      image: images.modernExterior,
      title: "Exterior Design",
      description: "Contemporary façade with premium materials and beautiful landscaping."
    },
    {
      image: images.livingRoom,
      title: "Living Space",
      description: "Open concept living area with large windows for abundant natural light."
    },
    {
      image: images.kitchen,
      title: "Kitchen Design",
      description: "Premium kitchen with high-end appliances and elegant cabinetry."
    },
    {
      image: images.bedroom,
      title: "Master Bedroom",
      description: "Spacious master suite with walk-in closet and luxury en-suite bathroom."
    },
    {
      image: images.aerialView,
      title: "Development Overview",
      description: "Beautifully planned community with green spaces and amenities."
    },
    {
      image: images.backyard,
      title: "Outdoor Living",
      description: "Private backyard with patio space perfect for entertaining and relaxation."
    }
  ];
  
  return (
    <section id="design" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          ref={sectionRef}
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-accent font-semibold">Our Exclusive Design</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mt-2 text-primary">
            Modern Elegance House Type
          </h2>
          <p className="mt-4 text-gray-600">
            Discover the perfect blend of contemporary design and functional living space.
            Our house is designed with attention to detail and premium materials for lasting quality.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {designCards.map((card, index) => (
            <DesignCard
              key={index}
              image={card.image}
              title={card.title}
              description={card.description}
              index={index}
            />
          ))}
        </div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <a 
            href="#" 
            className="inline-flex items-center text-accent font-semibold hover:text-secondary"
          >
            View Full Specifications
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HouseDesignSection;
