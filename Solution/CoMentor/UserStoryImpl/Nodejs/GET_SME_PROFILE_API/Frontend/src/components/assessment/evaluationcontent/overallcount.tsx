import { useState, useEffect } from "react";
import { Card, CardContent } from "../../ui/card";
import { Button } from "../../ui/button";
import { useScrollAnimation } from "../../../hooks/use-scroll-animation";

interface StatItem {
  label: string;
  value: number;
}

const initialStats: StatItem[] = [
  { label: "Total Questions", value: 25 },
  { label: "Runtime", value: 10 },
  { label: "Language", value: 10 },
  { label: "Layers", value: 10 },
  { label: "Technology", value: 10 },
  { label: "Question Type", value: 5 },
  { label: "Concept", value: 10 },
];

function useCountUp(target: number, duration: number = 900, trigger: boolean = true): number {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!trigger) { setCount(0); return; }
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [target, trigger]);
  return count;
}

function StatButton({ label, value, trigger }: { label: string; value: number; trigger: boolean }) {
  const count = useCountUp(value, 900, trigger);
  return (
    <Button
      variant="hero"
      className="!whitespace-normal flex flex-col items-center justify-center py-8 h-auto space-y-3 text-center transition-all duration-300 hover:-translate-y-2"
    >
      <span className="text-lg font-medium leading-snug">{label}</span>
      <span className="text-4xl sm:text-5xl font-bold">{trigger ? count : 0}</span>
    </Button>
  );
}

const QuickStatistics = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [stats, setStats] = useState<StatItem[]>(initialStats);
  const [loading, setLoading] = useState(false);

  const handleRefresh = () => {
    setLoading(true);
    setTimeout(() => {
      setStats(
        initialStats.map((s) => ({
          ...s,
          value: s.value + Math.floor(Math.random() * 15 + 1),
        }))
      );
      setLoading(false);
    }, 500);
  };

  return (
    <section id="statistics" className="py-16 sm:py-20 bg-background">
      <div className="container mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Quick{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Statistics
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
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                  {stats.map((stat, index) => (
                    <StatButton
                      key={index}
                      label={stat.label}
                      value={stat.value}
                      trigger={isVisible}
                    />
                  ))}
                </div>
              </CardContent>
            </div>
          </Card>
        </div>

        {/* Refresh Stats Button */}
        <div className="flex justify-center mt-8">
          <Button
            variant="hero"
            onClick={handleRefresh}
            disabled={loading}
            className="px-10 py-3 transition-all duration-300 hover:-translate-y-1"
          >
            {loading ? "Refreshing..." : "Refresh Stats"}
          </Button>
        </div>

      </div>
    </section>
  );
};

export default QuickStatistics;
