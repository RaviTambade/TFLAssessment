import { Card, CardContent } from "../../../ui/card";
import { Button } from "../../../ui/button";

const AssignAssessment = () => {

  const assignments = [
    { id: 1, name: "Java - DSA - 3" },
    { id: 2, name: "Python - ML - 1" }
  ]

  return (
    <div className="min-h-screen bg-gradient-hero p-6 select-none">

      {/* Title */}
      <h1 className="text-3xl font-bold text-primary mb-8">
        Assign Assessment
      </h1>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-6 mb-10">

        <Card className="shadow-[var(--shadow-elegant)]">
          <CardContent className="flex justify-between items-center p-6">
            <div className="text-lg font-medium">
              Ongoing Assessments
            </div>

            <div className="bg-green-500 text-white px-6 py-2 rounded-md text-xl font-bold">
              29
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-[var(--shadow-elegant)]">
          <CardContent className="flex justify-between items-center p-6">
            <div className="text-lg font-medium">
              Not Assigned Assessments
            </div>

            <div className="bg-green-500 text-white px-6 py-2 rounded-md text-xl font-bold">
              12
            </div>
          </CardContent>
        </Card>

      </div>

      {/* Assignment Pool */}
      <h2 className="text-2xl font-bold text-primary mb-6">
        Assignment Pool
      </h2>

      <Card className="shadow-[var(--shadow-elegant)]">
        <CardContent className="p-6 space-y-4">

          {assignments.map((item) => (

            <div
              key={item.id}
              className="flex justify-between items-center border border-border rounded-md p-4"
            >

              <div className="text-lg font-medium">
                {item.name}
              </div>

              <div className="flex gap-4">

                <Button className="bg-orange-400 hover:bg-orange-500 text-white">
                  Assign
                </Button>

                <Button className="bg-red-500 hover:bg-red-600 text-white">
                  Delete
                </Button>

                <Button className="bg-green-500 hover:bg-green-600 text-white">
                  Status
                </Button>

              </div>

            </div>

          ))}

        </CardContent>
      </Card>

    </div>
  )
}

export default AssignAssessment