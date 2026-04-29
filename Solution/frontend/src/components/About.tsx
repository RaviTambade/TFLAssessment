import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { useScrollAnimation } from "../hooks/use-scroll-animation";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const About = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-16 sm:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            About Our <span className="bg-gradient-primary bg-clip-text text-transparent">Founder</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            Meet the visionary behind Transflower Learning Pvt. Ltd., Ravi Tambade, whose dedication to empowering IT professionals has transformed countless careers worldwide.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <Card 
            ref={ref}
            className={`border-0 shadow-elegant overflow-hidden transition-all duration-1000 ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="bg-gradient-hero p-6 sm:p-8">
              <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 items-center">
                <div className="lg:col-span-1 text-center">
                  <div className="w-40 h-40 sm:w-48 sm:h-48 mx-auto rounded-full overflow-hidden shadow-glow border-4 border-primary/20">
                    <img 
                      src="/lovable-uploads/bc1b22a1-548e-47b8-a0d2-1f43d49543b8.png" 
                      alt="Ravi Tambade at work - Chief Mentor at Transflower Learning" 
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>
                
                <div className="lg:col-span-2 text-center lg:text-left">
                  <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">Ravi Tambade</h3>
                  <p className="text-lg sm:text-xl text-primary font-semibold mb-4">
                    Chief Mentor at Transflower Learning Pvt. Ltd.
                  </p>
                  <blockquote className="text-base sm:text-lg italic text-muted-foreground border-l-4 border-primary pl-4 mb-6">
                    "I don't know it all, but I will figure it out"
                  </blockquote>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-6">
                    With over 25 years of experience in technology training and mentoring, Ravi has shaped the careers of thousands of IT professionals across the globe.
                  </p>
                  <Link to="/ravi-tambade">
                    <Button 
                      variant="hero" 
                      size="sm" 
                      className="group"
                      onClick={() => {
                        // Scroll to top when navigating to new page
                        setTimeout(() => window.scrollTo(0, 0), 100);
                      }}
                    >
                      Learn More About Ravi
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
