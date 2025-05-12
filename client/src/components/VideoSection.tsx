import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { images } from "@/lib/utils";
import ReactPlayer from "react-player/lazy";
import { Home, Network, MapPin, Play } from "lucide-react";

const VideoSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  const isVideoInView = useInView(videoRef, { once: true, amount: 0.2 });
  
  const features = [
    {
      icon: <Home className="text-primary text-xl" />,
      title: "Quality Construction",
      description: "Built with premium materials and attention to detail"
    },
    {
      icon: <Network className="text-primary text-xl" />,
      title: "Green Environment",
      description: "Surrounded by beautiful landscaping and green spaces"
    },
    {
      icon: <MapPin className="text-primary text-xl" />,
      title: "Prime Location",
      description: "Strategically located for convenience and accessibility"
    }
  ];
  
  // For demo purposes - in a real application this would be a real video URL
  const demoVideoUrl = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
  
  return (
    <section id="video" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.div 
          ref={sectionRef}
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-accent font-semibold">Take a Tour</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mt-2 text-primary">
            Experience Sicoland Green Andasari
          </h2>
          <p className="mt-4 text-gray-600">
            Watch our video tour to get a comprehensive look at our premium housing development
            and imagine your future in this exceptional community.
          </p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          <motion.div 
            ref={videoRef}
            className="relative rounded-xl overflow-hidden shadow-2xl"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isVideoInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6 }}
          >
            <div className="aspect-w-16 aspect-h-9">
              <ReactPlayer
                url={demoVideoUrl}
                width="100%"
                height="100%"
                light={images.videoThumbnail}
                playIcon={
                  <div className="w-20 h-20 rounded-full bg-accent flex items-center justify-center transition-transform hover:scale-110">
                    <Play className="text-white h-8 w-8 pl-1" />
                  </div>
                }
                controls
              />
            </div>
          </motion.div>
          
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-md text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={isVideoInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              >
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold mt-4 text-primary">{feature.title}</h3>
                <p className="mt-2 text-gray-600 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
