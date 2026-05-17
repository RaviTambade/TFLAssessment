import { Link } from "react-router-dom";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { ArrowRight, Users, Code, Target } from "lucide-react";
import tapMentorshipImage from "../assets/tap-mentorship.jpg";

const TapHighlight = () => {
  return (
    <section id="tap-program" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Discover <span className="bg-gradient-accent bg-clip-text text-transparent">TAP Program</span>
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
              Transflower Acceleration Program - Where mentorship meets practical learning
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img
                src={tapMentorshipImage}
                alt="TAP Program Mentorship"
                className="rounded-3xl shadow-elegant w-full"
              />
            </div>
            
            <div className="space-y-4 sm:space-y-6 order-1 lg:order-2">
              <Card className="bg-card/50 backdrop-blur-sm border-0 shadow-elegant">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Users className="h-6 w-6 text-primary" />
                    <h3 className="text-base sm:text-lg font-bold text-foreground">Mentor-Driven Learning</h3>
                  </div>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    100% live mentorship with experienced professionals guiding your journey
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur-sm border-0 shadow-elegant">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Code className="h-6 w-6 text-primary" />
                    <h3 className="text-base sm:text-lg font-bold text-foreground">Project-Based Approach</h3>
                  </div>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    Build real-world applications while learning FullStack development
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur-sm border-0 shadow-elegant">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Target className="h-6 w-6 text-primary" />
                    <h3 className="text-base sm:text-lg font-bold text-foreground">Career Transformation</h3>
                  </div>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    Bridge the gap between education and employability
                  </p>
                </CardContent>
              </Card>

              <div className="pt-4">
                <Link to="/tap-program">
                  <Button variant="hero" size="lg" className="group">
                    Explore TAP Program
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-12 sm:mt-16 text-center">
            <div className="bg-card/30 backdrop-blur-sm rounded-3xl p-6 sm:p-8 shadow-elegant">
              <blockquote className="text-lg sm:text-xl font-semibold text-primary mb-4">
                "To build FullStack development skills, you don't need an institution — you need a mentor."
              </blockquote>
              <p className="text-xl sm:text-2xl font-bold bg-gradient-accent bg-clip-text text-transparent">
                TAP your potential.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TapHighlight;