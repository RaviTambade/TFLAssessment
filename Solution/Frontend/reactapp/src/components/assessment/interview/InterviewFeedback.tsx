import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {Select,SelectContent,SelectItem,SelectTrigger,SelectValue} from "@/components/ui/select";
import { WEBAPI_JAVA_URL } from "@/lib/utils";
import { CalendarDays, MessageSquare, Star, ThumbsUp, User, Zap } from "lucide-react";
import { useState } from "react";

type InterviewFeedback = {
  interviewId: number;
  smeId: number;
  startTime: string;
  endTime: string;
  communicationRating: number;
  problemSolvingRating: number;
  strengths: string;
  feedbackComment: string;
  recommendation: string;
};

const INITIAL_STATE: InterviewFeedback = {
  interviewId: 10,
  smeId: 0,
  startTime: "",
  endTime: "",
  communicationRating: 0,
  problemSolvingRating: 0,
  strengths: "",
  feedbackComment: "",
  recommendation: "",
};

const InterviewFeedbackForm = () => {
  const [formData, setFormData] = useState<InterviewFeedback>(INITIAL_STATE);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "number" ? Number(value) : value,
    }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, recommendation: value }));
  };

  const submitFeedback = async () => {
    setIsSubmitting(true);
    try {
      const response = await fetch(`${WEBAPI_JAVA_URL}/interview/feedback`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Feedback submitted successfully!");
        setFormData(INITIAL_STATE);
      } else {
        alert("Failed to submit feedback. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitFeedback();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-100 flex items-center justify-center p-6">
      <div className="w-full max-w-2xl">

        {/* Header */}
        <div className="mb-6 text-center">
          <h1 className="text-3xl font-bold text-orange-900 tracking-tight">
            Interview Feedback
          </h1>
          <p className="mt-1 text-orange-500 text-sm">
            Submit your evaluation for the interview session
          </p>
        </div>

        <Card className="shadow-lg border border-orange-200 rounded-2xl overflow-hidden bg-white">
          <CardHeader className="bg-orange-500 px-8 py-6">
            <CardTitle className="text-xl font-bold text-white tracking-wide flex items-center gap-2">
              <MessageSquare className="h-5 w-5 text-white/80" />
              Evaluation Form
            </CardTitle>
            <CardDescription className="text-orange-100 text-sm mt-1">
              All fields are required unless noted otherwise.
            </CardDescription>
          </CardHeader>

          <CardContent className="pt-6 px-8 pb-8">
            <form onSubmit={handleSubmit} className="space-y-6">

              {/* Time Range */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label
                    htmlFor="startTime"
                    className="flex items-center gap-1.5 text-orange-700 font-medium"
                  >
                    <CalendarDays className="h-4 w-4 text-orange-400" />
                    Start Time
                  </Label>
                  <Input
                    id="startTime"
                    type="datetime-local"
                    name="startTime"
                    value={formData.startTime}
                    onChange={handleChange}
                    required
                    className="border-orange-200 focus-visible:ring-orange-400 text-orange-900 bg-orange-50/50"
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="endTime"
                    className="flex items-center gap-1.5 text-orange-700 font-medium"
                  >
                    <CalendarDays className="h-4 w-4 text-orange-400" />
                    End Time
                  </Label>
                  <Input
                    id="endTime"
                    type="datetime-local"
                    name="endTime"
                    value={formData.endTime}
                    onChange={handleChange}
                    required
                    className="border-orange-200 focus-visible:ring-orange-400 text-orange-900 bg-orange-50/50"
                  />
                </div>
              </div>

              {/* Ratings */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label
                    htmlFor="communicationRating"
                    className="flex items-center gap-1.5 text-orange-700 font-medium"
                  >
                    <Star className="h-4 w-4 text-orange-400" />
                    Communication Rating
                  </Label>
                  <Input
                    id="communicationRating"
                    type="number"
                    name="communicationRating"
                    value={formData.communicationRating || ""}
                    onChange={handleChange}
                    placeholder="1 – 10"
                    min={1}
                    max={10}
                    required
                    className="border-orange-200 focus-visible:ring-orange-400 text-orange-900 bg-orange-50/50"
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="problemSolvingRating"
                    className="flex items-center gap-1.5 text-orange-700 font-medium"
                  >
                    <Zap className="h-4 w-4 text-orange-400" />
                    Problem Solving Rating
                  </Label>
                  <Input
                    id="problemSolvingRating"
                    type="number"
                    name="problemSolvingRating"
                    value={formData.problemSolvingRating || ""}
                    onChange={handleChange}
                    placeholder="1 – 10"
                    min={1}
                    max={10}
                    required
                    className="border-orange-200 focus-visible:ring-orange-400 text-orange-900 bg-orange-50/50"
                  />
                </div>
              </div>

              {/* Strengths */}
              <div className="space-y-2">
                <Label
                  htmlFor="strengths"
                  className="flex items-center gap-1.5 text-orange-700 font-medium"
                >
                  <User className="h-4 w-4 text-orange-400" />
                  Strengths
                </Label>
                <Input
                  id="strengths"
                  type="text"
                  name="strengths"
                  value={formData.strengths}
                  onChange={handleChange}
                  placeholder="e.g. Strong analytical thinking, clear communicator…"
                  required
                  className="border-orange-200 focus-visible:ring-orange-400 text-orange-900 bg-orange-50/50"
                />
              </div>

              {/* Feedback Comment */}
              <div className="space-y-2">
                <Label
                  htmlFor="feedbackComment"
                  className="flex items-center gap-1.5 text-orange-700 font-medium"
                >
                  <MessageSquare className="h-4 w-4 text-orange-400" />
                  Feedback Comment
                </Label>
                <Textarea
                  id="feedbackComment"
                  name="feedbackComment"
                  value={formData.feedbackComment}
                  onChange={handleChange}
                  placeholder="Provide detailed feedback about the candidate's performance…"
                  required
                  rows={4}
                  className="border-orange-200 focus-visible:ring-orange-400 text-orange-900 bg-orange-50/50 resize-none"
                />
              </div>

              {/* Recommendation */}
              <div className="space-y-2">
                <Label
                  htmlFor="recommendation"
                  className="flex items-center gap-1.5 text-orange-700 font-medium"
                >
                  <ThumbsUp className="h-4 w-4 text-orange-400" />
                  Recommendation
                </Label>
                <Select
                  value={formData.recommendation}
                  onValueChange={handleSelectChange}
                  required
                >
                  <SelectTrigger
                    id="recommendation"
                    className="border-orange-200 text-orange-900 focus:ring-orange-400 bg-orange-50/50"
                  >
                    <SelectValue placeholder="Select a recommendation" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="SELECTED">
                      <span className="flex items-center gap-2">
                        <span className="inline-block h-2 w-2 rounded-full bg-green-500" />
                        Selected
                      </span>
                    </SelectItem>
                    <SelectItem value="REJECTED">
                      <span className="flex items-center gap-2">
                        <span className="inline-block h-2 w-2 rounded-full bg-red-500" />
                        Rejected
                      </span>
                    </SelectItem>
                    <SelectItem value="HOLD">
                      <span className="flex items-center gap-2">
                        <span className="inline-block h-2 w-2 rounded-full bg-amber-400" />
                        Hold
                      </span>
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Divider */}
              <div className="border-t border-orange-100 pt-2" />

              {/* Submit */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-11 text-base font-semibold bg-orange-500 hover:bg-orange-600 text-white transition-colors rounded-xl shadow-sm disabled:opacity-60"
              >
                {isSubmitting ? "Submitting…" : "Submit Feedback"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default InterviewFeedbackForm;
