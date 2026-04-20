import { useState } from "react";
import { Card, CardContent } from "../../ui/card";
import { Button } from "../../ui/button";
import { useScrollAnimation } from "../../../hooks/use-scroll-animation";

interface LayerItem {
  title: string;
  icon: string;
  techs: string[];
}

const layers: LayerItem[] = [
  { title: "Frontend", icon: "🖥️", techs: ["React", "Angular", "Vue", "Next.js"] },
  { title: "Backend",  icon: "⚙️",  techs: ["Express JS", "Next JS", "Springboot", "Django", "Node.js"] },
  { title: "Database", icon: "🗄️", techs: ["SQL", "MongoDB", "MySQL", "PostgreSQL"] },
];

const DisplayLayer = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [selected, setSelected] = useState<Record<string, string[]>>({
    Frontend: ["React"],
    Backend: ["Express JS"],
    Database: ["MongoDB"],
  });
  const [shown, setShown] = useState(false);

  const toggle = (layer: string, tech: string) => {
    setSelected((prev) => {
      const cur = prev[layer] || [];
      return {
        ...prev,
        [layer]: cur.includes(tech) ? cur.filter((t) => t !== tech) : [...cur, tech],
      };
    });
  };

  const totalSelected = Object.values(selected).flat().length;

  return (
    <section className="py-16 sm:py-20 bg-background">
      <div className="container mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Display{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Layer
            </span>
          </h2>
        </div>

        {/* Card */}
        <div className="max-w-5xl mx-auto">
          <Card
            ref={ref}
            className={`border-0 shadow-elegant overflow-hidden transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="bg-gradient-hero p-8 sm:p-10">
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {layers.map((layer) => {
                    const selCount = (selected[layer.title] || []).length;
                    return (
                      <div
                        key={layer.title}
                        className="bg-background rounded-lg p-5 border border-border flex flex-col gap-4"
                      >
                        {/* Layer header */}
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center text-xl shadow-elegant flex-shrink-0">
                            {layer.icon}
                          </div>
                          <div>
                            <div className="font-bold text-base text-foreground">
                              {layer.title}
                            </div>
                            <div className="text-xs font-semibold bg-gradient-primary bg-clip-text text-transparent">
                              {selCount} selected
                            </div>
                          </div>
                        </div>

                        {/* Tech rows */}
                        <div className="flex flex-col gap-2">
                          {layer.techs.map((tech) => {
                            const checked = (selected[layer.title] || []).includes(tech);
                            return (
                              <Button
                                key={tech}
                                variant={checked ? "hero" : "outline"}
                                onClick={() => toggle(layer.title, tech)}
                                className="!whitespace-normal justify-start gap-3 h-auto py-2.5 px-3.5 text-left transition-all duration-300 hover:-translate-y-0.5"
                              >
                                {/* Checkbox indicator */}
                                <div className={`w-4 h-4 rounded flex-shrink-0 flex items-center justify-center border-2 transition-all duration-200 ${
                                  checked
                                    ? "border-white/50 bg-white/25"
                                    : "border-primary/40 bg-transparent"
                                }`}>
                                  {checked && (
                                    <span className="text-white text-[10px] font-black leading-none">✓</span>
                                  )}
                                </div>
                                <span className={`text-sm ${checked ? "font-semibold" : "font-normal"}`}>
                                  {tech}
                                </span>
                              </Button>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </div>
          </Card>
        </div>

        {/* Analytics result */}
        {shown && (
          <div className="max-w-5xl mx-auto mt-6 bg-gradient-hero border border-border rounded-lg p-5 animate-in fade-in slide-in-from-bottom-2 duration-300">
            <div className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-3">
              Selected Stack ({totalSelected} technologies)
            </div>
            <div className="flex flex-wrap gap-2">
              {Object.entries(selected).map(([layer, techs]) =>
                techs.map((t) => (
                  <span
                    key={layer + t}
                    className="bg-gradient-primary text-primary-foreground rounded-full px-3.5 py-1 text-xs font-semibold"
                  >
                    {layer}: {t}
                  </span>
                ))
              )}
            </div>
          </div>
        )}

        {/* Show Analytics Button */}
        <div className="flex justify-center mt-8">
          <Button
            variant="hero"
            onClick={() => setShown((p) => !p)}
            className="px-10 py-3 transition-all duration-300 hover:-translate-y-1"
          >
            {shown ? "Hide Analytics" : "Show Analytics"}
          </Button>
        </div>

      </div>
    </section>
  );
};

export default DisplayLayer;
