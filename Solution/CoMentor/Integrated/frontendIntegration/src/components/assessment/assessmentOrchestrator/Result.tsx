import React from "react";
import { Card, CardContent } from "../../ui/card";
import { Button } from "../../ui/button";
import { useNavigate } from "react-router-dom";
import { CheckCircle, ArrowLeft } from "lucide-react";

const Result: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16 sm:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <Card className="border-0 shadow-elegant overflow-hidden">
            <div className="bg-gradient-hero p-6 sm:p-8">
              <CardContent className="text-center">
                <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Assessment Submitted Successfully!
                </h2>
                <p className="text-muted-foreground mb-8">
                  Thank you for completing the assessment. Your responses have been recorded.
                </p>
  <button
        onClick={() =>
          navigate("/assessmentorchestrator/assessmentorchestrator-menu")
        }
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          background: "red",
          color: "white",
          border: "none",
          borderRadius: "5px",
        }}
      >
        Back to Assessment Menu
      </button>
              </CardContent>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Result;