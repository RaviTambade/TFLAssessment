import { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const SuccessStories = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const stories = [
    {
      name: "Vishvambhar",
      role: "Senior Application Developer",
      company: "IBM",
      program: "TAP Program",
      image: "/lovable-uploads/ffce3099-9fda-4595-b562-d6acc4f99545.png",
      story: "TAP is a great learning platform where I got training for dotnet fullstack development and I transformed as a fullstack developer. It is a great learning experience. I personally recommend TAP for all those aspiring students who want to learn dotnet fullstack and become a professional developer. Thanks."
    },
    {
      name: "Sarfaraz M.",
      role: "Deputy General Manager - IT",
      company: "Dana Holding Corporation",
      image: "/lovable-uploads/474f3deb-b2e9-4693-823a-62bddd8cdc69.png",
      story: "Ravi recently conducted a SharePoint workshop at our office premises. Ravi is not only personable, he carries an amazing attitude & deep-rooted passion for sharing knowledge & education. He was able to quickly set the ball rolling & establish a connection with all the participants. Hands-on exercises were spot on & his ability to clarify questions speaks of his expertise. Overall a great learning experience!!!"
    },
    {
      name: "Vishal D.",
      role: "MS D365 & Power Apps Consultant",
      image: "/lovable-uploads/6e4a3fa2-6604-4528-95f5-ad95ebf43b01.png",
      story: "I have worked under Ravi sir's guidance for the past 2 years. He is one of the most influential persons I have ever met. He is a fantastic human being with a very nice heart. Very technical in his subjects (which is a quite big list), and very professional and dedicated towards work."
    },
    {
      name: "Vaibhav",
      role: ".NET Developer",
      program: "TRANSFLOWER Training",
      image: "/lovable-uploads/bc1b22a1-548e-47b8-a0d2-1f43d49543b8.png",
      story: "I had the privilege of being taught by an exceptional instructor Ravi Sir with 15 years of experience in the field. Their expertise in .NET technologies, including C#, .NET Core, Web API, and more, greatly enriched my learning experience. The depth of knowledge and clarity in explanations truly set them apart. TRANSFLOWER's commitment to excellence is evident, providing an environment that fosters growth and understanding."
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % stories.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + stories.length) % stories.length);
  };


  return (
    <section id="success-stories" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Success <span className="bg-gradient-accent bg-clip-text text-transparent">Stories</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real experiences from our learners who transformed their careers with us
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-3xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {stories.map((story, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <Card className="border-0 bg-card/90 backdrop-blur-sm shadow-elegant mx-4">
                    <CardContent className="p-8">
                      <div className="flex flex-col md:flex-row gap-6 items-center">
                        <div className="flex-shrink-0">
                          <img
                            src={story.image}
                            alt={`${story.name} profile`}
                            className="w-24 h-24 rounded-full object-cover shadow-elegant"
                          />
                        </div>
                        
                        <div className="flex-1 text-center md:text-left">
                          <div className="mb-4">
                            <h3 className="text-2xl font-bold text-foreground mb-2">
                              {story.name}
                            </h3>
                            <p className="text-primary font-semibold">
                              {story.role}
                            </p>
                            {story.company && (
                              <p className="text-muted-foreground text-sm">
                                @ {story.company}
                              </p>
                            )}
                            {story.program && (
                              <p className="text-muted-foreground text-sm">
                                {story.program}
                              </p>
                            )}
                          </div>
                          
                          <blockquote className="text-muted-foreground italic leading-relaxed">
                            "{story.story}"
                          </blockquote>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <Button
            variant="ghost"
            size="icon"
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-card/80 backdrop-blur-sm shadow-elegant hover:shadow-glow"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-card/80 backdrop-blur-sm shadow-elegant hover:shadow-glow"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-8 space-x-3">
            {stories.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-smooth ${
                  index === currentSlide 
                    ? 'bg-primary shadow-glow' 
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
              />
            ))}
          </div>
        </div>

        <div className="text-center mt-16 bg-card/50 backdrop-blur-sm rounded-3xl p-8 shadow-elegant">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Ready to Write Your Success Story?
          </h3>
          <p className="text-muted-foreground mb-6">
            Join thousands of learners who have transformed their careers with Transflower Learning
          </p>
              <Button 
                variant="hero" 
                size="lg"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Start Your Journey Today
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
