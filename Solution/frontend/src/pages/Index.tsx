import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import TapHighlight from "../components/TapHighlight";
import SuccessStories from "../components/SuccessStories";
import VideoShowcase from "../components/VideoShowcase";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import TabProfile from "@/components/assessment/membership/tabprofile";
import Dashboard from "@/components/assessment/membership/dashboard";

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
     
      <Hero />
      <About />
      <Services />
      <TapHighlight />
      <SuccessStories />
      <VideoShowcase />
      <Contact />
<<<<<<< HEAD
      <TabProfile/>
=======
      <Dashboard />
      <TabProfile />
>>>>>>> cc89aeb21e5eb3a1ee506de9c4a92683e99a1f42
      <Footer />
    </div>
  );
};

export default Index;
