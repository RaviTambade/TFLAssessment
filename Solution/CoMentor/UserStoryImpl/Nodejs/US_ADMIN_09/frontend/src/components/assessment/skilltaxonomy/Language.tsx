import { Card, CardContent } from "../../ui/card";
import { Button } from "../../ui/button";
import { useScrollAnimation } from "../../../hooks/use-scroll-animation";
import { BookOpen, Plus, Trash2, Eye, Edit } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Language = () => {
  const { ref, isVisible } = useScrollAnimation();
  const navigate = useNavigate();

  return (
    <section id="languages" className="py-16 sm:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Language Management
          </h2>
        </div>
        <div className="max-w-5xl mx-auto">
          <Card
            ref={ref}
            className={`border-0 shadow-elegant overflow-hidden transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="bg-gradient-hero p-8 sm:p-10">
              <CardContent className="text-center">
                <div className="flex justify-center mb-6">
                  <div className="p-4 rounded-full bg-primary/10 shadow-glow">
                    <BookOpen className="h-10 w-10 text-primary" />
                  </div>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-8">
                  LANGUAGE MANAGEMENT COMPONENT 🌐
                </h3>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button onClick={() => navigate("/models/skilltaxonomy/languages/add")} variant="hero" className="group">
                    <Plus className="mr-2 h-4 w-4" />
                    Add Language
                  </Button>
                  <Button onClick={() => navigate("/models/skilltaxonomy/languages/delete")} variant="hero" className="group">
                    <Trash2 className="mr-2 h-4 w-4" />
                    Delete Language
                  </Button>
                  <Button onClick={() => navigate("/models/skilltaxonomy/languages/display")} variant="hero" className="group">
                    <Eye className="mr-2 h-4 w-4" />
                    Display Language
                  </Button>
                  <Button onClick={() => navigate("/models/skilltaxonomy/languages/edit")} variant="hero" className="group">
                    <Edit className="mr-2 h-4 w-4" />
                    Update Language
                  </Button>
                </div>
              </CardContent>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Language;