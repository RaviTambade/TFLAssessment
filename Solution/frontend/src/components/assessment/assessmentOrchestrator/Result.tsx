import React, { useEffect, useState } from "react";
import { Card, CardContent } from "../../ui/card";
import { Button } from "../../ui/button";
import { useNavigate } from "react-router-dom";
import { CheckCircle, ArrowLeft } from "lucide-react";

interface ResultData {
  score: number;
  totalQuestions: number;
  correctAnswers: number;
  wrongAnswers: number;
  percentage: number;
}

const Result: React.FC = () => {
  const navigate = useNavigate();
  const [result, setResult] = useState<ResultData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //get userid from session storage
    //get assessmentid from url pramerter or urlroute
    
    //http://localhost:5201/api/students/4/assessment/7/result
    fetch("http://localhost:5201/api/Assessment/4/7")
      .then(async (res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch result");
        }
        return res.json();
      })
      .then((data) => {
        setResult(data);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <section className="py-16 sm:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <Card className="border-0 shadow-elegant overflow-hidden">
            <div className="bg-gradient-hero p-6 sm:p-8">
              <CardContent className="text-center">
                <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />

                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Assessment Result
                </h2>

                {loading ? (
                  <p className="text-muted-foreground">Loading result...</p>
                ) : result ? (
                  <div className="space-y-4 text-lg">
                    <p><strong>Score:</strong> {result.score}</p>
                    <p><strong>Total Questions:</strong> {result.totalQuestions}</p>
                    <p><strong>Correct Answers:</strong> {result.correctAnswers}</p>
                    <p><strong>Wrong Answers:</strong> {result.wrongAnswers}</p>
                    <p><strong>Percentage:</strong> {result.percentage}%</p>
                  </div>
                ) : (
                  <p className="text-red-500">Failed to load result</p>
                )}

                <Button
                  onClick={() =>
                    navigate("/assessmentorchestrator/assessmentorchestrator-menu")
                  }
                  className="mt-8"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Menu
                </Button>
              </CardContent>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Result;