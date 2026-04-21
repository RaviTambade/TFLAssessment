import { Button } from "./ui/button";
import { useScrollAnimation } from "../hooks/use-scroll-animation";
import { Linkedin, Facebook, Youtube } from "lucide-react";
import heroImage from "../assets/hero-learning.jpg";

const Hero = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation({ threshold: 0.3 });

  return (
    <section id="home" className="min-h-screen flex items-center pt-24 sm:pt-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div 
            ref={heroRef}
            className={`space-y-8 transition-all duration-1000 ${
              heroVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Transform Your
                <span className="bg-gradient-primary bg-clip-text text-transparent"> Learning</span>
                <br />Journey
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                Join our vibrant community where passionate learners collaborate, grow, and achieve their dreams together. From online classes to our co-learning space - your success is our mission.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="hero" 
                size="lg"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Start Learning Today
              </Button>
            </div>
            
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">Connect with us:</span>
              <div className="flex gap-3">
                <a 
                  href="https://www.linkedin.com/in/ravitambade/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-smooth"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a 
                  href="https://www.facebook.com/transflowerlearning" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-smooth"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a 
                  href="https://www.youtube.com/@ravitambade-transflower" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-smooth"
                >
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div 
              ref={statsRef}
              className={`grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 pt-4 transition-all duration-1000 delay-500 ${
                statsVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-primary">1000+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Trained Students</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-accent">Expert</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Industry Experience Mentors</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-primary">Supportive</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Collaborative Learning Environment</div>
              </div>
            </div>
          </div>
          
          <div className={`relative transition-all duration-1000 delay-300 ${
            heroVisible 
              ? 'opacity-100 translate-x-0' 
              : 'opacity-0 translate-x-10'
          }`}>
            <div className="absolute inset-0 bg-gradient-primary opacity-20 rounded-3xl blur-3xl"></div>
            <img 
              src="/lovable-uploads/0b142dc4-57d1-4958-99cd-b268dab9f211.png" 
              alt="Students collaborating in modern learning environment" 
              className="relative rounded-3xl shadow-elegant w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
