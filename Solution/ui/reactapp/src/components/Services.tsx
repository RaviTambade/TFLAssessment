import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { useStaggeredAnimation } from "../hooks/use-scroll-animation";

const Services = () => {
  const { ref, visibleItems } = useStaggeredAnimation(4, 200);
  
  const services = [
    {
      title: "Online Live Classes",
      description: "Interactive sessions with expert mentors from anywhere in the world.",
      features: ["Live coding sessions", "Real-time Q&A", "Recorded lectures", "Project guidance"],
      gradient: "bg-gradient-primary"
    },
    {
      title: "Co-Learning Space",
      description: "Physical space designed for collaboration and focused learning.",
      features: ["Quiet study pods", "Group project rooms", "High-speed internet", "Mentors on-site"],
      gradient: "bg-gradient-accent"
    },
    {
      title: "Community & Events",
      description: "Join our vibrant community of learners and professionals.",
      features: ["Design sprints", "Hackathons", "Networking events", "Guest lectures"],
      gradient: "bg-gradient-primary"
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Our <span className="bg-gradient-primary bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We offer a comprehensive learning ecosystem that combines the best of online and offline education
          </p>
        </div>
        
        <div ref={ref} className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`relative overflow-hidden border-0 shadow-elegant hover:shadow-glow transition-all duration-500 group ${
                visibleItems.has(index) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
            >
              <div className={`absolute top-0 left-0 right-0 h-1 ${service.gradient}`}></div>
              <CardHeader className="pt-8">
                <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-smooth">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
