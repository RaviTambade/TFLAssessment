import { useEffect, useState } from "react";
import { Button } from "../../../ui/button";
import { Input } from "../../../ui/input";
import { Label } from "../../../ui/label";
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "../../../ui/card";


const CreateTest = () => {
      const navigate = useNavigate();
      const [testName, setTestName] = useState("");
      const [description, setDescription] = useState("");
      const [duration, setDuration] = useState("");
      const [error, setError] = useState<string | null>(null);      
      const [isSubmitting, setIsSubmitting] = useState(false);

 
      useEffect(() => {
        const userData = sessionStorage.getItem("current");

        if (userData) {
          const user = JSON.parse(userData);
          localStorage.setItem("smeId", String(user.userid || user.id));
        }
      }, []);
      
        // ==========================
        // SUBMIT FORM
        // ==========================
        const handleSubmit = async (e: React.FormEvent) => {
          e.preventDefault();
          if (isSubmitting) return;
      
          try {
            setError(null);
            setIsSubmitting(true);
      
            const smeId = Number(localStorage.getItem("smeId") || 0);
      
            const payload = {
              smeId: smeId,
              title: testName,
              description: description,
              duration: Number(duration)
            };
      
            console.log("Submitting Payload:", payload);

            setTestName("");
            setDescription("");
            setDuration("");
            navigate("/models/question-options", { state: { test: payload } });
          } catch (err) {
            setError("Failed to create test.");
            console.error(err);
          } finally {
            setIsSubmitting(false);
          }
        };

    return (
      <div className="w-full max-w-4xl mx-auto p-6">
        <Card className="border-0 shadow-soft ring-1 ring-slate-200">
          <CardHeader className="border-b border-slate-100 bg-slate-50/50">
            <CardTitle className="text-2xl font-bold text-slate-900">
              Create New Test
            </CardTitle>
          </CardHeader>

          <CardContent className="p-8">
            {error && (
              <div className="mb-6 p-4 border border-red-200 bg-red-50 rounded-xl">
                <p className="text-red-600 text-sm font-medium">{error}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* TEST NAME */}
              <div className="space-y-2">
                <Label className="text-sm font-bold text-slate-700 uppercase tracking-wider">
                  Test Name
                </Label>
                <Input
                  value={testName}
                  onChange={(e) => setTestName(e.target.value)}
                  placeholder="Enter test name"
                  className="h-12 rounded-xl border-slate-200 focus:ring-red-500"
                  required
                />
              </div>

              {/* DESCRIPTION */}
              <div className="space-y-2">
                <Label className="text-sm font-bold text-slate-700 uppercase tracking-wider">
                  Description
                </Label>
                <textarea
                  className="w-full border border-slate-200 rounded-xl p-3 focus:ring-2 focus:ring-red-500 focus:outline-none transition-all"
                  rows={4}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Enter description"
                  required
                />
              </div>

              {/* DURATION */}
              <div className="space-y-2">
                <Label className="text-sm font-bold text-slate-700 uppercase tracking-wider">
                  Duration (Minutes)
                </Label>
                <Input
                  type="number"
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                  placeholder="Enter duration"
                  className="h-12 rounded-xl border-slate-200 focus:ring-red-500"
                  required
                />
              </div>

              {/* BUTTONS */}
              <div className="mt-10 pt-6 border-t border-slate-100 flex gap-4">
                <Button type="submit" disabled={isSubmitting} className="flex-1 bg-red-600 hover:bg-red-700 text-white py-6 text-lg rounded-xl transition-all">
                  {isSubmitting ? "Creating..." : "Create Test"}
                </Button>
                <Button 
                  type="reset" 
                  variant="outline" 
                  className="flex-1 py-6 text-lg rounded-xl border-slate-200 hover:bg-slate-50"
                  onClick={() => {
                    setTestName("");
                    setDescription("");
                    setDuration("");
                  }}
                >
                  Clear
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    );
}

export default CreateTest;
