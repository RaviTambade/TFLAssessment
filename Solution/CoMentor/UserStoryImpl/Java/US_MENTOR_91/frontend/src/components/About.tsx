import { useState } from "react";
import { Code2 } from "lucide-react";

interface Runtime {
  runtime_name: string;
}

const RuntimeSection = () => {
  const [data, setData] = useState<Runtime[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchRuntimes = () => {
    setLoading(true);

    fetch("http://localhost:8080/api/runtimes")
      .then((res) => res.json())
      .then((result) => {
        setData(result);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  };

  return (
    <section className="min-h-screen py-16 sm:py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            🚀 Runtime Explorer
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Click below to view all runtimes
          </p>
        </div>

        {/* Card container */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-hero p-6 sm:p-8 rounded-3xl shadow-elegant transition-all duration-500">
            {/* Button */}
            <div className="text-center mb-10">
              <button
                onClick={fetchRuntimes}
                className="bg-gradient-primary text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:scale-105 transition-transform"
              >
                {loading ? "Loading..." : "Show Runtimes"}
              </button>
            </div>

            {/* Grid */}
            {data.length > 0 && (
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                {data.map((item, index) => (
                  <div
                    key={index}
                    className="bg-background p-6 rounded-xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition duration-300"
                  >
                    <div className="flex items-center justify-center gap-2 mb-3">
                      <Code2 className="text-primary" />
                      <h3 className="font-semibold text-lg text-foreground">
                        {item.runtime_name}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RuntimeSection;