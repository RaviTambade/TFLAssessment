import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const VideoShowcase = () => {
  const featuredVideos = [
    {
      id: "sGtYfeERpbU",
      title: "Featured Learning Session 1",
      description: "Learn with Ravi Tambade's expert guidance"
    },
    {
      id: "418wT7qepKA", 
      title: "Featured Learning Session 2",
      description: "Deep dive into technology concepts"
    },
    {
      id: "YdvG9-PmRg8",
      title: "Featured Learning Session 3", 
      description: "Practical programming techniques"
    }
  ];

  return (
    <section id="videos" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Learn from <span className="bg-gradient-primary bg-clip-text text-transparent">Expert Sessions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Watch Ravi Tambade's educational videos and learn from his extensive teaching experience
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {featuredVideos.map((video, index) => (
            <Card key={index} className="border-0 shadow-elegant overflow-hidden hover:shadow-glow transition-smooth">
              <div className="relative aspect-video">
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-semibold text-foreground">
                  {video.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  {video.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <div className="bg-card/50 backdrop-blur-sm rounded-3xl p-8 shadow-elegant max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Explore More Learning Content
            </h3>
            <p className="text-muted-foreground mb-6">
              Visit our YouTube channel for comprehensive tutorials, live sessions, and educational content covering various technology topics.
            </p>
            <Button 
              variant="hero" 
              size="lg"
              onClick={() => window.open('https://www.youtube.com/@ravitambade-transflower', '_blank')}
            >
              Visit YouTube Channel
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoShowcase;