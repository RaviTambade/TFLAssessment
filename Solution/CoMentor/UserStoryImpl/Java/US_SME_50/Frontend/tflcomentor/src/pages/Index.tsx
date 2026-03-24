import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import TapHighlight from "../components/TapHighlight";
import SuccessStories from "../components/SuccessStories";
import VideoShowcase from "../components/VideoShowcase";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollToContact) {
      setTimeout(() => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, [location.state]);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <TapHighlight />
      <SuccessStories />
      <VideoShowcase />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
