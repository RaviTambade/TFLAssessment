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
import DashboardSME from "@/components/assessment/membership/dashboardsme";
import DashboardMentor from "@/components/assessment/membership/dashboardmentor";
import DashboardEmployer from "@/components/assessment/membership/dashboardemployer";
import DashboardAdmin from "@/components/assessment/membership/dashboardadmin";

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
      <DashboardAdmin />
      <TabProfile />
      <Footer />
    </div>
  );
};

export default Index;