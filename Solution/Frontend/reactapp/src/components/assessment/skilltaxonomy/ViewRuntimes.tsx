import { useState } from "react";
import { Code2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import { WEBAPI_JAVA_URL } from "@/lib/utils";


interface Runtime {
  id: number;
  runtimeName: string;
}

const ViewRuntimes = () => {
  const [data, setData] = useState<Runtime[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchRuntimes = () => {
    setLoading(true);

    fetch(`${WEBAPI_JAVA_URL}/technologies/runtimes`)
      .then((res) => res.json())
      .then((result) => {
        console.log("API DATA:", result);
        setData(result);
        setLoading(false);
      })
      .catch((err) => {
        // console.error(err);
        setLoading(false);
      });
  };

  return (
    <section className="py-16 sm:py-20 bg-background min-h-screen">
      <div className="container mx-auto px-4">

        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Runtime Explorer</span>
          </h2>
          <p className="text-lg text-muted-foreground">

          </p>
        </div>

        {/* Button */}
        <div className="text-center mb-10">
          <Button variant="hero" size="lg" onClick={fetchRuntimes}>
            {loading ? "Loading..." : "Show Runtimes"}
          </Button>
        </div>

        {/* Cards Grid */}
        {data.length > 0 && (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">

            {data.map((item) => (
              <Card
                key={item.id}
                className="border-0 shadow-elegant hover:shadow-glow transition-all duration-300 hover:-translate-y-2"
              >
                <CardContent className="p-6 text-center bg-gradient-hero rounded-xl">
                  <div className="flex flex-col items-center gap-3">

                    <div className="p-3 rounded-full bg-primary/10">
                      <Code2 className="text-primary" size={24} />
                    </div>

                    <h3 className="text-lg font-semibold text-foreground">
                      {item.runtimeName}
                    </h3>

                  </div>
                </CardContent>
              </Card>
            ))}

          </div>
        )}

      </div>
    </section>
  );
};

export default ViewRuntimes;