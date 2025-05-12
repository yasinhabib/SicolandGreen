import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { images } from "@/lib/utils";
import ReactPlayer from "react-player/lazy";
import { Home, Play } from "lucide-react";

const VideoSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  const isVideoInView = useInView(videoRef, { once: true, amount: 0.2 });
  
  // For demo purposes - in a real application this would be a real video URL
  const demoVideoUrl = "/progress-video.mp4";
  
  return (
    <section id="video" className="py-8 bg-gray-100 h-dvh">
      <div className="container mx-auto px-4 grid grid-rows-[40px_calc(100%-40px)] gap-4 h-full">
        <motion.div 
          ref={sectionRef}
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mt-2 text-primary">
            Progress pembangunan
          </h2>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          <motion.div 
            ref={videoRef}
            className="relative rounded-xl overflow-hidden shadow-2xl h-full"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isVideoInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6 }}
          >
            <div className="h-full">
              <ReactPlayer
                url={demoVideoUrl}
                // light={images.videoThumbnail}
                height={'100%'}
                width={'100%'}
                playIcon={
                  <div className="w-20 h-20 rounded-full bg-accent flex items-center justify-center transition-transform hover:scale-110">
                    <Play className="text-white h-8 w-8 pl-1" />
                  </div>
                }
                controls
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
