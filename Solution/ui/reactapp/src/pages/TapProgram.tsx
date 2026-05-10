import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
const tapMentorshipImage = "/lovable-uploads/4d337acd-af67-490d-b096-ce518c77eb2d.png";
const fullstackDevImage = "/lovable-uploads/1ff8c509-d753-4dcf-89a0-4c15274f6aea.png";

const TapProgram = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 sm:py-28 bg-gradient-hero pt-28 sm:pt-24 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            {/* Logo */}
            <div className="mb-8 animate-fade-in">
              <img 
                src="/lovable-uploads/928e8aa6-d68c-4246-a826-a275c738bacd.png" 
                alt="TAP Program Logo" 
                className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-6 drop-shadow-lg"
              />
            </div>

            {/* Main Title */}
            <div className="mb-8">
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-foreground mb-4 tracking-tight">
                <span className="inline-block animate-fade-in">T</span>
                <span className="inline-block animate-fade-in delay-100">A</span>
                <span className="inline-block animate-fade-in delay-200">P</span>
                <span className="mx-4 bg-gradient-accent bg-clip-text text-transparent inline-block animate-fade-in delay-300">Program</span>
              </h1>
              <div className="h-1 w-32 bg-gradient-accent mx-auto rounded-full mb-6 animate-fade-in delay-500"></div>
            </div>

            {/* Subtitle */}
            <p className="text-xl sm:text-2xl text-muted-foreground mb-12 px-4 animate-fade-in delay-700 font-medium">
              Transflower Acceleration Program
              <br />
              <span className="text-primary font-semibold">Your Gateway to FullStack Development Excellence</span>
            </p>

            {/* Key Message Cards */}
            <div className="grid md:grid-cols-2 gap-6 mb-12 animate-fade-in delay-1000">
              <Card className="bg-card/80 backdrop-blur-md border-primary/20 shadow-elegant hover:shadow-glow transition-all duration-300 hover:scale-105">
                <CardContent className="p-8">
                  <div className="text-4xl mb-4">🎯</div>
                  <h3 className="text-xl font-bold text-foreground mb-3">Mentorship-Driven</h3>
                  <p className="text-muted-foreground">
                    To build FullStack development skills, you don't need an institution — you need a mentor.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-card/80 backdrop-blur-md border-accent/20 shadow-elegant hover:shadow-glow transition-all duration-300 hover:scale-105">
                <CardContent className="p-8">
                  <div className="text-4xl mb-4">🚀</div>
                  <h3 className="text-xl font-bold text-foreground mb-3">Accelerated Learning</h3>
                  <p className="text-muted-foreground">
                    Fast-track your journey from beginner to industry-ready FullStack developer.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 backdrop-blur-sm rounded-3xl p-8 sm:p-12 shadow-elegant mx-4 sm:mx-0 animate-fade-in delay-1200">
              <p className="text-2xl sm:text-3xl font-bold bg-gradient-accent bg-clip-text text-transparent mb-6">
                TAP your potential. Transform your future.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button 
                  variant="hero" 
                  size="lg"
                  className="text-lg px-8 py-4 hover:scale-105 transition-transform duration-300"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Start Your Journey
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="text-lg px-8 py-4 hover:scale-105 transition-transform duration-300"
                  onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <img
                src={tapMentorshipImage}
                alt="TAP Program students in mentorship session"
                className="rounded-3xl shadow-elegant mx-auto max-w-2xl w-full"
              />
            </div>
            
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                🌼 Transflower's TAP <span className="bg-gradient-accent bg-clip-text text-transparent">Vision</span>
              </h2>
              <p className="text-2xl text-primary font-semibold">
                Empowering Dreams, Shaping Futures
              </p>
            </div>

            <Card className="bg-card/50 backdrop-blur-sm border-0 shadow-elegant mb-8">
              <CardContent className="p-8">
                <p className="text-muted-foreground leading-relaxed mb-6">
                  At Transflower, we believe every student enters higher education with a dream — a dream to learn, grow, and build a meaningful career. Behind every student stands a circle of hope: their parents, relatives, friends, and mentors, all eager to see that dream fulfilled.
                </p>
                
                <div className="bg-primary/10 rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-primary mb-3">🎯 Our Mission:</h3>
                  <p className="text-foreground">
                    To ensure that no capable mind is left behind due to lack of direction, opportunity, or support.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-0 shadow-elegant">
              <CardContent className="p-8">
                <p className="text-muted-foreground leading-relaxed">
                  Many students work hard, study sincerely, and complete their degrees. But still, something is missing — the bridge between education and employability. Despite their dedication, countless graduates find themselves in jobs unrelated to their qualifications or below their potential. This is not just a personal loss — it's a loss to the society, the industry, and the nation's economy.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why TAP Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">
              🧭 Why <span className="bg-gradient-accent bg-clip-text text-transparent">TAP</span>?
            </h2>
            
            <Card className="bg-card/50 backdrop-blur-sm border-0 shadow-elegant mb-8">
              <CardContent className="p-8">
                <p className="text-muted-foreground leading-relaxed mb-6">
                  At Transflower, we draw inspiration from ancient Indian wisdom, where gurus didn't just teach — they adopted students as their own responsibility. This spirit of mentorship through adoption is central to TAP.
                </p>
                
                <div className="bg-gradient-subtle rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-primary mb-4">We adopt learners not just as students, but as future professionals, committed to:</h3>
                  <ul className="space-y-2 text-foreground">
                    <li>• Guiding them step-by-step</li>
                    <li>• Building confidence, not just skills</li>
                    <li>• Creating real project experiences</li>
                    <li>• Helping them shape careers they deserve</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What Makes TAP Different */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <img
                src={fullstackDevImage}
                alt="TAP Program students learning with mentor guidance"
                className="rounded-3xl shadow-elegant mx-auto max-w-2xl w-full"
              />
            </div>
            
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">
              💡 What Makes TAP <span className="bg-gradient-accent bg-clip-text text-transparent">Different</span>?
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-card/50 backdrop-blur-sm border-0 shadow-elegant">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-primary mb-3">Skill-Centric Mentorship</h3>
                  <p className="text-muted-foreground">We don't just train; we adopt skill-focused growth journeys.</p>
                </CardContent>
              </Card>
              
              <Card className="bg-card/50 backdrop-blur-sm border-0 shadow-elegant">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-primary mb-3">Project-Based Learning</h3>
                  <p className="text-muted-foreground">Our programs are rooted in real-world applications, not just theory.</p>
                </CardContent>
              </Card>
              
              <Card className="bg-card/50 backdrop-blur-sm border-0 shadow-elegant">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-primary mb-3">Mentor-Driven Success</h3>
                  <p className="text-muted-foreground">We walk with every student through their personal roadmap.</p>
                </CardContent>
              </Card>
              
              <Card className="bg-card/50 backdrop-blur-sm border-0 shadow-elegant">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-primary mb-3">Bridge the Employability Gap</h3>
                  <p className="text-muted-foreground">We ensure your degree finds its true relevance in industry.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-8">
              🌟 Our <span className="bg-gradient-accent bg-clip-text text-transparent">Commitment</span>
            </h2>
            
            <Card className="bg-card/50 backdrop-blur-sm border-0 shadow-elegant mb-8">
              <CardContent className="p-8">
                <blockquote className="text-2xl font-bold text-primary mb-6">
                  "Give us your time, trust, and willpower — and we'll give you a transformed future."
                </blockquote>
                
                <p className="text-muted-foreground leading-relaxed">
                  At Transflower, we are not just building careers. We are restoring dreams, empowering families, and redefining education with purpose.
                </p>
              </CardContent>
            </Card>

            <Button 
              variant="hero" 
              size="lg"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Join TAP Program Today
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TapProgram;