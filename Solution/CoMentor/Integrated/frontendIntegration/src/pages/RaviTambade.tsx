import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useScrollAnimation, useStaggeredAnimation } from "../hooks/use-scroll-animation";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";

const RaviTambade = () => {
  
  const { ref: philosophyRef, isVisible: philosophyVisible } = useScrollAnimation();
  const { ref: journeyRef, isVisible: journeyVisible } = useScrollAnimation({ threshold: 0.3 });
  const journeyCount = 4;
  const {ref: journeyRefCard,visibleItems: journeyVisibleCard} = useStaggeredAnimation(journeyCount, 200); // 200ms gap
  const certificateCount = 5; // total certificate cards
  const {ref: certRef,visibleItems} = useStaggeredAnimation(certificateCount, 150); // 150ms delay

  
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-16 sm:py-20 bg-gradient-hero pt-24 sm:pt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-1 text-center">
                <div className="w-48 h-48 sm:w-60 sm:h-60 mx-auto rounded-full overflow-hidden shadow-glow border-4 border-primary/20">
                  <img 
                    src="/lovable-uploads/bc1b22a1-548e-47b8-a0d2-1f43d49543b8.png" 
                    alt="Ravi Tambade - Chief Mentor at Transflower Learning" 
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
              
              <div className="lg:col-span-2 text-center lg:text-left">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
                  Ravi <span className="bg-gradient-accent bg-clip-text text-transparent">Tambade</span>
                </h1>
                <p className="text-xl sm:text-2xl text-primary font-semibold mb-6">
                  Chief Mentor at Transflower Learning Pvt. Ltd.
                </p>
                <blockquote className="text-lg sm:text-xl italic text-muted-foreground border-l-4 border-primary pl-6 mb-6">
                  "I don't know it all, but I will figure it out"
                </blockquote>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  With over 25 years of experience in technology training and mentoring, Ravi has shaped the careers of thousands of IT professionals across the globe.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card ref={philosophyRef} className={`bg-card/50 backdrop-blur-sm border-0 shadow-elegant transition-all duration-1000 ${philosophyVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
              <CardContent className="p-6 sm:p-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6 text-center">
                  My <span className="bg-gradient-accent bg-clip-text text-transparent">Philosophy</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed text-center text-base sm:text-lg">
                  I find technology fascinating due to its vast ever-changing nature. There is so much to investigate. 
                  Every day I come to work, I find out I know less. This keeps my learning spirit alive. Learning and 
                  Teaching, my passion keeps me involved in teaching and mentoring Information Technology for more than 15 years.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Journey & Experience Section */}
      <section className="py-16 sm:py-20 bg-gradient-hero">
        <div ref={journeyRef} className={`space-y-8 transition-all duration-1000 ${journeyVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-foreground mb-12">
              Journey & <span className="bg-gradient-accent bg-clip-text text-transparent">Experience</span>
            </h2>

            {/* Teaching Gallery */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="bg-card/50 backdrop-blur-sm border-0 shadow-elegant overflow-hidden">
                <div className="relative">
                  <img 
                    src="/lovable-uploads/3fb512a8-5bd7-4191-9ab7-f44fbc020140.png" 
                    alt="Ravi Tambade teaching in classroom - demonstrating hands-on programming concepts" 
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-bold text-lg">Hands-on Teaching</h3>
                    <p className="text-white/90 text-sm">Making complex concepts simple through practical demonstrations</p>
                  </div>
                </div>
              </Card>

              <Card className="bg-card/50 backdrop-blur-sm border-0 shadow-elegant overflow-hidden">
                <div className="relative">
                  <img 
                    src="/lovable-uploads/79b13c76-8b67-4821-92d5-e794ce8e2c84.png" 
                    alt="Large group of students and professionals trained by Ravi Tambade at corporate training session" 
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-bold text-lg">Corporate Training Excellence</h3>
                    <p className="text-white/90 text-sm">Transforming careers of hundreds of professionals in every session</p>
                  </div>
                </div>
              </Card>
            </div>
            
            <div ref={journeyRefCard} className="space-y-8">
              <Card className={`bg-card/50 backdrop-blur-sm border-0 shadow-elegant transition-all duration-700 ${journeyVisibleCard.has(0)? "opacity-100 translate-y-0": "opacity-0 translate-y-6"}`}>
                <CardContent className="p-6 sm:p-8">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                      <span className="text-primary font-bold text-lg">1997</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-3">The Beginning</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        I started my career as Lab Faculty from 1997 for C and C++ programming. I received opportunity to 
                        conduct C, Data structures, C++, Win 32, MFC (VC++), COM, DCOM, ATLCOM sessions for Engineering 
                        students, CDAC-ACTS students & IT developers since 1998.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className={`bg-card/50 backdrop-blur-sm border-0 shadow-elegant transition-all duration-700 ${journeyVisibleCard.has(1)? "opacity-100 translate-y-0": "opacity-0 translate-y-6"}`}>
                <CardContent className="p-6 sm:p-8">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                      <span className="text-accent font-bold text-lg">1999</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-3">Corporate Training Journey</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        I started conducting corporate trainings for CDAC-ACTS centers, Corporate Houses from 1999. A role 
                        of Technical coordinator in seed from 2000-2003 helped me to discover my Technology mentoring and 
                        Train The Trainer capability.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className={`bg-card/50 backdrop-blur-sm border-0 shadow-elegant transition-all duration-700 ${journeyVisibleCard.has(2)? "opacity-100 translate-y-0": "opacity-0 translate-y-6"}`}>
                <CardContent className="p-6 sm:p-8">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                      <span className="text-primary font-bold text-sm">1000+</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-3">Massive Impact</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Being a Technology Trainer, I got opportunity to teach more than 1000 Corporate Trainings and 
                        thousands of IT Developers on Microsoft Technologies: SharePoint Server 2013, 2010, 2007, Office 365, 
                        .NET Framework (4.5 & 3.5: WCF, WPF, WF, WIF), ASP.NET 4.5, 4.0, 3.5, C#, VB.NET, VC++, and Win32 etc.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className={`bg-card/50 backdrop-blur-sm border-0 shadow-elegant transition-all duration-700 ${journeyVisibleCard.has(3)? "opacity-100 translate-y-0": "opacity-0 translate-y-6"}`}>
                <CardContent className="p-6 sm:p-8">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                      <span className="text-accent font-bold text-sm">MCT</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-3">Microsoft Recognition</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Microsoft India has chosen me as Microsoft Certified Trainer (MCT) to conduct Technical Sessions 
                        in Microsoft Touch Down, Ascend Training programs on behalf of Microsoft Inc. for leading Software 
                        Development Houses (ISV & SI partners of Microsoft).
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-foreground mb-12">
              Certifications & <span className="bg-gradient-accent bg-clip-text text-transparent">Specialties</span>
            </h2>
            
            <div ref={certRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className={`bg-card/50 backdrop-blur-sm border-0 shadow-elegant transition-all duration-700 ${visibleItems.has(0)? "opacity-100 translate-y-0": "opacity-0 translate-y-6"}`}>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-primary font-bold text-sm">MCT</span>
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Microsoft Certified Trainer</h3>
                  <p className="text-sm text-muted-foreground">Elite certification for technical training excellence</p>
                </CardContent>
              </Card>

              <Card className={`bg-card/50 backdrop-blur-sm border-0 shadow-elegant transition-all duration-700 ${visibleItems.has(1)? "opacity-100 translate-y-0": "opacity-0 translate-y-6"}`}>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-accent/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-accent font-bold text-sm">MCTS</span>
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Microsoft Certified Technology Specialist</h3>
                  <p className="text-sm text-muted-foreground">Specialized expertise in Microsoft technologies</p>
                </CardContent>
              </Card>

              <Card className={`bg-card/50 backdrop-blur-sm border-0 shadow-elegant transition-all duration-700 ${visibleItems.has(2)? "opacity-100 translate-y-0": "opacity-0 translate-y-6"}`}>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-primary font-bold text-sm">MCPD</span>
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Microsoft Certified Application Developer</h3>
                  <p className="text-sm text-muted-foreground">Advanced application development capabilities</p>
                </CardContent>
              </Card>

              <Card className={`bg-card/50 backdrop-blur-sm border-0 shadow-elegant transition-all duration-700 ${visibleItems.has(3)? "opacity-100 translate-y-0": "opacity-0 translate-y-6"}`}>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-accent/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-accent font-bold text-sm">MCSD</span>
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Microsoft Certified Software Developer</h3>
                  <p className="text-sm text-muted-foreground">Comprehensive software development mastery</p>
                </CardContent>
              </Card>

              <Card className={`bg-card/50 backdrop-blur-sm border-0 shadow-elegant transition-all duration-700 ${visibleItems.has(4)? "opacity-100 translate-y-0": "opacity-0 translate-y-6"}`}>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-primary font-bold text-sm">MCTIP</span>
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Microsoft Certified IT Professional</h3>
                  <p className="text-sm text-muted-foreground">Professional-level IT expertise recognition</p>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-gradient-hero border-0 shadow-elegant mt-12">
              <CardContent className="p-6 sm:p-8 text-center">
                <p className="text-foreground font-medium text-base sm:text-lg">
                  These global certifications help in pushing learning and teaching capability to higher standards, 
                  ensuring that every student at Transflower Learning receives world-class mentorship.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 sm:py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Ready to Learn from <span className="bg-gradient-accent bg-clip-text text-transparent">Experience</span>?
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8">
              Join thousands of students who have transformed their careers under Ravi's mentorship
            </p>
            <Button 
              variant="hero" 
              size="lg"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Connect with Ravi
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RaviTambade;
