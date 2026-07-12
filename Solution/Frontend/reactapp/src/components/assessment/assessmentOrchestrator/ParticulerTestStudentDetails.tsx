import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft,Calendar,Clock,BookOpen,Users,Loader2,} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { WEBAPI_DOTNET_URL } from "@/lib/utils";

import TestStudentDetails from "./entities/TestStudentDetails";

const ParticulerTestStudentDetails = () => {
  const { testId } = useParams();
  const navigate = useNavigate();

  const [details, setDetails] = useState<TestStudentDetails | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${WEBAPI_DOTNET_URL}/CreateTest/testStudentDetails/${testId}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch details");
        }
        return res.json();
      })
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          setDetails(data[0]);
        }
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [testId]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex justify-center items-center">
        <Loader2 className="w-10 h-10 animate-spin text-primary" />
      </div>
    );
  }

  if (!details) {
    return (
      <div className="min-h-screen bg-background flex justify-center items-center">
        <h2 className="text-2xl font-semibold text-muted-foreground">
          No Test Details Found
        </h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-8">

      <div className="max-w-7xl mx-auto space-y-8">

        {/* Header */}

        <div className="flex justify-between items-center">

          <div>
            <h1 className="text-4xl font-bold text-primary">
              {details.title}
            </h1>

            <p className="text-muted-foreground mt-2">
              Test Information & Assigned Students
            </p>
          </div>

          <Button
            variant="outline"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>

        </div>

        {/* Statistics */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          <Card className="border-0 shadow-elegant hover:shadow-glow transition-all">

            <CardContent className="p-6 flex justify-between items-center">

              <div>
                <p className="text-sm text-muted-foreground">
                  Difficulty
                </p>

                <Badge className="mt-3">
                  {details.difficulty}
                </Badge>
              </div>

              <BookOpen className="w-10 h-10 text-primary" />

            </CardContent>

          </Card>

          <Card className="border-0 shadow-elegant hover:shadow-glow transition-all">

            <CardContent className="p-6 flex justify-between items-center">

              <div>
                <p className="text-sm text-muted-foreground">
                  Duration
                </p>

                <p className="text-3xl font-bold mt-2">
                  {details.duration}
                </p>

                <p className="text-sm text-muted-foreground">
                  Minutes
                </p>
              </div>

              <Clock className="w-10 h-10 text-primary" />

            </CardContent>

          </Card>

          <Card className="border-0 shadow-elegant hover:shadow-glow transition-all">

            <CardContent className="p-6 flex justify-between items-center">

              <div>
                <p className="text-sm text-muted-foreground">
                  Created
                </p>

                <p className="font-semibold mt-2">
                  {new Date(details.createdAt).toLocaleDateString()}
                </p>
              </div>

              <Calendar className="w-10 h-10 text-primary" />

            </CardContent>

          </Card>

          <Card className="border-0 shadow-elegant hover:shadow-glow transition-all">

            <CardContent className="p-6 flex justify-between items-center">

              <div>
                <p className="text-sm text-muted-foreground">
                  Students
                </p>

                <p className="text-3xl font-bold mt-2">
                  {details.studentName.split(",").length}
                </p>
              </div>

              <Users className="w-10 h-10 text-primary" />

            </CardContent>

          </Card>

        </div>

        {/* Students */}

        <Card className="border-0 shadow-elegant">

          <CardContent className="p-8">

            <div className="flex items-center gap-3 mb-6">

              <Users className="w-7 h-7 text-primary" />

              <h2 className="text-2xl font-bold">
                Assigned Students
              </h2>

            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

              {details.studentName
                .split(",")
                .map((student, index) => (

                  <div
                    key={index}
                    className="border rounded-xl p-4 bg-background hover:shadow-glow transition-all"
                  >

                    <div className="flex items-center gap-3">

                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">

                        <Users className="w-5 h-5 text-primary" />

                      </div>

                      <div>

                        <p className="font-semibold">
                          {student.trim()}
                        </p>

                        <p className="text-xs text-muted-foreground">
                          Assigned Student
                        </p>

                      </div>

                    </div>

                  </div>

                ))}

            </div>

          </CardContent>

        </Card>

      </div>

    </div>
  );
};

export default ParticulerTestStudentDetails;