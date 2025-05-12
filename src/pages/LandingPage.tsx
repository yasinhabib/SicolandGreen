import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import HouseDesignSection from "@/components/HouseDesignSection";
import VideoSection from "@/components/VideoSection";
import Footer from "@/components/Footer";

const LandingPage = () => {
  // Set title once the component mounts
  useEffect(() => {
    document.title = "Sicoland Green Andansari - Premium Housing";
  }, []);

  return (
    <div className="flex flex-col min-h-screen font-sans">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <HouseDesignSection />
        <VideoSection />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
