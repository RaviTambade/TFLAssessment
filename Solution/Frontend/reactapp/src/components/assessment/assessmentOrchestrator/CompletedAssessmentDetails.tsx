import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { WEBAPI_DOTNET_URL } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, CheckCircle2, XCircle } from "lucide-react";

interface AssessmentAnswerDetail {
  questionId: number;
  questionDescription: string;
  optionA?: string;
  optionB?: string;
  optionC?: string;
  optionD?: string;
  correctAnswer?: string;
  selectedOption?: string;
  isCorrect: boolean;
}

const CompletedAssessmentDetails = () => {
  const { assessmentId } = useParams();
  const navigate = useNavigate();

  const [answers, setAnswers] = useState<AssessmentAnswerDetail[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const currentUser = sessionStorage.getItem("current");

    if (!currentUser || !assessmentId) {
      setLoading(false);
      return;
    }

    const user = JSON.parse(currentUser);

    fetch(
      `${WEBAPI_DOTNET_URL}/Score/GetAssessmentAnswerDetails/${user.userid}/${assessmentId}`
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error("No answer details found");
        }
        return res.json();
      })
      .then((data) => setAnswers(data || []))
      .catch(() => setAnswers([]))
      .finally(() => setLoading(false));
  }, [assessmentId]);

  return (
    <section className="py-16 bg-background min-h-screen">
      <div className="container mx-auto px-4">

        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="mb-6 flex items-center gap-2 text-primary font-medium hover:underline"
        >
          <ArrowLeft size={18} />
          Back to completed assessments
        </button>

        {/* Heading */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground">
            Assessment Review
          </h1>
          <p className="text-muted-foreground mt-2">
            Review your answers and compare them with the correct ones.
          </p>
        </div>

        {loading ? (
          <div className="text-muted-foreground">Loading answers...</div>
        ) : answers.length === 0 ? (
          <div className="text-muted-foreground">
            No answer details available for this assessment.
          </div>
        ) : (
          <div className="space-y-6">
            {answers.map((item, index) => (
              <Card
                key={item.questionId}
                className="border shadow-md hover:shadow-lg transition-all duration-300"
              >
                <CardContent className="p-6">

                  {/* Question */}
                  <div className="flex items-start justify-between gap-4 mb-5">
                    <h2 className="text-lg font-semibold">
                      {index + 1}. {item.questionDescription}
                    </h2>

                    {item.isCorrect ? (
                      <span className="flex items-center gap-2 rounded-full bg-green-100 text-green-700 px-3 py-1 font-semibold">
                        <CheckCircle2 size={18} />
                        Correct
                      </span>
                    ) : (
                      <span className="flex items-center gap-2 rounded-full bg-red-100 text-red-700 px-3 py-1 font-semibold">
                        <XCircle size={18} />
                        Incorrect
                      </span>
                    )}
                  </div>

                  {/* Options */}
                  <div className="grid gap-3">
                    {[
                      { key: "A", value: item.optionA },
                      { key: "B", value: item.optionB },
                      { key: "C", value: item.optionC },
                      { key: "D", value: item.optionD },
                    ].map((option) => {

                      // IMPORTANT: Compare using A/B/C/D
                      const isCorrectOption =
                        option.key === item.correctAnswer;

                      const isSelectedOption =
                        option.key === item.selectedOption;

                      let className =
                        "flex items-center justify-between rounded-lg border p-4 transition-all duration-200";

                      if (item.isCorrect && isCorrectOption) {
                        className +=
                          " bg-green-100 border-green-500";
                      } else if (!item.isCorrect && isSelectedOption) {
                        className +=
                          " bg-red-100 border-red-500";
                      } else if (!item.isCorrect && isCorrectOption) {
                        className +=
                          " bg-green-100 border-green-500";
                      } else {
                        className +=
                          " bg-white border-gray-200";
                      }

                      return (
                        <div
                          key={`${item.questionId}-${option.key}`}
                          className={className}
                        >
                          <div className="flex items-center gap-3">
                            <span className="font-bold text-lg">
                              {option.key}.
                            </span>

                            <span>{option.value}</span>
                          </div>

                          <div>
                            {item.isCorrect && isCorrectOption && (
                              <CheckCircle2
                                className="text-green-600"
                                size={22}
                              />
                            )}

                            {!item.isCorrect && isSelectedOption && (
                              <XCircle
                                className="text-red-600"
                                size={22}
                              />
                            )}

                            {!item.isCorrect && isCorrectOption && (
                              <CheckCircle2
                                className="text-green-600"
                                size={22}
                              />
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Show only if wrong
                  {!item.isCorrect && (
                    <div className="mt-5 rounded-lg border border-green-300 bg-green-50 p-4">
                      <p className="text-sm text-green-700">
                        Correct Answer
                      </p>

                      <p className="font-semibold text-green-800 mt-1">
                        {item.correctAnswer}
                      </p>
                    </div>
                  )} */}

                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default CompletedAssessmentDetails;