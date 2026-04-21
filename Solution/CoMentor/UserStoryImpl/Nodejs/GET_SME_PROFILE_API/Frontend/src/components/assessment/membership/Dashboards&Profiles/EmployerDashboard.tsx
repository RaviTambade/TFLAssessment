import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom";

const jobs = [
  { id: 1, title: "Java Developer", shortlisted: 3 },
  { id: 2, title: "GET Intern", shortlisted: 10 },
  { id: 3, title: "MERN Stack Dev", shortlisted: 4 },
]

const EmployerDashboard = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gradient-hero flex flex-col">

      <Navbar isLoggedIn />

      <div className="flex-1 pt-24 p-6">

        {/* Title */}
        <h1 className="text-3xl font-bold text-primary mb-8">
          Employer Dashboard
        </h1>

        {/* Top Stats */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">

          <Card className="bg-gradient-primary text-white shadow-[var(--shadow-elegant)]">
            <CardContent className="flex justify-between items-center p-6">
              <span className="text-xl font-semibold">
                Job Description
              </span>

              <span className="text-3xl font-bold">
                13
              </span>
            </CardContent>
          </Card>

          <Card className="bg-gradient-primary text-white shadow-[var(--shadow-elegant)]">
            <CardContent className="flex justify-between items-center p-6">
              <span className="text-xl font-semibold">
                Shortlisted Students
              </span>

              <span className="text-3xl font-bold">
                17
              </span>
            </CardContent>
          </Card>

        </div>

        {/* Buttons */}
        <div className="flex gap-6 mb-8">

          <Button onClick={() => navigate("/models/membership/AddJobDescription")} variant="hero" size="lg" className="group">
              Add Job Description
          </Button>

          <Button onClick={() => navigate("")} variant="hero" size="lg" className="group">
              Manage Students
          </Button>

        </div>

        {/* Table */}
        <Card className="shadow-[var(--shadow-elegant)]">
          <CardContent className="p-6">

            <table className="w-full">

              <thead className="border-b">

                <tr className="text-left text-primary font-semibold">

                  <th className="py-3">Sr.No</th>
                  <th>Job Description</th>
                  <th>Shortlisted</th>

                </tr>

              </thead>

              <tbody>

                {jobs.map((job) => (

                  <tr key={job.id} className="border-b">

                    <td className="py-3">{job.id}</td>

                    <td>{job.title}</td>

                    <td>{job.shortlisted}</td>

                  </tr>

                ))}

              </tbody>

            </table>

          </CardContent>
        </Card>

      </div>

      <Footer />

    </div>
  )
}

export default EmployerDashboard