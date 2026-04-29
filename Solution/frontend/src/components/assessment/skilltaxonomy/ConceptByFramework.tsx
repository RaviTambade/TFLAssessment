import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Search, BookOpen, Loader2 } from "lucide-react";

type Framework = {
  id: number;
  frameworkName: string;
};

type Concept = {
  id: number;
  name: string;
};

const baseUrl = "http://localhost:8080/api/technologies";

const ConceptByFramework = () => {
  const [frameworks, setFrameworks] = useState<Framework[]>([]);
  const [frameworkName, setFrameworkName] = useState("");
  const [concepts, setConcepts] = useState<Concept[]>([]);
  const [loading, setLoading] = useState(false);
  const { ref, isVisible } = useScrollAnimation();

  useEffect(() => {
    fetch(`${baseUrl}/frameworks`)
      .then(res => res.json())
      .then(data => setFrameworks(Array.isArray(data) ? data : []))
      .catch(err => console.error(err));
  }, []);

  const handleSearch = async () => {
    if (!frameworkName.trim()) {
      return;
    }

    const framework = frameworks.find(f =>
      f.frameworkName.toLowerCase().includes(frameworkName.toLowerCase())
    );

    if (!framework) {
      setConcepts([]);
      return;
    }

    try {
      setLoading(true);

      const res = await fetch(
        `${baseUrl}/concepts/frameworks/${framework.id}`
      );

      const data = await res.json();
      setConcepts(Array.isArray(data) ? data : []);

    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-16 sm:py-24 bg-background min-h-[80vh] flex items-center">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Explore Concepts
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Discover core concepts by searching for your favorite development framework.
          </p>
        </div>

        <Card 
          ref={ref}
          className={`border-0 shadow-elegant overflow-hidden transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Gradient Header */}
          <div className="bg-gradient-hero p-8 sm:p-12 text-center border-b border-border/50">
            {/* Input + Button Group */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="e.g. React, Spring Boot..."
                  value={frameworkName}
                  onChange={(e) => setFrameworkName(e.target.value)}
                  className="pl-10 h-12 bg-background/50 backdrop-blur-sm border-border focus:ring-primary"
                  onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                />
              </div>

              <Button 
                variant="hero" 
                onClick={handleSearch}
                className="h-12 px-8 shadow-glow hover:scale-105 transition-transform"
                disabled={loading || !frameworkName.trim()}
              >
                {loading ? <Loader2 className="h-4 w-4 animate-spin mr-2" /> : null}
                Get Concepts
              </Button>
            </div>
          </div>

          {/* Content area */}
          <CardContent className="p-8 sm:p-10 min-h-[200px]">
            {loading ? (
              <div className="flex flex-col items-center justify-center py-12 space-y-4">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
                <p className="text-muted-foreground animate-pulse">Fetching concepts...</p>
              </div>
            ) : concepts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {concepts.map((c, index) => (
                  <div
                    key={c.id}
                    className="group p-4 border border-border rounded-xl bg-muted/20 hover:bg-muted/50 hover:border-primary/30 transition-all duration-300 flex items-start gap-3"
                    style={{ transitionDelay: `${index * 50}ms` }}
                  >
                    <div className="mt-1 p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <BookOpen className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground group-hover:text-primary transition-colors">
                        {c.name}
                      </h4>
                      <p className="text-xs text-muted-foreground mt-1">
                        Core Concept
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ) : frameworkName ? (
              <div className="text-center py-12">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-4">
                  <Search className="h-8 w-8 text-muted-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">No concepts found</h3>
                <p className="text-muted-foreground">Try searching for a different framework.</p>
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground italic">
                  Enter a framework name above to see related concepts.
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ConceptByFramework;