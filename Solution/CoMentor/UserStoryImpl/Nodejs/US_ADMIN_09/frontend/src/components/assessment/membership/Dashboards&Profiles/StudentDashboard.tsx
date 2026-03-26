import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const tests = [
  {
    id: 1,
    name: "Java Developer",
    date: "11-2-2026",
    time: "12:00 pm",
  },
  {
    id: 2,
    name: "C++ DSA",
    date: "26-2-2026",
    time: "3:00 pm",
  },
  {
    id: 3,
    name: "MERN Stack Dev",
    date: "2-3-2026",
    time: "1:00 pm",
  },
]

const StudentDashboard = () => {

  return (
    <div className="min-h-screen bg-gradient-hero flex flex-col">

      {/* Navbar */}
      <Navbar isLoggedIn />

      <div className="flex-1 pt-24 p-6">

        {/* Title */}
        <h1 className="text-3xl font-bold text-primary mb-8">
          Student Dashboard
        </h1>

        {/* Top Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">

          <Card className="bg-gradient-primary text-white shadow-[var(--shadow-elegant)]">
            <CardContent className="flex justify-between items-center p-6">
              <span className="text-xl font-semibold">
                Tests Assigned
              </span>

              <span className="text-3xl font-bold">
                3
              </span>
            </CardContent>
          </Card>

          <Card className="bg-gradient-primary text-white shadow-[var(--shadow-elegant)]">
            <CardContent className="flex justify-between items-center p-6">
              <span className="text-xl font-semibold">
                Level
              </span>

              <span className="text-xl font-bold">
                Intermediate
              </span>
            </CardContent>
          </Card>

        </div>

        {/* Upcoming Tests */}
        <h2 className="text-xl font-bold text-primary mb-4">
          Upcoming Tests
        </h2>

        <Card className="shadow-[var(--shadow-elegant)] mb-8">
          <CardContent className="p-6">

            <table className="w-full">

              <thead className="border-b">

                <tr className="text-left text-primary font-semibold">

                  <th className="py-3">Sr.No</th>
                  <th>Test</th>
                  <th>Date</th>
                  <th>Time</th>

                </tr>

              </thead>

              <tbody>

                {tests.map((test) => (

                  <tr key={test.id} className="border-b">

                    <td className="py-3">{test.id}</td>
                    <td>{test.name}</td>
                    <td>{test.date}</td>
                    <td>{test.time}</td>

                  </tr>

                ))}

              </tbody>

            </table>

          </CardContent>
        </Card>

        {/* View Scores Button */}
        <div className="flex justify-center">

          <Button
            size="lg"
            className="bg-primary text-white hover:bg-accent px-12"
          >
            View Past Scores
          </Button>

        </div>

      </div>

      {/* Footer */}
      <Footer />

    </div>
  )
}

export default StudentDashboard