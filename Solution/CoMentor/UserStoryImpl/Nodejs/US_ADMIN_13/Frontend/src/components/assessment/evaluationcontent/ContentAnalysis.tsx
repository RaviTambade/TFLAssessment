import { Card } from "../../ui/card";
import { useScrollAnimation } from "../../../hooks/use-scroll-animation";

const ContentAnalysis = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-16 sm:py-20 bg-background">
      <div className="container mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Content <span className="bg-gradient-primary bg-clip-text text-transparent">Analysis</span>
          </h2>

        </div>

        {/* Card */}
        <div className="max-w-6xl mx-auto">
          <Card
            ref={ref}
            className={`border-0 shadow-elegant overflow-hidden transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="bg-gradient-hero p-6 sm:p-8 rounded-2xl">

              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="text-foreground border-b border-primary/20">
                    <th className="py-4 text-lg font-semibold">Subject</th>
                    <th className="py-4 text-lg font-semibold">Concept</th>
                    <th className="py-4 text-lg font-semibold">Total Questions</th>
                  </tr>
                </thead>

                <tbody className="text-muted-foreground">

                  <tr className="border-b border-primary/10 hover:bg-primary/5 transition">
                    <td className="py-4 font-medium text-foreground">Java</td>
                    <td className="py-4">Multithreading</td>
                    <td className="py-4">
                      <span className="bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-medium">
                        12
                      </span>
                    </td>
                  </tr>

                  <tr className="border-b border-primary/10 hover:bg-primary/5 transition">
                    <td className="py-4 font-medium text-foreground">C++</td>
                    <td className="py-4">Inheritance</td>
                    <td className="py-4">
                      <span className="bg-yellow-100 text-yellow-700 px-4 py-1 rounded-full text-sm font-medium">
                        10
                      </span>
                    </td>
                  </tr>

                  <tr className="hover:bg-primary/5 transition">
                    <td className="py-4 font-medium text-foreground">Dotnet</td>
                    <td className="py-4">LINQ</td>
                    <td className="py-4">
                      <span className="bg-red-100 text-red-600 px-4 py-1 rounded-full text-sm font-medium">
                        15
                      </span>
                    </td>
                  </tr>

                </tbody>
              </table>

            </div>
          </Card>
        </div>

      </div>
    </section>
  );
};

export default ContentAnalysis;