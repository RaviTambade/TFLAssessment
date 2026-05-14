import React, { useEffect, useState } from "react";
import { Card, CardContent } from "../../ui/card";
import { Button } from "../../ui/button";
import { useNavigate, useParams } from "react-router-dom";
import { CheckCircle, ArrowLeft } from "lucide-react";
import { WEBAPI_DOTNET_URL } from "../../../lib/utils";
import ResultData from "./entities/ResultData";

const Result= () => {

  const navigate = useNavigate();

  const { assessmentId } = useParams();

  const [result, setResult] =
    useState<ResultData | null>(null);

  const [loading, setLoading] =
    useState<boolean>(true);

  const [error, setError] =
    useState<string | null>(null);

  useEffect(() => {

    // ✅ FIXED: read studentId from "current" key, same as applyAssessment.tsx
    const currentStudent = JSON.parse(
      sessionStorage.getItem("current") || "{}"
    );

    const studentId = currentStudent?.userid;

    // Guard: if either id is missing, don't call API
    if (!studentId || !assessmentId) {
      setError("Missing student or assessment information.");
      setLoading(false);
      return;
    }

    console.log("studentId:", studentId);
    console.log("assessmentId:", assessmentId);

    fetch(
      `${WEBAPI_DOTNET_URL}/Score/GetAssessmentResultData/${studentId}/${assessmentId}`
    )
      .then(async (res) => {

        if (!res.ok) {
          throw new Error("Failed to fetch result");
        }

        return res.json();
      })
      .then((data: ResultData) => {

        setResult(data);
      })
      .catch((err) => {

        console.error(err);
        setError("Could not load result. Please try again.");
      })
      .finally(() => {

        setLoading(false);
      });

  // ✅ assessmentId in dependency array so it re-fetches if route param changes
  }, [assessmentId]);

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

                {/* LOADING */}
                {loading && (
                  <p className="text-muted-foreground">
                    Loading result...
                  </p>
                )}

                {/* ERROR */}
                {!loading && error && (
                  <p className="text-red-500">
                    {error}
                  </p>
                )}

                {/* RESULT */}
                {!loading && result && (
                  <div className="space-y-4 text-lg">

                    <p>
                      <strong>Test Title:</strong>{" "}
                      {result.testTitle}
                    </p>

                    <p>
                      <strong>Total Questions:</strong>{" "}
                      {result.totalQuestions}
                    </p>

                    <p>
                      <strong>Correct Answers:</strong>{" "}
                      {result.correctAnswers}
                    </p>

                    <p>
                      <strong>Wrong Answers:</strong>{" "}
                      {result.wrongAnswers}
                    </p>

                    <p>
                      <strong>Percentage:</strong>{" "}
                      {result.scorePercentage.toFixed(2)}%
                    </p>

                  </div>
                )}

                {/* NO DATA */}
                {!loading && !result && !error && (
                  <p className="text-red-500">
                    No result data found.
                  </p>
                )}

                <Button
                  onClick={() =>
                    navigate("/models/upcoming-assessment")
                  }
                  className="mt-8"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Assessments
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